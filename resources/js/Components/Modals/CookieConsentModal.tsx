import { useEffect, useState } from "react";
import { HSOverlay } from "preline";

const CookieConsentModal = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("konect_cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  useEffect(() => {
    const onLoad = () => {
      setTimeout(() => {
        const overlays = document.querySelectorAll(".hs-overlay");
        overlays.forEach((el) => {
          HSOverlay.open(el as HTMLElement); // typé pour éviter TS error
        });
      }, 100); // délai si nécessaire
    };

    // On écoute l'événement load une seule fois
    window.addEventListener("load", onLoad);

    // Nettoyage à la destruction du composant
    return () => {
      window.removeEventListener("load", onLoad);
    };
  }, []);

  const handleAccept = () => {
    localStorage.setItem("konect_cookie_consent", "true");
    setVisible(false);
  };

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-60 w-full flex justify-center items-center mx-auto p-6 bg-gray-100/50 dark:bg-neutral-800/60">
      {/* Card */}
      <div className="bg-white rounded-xl sm:max-w-lg  shadow-2xl dark:bg-neutral-900 dark:shadow-black/70">
        <div className="p-4 md:p-6 h-120 overflow-x-hidden overflow-y-auto">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-neutral-200">
            Allow the use of cookies?
          </h2>

          <p className="mt-3 text-sm text-gray-800 dark:text-neutral-200">
            We use cookies and similar technologies to help:
          </p>

          <div className="mt-4 space-y-5">
            {/* Icon Block */}
            <div className="flex gap-x-5">
              <svg
                className="shrink-0 mt-1 size-5 text-gray-800 dark:text-neutral-200"
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
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <div className="grow">
                <p className="text-sm text-gray-800 dark:text-neutral-200">
                  Provide and improve content on Htmlstream Products
                </p>
              </div>
            </div>
            {/* End Icon Block */}

            {/* Icon Block */}
            <div className="flex gap-x-5">
              <svg
                className="shrink-0 mt-1 size-5 text-gray-800 dark:text-neutral-200"
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
                <path d="m3 11 18-5v12L3 14v-3z" />
                <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
              </svg>
              <div className="grow">
                <p className="text-sm text-gray-800 dark:text-neutral-200">
                  Provide a safer experience by using information that we receive from cookies on
                  and off Preline
                </p>
              </div>
            </div>
            {/* End Icon Block */}

            {/* Icon Block */}
            <div className="flex gap-x-5">
              <svg
                className="shrink-0 mt-1 size-5 text-gray-800 dark:text-neutral-200"
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
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <div className="grow">
                <p className="text-sm text-gray-800 dark:text-neutral-200">
                  Provide and improve Htmlstream Products for people who have an account
                </p>
              </div>
            </div>
            {/* End Icon Block */}
          </div>

          <p className="mt-4 text-sm text-gray-800 dark:text-neutral-200">
            For analytics and to provide certain features and improve our services for you, we use
            tools from other companies on Preline.
          </p>

          <p className="mt-4 text-sm text-gray-800 dark:text-neutral-200">
            You can allow the use of all cookies, just essential cookies or you can choose more
            options below. You can learn more about cookies and how we use them, and review or
            change your choice at any time in our{" "}
            <a
              className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500"
              href="#"
            >
              Cookies Policy
            </a>
            .
          </p>

          <div className="mt-5 divide-y divide-gray-200 dark:divide-neutral-700">
            {/* Collapse */}
            <div className="py-4 first:pt-0 last:pb-0">
              <button
                type="button"
                className="hs-collapse-toggle flex w-full justify-between items-center gap-x-5 font-semibold text-gray-800 hover:text-gray-600 focus:outline-hidden focus:text-gray-600 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                id="hs-essential-cookie-collapse"
                aria-expanded="false"
                aria-controls="hs-essential-cookie-collapse-heading"
                data-hs-collapse="#hs-essential-cookie-collapse-heading"
              >
                Essential cookies
                <svg
                  className="hs-collapse-open:rotate-180 shrink-0 size-4"
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
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div
                id="hs-essential-cookie-collapse-heading"
                className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-essential-cookie-collapse"
              >
                <p className="mt-2 text-sm text-gray-800 dark:text-neutral-200">
                  These cookies are required to use Htmlstream Products. They're necessary for these
                  sites to work as intended.
                </p>
              </div>
            </div>
            {/* End Collapse */}

            {/* Collapse */}
            <div className="py-4 first:pt-0 last:pb-0">
              <button
                type="button"
                className="hs-collapse-toggle flex w-full justify-between items-center gap-x-5 font-semibold text-gray-800 hover:text-gray-600 focus:outline-hidden focus:text-gray-600 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                id="hs-optional-cookie-collapse"
                aria-expanded="false"
                aria-controls="hs-optional-cookie-collapse-heading"
                data-hs-collapse="#hs-optional-cookie-collapse-heading"
              >
                Optional cookies
                <svg
                  className="hs-collapse-open:rotate-180 shrink-0 size-4"
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
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div
                id="hs-optional-cookie-collapse-heading"
                className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-optional-cookie-collapse"
              >
                <p className="mt-2 text-sm text-gray-800 dark:text-neutral-200">
                  We use tools from other companies for advertising and measurement services off
                  Htmlstream Products, for analytics and to provide certain features and improve our
                  services for you. These companies also use cookies.
                </p>

                <p>
                  <a
                    className="mt-2 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500"
                    href="#"
                  >
                    More information
                  </a>
                </p>
              </div>
            </div>
            {/* End Collapse */}
          </div>
        </div>

        {/* Footer */}
        <div className="flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
          <a
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            href="#"
            onClick={handleClose}
          >
            Only essentials
          </a>
          <a
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-blue-600 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:text-blue-500 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            onClick={handleAccept}
            href={"#"}
          >
            Allow all
          </a>
        </div>
        {/* End Footer */}
      </div>
      {/* End Card */}
    </div>
  );
};

export default CookieConsentModal;
