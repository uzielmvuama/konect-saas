// resources/js/components/analytics/AvatarUploader.tsx
import React from "react";
import { PenLine, ImageUp } from "lucide-react";
import { ucfirst } from "@/Utils/Functions/globals";
import { useImageCropUpload } from "@/Hooks/useImageCropUpload";
import CropModal from "./CropModal";
import MainButtonModal from "@/Components/ButtonModals/MainButtonModal";

type Props = {
  initialImage?: string | null; // chemin côté serveur (sftp_root_path + initialImage)
  sftpRootPath?: string; // props.sftp_root_path
  user: { firstname: string; name: string; email: string };
};

export default function AvatarUploader({ initialImage, sftpRootPath = "", user }: Props) {
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
    type: "profile",
    aspect: 1,
    uploadUrl: "/media/profile",
  });

  const closeModal = (modalIdKey: string) => {
    const modal = document.querySelector<HTMLElement>(`#hs-${modalIdKey}`);
    // @ts-ignore
    window.HSOverlay?.close?.(modal);
  };

  const currentImg = imageSrc
    ? imageSrc
    : initialImage
      ? `${sftpRootPath}/${initialImage}`
      : "/assets/images/icons/user.jpg";

  return (
    <div className="-mt-24">
      <div className="relative flex size-30 mx-auto border-4 border-white rounded-full dark:border-neutral-800">
        <img className="object-cover size-full rounded-full" src={currentImg} alt="Avatar" />

        <div className="absolute bottom-0 -end-2">
          <MainButtonModal
            btnIcon={<PenLine width={13} height={13} />}
            modalId={"avatar"}
            showConfirmButton={false}
            btnContainerClass={
              "group p-2 max-w-[125px] inline-flex justify-center items-center gap-x-1.5 text-start " +
              "bg-white border border-gray-200 text-gray-800 text-xs font-medium rounded-full " +
              "whitespace-nowrap shadow-2xs align-middle hover:bg-gray-50 focus:outline-hidden " +
              "focus:bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 " +
              "dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            }
          >
            {/* Preview */}
            <div className="flex flex-col items-center justify-center space-x-0 px-8 pb-8 pt-5 md:flex-row md:justify-start md:space-x-8">
              <div className="flex size-24 justify-center overflow-hidden rounded-xl">
                <img
                  className="object-cover size-full rounded-full"
                  src={currentImg}
                  alt="Avatar"
                />
              </div>

              <div className="mt-4 md:mt-0">
                <div className="flex flex-col items-center md:items-start">
                  <div className="flex text-sm w-max cursor-pointer items-center space-x-1 rounded-md border border-neutral-300/30 bg-gray-50 dark:bg-neutral-900 px-4 py-1 transition-colors hover:text-gray-300 text-gray-400">
                    <label
                      htmlFor="file-upload-avatar"
                      className="cursor-pointer font-normal flex gap-x-2 items-center"
                    >
                      <ImageUp width={15} height={15} /> {"Choose image"}
                    </label>
                  </div>
                  <input
                    type="file"
                    id="file-upload-avatar"
                    accept="image/jpeg,image/png,image/webp"
                    className="hidden"
                    onChange={(e) => {
                      handleFileChange(e).then((r) => closeModal("avatar"));
                    }}
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
        <p className="mt-2 text-sm text-red-600">
          {(errors as any).profile || (errors as any).cover}
        </p>
      )}
      {progress && <div className="mt-2 text-xs text-gray-500">{progress.percentage}%</div>}
    </div>
  );
}
