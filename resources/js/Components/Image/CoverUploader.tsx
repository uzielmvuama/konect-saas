// resources/js/components/analytics/CoverUploader.tsx
import React from "react";
import { PenLine, ImageUp } from "lucide-react";
import MainButtonModal from "@/Components/ButtonModals/MainButtonModal";
import { useImageCropUpload } from "@/Hooks/useImageCropUpload";
import CropModal from "./CropModal";

type Props = {
  initialCover?: string | null; // chemin côté serveur si tu veux l’afficher
  sftpRootPath?: string;
};

export default function CoverUploader({ initialCover, sftpRootPath = "" }: Props) {
  const {
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
  } = useImageCropUpload({
    type: "cover",
    aspect: 16 / 9,
    uploadUrl: "/media/cover",
  });

  const coverUrl = imageSrc
    ? imageSrc
    : initialCover
      ? `${sftpRootPath}/${initialCover}`
      : undefined;

  return (
    <div className="relative flex w-full">
      <figure className="w-full">
        {/* ton SVG de cover par défaut */}
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

        {/* si tu veux superposer une cover existante */}
        {coverUrl && (
          <img
            src={coverUrl}
            alt="Cover"
            className="absolute inset-0 w-full h-full object-cover rounded-[12px] pointer-events-none"
            style={{ clipPath: "inset(0)" }}
          />
        )}
      </figure>

      <div className="absolute top-4 end-4">
        <MainButtonModal
          btnIcon={<PenLine width={13} height={13} />}
          modalId={"cover"}
          btnContainerClass={
            "group p-2 max-w-[125px] inline-flex justify-center items-center gap-x-1.5 text-start " +
            "bg-white border border-gray-200 text-gray-800 text-xs font-medium rounded-full whitespace-nowrap " +
            "shadow-2xs align-middle hover:bg-gray-50 focus:outline-hidden focus:bg-gray-100 " +
            "dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
          }
        >
          <div className="flex items-center">
            <label
              htmlFor="file-upload-cover"
              className="cursor-pointer font-normal flex gap-x-2 items-center"
            >
              <ImageUp width={15} height={15} /> {"Choose image"}
            </label>
            <input
              type="file"
              id="file-upload-cover"
              accept="image/jpeg,image/png,image/webp"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        </MainButtonModal>
      </div>

      {/* Crop modal */}
      {isVisible && imageSrc && (
        <CropModal
          title="Resize image"
          imageSrc={imageSrc}
          crop={crop}
          zoom={zoom}
          aspect={aspect}
          processing={processing}
          onClose={() => setIsVisible(false)}
          onSave={handleSave}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
        />
      )}

      {(errors.profile || errors.cover) && (
        <p className="mt-2 text-sm text-red-600 absolute bottom-2 left-2 bg-white/80 px-2 rounded">
          {(errors as any).profile || (errors as any).cover}
        </p>
      )}
      {progress && (
        <div className="mt-2 text-xs text-gray-500 absolute bottom-2 right-2 bg-white/80 px-2 rounded">
          {progress.percentage}%
        </div>
      )}
    </div>
  );
}
