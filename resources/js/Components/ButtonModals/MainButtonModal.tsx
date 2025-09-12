import React, { ReactNode } from "react";

type ModalSize = "sm" | "md" | "lg";

interface MainButtonModalProps {
  btnIcon?: ReactNode;
  btnTitle?: string;
  btnContainerClass?: string;
  modalSize?: ModalSize;
  modalTitle?: string;
  modalCentered?: boolean;
  children?: React.ReactNode;
  modalId?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  showCancelButton?: boolean;
  showConfirmButton?: boolean;
}

const sizeConfig: Record<ModalSize, string> = {
  sm: "sm:max-w-lg sm:w-full",
  md: "md:max-w-2xl md:w-full",
  lg: "lg:max-w-4xl lg:w-full",
};

const MainButtonModal: React.FC<MainButtonModalProps> = ({
  btnIcon,
  btnTitle,
  btnContainerClass,
  modalSize = "md",
  modalTitle = "Modal title",
  modalId = "",
  modalCentered = true,
  cancelLabel = "Cancel",
  confirmLabel = "Save changes",
  showCancelButton = true,
  showConfirmButton = true,
  children,
}) => {
  const modalIdKey = `hs-${modalId}`;

  return (
    <div>
      {/* Composant MainButtonModal */}
      <button
        type="button"
        className={`flex items-center justify-center disabled:pointer-events-none ${btnContainerClass}`}
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls={modalIdKey}
        data-hs-overlay={`#${modalIdKey}`}
      >
        {btnIcon && <i>{btnIcon}</i>}
        {btnTitle && <span>{btnTitle}</span>}
      </button>

      <div
        id={modalIdKey}
        className="hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none"
        role="dialog"
        tabIndex={-1}
        aria-labelledby={`${modalIdKey}-label`}
      >
        <div
          className={`hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all ${sizeConfig[modalSize]} m-3 mx-auto ${modalCentered ? " min-h-[calc(100%-56px)] flex items-center" : ""}`}
        >
          <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70 w-full">
            <div className="flex justify-between items-center py-3 px-4 border-b border-gray-200 dark:border-neutral-700">
              <h3 id={`${modalIdKey}-label`} className="font-bold text-gray-800 dark:text-white">
                {modalTitle}
              </h3>
              <button
                type="button"
                className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
                aria-label="Close"
                data-hs-overlay={`#${modalIdKey}`}
              >
                <span className="sr-only">Close</span>
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <div className="p-4 overflow-y-auto">{children && children}</div>

            <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t border-gray-200 dark:border-neutral-700">
              {showCancelButton && (
                <button
                  type="button"
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  data-hs-overlay={`#${modalIdKey}`}
                >
                  {cancelLabel}
                </button>
              )}
              {showConfirmButton && (
                <button
                  type="button"
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {confirmLabel}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainButtonModal;
