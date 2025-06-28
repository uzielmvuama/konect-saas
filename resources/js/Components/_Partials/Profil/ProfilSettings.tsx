import React from "react";
import {TbBoxMultiple, TbLinkPlus, TbShieldLock, TbUser} from "react-icons/tb";
import {ucfirst} from "@/Utils/Functions/globals";
import GeneralSettings from "@/Components/_Partials/Profil/Settings/GeneralSettings";
import SocialInformationsSettings from "@/Components/_Partials/Profil/Settings/SocialInformationsSettings";
import SecuritySettings from "@/Components/_Partials/Profil/Settings/SecuritySettings";

interface ProfilSettingsProps {
  user: any;
}

const ProfilSettings: React.FC<ProfilSettingsProps> = ({ user }) => {
  const navs = [
    {
      name: "My Profile",
      icon: <TbUser />,
    },
    {
      name: "Email et Réseaux Sociaux",
      icon: <TbLinkPlus />
    },
    {
      name: "Photos et Vidéos",
      icon: <TbBoxMultiple />
    },
    {
      name: "Security & Password",
      icon: <TbShieldLock />,
    },
  ];

  const [currentTab, setCurrentTab] = React.useState<number>(0);

  return (
    <>
      <div className="mb-4">
        {/* User Profile Card */}
        <div className="p-3 md:p-5 bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
          {/* SVG Background Element */}
          <figure>
            <svg
              className="w-full"
              preserveAspectRatio="none"
              width="1113"
              height="161"
              viewBox="0 0 1113 161"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_666_220723)">
                <rect x="0.5" width="1112" height="161" rx="12" fill="white" />
                <rect x="1" width="1112" height="348" fill="#D9DEEA" />
                <path
                  d="M512.694 359.31C547.444 172.086 469.835 34.2204 426.688 -11.3096H1144.27V359.31H512.694Z"
                  fill="#C0CBDD"
                />
                <path
                  d="M818.885 185.745C703.515 143.985 709.036 24.7949 726.218 -29.5801H1118.31V331.905C1024.49 260.565 963.098 237.945 818.885 185.745Z"
                  fill="#8192B0"
                />
                <defs>
                  <clipPath id="clip0_666_220723">
                    <rect x="0.5" width="1112" height="161" rx="12" fill="white" />
                  </clipPath>
                </defs>
              </g>
            </svg>
          </figure>
          {/* End SVG Background Element */}

          {/* Avatar */}
          <div className="-mt-24">
            <div className="relative flex size-30 mx-auto border-4 border-white rounded-full dark:border-neutral-800">
              <img
                className="object-cover size-full rounded-full"
                src="https://images.unsplash.com/photo-1659482634023-2c4fda99ac0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                alt="Hero Image"
              />

              <div className="absolute bottom-0 -end-2">
                <button
                  type="button"
                  className="group p-2 max-w-[125px] inline-flex justify-center items-center gap-x-1.5 text-start bg-white border border-gray-200 text-gray-800 text-xs font-medium rounded-full whitespace-nowrap shadow-2xs align-middle hover:bg-gray-50 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  data-hs-overlay="#hs-pro-dsm"
                >
                  <svg
                    className="shrink-0 size-4 text-gray-500 dark:text-neutral-400"
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
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" x2="9.01" y1="9" y2="9" />
                    <line x1="15" x2="15.01" y1="9" y2="9" />
                  </svg>
                  <span className="group-hover:block hidden">Set status</span>
                </button>
              </div>
            </div>

            <div className="mt-3 text-center">
              <h1 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
                {ucfirst(user.firstname) + " " + ucfirst(user.name)}
              </h1>
              <p className="text-gray-500 dark:text-neutral-500">{user.email} </p>
            </div>
          </div>
          {/* End Avatar */}

          {/* Header */}
          <div className="mt-4 md:mt-7 -mb-0.5 flex flex-col md:flex-row md:justify-between md:items-center gap-3">
            {/*<div className="md:order-2 flex justify-center md:justify-end">*/}
            {/*  <a*/}
            {/*    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"*/}
            {/*    href="../../pro/dashboard/account-profile.html"*/}
            {/*  >*/}
            {/*    Edit*/}
            {/*  </a>*/}
            {/*</div>*/}

            {/* Nav */}
            <div
              className="relative flex justify-center md:justify-start"
              data-hs-scroll-nav='{
        "autoCentering": true
      }'
            >
              <nav className="hs-scroll-nav-body flex flex-nowrap gap-x-1 overflow-x-auto [&::-webkit-scrollbar]:h-0 snap-x snap-mandatory pb-1.5">
                {navs.map((nav, index) => (
                  <span
                    key={index}
                    className={`cursor-pointer snap-start relative inline-flex flex-nowrap items-center gap-x-2 px-2.5 py-1.5 hover:bg-gray-100 text-gray-500 hover:text-gray-800 text-sm whitespace-nowrap rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 after:absolute after:-bottom-0.5 after:inset-x-0 after:z-10 after:w-1/4 after:h-0.5 after:rounded-full after:mx-auto after:pointer-events-none dark:text-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 ${currentTab == index && "bg-gray-100 bg-neutral-700 !text-gray-200 !dark:text-neutral-100"}`}
                    onClick={() => setCurrentTab(index)}
                  >
                    {nav.icon}
                    {nav.name}
                  </span>
                ))}
              </nav>
            </div>
            {/* End Nav */}
          </div>
          {/* End Header */}
        </div>
        {/* End User Profile Card */}

        {/* Status */}
        <div
          id="hs-pro-dsm"
          className="hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto [--close-when-click-inside:true] pointer-events-none"
          role="dialog"
          tabIndex={-1}
          aria-labelledby="hs-pro-dsm-label"
        >
          <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-xl sm:w-full m-3 sm:mx-auto h-[calc(100%-56px)] min-h-[calc(100%-56px)] flex items-center">
            <div className="w-full flex flex-col bg-white rounded-xl pointer-events-auto shadow-xl dark:bg-neutral-800">
              {/* Header */}
              <div className="py-2.5 px-4 flex justify-between items-center border-b border-gray-200 dark:border-neutral-700">
                <h3
                  id="hs-pro-dsm-label"
                  className="font-medium text-gray-800 dark:text-neutral-200"
                >
                  Set status
                </h3>
                <button
                  type="button"
                  className="size-8 shrink-0 flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
                  aria-label="Close"
                  data-hs-overlay="#hs-pro-dsm"
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="shrink-0 size-4"
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
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
              {/* End Header */}

              {/* Body */}
              <div
                id="hs-modal-status-body"
                className="p-4 space-y-6 max-h-[75dvh] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
              >
                {/* Status Input */}
                <div className="flex items-center border border-gray-200 rounded-lg dark:border-neutral-700">
                  <div className="p-3 border-e border-gray-200 dark:border-neutral-700">
                    <svg
                      className="shrink-0 size-4 text-gray-500 dark:text-neutral-400"
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
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                      <line x1="9" x2="9.01" y1="9" y2="9" />
                      <line x1="15" x2="15.01" y1="9" y2="9" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="py-1.5 sm:py-2 px-3 block w-full border-transparent rounded-e-md sm:text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-transparent dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600"
                    placeholder="What’s your status?"
                  />
                </div>
                {/* End Status Input */}

                {/* Suggestions */}
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-neutral-500">Suggestions</h4>

                  <div className="mt-3">
                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div className="flex flex-col gap-y-2">
                        <label
                          htmlFor="hs-pro-dupsms1"
                          className="relative py-2 px-3 flex cursor-pointer bg-white text-sm rounded-lg focus:outline-hidden dark:bg-neutral-800"
                        >
                          <input
                            type="radio"
                            id="hs-pro-dupsms1"
                            name="hs-pro-dupsms"
                            className="peer absolute top-0 start-0 size-full bg-transparent border border-gray-200 text-transparent rounded-lg cursor-pointer focus:ring-0 focus:ring-offset-0 after:relative after:-z-1 after:block after:size-full after:rounded-lg checked:after:bg-blue-50 checked:text-transparent checked:border-blue-600 checked:hover:border-blue-600 checked:focus:border-blue-600 checked:bg-none disabled:opacity-50 disabled:pointer-events-none focus:border-blue-600 dark:border-neutral-700 dark:checked:after:bg-blue-500/10 dark:checked:border-blue-500 dark:focus:border-neutral-600"
                          />
                          <span className="peer-checked:text-blue-600 dark:text-white dark:peer-checked:text-blue-500">
                            🗓️ <span className="ms-2">In a meeting</span>
                          </span>
                        </label>
                        <label
                          htmlFor="hs-pro-dupsms3"
                          className="relative py-2 px-3 flex cursor-pointer bg-white text-sm rounded-lg focus:outline-hidden dark:bg-neutral-800"
                        >
                          <input
                            type="radio"
                            id="hs-pro-dupsms3"
                            name="hs-pro-dupsms"
                            className="peer absolute top-0 start-0 size-full bg-transparent border border-gray-200 text-transparent rounded-lg cursor-pointer focus:ring-0 focus:ring-offset-0 after:relative after:-z-1 after:block after:size-full after:rounded-lg checked:after:bg-blue-50 checked:text-transparent checked:border-blue-600 checked:hover:border-blue-600 checked:focus:border-blue-600 checked:bg-none disabled:opacity-50 disabled:pointer-events-none focus:border-blue-600 dark:border-neutral-700 dark:checked:after:bg-blue-500/10 dark:checked:border-blue-500 dark:focus:border-neutral-600"
                          />
                          <span className="peer-checked:text-blue-600 dark:text-white dark:peer-checked:text-blue-500">
                            🚎 <span className="ms-2">Commuting</span>
                          </span>
                        </label>
                        <label
                          htmlFor="hs-pro-dupsms5"
                          className="relative py-2 px-3 flex cursor-pointer bg-white text-sm rounded-lg focus:outline-hidden dark:bg-neutral-800"
                        >
                          <input
                            type="radio"
                            id="hs-pro-dupsms5"
                            name="hs-pro-dupsms"
                            className="peer absolute top-0 start-0 size-full bg-transparent border border-gray-200 text-transparent rounded-lg cursor-pointer focus:ring-0 focus:ring-offset-0 after:relative after:-z-1 after:block after:size-full after:rounded-lg checked:after:bg-blue-50 checked:text-transparent checked:border-blue-600 checked:hover:border-blue-600 checked:focus:border-blue-600 checked:bg-none disabled:opacity-50 disabled:pointer-events-none focus:border-blue-600 dark:border-neutral-700 dark:checked:after:bg-blue-500/10 dark:checked:border-blue-500 dark:focus:border-neutral-600"
                          />
                          <span className="peer-checked:text-blue-600 dark:text-white dark:peer-checked:text-blue-500">
                            🎯 <span className="ms-2">Focusing</span>
                          </span>
                        </label>
                      </div>
                      {/* End Col */}

                      <div className="flex flex-col gap-y-2">
                        <label
                          htmlFor="hs-pro-dupsms2"
                          className="relative py-2 px-3 flex cursor-pointer bg-white text-sm rounded-lg focus:outline-hidden dark:bg-neutral-800"
                        >
                          <input
                            type="radio"
                            id="hs-pro-dupsms2"
                            name="hs-pro-dupsms"
                            className="peer absolute top-0 start-0 size-full bg-transparent border border-gray-200 text-transparent rounded-lg cursor-pointer focus:ring-0 focus:ring-offset-0 after:relative after:-z-1 after:block after:size-full after:rounded-lg checked:after:bg-blue-50 checked:text-transparent checked:border-blue-600 checked:hover:border-blue-600 checked:focus:border-blue-600 checked:bg-none disabled:opacity-50 disabled:pointer-events-none focus:border-blue-600 dark:border-neutral-700 dark:checked:after:bg-blue-500/10 dark:checked:border-blue-500 dark:focus:border-neutral-600"
                          />
                          <span className="peer-checked:text-blue-600 dark:text-white dark:peer-checked:text-blue-500">
                            🤒 <span className="ms-2">Out sick</span>
                          </span>
                        </label>
                        <label
                          htmlFor="hs-pro-dupsms7"
                          className="relative py-2 px-3 flex cursor-pointer bg-white text-sm rounded-lg focus:outline-hidden dark:bg-neutral-800"
                        >
                          <input
                            type="radio"
                            id="hs-pro-dupsms7"
                            name="hs-pro-dupsms"
                            className="peer absolute top-0 start-0 size-full bg-transparent border border-gray-200 text-transparent rounded-lg cursor-pointer focus:ring-0 focus:ring-offset-0 after:relative after:-z-1 after:block after:size-full after:rounded-lg checked:after:bg-blue-50 checked:text-transparent checked:border-blue-600 checked:hover:border-blue-600 checked:focus:border-blue-600 checked:bg-none disabled:opacity-50 disabled:pointer-events-none focus:border-blue-600 dark:border-neutral-700 dark:checked:after:bg-blue-500/10 dark:checked:border-blue-500 dark:focus:border-neutral-600"
                          />
                          <span className="peer-checked:text-blue-600 dark:text-white dark:peer-checked:text-blue-500">
                            🌴 <span className="ms-2">On vacation</span>
                          </span>
                        </label>
                        <label
                          htmlFor="hs-pro-dupsms6"
                          className="relative py-2 px-3 flex cursor-pointer bg-white text-sm rounded-lg focus:outline-hidden dark:bg-neutral-800"
                        >
                          <input
                            type="radio"
                            id="hs-pro-dupsms6"
                            name="hs-pro-dupsms"
                            className="peer absolute top-0 start-0 size-full bg-transparent border border-gray-200 text-transparent rounded-lg cursor-pointer focus:ring-0 focus:ring-offset-0 after:relative after:-z-1 after:block after:size-full after:rounded-lg checked:after:bg-blue-50 checked:text-transparent checked:border-blue-600 checked:hover:border-blue-600 checked:focus:border-blue-600 checked:bg-none disabled:opacity-50 disabled:pointer-events-none focus:border-blue-600 dark:border-neutral-700 dark:checked:after:bg-blue-500/10 dark:checked:border-blue-500 dark:focus:border-neutral-600"
                          />
                          <span className="peer-checked:text-blue-600 dark:text-white dark:peer-checked:text-blue-500">
                            🏡 <span className="ms-2">Working remotely</span>
                          </span>
                        </label>
                      </div>
                      {/* End Col */}
                    </div>
                    {/* End Grid */}
                  </div>
                </div>
                {/* End Suggestions */}

                {/* List Group */}
                <ul className="flex flex-col bg-white border border-gray-200 rounded-xl -space-y-px dark:bg-neutral-800 dark:border-neutral-700">
                  {/* List Item */}
                  <li className="p-3 border-t border-gray-200 first:border-t-0 dark:border-neutral-700">
                    <div className="flex gap-x-3">
                      <span className="mt-0.5 shrink-0 flex flex-col justify-center items-center size-6.5 bg-red-500 text-white rounded-full">
                        <svg
                          className="shrink-0 size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.164 14H15c-1.5-1-2-5.902-2-7 0-.264-.02-.523-.06-.776L5.164 14zm6.288-10.617A4.988 4.988 0 0 0 8.995 2.1a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 7c0 .898-.335 4.342-1.278 6.113l9.73-9.73zM10 15a2 2 0 1 1-4 0h4zm-9.375.625a.53.53 0 0 0 .75.75l14.75-14.75a.53.53 0 0 0-.75-.75L.625 15.625z" />
                        </svg>
                      </span>
                      <div className="grow">
                        <div className="flex justify-between items-center mb-1">
                          <h4 className="text-sm font-semibold text-gray-800 dark:text-neutral-200">
                            Offline
                          </h4>
                          <label
                            htmlFor="hs-pro-dsmofs"
                            className="relative inline-block w-11 h-6 cursor-pointer"
                          >
                            <input type="checkbox" id="hs-pro-dsmofs" className="peer sr-only" />
                            <span className="absolute inset-0 bg-gray-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-blue-600 dark:bg-neutral-700 dark:peer-checked:bg-blue-500 peer-disabled:opacity-50 peer-disabled:pointer-events-none"></span>
                            <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-sm transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white"></span>
                          </label>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-neutral-500">
                          Mute notifications and unassign new messages
                        </p>
                      </div>
                    </div>
                  </li>
                  {/* End List Item */}

                  {/* List Item */}
                  <li className="p-3 border-t border-gray-200 first:border-t-0 dark:border-neutral-700">
                    <div className="flex gap-x-3">
                      <span className="mt-0.5 shrink-0 flex flex-col justify-center items-center size-6.5 bg-yellow-500 text-white rounded-full">
                        <svg
                          className="shrink-0 size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                        </svg>
                      </span>
                      <div className="grow">
                        <div className="flex justify-between items-center mb-1">
                          <h4 className="text-sm font-semibold text-gray-800 dark:text-neutral-200">
                            Do not disturb
                          </h4>
                          <label
                            htmlFor="hs-pro-dsmdnds"
                            className="relative inline-block w-11 h-6 cursor-pointer"
                          >
                            <input type="checkbox" id="hs-pro-dsmdnds" className="peer sr-only" />
                            <span className="absolute inset-0 bg-gray-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-blue-600 dark:bg-neutral-700 dark:peer-checked:bg-blue-500 peer-disabled:opacity-50 peer-disabled:pointer-events-none"></span>
                            <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-sm transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white"></span>
                          </label>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-neutral-500">
                          Mute notifications
                        </p>
                      </div>
                    </div>
                  </li>
                  {/* End List Item */}

                  {/* List Item */}
                  <li className="p-3 border-t border-gray-200 first:border-t-0 dark:border-neutral-700">
                    <div className="flex gap-x-3">
                      <span className="mt-0.5 shrink-0 flex flex-col justify-center items-center size-6.5 bg-yellow-500 text-white rounded-full">
                        <svg
                          className="shrink-0 size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                        </svg>
                      </span>
                      <div className="grow">
                        <div className="flex justify-between items-center mb-1">
                          <h4 className="text-sm font-semibold text-gray-800 dark:text-neutral-200">
                            Schedule
                          </h4>
                          <label
                            htmlFor="hs-pro-dsmschs"
                            className="relative inline-block w-11 h-6 cursor-pointer"
                          >
                            <input type="checkbox" id="hs-pro-dsmschs" className="peer sr-only" />
                            <span className="absolute inset-0 bg-gray-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-blue-600 dark:bg-neutral-700 dark:peer-checked:bg-blue-500 peer-disabled:opacity-50 peer-disabled:pointer-events-none"></span>
                            <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-sm transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white"></span>
                          </label>
                        </div>

                        {/* Select Group */}
                        <div className="mt-3 sm:mt-1 flex flex-wrap items-center gap-2">
                          {/* Select */}
                          <div className="relative">
                            <select
                              id="hs-pro-select-time1"
                              data-hs-select='{
                        "placeholder": "Select option...",
                        "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
                        "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-2 px-4 pe-7 flex text-nowrap w-full cursor-pointer bg-gray-100 rounded-lg text-start text-sm text-gray-800 focus:outline-hidden focus:bg-gray-200 before:absolute before:inset-0 before:z-1 dark:bg-neutral-700 dark:text-neutral-200 dark:focus:bg-neutral-700",
                        "dropdownClasses": "mt-2 z-50 w-full min-w-36 max-h-72 p-1 space-y-0.5 overflow-hidden overflow-y-auto bg-white rounded-xl shadow-xl [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900 dark:bg-neutral-900",
                        "optionClasses": "hs-selected:bg-gray-100 dark:hs-selected:bg-neutral-800 py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800",
                        "optionTemplate": "<div className=\"flex justify-between items-center w-full\"><span data-title></span><span className=\"hidden hs-selected:block\"><svg className=\"shrink-0 size-3.5 text-gray-800 dark:text-neutral-200\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>",
                        "viewport": "#hs-modal-status-body"
                      }'
                              className="hidden"
                            >
                              <option value="">Choose</option>
                              <option>12:01 AM</option>
                              <option>1:00 AM</option>
                              <option>2:00 AM</option>
                              <option>3:00 AM</option>
                              <option>4:00 AM</option>
                              <option>5:00 AM</option>
                              <option>6:00 AM</option>
                              <option>7:00 AM</option>
                              <option>8:00 AM</option>
                              <option selected>9:00 AM</option>
                              <option>10:00 AM</option>
                              <option>11:00 AM</option>
                              <option>12:01 PM</option>
                              <option>1:00 PM</option>
                              <option>2:00 PM</option>
                              <option>3:00 PM</option>
                              <option>4:00 PM</option>
                              <option>5:00 PM</option>
                              <option>6:00 PM</option>
                              <option>7:00 PM</option>
                              <option>8:00 PM</option>
                              <option>9:00 PM</option>
                              <option>10:00 PM</option>
                              <option>11:00 PM</option>
                            </select>

                            <div className="absolute top-1/2 end-2.5 -translate-y-1/2">
                              <svg
                                className="shrink-0 size-3.5 text-gray-500 dark:text-neutral-500"
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
                                <path d="m7 15 5 5 5-5" />
                                <path d="m7 9 5-5 5 5" />
                              </svg>
                            </div>
                          </div>
                          {/* End Select */}

                          <span className="text-sm text-gray-500 dark:text-neutral-500">to:</span>

                          {/* Select */}
                          <div className="relative">
                            <select
                              id="hs-pro-select-time2"
                              data-hs-select='{
                        "placeholder": "Select option...",
                        "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
                        "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-2 px-4 pe-7 flex text-nowrap w-full cursor-pointer bg-gray-100 rounded-lg text-start text-sm text-gray-800 focus:outline-hidden focus:bg-gray-200 before:absolute before:inset-0 before:z-1 dark:bg-neutral-700 dark:text-neutral-200 dark:focus:bg-neutral-700",
                        "dropdownClasses": "mt-2 z-50 w-full min-w-36 max-h-72 p-1 space-y-0.5 overflow-hidden overflow-y-auto bg-white rounded-xl shadow-xl [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900 dark:bg-neutral-900",
                        "optionClasses": "hs-selected:bg-gray-100 dark:hs-selected:bg-neutral-800 py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800",
                        "optionTemplate": "<div className=\"flex justify-between items-center w-full\"><span data-title></span><span className=\"hidden hs-selected:block\"><svg className=\"shrink-0 size-3.5 text-gray-800 dark:text-neutral-200\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>",
                        "viewport": "#hs-modal-status-body"
                      }'
                              className="hidden"
                            >
                              <option value="">Choose</option>
                              <option>12:01 AM</option>
                              <option>1:00 AM</option>
                              <option>2:00 AM</option>
                              <option>3:00 AM</option>
                              <option>4:00 AM</option>
                              <option>5:00 AM</option>
                              <option>6:00 AM</option>
                              <option>7:00 AM</option>
                              <option>8:00 AM</option>
                              <option>9:00 AM</option>
                              <option selected>10:00 AM</option>
                              <option>11:00 AM</option>
                              <option>12:01 PM</option>
                              <option>1:00 PM</option>
                              <option>2:00 PM</option>
                              <option>3:00 PM</option>
                              <option>4:00 PM</option>
                              <option>5:00 PM</option>
                              <option>6:00 PM</option>
                              <option>7:00 PM</option>
                              <option>8:00 PM</option>
                              <option>9:00 PM</option>
                              <option>10:00 PM</option>
                              <option>11:00 PM</option>
                            </select>

                            <div className="absolute top-1/2 end-2.5 -translate-y-1/2">
                              <svg
                                className="shrink-0 size-3.5 text-gray-500 dark:text-neutral-500"
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
                                <path d="m7 15 5 5 5-5" />
                                <path d="m7 9 5-5 5 5" />
                              </svg>
                            </div>
                          </div>
                          {/* End Select */}
                        </div>
                        {/* End Select Group */}
                      </div>
                    </div>
                  </li>
                  {/* End List Item */}
                </ul>
                {/* End List Group */}

                {/* Subfooter */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <div className="flex items-center gap-x-3">
                    <label className="text-sm text-gray-500 dark:text-neutral-500">
                      Clear status
                    </label>

                    {/* Select */}
                    <div className="relative">
                      <select
                        data-hs-select='{
                  "placeholder": "Status",
                  "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
                  "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-2 ps-3 pe-7 inline-flex justify-center items-center text-start bg-white border border-gray-200 text-gray-800 text-sm rounded-lg shadow-2xs align-middle focus:outline-hidden focus:ring-2 focus:ring-blue-500 before:absolute before:inset-0 before:z-1 hover:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700",
                  "dropdownClasses": "mt-2 z-50 w-48 p-1 space-y-0.5 bg-white rounded-xl shadow-xl dark:bg-neutral-900",
                  "optionClasses": "hs-selected:bg-gray-100 dark:hs-selected:bg-neutral-800 py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800",
                  "optionTemplate": "<div className=\"flex justify-between items-center w-full\"><span data-title></span><span className=\"hidden hs-selected:block\"><svg className=\"shrink-0 size-3.5 text-gray-800 dark:text-neutral-200\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>",
                  "viewport": "#hs-modal-status-body"
                }'
                        className="hidden"
                      >
                        <option value="">Choose</option>
                        <option selected>Never</option>
                        <option>In 30 minutes</option>
                        <option>In 1 hour</option>
                        <option>Today</option>
                        <option>This week</option>
                      </select>

                      <div className="absolute top-1/2 end-2.5 -translate-y-1/2">
                        <svg
                          className="shrink-0 size-3.5 text-gray-400 dark:text-neutral-500"
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
                          <path d="m7 15 5 5 5-5" />
                          <path d="m7 9 5-5 5 5" />
                        </svg>
                      </div>
                    </div>
                    {/* End Select */}
                  </div>

                  <div className="flex items-center gap-x-3">
                    <label className="text-sm text-gray-500 dark:text-neutral-500">
                      Visible to
                    </label>

                    {/* Select */}
                    <div className="relative inline-block">
                      <select
                        id="hs-pro-select-visibility"
                        data-hs-select='{
                  "placeholder": "Visibile to",
                  "toggleTag": "<button type=\"button\" aria-expanded=\"false\"><span className=\"me-2\" data-icon></span><span className=\"text-gray-800 dark:text-neutral-200\" data-title></span></button>",
                  "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-2 ps-3 pe-7 inline-flex justify-center items-center text-start bg-white border border-gray-200 text-gray-500 text-sm rounded-lg shadow-2xs align-middle focus:outline-hidden focus:ring-2 focus:ring-blue-500 before:absolute before:inset-0 before:z-1 hover:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-600 dark:text-neutral-500 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700",
                  "dropdownClasses": "mt-2 z-50 w-48 p-1 space-y-0.5 bg-white rounded-xl shadow-xl dark:bg-neutral-900",
                  "optionClasses": "hs-selected:bg-gray-100 dark:hs-selected:bg-neutral-800 py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800",
                  "optionTemplate": "<div><div className=\"flex items-center\"><div className=\"me-2\" data-icon></div><div className=\"font-semibold text-gray-800 dark:text-neutral-200\" data-title></div></div><div className=\"text-sm text-gray-500 dark:text-neutral-500\" data-description></div></div>",
                  "viewport": "#hs-modal-status-body"
                }'
                        className="hidden"
                      >
                        <option value="">Choose</option>
                        <option
                          value="1"
                          selected
                          data-hs-select-option='{
                  "description": "Your status will be visible to everyone",
                  "icon": "<svg className=\"shrink-0 size-4\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\" className=\"lucide lucide-globe-2\"><path d=\"M21.54 15H17a2 2 0 0 0-2 2v4.54\"/><path d=\"M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17\"/><path d=\"M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05\"/><circle cx=\"12\" cy=\"12\" r=\"10\"/></svg>"
                }'
                        >
                          Anyone
                        </option>
                        <option
                          value="2"
                          data-hs-select-option='{
                  "icon": "<svg className=\"inline-block size-4\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16.0355 1.75926C10.6408 1.75926 5.30597 1.49951 0.0111241 1C-0.288584 7.23393 5.50578 13.1282 12.7987 14.5668L13.9975 14.7266C14.3372 12.4289 15.9956 3.7773 16.595 1.73928C16.4152 1.75926 16.2353 1.75926 16.0355 1.75926Z\" fill=\"#A49DFF\"/><path d=\"M16.615 1.75926C16.615 1.75926 25.2266 7.9932 28.5234 16.3451C30.0419 11.3499 31.1608 6.15498 32 1C26.8051 1.49951 21.71 1.75926 16.615 1.75926Z\" fill=\"#28289A\"/><path d=\"M13.9975 14.7466L13.8177 15.9455C13.8177 15.9455 12.2592 28.4133 23.1886 31.9699C25.2266 26.8748 27.0049 21.6599 28.5234 16.3251C21.9698 15.8456 13.9975 14.7466 13.9975 14.7466Z\" fill=\"#5ADCEE\"/><path d=\"M16.6149 1.75927C16.0155 3.79729 14.3571 12.4089 14.0175 14.7466C14.0175 14.7466 21.9897 15.8456 28.5233 16.3251C25.1866 7.9932 16.6149 1.75927 16.6149 1.75927Z\" fill=\"#7878FF\"/></svg>"
                }'
                        >
                          Guideline
                        </option>
                      </select>

                      <div className="absolute top-1/2 end-2.5 -translate-y-1/2">
                        <svg
                          className="shrink-0 size-3.5 text-gray-400 dark:text-neutral-500"
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
                          <path d="m7 15 5 5 5-5" />
                          <path d="m7 9 5-5 5 5" />
                        </svg>
                      </div>
                    </div>
                    {/* End Select */}
                  </div>
                </div>
                {/* End Subfooter */}
              </div>
              {/* End Body */}

              {/* Footer */}
              <div className="p-4 flex justify-between gap-x-2">
                <div className="flex-1 flex justify-end items-center gap-2">
                  <button
                    type="button"
                    className="py-2 px-3 text-nowrap inline-flex justify-center items-center text-start whitespace-nowrap bg-white border border-gray-200 text-gray-800 text-sm font-medium rounded-lg shadow-2xs align-middle hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                    data-hs-overlay="#hs-pro-dsm"
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    className="py-2 px-3 text-nowrap inline-flex justify-center items-center gap-x-2 text-start whitespace-nowrap bg-blue-600 border border-blue-600 text-white text-sm font-medium rounded-lg shadow-2xs align-middle hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-1 focus:ring-blue-300 dark:focus:ring-blue-500"
                    data-hs-overlay="#hs-pro-dsm"
                  >
                    Save status
                  </button>
                </div>
              </div>
              {/* End Footer */}
            </div>
          </div>
        </div>
        {/* End Status */}
      </div>
      <div>
        {currentTab == 0 && <GeneralSettings />}
        {currentTab == 1 && <SocialInformationsSettings user={user}/>}
        {currentTab == 2 && <SecuritySettings />}
        {currentTab == 3 && <SecuritySettings />}
      </div>
      {}
    </>
  );
};

export default ProfilSettings;
