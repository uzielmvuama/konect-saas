import React from "react";

interface DismissibleAlertInterface {
  title: string;
  description: string;
  isShowed?: boolean;
}

const DismissibleAlert: React.FC<DismissibleAlertInterface> = ({
  title,
  description,
  isShowed = true,
}) => {
  return (
    isShowed && (
      <div
        id="hs-pro-shchal"
        className="mb-5 p-4 sm:ps-16 relative overflow-hidden bg-linear-to-r from-orange-100 via-purple-200 via-70% to-indigo-200 rounded-lg dark:from-orange-800 dark:via-purple-800 dark:to-indigo-800"
        role="alert"
        tabIndex={-1}
        aria-labelledby="hs-pro-shchal-label"
      >
        <div className="flex items-center gap-x-3">
          <div className="hidden sm:block absolute -bottom-4 -start-6">
            <span className="text-6xl">🚀</span>
          </div>
          <div className="grow">
            <h4 id="hs-pro-shchal-label" className="font-medium text-orange-700 dark:text-white">
              {title}
            </h4>
            <p className="mt-1 text-xs text-gray-800 dark:text-neutral-200">{description}</p>
          </div>
          <button
            type="button"
            className="size-7 inline-flex justify-center items-center gap-x-1 rounded-full text-xs border border-transparent text-gray-800 hover:bg-indigo-300 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-indigo-300 dark:text-purple-300 dark:hover:bg-indigo-700 dark:focus:bg-indigo-700"
            data-hs-remove-element="#hs-pro-shchal"
          >
            <svg
              className="shrink-0 size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
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
            <span className="sr-only">Remove</span>
          </button>
        </div>
      </div>
    )
  );
};

export default DismissibleAlert;
