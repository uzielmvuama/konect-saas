import React from "react";

interface ConnectionItemProps {
  keyId?: number | string;
  type: "grid" | "list";
  firstname?: string;
  name?: string;
  email?: string;
  avatarUrl: string;
  connectionsCount?: number;
  status: boolean;
  description?: string;
}

const ConnectionItem: React.FC<ConnectionItemProps> = ({
  keyId,
  type,
  firstname,
  name,
  email,
  avatarUrl,
  connectionsCount,
  status,
  description,
}) => {
  const isOnline = status;
  const statusColor = isOnline ? "bg-teal-600 dark:bg-teal-500" : "bg-gray-400 dark:bg-neutral-500";
  const statusText = isOnline ? "Kuser" : "";

  if (type === "list") {
    return (
      <div className="p-4 flex flex-col bg-white border border-gray-200 rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
        <div className="relative sm:flex sm:justify-between sm:gap-x-4">
          <div className="flex items-center gap-x-4">
            <div className="relative shrink-0">
              {status ? (
                <img
                  className="shrink-0 size-9.5 sm:w-11.5 sm:h-11.5 mx-auto rounded-full"
                  src={avatarUrl}
                  alt="Avatar"
                />
              ) : (
                <span className="inline-block size-9.5 sm:w-11.5 sm:h-11.5 bg-gray-100 rounded-full overflow-hidden">
                  <svg
                    className="size-full text-gray-300"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.62854"
                      y="0.359985"
                      width="15"
                      height="15"
                      rx="7.5"
                      fill="white"
                    ></rect>
                    <path
                      d="M8.12421 7.20374C9.21151 7.20374 10.093 6.32229 10.093 5.23499C10.093 4.14767 9.21151 3.26624 8.12421 3.26624C7.0369 3.26624 6.15546 4.14767 6.15546 5.23499C6.15546 6.32229 7.0369 7.20374 8.12421 7.20374Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M11.818 10.5975C10.2992 12.6412 7.42106 13.0631 5.37731 11.5537C5.01171 11.2818 4.69296 10.9631 4.42107 10.5975C4.28982 10.4006 4.27107 10.1475 4.37419 9.94123L4.51482 9.65059C4.84296 8.95684 5.53671 8.51624 6.30546 8.51624H9.95231C10.7023 8.51624 11.3867 8.94749 11.7242 9.62249L11.8742 9.93184C11.968 10.1475 11.9586 10.4006 11.818 10.5975Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              )}
              <span
                className={`absolute bottom-0 end-0 block md:hidden size-3 rounded-full ${statusColor} border-2 border-white dark:border-neutral-700`}
              ></span>
            </div>

            <div className="grow flex flex-col">
              <div className="inline-flex items-center gap-x-2">
                <h3 className="font-medium text-gray-800 dark:text-neutral-200">
                  {(firstname && name) ? firstname + " " + name : "Unknown"}
                </h3>
                {status && (
                  <span className="hidden md:inline-flex items-center gap-x-1.5 py-1 px-2.5 text-xs font-medium bg-gray-100 text-gray-800 rounded-full dark:bg-neutral-700 dark:text-neutral-200">
                    <span
                      className={`size-1.5 inline-block rounded-full ${isOnline ? "bg-gray-800 dark:bg-neutral-200" : "bg-gray-400 dark:bg-neutral-500"}`}
                    ></span>
                    {statusText}
                  </span>
                )}
              </div>

              <div className="inline-flex items-center gap-x-2">
                <p className="text-xs sm:text-sm text-gray-500 dark:text-neutral-500">
                  {description}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-2 sm:mt-0 flex justify-end items-center gap-x-4">
            <p className="text-xs sm:text-sm text-gray-500 dark:text-neutral-500">
              {connectionsCount != null ? `${connectionsCount} connections` : email}
            </p>
            {getCta("hs-pro-dupccn-li" + keyId)}
          </div>
        </div>
      </div>
    );
  }

  function getCta(key: string | number) {
    return (
      <div>
        <label
          htmlFor={`${key}`}
          className="relative py-2 px-3 flex items-center justify-center sm:justify-start border border-gray-200 cursor-pointer font-medium text-xs rounded-lg peer-checked:bg-gray-100 hover:border-gray-300 focus:outline-none focus:border-gray-300 dark:border-neutral-700 dark:peer-checked:bg-neutral-800 dark:hover:border-neutral-600 dark:focus:border-neutral-600"
        >
          <input type="checkbox" id={`${key}`} className="peer hidden" defaultChecked={false} />
          <span className="relative z-10 text-gray-800 dark:text-neutral-200 peer-checked:hidden">
            Connect
          </span>
          <span className="relative z-10 hidden peer-checked:flex items-center gap-x-1.5 text-gray-800 dark:text-neutral-200">
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
              <path d="M20 6 9 17l-5-5" />
            </svg>
            Connected
          </span>
        </label>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
      <div className="p-3 md:pt-5 md:px-5 grid grid-cols-3 gap-x-2">
        <div>
          {status && (
            <span className="hidden md:inline-flex items-center gap-x-1.5 py-1 px-2.5 text-xs font-medium bg-gray-100 text-gray-800 rounded-full dark:bg-neutral-700 dark:text-neutral-200">
              <span
                className={`size-1.5 shrink-0 inline-block rounded-full ${isOnline ? "bg-gray-800 dark:bg-neutral-200" : "bg-gray-400 dark:bg-neutral-500"}`}
              ></span>
              {statusText}
            </span>
          )}
        </div>

        <div className="shrink-0 relative size-11 md:w-15.5 md:h-15.5 mx-auto">
          {status ? (
            <img
              className="shrink-0 size-11 md:w-15.5 md:h-15.5 rounded-full"
              src={avatarUrl}
              alt="Avatar"
            />
          ) : (
            <span className="inline-block size-11 md:w-15.5 md:h-15.5 bg-gray-100 rounded-full overflow-hidden">
              <svg
                className="size-full text-gray-300"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.62854" y="0.359985" width="15" height="15" rx="7.5" fill="white"></rect>
                <path
                  d="M8.12421 7.20374C9.21151 7.20374 10.093 6.32229 10.093 5.23499C10.093 4.14767 9.21151 3.26624 8.12421 3.26624C7.0369 3.26624 6.15546 4.14767 6.15546 5.23499C6.15546 6.32229 7.0369 7.20374 8.12421 7.20374Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M11.818 10.5975C10.2992 12.6412 7.42106 13.0631 5.37731 11.5537C5.01171 11.2818 4.69296 10.9631 4.42107 10.5975C4.28982 10.4006 4.27107 10.1475 4.37419 9.94123L4.51482 9.65059C4.84296 8.95684 5.53671 8.51624 6.30546 8.51624H9.95231C10.7023 8.51624 11.3867 8.94749 11.7242 9.62249L11.8742 9.93184C11.968 10.1475 11.9586 10.4006 11.818 10.5975Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          )}
          <span
            className={`absolute bottom-0 end-0 block md:hidden size-3 rounded-full ${statusColor} border-2 border-white dark:border-neutral-700`}
          ></span>
        </div>

        <div className="ms-auto"></div>
      </div>

      <div className="p-3 pt-0 md:px-5 md:pb-5 text-center">
        <h3 className="md:text-lg font-medium text-gray-800 dark:text-neutral-200">
            {(firstname && name) ? firstname + " " + name : "Unknown"}
        </h3>
        <div className="inline-flex justify-center items-center gap-x-2">
          <p className="text-sm text-gray-500 dark:text-neutral-500">{description}</p>
        </div>
      </div>

      <div className="py-3 px-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-y-1 sm:gap-y-0 gap-x-2 text-center sm:text-start border-t border-gray-200 dark:border-neutral-700">
        <p className="text-sm text-gray-500 dark:text-neutral-500">
          {connectionsCount != null ? `${connectionsCount} connections` : email}
        </p>

        {getCta("hs-pro-dupccn-gr" + keyId)}
      </div>
    </div>
  );
};

export default ConnectionItem;
