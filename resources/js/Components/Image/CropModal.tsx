// resources/js/components/analytics/CropModal.tsx
import React from "react";
import Cropper from "react-easy-crop";
import { TbX } from "react-icons/tb";

type Props = {
  title?: string;
  imageSrc: string | null;
  crop: { x: number; y: number };
  zoom: number;
  aspect: number;
  processing?: boolean;
  onClose: () => void;
  onSave: () => void;
  onCropChange: (c: { x: number; y: number }) => void;
  onZoomChange: (z: number) => void;
  onCropComplete: (croppedArea: any, croppedAreaPixels: any) => void;
};

export default function CropModal({
  title = "Resize image",
  imageSrc,
  crop,
  zoom,
  aspect,
  processing,
  onClose,
  onSave,
  onCropChange,
  onZoomChange,
  onCropComplete,
}: Props) {
  if (!imageSrc) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black/90">
      <div className="mb-4 flex items-center justify-between px-6 py-4 text-white border-b border-neutral-700">
        <TbX className="cursor-pointer text-xl" onClick={onClose} />
        <h2 className="font-semibold">{title}</h2>
        <button
          className="text-sm underline disabled:opacity-50"
          onClick={onSave}
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
            aspect={aspect}
            onCropChange={onCropChange}
            onZoomChange={onZoomChange}
            onCropComplete={onCropComplete}
          />
        </div>
      </div>
    </div>
  );
}
