import React from "react";
import SettingsLayout from "@/Layouts/SetttingsLayout";

interface SecuritySettingsProps {
  // Props ici
}

const SecuritySettings: React.FC<SecuritySettingsProps> = (props) => {
  return (
    <SettingsLayout>
      {/* Account Card */}
      {/* Title */}
      <div className="mb-4 xl:mb-8">
        <h1 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">Profile</h1>
        <p className="text-sm text-gray-500 dark:text-neutral-500">
          Manage your name, password and account settings.
        </p>
      </div>
      {/* End Title */}
      {/* Form */}
      <form>
        {/* Password */}
        <div className="py-6 sm:py-8 space-y-5 border-t border-gray-200 first:border-t-0 dark:border-neutral-700">
          <div className="inline-flex items-center gap-x-2">
            <h2 className="font-semibold text-gray-800 dark:text-neutral-200">Password</h2>
            {/* Tooltip */}
            <div className="hs-tooltip inline-block">
              <svg
                className="hs-tooltip-toggle shrink-0 ms-1 size-3 text-gray-500 dark:text-neutral-500"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
              <div
                className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-60 p-4 w-96 bg-white rounded-xl shadow-xl dark:bg-neutral-900 dark:text-neutral-400"
                role="tooltip"
              >
                <p className="font-medium text-gray-800 dark:text-neutral-200">
                  Password requirements:
                </p>
                <p className="mt-1 text-sm font-normal text-gray-500 dark:text-neutral-400">
                  Ensure that these requirements are met:
                </p>
                <ul className="mt-1 ps-3.5 list-disc list-outside text-sm font-normal text-gray-500 dark:text-neutral-400">
                  <li>Minimum 8 characters long - the more, the better</li>
                  <li>At least one lowercase character</li>
                  <li>At least one uppercase character</li>
                  <li>At least one number, symbol, or whitespace character</li>
                </ul>
              </div>
            </div>
            {/* End Tooltip */}
          </div>
          {/* Grid */}
          <div className="grid sm:grid-cols-12 gap-y-1.5 sm:gap-y-0 sm:gap-x-5">
            <div className="sm:col-span-4 xl:col-span-3 2xl:col-span-2">
              <label
                htmlFor="hs-pro-dappcp"
                className="sm:mt-2.5 inline-block text-sm text-gray-500 dark:text-neutral-500"
              >
                Current password
              </label>
            </div>
            {/* End Col */}
            <div className="sm:col-span-8 xl:col-span-4">
              {/* Input */}
              <div className="relative">
                <input
                  id="hs-pro-dappcp"
                  type="text"
                  className="py-1.5 sm:py-2 px-3 block w-full border-gray-200 rounded-lg sm:text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600"
                  placeholder="Enter current password"
                />
                <button
                  type="button"
                  data-hs-toggle-password='{
                "target": "#hs-pro-dappcp"
              }'
                  className="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-hidden focus:text-blue-600 dark:text-neutral-600 dark:focus:text-blue-500"
                >
                  <svg
                    className="shrink-0 size-3.5"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      className="hs-password-active:hidden"
                      d="M9.88 9.88a3 3 0 1 0 4.24 4.24"
                    />
                    <path
                      className="hs-password-active:hidden"
                      d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
                    />
                    <path
                      className="hs-password-active:hidden"
                      d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
                    />
                    <line className="hs-password-active:hidden" x1={2} x2={22} y1={2} y2={22} />
                    <path
                      className="hidden hs-password-active:block"
                      d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
                    />
                    <circle className="hidden hs-password-active:block" cx={12} cy={12} r={3} />
                  </svg>
                </button>
              </div>
              {/* End Input */}
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
          {/* Grid */}
          <div className="grid sm:grid-cols-12 gap-y-1.5 sm:gap-y-0 sm:gap-x-5">
            <div className="sm:col-span-4 xl:col-span-3 2xl:col-span-2">
              <label
                htmlFor="hs-pro-dappnp"
                className="sm:mt-2.5 inline-block text-sm text-gray-500 dark:text-neutral-500"
              >
                New password
              </label>
            </div>
            {/* End Col */}
            <div className="sm:col-span-8 xl:col-span-4">
              <div data-hs-toggle-password-group="" className="space-y-2">
                {/* Input */}
                <div className="relative">
                  <input
                    id="hs-pro-dappnp"
                    type="text"
                    className="py-1.5 sm:py-2 px-3 block w-full border-gray-200 rounded-lg sm:text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600"
                    placeholder="Enter new password"
                  />
                  <button
                    type="button"
                    data-hs-toggle-password='{
                  "target": ["#hs-pro-dappnp", "#hs-pro-dapprnp"]
                }'
                    className="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-hidden focus:text-blue-600 dark:text-neutral-600 dark:focus:text-blue-500"
                  >
                    <svg
                      className="shrink-0 size-3.5"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        className="hs-password-active:hidden"
                        d="M9.88 9.88a3 3 0 1 0 4.24 4.24"
                      />
                      <path
                        className="hs-password-active:hidden"
                        d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
                      />
                      <path
                        className="hs-password-active:hidden"
                        d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
                      />
                      <line className="hs-password-active:hidden" x1={2} x2={22} y1={2} y2={22} />
                      <path
                        className="hidden hs-password-active:block"
                        d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
                      />
                      <circle className="hidden hs-password-active:block" cx={12} cy={12} r={3} />
                    </svg>
                  </button>
                </div>
                {/* End Input */}
                {/* Input */}
                <div className="relative">
                  <input
                    id="hs-pro-dapprnp"
                    type="text"
                    className="py-1.5 sm:py-2 px-3 block w-full border-gray-200 rounded-lg sm:text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600"
                    placeholder="Repeat new password"
                  />
                  <button
                    type="button"
                    data-hs-toggle-password='{
                  "target": ["#hs-pro-dappnp", "#hs-pro-dapprnp"]
                }'
                    className="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-hidden focus:text-blue-600 dark:text-neutral-600 dark:focus:text-blue-500"
                  >
                    <svg
                      className="shrink-0 size-3.5"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        className="hs-password-active:hidden"
                        d="M9.88 9.88a3 3 0 1 0 4.24 4.24"
                      />
                      <path
                        className="hs-password-active:hidden"
                        d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
                      />
                      <path
                        className="hs-password-active:hidden"
                        d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
                      />
                      <line className="hs-password-active:hidden" x1={2} x2={22} y1={2} y2={22} />
                      <path
                        className="hidden hs-password-active:block"
                        d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
                      />
                      <circle className="hidden hs-password-active:block" cx={12} cy={12} r={3} />
                    </svg>
                  </button>
                </div>
                {/* End Input */}
                <div
                  data-hs-strong-password='{
                  "target": "#hs-pro-dappnp",
                  "stripClasses": "hs-strong-password:opacity-100 hs-strong-password-accepted:bg-teal-500 h-2 flex-auto rounded-full bg-blue-500 opacity-50 mx-1"
                }'
                  className="flex mt-2 -mx-1"
                />
                <p className="text-sm text-gray-600 dark:text-neutral-400">
                  Level: <span />
                </p>
                {/* Button Group */}
                <div className="flex items-center gap-x-3">
                  <button
                    type="button"
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                  >
                    Change
                  </button>
                  <a
                    className="text-sm text-blue-600 decoration-2 hover:underline font-medium focus:outline-hidden focus:underline dark:text-blue-400 dark:hover:text-blue-500"
                    href="#"
                  >
                    I forgot my password
                  </a>
                </div>
                {/* End Button Group */}
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Password */}

        {/* End Connect Accounts */}
        {/* Two-Step Verification */}
        <div className="py-6 sm:py-8 space-y-5 border-t border-gray-200 first:border-t-0 dark:border-neutral-700">
          {/* Grid */}
          <div className="grid sm:grid-cols-12 gap-y-1.5 sm:gap-y-0 sm:gap-x-5">
            <div className="sm:col-span-4 xl:col-span-3 2xl:col-span-2">
              <label className="sm:mt-2.5 inline-block text-sm text-gray-500 dark:text-neutral-500">
                Two-Step Verification
              </label>
            </div>
            {/* End Col */}
            <div className="sm:col-span-8 xl:col-span-4">
              {/* Alert */}
              <div
                className="p-4 bg-blue-50 text-blue-600 rounded-lg bg-blue-500/10"
                role="alert"
                tabIndex={-1}
                aria-labelledby="hs-pro-dasfaaoea-label"
              >
                <div className="flex">
                  <svg
                    className="shrink-0 size-5 mt-1"
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
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <div className="ms-3 space-y-2">
                    <h3
                      id="hs-pro-dasfaaoea-label"
                      className="text-sm text-blue-600 dark:text-blue-500"
                    >
                      Advanced security features are available on Enterprise
                    </h3>
                    <button
                      type="button"
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                    >
                      <svg
                        className="shrink-0 size-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
                      </svg>
                      Upgrade
                    </button>
                  </div>
                </div>
              </div>
              {/* End Alert */}
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Two-Step Verification */}
        {/*/!* Disable Ads *!/*/}
        {/*<div className="py-6 sm:py-8 space-y-5 border-t border-gray-200 first:border-t-0 dark:border-neutral-700">*/}
        {/*    /!* Grid *!/*/}
        {/*    <div className="grid sm:grid-cols-12 gap-y-1.5 sm:gap-y-0 sm:gap-x-5">*/}
        {/*        <div className="sm:col-span-4 xl:col-span-3 2xl:col-span-2">*/}
        {/*            <label className="inline-block text-sm text-gray-500 dark:text-neutral-500">*/}
        {/*                Disable Ads*/}
        {/*                <span className="ms-1 inline-flex items-center gap-x-1.5 px-1.5 text-[10px] font-medium bg-blue-600 text-white rounded-full dark:bg-blue-500">*/}
        {/*      PRO*/}
        {/*    </span>*/}
        {/*            </label>*/}
        {/*        </div>*/}
        {/*        /!* End Col *!/*/}
        {/*        <div className="sm:col-span-8 xl:col-span-4">*/}
        {/*            <div className="mt-1.5 flex">*/}
        {/*                <input*/}
        {/*                    type="checkbox"*/}
        {/*                    className="shrink-0 border-gray-200 size-3.5 rounded-sm text-blue-600 checked:border-blue-600 focus:ring-offset-0 dark:bg-neutral-800 dark:checked:bg-blue-500 dark:border-neutral-700"*/}
        {/*                    id="hs-pro-dapdach"*/}
        {/*                />*/}
        {/*                <label*/}
        {/*                    htmlFor="hs-pro-dapdach"*/}
        {/*                    className="text-xs text-gray-600 ms-2 dark:text-neutral-400"*/}
        {/*                >*/}
        {/*                    With your Pro account, you can disable ads across the site.*/}
        {/*                </label>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*        /!* End Col *!/*/}
        {/*    </div>*/}
        {/*    /!* End Grid *!/*/}
        {/*</div>*/}
        {/*/!* End Disable Ads *!/*/}
        {/* Sessions */}
        <div className="py-6 sm:py-8 space-y-5 border-t border-gray-200 first:border-t-0 dark:border-neutral-700">
          {/* Grid */}
          <div className="grid sm:grid-cols-12 gap-y-1.5 2xl:gap-y-0 sm:gap-x-5">
            <div className="sm:col-span-4 xl:col-span-3 2xl:col-span-2">
              <label className="inline-block text-sm text-gray-500 dark:text-neutral-500">
                Sessions
              </label>
            </div>
            {/* End Col */}
            <div className="sm:col-span-8 2xl:col-span-10">
              {/* Grid */}
              <div className="grid xl:grid-cols-2 2xl:grid-cols-3 gap-5">
                {/* Card */}
                <div className="p-5 space-y-4 flex flex-col bg-white border border-gray-200 rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                  {/* Header */}
                  <div className="flex justify-between">
                    <div className="flex flex-col justify-center items-center size-9.5 border border-gray-200 rounded-lg dark:border-neutral-700">
                      <svg
                        className="size-5 text-gray-500 dark:text-neutral-500"
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
                        <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
                      </svg>
                    </div>
                    <button
                      type="button"
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                        <polyline points="16 17 21 12 16 7" />
                        <line x1={21} x2={9} y1={12} y2={12} />
                      </svg>
                      Sign out
                    </button>
                  </div>
                  {/* End Header */}
                  {/* Heading */}
                  <div className="flex flex-wrap justify-between items-center gap-2">
                    <span className="font-medium text-gray-800 dark:text-neutral-200">Mac</span>
                    <span className="inline-flex items-center gap-1.5 py-px px-2 text-xs font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-500/10 dark:text-blue-500">
                      Current session
                    </span>
                  </div>
                  {/* End Heading */}
                  {/* List Group */}
                  <ul className="space-y-2">
                    <li className="flex justify-between items-center">
                      <span className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                        Location:
                      </span>
                      <span className="text-sm text-gray-800 dark:text-neutral-200">
                        United Kingdom
                      </span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                        Device:
                      </span>
                      <span className="text-sm text-gray-800 dark:text-neutral-200">
                        Safari - iOS
                      </span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                        IP address:
                      </span>
                      <span className="text-sm text-gray-800 dark:text-neutral-200">
                        129.562.028.172
                      </span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                        Recent activity:
                      </span>
                      <span className="text-sm text-gray-800 dark:text-neutral-200">
                        5 minutes ago
                      </span>
                    </li>
                  </ul>
                  {/* End List Group */}
                  <button
                    type="button"
                    className="py-2 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  >
                    <svg
                      className="shrink-0 size-4"
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
                      <circle cx={12} cy={12} r={10} />
                      <path d="M12 16v-4" />
                      <path d="M12 8h.01" />
                    </svg>
                    Don’t recognize something?
                  </button>
                </div>
                {/* End Card */}
                {/* Card */}
                <div className="p-5 space-y-4 flex flex-col bg-white border border-gray-200 rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                  {/* Header */}
                  <div className="flex justify-between">
                    <div className="flex flex-col justify-center items-center size-9.5 border border-gray-200 rounded-lg dark:border-neutral-700">
                      <svg
                        className="size-5 text-gray-500 dark:text-neutral-500"
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
                        <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
                      </svg>
                    </div>
                    <button
                      type="button"
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                        <polyline points="16 17 21 12 16 7" />
                        <line x1={21} x2={9} y1={12} y2={12} />
                      </svg>
                      Sign out
                    </button>
                  </div>
                  {/* End Header */}
                  {/* Heading */}
                  <div className="flex flex-wrap justify-between items-center gap-2">
                    <span className="font-medium text-gray-800 dark:text-neutral-200">Mac</span>
                    <span className="inline-flex items-center gap-1.5 py-px px-2 text-xs font-medium bg-gray-100 text-gray-800 rounded-full dark:bg-neutral-700 dark:text-neutral-200">
                      Expired
                    </span>
                  </div>
                  {/* End Heading */}
                  {/* List Group */}
                  <ul className="space-y-2">
                    <li className="flex justify-between items-center">
                      <span className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                        Location:
                      </span>
                      <span className="text-sm text-gray-800 dark:text-neutral-200">
                        United Kingdom
                      </span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                        Device:
                      </span>
                      <span className="text-sm text-gray-800 dark:text-neutral-200">
                        Safari - iOS
                      </span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                        IP address:
                      </span>
                      <span className="text-sm text-gray-800 dark:text-neutral-200">
                        129.562.028.172
                      </span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                        Recent activity:
                      </span>
                      <span className="text-sm text-gray-800 dark:text-neutral-200">
                        1 month ago
                      </span>
                    </li>
                  </ul>
                  {/* End List Group */}
                  <button
                    type="button"
                    className="py-2 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  >
                    <svg
                      className="shrink-0 size-4"
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
                      <circle cx={12} cy={12} r={10} />
                      <path d="M12 16v-4" />
                      <path d="M12 8h.01" />
                    </svg>
                    Don’t recognize something?
                  </button>
                </div>
                {/* End Card */}
                {/* Card */}
                <div className="p-5 space-y-4 flex flex-col bg-white border border-gray-200 rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                  {/* Header */}
                  <div className="flex justify-between">
                    <div className="flex flex-col justify-center items-center size-9.5 border border-gray-200 rounded-lg dark:border-neutral-700">
                      <svg
                        className="size-5 text-gray-500 dark:text-neutral-500"
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
                        <rect width={16} height={20} x={4} y={2} rx={2} ry={2} />
                        <line x1={12} x2="12.01" y1={18} y2={18} />
                      </svg>
                    </div>
                    <button
                      type="button"
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                        <polyline points="16 17 21 12 16 7" />
                        <line x1={21} x2={9} y1={12} y2={12} />
                      </svg>
                      Sign out
                    </button>
                  </div>
                  {/* End Header */}
                  {/* Heading */}
                  <div className="flex flex-wrap justify-between items-center gap-2">
                    <span className="font-medium text-gray-800 dark:text-neutral-200">
                      iPad PRO
                    </span>
                  </div>
                  {/* End Heading */}
                  {/* List Group */}
                  <ul className="space-y-2">
                    <li className="flex justify-between items-center">
                      <span className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                        Location:
                      </span>
                      <span className="text-sm text-gray-800 dark:text-neutral-200">
                        United Kingdom
                      </span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                        Device:
                      </span>
                      <span className="text-sm text-gray-800 dark:text-neutral-200">
                        Safari - iOS
                      </span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                        IP address:
                      </span>
                      <span className="text-sm text-gray-800 dark:text-neutral-200">
                        129.562.028.172
                      </span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                        Recent activity:
                      </span>
                      <span className="text-sm text-gray-800 dark:text-neutral-200">
                        2 days ago
                      </span>
                    </li>
                  </ul>
                  {/* End List Group */}
                  <button
                    type="button"
                    className="py-2 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  >
                    <svg
                      className="shrink-0 size-4"
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
                      <circle cx={12} cy={12} r={10} />
                      <path d="M12 16v-4" />
                      <path d="M12 8h.01" />
                    </svg>
                    Don’t recognize something?
                  </button>
                </div>
                {/* End Card */}
              </div>
              {/* End Grid */}
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Sessions */}
        {/* Danger Zone */}
        <div className="py-6 sm:py-8 space-y-5 border-t border-gray-200 first:border-t-0 dark:border-neutral-700">
          {/* Grid */}
          <div className="grid sm:grid-cols-12 gap-y-1.5 sm:gap-y-0 sm:gap-x-5">
            <div className="sm:col-span-4 xl:col-span-3 2xl:col-span-2">
              <label className="inline-block text-sm text-gray-500 dark:text-neutral-500">
                Danger zone
              </label>
            </div>
            {/* End Col */}
            <div className="sm:col-span-8 xl:col-span-4">
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-red-500 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-red-500 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              >
                Delete my account
              </button>
              <p className="mt-3 text-sm text-gray-500 dark:text-neutral-500">
                This will immediately delete all of your data. This action is not reversible, so
                please continue with caution.{" "}
                <a
                  className="text-sm text-blue-600 decoration-2 hover:underline font-medium focus:outline-hidden focus:underline dark:text-blue-400 dark:hover:text-blue-500"
                  href="#"
                >
                  Learn more
                </a>
              </p>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Danger Zone */}
      </form>
      {/* End Form */}
      {/* End Account Card */}
    </SettingsLayout>
  );
};

export default SecuritySettings;
