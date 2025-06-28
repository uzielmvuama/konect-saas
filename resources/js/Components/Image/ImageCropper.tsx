import React, { useState, useCallback } from "react";
import { base64ToBlob, getCroppedImg, ucfirst } from "@/Utils/Functions/globals";
import Cropper from "react-easy-crop";
import { TbEdit, TbX } from "react-icons/tb";
import { ROOT_FILES_URL } from "@/Utils/Constants/constants";
import { usePage } from "@inertiajs/react";

type ImageType = "profile" | "background";

interface ImageCropperProps {
  initialImage?: string;
  type: ImageType;
  onImageCropped: (blob: Blob, base64: string) => void;
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
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  const aspectRatio = type === "profile" ? 1 : 16 / 9;

  const { user } = usePage().props as any;

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageDataUrl = await readFile(file);
      setImageSrc(imageDataUrl as string);
      setIsVisible(true);
    }
  };

  const onCropComplete = useCallback((_: any, croppedPixels: any) => {
    setCroppedAreaPixels(croppedPixels);
  }, []);

  const handleSave = async () => {
    if (imageSrc && croppedAreaPixels) {
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
      const blob = base64ToBlob(croppedImage);
      onImageCropped(blob, croppedImage);
      setImageSrc(null);
      setIsVisible(false);
    }
  };

  return (
    <div>
      <>
        {/* SVG Background Element */}
        <figure>
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
        {/* End SVG Background Element */}

        {/* Avatar */}
        <div className="-mt-24">
          <div className="relative flex size-30 mx-auto border-4 border-white rounded-full dark:border-neutral-800">
            {initialImage || imageSrc ? (
              <img
                className="inline-block size-15.5 rounded-full"
                src={imageSrc ? imageSrc : `${ROOT_FILES_URL}/${initialImage}`}
                alt="Avatar"
              />
            ) : (
              <span className="inline-flex items-center justify-center size-15.5 rounded-full bg-gray-500 text-lg font-semibold text-white">
                AC
              </span>
            )}

            <div className="absolute bottom-0 -end-2">
              <button
                type="button"
                className="group p-2 max-w-[125px] inline-flex justify-center items-center gap-x-1.5 text-start bg-white border border-gray-200 text-gray-800 text-xs font-medium rounded-full whitespace-nowrap shadow-2xs align-middle hover:bg-gray-50 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                data-hs-overlay="#hs-pro-dsm"
              >
                <svg
                  className="shrink-0 size-4 text-gray-500 dark:text-neutral-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" x2="9.01" y1="9" y2="9" />
                  <line x1="15" x2="15.01" y1="9" y2="9" />
                </svg>
                <span className="group-hover:block hidden">Set status</span>
              </button>
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
      {/* Preview Avatar */}
      <div className="flex flex-col items-center justify-center space-x-0 px-8 pb-8 pt-5 md:flex-row md:justify-start md:space-x-8">
        <div className="flex h-40 w-40 justify-center overflow-hidden rounded-xl">
          {initialImage || imageSrc ? (
            <Avatar
              img={imageSrc ? imageSrc : `${ROOT_FILES_URL}/${initialImage}`}
              size={"pxl"}
              alt="Preview"
            />
          ) : (
            <Avatar size={"pxl"} />
          )}
        </div>

        <div className="mt-4 md:mt-0">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex w-max cursor-pointer items-center space-x-1 rounded-md border border-gray-300/40 bg-gray-50 px-4 py-1 text-gray-500 transition-colors hover:text-gray-600">
              <Label htmlFor="file-upload" className="cursor-pointer font-normal">
                <TbEdit /> {translations.Text.choose_image}
              </Label>
            </div>
            <FileInput
              id="file-upload"
              accept="image/jpeg,image/png"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        </div>
      </div>

      {/* Cropper */}
      {isVisible && imageSrc && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black bg-opacity-90">
          <div className="mb-4 flex items-center justify-between px-6 py-4 text-white border-b border-neutral-700">
            <TbX className="cursor-pointer text-xl" onClick={() => setIsVisible(false)} />
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
        </div>
      )}
    </div>
  );
};

const readFile = (file: File): Promise<string | ArrayBuffer | null> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(file);
  });
};

export default ImageCropper;
