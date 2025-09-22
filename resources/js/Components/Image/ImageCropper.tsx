import React, { useCallback, useState } from "react";
import Cropper from "react-easy-crop";
import { TbX } from "react-icons/tb";
import { ImageUp, PenLine } from "lucide-react";
import { useForm, usePage } from "@inertiajs/react";

import MainButtonModal from "@/Components/ButtonModals/MainButtonModal";
import { ROOT_FILES_URL } from "@/Utils/Constants/constants";
import { base64ToBlob, getCroppedImg, ucfirst } from "@/Utils/Functions/globals";

type ImageType = "profile" | "background";

interface ImageCropperProps {
  initialImage?: string;
  type: ImageType;
  onImageCropped?: (blob: Blob, base64: string) => void;
  translations: {
    Text: {
      choose_image: string;
    };
  };
}

const ImageCropper = ({
  initialImage,
  type = "profile",
  onImageCropped,
  translations,
}: ImageCropperProps) => {
  const { user, medias, sftp_root_path } = usePage().props as any;
    console.log(medias, sftp_root_path)


    // --- UI state
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  // On mémorise nom/type de l'image source pour recréer un File cohérent
  const [sourceName, setSourceName] = useState<string>("image.jpg");
  const [sourceType, setSourceType] = useState<string>("image/jpeg");

  const aspectRatio = type === "profile" ? 1 : 16 / 9;

  // --- Inertia form
  const { data, setData, post, progress, errors, reset, processing, transform } = useForm<{
    cover: File | null;
    profile: File | null;
  }>({
    cover: null,
    profile: null,
  });

  // --- helpers
  const readFile = (file: File): Promise<string | ArrayBuffer | null> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(file);
    });
  };

  const closeModal = (modalIdKey: string) => {
    const modal = document.querySelector<HTMLElement>(`#hs-${modalIdKey}`);
    // @ts-ignore
    window.HSOverlay?.close?.(modal);
  };

  // --- events
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>, modalIdKey: string) => {
    closeModal(modalIdKey);
    const file = e.target.files?.[0];
    if (!file) return;

    // mémoriser nom & type
    setSourceName(file.name || "image.jpg");
    setSourceType(file.type || "image/jpeg");

    const imageDataUrl = await readFile(file);
    setImageSrc(imageDataUrl as string);
    setIsVisible(true);
    // reset l’input file (optionnel) pour pouvoir re-sélectionner le même fichier
    e.target.value = "";
  };

  const onCropComplete = useCallback((_: any, croppedPixels: any) => {
    setCroppedAreaPixels(croppedPixels);
  }, []);

  // Convertit le base64 du crop en File correct
  const blobToFile = (blob: Blob, filename: string, type?: string) => {
    const fileType = type || blob.type || "image/jpeg";
    return new File([blob], filename, { type: fileType });
  };

  const handleSave = async () => {
    if (!imageSrc || !croppedAreaPixels) return;

    // getCroppedImg doit renvoyer un base64 dataURL
    const croppedBase64 = await getCroppedImg(imageSrc, croppedAreaPixels);
    const blob: Blob = base64ToBlob(croppedBase64);

    // petite vérif locale : éviter d’envoyer un blob vide
    if (!blob || blob.size < 10 * 1024) {
      alert("L'image recadrée semble trop petite. Réessaie avec une résolution plus grande.");
      return;
    }

    // créer un File avec nom + type
    const safeName =
      sourceName && /\.[a-z]{2,4}$/i.test(sourceName)
        ? sourceName
        : type === "profile"
          ? "avatar.jpg"
          : "cover.jpg";

    const mime = sourceType && sourceType.startsWith("image/") ? sourceType : "image/jpeg";

    const file = blobToFile(blob, safeName, mime);

    if (file) {
      const url = type === "profile" ? "/media/profile" : "/media/cover";

      transform((data) => {
        // data est une copie sérialisable de ton form
        // On injecte le File directement ici
        return {
          ...data,
          [type]: file, // <- on force le fichier dans la payload
        };
      });
      post(url, {
        forceFormData: true,
        preserveScroll: true,
        onSuccess: () => {
          setIsVisible(false);
          reset("cover");
          reset("profile");
          if (onImageCropped) {
            onImageCropped(blob, croppedBase64);
          }
        },
      });
    }
  };

  return (
    <div>
      <>
        {/* Cover */}
        <div className="">
          <div className="relative flex w-full">
            <figure className="w-full">
              {/* ton SVG */}
              <svg
                className="w-full"
                preserveAspectRatio="none"
                width="1113"
                height="161"
                viewBox="0 0 1113 161"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_666_220723)">
                  <rect x="0.5" width="1112" height="161" rx="12" fill="white" />
                  <rect x="1" width="1112" height="348" fill="#D9DEEA" />
                  <path
                    d="M512.694 359.31C547.444 172.086 469.835 34.2204 426.688 -11.3096H1144.27V359.31H512.694Z"
                    fill="#C0CBDD"
                  />
                  <path
                    d="M818.885 185.745C703.515 143.985 709.036 24.7949 726.218 -29.5801H1118.31V331.905C1024.49 260.565 963.098 237.945 818.885 185.745Z"
                    fill="#8192B0"
                  />
                  <defs>
                    <clipPath id="clip0_666_220723">
                      <rect x="0.5" width="1112" height="161" rx="12" fill="white" />
                    </clipPath>
                  </defs>
                </g>
              </svg>
            </figure>

            <div className="absolute top-4 end-4">
              <MainButtonModal
                btnIcon={<PenLine width={13} height={13} />}
                modalId={"cover"}
                btnContainerClass={
                  "group p-2 max-w-[125px] inline-flex justify-center items-center" +
                  " gap-x-1.5 text-start bg-white border border-gray-200 text-gray-800 text-xs font-medium rounded-full whitespace-nowrap shadow-2xs align-middle hover:bg-gray-50 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                }
              >
                {/* Choisir une image de couverture */}
                <div className="flex items-center">
                  <label
                    htmlFor="file-upload-cover"
                    className="cursor-pointer font-normal flex gap-x-2 items-center"
                  >
                    <ImageUp width={15} height={15} /> {translations.Text.choose_image}
                  </label>
                  <input
                    type="file"
                    id="file-upload-cover"
                    accept="image/jpeg,image/png,image/webp"
                    className="hidden"
                    onChange={(e) => handleFileChange(e, "cover")}
                  />
                </div>
              </MainButtonModal>
            </div>
          </div>
        </div>
        {/* End Cover */}

        {/* Avatar */}
        <div className="-mt-24">
          <div className="relative flex size-30 mx-auto border-4 border-white rounded-full dark:border-neutral-800">
            {initialImage || imageSrc ? (
              <img
                className="object-cover size-full rounded-full"
                src={imageSrc ? imageSrc : `${sftp_root_path}/${initialImage}`}
                alt="Avatar"
              />
            ) : (
                <img
                    className="object-cover size-full rounded-full"
                    src="/assets/images/icons/user.jpg"
                    alt="Avatar"
                />
            )}

            <div className="absolute bottom-0 -end-2">
              <MainButtonModal
                btnIcon={<PenLine width={13} height={13} />}
                modalId={"avatar"}
                showConfirmButton={false}
                btnContainerClass={
                  "group p-2 max-w-[125px] inline-flex justify-center items-center" +
                  " gap-x-1.5 text-start bg-white border border-gray-200 text-gray-800 text-xs font-medium rounded-full whitespace-nowrap shadow-2xs align-middle hover:bg-gray-50 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                }
              >
                {/* Preview Avatar */}
                <div className="flex flex-col items-center justify-center space-x-0 px-8 pb-8 pt-5 md:flex-row md:justify-start md:space-x-8">
                  <div className="flex size-24 justify-center overflow-hidden rounded-xl">
                    {initialImage || imageSrc ? (
                      <img
                        className="object-cover size-full rounded-full"
                        src={imageSrc ? imageSrc : `${sftp_root_path}/${initialImage}`}
                        alt="Avatar"
                      />
                    ) : (
                        <img
                            className="object-cover size-full rounded-full"
                            src="/assets/images/icons/user.jpg"
                            alt="Avatar"
                        />
                    )}
                  </div>

                  <div className="mt-4 md:mt-0">
                    <div className="flex flex-col items-center md:items-start">
                      <div className="flex text-sm w-max cursor-pointer items-center space-x-1 rounded-md border border-neutral-300/30 bg-gray-50 dark:bg-neutral-900 px-4 py-1 transition-colors hover:text-gray-300 text-gray-400">
                        <label
                          htmlFor="file-upload-avatar"
                          className="cursor-pointer font-normal flex gap-x-2 items-center "
                        >
                          <ImageUp width={15} height={15} /> {translations.Text.choose_image}
                        </label>
                      </div>
                      <input
                        type="file"
                        id="file-upload-avatar"
                        accept="image/jpeg,image/png,image/webp"
                        className="hidden"
                        onChange={(e) => handleFileChange(e, "avatar")}
                      />
                    </div>
                  </div>
                </div>
              </MainButtonModal>
            </div>
          </div>

          <div className="mt-3 text-center">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
              {ucfirst(user.firstname) + " " + ucfirst(user.name)}
            </h1>
            <p className="text-gray-500 dark:text-neutral-500">{user.email}</p>
          </div>
        </div>
        {/* End Avatar */}
      </>

      {/* Cropper overlay */}
      {isVisible && imageSrc && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black/90">
          <div className="mb-4 flex items-center justify-between px-6 py-4 text-white border-b border-neutral-700">
            <TbX className="cursor-pointer text-xl" onClick={() => setIsVisible(false)} />
            <h2 className="font-semibold">Resize image</h2>
            <button
              className="text-sm underline disabled:opacity-50"
              onClick={handleSave}
              disabled={processing}
            >
              {processing ? "Saving..." : "Save"}
            </button>
          </div>
          <div className="flex-grow flex justify-center items-center">
            <div className="relative h-[500px] w-full md:w-[700px] bg-neutral-900 rounded-md">
              <Cropper
                image={imageSrc}
                crop={crop}
                zoom={zoom}
                aspect={aspectRatio}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />
            </div>
          </div>
        </div>
      )}

      {/* Affichage d’erreurs backend (optionnel) */}
      {(errors.profile || errors.cover) && (
        <p className="mt-2 text-sm text-red-600">{errors.profile || errors.cover}</p>
      )}

      {/* Progress upload (optionnel) */}
      {progress && <div className="mt-2 text-xs text-gray-500">{progress.percentage}%</div>}
    </div>
  );
};

export default ImageCropper;
