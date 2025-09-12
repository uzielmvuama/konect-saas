import React, { useEffect, useState } from "react";
import { ucfirst } from "@/Utils/Functions/globals";

export interface ExternalLink {
  type: string; // ex: "personal", "professional"
  uri: string; // ex: "example@gmail.com"
}

interface ExternalsLinksManagerProps {
  values: ExternalLink[];
  onChange: (value: ExternalLink[]) => void;
  limit?: number;
  placeholder?: string;
}

const EmailsLinksManager: React.FC<ExternalsLinksManagerProps> = ({
  values,
  onChange,
  limit = 5,
  placeholder = "Link to email or social profile",
}) => {
  const [urls, setUrls] = useState<ExternalLink[]>(values);

  // Propagation au parent
  useEffect(() => {
    onChange(urls);
  }, [urls]);

  const handleChange = (index: number, newValue: string) => {
    const updated = [...urls];
    updated[index].uri = "https://" + newValue;
    setUrls(updated);
  };

  const handleChangeTitle = (index: number, newValue: string) => {
    const updated = [...urls];
    updated[index].type = newValue;
    setUrls(updated);
  };

  const handleAdd = () => {
    if (urls.length >= limit) return;
    setUrls([...urls, { type: "custom", uri: "" }]);
  };

  return (
    <div className="space-y-5 border-t border-gray-200 first:border-t-0 dark:border-neutral-700 py-6 sm:py-8">
      <h2 className="font-semibold text-gray-800 dark:text-neutral-200">Websites</h2>

      <div className="grid sm:grid-cols-12 gap-y-1.5 sm:gap-y-0 sm:gap-x-5">
        <div className="sm:col-span-4 xl:col-span-3 2xl:col-span-2">
          <label className="sm:mt-2.5 inline-block text-sm text-gray-500 dark:text-neutral-500">
            Other externals Links
          </label>
        </div>

        <div className="sm:col-span-8 xl:col-span-8">
          <div className="space-y-2" id="emails-wrapper">
            {urls.map((url, index) => (
              <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
                <div className="sm:inline-flex sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 w-full">
                  <label
                    htmlFor="inline-input-label-with-helper-text"
                    className="block text-sm font-medium dark:text-white"
                  >
                    Type
                  </label>
                  <input
                    type="email"
                    id="inline-input-label-with-helper-text"
                    className="max-w-xs py-1.5 sm:py-2 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-yellow-500 focus:ring-yellow-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="my app website"
                    aria-describedby="hs-inline-input-helper-text"
                    onChange={(e) => handleChangeTitle(index, e.target.value)}
                    value={ucfirst(url.type)}
                  />
                  {/*<p className="text-sm text-gray-500 dark:text-neutral-500" id="hs-inline-input-helper-text">We'll never share your details.</p>*/}
                </div>

                <div className="col-span-2 sm:inline-flex sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 w-full">
                  <label
                    htmlFor="inline-input-label-with-helper-text"
                    className="block text-sm font-medium dark:text-white"
                  >
                    Link
                  </label>
                  <div className="relative w-[inherit]">
                    <input
                      type="text"
                      id="hs-inline-add-on"
                      name="hs-inline-add-on"
                      className="py-1.5 sm:py-2 px-4 ps-16 block w-full border-gray-200 rounded-lg sm:text-sm focus:z-10 focus:border-yellow-500 focus:ring-yellow-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="www.example.com"
                      onChange={(e) => handleChange(index, e.target.value)}
                      value={url.uri.replace("https://", "")}
                    />
                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                      <span className="text-sm text-gray-500 dark:text-neutral-500">https://</span>
                    </div>
                  </div>
                  {/*<p className="text-sm text-gray-500 dark:text-neutral-500" id="hs-inline-input-helper-text">We'll never share your details.</p>*/}
                </div>
              </div>
            ))}

            {urls.length < limit && (
              <p className="mt-3">
                <button
                  type="button"
                  onClick={handleAdd}
                  className="py-1.5 px-2 inline-flex items-center gap-x-1 text-xs font-medium rounded-full border border-dashed border-gray-200 bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                >
                  <svg
                    className="shrink-0 size-3"
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
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                  Add link
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailsLinksManager;
