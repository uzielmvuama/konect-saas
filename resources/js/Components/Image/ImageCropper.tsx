import React, {useCallback, useEffect, useState} from "react";
import {base64ToBlob, getCroppedImg, ucfirst} from "@/Utils/Functions/globals";
import Cropper from "react-easy-crop";
import {TbX} from "react-icons/tb";
import {ROOT_FILES_URL} from "@/Utils/Constants/constants";
import {useForm, usePage} from "@inertiajs/react";
import MainButtonModal from "@/Components/ButtonModals/MainButtonModal";
import {ImageUp, PenLine} from "lucide-react";
import "dropzone/dist/dropzone-min.js";


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
                          initialImage, type = "profile", onImageCropped, translations,
                      }: ImageCropperProps) => {
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [crop, setCrop] = useState({x: 0, y: 0});
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
    const [isVisible, setIsVisible] = useState(false);

    const aspectRatio = type === "profile" ? 1 : 16 / 9;

    const {user} = usePage().props as any;

    const { data, setData, post, progress } = useForm({
        cover: new Blob(),
        profile: new Blob(),
    })

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>, modalIdKey: string) => {
        closeModal(modalIdKey);
        const file = e.target.files?.[0];
        if (file) {
            const imageDataUrl = await readFile(file);
            setImageSrc(imageDataUrl as string);
            setIsVisible(true);
        }
    };

    const closeModal = (modalIdKey: string) => {
        const modal = document.querySelector(`#hs-${modalIdKey}`);

        // @ts-ignore
        window.HSOverlay?.close(modal);
    };

    const onCropComplete = useCallback((_: any, croppedPixels: any) => {
        setCroppedAreaPixels(croppedPixels);
    }, []);

    const handleSave = async () => {
        if (imageSrc && croppedAreaPixels) {
            const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
            const blob: Blob = base64ToBlob(croppedImage);
            onImageCropped!(blob, croppedImage);
           saveAvatarImage(blob);
            setImageSrc(null);
            setIsVisible(false);
        }
    };

    const saveAvatarImage = async (blob : Blob) => {
        setData('profile', blob);
        post('/media/profile')
    }

    return (<div>
        <>

            {/* Cover */}
            <div className="">
                <div
                    className="relative flex w-full">
                    {/* SVG Background Element */}
                    <figure className="w-full">
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
                                <rect x="0.5" width="1112" height="161" rx="12" fill="white"/>
                                <rect x="1" width="1112" height="348" fill="#D9DEEA"/>
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
                                        <rect x="0.5" width="1112" height="161" rx="12" fill="white"/>
                                    </clipPath>
                                </defs>
                            </g>
                        </svg>
                    </figure>
                    {/* End SVG Background Element */}

                    <div className="absolute top-4 end-4">
                        <MainButtonModal
                            btnIcon={<PenLine width={13} height={13}/>}
                            modalId={"cover"}
                            btnContainerClass={"group p-2 max-w-[125px] inline-flex justify-center items-center" + " gap-x-1.5 text-start bg-white border border-gray-200 text-gray-800 text-xs font-medium rounded-full whitespace-nowrap shadow-2xs align-middle hover:bg-gray-50 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"}
                        >
                            lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis orci quis diam
                        </MainButtonModal>
                    </div>
                </div>
            </div>
            {/* End Cover */}


            {/* Avatar */}
            <div className="-mt-24">
                <div
                    className="relative flex size-30 mx-auto border-4 border-white rounded-full dark:border-neutral-800">
                    {initialImage || imageSrc ? (<img
                        className="object-cover size-full rounded-full"
                        src={imageSrc ? imageSrc : `${ROOT_FILES_URL}/${initialImage}`}
                        alt="Avatar"
                    />) : (<span
                        className="inline-flex items-center justify-center size-full rounded-full bg-gray-500 text-lg font-semibold text-white">
                AC
              </span>)}

                    <div className="absolute bottom-0 -end-2">
                        <MainButtonModal
                            btnIcon={<PenLine width={13} height={13}/>}
                            modalId={"avatar"}
                            showConfirmButton={false}
                            btnContainerClass={"group p-2 max-w-[125px] inline-flex justify-center items-center" + " gap-x-1.5 text-start bg-white border border-gray-200 text-gray-800 text-xs font-medium rounded-full whitespace-nowrap shadow-2xs align-middle hover:bg-gray-50 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"}
                        >
                            {/* Preview Avatar */}
                            <div className="flex flex-col items-center justify-center space-x-0 px-8 pb-8 pt-5 md:flex-row md:justify-start md:space-x-8">
                                <div className="flex size-24 justify-center overflow-hidden rounded-xl">
                                    {initialImage || imageSrc ? (<img
                                        className="object-cover size-full rounded-full"
                                        src={imageSrc ? imageSrc : `${ROOT_FILES_URL}/${initialImage}`}
                                        alt="Avatar"
                                    />) : (<span
                                        className="inline-flex items-center justify-center size-full rounded-full bg-gray-500 text-lg font-semibold text-white">
                AC
              </span>)}
                                </div>

                                <div className="mt-4 md:mt-0">
                                    <div className="flex flex-col items-center md:items-start">
                                        <div className="flex text-sm w-max cursor-pointer items-center space-x-1 rounded-md border border-neutral-300/30 bg-gray-50 dark:bg-neutral-900 px-4 py-1 transition-colors hover:text-gray-300 text-gray-400">
                                            <label htmlFor="file-upload" className="cursor-pointer font-normal flex gap-x-2 items-center ">
                                                <ImageUp width={15} height={15}/> {translations.Text.choose_image}
                                            </label>
                                        </div>
                                        <input
                                            type="file"
                                            id="file-upload"
                                            accept="image/jpeg,image/png"
                                            className="hidden"
                                            onChange={((e:React.ChangeEvent<HTMLInputElement>) => handleFileChange(e, "avatar"))}
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
                    <p className="text-gray-500 dark:text-neutral-500">{user.email} </p>
                </div>
            </div>
            {/* End Avatar */}
        </>


        {/* Cropper */}
        {isVisible && imageSrc && (<div className="fixed inset-0 z-50 flex flex-col bg-black bg-opacity-90">
            <div
                className="mb-4 flex items-center justify-between px-6 py-4 text-white border-b border-neutral-700">
                <TbX className="cursor-pointer text-xl" onClick={() => setIsVisible(false)}/>
                <h2 className="font-semibold">Resize image</h2>
                <button className="text-sm underline" onClick={handleSave}>
                    Save
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
        </div>)}
    </div>);
};

const readFile = (file: File): Promise<string | ArrayBuffer | null> => {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(file);
    });
};

export default ImageCropper;
