import React from "react";
import AppLayout from "@/Layouts/AppLayout";
import GuestLayout from "@/Layouts/GuestLayout";

export default function Kuser() {
  return (
    <GuestLayout title="Kuser - " showFooter={false} showHeader={false}>
      <div className="min-h-screen flex items-center justify-center px-4">
          <>
              {/* ========== MAIN CONTENT ========== */}
              <main id="content" className="lg:ps-65 pt-15 pb-10 sm:pb-16">
                  <div className="max-w-6xl mx-auto">
                      {/* Breadcrumb */}
                      <ol className="lg:hidden pt-3 md:pt-5 sm:pb-2 md:pb-0 px-2 sm:px-5 flex items-center whitespace-nowrap">
                          <li className="flex items-center text-sm text-gray-600 dark:text-neutral-500">
                              User Profile
                              <svg
                                  className="shrink-0 overflow-visible size-4 ms-1.5 text-gray-400 dark:text-neutral-600"
                                  width={16}
                                  height={16}
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  aria-hidden="true"
                              >
                                  <path d="M6 13L10 3" stroke="currentColor" strokeLinecap="round" />
                              </svg>
                          </li>
                          <li className="ps-1.5 flex items-center truncate font-semibold text-gray-800 dark:text-neutral-200 text-sm truncate">
                              <span className="truncate">Profile</span>
                          </li>
                      </ol>
                      {/* End Breadcrumb */}
                      <div className="p-2 sm:p-5 sm:py-0 md:pt-5 space-y-5">
                          {/* User Profile Card */}
                          <div className="p-3 md:p-5 bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                              {/* SVG Background Element */}
                              <figure>
                                  <svg
                                      className="w-full"
                                      preserveAspectRatio="none"
                                      width={1113}
                                      height={161}
                                      viewBox="0 0 1113 161"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                  >
                                      <g clipPath="url(#clip0_666_220723)">
                                          <rect x="0.5" width={1112} height={161} rx={12} fill="white" />
                                          <rect x={1} width={1112} height={348} fill="#D9DEEA" />
                                          <path
                                              d="M512.694 359.31C547.444 172.086 469.835 34.2204 426.688 -11.3096H1144.27V359.31H512.694Z"
                                              fill="#C0CBDD"
                                          />
                                          <path
                                              d="M818.885 185.745C703.515 143.985 709.036 24.7949 726.218 -29.5801H1118.31V331.905C1024.49 260.565 963.098 237.945 818.885 185.745Z"
                                              fill="#8192B0"
                                          />
                                      </g>
                                      <defs>
                                          <clipPath id="clip0_666_220723">
                                              <rect
                                                  x="0.5"
                                                  width={1112}
                                                  height={161}
                                                  rx={12}
                                                  fill="white"
                                              />
                                          </clipPath>
                                      </defs>
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
                                                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                                                  <line x1={9} x2="9.01" y1={9} y2={9} />
                                                  <line x1={15} x2="15.01" y1={9} y2={9} />
                                              </svg>
                                              <span className="group-hover:block hidden">Set status</span>
                                          </button>
                                      </div>
                                  </div>
                                  <div className="mt-3 text-center">
                                      <h1 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
                                          Amanda Harvey
                                      </h1>
                                      <p className="text-gray-500 dark:text-neutral-500">iam_amanda</p>
                                  </div>
                              </div>
                              {/* End Avatar */}
                              {/* Header */}
                              <div className="mt-4 md:mt-7 -mb-0.5 flex flex-col md:flex-row md:justify-between md:items-center gap-3">
                                  <div className="md:order-2 flex justify-center md:justify-end">
                                      <a
                                          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                          href="../../pro/dashboard/account-profile.html"
                                      >
                                          Edit
                                      </a>
                                  </div>
                                  {/* Nav */}
                                  <div
                                      className="relative flex justify-center md:justify-start"
                                      data-hs-scroll-nav='{
          "autoCentering": true
        }'
                                  >
                                      <nav className="hs-scroll-nav-body flex flex-nowrap gap-x-1 overflow-x-auto [&::-webkit-scrollbar]:h-0 snap-x snap-mandatory pb-1.5">
                                          <a
                                              className="snap-start relative inline-flex flex-nowrap items-center gap-x-2 px-2.5 py-1.5 hover:bg-gray-100 text-gray-500 hover:text-gray-800 text-sm whitespace-nowrap rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 after:absolute after:-bottom-0.5 after:inset-x-0 after:z-10 after:w-1/4 after:h-0.5 after:rounded-full after:mx-auto after:pointer-events-none dark:text-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 "
                                              href="../../pro/dashboard/user-profile-my-profile.html"
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
                                                  <circle cx={18} cy={15} r={3} />
                                                  <circle cx={9} cy={7} r={4} />
                                                  <path d="M10 15H6a4 4 0 0 0-4 4v2" />
                                                  <path d="m21.7 16.4-.9-.3" />
                                                  <path d="m15.2 13.9-.9-.3" />
                                                  <path d="m16.6 18.7.3-.9" />
                                                  <path d="m19.1 12.2.3-.9" />
                                                  <path d="m19.6 18.7-.4-1" />
                                                  <path d="m16.8 12.3-.4-1" />
                                                  <path d="m14.3 16.6 1-.4" />
                                                  <path d="m20.7 13.8 1-.4" />
                                              </svg>
                                              My Profile
                                          </a>
                                          <a
                                              className="snap-start relative inline-flex flex-nowrap items-center gap-x-2 px-2.5 py-1.5 hover:bg-gray-100 text-gray-500 hover:text-gray-800 text-sm whitespace-nowrap rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 after:absolute after:-bottom-0.5 after:inset-x-0 after:z-10 after:w-1/4 after:h-0.5 after:rounded-full after:mx-auto after:pointer-events-none dark:text-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 "
                                              href="../../pro/dashboard/user-profile-teams.html"
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
                                                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                                  <circle cx={9} cy={7} r={4} />
                                                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                              </svg>
                                              Teams
                                          </a>
                                          <a
                                              className="snap-start relative inline-flex flex-nowrap items-center gap-x-2 px-2.5 py-1.5 hover:bg-gray-100 text-gray-500 hover:text-gray-800 text-sm whitespace-nowrap rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 after:absolute after:-bottom-0.5 after:inset-x-0 after:z-10 after:w-1/4 after:h-0.5 after:rounded-full after:mx-auto after:pointer-events-none dark:text-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 "
                                              href="../../pro/dashboard/user-profile-files.html"
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
                                                  <path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z" />
                                                  <path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8" />
                                                  <path d="M15 2v5h5" />
                                              </svg>
                                              Files
                                          </a>
                                          <a
                                              className="snap-start relative inline-flex flex-nowrap items-center gap-x-2 px-2.5 py-1.5 hover:bg-gray-100 text-gray-500 hover:text-gray-800 text-sm whitespace-nowrap rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 after:absolute after:-bottom-0.5 after:inset-x-0 after:z-10 after:w-1/4 after:h-0.5 after:rounded-full after:mx-auto after:pointer-events-none dark:text-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 "
                                              href="../../pro/dashboard/user-profile-connections.html"
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
                                                  <path d="M8 3 4 7l4 4" />
                                                  <path d="M4 7h16" />
                                                  <path d="m16 21 4-4-4-4" />
                                                  <path d="M20 17H4" />
                                              </svg>
                                              Connections
                                          </a>
                                      </nav>
                                  </div>
                                  {/* End Nav */}
                              </div>
                              {/* End Header */}
                          </div>
                          {/* End User Profile Card */}
                          {/* Sidebar Toggle */}
                          <div className="xl:hidden flex justify-end">
                              <button
                                  type="button"
                                  className="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                  aria-haspopup="dialog"
                                  aria-expanded="false"
                                  aria-controls="hs-pro-dupsd"
                                  aria-label="Sidebar Toggle"
                                  data-hs-overlay="#hs-pro-dupsd"
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
                                      <rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
                                      <line x1={15} x2={15} y1={3} y2={21} />
                                      <path d="m8 9 3 3-3 3" />
                                  </svg>
                                  Open Sidebar
                              </button>
                          </div>
                          {/* End Sidebar Toggle */}
                          {/* Projects */}
                          <div className="xl:p-5 flex flex-col xl:bg-white xl:border xl:border-gray-200 xl:shadow-2xs xl:rounded-xl dark:xl:bg-neutral-800 dark:xl:border-neutral-700">
                              {/* Grid */}
                              <div className="xl:flex">
                                  {/* Activity Offcanvas */}
                                  <div
                                      id="hs-pro-dupsd"
                                      className="hs-overlay [--auto-close:xl]
      hs-overlay-open:translate-x-0
      -translate-x-full transition-all duration-300 transform
      w-80
      hidden
      fixed inset-y-0 start-0 z-60
      bg-white border-e border-gray-200
      xl:relative xl:z-0 xl:block xl:translate-x-0 xl:end-auto xl:bottom-0
      overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500
      dark:bg-neutral-800 dark:border-neutral-700"
                                      role="dialog"
                                      tabIndex={-1}
                                      aria-labelledby="hs-pro-dupsd-label"
                                  >
                                      <div className="p-5 xl:p-0">
                                          <div className="xl:hidden">
                                              {/* Close Button */}
                                              <div className="absolute top-3 end-3 z-10">
                                                  <button
                                                      type="button"
                                                      className="size-8 shrink-0 flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
                                                      aria-label="Close"
                                                      data-hs-overlay="#hs-pro-dupsd"
                                                  >
                                                      <span className="sr-only">Close</span>
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
                                                          <path d="M18 6 6 18" />
                                                          <path d="m6 6 12 12" />
                                                      </svg>
                                                  </button>
                                              </div>
                                              {/* End Close Button */}
                                          </div>
                                          {/* Body */}
                                          <div className="xl:pe-4 mt-3 divide-y divide-gray-200 dark:divide-neutral-700">
                                              <div className="py-4 first:pt-0 last:pb-0">
                                                  <h2
                                                      id="hs-pro-dupsd-label"
                                                      className="text-sm font-semibold text-gray-800 dark:text-neutral-200"
                                                  >
                                                      About
                                                  </h2>
                                                  {/* List */}
                                                  <ul className="mt-3 space-y-2">
                                                      <li>
                                                          <div className="inline-flex items-center gap-x-3 text-sm text-gray-800 dark:text-neutral-200">
                                                              <svg
                                                                  className="shrink-0 size-4 text-gray-600 dark:text-neutral-400"
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
                                                                  <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                                                                  <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                                                                  <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                                                                  <path d="M10 6h4" />
                                                                  <path d="M10 10h4" />
                                                                  <path d="M10 14h4" />
                                                                  <path d="M10 18h4" />
                                                              </svg>
                                                              Organization
                                                          </div>
                                                      </li>
                                                      <li>
                                                          <div className="inline-flex items-center gap-x-3 text-sm text-gray-800 dark:text-neutral-200">
                                                              <svg
                                                                  className="shrink-0 size-4 text-gray-600 dark:text-neutral-400"
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
                                                                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                                                  <circle cx={12} cy={10} r={3} />
                                                              </svg>
                                                              Country
                                                          </div>
                                                      </li>
                                                      <li>
                                                          <div className="inline-flex items-center gap-x-3 text-sm text-gray-800 dark:text-neutral-200">
                                                              <svg
                                                                  className="shrink-0 size-4 text-gray-600 dark:text-neutral-400"
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
                                                                  <polyline points="12 6 12 12 16 14" />
                                                              </svg>
                                                              Time zone
                                                          </div>
                                                      </li>
                                                      <li>
                                                          <div className="inline-flex items-center gap-x-3 text-sm text-gray-800 dark:text-neutral-200">
                                                              <svg
                                                                  className="shrink-0 size-4 text-gray-600 dark:text-neutral-400"
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
                                                                  <rect width={20} height={16} x={2} y={4} rx={2} />
                                                                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                                              </svg>
                                                              Email
                                                          </div>
                                                      </li>
                                                  </ul>
                                                  {/* End List */}
                                              </div>
                                              <div className="py-4 first:pt-0 last:pb-0">
                                                  <h2 className="mb-2 text-sm text-gray-500 dark:text-neutral-500">
                                                      Explore help topics
                                                  </h2>
                                                  {/* List Group */}
                                                  <ul className="space-y-2">
                                                      {/* List Item */}
                                                      <li>
                                                          <a
                                                              className="p-2.5 flex items-center gap-x-3 bg-white border border-gray-200 text-sm font-medium text-gray-800 dark:text-neutral-200 rounded-xl hover:text-blue-600 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 dark:hover:text-blue-500 dark:focus:bg-neutral-700"
                                                              href="#"
                                                          >
                          <span className="flex shrink-0 justify-center items-center size-7 bg-white border border-gray-200 rounded-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                            <svg
                                className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                            </svg>
                          </span>
                                                              <div className="grow">
                                                                  <p>Preline Course</p>
                                                              </div>
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
                                                                  <path d="m9 18 6-6-6-6" />
                                                              </svg>
                                                          </a>
                                                      </li>
                                                      {/* End List Item */}
                                                      {/* List Item */}
                                                      <li>
                                                          <a
                                                              className="p-2.5 flex items-center gap-x-3 bg-white border border-gray-200 text-sm font-medium text-gray-800 dark:text-neutral-200 rounded-xl hover:text-blue-600 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 dark:hover:text-blue-500 dark:focus:bg-neutral-700"
                                                              href="#"
                                                          >
                          <span className="flex shrink-0 justify-center items-center size-7 bg-white border border-gray-200 rounded-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                            <svg
                                className="shrink-0 size-3.5 text-purple-600 dark:text-purple-500"
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                              <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                            </svg>
                          </span>
                                                              <div className="grow">
                                                                  <p>Community Group</p>
                                                              </div>
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
                                                                  <path d="m9 18 6-6-6-6" />
                                                              </svg>
                                                          </a>
                                                      </li>
                                                      {/* End List Item */}
                                                      {/* List Item */}
                                                      <li>
                                                          <a
                                                              className="p-2.5 flex items-center gap-x-3 bg-white border border-gray-200 text-sm font-medium text-gray-800 dark:text-neutral-200 rounded-xl hover:text-blue-600 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 dark:hover:text-blue-500 dark:focus:bg-neutral-700"
                                                              href="#"
                                                          >
                          <span className="flex shrink-0 justify-center items-center size-7 bg-white border border-gray-200 rounded-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                            <svg
                                className="shrink-0 size-3.5 text-cyan-600 dark:text-cyan-500"
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                              <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
                              <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
                            </svg>
                          </span>
                                                              <div className="grow">
                                                                  <p>Hire a Partner Expert</p>
                                                              </div>
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
                                                                  <path d="m9 18 6-6-6-6" />
                                                              </svg>
                                                          </a>
                                                      </li>
                                                      {/* End List Item */}
                                                      {/* List Item */}
                                                      <li>
                                                          <a
                                                              className="p-2.5 flex items-center gap-x-3 bg-white border border-gray-200 text-sm font-medium text-gray-800 dark:text-neutral-200 rounded-xl hover:text-blue-600 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 dark:hover:text-blue-500 dark:focus:bg-neutral-700"
                                                              href="#"
                                                          >
                          <span className="flex shrink-0 justify-center items-center size-7 bg-white border border-gray-200 rounded-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                            <svg
                                className="shrink-0 size-3.5 text-indigo-600 dark:text-indigo-500"
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                            </svg>
                          </span>
                                                              <div className="grow">
                                                                  <p>Help center</p>
                                                              </div>
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
                                                                  <path d="m9 18 6-6-6-6" />
                                                              </svg>
                                                          </a>
                                                      </li>
                                                      {/* End List Item */}
                                                  </ul>
                                                  {/* End List Group */}
                                              </div>
                                          </div>
                                          {/* End Body */}
                                      </div>
                                  </div>
                                  {/* End Activity Offcanvas */}
                                  {/* Content */}
                                  <div className="xl:ps-5 grow space-y-5">
                                      {/* Projects Card */}
                                      <div className="flex flex-col bg-white border border-gray-200 rounded-xl shadow-2xs xl:shadow-none dark:bg-neutral-800 dark:border-neutral-700">
                                          {/* Header */}
                                          <div className="p-5 pb-2 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                                              <h2 className="inline-block font-semibold text-lg text-gray-800 dark:text-neutral-200">
                                                  Projects
                                              </h2>
                                              {/* Form Group */}
                                              <div className="flex sm:justify-end items-center gap-x-2">
                                                  {/* Search Input */}
                                                  <div className="relative">
                                                      <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3">
                                                          <svg
                                                              className="shrink-0 size-4 text-gray-500 dark:text-neutral-400"
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
                                                              <circle cx={11} cy={11} r={8} />
                                                              <path d="m21 21-4.3-4.3" />
                                                          </svg>
                                                      </div>
                                                      <input
                                                          type="text"
                                                          className="py-1 sm:py-1.5 px-8 w-full block bg-gray-100 border-transparent rounded-lg sm:text-sm focus:bg-white focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder:text-neutral-400 dark:focus:bg-neutral-800 dark:focus:ring-neutral-600"
                                                          placeholder="Search"
                                                      />
                                                      <div className="hidden absolute inset-y-0 end-0 flex items-center z-20 pe-1">
                                                          <button
                                                              type="button"
                                                              className="inline-flex shrink-0 justify-center items-center size-6 rounded-full text-gray-500 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
                                                              aria-label="Close"
                                                          >
                                                              <span className="sr-only">Close</span>
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
                                                                  <path d="m15 9-6 6" />
                                                                  <path d="m9 9 6 6" />
                                                              </svg>
                                                          </button>
                                                      </div>
                                                  </div>
                                                  {/* End Search Input */}
                                                  {/* Button */}
                                                  <button
                                                      type="button"
                                                      className="py-1.5 sm:py-2 px-2 inline-flex items-center gap-x-1.5 text-sm sm:text-xs whitespace-nowrap font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                                                      data-hs-overlay="#hs-pro-dasadpm"
                                                  >
                                                      <svg
                                                          className="hidden sm:block shrink-0 size-4"
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
                                                      Add project
                                                  </button>
                                                  {/* End Button */}
                                              </div>
                                              {/* End Form Group */}
                                          </div>
                                          {/* End Header */}
                                          {/* Empty State */}
                                          <div className="p-5 min-h-82 flex flex-col justify-center items-center text-center">
                                              <svg
                                                  className="w-48 mx-auto mb-4"
                                                  width={178}
                                                  height={90}
                                                  viewBox="0 0 178 90"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                              >
                                                  <rect
                                                      x={27}
                                                      y="50.5"
                                                      width={124}
                                                      height={39}
                                                      rx="7.5"
                                                      fill="currentColor"
                                                      className="fill-white dark:fill-neutral-800"
                                                  />
                                                  <rect
                                                      x={27}
                                                      y="50.5"
                                                      width={124}
                                                      height={39}
                                                      rx="7.5"
                                                      stroke="currentColor"
                                                      className="stroke-gray-50 dark:stroke-neutral-700/10"
                                                  />
                                                  <rect
                                                      x="34.5"
                                                      y={58}
                                                      width={24}
                                                      height={24}
                                                      rx={4}
                                                      fill="currentColor"
                                                      className="fill-gray-50 dark:fill-neutral-700/30"
                                                  />
                                                  <rect
                                                      x="66.5"
                                                      y={61}
                                                      width={60}
                                                      height={6}
                                                      rx={3}
                                                      fill="currentColor"
                                                      className="fill-gray-50 dark:fill-neutral-700/30"
                                                  />
                                                  <rect
                                                      x="66.5"
                                                      y={73}
                                                      width={77}
                                                      height={6}
                                                      rx={3}
                                                      fill="currentColor"
                                                      className="fill-gray-50 dark:fill-neutral-700/30"
                                                  />
                                                  <rect
                                                      x="19.5"
                                                      y="28.5"
                                                      width={139}
                                                      height={39}
                                                      rx="7.5"
                                                      fill="currentColor"
                                                      className="fill-white dark:fill-neutral-800"
                                                  />
                                                  <rect
                                                      x="19.5"
                                                      y="28.5"
                                                      width={139}
                                                      height={39}
                                                      rx="7.5"
                                                      stroke="currentColor"
                                                      className="stroke-gray-100 dark:stroke-neutral-700/30"
                                                  />
                                                  <rect
                                                      x={27}
                                                      y={36}
                                                      width={24}
                                                      height={24}
                                                      rx={4}
                                                      fill="currentColor"
                                                      className="fill-gray-100 dark:fill-neutral-700/70"
                                                  />
                                                  <rect
                                                      x={59}
                                                      y={39}
                                                      width={60}
                                                      height={6}
                                                      rx={3}
                                                      fill="currentColor"
                                                      className="fill-gray-100 dark:fill-neutral-700/70"
                                                  />
                                                  <rect
                                                      x={59}
                                                      y={51}
                                                      width={92}
                                                      height={6}
                                                      rx={3}
                                                      fill="currentColor"
                                                      className="fill-gray-100 dark:fill-neutral-700/70"
                                                  />
                                                  <g filter="url(#filter13)">
                                                      <rect
                                                          x={12}
                                                          y={6}
                                                          width={154}
                                                          height={40}
                                                          rx={8}
                                                          fill="currentColor"
                                                          className="fill-white dark:fill-neutral-800"
                                                          shapeRendering="crispEdges"
                                                      />
                                                      <rect
                                                          x="12.5"
                                                          y="6.5"
                                                          width={153}
                                                          height={39}
                                                          rx="7.5"
                                                          stroke="currentColor"
                                                          className="stroke-gray-100 dark:stroke-neutral-700/60"
                                                          shapeRendering="crispEdges"
                                                      />
                                                      <rect
                                                          x={20}
                                                          y={14}
                                                          width={24}
                                                          height={24}
                                                          rx={4}
                                                          fill="currentColor"
                                                          className="fill-gray-200 dark:fill-neutral-700 "
                                                      />
                                                      <rect
                                                          x={52}
                                                          y={17}
                                                          width={60}
                                                          height={6}
                                                          rx={3}
                                                          fill="currentColor"
                                                          className="fill-gray-200 dark:fill-neutral-700"
                                                      />
                                                      <rect
                                                          x={52}
                                                          y={29}
                                                          width={106}
                                                          height={6}
                                                          rx={3}
                                                          fill="currentColor"
                                                          className="fill-gray-200 dark:fill-neutral-700"
                                                      />
                                                  </g>
                                                  <defs>
                                                      <filter
                                                          id="filter13"
                                                          x={0}
                                                          y={0}
                                                          width={178}
                                                          height={64}
                                                          filterUnits="userSpaceOnUse"
                                                          colorInterpolationFilters="sRGB"
                                                      >
                                                          <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                                          <feColorMatrix
                                                              in="SourceAlpha"
                                                              type="matrix"
                                                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                              result="hardAlpha"
                                                          />
                                                          <feOffset dy={6} />
                                                          <feGaussianBlur stdDeviation={6} />
                                                          <feComposite in2="hardAlpha" operator="out" />
                                                          <feColorMatrix
                                                              type="matrix"
                                                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
                                                          />
                                                          <feBlend
                                                              mode="normal"
                                                              in2="BackgroundImageFix"
                                                              result="effect1_dropShadow_1187_14810"
                                                          />
                                                          <feBlend
                                                              mode="normal"
                                                              in="SourceGraphic"
                                                              in2="effect1_dropShadow_1187_14810"
                                                              result="shape"
                                                          />
                                                      </filter>
                                                  </defs>
                                              </svg>
                                              <div className="max-w-sm mx-auto">
                                                  <p className="mt-2 font-medium text-gray-800 dark:text-neutral-200">
                                                      No closed projects
                                                  </p>
                                                  <p className="mb-5 text-sm text-gray-500 dark:text-neutral-500"></p>
                                              </div>
                                              <button
                                                  type="button"
                                                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                                                  data-hs-overlay="#hs-pro-dasadpm"
                                              >
                                                  <svg
                                                      className="hidden sm:block shrink-0 size-4"
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
                                                  Add project
                                              </button>
                                          </div>
                                          {/* End Empty State */}
                                      </div>
                                      {/* End Projects Card */}
                                      {/* Events Card */}
                                      <div className="flex flex-col bg-white border border-gray-200 rounded-xl shadow-2xs xl:shadow-none dark:bg-neutral-800 dark:border-neutral-700">
                                          {/* Empty State */}
                                          <div className="p-5 min-h-82 flex flex-col justify-center items-center text-center">
                                              <svg
                                                  className="w-48 mx-auto mb-4"
                                                  width={178}
                                                  height={90}
                                                  viewBox="0 0 178 90"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                              >
                                                  <rect
                                                      x={27}
                                                      y="50.5"
                                                      width={124}
                                                      height={39}
                                                      rx="7.5"
                                                      fill="currentColor"
                                                      className="fill-white dark:fill-neutral-800"
                                                  />
                                                  <rect
                                                      x={27}
                                                      y="50.5"
                                                      width={124}
                                                      height={39}
                                                      rx="7.5"
                                                      stroke="currentColor"
                                                      className="stroke-gray-50 dark:stroke-neutral-700/10"
                                                  />
                                                  <rect
                                                      x="34.5"
                                                      y={58}
                                                      width={24}
                                                      height={24}
                                                      rx={4}
                                                      fill="currentColor"
                                                      className="fill-gray-50 dark:fill-neutral-700/30"
                                                  />
                                                  <rect
                                                      x="66.5"
                                                      y={61}
                                                      width={60}
                                                      height={6}
                                                      rx={3}
                                                      fill="currentColor"
                                                      className="fill-gray-50 dark:fill-neutral-700/30"
                                                  />
                                                  <rect
                                                      x="66.5"
                                                      y={73}
                                                      width={77}
                                                      height={6}
                                                      rx={3}
                                                      fill="currentColor"
                                                      className="fill-gray-50 dark:fill-neutral-700/30"
                                                  />
                                                  <rect
                                                      x="19.5"
                                                      y="28.5"
                                                      width={139}
                                                      height={39}
                                                      rx="7.5"
                                                      fill="currentColor"
                                                      className="fill-white dark:fill-neutral-800"
                                                  />
                                                  <rect
                                                      x="19.5"
                                                      y="28.5"
                                                      width={139}
                                                      height={39}
                                                      rx="7.5"
                                                      stroke="currentColor"
                                                      className="stroke-gray-100 dark:stroke-neutral-700/30"
                                                  />
                                                  <rect
                                                      x={27}
                                                      y={36}
                                                      width={24}
                                                      height={24}
                                                      rx={4}
                                                      fill="currentColor"
                                                      className="fill-gray-100 dark:fill-neutral-700/70"
                                                  />
                                                  <rect
                                                      x={59}
                                                      y={39}
                                                      width={60}
                                                      height={6}
                                                      rx={3}
                                                      fill="currentColor"
                                                      className="fill-gray-100 dark:fill-neutral-700/70"
                                                  />
                                                  <rect
                                                      x={59}
                                                      y={51}
                                                      width={92}
                                                      height={6}
                                                      rx={3}
                                                      fill="currentColor"
                                                      className="fill-gray-100 dark:fill-neutral-700/70"
                                                  />
                                                  <g filter="url(#filter2)">
                                                      <rect
                                                          x={12}
                                                          y={6}
                                                          width={154}
                                                          height={40}
                                                          rx={8}
                                                          fill="currentColor"
                                                          className="fill-white dark:fill-neutral-800"
                                                          shapeRendering="crispEdges"
                                                      />
                                                      <rect
                                                          x="12.5"
                                                          y="6.5"
                                                          width={153}
                                                          height={39}
                                                          rx="7.5"
                                                          stroke="currentColor"
                                                          className="stroke-gray-100 dark:stroke-neutral-700/60"
                                                          shapeRendering="crispEdges"
                                                      />
                                                      <rect
                                                          x={20}
                                                          y={14}
                                                          width={24}
                                                          height={24}
                                                          rx={4}
                                                          fill="currentColor"
                                                          className="fill-gray-200 dark:fill-neutral-700 "
                                                      />
                                                      <rect
                                                          x={52}
                                                          y={17}
                                                          width={60}
                                                          height={6}
                                                          rx={3}
                                                          fill="currentColor"
                                                          className="fill-gray-200 dark:fill-neutral-700"
                                                      />
                                                      <rect
                                                          x={52}
                                                          y={29}
                                                          width={106}
                                                          height={6}
                                                          rx={3}
                                                          fill="currentColor"
                                                          className="fill-gray-200 dark:fill-neutral-700"
                                                      />
                                                  </g>
                                                  <defs>
                                                      <filter
                                                          id="filter2"
                                                          x={0}
                                                          y={0}
                                                          width={178}
                                                          height={64}
                                                          filterUnits="userSpaceOnUse"
                                                          colorInterpolationFilters="sRGB"
                                                      >
                                                          <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                                          <feColorMatrix
                                                              in="SourceAlpha"
                                                              type="matrix"
                                                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                              result="hardAlpha"
                                                          />
                                                          <feOffset dy={6} />
                                                          <feGaussianBlur stdDeviation={6} />
                                                          <feComposite in2="hardAlpha" operator="out" />
                                                          <feColorMatrix
                                                              type="matrix"
                                                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
                                                          />
                                                          <feBlend
                                                              mode="normal"
                                                              in2="BackgroundImageFix"
                                                              result="effect1_dropShadow_1187_14810"
                                                          />
                                                          <feBlend
                                                              mode="normal"
                                                              in="SourceGraphic"
                                                              in2="effect1_dropShadow_1187_14810"
                                                              result="shape"
                                                          />
                                                      </filter>
                                                  </defs>
                                              </svg>
                                              <div className="max-w-sm mx-auto">
                                                  <p className="mt-2 font-medium text-gray-800 dark:text-neutral-200">
                                                      No closed projects
                                                  </p>
                                                  <p className="mb-5 text-sm text-gray-500 dark:text-neutral-500"></p>
                                              </div>
                                              <button
                                                  type="button"
                                                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                                                  data-hs-overlay="#hs-pro-daem"
                                              >
                                                  <svg
                                                      className="hidden sm:block shrink-0 size-4"
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
                                                  Add event
                                              </button>
                                          </div>
                                          {/* End Empty State */}
                                      </div>
                                      {/* End Events Card */}
                                  </div>
                                  {/* End Content */}
                              </div>
                              {/* End Grid */}
                          </div>
                          {/* End Projects */}
                      </div>
                  </div>
              </main>
              {/* ========== END MAIN CONTENT ========== */}
          </>

      </div>
    </GuestLayout>
  );
}
