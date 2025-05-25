import React from "react";
import { useForm, usePage } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";
import FormError from "@/Components/Errors/FormError";
import { __ } from "@/Utils/Functions/translate";

export default function CreateTeamForm() {
  // @ts-ignore
  const {
    auth: { user },
    jetstream,
    industries,
  } = usePage().props as any;

  const { data, setData, post, processing, errors } = useForm({
    name: "",
    industry: "",
    description: "",
  });

  function submit(e: React.FormEvent) {
    e.preventDefault();

    post("/teams/create", {
      errorBag: "createTeam",
      preserveScroll: true,
    });
  }

  return (
    <form onSubmit={submit}>
      {/* Status Card */}
      <div className="bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
        {/* Header */}
        <div className="py-2.5 px-4 flex justify-between items-center border-b border-gray-200 dark:border-neutral-700">
          <h3 className="font-medium text-gray-800 dark:text-neutral-200">Create team</h3>
        </div>
        {/* End Header */}

        <div className="p-4 space-y-5">
          <div className="space-y-2">
            <label
              htmlFor="hs-pro-dactmt"
              className="block mb-2 text-sm font-medium text-gray-800 dark:text-neutral-200"
            >
              Title
            </label>

            <input
              id="hs-pro-dactmt"
              type="text"
              className="py-1.5 sm:py-2 px-3 block w-full border-gray-200 rounded-lg sm:text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600"
              placeholder="Team title"
              onChange={(e) => setData("name", e.target.value)}
            />

            {errors.name && <FormError message={errors.name} />}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="dactmi"
              className="block mb-2 text-sm font-medium text-gray-800 dark:text-neutral-200"
            >
              Industry
            </label>

            {/* Select */}
            <div className="relative inline-block">
              <select
                id="hs-pro-select-revenue"
                data-hs-select='{
      "placeholder": "Select option...",
       "hasSearch": true,
       "searchPlaceholder": "Industry",
       "searchClasses": "block w-full sm:text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder:text-neutral-400 py-1.5 sm:py-2 px-3",
      "searchWrapperClasses": "bg-white p-2 -mx-1 sticky top-0 dark:bg-neutral-900",
      "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
      "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative -ms-2 py-1.5 ps-2.5 pe-6 inline-flex shrink-0 justify-center items-center gap-x-1.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 before:absolute before:inset-0 before:z-1 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700",
      "dropdownClasses": "mt-2 z-50 max-h-72 w-52 p-1 space-y-0.5 overflow-hidden overflow-y-auto bg-white rounded-xl shadow-xl [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900",
      "optionClasses": "hs-selected:bg-gray-100 dark:hs-selected:bg-neutral-800 py-1.5 px-2 w-full text-[13px] text-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700",
      "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"shrink-0 size-3.5 text-gray-800 dark:text-neutral-200\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
    }'
                className="hidden"
                onChange={(e) => setData("industry", e.target.value)}
              >
                <option value="">Choose</option>
                {industries.map((industry: { id: number; name: string }, i: number) => (
                  <option key={i} value={industry.id}>
                    {__(`industries.${industry.name}`)}
                  </option>
                ))}
                {/*<option selected>Revenue</option>*/}
                {/*<option>Total sales</option>*/}
                {/*<option>New sales</option>*/}
                {/*<option>Refunds</option>*/}
                {/*<option>New subscriptions</option>*/}
                {/*<option>Trial conversion rate</option>*/}
                {/*<option>Affiliate revenue</option>*/}
                {/*<option>Affiliate clicks</option>*/}
              </select>

              <div className="absolute top-1/2 end-2 -translate-y-1/2">
                <svg
                  className="shrink-0 size-3.5 text-gray-600 dark:text-neutral-400"
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
              </div>
            </div>
            {/* End Select */}
            {errors.industry && <FormError message={errors.industry} />}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="dactmd"
              className="block mb-2 text-sm font-medium text-gray-800 dark:text-neutral-200"
            >
              Description
            </label>

            <textarea
              id="dactmd"
              className="py-1.5 sm:py-2 px-3 block w-full border-gray-200 rounded-lg sm:text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600"
              rows={3}
              placeholder="Tell us a little bit about team"
              onChange={(e) => setData("description", e.target.value)}
              data-hs-textarea-auto-height
            ></textarea>
            {errors.description && <FormError message={errors.description} />}
          </div>

          {/*    <div className="space-y-2">*/}
          {/*        <label*/}
          {/*            htmlFor="dactmm"*/}
          {/*            className="block mb-2 text-sm font-medium text-gray-800 dark:text-neutral-200"*/}
          {/*        >*/}
          {/*            Members*/}
          {/*        </label>*/}

          {/*        /!* Input Form *!/*/}
          {/*        <div className="flex flex-col sm:flex-row sm:items-center gap-3">*/}
          {/*            <input*/}
          {/*                id="dactmm"*/}
          {/*                type="text"*/}
          {/*                className="py-1.5 sm:py-2 px-3 block w-full border-gray-200 rounded-lg sm:text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600"*/}
          {/*                placeholder="Enter name"*/}
          {/*            />*/}

          {/*            <button*/}
          {/*                type="button"*/}
          {/*                className="py-1.5 sm:py-2 px-3 inline-flex justify-center items-center gap-x-2 sm:text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"*/}
          {/*            >*/}
          {/*                <svg*/}
          {/*                    className="shrink-0 size-4"*/}
          {/*                    xmlns="http://www.w3.org/2000/svg"*/}
          {/*                    width="24"*/}
          {/*                    height="24"*/}
          {/*                    viewBox="0 0 24 24"*/}
          {/*                    fill="none"*/}
          {/*                    stroke="currentColor"*/}
          {/*                    strokeWidth="2"*/}
          {/*                    strokeLinecap="round"*/}
          {/*                    strokeLinejoin="round"*/}
          {/*                >*/}
          {/*                    <path d="M5 12h14" />*/}
          {/*                    <path d="M12 5v14" />*/}
          {/*                </svg>*/}
          {/*                Add*/}
          {/*            </button>*/}
          {/*        </div>*/}
          {/*        /!* End Input Form *!/*/}
          {/*    </div>*/}

          {/*    <div className="space-y-2">*/}
          {/*        <label className="block mb-2 text-sm font-medium text-gray-800 dark:text-neutral-200">*/}
          {/*            Suggested members*/}
          {/*        </label>*/}

          {/*        <div className="flex items-center space-x-2">*/}
          {/*            /!* User *!/*/}
          {/*            <div className="hs-tooltip inline-block">*/}
          {/*                <label*/}
          {/*                    htmlFor="hs-pro-dactcach1"*/}
          {/*                    className="relative block rounded-full cursor-pointer"*/}
          {/*                >*/}
          {/*                    <img*/}
          {/*                        className="hs-tooltip-toggle shrink-0 size-11 rounded-full"*/}
          {/*                        src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"*/}
          {/*                        alt="Avatar"*/}
          {/*                    />*/}
          {/*                    <span className="block absolute -top-1 -end-1 bg-white rounded-full dark:bg-neutral-800">*/}
          {/*    <span className="relative flex flex-col justify-center items-center size-5 bg-gray-100 border-2 border-white text-gray-600 rounded-full dark:bg-neutral-700 dark:border-neutral-800 dark:text-neutral-300">*/}
          {/*      <input*/}
          {/*          type="checkbox"*/}
          {/*          id="hs-pro-dactcach1"*/}
          {/*          className="absolute top-0 start-0 size-full bg-transparent border-transparent checked:bg-blue-500 focus:ring-0 focus:ring-offset-0 rounded-full focus:outline-hidden"*/}
          {/*      />*/}
          {/*      <svg*/}
          {/*          className="shrink-0 size-3"*/}
          {/*          xmlns="http://www.w3.org/2000/svg"*/}
          {/*          width="16"*/}
          {/*          height="16"*/}
          {/*          fill="currentColor"*/}
          {/*          viewBox="0 0 16 16"*/}
          {/*      >*/}
          {/*        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />*/}
          {/*      </svg>*/}
          {/*    </span>*/}
          {/*  </span>*/}
          {/*                </label>*/}
          {/*                <span*/}
          {/*                    className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"*/}
          {/*                    role="tooltip"*/}
          {/*                >*/}
          {/*  James Collins*/}
          {/*</span>*/}
          {/*            </div>*/}
          {/*            /!* End User *!/*/}

          {/*            /!* User *!/*/}
          {/*            <div className="hs-tooltip inline-block">*/}
          {/*                <label*/}
          {/*                    htmlFor="hs-pro-dactcach2"*/}
          {/*                    className="relative block rounded-full cursor-pointer"*/}
          {/*                >*/}
          {/*  <span className="hs-tooltip-toggle flex shrink-0 justify-center items-center size-11 bg-white border border-gray-200 text-gray-700 font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">*/}
          {/*    L*/}
          {/*  </span>*/}
          {/*                    <span className="block absolute -top-1 -end-1 bg-white rounded-full dark:bg-neutral-800">*/}
          {/*    <span className="relative flex flex-col justify-center items-center size-5 bg-gray-100 border-2 border-white text-gray-600 rounded-full dark:bg-neutral-700 dark:border-neutral-800 dark:text-neutral-300">*/}
          {/*      <input*/}
          {/*          type="checkbox"*/}
          {/*          id="hs-pro-dactcach2"*/}
          {/*          className="absolute top-0 start-0 size-full bg-transparent border-transparent checked:bg-blue-500 focus:ring-0 focus:ring-offset-0 rounded-full focus:outline-hidden"*/}
          {/*      />*/}
          {/*      <svg*/}
          {/*          className="shrink-0 size-3"*/}
          {/*          xmlns="http://www.w3.org/2000/svg"*/}
          {/*          width="16"*/}
          {/*          height="16"*/}
          {/*          fill="currentColor"*/}
          {/*          viewBox="0 0 16 16"*/}
          {/*      >*/}
          {/*        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />*/}
          {/*      </svg>*/}
          {/*    </span>*/}
          {/*  </span>*/}
          {/*                </label>*/}
          {/*                <span*/}
          {/*                    className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"*/}
          {/*                    role="tooltip"*/}
          {/*                >*/}
          {/*  Lori Hunter*/}
          {/*</span>*/}
          {/*            </div>*/}
          {/*            /!* End User *!/*/}

          {/*            /!* User *!/*/}
          {/*            <div className="hs-tooltip inline-block">*/}
          {/*                <label*/}
          {/*                    htmlFor="hs-pro-dactcach3"*/}
          {/*                    className="relative block rounded-full cursor-pointer"*/}
          {/*                >*/}
          {/*                    <img*/}
          {/*                        className="hs-tooltip-toggle shrink-0 size-11 rounded-full"*/}
          {/*                        src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"*/}
          {/*                        alt="Avatar"*/}
          {/*                    />*/}
          {/*                    <span className="block absolute -top-1 -end-1 bg-white rounded-full dark:bg-neutral-800">*/}
          {/*    <span className="relative flex flex-col justify-center items-center size-5 bg-gray-100 border-2 border-white text-gray-600 rounded-full dark:bg-neutral-700 dark:border-neutral-800 dark:text-neutral-300">*/}
          {/*      <input*/}
          {/*          type="checkbox"*/}
          {/*          id="hs-pro-dactcach3"*/}
          {/*          className="absolute top-0 start-0 size-full bg-transparent border-transparent checked:bg-blue-500 focus:ring-0 focus:ring-offset-0 rounded-full focus:outline-hidden"*/}
          {/*      />*/}
          {/*      <svg*/}
          {/*          className="shrink-0 size-3"*/}
          {/*          xmlns="http://www.w3.org/2000/svg"*/}
          {/*          width="16"*/}
          {/*          height="16"*/}
          {/*          fill="currentColor"*/}
          {/*          viewBox="0 0 16 16"*/}
          {/*      >*/}
          {/*        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />*/}
          {/*      </svg>*/}
          {/*    </span>*/}
          {/*  </span>*/}
          {/*                </label>*/}
          {/*                <span*/}
          {/*                    className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"*/}
          {/*                    role="tooltip"*/}
          {/*                >*/}
          {/*  Lewis Clarke*/}
          {/*</span>*/}
          {/*            </div>*/}
          {/*            /!* End User *!/*/}

          {/*            /!* User *!/*/}
          {/*            <div className="hs-tooltip inline-block">*/}
          {/*                <label*/}
          {/*                    htmlFor="hs-pro-dactcach4"*/}
          {/*                    className="relative block rounded-full cursor-pointer"*/}
          {/*                >*/}
          {/*                    <img*/}
          {/*                        className="hs-tooltip-toggle shrink-0 size-11 rounded-full"*/}
          {/*                        src="https://images.unsplash.com/photo-1659482634023-2c4fda99ac0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"*/}
          {/*                        alt="Avatar"*/}
          {/*                    />*/}
          {/*                    <span className="block absolute -top-1 -end-1 bg-white rounded-full dark:bg-neutral-800">*/}
          {/*    <span className="relative flex flex-col justify-center items-center size-5 bg-gray-100 border-2 border-white text-gray-600 rounded-full dark:bg-neutral-700 dark:border-neutral-800 dark:text-neutral-300">*/}
          {/*      <input*/}
          {/*          type="checkbox"*/}
          {/*          id="hs-pro-dactcach4"*/}
          {/*          className="absolute top-0 start-0 size-full bg-transparent border-transparent checked:bg-blue-500 focus:ring-0 focus:ring-offset-0 rounded-full focus:outline-hidden"*/}
          {/*      />*/}
          {/*      <svg*/}
          {/*          className="shrink-0 size-3"*/}
          {/*          xmlns="http://www.w3.org/2000/svg"*/}
          {/*          width="16"*/}
          {/*          height="16"*/}
          {/*          fill="currentColor"*/}
          {/*          viewBox="0 0 16 16"*/}
          {/*      >*/}
          {/*        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />*/}
          {/*      </svg>*/}
          {/*    </span>*/}
          {/*  </span>*/}
          {/*                </label>*/}
          {/*                <span*/}
          {/*                    className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"*/}
          {/*                    role="tooltip"*/}
          {/*                >*/}
          {/*  Ella Lauda*/}
          {/*</span>*/}
          {/*            </div>*/}
          {/*            /!* End User *!/*/}

          {/*            /!* User *!/*/}
          {/*            <div className="hs-tooltip inline-block">*/}
          {/*                <label*/}
          {/*                    htmlFor="hs-pro-dactcach5"*/}
          {/*                    className="relative block rounded-full cursor-pointer"*/}
          {/*                >*/}
          {/*  <span className="hs-tooltip-toggle flex shrink-0 justify-center items-center size-11 bg-white border border-gray-200 text-gray-700 font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">*/}
          {/*    O*/}
          {/*  </span>*/}
          {/*                    <span className="block absolute -top-1 -end-1 bg-white rounded-full dark:bg-neutral-800">*/}
          {/*    <span className="relative flex flex-col justify-center items-center size-5 bg-gray-100 border-2 border-white text-gray-600 rounded-full dark:bg-neutral-700 dark:border-neutral-800 dark:text-neutral-300">*/}
          {/*      <input*/}
          {/*          type="checkbox"*/}
          {/*          id="hs-pro-dactcach5"*/}
          {/*          className="absolute top-0 start-0 size-full bg-transparent border-transparent checked:bg-blue-500 focus:ring-0 focus:ring-offset-0 rounded-full focus:outline-hidden"*/}
          {/*      />*/}
          {/*      <svg*/}
          {/*          className="shrink-0 size-3"*/}
          {/*          xmlns="http://www.w3.org/2000/svg"*/}
          {/*          width="16"*/}
          {/*          height="16"*/}
          {/*          fill="currentColor"*/}
          {/*          viewBox="0 0 16 16"*/}
          {/*      >*/}
          {/*        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />*/}
          {/*      </svg>*/}
          {/*    </span>*/}
          {/*  </span>*/}
          {/*                </label>*/}
          {/*                <span*/}
          {/*                    className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"*/}
          {/*                    role="tooltip"*/}
          {/*                >*/}
          {/*  Ols Schols*/}
          {/*</span>*/}
          {/*            </div>*/}
          {/*            /!* End User *!/*/}
          {/*        </div>*/}
          {/*    </div>*/}

          {/*    /!* Drag 'n Drop *!/*/}
          {/*    <div className="space-y-2">*/}
          {/*        <label className="block block mb-2 text-sm font-medium text-gray-800 dark:text-neutral-200">*/}
          {/*            Cover*/}
          {/*        </label>*/}
          {/*        <div className="p-12 flex justify-center bg-white border border-dashed border-gray-300 rounded-xl dark:bg-neutral-800 dark:border-neutral-600">*/}
          {/*            <div className="text-center">*/}
          {/*                <svg*/}
          {/*                    className="w-16 text-gray-400 mx-auto dark:text-neutral-400"*/}
          {/*                    width="70"*/}
          {/*                    height="46"*/}
          {/*                    viewBox="0 0 70 46"*/}
          {/*                    fill="none"*/}
          {/*                    xmlns="http://www.w3.org/2000/svg"*/}
          {/*                >*/}
          {/*                    <path*/}
          {/*                        d="M6.05172 9.36853L17.2131 7.5083V41.3608L12.3018 42.3947C9.01306 43.0871 5.79705 40.9434 5.17081 37.6414L1.14319 16.4049C0.515988 13.0978 2.73148 9.92191 6.05172 9.36853Z"*/}
          {/*                        fill="currentColor"*/}
          {/*                        stroke="currentColor"*/}
          {/*                        strokeWidth="2"*/}
          {/*                        className="fill-white stroke-gray-400 dark:fill-neutral-800 dark:stroke-neutral-500"*/}
          {/*                    />*/}
          {/*                    <path*/}
          {/*                        d="M63.9483 9.36853L52.7869 7.5083V41.3608L57.6982 42.3947C60.9869 43.0871 64.203 40.9434 64.8292 37.6414L68.8568 16.4049C69.484 13.0978 67.2685 9.92191 63.9483 9.36853Z"*/}
          {/*                        fill="currentColor"*/}
          {/*                        stroke="currentColor"*/}
          {/*                        strokeWidth="2"*/}
          {/*                        className="fill-white stroke-gray-400 dark:fill-neutral-800 dark:stroke-neutral-500"*/}
          {/*                    />*/}
          {/*                    <rect*/}
          {/*                        x="17.0656"*/}
          {/*                        y="1.62305"*/}
          {/*                        width="35.8689"*/}
          {/*                        height="42.7541"*/}
          {/*                        rx="5"*/}
          {/*                        fill="currentColor"*/}
          {/*                        stroke="currentColor"*/}
          {/*                        strokeWidth="2"*/}
          {/*                        className="fill-white stroke-gray-400 dark:fill-neutral-800 dark:stroke-neutral-500"*/}
          {/*                    />*/}
          {/*                    <path*/}
          {/*                        d="M47.9344 44.3772H22.0655C19.3041 44.3772 17.0656 42.1386 17.0656 39.3772L17.0656 35.9161L29.4724 22.7682L38.9825 33.7121C39.7832 34.6335 41.2154 34.629 42.0102 33.7025L47.2456 27.5996L52.9344 33.7209V39.3772C52.9344 42.1386 50.6958 44.3772 47.9344 44.3772Z"*/}
          {/*                        stroke="currentColor"*/}
          {/*                        strokeWidth="2"*/}
          {/*                        className="stroke-gray-400 dark:stroke-neutral-500"*/}
          {/*                    />*/}
          {/*                    <circle*/}
          {/*                        cx="39.5902"*/}
          {/*                        cy="14.9672"*/}
          {/*                        r="4.16393"*/}
          {/*                        stroke="currentColor"*/}
          {/*                        strokeWidth="2"*/}
          {/*                        className="stroke-gray-400 dark:stroke-neutral-500"*/}
          {/*                    />*/}
          {/*                </svg>*/}

          {/*                <div className="mt-4 flex flex-wrap justify-center text-sm/6 text-gray-600">*/}
          {/*  <span className="pe-1 font-medium text-gray-800 dark:text-neutral-200">*/}
          {/*    Drop your files here or*/}
          {/*  </span>*/}
          {/*                    <label*/}
          {/*                        htmlFor="hs-pro-dactc"*/}
          {/*                        className="relative cursor-pointer bg-white font-semibold text-blue-600 hover:text-blue-700 rounded-lg decoration-2 hover:underline focus-within:outline-hidden focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 dark:bg-neutral-800 dark:text-blue-500 dark:hover:text-blue-600"*/}
          {/*                    >*/}
          {/*                        <span>browse</span>*/}
          {/*                        <input id="hs-pro-dactc" type="file" className="sr-only" />*/}
          {/*                    </label>*/}
          {/*                </div>*/}

          {/*                <p className="mt-1 text-xs text-gray-400 dark:text-neutral-400">CSV, XLS, DOCX</p>*/}
          {/*            </div>*/}
          {/*        </div>*/}
          {/*    </div>*/}
          {/*    /!* End Drag 'n Drop *!/*/}
        </div>

        {/* Footer */}
        <div className="p-4 flex justify-between gap-x-2">
          <div className="flex-1 flex justify-end items-center gap-2">
            <button
              type="button"
              className="py-2 px-3 text-nowrap inline-flex justify-center items-center text-start whitespace-nowrap bg-white border border-gray-200 text-gray-800 text-sm font-medium rounded-lg shadow-2xs align-middle hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="py-2 px-3 text-nowrap inline-flex justify-center items-center gap-x-2 text-start whitespace-nowrap bg-blue-600 border border-blue-600 text-white text-sm font-medium rounded-lg shadow-2xs align-middle hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-1 focus:ring-blue-300 dark:focus:ring-blue-500 cursor-pointer"
            >
              Create team
            </button>
          </div>
        </div>
        {/* Footer */}
      </div>
      {/* End Status Card */}
    </form>
  );
}
