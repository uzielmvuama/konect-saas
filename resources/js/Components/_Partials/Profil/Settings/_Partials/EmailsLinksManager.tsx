import React, { useEffect, useState } from "react";

export interface EmailLink {
  type: string; // ex: "personal", "professional"
  text: string; // ex: "example@gmail.com"
}

interface EmailsLinksManagerProps {
  values: EmailLink[];
  onChange: (value: EmailLink[]) => void;
  limit?: number;
  placeholder?: string;
}

const EmailsLinksManager: React.FC<EmailsLinksManagerProps> = ({
  values,
  onChange,
  limit = 5,
  placeholder = "Link to email or social profile",
}) => {
  const [emails, setEmails] = useState<EmailLink[]>(values);

  // Propagation au parent
  useEffect(() => {
    onChange(emails);
  }, [emails]);

  const handleChange = (index: number, key: keyof EmailLink, value: string) => {
    const updated = [...emails];
    updated[index][key] = value;
    setEmails(updated);
  };

  const handleAdd = () => {
    if (emails.length >= limit) return;
    setEmails([...emails, { type: "work", text: "" }]);
  };

  return (
    <div className="space-y-5 border-t border-gray-200 first:border-t-0 dark:border-neutral-700 py-6 sm:py-8">
      <h2 className="font-semibold text-gray-800 dark:text-neutral-200">Emails</h2>

      <div className="grid sm:grid-cols-12 gap-y-1.5 sm:gap-y-0 sm:gap-x-5">
        <div className="sm:col-span-4 xl:col-span-3 2xl:col-span-2">
          <label className="sm:mt-2.5 inline-block text-sm text-gray-500 dark:text-neutral-500">
            Emails
          </label>
        </div>

        <div className="sm:col-span-8 xl:col-span-4">
          <div className="space-y-2" id="emails-wrapper">
            {emails.map((email, index) => (
              <div className="relative" key={index}>
                <input
                  type="email"
                  id="hs-inline-leading-select-label"
                  name="inline-add-on"
                  className="py-1.5 sm:py-2 px-4 ps-32 block w-full border-gray-200 rounded-lg sm:text-sm focus:z-10 focus:border-yellow-500 focus:ring-yellow-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="test.example.com"
                  onChange={(e) => handleChange(index, "text", e.target.value)}
                  value={email.text}
                />
                <div className="absolute inset-y-0 start-0 flex items-center text-gray-500 ps-px">
                  <label htmlFor="hs-inline-leading-select-country" className="sr-only">
                    Country
                  </label>
                  <select
                    id="hs-inline-leading-select-country"
                    name="hs-inline-leading-select-country"
                    className="py-1 sm:py-1 block w-full border-transparent rounded-lg focus:ring-yellow-600 focus:border-yellow-600 dark:text-neutral-500 dark:bg-neutral-900 sm:text-sm cursor-pointer"
                    onChange={(e) => handleChange(index, "type", e.target.value)} value={email.type}
                  >
                    <option value={"personal"}>Personal</option>
                    <option value={"work"}>Work</option>
                    <option value={"home"}>Home</option>
                  </select>
                </div>
              </div>
              // <input
              //
              //     type="text"
              //     className="py-1.5 sm:py-2 px-3 block w-full border-gray-200 rounded-lg sm:text-sm placeholder:text-gray-400 focus:border-yellow-500 focus:ring-yellow-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600"
              //     placeholder={placeholder}
              //     value={email.text}
              //     onChange={(e) => handleChange(index, 'text', e.target.value)}
              // />
            ))}

            {emails.length < limit && (
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
                  Add email
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
