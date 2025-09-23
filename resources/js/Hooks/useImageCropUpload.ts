// resources/js/hooks/useImageCropUpload.ts
import { useCallback, useState } from 'react';
import { useForm } from '@inertiajs/react';
import { base64ToBlob, getCroppedImg } from '@/Utils/Functions/globals';

type UploadType = 'profile' | 'cover';

type UseImageCropUploadOptions = {
    type: UploadType;                 // 'profile' | 'cover'
    aspect: number;                   // 1 ou 16/9
    uploadUrl: string;                // '/media/profile' | '/media/cover'
    onDone?: (blob: Blob, base64: string) => void;
    minBlobSizeBytes?: number;        // garde la même vérif que ton code
};

export function useImageCropUpload(opts: UseImageCropUploadOptions) {
    const {
        type,
        aspect,
        uploadUrl,
        onDone,
        minBlobSizeBytes = 10 * 1024, // 10 KB (comme dans ton code)
    } = opts;

    // --- UI state (identique à ton composant)
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [crop, setCrop] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
    const [isVisible, setIsVisible] = useState(false);

    // mémoriser nom/type de l'image source pour re-créer un File cohérent
    const [sourceName, setSourceName] = useState<string>('image.jpg');
    const [sourceType, setSourceType] = useState<string>('image/jpeg');

    // --- Inertia form (on garde la même structure avec cover/profile)
    const { post, progress, errors, reset, processing, transform } = useForm<{
        cover: File | null;
        profile: File | null;
    }>({
        cover: null,
        profile: null,
    });

    // Helpers
    const readFile = (file: File): Promise<string> =>
        new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => resolve(String(reader.result));
            reader.readAsDataURL(file);
        });

    const onCropComplete = useCallback((_: any, croppedPixels: any) => {
        setCroppedAreaPixels(croppedPixels);
    }, []);

    const blobToFile = (blob: Blob, filename: string, typeHint?: string) =>
        new File([blob], filename, { type: typeHint || blob.type || 'image/jpeg' });

    // Events
    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setSourceName(file.name || 'image.jpg');
        setSourceType(file.type || 'image/jpeg');

        const imageDataUrl = await readFile(file);
        setImageSrc(imageDataUrl);
        setIsVisible(true);
        // reset l’input (permet de re-choisir le même fichier)
        e.target.value = '';
    };

    const handleSave = async () => {
        if (!imageSrc || !croppedAreaPixels) return;

        // identique à ton code : getCroppedImg -> base64 -> blob -> File
        const croppedBase64 = await getCroppedImg(imageSrc, croppedAreaPixels);
        const blob: Blob = base64ToBlob(croppedBase64);

        if (!blob || blob.size < minBlobSizeBytes) {
            alert("L'image recadrée semble trop petite. Réessaie avec une résolution plus grande.");
            return;
        }

        const safeName =
            sourceName && /\.[a-z]{2,4}$/i.test(sourceName)
                ? sourceName
                : type === 'profile'
                    ? 'avatar.jpg'
                    : 'cover.jpg';

        const mime = sourceType?.startsWith('image/') ? sourceType : 'image/jpeg';
        const file = blobToFile(blob, safeName, mime);

        transform((data) => ({
            ...data,
            [type]: file, // on conserve ta logique: clé = 'profile' ou 'cover'
        }));

        post(uploadUrl, {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => {
                setIsVisible(false);
                reset('cover');
                reset('profile');
                onDone?.(blob, croppedBase64);
            },
        });
    };

    return {
        // state / API pour la vue
        imageSrc,
        crop,
        zoom,
        aspect,
        isVisible,
        processing,
        progress,
        errors,
        setCrop,
        setZoom,
        setIsVisible,
        onCropComplete,
        handleFileChange,
        handleSave,
    };
}
