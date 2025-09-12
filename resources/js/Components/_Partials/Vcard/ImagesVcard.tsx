import React from "react";

interface ImagesVcardProps {
  profil_url?: string;
  cover_url?: string;
}

const ImagesVcard: React.FC<ImagesVcardProps> = (props) => {
  return (
    <div className="relative flex justify-center h-72 w-full">
      <div className="bg-neutral-800 w-full h-8/12">a</div>
      <div className="absolute bottom-0 h-48 w-full px-6">
        <div className="bg-neutral-700 h-full w-full rounded-lg overflow-hidden flex justify-center items-center">
          <div className="grid grid-cols-2 w-full h-full">
            <div className="flex justify-center items-center">
              {props.cover_url ? (
                <img
                  className="inline-block size-24 rounded-full"
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                  alt="Avatar"
                />
              ) : (
                <span className="inline-block size-24 bg-gray-100 rounded-full overflow-hidden">
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
            </div>
            <div className="bg-linear-to-r/srgb from-indigo-500 to-teal-400 h-full flex justify-center items-center">
                QRCode
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagesVcard;
