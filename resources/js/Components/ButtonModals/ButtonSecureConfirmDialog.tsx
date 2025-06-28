import React, {FormEvent} from "react";
import FormError from "@/Components/Errors/FormError";
import { useForm } from "@inertiajs/react";
import MainButton from "@/Components/Buttons/MainButton";

interface ButtonSecureConfirmDialog {
  modalId?: string;
  url: string;
  style?: "primary" | "danger";
  method: "post" | "put" | "delete" | "patch" | "get";
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  triggerLabel: string;
  icon?: React.ReactNode;
}

const SecureConfirmDialogProps: React.FC<ButtonSecureConfirmDialog> = ({
  modalId = "hs-modal",
  title,
  message,
  triggerLabel,
  icon,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  style = "primary",
  method,
  url,
}) => {
  const props = useForm({
    password: "",
  });
  const { errors, setData, reset, processing } = props;
  const options = {
    preserveScroll: true,
    onSuccess: () => closeModal(),
    // onError: () => passwordInput.value.focus(),
    onFinish: () => reset(),
  };
  const onConfirm = (e: FormEvent) => {
      e.preventDefault();

    if (method == "get") {
      props.get(url, options);
    }
    if (method == "post") {
      props.post(url, options);
    }
    if (method == "put") {
      props.put(url, options);
    }
    if (method == "patch") {
      props.patch(url, options);
    }
    if (method == "delete") {
      props.delete(url, options);
    }
  };

  const closeModal = () => {
    const modal = document.querySelector(`#${modalId}`);
    // @ts-ignore
    window.HSOverlay?.close(modal);
    reset();
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        type="button"
        className={`py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border
          border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50
          disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800
          dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 ${style == "danger" && "!text-red-500 !dark:text-red-400"}`}
        data-hs-overlay={`#${modalId}`}
      >
        {icon && <span className="text-lg">{icon}</span>}
        {triggerLabel}
      </button>

      {/* Modal */}
      <div
        id={modalId}
        className="hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none"
        role="dialog"
        tabIndex={-1}
        aria-labelledby={`${modalId}-label`}
      >
        <div className="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-56px)] flex items-center">
          <div className="w-full flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <div className="flex justify-between items-center py-3 px-4 border-b border-gray-200 dark:border-neutral-700">
              <h3 id={`${modalId}-label`} className="font-bold text-gray-800 dark:text-white">
                {title}
              </h3>
              <button
                type="button"
                className="size-8 inline-flex justify-center items-center rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
                data-hs-overlay={`#${modalId}`}
              >
                <span className="sr-only">{cancelLabel}</span>
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <div className="p-4 overflow-y-auto">
              <p className="mt-1 text-gray-800 dark:text-neutral-400">{message}</p>

              <div className="mt-4 max-w-sm">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium mb-2 dark:text-white"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  onChange={(e) => setData("password", e.target.value)}
                  className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="********"
                />
                {errors && <FormError message={errors.password} />}
              </div>
            </div>

            <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t border-gray-200 dark:border-neutral-700">
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                data-hs-overlay={`#${modalId}`}
              >
                {cancelLabel}
              </button>


                <MainButton title={confirmLabel} processing={processing} onClick={onConfirm}  paddindClassYX="py-2 px-3"
                            asType={"button"}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecureConfirmDialogProps;
