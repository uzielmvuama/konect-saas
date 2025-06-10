import { useState } from "react";
import { Head, Link, router, usePage } from "@inertiajs/react";
import PrelineProviderLayout from "@/Layouts/PrelineProviderLayout";
import { TeamProps } from "@/Types/types";
import { ucfirst } from "@/Utils/Functions/globals";
import AppLogo from "@/Components/_Partials/AppLogo";
import DismissableAlert from "@/Components/Alerts/DismissableAlert";
import { __ } from "@/Utils/Functions/translate";
import AppNavHeader from "@/Components/_Partials/Headers/AppNavHeader";

// import {initializePreline} from "@/preline-init";

interface Props {
  title?: string;
  children?: React.ReactNode;
  showNavbarMenu?: boolean;
}

export default function AppLayout({ title, showNavbarMenu = true, children }: Props) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
  const {
    auth: { user },
    jetstream,
    subscription,
    permissions,
  } = usePage().props as any;

  const all_teams: TeamProps[] = user.all_teams;
  // useEffect(() => {
  //     initializePreline();
  // }, []);

  const switchToTeam = (team: any) => {
    router.put(
      "/current-team",
      {
        team_id: team.id,
      },
      {
        preserveState: false,
      }
    );
  };

  const logout = (e: React.FormEvent) => {
    e.preventDefault();
    router.post("/logout");
  };
  // @ts-ignore
  return (
    <PrelineProviderLayout>
      <Head title={title} />
      {/* ========== HEADER ========== */}
      <header className="flex flex-col z-50">
        <div className="bg-gray-800 border-b border-gray-700 dark:bg-black dark:border-neutral-800">
          <div className="max-w-[85rem] flex justify-between lg:grid lg:grid-cols-3 basis-full items-center w-full mx-auto py-2.5 px-2 sm:px-6 lg:px-8">
            <div className="flex items-center">
              <AppLogo width={6} />

              <div className="ms-2"></div>

              <div className="md:hidden ms-3">
                {/* Collapse Button Trigger */}
                <button
                  type="button"
                  className="hs-collapse-toggle inline-flex justify-center items-center w-7 h-9.5 text-start border border-white/20 text-white rounded-lg shadow-2xs align-middle hover:bg-white/10 disabled:opacity-50 focus:outline-hidden focus:bg-white/10"
                  id="hs-pro-dmh-collapse"
                  aria-expanded="false"
                  aria-controls="hs-pro-dmh"
                  aria-label="Toggle navigation"
                  data-hs-collapse="#hs-pro-dmh"
                >
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
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="19" r="1" />
                  </svg>
                </button>
                {/* End Collapse Button Trigger */}
              </div>
            </div>

            <div className="hidden md:block lg:w-full lg:mx-0">
              {/* Search Input */}
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
                  <svg
                    className="shrink-0 size-4 text-white/60"
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
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
                <input
                  type="text"
                  className="py-2 px-3 ps-10 pe-16 block w-full bg-white/10 border-transparent text-white rounded-lg text-sm focus:z-10 focus:border-white/10 focus:ring-white/10 placeholder:text-white/60 disabled:opacity-50 focus:outline-hidden focus:ring-1 focus:ring-white/20"
                  placeholder="Search Preline"
                  data-hs-overlay="#hs-pro-dnsm"
                />
                <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-1">
                  <button
                    type="button"
                    className="inline-flex shrink-0 justify-center items-center size-6 rounded-full text-gray-500 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
                    aria-label="Close"
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
                      <circle cx="12" cy="12" r="10" />
                      <path d="m15 9-6 6" />
                      <path d="m9 9 6 6" />
                    </svg>
                  </button>
                </div>
                <div className="absolute inset-y-0 end-0 flex items-center z-20 pe-3 text-gray-400">
                  <svg
                    className="shrink-0 size-3 text-white/60"
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
                    <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                  </svg>
                  <span className="mx-1">
                    <svg
                      className="shrink-0 size-3 text-white/60"
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
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                  </span>
                  <span className="text-xs">/</span>
                </div>
              </div>
              {/* End Search Input */}
            </div>

            <div className="flex justify-end items-center gap-x-2">
              <div className="flex items-center">
                <div className="md:hidden">
                  {/* Search Button Icon */}
                  <button
                    type="button"
                    className="inline-flex shrink-0 justify-center items-center gap-x-2 size-9.5 rounded-full text-white hover:bg-white/10 disabled:opacity-50 focus:outline-hidden focus:bg-white/10"
                    data-hs-overlay="#hs-pro-dnsm"
                  >
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
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </button>
                  {/* End Search Button Icon */}
                </div>

                {/* Help Dropdown */}
                <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
                  {/* Help Button Icon */}
                  <button
                    id="hs-pro-dnhd"
                    type="button"
                    className="  inline-flex shrink-0 justify-center items-center gap-x-2 size-9.5 rounded-full text-white hover:bg-white/10 disabled:opacity-50 focus:outline-hidden focus:bg-white/10 cursor-pointer"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    aria-label="Dropdown"
                  >
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
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                      <path d="M12 17h.01" />
                    </svg>
                  </button>
                  {/* End Help Button Icon */}

                  {/* Help Dropdown */}
                  <div
                    className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-60 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-xl dark:bg-neutral-900"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="hs-pro-dnhd"
                  >
                    <div className="p-1">
                      <a
                        className="flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        href="#"
                      >
                        <svg
                          className="shrink-0 mt-0.5 size-4"
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
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                          <path d="M12 17h.01" />
                        </svg>
                        Help Centre
                      </a>
                      <a
                        className="flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        href="#"
                      >
                        <svg
                          className="shrink-0 mt-0.5 size-4"
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
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                        Community
                      </a>
                      <a
                        className="flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        href="#"
                      >
                        <svg
                          className="shrink-0 mt-0.5 size-4"
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
                          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                        </svg>
                        What’s New
                      </a>

                      <div className="my-1 border-t border-gray-200 dark:border-neutral-800"></div>

                      <a
                        className="flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        href="#"
                      >
                        <svg
                          className="shrink-0 mt-0.5 size-4"
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
                          <path d="M12 16v-4" />
                          <path d="M12 8h.01" />
                        </svg>
                        Privacy and Legal
                      </a>
                      <a
                        className="flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        href="#"
                      >
                        <svg
                          className="shrink-0 mt-0.5 size-4"
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
                          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                        </svg>
                        Documentation
                      </a>
                      <a
                        className="flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        href="#"
                      >
                        <svg
                          className="shrink-0 mt-0.5 size-4"
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
                          <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                        </svg>
                        Hire an Expert
                        <div className="ms-auto">
                          <span className="inline-flex items-center gap-1.5 py-px px-1.5 rounded-sm text-[10px] leading-4 font-medium bg-gray-100 text-gray-800 dark:bg-neutral-700 dark:text-neutral-300">
                            New
                          </span>
                        </div>
                      </a>

                      <div className="my-1 border-t border-gray-200 dark:border-neutral-800"></div>

                      <a
                        className="flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        href="#"
                      >
                        <svg
                          className="shrink-0 mt-0.5 size-4"
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
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                          <line x1="9" x2="15" y1="10" y2="10" />
                          <line x1="12" x2="12" y1="7" y2="13" />
                        </svg>
                        Submit Feedback
                      </a>
                      <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] relative">
                        <button
                          id="hs-pro-dropdown-help-and-support"
                          type="button"
                          className="hs-dropdown-toggle w-full flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                          aria-haspopup="menu"
                          aria-expanded="false"
                          aria-label="Dropdown"
                        >
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
                            <rect width="20" height="16" x="2" y="4" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                          </svg>
                          Contact Us
                          <svg
                            className="rotate-90 md:rotate-0 ms-auto size-3"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </button>

                        <div
                          className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 top-0 end-full md:me-3! md:mt-1 md:p-1 bg-white md:shadow-xl md:rounded-lg before:absolute before:-end-5 before:top-0 before:h-full before:w-5 dark:bg-neutral-900"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="hs-pro-dropdown-help-and-support"
                        >
                          <a
                            className="flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                            href="#"
                          >
                            <svg
                              className="shrink-0 mt-0.5 size-4"
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
                              <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                              <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                            </svg>
                            Contact Support
                          </a>
                          <a
                            className="flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                            href="#"
                          >
                            <svg
                              className="shrink-0 mt-0.5 size-4"
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
                              <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
                            </svg>
                            Contact Sales
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Help Dropdown */}
                </div>
                {/* End Help Dropdown */}

                {/* Notifications Button Icon */}
                <div className="hs-dropdown [--auto-close:inside] relative inline-flex">
                  <button
                    id="hs-pro-dnnd"
                    type="button"
                    className="relative inline-flex shrink-0 justify-center items-center gap-x-2 size-9.5 rounded-full text-white hover:bg-white/10 disabled:opacity-50 focus:outline-hidden focus:bg-white/10 cursor-pointer"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    aria-label="Dropdown"
                  >
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
                      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                    </svg>
                    <span className="flex absolute top-0 end-0 z-10 -mt-1.5 -me-1.5">
                      <span className="animate-ping absolute inline-flex size-full rounded-full bg-red-400 opacity-75 dark:bg-red-600"></span>
                      <span className="relative min-w-4.5 min-h-4.5 inline-flex justify-center items-center text-[10px] bg-red-500 text-white rounded-full px-1">
                        2
                      </span>
                    </span>
                  </button>
                  {/* End Notifications Button Icon */}

                  {/* Notifications Dropdown */}
                  <div
                    className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-full sm:w-96 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white border-t border-gray-200 sm:border-t-0 sm:rounded-lg shadow-md sm:shadow-xl dark:bg-neutral-900 dark:border-neutral-700"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="hs-pro-dnnd"
                  >
                    {/* Header */}
                    <div className="px-5 pt-3 flex justify-between items-center border-b border-gray-200 dark:border-neutral-800">
                      {/* Nav Tab */}
                      <nav
                        className="flex gap-1"
                        aria-label="Tabs"
                        role="tablist"
                        aria-orientation="horizontal"
                      >
                        <button
                          type="button"
                          className="hs-tab-active:after:bg-gray-800 hs-tab-active:text-gray-800 px-2 py-1.5 mb-2 relative inline-flex justify-center items-center gap-x-2 hover:bg-gray-100 text-gray-500 hover:text-gray-800 text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 after:absolute after:-bottom-2 after:inset-x-2 after:z-10 after:h-0.5 after:pointer-events-none dark:hs-tab-active:text-neutral-200 dark:hs-tab-active:after:bg-neutral-400 dark:text-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden active"
                          id="hs-pro-tabs-dnn-item-all"
                          aria-selected="true"
                          data-hs-tab="#hs-pro-tabs-dnn-all"
                          aria-controls="hs-pro-tabs-dnn-all"
                          role="tab"
                        >
                          All
                        </button>
                        <button
                          type="button"
                          className="hs-tab-active:after:bg-gray-800 hs-tab-active:text-gray-800 px-2 py-1.5 mb-2 relative inline-flex justify-center items-center gap-x-2 hover:bg-gray-100 text-gray-500 hover:text-gray-800 text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 after:absolute after:-bottom-2 after:inset-x-2 after:z-10 after:h-0.5 after:pointer-events-none dark:hs-tab-active:text-neutral-200 dark:hs-tab-active:after:bg-neutral-400 dark:text-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden "
                          id="hs-pro-tabs-dnn-item-archived"
                          aria-selected="false"
                          data-hs-tab="#hs-pro-tabs-dnn-archived"
                          aria-controls="hs-pro-tabs-dnn-archived"
                          role="tab"
                        >
                          Archived
                        </button>
                      </nav>
                      {/* End Nav Tab */}

                      {/* Notifications Button Icon */}
                      <div className="hs-tooltip relative inline-block mb-3">
                        <a
                          className="hs-tooltip-toggle size-7 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                          href="../../pro/dashboard/account-profile.html"
                        >
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
                            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        </a>
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Preferences
                        </span>
                      </div>
                      {/* End Notifications Button Icon */}
                    </div>
                    {/* End Header */}

                    {/* Tab Content */}
                    <div
                      id="hs-pro-tabs-dnn-all"
                      role="tabpanel"
                      aria-labelledby="hs-pro-tabs-dnn-item-all"
                    >
                      <div className="h-120 overflow-y-auto overflow-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                        <ul className="divide-y divide-gray-200 dark:divide-neutral-800">
                          {/* List Item */}
                          <li className="relative group w-full flex gap-x-5 text-start bg-gray-100 dark:bg-neutral-800 p-5">
                            <div className="relative shrink-0">
                              <img
                                className="shrink-0 size-9.5 rounded-full"
                                src="https://images.unsplash.com/photo-1659482634023-2c4fda99ac0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                                alt="Avatar"
                              />
                              <span className="absolute top-4 -start-3 size-2 bg-blue-600 rounded-full dark:bg-blue-500"></span>
                            </div>
                            <div className="grow">
                              <p className="text-xs text-gray-500 dark:text-neutral-500">
                                2 hours ago
                              </p>

                              <span className="block text-sm font-medium text-gray-800 dark:text-neutral-300">
                                Eilis Warner
                              </span>
                              <p className="text-sm text-gray-500 dark:text-neutral-500">
                                changed an issue from 'in Progress' to 'Review'
                              </p>
                            </div>

                            <div>
                              <div className="sm:group-hover:opacity-100 sm:opacity-0 sm:absolute sm:top-5 sm:end-5">
                                {/* Segment Button Group */}
                                <div className="inline-block p-0.5 bg-white border border-gray-200 rounded-lg shadow-2xs transition ease-out dark:bg-neutral-800 dark:border-neutral-700">
                                  <div className="flex items-center">
                                    <div className="hs-tooltip relative inline-block">
                                      <button
                                        type="button"
                                        className="hs-tooltip-toggle size-7 flex shrink-0 justify-center items-center text-gray-500 hover:bg-gray-100 hover:text-gray-800 rounded-sm disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:focus:bg-neutral-700"
                                      >
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
                                          <polyline points="9 11 12 14 22 4" />
                                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                        </svg>
                                        <svg
                                          className="shrink-0 size-4 hidden"
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
                                          <rect width="18" height="18" x="3" y="3" rx="2" />
                                          <path d="M8 12h8" />
                                        </svg>
                                      </button>
                                      <span
                                        className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
                                        role="tooltip"
                                      >
                                        Mark this notification as read
                                      </span>
                                    </div>
                                    <div className="hs-tooltip relative inline-block">
                                      <button
                                        type="button"
                                        className="hs-tooltip-toggle size-7 flex shrink-0 justify-center items-center text-gray-500 hover:bg-gray-100 hover:text-gray-800 rounded-sm disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:focus:bg-neutral-700"
                                      >
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
                                          <rect width="20" height="5" x="2" y="4" rx="2" />
                                          <path d="M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9" />
                                          <path d="M10 13h4" />
                                        </svg>
                                      </button>
                                      <span
                                        className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
                                        role="tooltip"
                                      >
                                        Archive this notification
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                {/* End Segment Button Group */}
                              </div>
                            </div>
                          </li>
                          {/* End List Item */}

                          {/* List Item */}
                          <li className="relative group w-full flex gap-x-5 text-start  p-5">
                            <div className="relative shrink-0">
                              <span className="flex shrink-0 justify-center items-center size-9.5 bg-white border border-gray-200 text-gray-500 text-sm font-semibold rounded-full shadow-2xs dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
                                C
                              </span>
                            </div>
                            <div className="grow">
                              <p className="text-xs text-gray-500 dark:text-neutral-500">
                                3 days ago
                              </p>

                              <span className="block text-sm font-medium text-gray-800 dark:text-neutral-300">
                                Clara Becker
                              </span>
                              <p className="text-sm text-gray-500 dark:text-neutral-500">
                                mentioned you in a comment
                              </p>
                              <div className="mt-2">
                                <blockquote className="ps-3 border-s-4 border-gray-200 text-sm text-gray-500 dark:border-neutral-700 dark:text-neutral-400">
                                  Nice work, love! You really nailed it. Keep it up!
                                </blockquote>
                              </div>
                            </div>

                            <div>
                              <div className="sm:group-hover:opacity-100 sm:opacity-0 sm:absolute sm:top-5 sm:end-5">
                                {/* Segment Button Group */}
                                <div className="inline-block p-0.5 bg-white border border-gray-200 rounded-lg shadow-2xs transition ease-out dark:bg-neutral-800 dark:border-neutral-700">
                                  <div className="flex items-center">
                                    <div className="hs-tooltip relative inline-block">
                                      <button
                                        type="button"
                                        className="hs-tooltip-toggle size-7 flex shrink-0 justify-center items-center text-gray-500 hover:bg-gray-100 hover:text-gray-800 rounded-sm disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:focus:bg-neutral-700"
                                      >
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
                                          <polyline points="9 11 12 14 22 4" />
                                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                        </svg>
                                        <svg
                                          className="shrink-0 size-4 hidden"
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
                                          <rect width="18" height="18" x="3" y="3" rx="2" />
                                          <path d="M8 12h8" />
                                        </svg>
                                      </button>
                                      <span
                                        className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
                                        role="tooltip"
                                      >
                                        Mark this notification as read
                                      </span>
                                    </div>
                                    <div className="hs-tooltip relative inline-block">
                                      <button
                                        type="button"
                                        className="hs-tooltip-toggle size-7 flex shrink-0 justify-center items-center text-gray-500 hover:bg-gray-100 hover:text-gray-800 rounded-sm disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:focus:bg-neutral-700"
                                      >
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
                                          <rect width="20" height="5" x="2" y="4" rx="2" />
                                          <path d="M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9" />
                                          <path d="M10 13h4" />
                                        </svg>
                                      </button>
                                      <span
                                        className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
                                        role="tooltip"
                                      >
                                        Archive this notification
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                {/* End Segment Button Group */}
                              </div>
                            </div>
                          </li>
                          {/* End List Item */}

                          {/* List Item */}
                          <li className="relative group w-full flex gap-x-5 text-start  p-5">
                            <div className="relative shrink-0">
                              <span className="flex shrink-0 justify-center items-center size-9.5 bg-white border border-gray-200 text-gray-500 text-sm font-semibold rounded-full shadow-2xs dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
                                P
                              </span>
                            </div>
                            <div className="grow">
                              <p className="text-xs text-gray-500 dark:text-neutral-500">
                                5 Jan 2023
                              </p>

                              <span className="block text-sm font-medium text-gray-800 dark:text-neutral-300">
                                New Update on Preline
                              </span>
                              <p className="text-sm text-gray-500 dark:text-neutral-500">
                                Add yourself to our new “Hire Page”. Let visitors know you’re open
                                to freelance or full-time work.
                              </p>
                              <a
                                className="mt-2 p-1.5 inline-flex items-center border border-gray-200 rounded-xl hover:bg-gray-50 hover:shadow-2xs focus:outline-hidden focus:bg-gray-100 dark:border-neutral-700 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                href="#"
                              >
                                <img
                                  className="w-17.5 h-15.5 object-cover rounded-lg"
                                  src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                                  alt="Avatar"
                                />
                                <div className="grow py-2.5 px-4">
                                  <p className="text-sm font-medium text-gray-800 dark:text-neutral-300">
                                    Get hired!
                                  </p>
                                  <p className="inline-flex items-center gap-x-1 text-sm text-gray-500 dark:text-neutral-500">
                                    Get started
                                    <svg
                                      className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
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
                                      <path d="m9 18 6-6-6-6" />
                                    </svg>
                                  </p>
                                </div>
                              </a>
                            </div>

                            <div>
                              <div className="sm:group-hover:opacity-100 sm:opacity-0 sm:absolute sm:top-5 sm:end-5">
                                {/* Segment Button Group */}
                                <div className="inline-block p-0.5 bg-white border border-gray-200 rounded-lg shadow-2xs transition ease-out dark:bg-neutral-800 dark:border-neutral-700">
                                  <div className="flex items-center">
                                    <div className="hs-tooltip relative inline-block">
                                      <button
                                        type="button"
                                        className="hs-tooltip-toggle size-7 flex shrink-0 justify-center items-center text-gray-500 hover:bg-gray-100 hover:text-gray-800 rounded-sm disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:focus:bg-neutral-700"
                                      >
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
                                          <polyline points="9 11 12 14 22 4" />
                                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                        </svg>
                                        <svg
                                          className="shrink-0 size-4 hidden"
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
                                          <rect width="18" height="18" x="3" y="3" rx="2" />
                                          <path d="M8 12h8" />
                                        </svg>
                                      </button>
                                      <span
                                        className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
                                        role="tooltip"
                                      >
                                        Mark this notification as read
                                      </span>
                                    </div>
                                    <div className="hs-tooltip relative inline-block">
                                      <button
                                        type="button"
                                        className="hs-tooltip-toggle size-7 flex shrink-0 justify-center items-center text-gray-500 hover:bg-gray-100 hover:text-gray-800 rounded-sm disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:focus:bg-neutral-700"
                                      >
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
                                          <rect width="20" height="5" x="2" y="4" rx="2" />
                                          <path d="M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9" />
                                          <path d="M10 13h4" />
                                        </svg>
                                      </button>
                                      <span
                                        className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
                                        role="tooltip"
                                      >
                                        Archive this notification
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                {/* End Segment Button Group */}
                              </div>
                            </div>
                          </li>
                          {/* End List Item */}

                          {/* List Item */}
                          <li className="relative group w-full flex gap-x-5 text-start  p-5">
                            <div className="relative shrink-0">
                              <span className="flex shrink-0 justify-center items-center size-9.5 bg-white border border-gray-200 text-gray-500 text-sm font-semibold rounded-full shadow-2xs dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
                                P
                              </span>
                            </div>
                            <div className="grow">
                              <p className="text-xs text-gray-500 dark:text-neutral-500">
                                5 Jan 2023
                              </p>

                              <span className="block text-sm font-medium text-gray-800 dark:text-neutral-300">
                                We’re updating our Privacy Policy as of 10th January 2023.content
                              </span>
                              <p>
                                <a
                                  className="inline-flex items-center gap-x-1 text-sm text-violet-600 decoration-2 hover:underline font-medium focus:outline-hidden focus:underline dark:text-violet-400 dark:hover:text-violet-500"
                                  href="#"
                                >
                                  Learn more
                                  <svg
                                    className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
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
                                    <path d="m9 18 6-6-6-6" />
                                  </svg>
                                </a>
                              </p>
                            </div>

                            <div>
                              <div className="sm:group-hover:opacity-100 sm:opacity-0 sm:absolute sm:top-5 sm:end-5">
                                {/* Segment Button Group */}
                                <div className="inline-block p-0.5 bg-white border border-gray-200 rounded-lg shadow-2xs transition ease-out dark:bg-neutral-800 dark:border-neutral-700">
                                  <div className="flex items-center">
                                    <div className="hs-tooltip relative inline-block">
                                      <button
                                        type="button"
                                        className="hs-tooltip-toggle size-7 flex shrink-0 justify-center items-center text-gray-500 hover:bg-gray-100 hover:text-gray-800 rounded-sm disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:focus:bg-neutral-700"
                                      >
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
                                          <polyline points="9 11 12 14 22 4" />
                                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                        </svg>
                                        <svg
                                          className="shrink-0 size-4 hidden"
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
                                          <rect width="18" height="18" x="3" y="3" rx="2" />
                                          <path d="M8 12h8" />
                                        </svg>
                                      </button>
                                      <span
                                        className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
                                        role="tooltip"
                                      >
                                        Mark this notification as read
                                      </span>
                                    </div>
                                    <div className="hs-tooltip relative inline-block">
                                      <button
                                        type="button"
                                        className="hs-tooltip-toggle size-7 flex shrink-0 justify-center items-center text-gray-500 hover:bg-gray-100 hover:text-gray-800 rounded-sm disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:focus:bg-neutral-700"
                                      >
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
                                          <rect width="20" height="5" x="2" y="4" rx="2" />
                                          <path d="M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9" />
                                          <path d="M10 13h4" />
                                        </svg>
                                      </button>
                                      <span
                                        className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
                                        role="tooltip"
                                      >
                                        Archive this notification
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                {/* End Segment Button Group */}
                              </div>
                            </div>
                          </li>
                          {/* End List Item */}

                          {/* List Item */}
                          <li className="relative group w-full flex gap-x-5 text-start bg-gray-100 dark:bg-neutral-800 p-5">
                            <div className="relative shrink-0">
                              <img
                                className="shrink-0 size-9.5 rounded-full"
                                src="https://images.unsplash.com/photo-1614880353165-e56fac2ea9a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                                alt="Avatar"
                              />
                              <span className="absolute top-4 -start-3 size-2 bg-blue-600 rounded-full dark:bg-blue-500"></span>
                            </div>
                            <div className="grow">
                              <p className="text-xs text-gray-500 dark:text-neutral-500">
                                31 Dec 2022
                              </p>

                              <span className="block text-sm font-medium text-gray-800 dark:text-neutral-300">
                                Rubia Walter
                              </span>
                              <p className="text-sm text-gray-500 dark:text-neutral-500">
                                Joined the Slack group HS Team
                              </p>
                            </div>

                            <div>
                              <div className="sm:group-hover:opacity-100 sm:opacity-0 sm:absolute sm:top-5 sm:end-5">
                                {/* Segment Button Group */}
                                <div className="inline-block p-0.5 bg-white border border-gray-200 rounded-lg shadow-2xs transition ease-out dark:bg-neutral-800 dark:border-neutral-700">
                                  <div className="flex items-center">
                                    <div className="hs-tooltip relative inline-block">
                                      <button
                                        type="button"
                                        className="hs-tooltip-toggle size-7 flex shrink-0 justify-center items-center text-gray-500 hover:bg-gray-100 hover:text-gray-800 rounded-sm disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:focus:bg-neutral-700"
                                      >
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
                                          <polyline points="9 11 12 14 22 4" />
                                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                        </svg>
                                        <svg
                                          className="shrink-0 size-4 hidden"
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
                                          <rect width="18" height="18" x="3" y="3" rx="2" />
                                          <path d="M8 12h8" />
                                        </svg>
                                      </button>
                                      <span
                                        className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
                                        role="tooltip"
                                      >
                                        Mark this notification as read
                                      </span>
                                    </div>
                                    <div className="hs-tooltip relative inline-block">
                                      <button
                                        type="button"
                                        className="hs-tooltip-toggle size-7 flex shrink-0 justify-center items-center text-gray-500 hover:bg-gray-100 hover:text-gray-800 rounded-sm disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:focus:bg-neutral-700"
                                      >
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
                                          <rect width="20" height="5" x="2" y="4" rx="2" />
                                          <path d="M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9" />
                                          <path d="M10 13h4" />
                                        </svg>
                                      </button>
                                      <span
                                        className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
                                        role="tooltip"
                                      >
                                        Archive this notification
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                {/* End Segment Button Group */}
                              </div>
                            </div>
                          </li>
                          {/* End List Item */}
                        </ul>
                        {/* End List Group */}
                      </div>

                      {/* Footer */}
                      <div className="text-center border-t border-gray-200 dark:border-neutral-800">
                        <a
                          className="p-4 flex justify-center items-center gap-x-2 text-sm text-gray-500 font-medium sm:rounded-b-lg hover:text-violet-600 focus:outline-hidden focus:text-violet-600 dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                          href="../../docs/index.html"
                        >
                          Mark all as read
                        </a>
                      </div>
                      {/* End Footer */}
                    </div>
                    {/* End Tab Content */}

                    {/* Tab Content */}
                    <div
                      id="hs-pro-tabs-dnn-archived"
                      className="hidden"
                      role="tabpanel"
                      aria-labelledby="hs-pro-tabs-dnn-item-archived"
                    >
                      {/* Empty State */}
                      <div className="p-5 min-h-[533px] flex flex-col justify-center items-center text-center">
                        <svg
                          className="w-48 mx-auto mb-4"
                          width="178"
                          height="90"
                          viewBox="0 0 178 90"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="27"
                            y="50.5"
                            width="124"
                            height="39"
                            rx="7.5"
                            fill="currentColor"
                            className="fill-white dark:fill-neutral-800"
                          />
                          <rect
                            x="27"
                            y="50.5"
                            width="124"
                            height="39"
                            rx="7.5"
                            stroke="currentColor"
                            className="stroke-gray-50 dark:stroke-neutral-700/10"
                          />
                          <rect
                            x="34.5"
                            y="58"
                            width="24"
                            height="24"
                            rx="4"
                            fill="currentColor"
                            className="fill-gray-50 dark:fill-neutral-700/30"
                          />
                          <rect
                            x="66.5"
                            y="61"
                            width="60"
                            height="6"
                            rx="3"
                            fill="currentColor"
                            className="fill-gray-50 dark:fill-neutral-700/30"
                          />
                          <rect
                            x="66.5"
                            y="73"
                            width="77"
                            height="6"
                            rx="3"
                            fill="currentColor"
                            className="fill-gray-50 dark:fill-neutral-700/30"
                          />
                          <rect
                            x="19.5"
                            y="28.5"
                            width="139"
                            height="39"
                            rx="7.5"
                            fill="currentColor"
                            className="fill-white dark:fill-neutral-800"
                          />
                          <rect
                            x="19.5"
                            y="28.5"
                            width="139"
                            height="39"
                            rx="7.5"
                            stroke="currentColor"
                            className="stroke-gray-100 dark:stroke-neutral-700/30"
                          />
                          <rect
                            x="27"
                            y="36"
                            width="24"
                            height="24"
                            rx="4"
                            fill="currentColor"
                            className="fill-gray-100 dark:fill-neutral-700/70"
                          />
                          <rect
                            x="59"
                            y="39"
                            width="60"
                            height="6"
                            rx="3"
                            fill="currentColor"
                            className="fill-gray-100 dark:fill-neutral-700/70"
                          />
                          <rect
                            x="59"
                            y="51"
                            width="92"
                            height="6"
                            rx="3"
                            fill="currentColor"
                            className="fill-gray-100 dark:fill-neutral-700/70"
                          />
                          <g filter="url(#filter3)">
                            <rect
                              x="12"
                              y="6"
                              width="154"
                              height="40"
                              rx="8"
                              fill="currentColor"
                              className="fill-white dark:fill-neutral-800"
                              shapeRendering="crispEdges"
                            />
                            <rect
                              x="12.5"
                              y="6.5"
                              width="153"
                              height="39"
                              rx="7.5"
                              stroke="currentColor"
                              className="stroke-gray-100 dark:stroke-neutral-700/60"
                              shapeRendering="crispEdges"
                            />
                            <rect
                              x="20"
                              y="14"
                              width="24"
                              height="24"
                              rx="4"
                              fill="currentColor"
                              className="fill-gray-200 dark:fill-neutral-700 "
                            />
                            <rect
                              x="52"
                              y="17"
                              width="60"
                              height="6"
                              rx="3"
                              fill="currentColor"
                              className="fill-gray-200 dark:fill-neutral-700"
                            />
                            <rect
                              x="52"
                              y="29"
                              width="106"
                              height="6"
                              rx="3"
                              fill="currentColor"
                              className="fill-gray-200 dark:fill-neutral-700"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter3"
                              x="0"
                              y="0"
                              width="178"
                              height="64"
                              filterUnits="userSpaceOnUse"
                              colorinterpolation-filters="sRGB"
                            >
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset dy="6" />
                              <feGaussianBlur stdDeviation="6" />
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
                            No archived notifications
                          </p>
                          <p className="mb-5 text-sm text-gray-500 dark:text-neutral-500">
                            No data here yet. We will notify you when there's an update.
                          </p>
                        </div>

                        <a
                          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                          href="@@href"
                        >
                          Notifications settings
                        </a>
                      </div>
                      {/* End Empty State */}
                    </div>
                    {/* End Tab Content */}
                  </div>
                </div>
                {/* End Notifications Dropdown */}
              </div>

              <div className="hidden sm:block border-e border-gray-700 w-px h-6 mx-1.5 dark:border-neutral-800"></div>

              {/* Account Dropdown */}
              <div className="hs-dropdown inline-flex   [--strategy:absolute] [--auto-close:inside] [--placement:bottom-right] relative text-start">
                <button
                  id="hs-pro-snad"
                  type="button"
                  className="inline-flex shrink-0 items-center gap-x-3 text-start rounded-full focus:outline-hidden cursor-pointer"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  aria-label="Dropdown"
                >
                  <img
                    className="shrink-0 size-9.5 rounded-full"
                    src={user.profile_photo_url}
                    alt="Avatar"
                  />
                </button>

                {/* Account Dropdown */}
                <div
                  className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-60 transition-[opacity,margin] duration opacity-0 hidden z-20 bg-white rounded-xl shadow-xl dark:bg-neutral-900"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="hs-pro-snad"
                >
                  <div className="p-1 border-b border-gray-200 dark:border-neutral-800">
                    <a
                      className="py-2 px-3 flex items-center gap-x-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      href="../../pro/dashboard/user-profile-my-profile.html"
                    >
                      <img
                        className="shrink-0 size-8 rounded-full"
                        src={user.profile_photo_url}
                        alt="Avatar"
                      />

                      <div className="grow">
                        <span className="text-sm font-semibold text-gray-800 dark:text-neutral-300">
                          {`${ucfirst(user.firstname)} ${ucfirst(user.name)}`}
                        </span>
                        <p className="text-xs text-gray-500 dark:text-neutral-500">{user.email}</p>
                      </div>
                    </a>
                  </div>
                  <div className="p-1">
                    <a
                      className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      href="#"
                    >
                      <svg
                        className="shrink-0 mt-0.5 size-4"
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
                        <rect width="20" height="14" x="2" y="5" rx="2" />
                        <line x1="2" x2="22" y1="10" y2="10" />
                      </svg>
                      Billing
                    </a>
                    <a
                      className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      href="#"
                    >
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
                        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                      Settings
                    </a>
                    <a
                      className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      href="#"
                    >
                      <svg
                        className="shrink-0 mt-0.5 size-4"
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
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      My account
                    </a>
                  </div>
                  <div className="px-4 py-3.5 border-y border-gray-200 dark:border-neutral-800">
                    {/* Switch/Toggle */}
                    <div className="flex flex-wrap justify-between items-center gap-2">
                      <label
                        htmlFor="hs-pro-snaddm"
                        className="flex-1 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
                      >
                        Dark mode
                      </label>
                      <label
                        htmlFor="hs-pro-snaddm"
                        className="relative inline-block w-11 h-6 cursor-pointer"
                      >
                        <input
                          data-hs-theme-switch
                          type="checkbox"
                          id="hs-pro-snaddm"
                          className="peer sr-only"
                        />
                        <span className="absolute inset-0 bg-gray-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-violet-600 dark:bg-neutral-700 dark:peer-checked:bg-violet-500 peer-disabled:opacity-50 peer-disabled:pointer-events-none"></span>
                        <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-sm !transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white"></span>
                      </label>
                    </div>
                    {/* End Switch/Toggle */}
                  </div>
                  <div className="p-1">
                    <a
                      className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      href="#"
                    >
                      Customization
                      <div className="ms-auto">
                        <span className="ms-auto inline-flex items-center gap-1.5 py-px px-1.5 rounded-sm text-[10px] leading-4 font-medium bg-gray-100 text-gray-800 dark:bg-neutral-700 dark:text-neutral-300">
                          New
                        </span>
                      </div>
                    </a>
                    <a
                      className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      href="#"
                    >
                      Manage team
                    </a>
                    <a
                      className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      href="#"
                      onClick={logout}
                    >
                      Sign out
                    </a>
                  </div>
                  <div className="p-1 border-t border-gray-200 dark:border-neutral-800">
                    <button
                      type="button"
                      className="flex mt-0.5 gap-x-3 py-2 px-3 w-full rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      data-hs-overlay="#hs-pro-dasadam"
                    >
                      <svg
                        className="shrink-0 size-4 mt-0.5"
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
                        <path d="M8 12h8" />
                        <path d="M12 8v8" />
                      </svg>
                      Add team account
                    </button>
                  </div>
                </div>
                {/* End Account Dropdown */}
              </div>
              {/* End Account Dropdown */}
            </div>
          </div>
        </div>

        {showNavbarMenu && (
          <AppNavHeader
            jetstream={jetstream}
            subscription={subscription}
            switchToTeam={switchToTeam}
            user={user}
            permissions={permissions}
            all_teams={all_teams}
          />
        )}
      </header>
      {/* ========== END HEADER ========== */}

      {/* ========== MAIN CONTENT ========== */}
      <main id="content">
        <div className="max-w-[85rem] p-2 sm:p-5 md:pt-5 lg:px-8 mx-auto">
          <DismissableAlert
            title={__("messages.upgrade_to_plan.title", {
              plan: subscription.upgrade_plan.name,
            })}
            description={__("messages.upgrade_to_plan.description", {
              plan: subscription.upgrade_plan.name,
            })}
            isShowed={subscription.current === "starter"}
          />
          {children}
        </div>
      </main>
      {/* ========== END MAIN CONTENT ========== */}

      {/* Search Modal */}
      <div
        id="hs-pro-dnsm"
        className="hs-overlay hs-overlay-backdrop-open:backdrop-blur-md hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none"
        role="dialog"
        tabIndex={-1}
        aria-label="Search"
      >
        <div className="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto h-[calc(100%-56px)] min-h-[calc(100%-56px)] flex items-center">
          <div className="max-h-full relative w-full flex flex-col bg-white rounded-xl pointer-events-auto shadow-xl dark:bg-neutral-800">
            {/* Input */}
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
                <svg
                  className="shrink-0 size-4 text-gray-400 dark:text-white/60"
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
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
              <div className="border-b border-gray-200 dark:border-neutral-700">
                <input
                  type="text"
                  className="py-2.5 sm:py-3 ps-10 pe-8 block w-full bg-white border-transparent rounded-t-lg sm:text-sm focus:outline-hidden focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:text-neutral-400 dark:placeholder:text-neutral-400"
                  placeholder="Search or type a command"
                  autoFocus
                />
              </div>
              <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-1">
                <button
                  type="button"
                  className="inline-flex shrink-0 justify-center items-center size-6 rounded-full text-gray-500 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
                  aria-label="Close"
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
                    <circle cx="12" cy="12" r="10" />
                    <path d="m15 9-6 6" />
                    <path d="m9 9 6 6" />
                  </svg>
                </button>
              </div>
            </div>
            {/* End Input */}

            {/* Body */}
            <div className="h-125 p-4 overflow-y-auto overflow-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
              <div className="pb-4 mb-4 border-b border-gray-200 dark:border-neutral-700">
                <span className="block text-xs text-gray-500 mb-2 dark:text-neutral-500">
                  Topics
                </span>

                {/* Tag Group */}
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  <a
                    className="inline-flex items-center gap-x-1.5 text-xs font-medium text-gray-800 border border-gray-200 hover:bg-gray-100 py-1.5 px-2.5 rounded-full focus:outline-hidden focus:bg-gray-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                    href="#"
                  >
                    <svg
                      className="shrink-0 size-3.5"
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
                      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                    </svg>
                    Inbox
                  </a>
                  <a
                    className="inline-flex items-center gap-x-1.5 text-xs font-medium text-gray-800 border border-gray-200 hover:bg-gray-100 py-1.5 px-2.5 rounded-full focus:outline-hidden focus:bg-gray-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                    href="#"
                  >
                    <svg
                      className="shrink-0 size-3.5"
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
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                    Activity
                  </a>
                  <a
                    className="inline-flex items-center gap-x-1.5 text-xs font-medium text-gray-800 border border-gray-200 hover:bg-gray-100 py-1.5 px-2.5 rounded-full focus:outline-hidden focus:bg-gray-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                    href="#"
                  >
                    <svg
                      className="shrink-0 size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14.9636 7.95706C14.9636 7.03203 13.8052 6.1554 12.0292 5.61175C12.439 3.80157 12.2569 2.36137 11.4542 1.90027C11.2692 1.79212 11.0529 1.74089 10.8167 1.74089V2.3756C10.9476 2.3756 11.0529 2.40121 11.1411 2.4496C11.5282 2.67161 11.6961 3.51695 11.5652 4.60419C11.5339 4.87174 11.4827 5.15351 11.4201 5.44099C10.8622 5.30438 10.2531 5.19907 9.61271 5.13076C9.22848 4.60419 8.82999 4.12602 8.42868 3.70764C9.35654 2.84523 10.2275 2.37275 10.8195 2.37275V1.73804C10.0368 1.73804 9.01216 2.2959 7.97612 3.26362C6.9401 2.30159 5.91546 1.74942 5.13274 1.74942V2.38413C5.72192 2.38413 6.59569 2.85376 7.52358 3.71049C7.12509 4.12887 6.72663 4.60419 6.34807 5.13076C5.70484 5.19907 5.09574 5.30438 4.53786 5.44384C4.47241 5.15921 4.42403 4.88314 4.38988 4.61842C4.25609 3.53117 4.42118 2.68584 4.80541 2.46098C4.89079 2.40975 5.0018 2.38698 5.13274 2.38698V1.75227C4.89364 1.75227 4.67732 1.8035 4.48948 1.91166C3.68969 2.37275 3.51038 3.81009 3.92308 5.6146C2.15272 6.16108 1 7.03488 1 7.95706C1 8.88209 2.15842 9.75872 3.93446 10.3024C3.52461 12.1126 3.70677 13.5528 4.50941 14.0138C4.69443 14.122 4.91072 14.1732 5.14982 14.1732C5.93254 14.1732 6.95718 13.6154 7.99319 12.6477C9.02924 13.6097 10.0539 14.1619 10.8366 14.1619C11.0757 14.1619 11.292 14.1106 11.4799 14.0025C12.2796 13.5414 12.4589 12.104 12.0463 10.2995C13.8109 9.7559 14.9636 8.87924 14.9636 7.95706ZM11.2578 6.05862C11.1525 6.42577 11.0216 6.80434 10.8736 7.1829C10.7569 6.9552 10.6345 6.72748 10.5007 6.49978C10.3698 6.27209 10.2303 6.0501 10.0909 5.83378C10.495 5.89356 10.885 5.96753 11.2578 6.05862ZM9.95427 9.08986C9.73225 9.4741 9.50455 9.83843 9.2683 10.1771C8.84422 10.2141 8.41446 10.2341 7.98182 10.2341C7.55203 10.2341 7.12227 10.2141 6.701 10.18C6.46479 9.84128 6.23424 9.4798 6.01222 9.09841C5.7959 8.72556 5.59951 8.347 5.42022 7.96561C5.59668 7.5842 5.7959 7.20282 6.00937 6.82996C6.23139 6.4457 6.45908 6.0814 6.69533 5.74269C7.11942 5.70569 7.54918 5.68576 7.98182 5.68576C8.41161 5.68576 8.84137 5.70569 9.26263 5.73984C9.49885 6.07855 9.7294 6.44003 9.95142 6.82141C10.1677 7.19427 10.3641 7.57283 10.5434 7.95421C10.3641 8.33562 10.1677 8.717 9.95427 9.08986ZM10.8736 8.71986C11.0273 9.10127 11.1582 9.48265 11.2664 9.85266C10.8935 9.94374 10.5007 10.0206 10.0937 10.0803C10.2332 9.86121 10.3727 9.63633 10.5036 9.40579C10.6345 9.17809 10.7569 8.94755 10.8736 8.71986ZM7.98752 11.7568C7.72282 11.4835 7.45812 11.179 7.19625 10.846C7.45242 10.8574 7.71427 10.8659 7.97897 10.8659C8.24652 10.8659 8.51121 10.8602 8.77024 10.846C8.51406 11.179 8.24937 11.4835 7.98752 11.7568ZM5.8699 10.0803C5.46575 10.0206 5.07581 9.94659 4.70295 9.85551C4.80826 9.48835 4.9392 9.10979 5.08719 8.73123C5.2039 8.95895 5.32628 9.18665 5.46004 9.41434C5.59383 9.64204 5.73044 9.86403 5.8699 10.0803ZM7.97329 4.15735C8.23799 4.43058 8.50269 4.73513 8.76454 5.06813C8.50836 5.05676 8.24652 5.0482 7.98182 5.0482C7.71427 5.0482 7.44957 5.05391 7.19057 5.06813C7.44672 4.73513 7.71142 4.43058 7.97329 4.15735ZM5.86705 5.83378C5.72759 6.05295 5.58813 6.27779 5.45719 6.50834C5.32628 6.73603 5.2039 6.96372 5.08719 7.19142C4.9335 6.81004 4.80256 6.42863 4.69443 6.05862C5.06726 5.97039 5.46004 5.89356 5.86705 5.83378ZM3.29122 9.39727C2.28365 8.96748 1.63186 8.40393 1.63186 7.95706C1.63186 7.5102 2.28365 6.9438 3.29122 6.51686C3.536 6.41155 3.80354 6.31764 4.07962 6.22941C4.24186 6.78726 4.45533 7.36788 4.72003 7.96276C4.45818 8.55476 4.24756 9.13257 4.08817 9.68756C3.80639 9.59933 3.53884 9.50257 3.29122 9.39727ZM4.82249 13.4645C4.4354 13.2425 4.26749 12.3972 4.3984 11.3099C4.4297 11.0424 4.48096 10.7606 4.54356 10.4731C5.10144 10.6097 5.71052 10.7151 6.35092 10.7834C6.73516 11.3099 7.13364 11.7881 7.53495 12.2065C6.6071 13.0689 5.73615 13.5414 5.14412 13.5414C5.01603 13.5385 4.90787 13.5129 4.82249 13.4645ZM11.5738 11.2957C11.7075 12.383 11.5425 13.2283 11.1582 13.4531C11.0728 13.5044 10.9618 13.5272 10.8309 13.5272C10.2417 13.5272 9.36794 13.0575 8.44006 12.2008C8.83854 11.7824 9.237 11.3071 9.61556 10.7805C10.2588 10.7122 10.8679 10.6069 11.4258 10.4674C11.4912 10.7549 11.5425 11.031 11.5738 11.2957ZM12.6696 9.39727C12.4248 9.50257 12.1572 9.59651 11.8812 9.68474C11.7189 9.12687 11.5055 8.54624 11.2408 7.95136C11.5026 7.35936 11.7132 6.78156 11.8726 6.22656C12.1544 6.31479 12.4219 6.41155 12.6724 6.51686C13.68 6.94665 14.3318 7.5102 14.3318 7.95706C14.3289 8.40393 13.6771 8.97033 12.6696 9.39727Z" />
                      <path d="M7.97885 9.25778C8.69722 9.25778 9.27959 8.67543 9.27959 7.95706C9.27959 7.23869 8.69722 6.65632 7.97885 6.65632C7.26048 6.65632 6.67814 7.23869 6.67814 7.95706C6.67814 8.67543 7.26048 9.25778 7.97885 9.25778Z" />
                    </svg>
                    React
                  </a>
                  <a
                    className="inline-flex items-center gap-x-1.5 text-xs font-medium text-gray-800 border border-gray-200 hover:bg-gray-100 py-1.5 px-2.5 rounded-full focus:outline-hidden focus:bg-gray-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                    href="#"
                  >
                    <svg
                      className="shrink-0 size-3.5"
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
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" x2="8" y1="13" y2="13" />
                      <line x1="16" x2="8" y1="17" y2="17" />
                      <line x1="10" x2="8" y1="9" y2="9" />
                    </svg>
                    Files
                  </a>
                </div>
                {/* End Tag Group */}
              </div>

              <div className="pb-4 mb-4 border-b border-gray-200 dark:border-neutral-700">
                <span className="block text-xs text-gray-500 mb-2 dark:text-neutral-500">
                  Recent
                </span>

                {/* List Group */}
                <ul className="-mx-2.5">
                  {/* List Item */}
                  <li>
                    <a
                      className="py-2 px-3 flex items-center gap-x-3 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                      href="#"
                    >
                      <svg
                        className="shrink-0 size-5"
                        width="33"
                        height="32"
                        viewBox="0 0 33 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_11766_122209)">
                          <path
                            d="M3.11931 28.4817H8.21019V16.1181L0.937439 10.6636V26.3C0.937439 27.5054 1.91381 28.4819 3.11931 28.4819V28.4817Z"
                            fill="#4285F4"
                          />
                          <path
                            d="M25.6647 28.4817H30.7556C31.961 28.4817 32.9374 27.5054 32.9374 26.2999V10.6636L25.6647 16.1181V28.4817Z"
                            fill="#34A853"
                          />
                          <path
                            d="M25.6647 6.66356V16.1181L32.9374 10.6636V7.7545C32.9374 5.05812 29.8593 3.51812 27.701 5.13631L25.6647 6.66356Z"
                            fill="#FBBC04"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.21021 16.1181V6.66356L16.9375 13.2091L25.6647 6.66356V16.1181L16.9375 22.6636L8.21021 16.1181Z"
                            fill="#EA4335"
                          />
                          <path
                            d="M0.937439 7.7545V10.6636L8.21019 16.1181V6.66356L6.17381 5.13631C4.01556 3.51813 0.937439 5.05813 0.937439 7.75438V7.7545Z"
                            fill="#C5221F"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_11766_122209">
                            <rect
                              width="32"
                              height="32"
                              fill="white"
                              transform="translate(0.937439)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="text-sm text-gray-800 dark:text-neutral-200">
                        Compose an email
                      </span>
                      <span className="text-xs text-gray-400 dark:text-neutral-500">Gmail</span>

                      <div className="ms-auto inline-flex items-center gap-x-1">
                        <div className="size-5 flex flex-col justify-center items-center bg-white border border-gray-200 text-xs uppercase text-gray-400 rounded-sm dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
                          <svg
                            className="shrink-0 size-2.5 text-gray-500 dark:text-neutral-500"
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
                            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                          </svg>
                        </div>
                        <div className="size-5 flex flex-col justify-center items-center bg-white border border-gray-200 text-xs uppercase text-gray-400 rounded-sm dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
                          <svg
                            className="shrink-0 size-2.5 text-gray-500 dark:text-neutral-500"
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
                            <path d="M3 3h6l6 18h6" />
                            <path d="M14 3h7" />
                          </svg>
                        </div>
                      </div>
                    </a>
                  </li>
                  {/* End List Item */}

                  {/* List Item */}
                  <li>
                    <a
                      className="py-2 px-3 flex items-center gap-x-3 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                      href="#"
                    >
                      <svg
                        className="shrink-0 size-5"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.7326 0C9.96372 0.00130479 8.53211 1.43397 8.53342 3.19935C8.53211 4.96473 9.96503 6.39739 11.7339 6.39869H14.9345V3.20065C14.9358 1.43527 13.5029 0.00260958 11.7326 0C11.7339 0 11.7339 0 11.7326 0M11.7326 8.53333H3.20053C1.43161 8.53464 -0.00130383 9.9673 3.57297e-06 11.7327C-0.00261123 13.4981 1.4303 14.9307 3.19922 14.9333H11.7326C13.5016 14.932 14.9345 13.4994 14.9332 11.734C14.9345 9.9673 13.5016 8.53464 11.7326 8.53333Z"
                          fill="#36C5F0"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M32 11.7327C32.0013 9.9673 30.5684 8.53464 28.7995 8.53333C27.0306 8.53464 25.5976 9.9673 25.5989 11.7327V14.9333H28.7995C30.5684 14.932 32.0013 13.4994 32 11.7327ZM23.4666 11.7327V3.19935C23.4679 1.43527 22.0363 0.00260958 20.2674 0C18.4984 0.00130479 17.0655 1.43397 17.0668 3.19935V11.7327C17.0642 13.4981 18.4971 14.9307 20.2661 14.9333C22.035 14.932 23.4679 13.4994 23.4666 11.7327Z"
                          fill="#2EB67D"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M20.2661 32C22.035 31.9987 23.4679 30.566 23.4666 28.8007C23.4679 27.0353 22.035 25.6026 20.2661 25.6013H17.0656V28.8007C17.0642 30.5647 18.4972 31.9974 20.2661 32ZM20.2661 23.4654H28.7995C30.5684 23.4641 32.0013 22.0314 32 20.266C32.0026 18.5006 30.5697 17.068 28.8008 17.0654H20.2674C18.4985 17.0667 17.0656 18.4993 17.0669 20.2647C17.0656 22.0314 18.4972 23.4641 20.2661 23.4654Z"
                          fill="#ECB22E"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.93953e-07 20.266C-0.00130651 22.0314 1.43161 23.4641 3.20052 23.4654C4.96944 23.4641 6.40235 22.0314 6.40105 20.266V17.0667H3.20052C1.43161 17.068 -0.00130651 18.5006 8.93953e-07 20.266ZM8.53342 20.266V28.7993C8.5308 30.5647 9.96372 31.9974 11.7326 32C13.5016 31.9987 14.9345 30.566 14.9332 28.8007V20.2686C14.9358 18.5032 13.5029 17.0706 11.7339 17.068C9.96372 17.068 8.53211 18.5006 8.53342 20.266C8.53342 20.2673 8.53342 20.266 8.53342 20.266Z"
                          fill="#E01E5A"
                        />
                      </svg>
                      <span className="text-sm text-gray-800 dark:text-neutral-200">
                        Start a conversation
                      </span>
                      <span className="text-xs text-gray-400 dark:text-neutral-500">Slack</span>

                      <div className="ms-auto inline-flex items-center gap-x-1">
                        <div className="size-5 flex flex-col justify-center items-center bg-white border border-gray-200 text-xs uppercase text-gray-400 rounded-sm dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
                          <svg
                            className="shrink-0 size-2.5 text-gray-500 dark:text-neutral-500"
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
                            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                          </svg>
                        </div>
                        <div className="size-5 flex flex-col justify-center items-center bg-white border border-gray-200 text-xs uppercase text-gray-400 rounded-sm dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
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
                            <path d="m18 15-6-6-6 6" />
                          </svg>
                        </div>
                        <div className="size-5 flex flex-col justify-center items-center bg-white border border-gray-200 text-xs uppercase text-gray-400 rounded-sm dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
                          S
                        </div>
                      </div>
                    </a>
                  </li>
                  {/* End List Item */}

                  {/* List Item */}
                  <li>
                    <a
                      className="py-2 px-3 flex items-center gap-x-3 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                      href="#"
                    >
                      <svg
                        className="shrink-0 size-5"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.7438 0.940745C6.84695 1.30308 2.6841 1.63631 2.48837 1.67533C1.9396 1.77319 1.44038 2.14544 1.20563 2.63537L1 3.06646L1.01982 13.3407L1.04893 23.615L1.36234 24.2517C1.53886 24.6042 2.73365 26.2499 4.0362 27.9439C6.61221 31.2836 6.79802 31.47 7.77726 31.5679C8.06156 31.597 10.1966 31.4991 12.5081 31.3622C14.8295 31.2154 18.5508 30.99 20.7842 30.863C30.3233 30.2839 29.8334 30.3328 30.3815 29.8627C31.0672 29.2947 31.0183 30.2251 31.0474 17.7377C31.0672 7.15003 31.0573 6.45509 30.9006 6.13177C30.7148 5.76943 30.3815 5.51487 26.0329 2.45885C23.1243 0.421704 22.9186 0.313932 21.6155 0.294111C21.0772 0.274911 16.6307 0.568497 11.7438 0.940745ZM22.752 2.28232C23.1633 2.46814 26.1704 4.56412 26.6108 4.9661C26.7284 5.08378 26.7675 5.18164 26.7086 5.24048C26.5717 5.35817 7.96245 6.465 7.42421 6.38634C7.17956 6.34732 6.81722 6.20052 6.61159 6.06302C5.75932 5.48514 3.64413 3.75149 3.64413 3.62452C3.64413 3.29129 3.57538 3.29129 11.8714 2.69421C13.4582 2.58644 16.0633 2.39071 17.6502 2.26312C21.0871 1.98874 22.1159 1.99865 22.752 2.28232ZM28.6677 7.63996C28.8046 7.77685 28.9223 8.04132 28.9613 8.29589C28.9904 8.53125 29.0102 12.9189 28.9904 18.0313C28.9613 26.8067 28.9514 27.3555 28.7848 27.61C28.6869 27.7667 28.4912 27.9333 28.3438 27.9823C27.9331 28.1489 8.43318 29.2557 8.03183 29.138C7.84601 29.0891 7.59083 28.9324 7.45394 28.7955L7.21858 28.541L7.18947 19.0799C7.16965 12.4395 7.18947 9.5012 7.26813 9.23673C7.32697 9.041 7.47376 8.80564 7.60136 8.72759C7.77788 8.60991 8.93364 8.51205 12.9101 8.2773C15.7016 8.1206 20.0206 7.85613 22.4987 7.70933C28.3933 7.34638 28.3741 7.34638 28.6677 7.63996Z"
                          className="fill-black dark:fill-neutral-200"
                          fill="currentColor"
                        />
                        <path
                          d="M23.4277 10.8818C22.3698 10.9506 21.4296 11.0484 21.3218 11.1073C20.9985 11.2739 20.8028 11.5483 20.7638 11.8617C20.7347 12.185 20.8325 12.224 21.8898 12.3516L22.35 12.4104V16.5925C22.35 19.0799 22.311 20.7256 22.2621 20.6767C22.2131 20.6178 20.8226 18.5027 19.167 15.9756C17.512 13.4392 16.1407 11.3525 16.1209 11.3333C16.1011 11.3135 15.024 11.3724 13.7313 11.4609C12.1445 11.5687 11.273 11.6666 11.0965 11.7644C10.8122 11.9112 10.4988 12.4303 10.4988 12.7734C10.4988 12.979 10.871 13.0868 11.6545 13.0868H12.0658V25.1139L11.4 25.3196C10.8809 25.4763 10.7044 25.5741 10.6165 25.7698C10.4598 26.1031 10.4697 26.4066 10.6264 26.4066C10.6852 26.4066 11.792 26.3378 13.0649 26.2598C15.582 26.113 15.8657 26.0442 16.1302 25.5252C16.2088 25.3685 16.277 25.2019 16.277 25.1529C16.277 25.1139 15.9345 24.9962 15.5226 24.8984C15.1014 24.8005 14.6802 24.7027 14.5923 24.6828C14.4257 24.6339 14.4157 24.3304 14.4157 20.1186V15.6033L17.3931 20.2753C20.5173 25.1721 20.9093 25.7308 21.3893 25.9755C21.987 26.2889 23.5051 26.0733 24.2688 25.5741L24.5042 25.4273L24.524 18.7479L24.5531 12.0586L25.0722 11.9608C25.6891 11.8431 25.9734 11.5594 25.9734 11.0695C25.9734 10.7561 25.9536 10.7362 25.66 10.7462C25.4847 10.7542 24.4757 10.813 23.4277 10.8818Z"
                          className="fill-black dark:fill-neutral-200"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="text-sm text-gray-800 dark:text-neutral-200">
                        Create a project
                      </span>
                      <span className="text-xs text-gray-400 dark:text-neutral-500">Notion</span>

                      <div className="ms-auto inline-flex items-center gap-x-1">
                        <div className="size-5 flex flex-col justify-center items-center bg-white border border-gray-200 text-xs uppercase text-gray-400 rounded-sm dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
                          <svg
                            className="shrink-0 size-2.5 text-gray-500 dark:text-neutral-500"
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
                            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                          </svg>
                        </div>
                        <div className="size-5 flex flex-col justify-center items-center bg-white border border-gray-200 text-xs uppercase text-gray-400 rounded-sm dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
                          N
                        </div>
                      </div>
                    </a>
                  </li>
                  {/* End List Item */}
                </ul>
                {/* End List Group */}
              </div>

              <div className="pb-4 mb-4 border-b border-gray-200 dark:border-neutral-700">
                <span className="block text-xs text-gray-500 mb-2 dark:text-neutral-500">
                  Files
                </span>

                {/* List Group */}
                <ul className="-mx-2.5">
                  {/* List Item */}
                  <li>
                    <a
                      className="py-2 px-3 flex items-center gap-x-3 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                      href="#"
                    >
                      <svg
                        className="shrink-0 size-5"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.0324 1.91994H9.45071C9.09999 1.91994 8.76367 2.05926 8.51567 2.30725C8.26767 2.55523 8.12839 2.89158 8.12839 3.24228V8.86395L20.0324 15.8079L25.9844 18.3197L31.9364 15.8079V8.86395L20.0324 1.91994Z"
                          fill="#21A366"
                        />
                        <path
                          d="M8.12839 8.86395H20.0324V15.8079H8.12839V8.86395Z"
                          fill="#107C41"
                        />
                        <path
                          d="M30.614 1.91994H20.0324V8.86395H31.9364V3.24228C31.9364 2.89158 31.7971 2.55523 31.5491 2.30725C31.3011 2.05926 30.9647 1.91994 30.614 1.91994Z"
                          fill="#33C481"
                        />
                        <path
                          d="M20.0324 15.8079H8.12839V28.3736C8.12839 28.7243 8.26767 29.0607 8.51567 29.3087C8.76367 29.5567 9.09999 29.6959 9.45071 29.6959H30.6141C30.9647 29.6959 31.3011 29.5567 31.549 29.3087C31.797 29.0607 31.9364 28.7243 31.9364 28.3736V22.7519L20.0324 15.8079Z"
                          fill="#185C37"
                        />
                        <path
                          d="M20.0324 15.8079H31.9364V22.7519H20.0324V15.8079Z"
                          fill="#107C41"
                        />
                        <path
                          opacity="0.1"
                          d="M16.7261 6.87994H8.12839V25.7279H16.7261C17.0764 25.7269 17.4121 25.5872 17.6599 25.3395C17.9077 25.0917 18.0473 24.756 18.0484 24.4056V8.20226C18.0473 7.8519 17.9077 7.51616 17.6599 7.2684C17.4121 7.02064 17.0764 6.88099 16.7261 6.87994Z"
                          fill="black"
                        />
                        <path
                          opacity="0.2"
                          d="M15.7341 7.87194H8.12839V26.7199H15.7341C16.0844 26.7189 16.4201 26.5792 16.6679 26.3315C16.9157 26.0837 17.0553 25.748 17.0564 25.3976V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                          fill="black"
                        />
                        <path
                          opacity="0.2"
                          d="M15.7341 7.87194H8.12839V24.7359H15.7341C16.0844 24.7349 16.4201 24.5952 16.6679 24.3475C16.9157 24.0997 17.0553 23.764 17.0564 23.4136V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                          fill="black"
                        />
                        <path
                          opacity="0.2"
                          d="M14.7421 7.87194H8.12839V24.7359H14.7421C15.0924 24.7349 15.4281 24.5952 15.6759 24.3475C15.9237 24.0997 16.0633 23.764 16.0644 23.4136V9.19426C16.0633 8.84386 15.9237 8.50818 15.6759 8.26042C15.4281 8.01266 15.0924 7.87299 14.7421 7.87194Z"
                          fill="black"
                        />
                        <path
                          d="M1.51472 7.87194H14.7421C15.0927 7.87194 15.4291 8.01122 15.6771 8.25922C15.925 8.50722 16.0644 8.84354 16.0644 9.19426V22.4216C16.0644 22.7723 15.925 23.1087 15.6771 23.3567C15.4291 23.6047 15.0927 23.7439 14.7421 23.7439H1.51472C1.16402 23.7439 0.827672 23.6047 0.579686 23.3567C0.3317 23.1087 0.192383 22.7723 0.192383 22.4216V9.19426C0.192383 8.84354 0.3317 8.50722 0.579686 8.25922C0.827672 8.01122 1.16402 7.87194 1.51472 7.87194Z"
                          fill="#107C41"
                        />
                        <path
                          d="M3.69711 20.7679L6.90722 15.794L3.96694 10.8479H6.33286L7.93791 14.0095C8.08536 14.3091 8.18688 14.5326 8.24248 14.68H8.26328C8.36912 14.4407 8.47984 14.2079 8.5956 13.9817L10.3108 10.8479H12.4822L9.46656 15.7663L12.5586 20.7679H10.2473L8.3932 17.2959C8.30592 17.148 8.23184 16.9927 8.172 16.8317H8.14424C8.09016 16.9891 8.01824 17.1399 7.92998 17.2811L6.02236 20.7679H3.69711Z"
                          fill="white"
                        />
                      </svg>
                      <span className="text-sm text-gray-800 dark:text-neutral-200">
                        weekly-reports.xls
                      </span>
                      <span className="text-xs text-gray-400 dark:text-neutral-500">
                        04 Dec 2022
                      </span>
                    </a>
                  </li>
                  {/* End List Item */}

                  {/* List Item */}
                  <li>
                    <a
                      className="py-2 px-3 flex items-center gap-x-3 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                      href="#"
                    >
                      <svg
                        className="shrink-0 size-5"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M30.6141 1.91994H9.45071C9.09999 1.91994 8.76367 2.05926 8.51567 2.30725C8.26767 2.55523 8.12839 2.89158 8.12839 3.24228V8.86395L20.0324 12.3359L31.9364 8.86395V3.24228C31.9364 2.89158 31.797 2.55523 31.549 2.30725C31.3011 2.05926 30.9647 1.91994 30.6141 1.91994Z"
                          fill="#41A5EE"
                        />
                        <path
                          d="M31.9364 8.86395H8.12839V15.8079L20.0324 19.2799L31.9364 15.8079V8.86395Z"
                          fill="#2B7CD3"
                        />
                        <path
                          d="M31.9364 15.8079H8.12839V22.7519L20.0324 26.2239L31.9364 22.7519V15.8079Z"
                          fill="#185ABD"
                        />
                        <path
                          d="M31.9364 22.752H8.12839V28.3736C8.12839 28.7244 8.26767 29.0607 8.51567 29.3087C8.76367 29.5567 9.09999 29.696 9.45071 29.696H30.6141C30.9647 29.696 31.3011 29.5567 31.549 29.3087C31.797 29.0607 31.9364 28.7244 31.9364 28.3736V22.752Z"
                          fill="#103F91"
                        />
                        <path
                          opacity="0.1"
                          d="M16.7261 6.87994H8.12839V25.7279H16.7261C17.0764 25.7269 17.4121 25.5872 17.6599 25.3395C17.9077 25.0917 18.0473 24.756 18.0484 24.4056V8.20226C18.0473 7.8519 17.9077 7.51616 17.6599 7.2684C17.4121 7.02064 17.0764 6.88099 16.7261 6.87994Z"
                          fill="black"
                        />
                        <path
                          opacity="0.2"
                          d="M15.7341 7.87194H8.12839V26.7199H15.7341C16.0844 26.7189 16.4201 26.5792 16.6679 26.3315C16.9157 26.0837 17.0553 25.748 17.0564 25.3976V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                          fill="black"
                        />
                        <path
                          opacity="0.2"
                          d="M15.7341 7.87194H8.12839V24.7359H15.7341C16.0844 24.7349 16.4201 24.5952 16.6679 24.3475C16.9157 24.0997 17.0553 23.764 17.0564 23.4136V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                          fill="black"
                        />
                        <path
                          opacity="0.2"
                          d="M14.7421 7.87194H8.12839V24.7359H14.7421C15.0924 24.7349 15.4281 24.5952 15.6759 24.3475C15.9237 24.0997 16.0633 23.764 16.0644 23.4136V9.19426C16.0633 8.84386 15.9237 8.50818 15.6759 8.26042C15.4281 8.01266 15.0924 7.87299 14.7421 7.87194Z"
                          fill="black"
                        />
                        <path
                          d="M1.51472 7.87194H14.7421C15.0927 7.87194 15.4291 8.01122 15.6771 8.25922C15.925 8.50722 16.0644 8.84354 16.0644 9.19426V22.4216C16.0644 22.7723 15.925 23.1087 15.6771 23.3567C15.4291 23.6047 15.0927 23.7439 14.7421 23.7439H1.51472C1.16401 23.7439 0.827669 23.6047 0.579687 23.3567C0.3317 23.1087 0.192383 22.7723 0.192383 22.4216V9.19426C0.192383 8.84354 0.3317 8.50722 0.579687 8.25922C0.827669 8.01122 1.16401 7.87194 1.51472 7.87194Z"
                          fill="#185ABD"
                        />
                        <path
                          d="M12.0468 20.7679H10.2612L8.17801 13.9231L5.99558 20.7679H4.20998L2.22598 10.8479H4.01158L5.40038 17.7919L7.48358 11.0463H8.97161L10.9556 17.7919L12.3444 10.8479H14.0308L12.0468 20.7679Z"
                          fill="white"
                        />
                      </svg>
                      <span className="text-sm text-gray-800 dark:text-neutral-200">
                        my-file.docx
                      </span>
                      <span className="text-xs text-gray-400 dark:text-neutral-500">
                        30 Dec 2022
                      </span>
                    </a>
                  </li>
                  {/* End List Item */}
                </ul>
                {/* End List Group */}
              </div>

              <div>
                <span className="block text-xs text-gray-500 mb-2 dark:text-neutral-500">
                  People
                </span>

                {/* List Group */}
                <ul className="-mx-2.5">
                  {/* List Item */}
                  <li>
                    <a
                      className="py-2 px-3 flex items-center gap-x-3 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                      href="#"
                    >
                      <img
                        className="shrink-0 size-5 rounded-full"
                        src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                        alt="Avatar"
                      />
                      <span className="text-sm text-gray-800 dark:text-neutral-200">
                        Kim Ya Sung
                      </span>
                      <span className="text-xs text-teal-600">Active now</span>
                    </a>
                  </li>
                  {/* End List Item */}

                  {/* List Item */}
                  <li>
                    <a
                      className="py-2 px-3 flex items-center gap-x-3 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                      href="#"
                    >
                      <img
                        className="shrink-0 size-5 rounded-full"
                        src="https://images.unsplash.com/photo-1610186593977-82a3e3696e7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                        alt="Avatar"
                      />
                      <span className="text-sm text-gray-800 dark:text-neutral-200">
                        Chris Peti
                      </span>
                      <span className="text-xs text-gray-400 dark:text-neutral-500">
                        Last seen 2 min ago
                      </span>
                    </a>
                  </li>
                  {/* End List Item */}

                  {/* List Item */}
                  <li>
                    <a
                      className="py-2 px-3 flex items-center gap-x-3 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                      href="#"
                    >
                      <img
                        className="shrink-0 size-5 rounded-full"
                        src="https://images.unsplash.com/photo-1568048689711-5e0325cea8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                        alt="Avatar"
                      />
                      <span className="text-sm text-gray-800 dark:text-neutral-200">
                        Martin Azara
                      </span>
                      <span className="text-xs text-gray-400 dark:text-neutral-500">
                        Last seen yesterday
                      </span>
                    </a>
                  </li>
                  {/* End List Item */}
                </ul>
                {/* End List Group */}
              </div>
            </div>
            {/* End Body */}

            {/* Footer */}
            <div className="p-4 flex justify-between items-center border-t border-gray-200 dark:border-neutral-700">
              <div className="inline-flex items-center gap-x-2">
                <div className="size-5 flex flex-col justify-center items-center bg-white border border-gray-200 text-xs uppercase text-gray-400 shadow-2xs rounded-sm dark:bg-neutral-800 dark:border-neutral-700">
                  <svg
                    className="shrink-0 size-3 text-gray-400 dark:text-neutral-500"
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
                    <polyline points="9 10 4 15 9 20" />
                    <path d="M20 4v7a4 4 0 0 1-4 4H4" />
                  </svg>
                </div>
                <span className="text-xs text-gray-400 dark:text-neutral-500">to close</span>
              </div>

              <div className="inline-flex items-center gap-x-4">
                <div className="inline-flex items-center gap-x-2">
                  <div className="size-5 flex flex-col justify-center items-center bg-white border border-gray-200 text-xs uppercase text-gray-400 shadow-2xs rounded-sm dark:bg-neutral-800 dark:border-neutral-700">
                    <svg
                      className="shrink-0 size-3.5 text-gray-400 dark:text-neutral-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 14.596C21.828 15.1189 20.888 16 19.5969 16C18.3057 16 16.9265 14.6624 16.9265 12.8974V12.0687C16.9265 10.2373 18.2022 9.00142 19.5969 9.00142C20.9918 9.00142 21.7942 9.69876 22 10.5666M14.5417 10.3109C14.3233 9.6198 13.3292 8.96537 12.1831 9.00142C11.0374 9.03732 10.0119 9.83333 10.0119 10.777C10.0119 11.7208 10.6901 12.0632 12.1839 12.2081C13.6774 12.353 14.49 13.1331 14.5417 13.9596C14.5934 14.7861 13.8083 16 12.1839 16C10.7604 16 9.69525 14.6894 9.63548 13.9379M7.25295 14.7213C6.82726 15.5884 5.94455 15.9999 4.75814 15.9999C3.57172 15.9999 2 15.088 2 12.7831V12.1113C2 10.5911 3.16477 9.00113 4.75814 9.00113C6.35166 9.00113 7.41158 10.5059 7.25295 12.2838H2.47754" />
                    </svg>
                  </div>
                  <span className="text-xs text-gray-400 dark:text-neutral-500">to select</span>
                </div>

                <div className="inline-flex items-center gap-x-2">
                  <div className="size-5 flex flex-col justify-center items-center bg-white border border-gray-200 text-xs uppercase text-gray-400 shadow-2xs rounded-sm dark:bg-neutral-800 dark:border-neutral-700">
                    <svg
                      className="shrink-0 size-3 text-gray-400 dark:text-neutral-500"
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
                      <path d="M12 5v14" />
                      <path d="m19 12-7 7-7-7" />
                    </svg>
                  </div>
                  <div className="size-5 flex flex-col justify-center items-center bg-white border border-gray-200 text-xs uppercase text-gray-400 shadow-2xs rounded-sm dark:bg-neutral-800 dark:border-neutral-700">
                    <svg
                      className="shrink-0 size-3 text-gray-400 dark:text-neutral-500"
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
                      <path d="m5 12 7-7 7 7" />
                      <path d="M12 19V5" />
                    </svg>
                  </div>
                  <span className="text-xs text-gray-400 dark:text-neutral-500">to navigate</span>
                </div>
              </div>
            </div>
            {/* End Footer */}
          </div>
        </div>
      </div>
      {/* End Search Modal */}
    </PrelineProviderLayout>
  );
}
