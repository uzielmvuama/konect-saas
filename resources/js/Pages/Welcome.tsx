import React from "react";
import { usePage } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import CookieConsentModal from "@/Components/Modals/CookieConsentModal";
import MainButton from "@/Components/Buttons/MainButton";

interface PageProps {
  auth: {
    user: any;
  };
  laravelVersion: string;
  phpVersion: string;
  canLogin: boolean;
  canRegister: boolean;
}

export default function Welcome() {
  // @ts-ignore
  const { props } = usePage<PageProps>();
  const { auth, laravelVersion, phpVersion, canLogin, canRegister } = props;

  const page = usePage();

  return (
    <GuestLayout title="Welcome">
      <>
        {/* ========== MAIN CONTENT ========== */}
        <main id="content">
          {/* Hero */}
          <div className="relative bg-[url(../img/pro/startup/img11.webp)] dark:bg-[url(../img/pro/startup-dark/img11.webp)] bg-no-repeat bg-cover bg-top">
            <div className="pt-10 md:pt-20 pb-14 md:pb-20 relative z-10">
              <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
                {/* Grid */}
                <div className="mb-4 md:mb-8 grid md:grid-cols-12 items-center gap-y-12 gap-x-5 lg:gap-x-8">
                  <div className="md:col-span-7">
                    <p className="mb-3 md:mb-4 font-mono text-sm text-gray-500 dark:text-neutral-400">
                      Web App
                    </p>
                    <h1 className="font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-white">
                      L'Expression de votre valeur
                    </h1>
                    <p className="mt-5 text-sm md:text-lg text-gray-800 dark:text-gray-200">
                      Boostez et developez efficacement votre réseau, au travers d'outils, et
                      ressources mises à votre disposition par Konect.
                    </p>
                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      <MainButton title={"Commencer L'essai Gratuit"} />
                      <a
                        className="group py-2 px-3 md:py-2.5 md:px-4 inline-flex justify-center items-center gap-x-1.5 whitespace-nowrap text-[13px] md:text-sm font-semibold rounded-lg border border-transparent text-gray-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden dark:text-neutral-200"
                        href="#"
                      >
                        Comment ca fonctionne?
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
                          <path
                            className="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:group-focus:opacity-100 lg:group-focus:translate-x-0 lg:transition"
                            d="M5 12h14"
                          />
                          <path
                            className="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:group-focus:translate-x-0 lg:transition"
                            d="m12 5 7 7-7 7"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  {/* End Col */}
                  <div className="hidden md:block md:mt-auto md:col-span-5">
                    <div className="max-w-xs w-full md:ms-auto">
                      <p className="mb-2 font-mono text-sm text-gray-500 dark:text-neutral-400">
                        Download our app
                      </p>
                      {/* Card List Group */}
                      <div className="flex flex-col -space-y-px">
                        {/* Card */}
                        <a
                          className="p-3 sm:p-4 flex items-center gap-x-2 bg-white border border-gray-200 first:rounded-t-xl last:rounded-b-xl hover:border-gray-300 focus:outline-hidden focus:border-gray-300 dark:bg-neutral-900 dark:border-neutral-800 dark:hover:border-neutral-700 dark:focus:border-neutral-700"
                          href="#"
                        >
                          <svg
                            className="shrink-0 size-4 text-black dark:text-white"
                            width={75}
                            height={86}
                            viewBox="0 0 75 86"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M36.6565 20.8071C41.4061 20.8071 45.5728 18.9524 49.1564 15.2429C52.7399 11.5334 54.5318 7.21993 54.5318 2.30245C54.5318 1.76237 54.4891 0.994884 54.4038 0C53.7781 0.0852758 53.3088 0.156339 52.9959 0.213189C48.616 0.838545 44.7622 2.98465 41.4345 6.65142C38.107 10.3183 36.4432 14.241 36.4432 18.4195C36.4432 18.9026 36.5143 19.6986 36.6565 20.8071ZM53.6785 86C57.063 86 60.803 83.6834 64.8986 79.0501C68.9942 74.4168 72.1226 68.9734 74.2842 62.7199C66.2353 58.5698 62.2109 52.6148 62.2109 44.8547C62.2109 38.3738 65.4674 32.831 71.9805 28.2261C67.4583 22.5695 61.4857 19.7412 54.0625 19.7412C50.9339 19.7412 48.0756 20.2102 45.4875 21.1482L43.8664 21.7451L41.6906 22.5979C40.2685 23.138 38.9744 23.4081 37.8083 23.4081C36.8982 23.4081 35.7036 23.0953 34.2248 22.47L32.5609 21.7878L30.9825 21.1482C28.6787 20.1818 26.2043 19.6985 23.5593 19.6985C16.4774 19.6985 10.7892 22.0862 6.49456 26.8617C2.1999 31.637 0.0526123 37.9332 0.0526123 45.7501C0.0526123 56.7506 3.49397 66.9126 10.3768 76.236C15.1549 82.7453 19.5207 86 23.4739 86C25.152 86 26.8158 85.6731 28.4654 85.0193L30.5558 84.1666L32.2197 83.5696C34.5518 82.7453 36.6991 82.3331 38.6615 82.3331C40.7378 82.3331 43.1268 82.8591 45.8288 83.9107L47.1513 84.4224C49.91 85.4741 52.0859 86 53.6785 86Z"
                              fill="currentColor"
                            />
                          </svg>
                          <div className="grow">
                            <ul className="flex flex-wrap items-center gap-1">
                              <li className="inline-flex items-center gap-x-1">
                                <span className="font-medium text-sm text-gray-800 dark:text-neutral-200">
                                  MacOS
                                </span>
                              </li>
                              <li className="ms-auto inline-flex items-center gap-x-0.5">
                                <svg
                                  className="shrink-0 size-3 text-gray-800 dark:text-neutral-200"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  stroke="currentColor"
                                  strokeWidth="0.75"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                                </svg>
                                <span className="font-medium text-xs text-gray-800 dark:text-neutral-200">
                                  4.9
                                </span>
                              </li>
                              <li className="inline-flex items-center gap-x-1">
                                <span className="text-xs text-gray-500 dark:text-neutral-500">
                                  1.2m reviews
                                </span>
                              </li>
                            </ul>
                          </div>
                        </a>
                        {/* End Card */}
                        {/* Card */}
                        <a
                          className="p-3 sm:p-4 flex items-center gap-x-2 bg-white border border-gray-200 first:rounded-t-xl last:rounded-b-xl hover:border-gray-300 focus:outline-hidden focus:border-gray-300 dark:bg-neutral-900 dark:border-neutral-800 dark:hover:border-neutral-700 dark:focus:border-neutral-700"
                          href="#"
                        >
                          <svg
                            className="shrink-0 size-4"
                            width={32}
                            height={32}
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M25.536 0H6.464C2.892 0 0 2.892 0 6.464V25.54C0 29.108 2.892 32 6.464 32H25.54C29.108 32 32.004 29.108 32.004 25.536V6.464C32 2.892 29.108 0 25.536 0Z"
                              fill="url(#paint0_linear_4403_2024)"
                            />
                            <path
                              d="M15.864 7.352L16.512 6.232C16.912 5.532 17.804 5.296 18.504 5.696C19.204 6.096 19.44 6.988 19.04 7.688L12.796 18.496H17.312C18.776 18.496 19.596 20.216 18.96 21.408H5.72C4.912 21.408 4.264 20.76 4.264 19.952C4.264 19.144 4.912 18.496 5.72 18.496H9.432L14.184 10.26L12.7 7.684C12.3 6.984 12.536 6.1 13.236 5.692C13.936 5.292 14.82 5.528 15.228 6.228L15.864 7.352ZM10.248 22.908L8.848 25.336C8.448 26.036 7.556 26.272 6.856 25.872C6.156 25.472 5.92 24.58 6.32 23.88L7.36 22.08C8.536 21.716 9.492 21.996 10.248 22.908ZM22.304 18.504H26.092C26.9 18.504 27.548 19.152 27.548 19.96C27.548 20.768 26.9 21.416 26.092 21.416H23.988L25.408 23.88C25.808 24.58 25.572 25.464 24.872 25.872C24.172 26.272 23.288 26.036 22.88 25.336C20.488 21.188 18.692 18.084 17.5 16.016C16.28 13.912 17.152 11.8 18.012 11.084C18.968 12.724 20.396 15.2 22.304 18.504Z"
                              fill="white"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_4403_2024"
                                x1="16.002"
                                y1={0}
                                x2="16.002"
                                y2={32}
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#18BFFB" />
                                <stop offset={1} stopColor="#2072F3" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <div className="grow">
                            <ul className="flex flex-wrap items-center gap-1">
                              <li className="inline-flex items-center gap-x-1">
                                <span className="font-medium text-sm text-gray-800 dark:text-neutral-200">
                                  App Store
                                </span>
                              </li>
                              <li className="ms-auto inline-flex items-center gap-x-0.5">
                                <svg
                                  className="shrink-0 size-3 text-gray-800 dark:text-neutral-200"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  stroke="currentColor"
                                  strokeWidth="0.75"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                                </svg>
                                <span className="font-medium text-xs text-gray-800 dark:text-neutral-200">
                                  4.9
                                </span>
                              </li>
                              <li className="inline-flex items-center gap-x-1">
                                <span className="text-xs text-gray-500 dark:text-neutral-500">
                                  367k reviews
                                </span>
                              </li>
                            </ul>
                          </div>
                        </a>
                        {/* End Card */}
                        {/* Card */}
                        <a
                          className="p-3 sm:p-4 flex items-center gap-x-2 bg-white border border-gray-200 first:rounded-t-xl last:rounded-b-xl hover:border-gray-300 focus:outline-hidden focus:border-gray-300 dark:bg-neutral-900 dark:border-neutral-800 dark:hover:border-neutral-700 dark:focus:border-neutral-700"
                          href="#"
                        >
                          <svg
                            className="shrink-0 size-4"
                            width={32}
                            height={37}
                            viewBox="0 0 32 37"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20.5159 11.1765L1.20745 0.140891C0.964824 1.05128e-05 0.659583 0.00783721 0.424782 0.148718C0.182154 0.289598 0.0334473 0.540052 0.0334473 0.821813C0.0334473 0.821813 0.041274 1.83928 0.0491007 3.5142L14.1137 17.5788L20.5159 11.1765Z"
                              fill="url(#paint0_linear_4406_2034)"
                            />
                            <path
                              d="M0.0491007 3.5142C0.0725807 9.5564 0.143021 24.2236 0.174328 31.5259L14.1215 17.5788L0.0491007 3.5142Z"
                              fill="url(#paint1_linear_4406_2034)"
                            />
                            <path
                              d="M31.5672 17.4927L20.5159 11.1765L14.1058 17.5788L21.3377 24.8106L31.575 18.8467C31.8177 18.7058 31.9664 18.4475 31.9664 18.1736C31.9664 17.8918 31.8098 17.6336 31.5672 17.4927Z"
                              fill="url(#paint2_linear_4406_2034)"
                            />
                            <path
                              d="M0.166501 31.5259C0.182154 34.1322 0.189981 35.7993 0.189981 35.7993C0.189981 36.0811 0.338688 36.3394 0.581316 36.4724C0.823943 36.6133 1.12136 36.6133 1.36399 36.4724L21.3455 24.8185L14.1137 17.5866L0.166501 31.5259Z"
                              fill="url(#paint3_linear_4406_2034)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_4406_2034"
                                x1="0.0334473"
                                y1="18.3158"
                                x2="31.972"
                                y2="18.3158"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#63BE6B" />
                                <stop offset="0.506" stopColor="#5BBC6A" />
                                <stop offset={1} stopColor="#4AB96A" />
                              </linearGradient>
                              <linearGradient
                                id="paint1_linear_4406_2034"
                                x1="0.0249224"
                                y1="18.313"
                                x2="31.9479"
                                y2="18.313"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#3EC6F2" />
                                <stop offset={1} stopColor="#45AFE3" />
                              </linearGradient>
                              <linearGradient
                                id="paint2_linear_4406_2034"
                                x1="0.0468809"
                                y1="18.322"
                                x2="31.963"
                                y2="18.322"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#FAA51A" />
                                <stop offset="0.387" stopColor="#FAB716" />
                                <stop offset="0.741" stopColor="#FAC412" />
                                <stop offset={1} stopColor="#FAC80F" />
                              </linearGradient>
                              <linearGradient
                                id="paint3_linear_4406_2034"
                                x1="0.169948"
                                y1="27.082"
                                x2="21.3452"
                                y2="27.082"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#EC3B50" />
                                <stop offset={1} stopColor="#E7515B" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <div className="grow">
                            <ul className="flex flex-wrap items-center gap-1">
                              <li className="inline-flex items-center gap-x-1">
                                <span className="font-medium text-sm text-gray-800 dark:text-neutral-200">
                                  Google Play
                                </span>
                              </li>
                              <li className="ms-auto inline-flex items-center gap-x-0.5">
                                <svg
                                  className="shrink-0 size-3 text-gray-800 dark:text-neutral-200"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  stroke="currentColor"
                                  strokeWidth="0.75"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                                </svg>
                                <span className="font-medium text-xs text-gray-800 dark:text-neutral-200">
                                  4.7
                                </span>
                              </li>
                              <li className="inline-flex items-center gap-x-1">
                                <span className="text-xs text-gray-500 dark:text-neutral-500">
                                  975k reviews
                                </span>
                              </li>
                            </ul>
                          </div>
                        </a>
                        {/* End Card */}
                      </div>
                      {/* End Card List Group */}
                    </div>
                  </div>
                  {/* End Col */}
                </div>
                {/* End Grid */}
                <div className="space-y-2">
                  <div
                    id="hs-pro-hero-tabs-scroll"
                    className="relative pt-4 md:pt-6 overflow-hidden"
                    data-hs-scroll-nav=""
                  >
                    {/* Nav Tab */}
                    <nav
                      id="hs-pro-hero-tabs"
                      className="hs-scroll-nav-body flex gap-1 snap-x snap-mandatory overflow-x-auto [&::-webkit-scrollbar]:h-0 p-0.5"
                      aria-label="Tabs"
                      role="tablist"
                      aria-orientation="horizontal"
                    >
                      <button
                        type="button"
                        className="hs-tab-active:bg-gray-200 snap-start p-2 md:px-3 inline-flex justify-center items-center gap-x-2 border border-transparent text-xs sm:text-[13px] whitespace-nowrap text-gray-800 rounded-full hover:bg-gray-100 focus:bg-gray-100 dark:hs-tab-active:bg-neutral-800 dark:hs-tab-active:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden active"
                        id="hs-pro-tabs-dth-item-dashboard"
                        aria-selected="true"
                        data-hs-tab="#hs-pro-tabs-dth-dashboard"
                        aria-controls="hs-pro-tabs-dth-dashboard"
                        role="tab"
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
                          <path d="M12 16v5" />
                          <path d="M16 14v7" />
                          <path d="M20 10v11" />
                          <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" />
                          <path d="M4 18v3" />
                          <path d="M8 14v7" />
                        </svg>{" "}
                        Dashboard
                      </button>
                      <button
                        type="button"
                        className="hs-tab-active:bg-gray-200 snap-start p-2 md:px-3 inline-flex justify-center items-center gap-x-2 border border-transparent text-xs sm:text-[13px] whitespace-nowrap text-gray-800 rounded-full hover:bg-gray-100 focus:bg-gray-100 dark:hs-tab-active:bg-neutral-800 dark:hs-tab-active:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden "
                        id="hs-pro-tabs-dth-item-workspace"
                        aria-selected="false"
                        data-hs-tab="#hs-pro-tabs-dth-workspace"
                        aria-controls="hs-pro-tabs-dth-workspace"
                        role="tab"
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
                          <path d="M12 12h.01" />
                          <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                          <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                          <rect width={20} height={14} x={2} y={6} rx={2} />
                        </svg>{" "}
                        Workspace
                      </button>
                      <button
                        type="button"
                        className="hs-tab-active:bg-gray-200 snap-start p-2 md:px-3 inline-flex justify-center items-center gap-x-2 border border-transparent text-xs sm:text-[13px] whitespace-nowrap text-gray-800 rounded-full hover:bg-gray-100 focus:bg-gray-100 dark:hs-tab-active:bg-neutral-800 dark:hs-tab-active:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden "
                        id="hs-pro-tabs-dth-item-payment"
                        aria-selected="false"
                        data-hs-tab="#hs-pro-tabs-dth-payment"
                        aria-controls="hs-pro-tabs-dth-payment"
                        role="tab"
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
                          <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
                          <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
                        </svg>{" "}
                        Payment
                      </button>
                      <button
                        type="button"
                        className="hs-tab-active:bg-gray-200 snap-start p-2 md:px-3 inline-flex justify-center items-center gap-x-2 border border-transparent text-xs sm:text-[13px] whitespace-nowrap text-gray-800 rounded-full hover:bg-gray-100 focus:bg-gray-100 dark:hs-tab-active:bg-neutral-800 dark:hs-tab-active:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden "
                        id="hs-pro-tabs-dth-item-analytics"
                        aria-selected="false"
                        data-hs-tab="#hs-pro-tabs-dth-analytics"
                        aria-controls="hs-pro-tabs-dth-analytics"
                        role="tab"
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
                          <path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z" />
                          <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                        </svg>{" "}
                        Analytics
                      </button>
                      <button
                        type="button"
                        className="hs-tab-active:bg-gray-200 snap-start p-2 md:px-3 inline-flex justify-center items-center gap-x-2 border border-transparent text-xs sm:text-[13px] whitespace-nowrap text-gray-800 rounded-full hover:bg-gray-100 focus:bg-gray-100 dark:hs-tab-active:bg-neutral-800 dark:hs-tab-active:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden "
                        id="hs-pro-tabs-dth-item-chat"
                        aria-selected="false"
                        data-hs-tab="#hs-pro-tabs-dth-chat"
                        aria-controls="hs-pro-tabs-dth-chat"
                        role="tab"
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
                          <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z" />
                          <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                        </svg>{" "}
                        Chat
                      </button>
                      <button
                        type="button"
                        className="hs-tab-active:bg-gray-200 snap-start p-2 md:px-3 inline-flex justify-center items-center gap-x-2 border border-transparent text-xs sm:text-[13px] whitespace-nowrap text-gray-800 rounded-full hover:bg-gray-100 focus:bg-gray-100 dark:hs-tab-active:bg-neutral-800 dark:hs-tab-active:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden "
                        id="hs-pro-tabs-dth-item-ecommerce"
                        aria-selected="false"
                        data-hs-tab="#hs-pro-tabs-dth-ecommerce"
                        aria-controls="hs-pro-tabs-dth-ecommerce"
                        role="tab"
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
                          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                          <path d="M3 6h18" />
                          <path d="M16 10a4 4 0 0 1-8 0" />
                        </svg>{" "}
                        E-commerce
                      </button>
                    </nav>
                    {/* End Nav Tab */}
                  </div>
                  {/* Browser */}
                  <div className="p-1.5 md:p-3 bg-white/40 border border-white/50 rounded-xl shadow-lg dark:bg-white/[.05] dark:border-white/10">
                    {/* Header */}
                    <div className="mb-1 h-4 md:h-6 flex items-center">
                      {/* Dots */}
                      <div className="flex gap-x-1.5 md:gap-x-2 px-2.5 md:px-3.5">
                        <span className="size-2.5 md:size-3 bg-red-400 border border-red-500 rounded-full shadow-inner dark:bg-red-600 dark:border-red-600" />
                        <span className="size-2.5 md:size-3 bg-yellow-400 border border-yellow-500 rounded-full shadow-inner dark:bg-yellow-600 dark:border-yellow-600" />
                        <span className="size-2.5 md:size-3 bg-green-400 border border-green-500 rounded-full shadow-inner dark:bg-green-600 dark:border-green-600" />
                      </div>
                      {/* End Dots */}
                    </div>
                    {/* End Header */}
                    {/* Tab Content */}
                    <div
                      id="hs-pro-tabs-dth-dashboard"
                      role="tabpanel"
                      aria-labelledby="hs-pro-tabs-dth-item-dashboard"
                    >
                      <img
                        className="dark:hidden rounded-lg"
                        src="../assets/img/pro/startup/img1.webp"
                        alt="Light Hero Image"
                      />
                      <img
                        className="dark:block hidden rounded-lg"
                        src="../assets/img/pro/startup-dark/img1.webp"
                        alt="Light Hero Image"
                      />
                    </div>
                    {/* End Tab Content */}
                    {/* Tab Content */}
                    <div
                      id="hs-pro-tabs-dth-workspace"
                      className="hidden"
                      role="tabpanel"
                      aria-labelledby="hs-pro-tabs-dth-item-workspace"
                    >
                      <img
                        className="dark:hidden rounded-lg"
                        src="../assets/img/pro/startup/img2.webp"
                        alt="Light Hero Image"
                      />
                      <img
                        className="dark:block hidden rounded-lg"
                        src="../assets/img/pro/startup-dark/img2.webp"
                        alt="Light Hero Image"
                      />
                    </div>
                    {/* End Tab Content */}
                    {/* Tab Content */}
                    <div
                      id="hs-pro-tabs-dth-payment"
                      className="hidden"
                      role="tabpanel"
                      aria-labelledby="hs-pro-tabs-dth-item-payment"
                    >
                      <img
                        className="dark:hidden rounded-lg"
                        src="../assets/img/pro/startup/img3.webp"
                        alt="Light Hero Image"
                      />
                      <img
                        className="dark:block hidden rounded-lg"
                        src="../assets/img/pro/startup-dark/img3.webp"
                        alt="Light Hero Image"
                      />
                    </div>
                    {/* End Tab Content */}
                    {/* Tab Content */}
                    <div
                      id="hs-pro-tabs-dth-analytics"
                      className="hidden"
                      role="tabpanel"
                      aria-labelledby="hs-pro-tabs-dth-item-analytics"
                    >
                      <img
                        className="dark:hidden rounded-lg"
                        src="../assets/img/pro/startup/img4.webp"
                        alt="Light Hero Image"
                      />
                      <img
                        className="dark:block hidden rounded-lg"
                        src="../assets/img/pro/startup-dark/img4.webp"
                        alt="Light Hero Image"
                      />
                    </div>
                    {/* End Tab Content */}
                    {/* Tab Content */}
                    <div
                      id="hs-pro-tabs-dth-chat"
                      className="hidden"
                      role="tabpanel"
                      aria-labelledby="hs-pro-tabs-dth-item-chat"
                    >
                      <img
                        className="dark:hidden rounded-lg"
                        src="../assets/img/pro/startup/img5.webp"
                        alt="Light Hero Image"
                      />
                      <img
                        className="dark:block hidden rounded-lg"
                        src="../assets/img/pro/startup-dark/img5.webp"
                        alt="Light Hero Image"
                      />
                    </div>
                    {/* End Tab Content */}
                    {/* Tab Content */}
                    <div
                      id="hs-pro-tabs-dth-ecommerce"
                      className="hidden"
                      role="tabpanel"
                      aria-labelledby="hs-pro-tabs-dth-item-ecommerce"
                    >
                      <img
                        className="dark:hidden rounded-lg"
                        src="../assets/img/pro/startup/img6.webp"
                        alt="Light Hero Image"
                      />
                      <img
                        className="dark:block hidden rounded-lg"
                        src="../assets/img/pro/startup-dark/img6.webp"
                        alt="Light Hero Image"
                      />
                    </div>
                    {/* End Tab Content */}
                  </div>
                  {/* End Browser */}
                </div>
              </div>
            </div>
          </div>
          {/* End Hero */}
          {/* Stats */}
          <div className="max-w-6xl pt-6 pb-12 px-4 sm:px-6 lg:px-8 mx-auto">
            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-y-20 gap-x-12">
              {/* Stats */}
              <div className="relative px-3 text-center last:before:hidden sm:last:before:block sm:first:before:hidden before:absolute before:top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-gray-200 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 dark:before:bg-neutral-700">
                <h3 className="font-semibold text-lg sm:text-3xl text-gray-800 dark:text-neutral-200">
                  4.7
                </h3>
                <div className="mt-3 flex justify-center items-center gap-x-1">
                  <svg
                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>
                <div className="mt-3">
                  <p className="text-sm text-gray-500 dark:text-neutral-500">
                    Average review on Capterra, independent review site
                  </p>
                </div>
                <svg
                  className="mt-5 shrink-0 w-auto h-6 mx-auto text-gray-800 dark:text-neutral-200"
                  width={390}
                  height={87}
                  viewBox="0 0 390 87"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.219906 32.4982L35.886 32.5053L57.5733 32.509V11.0235L0.219906 32.4982Z"
                    fill="currentColor"
                    opacity=".8"
                  />
                  <path
                    d="M57.5733 11.0235V86.8781L84.6603 0.878133L57.5733 11.0235Z"
                    fill="currentColor"
                    opacity=".6"
                  />
                  <path
                    d="M57.5733 32.509L35.886 32.5053L57.5733 86.8781V32.509Z"
                    fill="currentColor"
                  />
                  <path
                    d="M0.219906 32.4982L41.4474 46.4566L35.886 32.5053L0.219906 32.4982Z"
                    fill="currentColor"
                    opacity=".4"
                  />
                  <path
                    d="M131.606 66.9105C131.292 67.225 130.768 67.6173 130.035 68.0885C129.301 68.5603 128.346 69.0315 127.168 69.5033C125.989 69.9739 124.548 70.3792 122.847 70.7209C121.144 71.0604 119.194 71.2311 116.995 71.2311C112.752 71.2311 109.086 70.5499 105.996 69.189C102.905 67.8281 100.352 65.9282 98.3367 63.4935C96.3202 61.058 94.8411 58.1782 93.8984 54.8517C92.9557 51.5263 92.4845 47.8737 92.4845 43.8929C92.4845 39.9137 92.995 36.2337 94.0164 32.8557C95.0374 29.4775 96.5693 26.5589 98.6116 24.0963C100.654 21.6354 103.207 19.7105 106.271 18.3221C109.335 16.9354 112.935 16.2404 117.073 16.2404C119.116 16.2404 120.962 16.4243 122.612 16.7903C124.261 17.157 125.701 17.5894 126.932 18.0865C128.162 18.5849 129.184 19.1076 129.996 19.6577C130.807 20.2075 131.423 20.6669 131.842 21.0323C132.314 21.4523 132.719 21.9494 133.06 22.5248C133.4 23.1018 133.571 23.7303 133.571 24.4105C133.571 25.4587 133.178 26.5056 132.392 27.5528C131.607 28.601 130.743 29.5699 129.8 30.4595C129.171 29.8311 128.464 29.1905 127.679 28.5351C126.893 27.8805 126.016 27.3051 125.047 26.8067C124.077 26.3096 122.977 25.8909 121.747 25.5497C120.516 25.2097 119.142 25.039 117.623 25.039C114.952 25.039 112.714 25.5767 110.907 26.6494C109.1 27.7235 107.646 29.124 106.547 30.8524C105.447 32.5808 104.661 34.558 104.19 36.7835C103.719 39.01 103.483 41.2748 103.483 43.5789C103.483 46.0411 103.719 48.3977 104.19 50.6488C104.661 52.9009 105.472 54.8916 106.625 56.6192C107.776 58.3473 109.283 59.7357 111.142 60.7826C113 61.8311 115.318 62.354 118.095 62.354C119.56 62.354 120.909 62.1712 122.14 61.8044C123.37 61.4382 124.458 60.9926 125.4 60.4681C126.343 59.9457 127.168 59.3961 127.875 58.8193C128.582 58.2431 129.171 57.7463 129.643 57.3263C129.957 57.6935 130.322 58.1392 130.742 58.6621C131.164 59.1906 131.558 59.7413 131.921 60.3119C132.287 60.8886 132.601 61.4643 132.863 62.0395C133.125 62.6168 133.256 63.1397 133.256 63.6104C133.256 64.2922 133.125 64.8679 132.863 65.3391C132.6 65.8106 132.182 66.3348 131.606 66.9105ZM172.091 60.8855C172.091 65.0481 172.696 68.0777 173.908 69.9745C172.96 70.3425 172.077 70.6064 171.261 70.7644C170.443 70.9227 169.588 71.0013 168.692 71.0013C166.796 71.0013 165.359 70.6325 164.385 69.8951C163.41 69.1582 162.791 68.1044 162.528 66.7337C161.368 67.9469 159.841 68.9737 157.944 69.817C156.047 70.6583 153.728 71.081 150.989 71.081C149.567 71.081 148.144 70.8837 146.722 70.4911C145.299 70.0953 144.008 69.4531 142.849 68.5614C141.689 67.6677 140.741 66.4728 140.004 64.9758C139.265 63.4788 138.897 61.654 138.897 59.5011C138.897 56.8226 139.542 54.6422 140.834 52.9624C142.124 51.2809 143.744 49.9551 145.694 48.9832C147.643 48.0122 149.751 47.3439 152.017 46.9753C154.282 46.6073 156.364 46.3717 158.26 46.2653C158.893 46.2134 159.511 46.1862 160.118 46.1862H161.817V44.7477C161.817 42.7225 161.276 41.2838 160.196 40.4319C159.116 39.5797 157.364 39.1525 154.941 39.1525C152.675 39.1525 150.659 39.5216 148.895 40.2588C147.129 40.9973 145.404 41.8394 143.718 42.7879C142.98 41.8925 142.387 40.9049 141.94 39.8242C141.492 38.7451 141.268 37.9412 141.268 37.4138C141.268 36.6766 141.676 35.9653 142.493 35.2799C143.31 34.596 144.43 33.976 145.852 33.4227C147.275 32.8694 148.908 32.4225 150.753 32.0792C152.596 31.737 154.546 31.5655 156.601 31.5655C159.446 31.5655 161.856 31.8558 163.832 32.4349C165.808 33.0153 167.415 33.9105 168.653 35.1218C169.89 36.3347 170.773 37.8486 171.3 39.6662C171.826 41.4841 172.091 43.6056 172.091 46.0282L172.091 60.8855ZM161.974 51.7181H160.868C160.499 51.7181 160.129 51.7456 159.762 51.7975C158.444 51.9036 157.14 52.0614 155.85 52.2711C154.558 52.4825 153.412 52.8513 152.412 53.3779C151.41 53.9051 150.594 54.5905 149.962 55.4324C149.329 56.2759 149.013 57.3566 149.013 58.6732C149.013 60.1486 149.434 61.3992 150.278 62.4268C151.12 63.4545 152.542 63.9682 154.546 63.9682C155.546 63.9682 156.495 63.8373 157.391 63.5724C158.286 63.3102 159.076 62.9674 159.762 62.5458C160.446 62.1242 160.987 61.6635 161.382 61.1622C161.777 60.6623 161.974 60.2016 161.974 59.7797L161.974 51.7181ZM191.768 36.149C192.608 35.1487 193.922 34.1338 195.707 33.1061C197.493 32.0787 199.752 31.565 202.483 31.565C204.427 31.565 206.278 31.8945 208.038 32.5528C209.796 33.2122 211.36 34.2794 212.725 35.7537C214.091 37.2294 215.181 39.1792 215.996 41.602C216.81 44.0261 217.217 47.0036 217.217 50.5324C217.217 54.642 216.744 58.0281 215.798 60.6881C214.852 63.3497 213.632 65.4573 212.136 67.011C210.639 68.5653 208.97 69.6587 207.133 70.2905C205.294 70.9227 203.456 71.2393 201.618 71.2393C200.095 71.2393 198.768 71.0678 197.639 70.7256C196.509 70.3824 195.551 70.0016 194.763 69.5795C193.976 69.1584 193.372 68.7376 192.952 68.3149C192.532 67.8938 192.269 67.6033 192.164 67.445V86.8728H181.416V32.6713C181.68 32.6196 181.999 32.5666 182.371 32.5135C182.69 32.4618 183.062 32.422 183.487 32.3948C183.911 32.3689 184.416 32.3555 184.999 32.3555C186.75 32.3555 188.237 32.6457 189.458 33.2248C190.679 33.8053 191.45 34.7794 191.768 36.149ZM205.994 50.7694C205.994 49.189 205.863 47.7146 205.601 46.344C205.34 44.9746 204.907 43.789 204.305 42.7877C203.702 41.7872 202.889 41.0094 201.868 40.4559C200.846 39.9029 199.602 39.6266 198.136 39.6266C195.936 39.6266 194.404 40.0488 193.539 40.8907C192.675 41.7342 192.243 42.6568 192.243 43.657V60.4119C192.661 60.834 193.407 61.3337 194.481 61.9134C195.556 62.4936 196.799 62.7822 198.214 62.7822C200.886 62.7822 202.851 61.7295 204.108 59.6214C205.366 57.5144 205.994 54.5631 205.994 50.7694ZM225.513 64.3634C225.143 63.3102 224.906 62.2031 224.801 61.0438C224.695 59.8853 224.643 58.7265 224.643 57.5659V20.8956C225.011 20.8439 225.406 20.7909 225.829 20.7376C226.196 20.6859 226.592 20.6466 227.014 20.6191C227.435 20.5933 227.856 20.5798 228.278 20.5798C229.121 20.5798 229.964 20.659 230.808 20.8167C231.649 20.975 232.414 21.2911 233.1 21.765C233.784 22.2391 234.337 22.8852 234.759 23.7013C235.18 24.5187 235.391 25.5859 235.391 26.9019V32.513H246.456V40.4957H235.391V57.349C235.391 61.0243 236.893 62.8614 239.896 62.8614C240.634 62.8614 241.331 62.7434 241.991 62.5057C242.649 62.2688 243.241 62.0057 243.769 61.7158C244.295 61.4261 244.757 61.1232 245.152 60.8069C245.547 60.4905 245.824 60.2538 245.981 60.0958C246.772 61.2556 247.377 62.2595 247.799 63.1067C248.22 63.955 248.431 64.751 248.431 65.4947C248.431 66.1868 248.155 66.8654 247.602 67.5297C247.048 68.1941 246.27 68.8067 245.27 69.3647C244.269 69.9228 243.058 70.3747 241.635 70.7206C240.212 71.0665 238.657 71.2396 236.972 71.2396C233.704 71.2396 231.163 70.6069 229.345 69.3428C227.527 68.0777 226.249 66.4179 225.513 64.3634ZM273.678 63.3357C274.999 63.3357 276.163 63.1914 277.168 62.9009C278.172 62.6123 279.071 62.2564 279.864 61.8348C280.657 61.4137 281.345 60.9525 281.926 60.4517C282.508 59.9515 283.036 59.4906 283.513 59.0682C284.147 59.8581 284.807 60.8733 285.495 62.1105C286.182 63.3497 286.526 64.3634 286.526 65.1533C286.526 66.3129 285.867 67.3667 284.551 68.3149C283.444 69.1584 281.875 69.8829 279.848 70.4879C277.819 71.0934 275.435 71.3968 272.696 71.3968C270.218 71.3968 267.782 71.081 265.386 70.4486C262.988 69.8167 260.853 68.7099 258.984 67.129C257.113 65.5491 255.598 63.4286 254.439 60.7675C253.28 58.107 252.701 54.7488 252.701 50.6907C252.701 47.3711 253.215 44.514 254.241 42.1159C255.269 39.719 256.638 37.7299 258.352 36.1492C260.063 34.5686 261.999 33.4103 264.16 32.6716C266.32 31.9347 268.533 31.5653 270.799 31.5653C273.749 31.5653 276.252 32.0273 278.307 32.9483C280.362 33.8707 282.034 35.1092 283.326 36.6629C284.616 38.2172 285.551 39.9955 286.131 41.9975C286.71 44.0003 287 46.107 287 48.3199V49.4261C287 49.8488 286.987 50.2955 286.961 50.7696C286.934 51.2443 286.908 51.706 286.882 52.1527C286.855 52.6014 286.815 52.9566 286.764 53.2199H263.449C263.66 56.1179 264.559 58.5281 266.145 60.4517C267.73 62.3754 270.241 63.3357 273.678 63.3357ZM277.279 47.2922C277.279 44.7633 276.789 42.7085 275.808 41.1279C274.828 39.5475 273.065 38.7567 270.523 38.7567C268.349 38.7567 266.614 39.5079 265.317 41.0094C264.018 42.5112 263.37 44.6053 263.37 47.2919L277.279 47.2922ZM305.705 36.3487C306.02 35.8785 306.442 35.3561 306.969 34.7804C307.495 34.2053 308.141 33.6826 308.906 33.2124C309.669 32.742 310.512 32.3491 311.435 32.0357C312.355 31.722 313.344 31.5653 314.399 31.5653C315.031 31.5653 315.703 31.6183 316.414 31.722C317.125 31.827 317.783 32.0233 318.389 32.3098C318.994 32.5977 319.483 32.989 319.851 33.4855C320.22 33.982 320.405 34.5957 320.405 35.3268C320.405 36.4764 320.114 37.7966 319.535 39.2871C318.955 40.7788 318.376 42.0508 317.797 43.104C316.9 42.3666 316.005 41.8001 315.109 41.4049C314.213 41.0099 313.159 40.8121 311.948 40.8121C310.315 40.8121 308.945 41.2878 307.839 42.2384C306.732 43.1892 306.179 44.3253 306.179 45.6464V71.2306H295.431V32.6713C295.694 32.6196 296.01 32.5666 296.379 32.5135C296.695 32.4618 297.064 32.422 297.486 32.3948C297.907 32.3689 298.407 32.3555 298.987 32.3555C300.673 32.3555 302.135 32.6824 303.373 33.3348C304.61 33.9865 305.389 34.9918 305.705 36.3487ZM336.264 36.3487C336.58 35.8785 337.001 35.3561 337.528 34.7804C338.054 34.2053 338.7 33.6826 339.464 33.2124C340.228 32.742 341.071 32.3491 341.993 32.0357C342.915 31.722 343.902 31.5653 344.957 31.5653C345.589 31.5653 346.261 31.6183 346.972 31.722C347.683 31.827 348.342 32.0233 348.948 32.3098C349.553 32.5977 350.04 32.989 350.411 33.4855C350.778 33.982 350.964 34.5957 350.964 35.3268C350.964 36.4764 350.673 37.7966 350.094 39.2871C349.513 40.7788 348.934 42.0508 348.355 43.104C347.459 42.3666 346.563 41.8001 345.668 41.4049C344.772 41.0099 343.718 40.8121 342.507 40.8121C340.874 40.8121 339.504 41.2878 338.397 42.2384C337.291 43.1892 336.738 44.3253 336.738 45.6464V71.2306H325.99V32.6713C326.253 32.6196 326.569 32.5666 326.938 32.5135C327.254 32.4618 327.623 32.422 328.044 32.3948C328.466 32.3689 328.965 32.3555 329.546 32.3555C331.232 32.3555 332.694 32.6824 333.932 33.3348C335.169 33.9865 335.947 34.9918 336.264 36.3487ZM387.555 60.8855C387.555 65.0481 388.161 68.0777 389.373 69.9745C388.425 70.3425 387.542 70.6064 386.726 70.7644C385.909 70.9227 385.053 71.0013 384.157 71.0013C382.26 71.0013 380.824 70.6325 379.85 69.8951C378.874 69.1582 378.256 68.1044 377.993 66.7337C376.834 67.9469 375.306 68.9737 373.409 69.817C371.512 70.6583 369.193 71.081 366.454 71.081C365.032 71.081 363.609 70.8837 362.186 70.4911C360.764 70.0953 359.472 69.4531 358.314 68.5614C357.154 67.6677 356.206 66.4728 355.469 64.9758C354.73 63.4788 354.363 61.654 354.363 59.5011C354.363 56.8226 355.007 54.6422 356.299 52.9624C357.589 51.2809 359.21 49.9551 361.159 48.9832C363.108 48.0122 365.215 47.3439 367.482 46.9753C369.746 46.6073 371.829 46.3717 373.725 46.2653C374.358 46.2134 374.976 46.1862 375.583 46.1862H377.282V44.7477C377.282 42.7225 376.741 41.2838 375.661 40.4319C374.58 39.5797 372.829 39.1525 370.406 39.1525C368.14 39.1525 366.125 39.5216 364.36 40.2588C362.594 40.9973 360.869 41.8394 359.183 42.7879C358.445 41.8925 357.852 40.9049 357.405 39.8242C356.957 38.7451 356.734 37.9412 356.734 37.4138C356.734 36.6766 357.141 35.9653 357.959 35.2799C358.775 34.596 359.895 33.976 361.317 33.4227C362.74 32.8694 364.372 32.4225 366.217 32.0792C368.061 31.737 370.011 31.5655 372.065 31.5655C374.91 31.5655 377.321 31.8558 379.297 32.4349C381.272 33.0153 382.879 33.9105 384.118 35.1218C385.355 36.3347 386.238 37.8486 386.766 39.6662C387.291 41.4841 387.555 43.6056 387.555 46.0282V60.8855ZM377.439 51.7181H376.333C375.964 51.7181 375.595 51.7456 375.227 51.7975C373.909 51.9036 372.605 52.0614 371.315 52.2711C370.023 52.4825 368.877 52.8513 367.877 53.3779C366.875 53.9051 366.059 54.5905 365.427 55.4324C364.795 56.2759 364.478 57.3566 364.478 58.6732C364.478 60.1486 364.9 61.3992 365.743 62.4268C366.585 63.4545 368.008 63.9682 370.011 63.9682C371.011 63.9682 371.96 63.8373 372.856 63.5724C373.751 63.3102 374.541 62.9674 375.227 62.5458C375.91 62.1242 376.452 61.6635 376.847 61.1622C377.242 60.6623 377.44 60.2016 377.44 59.7797L377.439 51.7181Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              {/* End Stats */}
              {/* Stats */}
              <div className="relative px-3 text-center last:before:hidden sm:last:before:block sm:first:before:hidden before:absolute before:top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-gray-200 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 dark:before:bg-neutral-700">
                <h3 className="font-semibold text-lg sm:text-3xl text-gray-800 dark:text-neutral-200">
                  4.9
                </h3>
                <div className="mt-3 flex justify-center items-center gap-x-1">
                  <svg
                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>
                <div className="mt-3">
                  <p className="text-sm text-gray-500 dark:text-neutral-500">
                    Average rating based on 970+ support conversations
                  </p>
                </div>
                <svg
                  className="mt-5 shrink-0 w-auto h-6 mx-auto text-gray-800 dark:text-neutral-200"
                  width={336}
                  height={86}
                  viewBox="0 0 336 86"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M114.594 55.4222V30.5778C114.594 29.0489 115.837 27.8067 117.366 27.8067C118.894 27.8067 120.137 29.0489 120.137 30.5778V55.4222C120.137 56.9511 118.894 58.1933 117.366 58.1933C115.932 58.1933 114.594 56.9511 114.594 55.4222ZM146.319 56.4733L134.279 37.2667V55.4222C134.279 56.9511 133.037 58.1933 131.508 58.1933C129.979 58.1933 128.737 56.9511 128.737 55.4222V31.3422C128.737 29.3356 130.361 27.6156 132.463 27.6156H132.654C133.897 27.6156 135.139 28.2844 135.808 29.3356L147.752 48.2556V30.3867C147.752 28.8578 148.994 27.6156 150.523 27.6156C152.052 27.6156 153.294 28.8578 153.294 30.3867V54.4667C153.294 56.4733 151.67 58.1933 149.568 58.1933C148.23 58.1933 146.988 57.62 146.319 56.4733ZM172.597 32.9667V55.7089C172.597 57.1422 171.45 58.2889 170.017 58.2889H169.634C168.201 58.2889 167.054 57.1422 167.054 55.7089V32.9667H160.652C159.219 32.9667 158.072 31.82 158.072 30.3867C158.072 28.9533 159.219 27.8067 160.652 27.8067H179.094C180.528 27.8067 181.674 28.9533 181.674 30.3867C181.674 31.82 180.528 32.9667 179.094 32.9667H172.597ZM186.07 55.7089V30.1956C186.07 28.8578 187.217 27.7111 188.554 27.7111H205.277C206.614 27.7111 207.761 28.8578 207.761 30.1956C207.761 31.5333 206.614 32.68 205.277 32.68H191.612V39.7511H203.366C204.703 39.7511 205.85 40.8978 205.85 42.2356C205.85 43.5733 204.703 44.72 203.366 44.72H191.612V53.0333H205.277C206.614 53.0333 207.761 54.18 207.761 55.5178C207.761 56.8556 206.614 58.0022 205.277 58.0022H188.554C187.217 58.1933 186.07 57.1422 186.07 55.7089ZM231.172 56.5689L226.777 46.7267H219.992V55.5178C219.992 57.0467 218.75 58.2889 217.221 58.2889H217.126C215.597 58.2889 214.354 57.0467 214.354 55.5178V30.5778C214.354 29.0489 215.597 27.8067 217.126 27.8067H227.254C234.517 27.8067 237.861 32.3933 237.861 37.2667C237.861 41.3756 235.663 44.5289 232.319 45.7711L236.141 54.3711C236.906 56.1867 235.663 58.1933 233.657 58.1933C232.606 58.1933 231.554 57.62 231.172 56.5689ZM227.35 32.5844H220.088V41.6622H227.446C230.599 41.6622 232.414 40.0378 232.414 37.1711C232.319 34.7822 230.503 32.5844 227.35 32.5844ZM264.234 55.1356C261.941 57.4289 258.788 58.7667 255.539 58.7667C252.29 58.7667 249.232 57.7156 246.939 55.3267C243.594 51.9822 243.117 47.9689 243.117 43C243.117 38.0311 243.594 33.9222 246.939 30.6733C249.232 28.38 252.29 27.2333 255.539 27.2333C258.788 27.2333 261.941 28.4756 264.234 30.7689C264.999 31.6289 265.668 32.4889 266.146 33.54C267.006 35.3556 265.668 37.3622 263.661 37.3622C262.514 37.3622 261.559 36.6933 261.081 35.6422C260.89 35.0689 260.508 34.5911 260.126 34.1133C259.17 32.8711 257.45 32.2022 255.539 32.2022C253.819 32.2022 252.099 32.9667 250.857 34.2089C248.754 36.4067 248.754 40.1333 248.754 43C248.754 45.7711 248.754 49.5933 250.857 51.7911C252.099 53.0333 253.819 53.7978 255.539 53.7978C257.45 53.7978 259.17 53.1289 260.126 51.8867C260.508 51.4089 260.89 50.8356 261.081 50.2622C261.463 49.2111 262.514 48.5422 263.661 48.5422C265.668 48.5422 267.006 50.5489 266.146 52.3644C265.668 53.4156 264.999 54.3711 264.234 55.1356ZM293.952 55.3267C291.659 57.62 288.41 58.7667 285.161 58.7667C281.912 58.7667 278.759 57.62 276.37 55.3267C273.026 51.9822 272.548 47.9689 272.548 43C272.548 38.0311 273.121 33.9222 276.37 30.6733C278.663 28.38 281.912 27.2333 285.161 27.2333C288.41 27.2333 291.563 28.38 293.952 30.6733C297.297 34.0178 297.774 38.0311 297.774 43C297.87 47.9689 297.297 52.0778 293.952 55.3267ZM290.034 34.3044C288.792 33.0622 286.977 32.2978 285.257 32.2978C283.537 32.2978 281.626 33.0622 280.479 34.3044C278.377 36.5022 278.281 40.2289 278.281 43.0956C278.281 45.8667 278.377 49.5933 280.479 51.7911C281.721 53.0333 283.537 53.7978 285.257 53.7978C286.977 53.7978 288.888 53.0333 290.034 51.7911C292.137 49.5933 292.232 45.8667 292.232 43.0956C292.232 40.2289 292.137 36.4067 290.034 34.3044ZM329.977 55.5178V36.5022L322.81 55.9C322.428 57.0467 321.281 57.8111 320.039 57.8111C318.797 57.8111 317.746 57.0467 317.268 55.9L310.101 36.2156V55.5178C310.101 57.0467 308.859 58.1933 307.426 58.1933C305.897 58.1933 304.75 56.9511 304.75 55.5178V31.9156C304.75 29.6222 306.661 27.7111 308.954 27.7111H309.337C311.057 27.7111 312.681 28.7622 313.254 30.4822L320.23 49.4022L327.301 30.4822C327.874 28.8578 329.499 27.7111 331.219 27.7111C333.512 27.7111 335.423 29.6222 335.423 31.9156V55.5178C335.423 57.0467 334.181 58.1933 332.748 58.1933C331.123 58.1933 329.977 57.0467 329.977 55.5178ZM75.8945 0H11.3945C5.37446 0 0.59668 4.77778 0.59668 10.7022V75.2022C0.59668 81.2222 5.37446 86 11.3945 86H75.8945C81.8189 86 86.5967 81.2222 86.5967 75.2978V10.7978C86.5967 4.77778 81.8189 0 75.8945 0ZM55.0633 15.7667C55.0633 14.1422 56.3056 12.9 57.93 12.9C59.5545 12.9 60.7967 14.1422 60.7967 15.7667V54.0844C60.7967 55.7089 59.5545 56.9511 57.93 56.9511C56.3056 56.9511 55.0633 55.7089 55.0633 54.0844V15.7667ZM40.73 14.3333C40.73 12.7089 41.9722 11.4667 43.5967 11.4667C45.2211 11.4667 46.4634 12.7089 46.4634 14.3333V55.9C46.4634 57.5244 45.2211 58.7667 43.5967 58.7667C41.9722 58.7667 40.73 57.5244 40.73 55.9V14.3333ZM26.3967 15.7667C26.3967 14.1422 27.6389 12.9 29.2633 12.9C30.8878 12.9 32.13 14.1422 32.13 15.7667V54.0844C32.13 55.7089 30.8878 56.9511 29.2633 56.9511C27.6389 56.9511 26.3967 55.7089 26.3967 54.0844V15.7667ZM12.0633 21.5C12.0633 19.8756 13.3056 18.6333 14.93 18.6333C16.5545 18.6333 17.7967 19.8756 17.7967 21.5V47.3C17.7967 48.9244 16.5545 50.1667 14.93 50.1667C13.3056 50.1667 12.0633 48.9244 12.0633 47.3V21.5ZM74.1745 65.2644C73.6967 65.6467 63.09 74.5333 43.5967 74.5333C24.1034 74.5333 13.4967 65.6467 13.0189 65.2644C11.7767 64.2133 11.6811 62.3978 12.7322 61.2511C13.7833 60.0089 15.5989 59.9133 16.7456 60.9644C16.9367 60.9644 26.3967 68.8 43.5967 68.8C60.9878 68.8 70.3522 60.9644 70.3522 60.8689C71.5945 59.8178 73.41 60.0089 74.3656 61.1556C75.5122 62.3978 75.3211 64.2133 74.1745 65.2644ZM75.13 47.3C75.13 48.9244 73.8878 50.1667 72.2633 50.1667C70.6389 50.1667 69.3967 48.9244 69.3967 47.3V21.5C69.3967 19.8756 70.6389 18.6333 72.2633 18.6333C73.8878 18.6333 75.13 19.8756 75.13 21.5V47.3Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              {/* End Stats */}
              {/* Stats */}
              <div className="relative px-3 text-center last:before:hidden sm:last:before:block sm:first:before:hidden before:absolute before:top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-gray-200 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 dark:before:bg-neutral-700">
                <h3 className="font-semibold text-lg sm:text-3xl text-gray-800 dark:text-neutral-200">
                  4.8
                </h3>
                <div className="mt-3 flex justify-center items-center gap-x-1">
                  <svg
                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>
                <div className="mt-3">
                  <p className="text-sm text-gray-500 dark:text-neutral-500">
                    Average review from 25+ reviews on G2 review site
                  </p>
                </div>
                <svg
                  className="mt-5 shrink-0 w-auto h-6 mx-auto text-gray-800 dark:text-neutral-200"
                  width={84}
                  height={87}
                  viewBox="0 0 84 87"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M58.9734 61.3913C62.1368 66.881 65.265 72.3083 68.3909 77.7297C54.5492 88.3268 33.014 89.6075 17.0719 77.4039C-1.27395 63.3494 -4.28925 39.3681 5.53283 22.1053C16.8296 2.24947 37.9697 -2.14178 51.5809 1.07815C51.2128 1.87784 43.0607 18.7901 43.0607 18.7901C43.0607 18.7901 42.4162 18.8325 42.0517 18.8395C38.0285 19.01 35.032 19.9462 31.8203 21.6067C28.2966 23.4454 25.2769 26.1192 23.0252 29.3943C20.7734 32.6695 19.3581 36.4463 18.903 40.3947C18.4281 44.399 18.9818 48.4582 20.5118 52.189C21.8054 55.3431 23.6352 58.1443 26.0884 60.5093C29.8517 64.1408 34.3299 66.3894 39.5209 67.1338C44.4366 67.8394 49.1642 67.1409 53.5943 64.9147C55.256 64.0809 56.6695 63.16 58.3218 61.897C58.5324 61.7606 58.7193 61.5877 58.9734 61.3913Z"
                    fill="currentColor"
                  />
                  <path
                    d="M59.0039 13.2464C58.2007 12.4561 57.4563 11.727 56.7154 10.9931C56.2732 10.5557 55.8475 10.1005 55.3947 9.67366C55.2325 9.5196 55.0419 9.30909 55.0419 9.30909C55.0419 9.30909 55.196 8.98216 55.2619 8.84809C56.1286 7.10876 57.4869 5.83749 59.098 4.82612C60.8796 3.69925 62.9554 3.12589 65.0628 3.17852C67.7594 3.23144 70.2666 3.90294 72.3823 5.71166C73.944 7.04643 74.7449 8.7399 74.886 10.7615C75.1212 14.1719 73.71 16.7838 70.9076 18.6067C69.2612 19.6792 67.4854 20.5083 65.7049 21.4903C64.7229 22.0324 63.8832 22.5087 62.9236 23.4895C62.0792 24.4738 62.0381 25.4017 62.0381 25.4017L74.7943 25.3852V31.0666H55.1043V30.5174C55.029 27.7255 55.3548 25.0983 56.6331 22.5628C57.8091 20.2366 59.6366 18.5338 61.8323 17.2225C63.5234 16.2123 65.3039 15.3526 66.9985 14.3471C68.044 13.7274 68.7825 12.8183 68.7766 11.5C68.7766 10.3687 67.9534 9.36319 66.7774 9.04919C64.0044 8.30124 61.1819 9.4949 59.7142 12.0327C59.5002 12.4032 59.2815 12.7713 59.0039 13.2464ZM83.6779 55.3525L72.928 36.7879H51.655L40.8357 55.5442H62.265L72.8398 74.0206L83.6779 55.3525Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              {/* End Stats */}
            </div>
            {/* End Grid */}
          </div>
          {/* End Stats */}
          {/* Slider */}
          <div className="pt-10 pb-20 overflow-hidden">
            <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
              <div
                data-hs-carousel='{
    "loadingClasses": "opacity-0",
    "slidesQty": {
      "xs": 1,
      "sm": 2,
      "lg": 3
    },
    "isDraggable": true
  }'
                className="relative"
              >
                {/* Heading */}
                <div className="mb-5 md:mb-8 grid grid-cols-2 items-center gap-3">
                  <div className="grow">
                    <h2 className="font-semibold text-xl md:text-2xl text-gray-800 dark:text-neutral-200">
                      Products
                    </h2>
                  </div>
                  {/* Nav */}
                  <div className="ms-auto flex justify-center items-center gap-x-2">
                    <button
                      type="button"
                      className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:cursor-default hs-carousel-disabled:hover:bg-white dark:hs-carousel-disabled:hover:bg-neutral-900 inline-flex justify-center items-center size-8 sm:size-10 bg-white border border-gray-100 text-gray-800 rounded-full shadow-2xs hover:bg-gray-100 focus:outline-hidden dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    >
                      <span className="text-2xl" aria-hidden="true">
                        <svg
                          className="shrink-0 size-5"
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
                          <path d="m15 18-6-6 6-6" />
                        </svg>
                      </span>
                      <span className="sr-only">Previous</span>
                    </button>
                    <button
                      type="button"
                      className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:cursor-default hs-carousel-disabled:hover:bg-white dark:hs-carousel-disabled:hover:bg-neutral-900 inline-flex justify-center items-center size-8 sm:size-10 bg-white border border-gray-100 text-gray-800 rounded-full shadow-2xs hover:bg-gray-100 focus:outline-hidden dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    >
                      <span className="sr-only">Next</span>
                      <span className="text-2xl" aria-hidden="true">
                        <svg
                          className="shrink-0 size-5"
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
                      </span>
                    </button>
                  </div>
                  {/* End Nav */}
                </div>
                {/* End Heading */}
                {/* Carousel */}
                <div className="hs-carousel w-full">
                  <div className="hs-carousel-body flex flex-nowrap gap-3 md:gap-5 opacity-0 transition-transform duration-700 cursor-grab hs-carousel-dragging:transition-none hs-carousel-dragging:cursor-grabbing">
                    <div className="hs-carousel-slide">
                      {/* Card */}
                      <a
                        className="group overflow-hidden size-full flex flex-col focus:outline-hidden"
                        href="features.html"
                      >
                        <div className="relative">
                          <div className="pt-6 ps-6 sm:pt-10 sm:ps-10 relative z-10 overflow-hidden ms-auto">
                            <img
                              className="dark:hidden translate-x-2 group-hover:translate-x-0.5 group-focus:translate-x-0.5 transition-transform duration-300 border-t-10 border-s-10 border-white/50 rounded-tl-2xl shadow-xl dark:border-black/50"
                              src="../assets/img/pro/startup/img9.webp"
                              alt="Card Image"
                            />
                            <img
                              className="hidden dark:block translate-x-2 group-hover:translate-x-0.5 group-focus:translate-x-0.5 transition-transform duration-300 border-t-10 border-s-10 border-white/50 rounded-tl-2xl shadow-xl dark:border-black/50"
                              src="../assets/img/pro/startup-dark/img9.webp"
                              alt="Card Image"
                            />
                          </div>
                          <div className="size-full absolute inset-0 size-full rounded-lg">
                            <img
                              className="size-full object-cover object-center rounded-lg opacity-40"
                              src="https://images.unsplash.com/photo-1630609083938-3acb39a06392?q=80&w=480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt="Background Image"
                            />
                          </div>
                        </div>
                        <div className="pt-4 flex items-center gap-x-5">
                          <div className="grow">
                            <p className="text-xs sm:text-sm text-gray-500 dark:text-neutral-500">
                              Calendars
                            </p>
                            <h4 className="mt-2 text-sm sm:text-base text-gray-800 dark:text-neutral-200">
                              Discover user-friendly calendar UIs designed for both dashboard and
                              admin interfaces.
                            </h4>
                          </div>
                          <div>
                            <span className="flex shrink-0 justify-center items-center size-10 bg-white border border-gray-100 text-gray-800 rounded-full group-hover:bg-blue-100 group-hover:border-blue-100 group-hover:text-blue-600 group-focus:bg-blue-100 group-focus:border-blue-100 group-focus:text-blue-600 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200 dark:group-hover:bg-blue-800/50 dark:group-hover:border-blue-800/10 dark:group-hover:text-blue-500 dark:group-focus:bg-blue-800/10 dark:group-focus:border-blue-800/50 dark:group-focus:text-blue-500">
                              <span className="sr-only">Learn more</span>
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
                                <path
                                  className="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:group-focus:opacity-100 lg:group-focus:translate-x-0 lg:transition lg:duration-200"
                                  d="M5 12h14"
                                />
                                <path
                                  className="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:group-focus:translate-x-0 lg:transition lg:duration-200"
                                  d="m12 5 7 7-7 7"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </a>
                      {/* End Card */}
                    </div>
                    <div className="hs-carousel-slide">
                      {/* Card */}
                      <a
                        className="group overflow-hidden size-full flex flex-col focus:outline-hidden"
                        href="features.html"
                      >
                        <div className="relative">
                          <div className="pt-6 ps-6 sm:pt-10 sm:ps-10 relative z-10 overflow-hidden ms-auto">
                            <img
                              className="dark:hidden translate-x-2 group-hover:translate-x-0.5 group-focus:translate-x-0.5 transition-transform duration-300 border-t-10 border-s-10 border-white/50 rounded-tl-2xl shadow-xl dark:border-black/50"
                              src="../assets/img/pro/startup/img7.webp"
                              alt="Card Image"
                            />
                            <img
                              className="hidden dark:block translate-x-2 group-hover:translate-x-0.5 group-focus:translate-x-0.5 transition-transform duration-300 border-t-10 border-s-10 border-white/50 rounded-tl-2xl shadow-xl dark:border-black/50"
                              src="../assets/img/pro/startup-dark/img7.webp"
                              alt="Card Image"
                            />
                          </div>
                          <div className="size-full absolute inset-0 size-full rounded-lg">
                            <img
                              className="size-full object-cover object-center rounded-lg opacity-40"
                              src="https://images.unsplash.com/photo-1629194893765-3a904e9080dd?q=80&w=480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt="Background Image"
                            />
                          </div>
                        </div>
                        <div className="pt-4 flex items-center gap-x-5">
                          <div className="grow">
                            <p className="text-xs sm:text-sm text-gray-500 dark:text-neutral-500">
                              Modals
                            </p>
                            <h4 className="mt-2 text-sm sm:text-base text-gray-800 dark:text-neutral-200">
                              Modals provide a clean way to present filter options inside modal
                              windows.
                            </h4>
                          </div>
                          <div>
                            <span className="flex shrink-0 justify-center items-center size-10 bg-white border border-gray-100 text-gray-800 rounded-full group-hover:bg-blue-100 group-hover:border-blue-100 group-hover:text-blue-600 group-focus:bg-blue-100 group-focus:border-blue-100 group-focus:text-blue-600 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200 dark:group-hover:bg-blue-800/50 dark:group-hover:border-blue-800/10 dark:group-hover:text-blue-500 dark:group-focus:bg-blue-800/10 dark:group-focus:border-blue-800/50 dark:group-focus:text-blue-500">
                              <span className="sr-only">Learn more</span>
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
                                <path
                                  className="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:group-focus:opacity-100 lg:group-focus:translate-x-0 lg:transition lg:duration-200"
                                  d="M5 12h14"
                                />
                                <path
                                  className="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:group-focus:translate-x-0 lg:transition lg:duration-200"
                                  d="m12 5 7 7-7 7"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </a>
                      {/* End Card */}
                    </div>
                    <div className="hs-carousel-slide">
                      {/* Card */}
                      <a
                        className="group overflow-hidden size-full flex flex-col focus:outline-hidden"
                        href="features.html"
                      >
                        <div className="relative">
                          <div className="pt-6 ps-6 sm:pt-10 sm:ps-10 relative z-10 overflow-hidden ms-auto">
                            <img
                              className="dark:hidden translate-x-2 group-hover:translate-x-0.5 group-focus:translate-x-0.5 transition-transform duration-300 border-t-10 border-s-10 border-white/50 rounded-tl-2xl shadow-xl dark:border-black/50"
                              src="../assets/img/pro/startup/img12.webp"
                              alt="Card Image"
                            />
                            <img
                              className="hidden dark:block translate-x-2 group-hover:translate-x-0.5 group-focus:translate-x-0.5 transition-transform duration-300 border-t-10 border-s-10 border-white/50 rounded-tl-2xl shadow-xl dark:border-black/50"
                              src="../assets/img/pro/startup-dark/img12.webp"
                              alt="Card Image"
                            />
                          </div>
                          <div className="size-full absolute inset-0 size-full rounded-lg">
                            <img
                              className="size-full object-cover object-center rounded-lg opacity-40"
                              src="https://images.unsplash.com/photo-1703587820365-dad81a7c5908?q=80&w=480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt="Background Image"
                            />
                          </div>
                        </div>
                        <div className="pt-4 flex items-center gap-x-5">
                          <div className="grow">
                            <p className="text-xs sm:text-sm text-gray-500 dark:text-neutral-500">
                              Checkout Forms
                            </p>
                            <h4 className="mt-2 text-sm sm:text-base text-gray-800 dark:text-neutral-200">
                              Simplified checkout process with intuitive forms to ensure a smooth
                              and quick transaction completion.
                            </h4>
                          </div>
                          <div>
                            <span className="flex shrink-0 justify-center items-center size-10 bg-white border border-gray-100 text-gray-800 rounded-full group-hover:bg-blue-100 group-hover:border-blue-100 group-hover:text-blue-600 group-focus:bg-blue-100 group-focus:border-blue-100 group-focus:text-blue-600 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200 dark:group-hover:bg-blue-800/50 dark:group-hover:border-blue-800/10 dark:group-hover:text-blue-500 dark:group-focus:bg-blue-800/10 dark:group-focus:border-blue-800/50 dark:group-focus:text-blue-500">
                              <span className="sr-only">Learn more</span>
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
                                <path
                                  className="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:group-focus:opacity-100 lg:group-focus:translate-x-0 lg:transition lg:duration-200"
                                  d="M5 12h14"
                                />
                                <path
                                  className="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:group-focus:translate-x-0 lg:transition lg:duration-200"
                                  d="m12 5 7 7-7 7"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </a>
                      {/* End Card */}
                    </div>
                    <div className="hs-carousel-slide">
                      {/* Card */}
                      <a
                        className="group overflow-hidden size-full flex flex-col focus:outline-hidden"
                        href="features.html"
                      >
                        <div className="relative">
                          <div className="pt-6 ps-6 sm:pt-10 sm:ps-10 relative z-10 overflow-hidden ms-auto">
                            <img
                              className="dark:hidden translate-x-2 group-hover:translate-x-0.5 group-focus:translate-x-0.5 transition-transform duration-300 border-t-10 border-s-10 border-white/50 rounded-tl-2xl shadow-xl dark:border-black/50"
                              src="../assets/img/pro/startup/img8.webp"
                              alt="Card Image"
                            />
                            <img
                              className="hidden dark:block translate-x-2 group-hover:translate-x-0.5 group-focus:translate-x-0.5 transition-transform duration-300 border-t-10 border-s-10 border-white/50 rounded-tl-2xl shadow-xl dark:border-black/50"
                              src="../assets/img/pro/startup-dark/img8.webp"
                              alt="Card Image"
                            />
                          </div>
                          <div className="size-full absolute inset-0 size-full rounded-lg">
                            <img
                              className="size-full object-cover object-center rounded-lg opacity-40"
                              src="https://images.unsplash.com/photo-1629196613836-0a7e2541990a?q=80&w=480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt="Background Image"
                            />
                          </div>
                        </div>
                        <div className="pt-4 flex items-center gap-x-5">
                          <div className="grow">
                            <p className="text-xs sm:text-sm text-gray-500 dark:text-neutral-500">
                              Forms
                            </p>
                            <h4 className="mt-2 text-sm sm:text-base text-gray-800 dark:text-neutral-200">
                              Create customizable review forms with pre-set questions to guide
                              reviewers.
                            </h4>
                          </div>
                          <div>
                            <span className="flex shrink-0 justify-center items-center size-10 bg-white border border-gray-100 text-gray-800 rounded-full group-hover:bg-blue-100 group-hover:border-blue-100 group-hover:text-blue-600 group-focus:bg-blue-100 group-focus:border-blue-100 group-focus:text-blue-600 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200 dark:group-hover:bg-blue-800/50 dark:group-hover:border-blue-800/10 dark:group-hover:text-blue-500 dark:group-focus:bg-blue-800/10 dark:group-focus:border-blue-800/50 dark:group-focus:text-blue-500">
                              <span className="sr-only">Learn more</span>
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
                                <path
                                  className="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:group-focus:opacity-100 lg:group-focus:translate-x-0 lg:transition lg:duration-200"
                                  d="M5 12h14"
                                />
                                <path
                                  className="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:group-focus:translate-x-0 lg:transition lg:duration-200"
                                  d="m12 5 7 7-7 7"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </a>
                      {/* End Card */}
                    </div>
                    <div className="hs-carousel-slide">
                      {/* Card */}
                      <a
                        className="group overflow-hidden size-full flex flex-col focus:outline-hidden"
                        href="features.html"
                      >
                        <div className="relative">
                          <div className="pt-6 ps-6 sm:pt-10 sm:ps-10 relative z-10 overflow-hidden ms-auto">
                            <img
                              className="dark:hidden translate-x-2 group-hover:translate-x-0.5 group-focus:translate-x-0.5 transition-transform duration-300 border-t-10 border-s-10 border-white/50 rounded-tl-2xl shadow-xl dark:border-black/50"
                              src="../assets/img/pro/startup/img13.webp"
                              alt="Card Image"
                            />
                            <img
                              className="hidden dark:block translate-x-2 group-hover:translate-x-0.5 group-focus:translate-x-0.5 transition-transform duration-300 border-t-10 border-s-10 border-white/50 rounded-tl-2xl shadow-xl dark:border-black/50"
                              src="../assets/img/pro/startup-dark/img13.webp"
                              alt="Card Image"
                            />
                          </div>
                          <div className="size-full absolute inset-0 size-full rounded-lg">
                            <img
                              className="size-full object-cover object-center rounded-lg opacity-40"
                              src="https://images.unsplash.com/photo-1630609084037-ddb2b4a3fa67?q=80&w=480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt="Background Image"
                            />
                          </div>
                        </div>
                        <div className="pt-4 flex items-center gap-x-5">
                          <div className="grow">
                            <p className="text-xs sm:text-sm text-gray-500 dark:text-neutral-500">
                              Referrals
                            </p>
                            <h4 className="mt-2 text-sm sm:text-base text-gray-800 dark:text-neutral-200">
                              Powerful e-commerce admin pages with product &amp; order lists,
                              referrals and more.
                            </h4>
                          </div>
                          <div>
                            <span className="flex shrink-0 justify-center items-center size-10 bg-white border border-gray-100 text-gray-800 rounded-full group-hover:bg-blue-100 group-hover:border-blue-100 group-hover:text-blue-600 group-focus:bg-blue-100 group-focus:border-blue-100 group-focus:text-blue-600 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200 dark:group-hover:bg-blue-800/50 dark:group-hover:border-blue-800/10 dark:group-hover:text-blue-500 dark:group-focus:bg-blue-800/10 dark:group-focus:border-blue-800/50 dark:group-focus:text-blue-500">
                              <span className="sr-only">Learn more</span>
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
                                <path
                                  className="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:group-focus:opacity-100 lg:group-focus:translate-x-0 lg:transition lg:duration-200"
                                  d="M5 12h14"
                                />
                                <path
                                  className="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:group-focus:translate-x-0 lg:transition lg:duration-200"
                                  d="m12 5 7 7-7 7"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </a>
                      {/* End Card */}
                    </div>
                    <div className="hs-carousel-slide">
                      {/* Card */}
                      <a
                        className="group overflow-hidden size-full flex flex-col focus:outline-hidden"
                        href="features.html"
                      >
                        <div className="relative">
                          <div className="pt-6 ps-6 sm:pt-10 sm:ps-10 relative z-10 overflow-hidden ms-auto">
                            <img
                              className="dark:hidden translate-x-2 group-hover:translate-x-0.5 group-focus:translate-x-0.5 transition-transform duration-300 border-t-10 border-s-10 border-white/50 rounded-tl-2xl shadow-xl dark:border-black/50"
                              src="../assets/img/pro/startup/img10.webp"
                              alt="Card Image"
                            />
                            <img
                              className="hidden dark:block translate-x-2 group-hover:translate-x-0.5 group-focus:translate-x-0.5 transition-transform duration-300 border-t-10 border-s-10 border-white/50 rounded-tl-2xl shadow-xl dark:border-black/50"
                              src="../assets/img/pro/startup-dark/img10.webp"
                              alt="Card Image"
                            />
                          </div>
                          <div className="size-full absolute inset-0 size-full rounded-lg">
                            <img
                              className="size-full object-cover object-center rounded-lg opacity-40"
                              src="https://images.unsplash.com/photo-1629654858857-615c2c8be8a8?q=80&w=480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt="Background Image"
                            />
                          </div>
                        </div>
                        <div className="pt-4 flex items-center gap-x-5">
                          <div className="grow">
                            <p className="text-xs sm:text-sm text-gray-500 dark:text-neutral-500">
                              Data Maps
                            </p>
                            <h4 className="mt-2 text-sm sm:text-base text-gray-800 dark:text-neutral-200">
                              Dive deeper with data maps, customizable tabs and insightful tables,
                              all in one centralized dashboard.
                            </h4>
                          </div>
                          <div>
                            <span className="flex shrink-0 justify-center items-center size-10 bg-white border border-gray-100 text-gray-800 rounded-full group-hover:bg-blue-100 group-hover:border-blue-100 group-hover:text-blue-600 group-focus:bg-blue-100 group-focus:border-blue-100 group-focus:text-blue-600 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200 dark:group-hover:bg-blue-800/50 dark:group-hover:border-blue-800/10 dark:group-hover:text-blue-500 dark:group-focus:bg-blue-800/10 dark:group-focus:border-blue-800/50 dark:group-focus:text-blue-500">
                              <span className="sr-only">Learn more</span>
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
                                <path
                                  className="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:group-focus:opacity-100 lg:group-focus:translate-x-0 lg:transition lg:duration-200"
                                  d="M5 12h14"
                                />
                                <path
                                  className="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:group-focus:translate-x-0 lg:transition lg:duration-200"
                                  d="m12 5 7 7-7 7"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </a>
                      {/* End Card */}
                    </div>
                  </div>
                </div>
                {/* End Carousel */}
              </div>
            </div>
          </div>
          {/* End Slider */}
          {/* Features */}
          <div className="lg:pt-10 pb-20">
            <div className="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto">
              {/* Heading */}
              <div className="mb-8 md:mb-16 max-w-xl mx-auto text-center">
                <p className="mb-2 font-mono text-sm text-gray-500 dark:text-neutral-400">
                  What we do
                </p>
                <h2 className="font-semibold text-2xl md:text-3xl text-gray-800 dark:text-neutral-200">
                  Since 2007, we have helped 2.5k+ companies launch over 100k incredible products
                </h2>
              </div>
              {/* End Heading */}
              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-x-10 lg:gap-y-12 lg:gap-x-16">
                {/* Icon Block */}
                <div className="flex gap-5">
                  <svg
                    className="shrink-0 size-6 md:size-8 mt-1 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                    <path d="M9 13a4.5 4.5 0 0 0 3-4" />
                    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
                    <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
                    <path d="M6 18a4 4 0 0 1-1.967-.516" />
                    <path d="M12 13h4" />
                    <path d="M12 18h6a2 2 0 0 1 2 2v1" />
                    <path d="M12 8h8" />
                    <path d="M16 8V5a2 2 0 0 1 2-2" />
                    <circle cx={16} cy={13} r=".5" />
                    <circle cx={18} cy={3} r=".5" />
                    <circle cx={20} cy={21} r=".5" />
                    <circle cx={20} cy={8} r=".5" />
                  </svg>
                  <div className="grow">
                    <h4 className="font-medium text-gray-800 dark:text-neutral-200">
                      Creative minds
                    </h4>
                    <p className="mt-1 text-gray-500 dark:text-neutral-500">
                      We choose our teams carefully. Our people are the secret to great work.
                    </p>
                  </div>
                </div>
                {/* End Icon Block */}
                {/* Icon Block */}
                <div className="flex gap-5">
                  <svg
                    className="shrink-0 size-6 md:size-8 mt-1 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                    <path d="M4 22h16" />
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                  </svg>
                  <div className="grow">
                    <h4 className="font-medium text-gray-800 dark:text-neutral-200">
                      Conquer the best
                    </h4>
                    <p className="mt-1 text-gray-500 dark:text-neutral-500">
                      We stay lean and help your product do one thing well.
                    </p>
                  </div>
                </div>
                {/* End Icon Block */}
                {/* Icon Block */}
                <div className="flex gap-5">
                  <svg
                    className="shrink-0 size-6 md:size-8 mt-1 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
                    <path d="M16 2v4" />
                    <path d="M8 2v4" />
                    <path d="M3 10h5" />
                    <path d="M17.5 17.5 16 16.3V14" />
                    <circle cx={16} cy={16} r={6} />
                  </svg>
                  <div className="grow">
                    <h4 className="font-medium text-gray-800 dark:text-neutral-200">
                      Effortless updates
                    </h4>
                    <p className="mt-1 text-gray-500 dark:text-neutral-500">
                      Benefit from automatic updates to all boards any time you need to make a
                      change to your website.
                    </p>
                  </div>
                </div>
                {/* End Icon Block */}
                {/* Icon Block */}
                <div className="flex gap-5">
                  <svg
                    className="shrink-0 size-6 md:size-8 mt-1 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" />
                    <path d="M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z" />
                    <path d="M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z" />
                    <path d="M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" />
                  </svg>
                  <div className="grow">
                    <h4 className="font-medium text-gray-800 dark:text-neutral-200">
                      Designing for people
                    </h4>
                    <p className="mt-1 text-gray-500 dark:text-neutral-500">
                      We actively pursue the right balance between functionality and aesthetics,
                      creating delightful experiences.
                    </p>
                  </div>
                </div>
                {/* End Icon Block */}
                {/* Icon Block */}
                <div className="flex gap-5">
                  <svg
                    className="shrink-0 size-6 md:size-8 mt-1 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                  </svg>
                  <div className="grow">
                    <h4 className="font-medium text-gray-800 dark:text-neutral-200">
                      Strong empathy
                    </h4>
                    <p className="mt-1 text-gray-500 dark:text-neutral-500">
                      We've user tested our own process by shipping over 1k products for clients.
                    </p>
                  </div>
                </div>
                {/* End Icon Block */}
                {/* Icon Block */}
                <div className="flex gap-5">
                  <svg
                    className="shrink-0 size-6 md:size-8 mt-1 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                  </svg>
                  <div className="grow">
                    <h4 className="font-medium text-gray-800 dark:text-neutral-200">
                      Stay curious
                    </h4>
                    <p className="mt-1 text-gray-500 dark:text-neutral-500">
                      We dedicate time for researching and experimentation to increase creativity
                      and imagine new challenges.
                    </p>
                  </div>
                </div>
                {/* End Icon Block */}
              </div>
              {/* End Grid */}
            </div>
          </div>
          {/* End Features */}
          {/* Case Study */}
          <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="md:-mx-4 xl:-mx-20 p-4 pt-6 xl:p-20 bg-linear-to-b from-gray-100 to-transparent rounded-2xl dark:from-neutral-800">
              {/* Heading */}
              <div className="mb-8 md:mb-16 max-w-xl mx-auto text-center">
                <h2 className="font-semibold text-2xl md:text-3xl text-gray-800 dark:text-neutral-200">
                  Success stories
                </h2>
                <p className="mt-2 text-gray-500 dark:text-neutral-400">
                  Global brands see measurable success when they collaborate with us. From higher
                  conversion and payment approval rates to faster processing speeds. Discover their
                  stories here.
                </p>
              </div>
              {/* End Heading */}
              {/* Card Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 items-center">
                {/* Card */}
                <a
                  className="group relative z-10 h-full p-4 md:p-6 hover:shadow-sm focus:shadow-sm flex flex-col bg-white focus:outline-hidden rounded-lg transition duration-200 dark:bg-neutral-900"
                  href="../../pro/startup/customers.html"
                >
                  <div className="mb-3 md:mb-5 flex items-center gap-x-3">
                    <svg
                      className="shrink-0 size-8"
                      width={32}
                      height={32}
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_11766_122079)">
                        <path
                          d="M16 32C7.16 32 0 24.84 0 16C0 7.16 7.16 0 16 0C24.84 0 32 7.16 32 16C32 24.84 24.84 32 16 32Z"
                          fill="#FFE01B"
                        />
                        <path
                          d="M11.72 19.28C11.74 19.3 11.74 19.34 11.72 19.38C11.64 19.52 11.48 19.6 11.32 19.58C11.02 19.54 10.8 19.3 10.82 19C10.82 18.8 10.86 18.62 10.92 18.42C11.02 18.18 10.92 17.92 10.72 17.78C10.6 17.7 10.44 17.68 10.3 17.7C10.16 17.72 10.04 17.82 9.96001 17.94C9.90001 18.04 9.86001 18.14 9.84001 18.24C9.84001 18.26 9.82001 18.28 9.82001 18.28C9.78001 18.4 9.70001 18.44 9.64001 18.44C9.62001 18.44 9.58001 18.42 9.56001 18.36C9.50001 18.02 9.62001 17.68 9.84001 17.42C10.04 17.2 10.32 17.1 10.62 17.14C10.92 17.18 11.2 17.38 11.32 17.66C11.46 18 11.42 18.38 11.24 18.7C11.22 18.72 11.22 18.76 11.2 18.78C11.14 18.9 11.12 19.06 11.2 19.18C11.26 19.26 11.34 19.3 11.44 19.3C11.48 19.3 11.52 19.3 11.56 19.28C11.64 19.24 11.7 19.24 11.72 19.28ZM24.94 19.6C24.92 20.22 24.78 20.82 24.56 21.4C23.44 24.1 20.76 25.6 17.56 25.5C14.58 25.42 12.04 23.84 10.94 21.26C10.24 21.24 9.56001 20.96 9.06001 20.5C8.52001 20.04 8.18001 19.4 8.10001 18.7C8.04001 18.22 8.10001 17.74 8.28001 17.28L7.66001 16.76C4.78001 14.36 13.72 4.4 16.56 6.9C16.58 6.92 17.54 7.86 17.54 7.86C17.54 7.86 18.06 7.64 18.08 7.64C20.58 6.6 22.62 7.1 22.62 8.76C22.62 9.62 22.08 10.62 21.2 11.54C21.56 11.9 21.8 12.34 21.92 12.82C22.02 13.16 22.06 13.5 22.08 13.86C22.1 14.22 22.12 15.04 22.12 15.04C22.14 15.04 22.4 15.12 22.48 15.14C23 15.26 23.46 15.48 23.86 15.82C24.08 16.02 24.2 16.3 24.26 16.58C24.32 16.96 24.22 17.34 24 17.64C24.06 17.78 24.1 17.9 24.16 18.04C24.24 18.28 24.28 18.48 24.3 18.5C24.52 18.54 24.94 18.86 24.94 19.6ZM12.34 18.12C12.14 16.86 11.3 16.42 10.72 16.38C10.58 16.38 10.44 16.38 10.28 16.42C9.26001 16.62 8.66001 17.5 8.78001 18.64C8.96001 19.7 9.82001 20.5 10.88 20.56C10.98 20.56 11.08 20.56 11.18 20.54C12.24 20.38 12.5 19.24 12.34 18.12ZM14.1 10.12C14.98 9.4 15.9 8.76 16.88 8.2C16.88 8.2 16.1 7.3 15.86 7.22C14.42 6.82 11.3 8.98 9.30001 11.84C8.50001 13 7.34001 15.04 7.90001 16.08C8.10001 16.32 8.32001 16.52 8.56001 16.72C8.92001 16.2 9.48001 15.84 10.12 15.72C10.9 13.54 12.28 11.6 14.1 10.12ZM17.22 20.1C17.3 20.44 17.56 20.72 17.9 20.8C18.08 20.86 18.24 20.92 18.44 20.94C20.72 21.34 22.86 20.02 23.34 19.7C23.38 19.68 23.4 19.7 23.38 19.74C23.36 19.76 23.34 19.78 23.34 19.8C22.76 20.56 21.18 21.44 19.12 21.44C18.22 21.44 17.32 21.12 17 20.64C16.48 19.88 16.98 18.78 17.82 18.9C17.82 18.9 18.12 18.94 18.2 18.94C19.52 19.06 20.86 18.86 22.08 18.32C23.24 17.78 23.68 17.18 23.62 16.7C23.6 16.56 23.52 16.42 23.42 16.3C23.1 16.04 22.72 15.86 22.32 15.78C22.14 15.72 22.02 15.7 21.88 15.66C21.64 15.58 21.52 15.52 21.5 15.06C21.48 14.86 21.46 14.18 21.44 13.88C21.42 13.38 21.36 12.7 20.94 12.42C20.84 12.34 20.7 12.3 20.58 12.3C20.5 12.3 20.44 12.3 20.36 12.32C20.14 12.36 19.96 12.48 19.8 12.64C19.4 13 18.88 13.18 18.34 13.14C18.04 13.12 17.74 13.08 17.38 13.06C17.32 13.06 17.24 13.06 17.18 13.04C16.22 13.06 15.44 13.78 15.32 14.74C15.12 16.16 16.14 16.88 16.44 17.32C16.48 17.38 16.52 17.44 16.52 17.52C16.52 17.6 16.48 17.68 16.42 17.72C15.6 18.64 15.3 19.92 15.62 21.12C15.66 21.26 15.7 21.4 15.76 21.54C16.5 23.28 18.82 24.1 21.08 23.36C21.38 23.26 21.66 23.14 21.94 23C22.44 22.76 22.88 22.42 23.26 22.02C23.84 21.44 24.22 20.68 24.36 19.86C24.42 19.4 24.32 19.24 24.2 19.16C24.1 19.1 24 19.08 23.88 19.1C23.82 18.74 23.72 18.4 23.58 18.08C22.94 18.56 22.2 18.94 21.42 19.16C20.48 19.42 19.52 19.52 18.54 19.48C17.92 19.42 17.5 19.24 17.34 19.76C18.28 20.08 19.28 20.18 20.28 20.06C20.3 20.06 20.34 20.08 20.34 20.1C20.34 20.12 20.32 20.14 20.3 20.16C20.22 20.14 19.06 20.68 17.22 20.1ZM13.84 11.88C14.6 11.34 15.48 10.96 16.38 10.76C17.42 10.52 18.48 10.52 19.52 10.76C19.56 10.76 19.58 10.7 19.54 10.68C19 10.4 18.42 10.24 17.8 10.22C17.78 10.22 17.76 10.2 17.76 10.18V10.16C17.86 10.04 17.96 9.92 18.08 9.84C18.1 9.82 18.1 9.8 18.08 9.8L18.06 9.78C17.32 9.86 16.62 10.1 15.98 10.52C15.96 10.52 15.94 10.52 15.94 10.52V10.5C15.98 10.32 16.06 10.14 16.16 9.96C16.16 9.94 16.16 9.92 16.14 9.92H16.12C15.22 10.42 14.42 11.08 13.76 11.86C13.74 11.88 13.74 11.9 13.76 11.9C13.8 11.9 13.82 11.9 13.84 11.88ZM19.84 16.7C19.96 16.78 20.14 16.76 20.24 16.64C20.3 16.52 20.22 16.38 20.06 16.3C19.94 16.22 19.76 16.24 19.66 16.36C19.6 16.46 19.68 16.62 19.84 16.7ZM20.34 14.88C20.38 15.08 20.46 15.28 20.58 15.44C20.7 15.42 20.84 15.42 20.96 15.44C21.04 15.22 21.04 14.98 20.98 14.76C20.88 14.34 20.76 14.1 20.52 14.14C20.26 14.18 20.24 14.48 20.34 14.88ZM20.88 15.84C20.72 15.8 20.54 15.88 20.48 16.06C20.44 16.22 20.52 16.4 20.7 16.46C20.88 16.52 21.04 16.42 21.1 16.24C21.1 16.22 21.12 16.18 21.12 16.16C21.12 16 21.02 15.86 20.88 15.84Z"
                          fill="black"
                        />
                        <path
                          d="M16.66 15.8C16.62 15.8 16.6 15.78 16.6 15.76C16.58 15.68 16.7 15.58 16.8 15.48C17.14 15.22 17.6 15.18 17.98 15.34C18.16 15.42 18.32 15.54 18.42 15.7C18.46 15.76 18.46 15.82 18.44 15.84C18.4 15.88 18.3 15.84 18.12 15.76C17.92 15.66 17.68 15.6 17.46 15.62C17.2 15.66 16.92 15.72 16.66 15.8ZM18.38 16.16C18.22 16 18 15.92 17.8 15.96C17.64 15.98 17.5 16.04 17.38 16.14C17.32 16.18 17.28 16.24 17.28 16.32C17.28 16.34 17.28 16.36 17.3 16.36C17.32 16.36 17.32 16.38 17.34 16.38C17.4 16.38 17.46 16.36 17.5 16.34C17.74 16.26 17.98 16.22 18.22 16.26C18.34 16.28 18.38 16.28 18.42 16.24C18.4 16.2 18.4 16.18 18.38 16.16Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_11766_122079">
                          <rect width={32} height={32} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="grow">
                      <p className="font-semibold text-2xl md:text-3xl text-gray-800 dark:text-neutral-200">
                        43%
                      </p>
                    </div>
                    <div>
                      <span className="flex justify-center items-center size-10 bg-white border border-gray-100 text-gray-800 rounded-full group-hover:bg-blue-100 group-hover:border-blue-100 group-hover:text-blue-600 group-focus:bg-blue-100 group-focus:border-blue-100 group-focus:text-blue-600 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200 dark:group-hover:bg-blue-800/50 dark:group-hover:border-blue-800/10 dark:group-hover:text-blue-500 dark:group-focus:bg-blue-800/10 dark:group-focus:border-blue-800/50 dark:group-focus:text-blue-500">
                        <span className="sr-only">Learn more</span>
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
                          <path
                            className="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:group-focus:opacity-100 lg:group-focus:translate-x-0 lg:transition lg:duration-200"
                            d="M5 12h14"
                          />
                          <path
                            className="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:group-focus:translate-x-0 lg:transition lg:duration-200"
                            d="m12 5 7 7-7 7"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="mb-5">
                    <h3 className="font-medium text-lg text-gray-800 dark:text-neutral-200">
                      Enhancement in customer engagement
                    </h3>
                    <p className="mt-1 text-gray-500 dark:text-neutral-500">
                      With the aim of optimizing customer interactions and boosting brand loyalty,
                      the team at Preline leveraged Mailchimp's powerful tools and expertise to
                      deliver exceptional results.
                    </p>
                  </div>
                </a>
                {/* End Card */}
                {/* Card */}
                <a
                  className="group relative z-10 h-full p-4 md:p-6 hover:shadow-sm focus:shadow-sm flex flex-col bg-white focus:outline-hidden rounded-lg transition duration-200 dark:bg-neutral-900"
                  href="../../pro/startup/customers.html"
                >
                  <div className="mb-3 md:mb-5 flex items-center gap-x-3">
                    <svg
                      className="shrink-0 size-8"
                      width={33}
                      height={32}
                      viewBox="0 0 33 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.462 6.28384C27.44 6.12384 27.2998 6.03529 27.184 6.02554C27.0684 6.01589 24.6215 5.83452 24.6215 5.83452C24.6215 5.83452 22.9221 4.1474 22.7355 3.96066C22.5489 3.77403 22.1844 3.8308 22.0429 3.87244C22.0221 3.87858 21.6716 3.98674 21.0919 4.16614C20.5243 2.53261 19.5224 1.03145 17.7599 1.03145C17.7112 1.03145 17.6611 1.03343 17.611 1.03628C17.1098 0.373373 16.4889 0.0853729 15.9525 0.0853729C11.8468 0.0853729 9.88524 5.21798 9.27023 7.82619C7.67483 8.32055 6.54146 8.672 6.39669 8.71748C5.50617 8.99682 5.47801 9.02488 5.36108 9.864C5.27308 10.4993 2.94299 28.5189 2.94299 28.5189L21.0995 31.9208L30.9373 29.7925C30.9373 29.7925 27.4837 6.44384 27.462 6.28384ZM20.0884 4.4765L18.5521 4.952C18.5526 4.84373 18.5532 4.73721 18.5532 4.62072C18.5532 3.60548 18.4123 2.78806 18.1862 2.14006C19.0943 2.25403 19.6992 3.28735 20.0884 4.4765ZM17.0596 2.34137C17.3121 2.97403 17.4763 3.88198 17.4763 5.10718C17.4763 5.16987 17.4757 5.22718 17.4752 5.28515C16.476 5.59463 15.3903 5.93063 14.3022 6.26773C14.9132 3.90981 16.0584 2.77096 17.0596 2.34137ZM15.8398 1.18663C16.017 1.18663 16.1955 1.2468 16.3663 1.36439C15.0505 1.98356 13.6401 3.54302 13.0445 6.65721L10.5364 7.43398C11.2341 5.05863 12.8907 1.18663 15.8398 1.18663Z"
                        fill="#95BF46"
                      />
                      <path
                        d="M27.184 6.02553C27.0684 6.01589 24.6215 5.83452 24.6215 5.83452C24.6215 5.83452 22.9221 4.1474 22.7356 3.96066C22.6658 3.89118 22.5716 3.85556 22.4732 3.84022L21.1004 31.9205L30.9373 29.7925C30.9373 29.7925 27.4837 6.44383 27.462 6.28383C27.44 6.12383 27.2999 6.03529 27.184 6.02553Z"
                        fill="#5E8E3E"
                      />
                      <path
                        d="M17.7599 11.4614L16.5469 15.0697C16.5469 15.0697 15.4841 14.5025 14.1813 14.5025C12.2714 14.5025 12.1753 15.701 12.1753 16.0031C12.1753 17.6511 16.4711 18.2825 16.4711 22.1427C16.4711 25.1797 14.5449 27.1353 11.9476 27.1353C8.83092 27.1353 7.23706 25.1956 7.23706 25.1956L8.07158 22.4384C8.07158 22.4384 9.70994 23.8449 11.0924 23.8449C11.9957 23.8449 12.3632 23.1337 12.3632 22.614C12.3632 20.4643 8.83881 20.3684 8.83881 16.8361C8.83881 13.863 10.9727 10.986 15.2802 10.986C16.94 10.986 17.7599 11.4614 17.7599 11.4614Z"
                        fill="white"
                      />
                    </svg>
                    <div className="grow">
                      <p className="font-semibold text-2xl md:text-3xl text-gray-800 dark:text-neutral-200">
                        20%
                      </p>
                    </div>
                    <div>
                      <span className="flex justify-center items-center size-10 bg-white border border-gray-100 text-gray-800 rounded-full group-hover:bg-blue-100 group-hover:border-blue-100 group-hover:text-blue-600 group-focus:bg-blue-100 group-focus:border-blue-100 group-focus:text-blue-600 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200 dark:group-hover:bg-blue-800/50 dark:group-hover:border-blue-800/10 dark:group-hover:text-blue-500 dark:group-focus:bg-blue-800/10 dark:group-focus:border-blue-800/50 dark:group-focus:text-blue-500">
                        <span className="sr-only">Learn more</span>
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
                          <path
                            className="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:group-focus:opacity-100 lg:group-focus:translate-x-0 lg:transition lg:duration-200"
                            d="M5 12h14"
                          />
                          <path
                            className="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:group-focus:translate-x-0 lg:transition lg:duration-200"
                            d="m12 5 7 7-7 7"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="mb-5">
                    <h3 className="font-medium text-lg text-gray-800 dark:text-neutral-200">
                      Rise in E-commerce
                    </h3>
                    <p className="mt-1 text-gray-500 dark:text-neutral-500">
                      In collaboration with Shopify, Preline embarked on a mission to revolutionize
                      the e-commerce experience for a fictitious fashion brand, 'StyleAura.'.
                    </p>
                  </div>
                </a>
                {/* End Card */}
                {/* Card */}
                <a
                  className="group relative z-10 h-full p-4 md:p-6 hover:shadow-sm focus:shadow-sm flex flex-col bg-white focus:outline-hidden rounded-lg transition duration-200 dark:bg-neutral-900"
                  href="../../pro/startup/customers.html"
                >
                  <div className="mb-3 md:mb-5 flex items-center gap-x-3">
                    <svg
                      className="shrink-0 size-8"
                      width={33}
                      height={32}
                      viewBox="0 0 33 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M32.8875 15.3054C32.9242 16.2093 32.8209 17.1099 32.5811 17.9792C32.3447 18.8486 31.9716 19.6695 31.4787 20.4141C30.989 21.1593 30.3861 21.8167 29.6935 22.3607L29.6769 22.3745L23.019 27.563L19.7451 30.1433L17.7501 31.7089C17.6335 31.8024 17.5036 31.8716 17.3671 31.9201C17.2305 31.9686 17.084 31.9929 16.9374 31.9929C16.7942 31.9929 16.6477 31.9686 16.5111 31.9201C16.3745 31.8716 16.2447 31.8024 16.1281 31.7089L14.1331 30.1433L10.8591 27.563L4.24125 22.4057L4.20129 22.378L4.18796 22.3641C3.49187 21.8203 2.88904 21.1623 2.39611 20.4176C1.90319 19.6729 1.53016 18.8486 1.29036 17.9792C1.05056 17.1099 0.947313 16.2059 0.98395 15.3019C1.02392 14.3979 1.20044 13.5078 1.51018 12.6626L1.55348 12.5414L5.90654 0.747936C5.92875 0.69021 5.95539 0.634792 5.98648 0.581684C6.01534 0.528576 6.04976 0.478931 6.08972 0.43275C6.12747 0.38426 6.16855 0.339234 6.21295 0.297671C6.25736 0.258417 6.30399 0.221472 6.35284 0.186836C6.45609 0.121028 6.56267 0.0725381 6.67924 0.0448295C6.79248 0.0136573 6.91238 -0.000196993 7.02895 0.00673016C7.14885 0.0136573 7.26542 0.0379024 7.37533 0.0829289C7.48524 0.124492 7.59181 0.186836 7.68507 0.263035C7.72948 0.302289 7.77278 0.343852 7.81496 0.387724C7.85493 0.433905 7.89046 0.483549 7.92154 0.536658C7.95485 0.587457 7.98371 0.641719 8.00814 0.699446C8.03256 0.754863 8.05254 0.812589 8.06809 0.872625L11.0023 10.2139H22.8792L25.8134 0.872625C25.8289 0.812589 25.85 0.754863 25.8767 0.699446C25.9011 0.644029 25.93 0.589766 25.9633 0.536658C25.9944 0.485858 26.0299 0.437368 26.0699 0.391187C26.1098 0.345006 26.1531 0.302289 26.1997 0.263035C26.293 0.186836 26.3962 0.127955 26.5062 0.0829289C26.6194 0.0413659 26.736 0.0171209 26.8525 0.0101937C26.9724 0.00326659 27.089 0.0136573 27.2056 0.0448295C27.3188 0.0760017 27.4287 0.124492 27.5286 0.1903C27.5797 0.222627 27.6275 0.259571 27.6719 0.301134C27.7163 0.340388 27.7573 0.38426 27.7951 0.43275C27.8328 0.48124 27.8673 0.532039 27.8983 0.585148C27.9272 0.638256 27.9527 0.693673 27.9749 0.751399L32.3213 12.5483L32.3646 12.6696C32.6744 13.5112 32.8509 14.4014 32.8875 15.3054Z"
                        fill="#E24329"
                      />
                      <path
                        d="M32.8909 15.309C32.9275 16.2095 32.8243 17.1135 32.5845 17.9829C32.3447 18.8523 31.9717 19.6766 31.4787 20.4213C30.9858 21.1659 30.383 21.824 29.6902 22.3678L29.6736 22.3816L23.0157 27.5701C23.0157 27.5701 20.1881 25.3499 16.9374 22.7903L26.4795 15.2813C26.9092 14.9453 27.3588 14.6371 27.8218 14.3531C28.2847 14.0656 28.7643 13.8093 29.2539 13.5807C29.7468 13.3521 30.2498 13.1477 30.7593 12.978C31.2722 12.8049 31.7918 12.6628 32.3214 12.5485L32.3647 12.6698C32.6744 13.5149 32.8509 14.405 32.8909 15.309Z"
                        fill="#FC6D26"
                      />
                      <path
                        d="M16.9374 22.7903C20.1881 25.343 23.0191 27.5701 23.0191 27.5701L19.7451 30.1504L17.7501 31.716C17.6335 31.8095 17.5036 31.8788 17.3671 31.9273C17.2305 31.9758 17.084 32 16.9374 32C16.7942 32 16.6477 31.9758 16.5111 31.9273C16.3746 31.8788 16.2447 31.8095 16.1281 31.716L14.1331 30.1504L10.8591 27.5701C10.8591 27.5701 13.6868 25.343 16.9374 22.7903Z"
                        fill="#FCA326"
                      />
                      <path
                        d="M16.9374 22.7834C13.6834 25.343 10.8591 27.5632 10.8591 27.5632L4.24125 22.4059L4.20129 22.3782L4.18796 22.3643C3.49187 21.8205 2.88904 21.1625 2.39611 20.4178C1.90319 19.6731 1.53016 18.8488 1.29036 17.9794C1.05056 17.1101 0.947313 16.2061 0.98395 15.3021C1.02392 14.3981 1.20044 13.508 1.51018 12.6628L1.55348 12.5416C2.08304 12.6559 2.60261 12.7979 3.11552 12.9711C3.6251 13.1443 4.12801 13.3452 4.62094 13.5772C5.11053 13.8058 5.59014 14.0656 6.05309 14.3496C6.51604 14.6336 6.96233 14.9453 7.39531 15.2813L16.9374 22.7834Z"
                        fill="#FC6D26"
                      />
                    </svg>
                    <div className="grow">
                      <p className="font-semibold text-2xl md:text-3xl text-gray-800 dark:text-neutral-200">
                        $125,000
                      </p>
                    </div>
                    <div>
                      <span className="flex justify-center items-center size-10 bg-white border border-gray-100 text-gray-800 rounded-full group-hover:bg-blue-100 group-hover:border-blue-100 group-hover:text-blue-600 group-focus:bg-blue-100 group-focus:border-blue-100 group-focus:text-blue-600 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200 dark:group-hover:bg-blue-800/50 dark:group-hover:border-blue-800/10 dark:group-hover:text-blue-500 dark:group-focus:bg-blue-800/10 dark:group-focus:border-blue-800/50 dark:group-focus:text-blue-500">
                        <span className="sr-only">Learn more</span>
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
                          <path
                            className="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:group-focus:opacity-100 lg:group-focus:translate-x-0 lg:transition lg:duration-200"
                            d="M5 12h14"
                          />
                          <path
                            className="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:group-focus:translate-x-0 lg:transition lg:duration-200"
                            d="m12 5 7 7-7 7"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="mb-5">
                    <h3 className="font-medium text-lg text-gray-800 dark:text-neutral-200">
                      Saved annually
                    </h3>
                    <p className="mt-1 text-gray-500 dark:text-neutral-500">
                      Gitlab spent the equivalent of $25k per year in spreadsheet processes. Now
                      Preline does it for them.
                    </p>
                  </div>
                </a>
                {/* End Card */}
                {/* Card */}
                <a
                  className="group relative z-10 h-full p-4 md:p-6 hover:shadow-sm focus:shadow-sm flex flex-col bg-white focus:outline-hidden rounded-lg transition duration-200 dark:bg-neutral-900"
                  href="../../pro/startup/customers.html"
                >
                  <div className="mb-3 md:mb-5 flex items-center gap-x-3">
                    <svg
                      className="shrink-0 size-8"
                      width={33}
                      height={32}
                      viewBox="0 0 33 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_12670_125260)">
                        <path
                          d="M20.9373 16.007C20.9379 17.1608 20.7297 18.3053 20.3229 19.385C19.2428 19.7917 18.0981 20.0002 16.9439 20.0004H16.9304C15.7419 19.9989 14.6032 19.7816 13.5524 19.3855C13.1454 18.3056 12.937 17.161 12.9374 16.007V15.993C12.9369 14.8394 13.1448 13.6952 13.5512 12.6155C14.6313 12.208 15.7762 11.9995 16.9306 12H16.9441C18.0983 11.9994 19.2431 12.2079 20.3231 12.6154C20.7299 13.6949 20.938 14.8392 20.9374 15.9929V16.0069L20.9373 16.007ZM32.7152 13.3334H23.3757L29.9793 6.72925C29.461 6.00115 28.8828 5.31757 28.2508 4.68563V4.68512C27.6188 4.05386 26.9354 3.47621 26.2077 2.95813L19.6036 9.56225V0.22275C18.7252 0.074991 17.8361 0.000484612 16.9454 0L16.9289 0C16.0229 0.0005 15.1356 0.0775 14.2708 0.22275V9.56225L7.66669 2.95813C6.93887 3.47607 6.25577 4.05413 5.62456 4.68625L5.62106 4.68875C4.99013 5.3199 4.41277 6.00242 3.89494 6.72925L10.4996 13.3334H1.16019C1.16019 13.3334 0.937439 15.0875 0.937439 15.9945V16.0055C0.937439 16.9125 1.01431 17.8014 1.16019 18.6666H10.4997L3.89506 25.2708C4.93402 26.7288 6.20869 28.0034 7.66669 29.0424L14.2708 22.4377V31.7778C15.1482 31.9248 16.0362 31.9991 16.9258 32H16.9484C17.8381 31.9992 18.7261 31.9249 19.6034 31.7778V22.4377L26.2082 29.0424C26.9357 28.5241 27.619 27.9463 28.2508 27.3149L28.2523 27.3134C28.8835 26.6814 29.4611 25.9982 29.9793 25.2708L23.3747 18.6666H32.7152C32.8606 17.8029 32.9364 16.9166 32.9374 16.0116V15.9884C32.9364 15.0834 32.8606 14.1971 32.7152 13.3334Z"
                          fill="#FF4A00"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_12670_125260">
                          <rect
                            width={32}
                            height={32}
                            fill="white"
                            transform="translate(0.937439)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="grow">
                      <p className="font-semibold text-2xl md:text-3xl text-gray-800 dark:text-neutral-200">
                        57%
                      </p>
                    </div>
                    <div>
                      <span className="flex justify-center items-center size-10 bg-white border border-gray-100 text-gray-800 rounded-full group-hover:bg-blue-100 group-hover:border-blue-100 group-hover:text-blue-600 group-focus:bg-blue-100 group-focus:border-blue-100 group-focus:text-blue-600 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200 dark:group-hover:bg-blue-800/50 dark:group-hover:border-blue-800/10 dark:group-hover:text-blue-500 dark:group-focus:bg-blue-800/10 dark:group-focus:border-blue-800/50 dark:group-focus:text-blue-500">
                        <span className="sr-only">Learn more</span>
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
                          <path
                            className="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:group-focus:opacity-100 lg:group-focus:translate-x-0 lg:transition lg:duration-200"
                            d="M5 12h14"
                          />
                          <path
                            className="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:group-focus:translate-x-0 lg:transition lg:duration-200"
                            d="m12 5 7 7-7 7"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="mb-5">
                    <h3 className="font-medium text-lg text-gray-800 dark:text-neutral-200">
                      Streamlining development
                    </h3>
                    <p className="mt-1 text-gray-500 dark:text-neutral-500">
                      With the goal of accelerating project delivery and enhancing collaboration
                      among development teams, Preline leveraged GitLab's comprehensive suite of
                      tools.
                    </p>
                  </div>
                </a>
                {/* End Card */}
              </div>
              {/* End Card Grid */}
            </div>
          </div>
          {/* End Case Study */}
          {/* Clients */}
          <div className="pt-10 pb-20">
            <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
              <div className="mb-8 text-center">
                <p className="font-mono text-sm text-gray-500 dark:text-neutral-400">
                  Trusted by fast-growing companies worldwide
                </p>
              </div>
              {/* Grid */}
              <div className="relative overflow-hidden before:absolute before:inset-y-0 before:start-0 before:z-1 before:w-20 before:h-full before:bg-linear-to-r before:from-white before:to-transparent after:absolute after:inset-y-0 after:end-0 after:z-1 after:w-20 after:h-full after:bg-linear-to-l after:from-white after:to-transparent dark:before:from-neutral-900 dark:after:from-neutral-900">
                <div className="flex items-center animate-marquee">
                  {/* Brands */}
                  <div className="flex items-center justify-around">
                    <div className="px-4 w-40 md:w-64 h-12 flex shrink-0 justify-center items-center">
                      <svg
                        className="w-20 md:w-28 h-full object-contain text-gray-800 dark:text-neutral-200"
                        width={391}
                        height={86}
                        viewBox="0 0 391 86"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M164.997 67.2927L150.691 9.90208H163.464L173.069 49.6471H173.24L187.069 9.90208H198.037L211.866 49.6471H212.036L221.71 9.90208H234.415L220.109 67.2927H207.097L192.621 28.918H192.45L177.906 67.2927H164.997Z"
                          fill="currentColor"
                        />
                        <path
                          d="M238.298 9.90208H250.322V28.918H250.492C251.548 26.965 253.66 25.3889 256.112 24.3268C258.394 23.3332 261.698 22.7164 264.628 22.7164C267.864 22.7164 272.292 23.5387 275.459 25.1834C278.661 26.9308 281.079 29.2606 282.68 32.2073C284.418 35.2567 285.269 38.6828 285.269 42.5204V67.2927H273.245V44.1309C273.245 40.7389 272.257 38.1347 270.248 36.2844C268.238 34.4344 265.513 33.5092 262.039 33.5092C258.565 33.5092 255.805 34.5029 253.592 36.4557C251.411 38.4089 250.356 40.9787 250.356 44.1309V67.2927H238.332V9.90208H238.298Z"
                          fill="currentColor"
                        />
                        <path
                          d="M289.493 45.6382C289.493 42.2118 290.14 39.0596 291.434 36.2159C292.728 33.372 294.5 30.9735 296.748 28.9863C298.996 26.999 301.584 25.4572 304.514 24.3608C307.443 23.2644 310.543 22.7162 313.779 22.7162C317.015 22.7162 320.285 23.2644 323.248 24.3951C326.211 25.5257 328.766 27.0675 330.981 29.0548C333.161 31.0421 334.897 33.4404 336.191 36.25C337.451 39.0596 338.099 42.1774 338.099 45.6038C338.099 49.0303 337.451 52.251 336.157 55.0605C334.864 57.8701 333.091 60.2685 330.878 62.2557C328.664 64.243 326.075 65.7847 323.112 66.8812C320.148 67.9774 317.049 68.5258 313.813 68.5258C310.577 68.5258 307.375 67.9774 304.412 66.8468C301.448 65.7162 298.894 64.1742 296.68 62.1529C294.5 60.1312 292.728 57.7328 291.434 54.9233C290.14 52.0796 289.493 48.9959 289.493 45.6382ZM326.075 45.6382C326.075 41.9376 324.951 38.9567 322.703 36.7296C320.455 34.5025 317.491 33.372 313.813 33.372C312.007 33.372 310.373 33.6803 308.84 34.2627C307.307 34.8796 306.012 35.7019 304.923 36.764C303.833 37.8261 303.015 39.128 302.402 40.6357C301.789 42.1774 301.516 43.8223 301.516 45.6382C301.516 47.4541 301.823 49.0987 302.402 50.6064C303.015 52.1137 303.867 53.4159 304.957 54.478C306.081 55.5742 307.375 56.3965 308.874 57.0134C310.373 57.6303 312.007 57.9041 313.813 57.9041C315.618 57.9041 317.253 57.5959 318.786 57.0134C320.319 56.3965 321.613 55.5742 322.703 54.5121C323.793 53.45 324.644 52.1481 325.224 50.6404C325.803 49.0987 326.075 47.4197 326.075 45.6382Z"
                          fill="currentColor"
                        />
                        <path
                          d="M342.492 22.6822H354.039V28.9181H354.211C354.958 27.2735 358.127 24.5325 360.648 23.8129C363.135 23.0934 365.655 22.7165 368.209 22.7165C371.447 22.7165 374.444 23.3332 377.17 24.5325C379.892 25.7317 382.21 27.3763 384.218 29.4321C386.196 31.5221 387.728 33.9204 388.852 36.6959C389.977 39.471 390.519 42.4519 390.519 45.6042C390.519 48.7564 389.977 51.9086 388.852 54.6838C387.728 57.4593 386.196 59.8917 384.218 61.9134C382.244 63.9691 379.892 65.5796 377.133 66.7443C374.408 67.9092 371.411 68.4917 368.245 68.4917C367.223 68.4917 366.066 68.3892 364.802 68.2179C363.509 68.0121 362.282 67.7379 361.058 67.3612C359.831 66.9844 358.673 66.5045 357.548 65.922C356.424 65.3395 355.504 64.6885 354.757 63.9007H354.585V85.6577H342.561L342.492 22.6822ZM378.43 45.6386C378.43 41.9379 377.305 38.957 375.089 36.7643C372.876 34.5713 369.912 33.4408 366.234 33.4408C364.941 33.4408 363.578 33.6465 362.215 34.0917C360.82 34.5373 359.559 35.1538 358.435 35.9761C357.31 36.7987 356.358 37.7924 355.64 38.9229C354.925 40.0535 354.552 41.3898 354.552 42.8631V48.3452C354.552 50.264 355.097 51.9086 356.219 53.3475C357.31 54.7522 358.739 55.8487 360.409 56.6026C362.146 57.4593 364.124 57.9045 366.337 57.9045C369.982 57.9045 372.909 56.7739 375.125 54.5124C377.305 52.2513 378.43 49.2704 378.43 45.6386Z"
                          fill="currentColor"
                        />
                        <path
                          d="M20.827 0.0678406C12.2513 0.0678406 6.3639 3.8324 1.87183 8.11027C1.87183 8.11027 0.0681903 9.82144 0.102221 9.88987L18.8873 28.7811L37.6723 9.88987C34.099 4.96174 27.395 0.0678406 20.827 0.0678406Z"
                          fill="currentColor"
                        />
                        <path
                          d="M67.2103 0.0678406C58.6345 0.0678406 52.7471 3.8666 48.2553 8.11027C48.2553 8.11027 46.6216 9.7872 46.5197 9.88987L23.3105 33.2301L42.0616 52.0869L84.0217 9.88987C80.4484 4.96174 73.7443 0.0678406 67.2103 0.0678406Z"
                          fill="currentColor"
                        />
                        <path
                          d="M113.698 0.0678406C105.122 0.0678406 99.2347 3.8666 94.7426 8.11027C94.7426 8.11027 93.0411 9.78724 92.9729 9.88991L46.521 56.5701L51.4214 61.4983C59.0102 69.1301 71.4657 69.1301 79.0886 61.4983L130.441 9.88991C126.902 4.96174 120.266 0.0678406 113.698 0.0678406Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="px-4 w-40 md:w-64 h-12 flex shrink-0 justify-center items-center">
                      <svg
                        className="w-20 md:w-28 h-full object-contain text-gray-800 dark:text-neutral-200"
                        width={296}
                        height={86}
                        viewBox="0 0 296 86"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M43.0002 56.4378C50.4215 56.4378 56.4377 50.4216 56.4377 43.0002C56.4377 35.5789 50.4215 29.5627 43.0002 29.5627C35.5788 29.5627 29.5627 35.5789 29.5627 43.0002C29.5627 50.4216 35.5788 56.4378 43.0002 56.4378Z"
                          fill="currentColor"
                        />
                        <path
                          d="M67.2113 74.8161C68.3546 75.9594 68.2399 77.8519 66.8964 78.7521C60.0618 83.3302 51.8411 86 42.9969 86C34.1526 86 25.9319 83.3302 19.0971 78.7521C17.7538 77.8519 17.639 75.9594 18.7823 74.8161L28.6022 64.9958C29.4898 64.1086 30.8666 63.9681 31.9838 64.5405C35.2869 66.2328 39.0304 67.1874 42.9969 67.1874C46.9633 67.1874 50.7068 66.2328 54.0102 64.5405C55.1273 63.9681 56.5037 64.1086 57.3915 64.9958L67.2113 74.8161Z"
                          fill="currentColor"
                        />
                        <path
                          d="M66.8998 7.24822C68.2433 8.14802 68.358 10.0408 67.2146 11.1841L57.3948 21.0041C56.5071 21.8917 55.1301 22.0318 54.0131 21.4596C50.7097 19.7674 46.9665 18.8126 43 18.8126C29.6416 18.8126 18.8125 29.6418 18.8125 43.0002C18.8125 46.9667 19.7673 50.7102 21.4595 54.0136C22.0317 55.1306 21.8916 56.5071 21.004 57.3948L11.184 67.2151C10.0407 68.358 8.14797 68.2433 7.24817 66.9002C2.67011 60.0651 0 51.8444 0 43.0002C0 19.2519 19.2518 0 43 0C51.8444 0 60.0651 2.67012 66.8998 7.24822Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M140.423 8.73445C140.423 8.36335 140.723 8.06254 141.094 8.06254H151.173C151.543 8.06254 151.844 8.36335 151.844 8.73445V77.2662C151.844 77.6369 151.543 77.9379 151.173 77.9379H141.094C140.723 77.9379 140.423 77.6369 140.423 77.2662V8.73445ZM126.199 63.4019C125.932 63.1707 125.532 63.1879 125.274 63.4306C123.704 64.9132 121.864 66.0995 119.848 66.9265C117.637 67.8348 115.259 68.292 112.861 68.2705C110.836 68.3302 108.82 67.9839 106.937 67.2524C105.054 66.5209 103.344 65.4201 101.912 64.0173C99.311 61.3618 97.8141 57.5706 97.8141 53.0513C97.8141 44.0041 103.833 37.8159 112.861 37.8159C115.283 37.7825 117.682 38.273 119.888 39.2517C121.887 40.1394 123.683 41.4084 125.17 42.9825C125.424 43.2517 125.846 43.2829 126.127 43.0405L132.93 37.1532C133.209 36.9126 133.242 36.4927 132.997 36.2189C127.879 30.5 119.862 27.547 112.237 27.547C96.8857 27.547 86.0005 37.9023 86.0005 53.1373C86.0005 60.6724 88.7057 67.0173 93.268 71.4974C97.8303 75.9781 104.33 78.6097 111.829 78.6097C121.232 78.6097 128.801 75.0039 133.238 70.378C133.499 70.1066 133.47 69.6747 133.185 69.4287L126.199 63.4019ZM207.361 56.4048C207.324 56.7412 207.038 56.993 206.699 56.993H171.395C170.966 56.993 170.646 57.391 170.758 57.8047C172.514 64.3159 177.751 68.2557 184.899 68.2557C187.308 68.3064 189.696 67.8104 191.879 66.8066C193.913 65.8716 195.717 64.5185 197.171 62.8415C197.347 62.6389 197.653 62.6088 197.859 62.7808L204.957 68.9604C205.229 69.1969 205.267 69.6064 205.034 69.8811C200.749 74.9365 193.805 78.6097 184.278 78.6097C169.62 78.6097 158.563 68.4592 158.563 53.0379C158.563 45.4719 161.168 39.1275 165.509 34.6476C167.801 32.344 170.548 30.5259 173.581 29.3055C176.614 28.0852 179.869 27.4882 183.146 27.5516C198.003 27.5516 207.61 37.9999 207.61 52.4268C207.591 53.756 207.508 55.0838 207.361 56.4048ZM170.97 47.0417C170.845 47.4564 171.165 47.8602 171.599 47.8602H195.073C195.507 47.8602 195.827 47.454 195.707 47.037C194.107 41.4996 190.048 37.8041 183.743 37.8041C181.889 37.7453 180.044 38.081 178.333 38.7877C176.623 39.4949 175.088 40.5567 173.834 41.9002C172.515 43.396 171.539 45.1497 170.97 47.0417ZM242.54 27.5544C242.914 27.5503 243.219 27.8523 243.219 28.2263V39.5101C243.219 39.9011 242.887 40.2093 242.496 40.1804C241.408 40.0997 240.378 40.0311 239.703 40.0311C230.912 40.0311 225.751 46.2185 225.751 54.3404V77.2662C225.751 77.6369 225.45 77.9379 225.079 77.9379H215.001C214.629 77.9379 214.328 77.6369 214.328 77.2662V28.9238C214.328 28.5528 214.629 28.252 215.001 28.252H225.079C225.45 28.252 225.751 28.5528 225.751 28.9238V35.709C225.751 35.7473 225.781 35.7783 225.82 35.7783C225.842 35.7783 225.863 35.7679 225.875 35.7504C229.815 30.4894 235.63 27.5628 241.773 27.5628L242.54 27.5544ZM269.84 57.1067C269.881 57.0623 269.939 57.0374 269.999 57.0374C270.074 57.0374 270.144 57.0761 270.184 57.1401L282.927 77.6212C283.05 77.818 283.265 77.9379 283.498 77.9379H294.954C295.481 77.9379 295.802 77.3598 295.525 76.9121L278.043 48.7045C277.885 48.4498 277.915 48.1216 278.116 47.8994L294.96 29.3153C295.351 28.8834 295.045 28.1922 294.462 28.1922H282.511C282.322 28.1922 282.143 28.2712 282.015 28.4099L262.527 49.6533C262.113 50.1048 261.36 49.812 261.36 49.199V8.7344C261.36 8.36335 261.059 8.06254 260.688 8.06254H250.61C250.239 8.06254 249.938 8.36335 249.938 8.7344V77.2662C249.938 77.6369 250.239 77.9379 250.61 77.9379H260.688C261.059 77.9379 261.36 77.6369 261.36 77.2662V66.4817C261.36 66.3121 261.424 66.1482 261.54 66.024L269.84 57.1067Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="px-4 w-40 md:w-64 h-12 flex shrink-0 justify-center items-center">
                      <svg
                        className="w-20 md:w-28 h-full object-contain text-gray-800 dark:text-neutral-200"
                        width={380}
                        height={87}
                        viewBox="0 0 380 87"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M189.522 21.5345C174.687 21.5345 163.991 31.2095 163.991 45.722C163.991 60.2345 176.031 69.9095 190.866 69.9095C199.829 69.9095 207.73 66.362 212.622 60.3824L202.342 54.443C199.627 57.4127 195.502 59.1461 190.866 59.1461C184.43 59.1461 178.961 55.7867 176.932 50.4117H214.583C214.879 48.9067 215.054 47.348 215.054 45.7086C215.054 31.2095 204.357 21.5345 189.522 21.5345ZM176.811 41.0189C178.49 35.6574 183.086 32.2845 189.509 32.2845C195.946 32.2845 200.541 35.6574 202.207 41.0189H176.811ZM334.217 21.5345C319.382 21.5345 308.686 31.2095 308.686 45.722C308.686 60.2345 320.726 69.9095 335.561 69.9095C344.524 69.9095 352.425 66.362 357.317 60.3824L347.037 54.443C344.323 57.4127 340.197 59.1461 335.561 59.1461C329.125 59.1461 323.656 55.7867 321.627 50.4117H359.278C359.574 48.9067 359.749 47.348 359.749 45.7086C359.749 31.2095 349.052 21.5345 334.217 21.5345ZM321.519 41.0189C323.199 35.6574 327.794 32.2845 334.217 32.2845C340.654 32.2845 345.25 35.6574 346.916 41.0189H321.519ZM269.073 45.722C269.073 53.7845 274.34 59.1595 282.51 59.1595C288.046 59.1595 292.198 56.6467 294.335 52.5483L304.655 58.5011C300.382 65.623 292.373 69.9095 282.51 69.9095C267.662 69.9095 256.979 60.2345 256.979 45.722C256.979 31.2095 267.675 21.5345 282.51 21.5345C292.373 21.5345 300.368 25.8211 304.655 32.943L294.335 38.8958C292.198 34.7974 288.046 32.2845 282.51 32.2845C274.353 32.2845 269.073 37.6595 269.073 45.722ZM379.905 6.7533V68.5658H367.811V6.7533H379.905ZM49.6516 0.0345459L99.3031 86.0345H0L49.6516 0.0345459ZM173.787 6.7533L136.552 71.2533L99.3166 6.7533H113.278L136.552 47.0658L159.826 6.7533H173.787ZM252.948 22.8783V35.8992C251.604 35.5095 250.179 35.2408 248.647 35.2408C240.84 35.2408 235.21 40.6158 235.21 48.6783V68.5658H223.116V22.8783H235.21V35.2408C235.21 28.4145 243.152 22.8783 252.948 22.8783Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="px-4 w-40 md:w-64 h-12 flex shrink-0 justify-center items-center">
                      <svg
                        className="w-20 md:w-28 h-full object-contain text-gray-800 dark:text-neutral-200"
                        width={376}
                        height={86}
                        viewBox="0 0 376 86"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M48.7857 5.80549e-07H37.1999C16.6612 0.025109 0.0179346 16.6361 0 37.1318C0.0251084 57.6239 16.6648 74.2277 37.1999 74.2528H48.8287C69.3674 74.2349 86.0143 57.6275 86.0394 37.1318C86.0179 16.6146 69.3459 -0.00358634 48.7857 5.80549e-07ZM4.6056 37.1318C4.6056 19.1793 19.1864 4.63071 37.1748 4.63071C38.9934 4.63071 40.812 4.77778 42.6054 5.07908C58.3018 7.66884 69.7943 21.2382 69.7369 37.1139C69.719 47.3043 62.3478 55.999 52.2794 57.7028C58.8685 52.9035 62.7603 45.2526 62.7532 37.1139C62.7747 25.4671 54.8799 15.291 43.5739 12.3964C41.4827 11.8548 39.3342 11.5858 37.1748 11.5858C23.0711 11.6288 11.6611 23.0424 11.6467 37.1139C11.6109 49.8654 18.1534 61.7345 28.9608 68.5353C14.6526 64.787 4.663 51.8956 4.63071 37.1318H4.6056ZM42.9749 17.0773C51.9314 19.6491 58.0973 27.8309 58.0902 37.1318C58.0938 46.4291 51.9278 54.6037 42.9749 57.1755C34.0219 54.6037 27.8596 46.4291 27.8596 37.1318C27.8524 27.8309 34.0183 19.6491 42.9749 17.0773ZM48.7857 69.6149H48.653C46.8846 69.6042 45.1163 69.4571 43.3694 69.1666C28.0892 66.6378 16.7366 53.6711 16.2774 38.2222V37.1318C16.2882 26.9378 23.6629 18.2395 33.7314 16.5393C27.1422 21.3386 23.2468 28.9895 23.2468 37.1318C23.2325 48.7749 31.1273 58.9474 42.4297 61.8421C44.5173 62.3837 46.6694 62.6563 48.8287 62.6491C62.9469 62.6348 74.3891 51.2212 74.4107 37.1318C74.4501 24.3803 67.9076 12.5076 57.093 5.71038C71.4012 9.46588 81.3764 22.368 81.38 37.1318C81.3764 45.7512 77.9402 54.019 71.8245 60.1096C65.7124 66.2038 57.423 69.6221 48.7857 69.6149Z"
                          fill="currentColor"
                        />
                        <path
                          d="M160.518 67.7784H107.536V61.8134C114.068 60.7158 115.352 58.4238 115.352 56.2178V18.86C115.352 14.6418 114.068 12.895 107.536 12.4394V6.47439H140.837V12.4394C134.305 12.895 133.017 14.6418 133.017 18.86V58.3879C133.017 60.5867 133.659 62.1506 139.18 62.1506H145.159C148.556 62.1506 152.606 60.497 155.457 51.501H161.433L160.518 67.7784ZM165.3 45.292C165.3 30.4278 176.064 19.4124 191.326 19.4124C207.428 19.4124 216.715 30.2449 216.715 43.4555C216.715 58.2408 205.774 69.0697 190.781 69.0697C174.41 69.0697 165.3 58.5134 165.3 45.292ZM199.426 48.6924C199.426 34.1009 194.364 25.3775 189.4 25.3775C184.708 25.3775 182.782 31.2528 182.782 39.6964C182.782 54.5678 187.929 63.1047 192.797 63.1047C197.41 63.1047 199.426 57.319 199.426 48.6924ZM222.418 45.292C222.418 30.4278 233.186 19.4124 248.448 19.4124C264.55 19.4124 273.836 30.2449 273.836 43.4555C273.836 58.2408 262.896 69.0697 247.896 69.0697C231.529 69.0697 222.418 58.5134 222.418 45.292ZM256.547 48.6924C256.547 34.1009 251.486 25.3775 246.522 25.3775C241.83 25.3775 239.893 31.2528 239.893 39.6964C239.893 54.5678 245.051 63.1047 249.919 63.1047C254.524 63.1047 256.547 57.319 256.547 48.6924ZM330.614 42.7274C330.614 58.786 320.868 69.0805 306.793 69.0805C303.956 69.1307 301.136 68.5998 298.511 67.5166V74.3066C298.511 77.707 299.892 79.0844 306.151 79.9991V86H276.071V80.035C280.852 78.9374 281.408 77.7393 281.408 74.3425V33.9323C281.408 31.5434 280.58 30.166 277.541 28.7958L276.071 28.1537V23.376L294.83 19.4303H298.511V25.3093C300.874 21.5682 305.032 19.3371 309.461 19.4303C324.082 19.4124 330.614 30.6574 330.614 42.7274ZM312.955 46.0309C312.955 36.4826 310.315 28.2255 303.941 28.2255C301.179 28.2255 300.72 28.039 298.511 29.6925V48.1365C298.511 59.0658 300.272 62.2797 305.042 62.2797C309.461 62.2797 312.955 56.8599 312.955 46.0309ZM375.07 24.8251L366.608 36.3929C362.559 28.3116 358.685 24.9219 354.101 24.9219C351.335 24.9219 347.752 26.5719 347.752 29.4199C347.752 39.0831 376.537 32.8096 375.992 54.1123C375.712 61.8134 368.262 69.0446 355.385 69.0446C344.161 69.0446 334.785 63.4419 332.497 61.4188L342.436 51.0526C347.956 59.6792 352.461 63.5351 356.873 63.5351C359.169 63.5351 363.219 62.5272 363.316 58.0292C363.316 47.6558 334.893 56.0098 334.979 35.1913C334.979 25.3703 343.168 19.3765 356.231 19.3765C366.511 19.4124 373.14 22.9886 375.07 24.8251Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="px-4 w-40 md:w-64 h-12 flex shrink-0 justify-center items-center">
                      <svg
                        className="w-20 md:w-28 h-full object-contain text-gray-800 dark:text-neutral-200"
                        width={558}
                        height={86}
                        viewBox="0 0 558 86"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M509.467 27.7238H523.592V34.5931C525.205 32.2066 527.365 30.3361 530.074 28.9816C532.783 27.6271 535.783 26.9498 539.072 26.9498C542.749 26.9498 545.974 27.7238 548.747 29.2718C551.521 30.7553 553.681 32.8838 555.229 35.6573C556.777 38.3663 557.551 41.5268 557.551 45.1388V77.9371H543.329V48.8153C543.329 45.9773 542.523 43.7198 540.91 42.0428C539.362 40.3658 537.266 39.5273 534.622 39.5273C532.235 39.5273 530.236 40.1723 528.623 41.4623C527.011 42.6878 525.753 44.5261 524.85 46.9771C524.011 49.4281 523.592 52.3951 523.592 55.8781V77.9371H509.467V27.7238Z"
                          fill="currentColor"
                        />
                        <path
                          d="M485.751 27.7245H499.876V77.9379H485.751V27.7245ZM485.364 7.60059H500.457V21.4358H485.364V7.60059Z"
                          fill="currentColor"
                        />
                        <path
                          d="M454.464 78.7111C451.497 78.7111 448.788 78.1628 446.337 77.0663C443.951 75.9698 442.145 74.5508 440.919 72.8093V77.9371H426.794V7.40637H440.919V32.6581C442.403 30.9166 444.338 29.5298 446.724 28.4978C449.111 27.4658 451.755 26.9498 454.658 26.9498C459.431 26.9498 463.591 28.0141 467.139 30.1426C470.751 32.2711 473.524 35.3026 475.459 39.2371C477.459 43.1071 478.458 47.6221 478.458 52.7821C478.458 58.0066 477.459 62.5861 475.459 66.5206C473.524 70.3906 470.751 73.3898 467.139 75.5183C463.527 77.6468 459.302 78.7111 454.464 78.7111ZM452.142 66.6173C454.529 66.6173 456.625 66.0368 458.431 64.8758C460.237 63.7148 461.624 62.1023 462.591 60.0383C463.559 57.9098 464.043 55.4911 464.043 52.7821C464.043 48.6541 462.946 45.3323 460.753 42.8168C458.56 40.3013 455.69 39.0436 452.142 39.0436C449.756 39.0436 447.66 39.6241 445.854 40.7851C444.048 41.9461 442.629 43.5586 441.597 45.6226C440.629 47.6866 440.145 50.0731 440.145 52.7821C440.145 55.5556 440.629 57.9743 441.597 60.0383C442.629 62.1023 444.048 63.7148 445.854 64.8758C447.66 66.0368 449.756 66.6173 452.142 66.6173Z"
                          fill="currentColor"
                        />
                        <path
                          d="M396.851 78.7111C393.884 78.7111 391.175 78.1628 388.724 77.0663C386.338 75.9698 384.532 74.5508 383.306 72.8093V77.9371H369.181V7.40637H383.306V32.6581C384.79 30.9166 386.725 29.5298 389.111 28.4978C391.498 27.4658 394.142 26.9498 397.045 26.9498C401.818 26.9498 405.978 28.0141 409.525 30.1426C413.137 32.2711 415.911 35.3026 417.846 39.2371C419.845 43.1071 420.845 47.6221 420.845 52.7821C420.845 58.0066 419.845 62.5861 417.846 66.5206C415.911 70.3906 413.137 73.3898 409.525 75.5183C405.913 77.6468 401.689 78.7111 396.851 78.7111ZM394.529 66.6173C396.916 66.6173 399.012 66.0368 400.818 64.8758C402.624 63.7148 404.011 62.1023 404.978 60.0383C405.946 57.9098 406.429 55.4911 406.429 52.7821C406.429 48.6541 405.333 45.3323 403.14 42.8168C400.947 40.3013 398.077 39.0436 394.529 39.0436C392.143 39.0436 390.046 39.6241 388.24 40.7851C386.434 41.9461 385.015 43.5586 383.983 45.6226C383.016 47.6866 382.532 50.0731 382.532 52.7821C382.532 55.5556 383.016 57.9743 383.983 60.0383C385.015 62.1023 386.434 63.7148 388.24 64.8758C390.046 66.0368 392.143 66.6173 394.529 66.6173Z"
                          fill="currentColor"
                        />
                        <path
                          d="M337.254 78.7111C332.223 78.7111 327.708 77.5823 323.709 75.3248C319.775 73.0673 316.711 69.9713 314.518 66.0368C312.325 62.1023 311.229 57.6841 311.229 52.7821C311.229 47.8801 312.325 43.4618 314.518 39.5273C316.776 35.5928 319.872 32.5291 323.806 30.3361C327.741 28.0786 332.223 26.9498 337.254 26.9498C342.221 26.9498 346.671 28.0786 350.606 30.3361C354.605 32.5936 357.733 35.6896 359.991 39.6241C362.248 43.4941 363.377 47.8801 363.377 52.7821C363.377 57.6841 362.248 62.1023 359.991 66.0368C357.733 69.9713 354.605 73.0673 350.606 75.3248C346.671 77.5823 342.221 78.7111 337.254 78.7111ZM337.254 66.6173C339.576 66.6173 341.608 66.0368 343.35 64.8758C345.156 63.7148 346.542 62.1023 347.51 60.0383C348.477 57.9098 348.961 55.4911 348.961 52.7821C348.961 50.1376 348.477 47.7833 347.51 45.7193C346.542 43.5908 345.156 41.9461 343.35 40.7851C341.544 39.6241 339.512 39.0436 337.254 39.0436C334.932 39.0436 332.868 39.6241 331.062 40.7851C329.321 41.9461 327.966 43.5908 326.999 45.7193C326.031 47.7833 325.548 50.1376 325.548 52.7821C325.548 55.4911 326.031 57.9098 326.999 60.0383C327.966 62.1023 329.321 63.7148 331.062 64.8758C332.804 66.0368 334.868 66.6173 337.254 66.6173Z"
                          fill="currentColor"
                        />
                        <path
                          d="M223.062 8.1806H243.574L259.537 50.8474C261.343 55.7494 262.762 60.2644 263.794 64.3924C264.891 60.2644 266.31 55.7494 268.051 50.8474L283.918 8.1806H303.849V77.9374H289.143V44.3651C289.143 39.1406 289.239 34.3676 289.433 30.0461C288.078 34.3676 286.563 38.8826 284.886 43.5911L272.018 77.9374H254.99L242.025 43.5911C240.219 38.6891 238.736 34.1741 237.575 30.0461C237.769 34.3676 237.865 39.1406 237.865 44.3651V77.9374H223.062V8.1806Z"
                          fill="currentColor"
                        />
                        <path
                          d="M182.754 40.1334H136.888V86H182.754V40.1334Z"
                          fill="currentColor"
                        />
                        <path
                          d="M0 85.9997V45.6183L45.6184 0H85.9997V40.3814L40.3814 85.9997H0Z"
                          fill="currentColor"
                        />
                        <path
                          d="M68.7989 85.9997V45.6184L114.417 0H154.799V40.3814L109.18 85.9997H68.7989Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="px-4 w-40 md:w-64 h-12 flex shrink-0 justify-center items-center">
                      <svg
                        className="w-20 md:w-28 h-full object-contain text-gray-800 dark:text-neutral-200"
                        width={345}
                        height={86}
                        viewBox="0 0 345 86"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.121 14.0845C10.6665 14.584 10.6966 15.3504 11.1741 15.8279L70.1872 74.8411C70.6647 75.3185 71.4311 75.3487 71.9306 74.8942C80.5836 67.0204 86.0151 55.668 86.0151 43.047C86.0151 19.2728 66.7424 0 42.9681 0C30.3472 0 18.9948 5.4315 11.121 14.0845ZM3.74525 25.2842C3.52718 25.765 3.63713 26.3288 4.01043 26.7021L59.313 82.0047C59.6863 82.378 60.2501 82.4879 60.7309 82.2699C62.0085 81.6904 63.2527 81.0503 64.4599 80.3534C65.1775 79.9391 65.2873 78.9601 64.7014 78.3742L7.64087 21.3137C7.05502 20.7278 6.076 20.8377 5.66175 21.5553C4.96478 22.7624 4.32472 24.0066 3.74525 25.2842ZM0.390217 41.1197C0.131279 40.8608 -0.00649288 40.5039 0.0178838 40.1385C0.13205 38.4273 0.346215 36.7435 0.654587 35.0928C0.839492 34.103 2.04893 33.7595 2.76091 34.4715L51.5437 83.2542C52.2556 83.9662 51.9121 85.1756 50.9224 85.3605C49.2717 85.6689 47.5878 85.8831 45.8766 85.9972C45.5112 86.0216 45.1544 85.8838 44.8954 85.6249L0.390217 41.1197ZM3.38389 53.1323C2.4951 52.2435 1.06079 53.0093 1.38629 54.2234C5.35206 69.0149 17.0002 80.6631 31.7917 84.6288C33.0058 84.9544 33.7717 83.52 32.8829 82.6312L3.38389 53.1323ZM173.442 23.6888C176.528 23.6888 179.029 21.1784 179.029 18.0817C179.029 14.985 176.528 12.4746 173.442 12.4746C170.357 12.4746 167.856 14.985 167.856 18.0817C167.856 21.1784 170.357 23.6888 173.442 23.6888ZM125.59 72.5889V12.478H135.518V63.7942H162.287V72.5889H125.59ZM196.253 48.0604V72.5889H186.647V29.9868H196.133V37.2888L196.253 37.2082C197.217 34.9221 198.772 33.0125 200.916 31.4794C203.059 29.9195 205.792 29.1396 209.116 29.1396C212.063 29.1396 214.742 29.7986 217.154 31.1164C219.566 32.4074 221.495 34.3034 222.942 36.8047C224.389 39.306 225.112 42.3721 225.112 46.0029V72.5889H215.506V47.3342C215.506 44.1068 214.648 41.6593 212.934 39.9919C211.246 38.2975 208.981 37.4502 206.141 37.4502C204.318 37.4502 202.657 37.8268 201.157 38.5798C199.656 39.3329 198.464 40.4894 197.58 42.0493C196.695 43.6092 196.253 45.6129 196.253 48.0604ZM283.235 71.8627C285.433 72.8041 287.952 73.2748 290.792 73.2748C293.123 73.2748 295.119 72.9789 296.78 72.3872C298.442 71.7686 299.809 70.9483 300.88 69.9263C301.979 68.9043 302.85 67.7881 303.493 66.5778H303.654V72.5889H312.859V43.2596C312.859 41.1886 312.456 39.2926 311.653 37.5713C310.849 35.8499 309.683 34.3573 308.155 33.0932C306.655 31.8291 304.833 30.8609 302.689 30.1885C300.546 29.4892 298.133 29.1396 295.454 29.1396C291.783 29.1396 288.608 29.7716 285.928 31.0357C283.275 32.2729 281.199 33.9404 279.698 36.0383C278.197 38.1361 277.38 40.5029 277.246 43.1385H286.531C286.638 41.9014 287.067 40.7987 287.817 39.8305C288.568 38.8623 289.586 38.1091 290.872 37.5713C292.159 37.0065 293.645 36.724 295.334 36.724C297.022 36.724 298.455 37.0065 299.635 37.5713C300.84 38.1361 301.765 38.9026 302.408 39.8708C303.051 40.839 303.373 41.9686 303.373 43.2596V43.5824C303.373 44.5506 303.037 45.2633 302.368 45.7205C301.724 46.1777 300.626 46.5139 299.072 46.7291C297.544 46.9442 295.454 47.1998 292.801 47.4956C290.631 47.7376 288.541 48.1008 286.531 48.5849C284.522 49.069 282.726 49.7817 281.145 50.723C279.591 51.6644 278.358 52.915 277.447 54.4749C276.536 56.0349 276.081 58.0386 276.081 60.486C276.081 63.3101 276.724 65.6768 278.01 67.5864C279.296 69.4691 281.038 70.8945 283.235 71.8627ZM298.791 64.722C297.236 65.5558 295.32 65.9727 293.043 65.9727C290.738 65.9727 288.902 65.4886 287.536 64.5204C286.169 63.5252 285.486 62.167 285.486 60.4457C285.486 59.101 285.861 58.0116 286.611 57.1779C287.389 56.3442 288.407 55.6852 289.666 55.2011C290.926 54.717 292.292 54.3808 293.766 54.1925C294.838 54.0312 295.883 53.8698 296.902 53.7084C297.919 53.5202 298.871 53.3454 299.755 53.184C300.64 52.9957 301.39 52.8074 302.006 52.6192C302.649 52.4309 303.118 52.2292 303.412 52.014V56.7745C303.412 58.442 303.024 59.975 302.247 61.3736C301.496 62.7453 300.345 63.8614 298.791 64.722ZM321.24 72.5889V29.9868H330.484V37.0065H330.605C331.382 34.5859 332.601 32.7436 334.263 31.4794C335.95 30.1885 338.162 29.543 340.895 29.543C341.565 29.543 342.168 29.5699 342.703 29.6237C343.267 29.6506 343.735 29.6775 344.111 29.7043V38.3781C343.762 38.3243 343.145 38.2571 342.262 38.1764C341.377 38.0957 340.44 38.0554 339.448 38.0554C337.866 38.0554 336.42 38.4184 335.107 39.1446C333.794 39.8708 332.748 40.987 331.972 42.4931C331.221 43.9724 330.846 45.8416 330.846 48.1008V72.5889H321.24ZM168.619 72.5889V29.9868H178.225V72.5889H168.619ZM241.09 70.6928C244.172 72.6024 247.83 73.5571 252.064 73.5571C255.333 73.5571 258.307 72.9654 260.987 71.782C263.693 70.5717 265.944 68.9177 267.739 66.8199C269.535 64.6952 270.701 62.2477 271.237 59.4774H262.193C261.79 60.7415 261.134 61.8577 260.223 62.8259C259.339 63.7672 258.227 64.5069 256.887 65.0448C255.547 65.5827 253.993 65.8516 252.224 65.8516C249.84 65.8516 247.789 65.3137 246.075 64.2379C244.387 63.1621 243.101 61.6694 242.216 59.7599C241.414 58.0023 240.975 56.012 240.901 53.7891H271.799V51.2071C271.799 47.926 271.317 44.9406 270.352 42.251C269.388 39.5346 268.021 37.1947 266.252 35.2314C264.484 33.2411 262.354 31.7081 259.861 30.6323C257.396 29.5565 254.65 29.0186 251.621 29.0186C247.683 29.0186 244.199 29.9734 241.171 31.8829C238.143 33.7925 235.772 36.4282 234.056 39.7901C232.342 43.1521 231.484 46.998 231.484 51.3282C231.484 55.6314 232.315 59.464 233.976 62.8259C235.637 66.1609 238.009 68.7832 241.09 70.6928ZM261.308 42.4931C260.424 40.6642 259.165 39.2522 257.53 38.2571C255.895 37.262 253.967 36.7644 251.742 36.7644C249.544 36.7644 247.629 37.262 245.994 38.2571C244.387 39.2522 243.127 40.6642 242.216 42.4931C241.566 43.8176 241.155 45.3238 240.983 47.0115H262.541C262.369 45.3238 261.958 43.8176 261.308 42.4931Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="px-4 w-40 md:w-64 h-12 flex shrink-0 justify-center items-center">
                      <svg
                        className="w-20 md:w-28 h-full object-contain text-gray-800 dark:text-neutral-200"
                        width={387}
                        height={86}
                        viewBox="0 0 387 86"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M63.2126 66.2965H64.2891V86H61.0656C40.1336 86 28.0226 74.0603 28.0226 54.5676V44.5439L34.8242 42.8336C36.8161 42.3291 38.6264 41.2753 40.0494 39.7914C41.4724 38.3078 42.4506 36.4541 42.8731 34.4411C43.2952 32.4286 43.1445 30.3374 42.4377 28.406C41.7309 26.475 40.4969 24.7811 38.8759 23.5174C37.2545 22.2537 35.3115 21.4709 33.268 21.2584C31.2241 21.0458 29.1622 21.4117 27.3158 22.3147C25.4699 23.2177 23.9142 24.6209 22.8257 26.3655C21.7371 28.1102 21.16 30.1253 21.1596 32.1821V75.1265H1.46393e-05V31.438C-0.00127354 30.1232 0.0824569 28.8101 0.249491 27.506C2.2247 12.0011 15.7506 0 32.1443 0C47.0073 0 59.5177 9.86829 63.2126 23.2744C65.1333 30.2958 64.5102 37.7715 61.4538 44.3773C58.8641 49.9521 54.7128 54.6535 49.5038 57.9109C51.2514 65.0027 54.9687 66.3132 63.2126 66.3132"
                          fill="currentColor"
                        />
                        <path
                          d="M115.616 28.4335V40.4732H113.646C109.508 40.4732 106.278 41.6116 103.96 43.8886C101.641 46.1657 100.485 49.2586 100.492 53.1682V74.8766H88.8417V29.1776H100.492V35.0865C103.991 30.6436 108.38 28.4223 113.657 28.4223L115.616 28.4335Z"
                          fill="currentColor"
                        />
                        <path
                          d="M165.663 56.2452H130.306C131.034 59.0062 132.687 61.4332 134.989 63.1202C137.436 64.8589 140.383 65.7498 143.383 65.6584C145.908 65.6867 148.407 65.1401 150.69 64.0589C152.727 63.1323 154.523 61.7466 155.938 60.0106L163.705 66.8409C161.263 69.7458 158.188 72.052 154.717 73.5828C151.032 75.2076 147.043 76.0239 143.017 75.9762C138.492 76.0428 134.023 74.9594 130.029 72.8275C126.256 70.8257 123.108 67.8178 120.936 64.1366C118.803 60.4318 117.671 56.2345 117.652 51.9586C117.633 47.6827 118.726 43.4755 120.825 39.7514C122.902 36.1527 125.927 33.1942 129.569 31.1992C133.349 29.1107 137.606 28.0389 141.924 28.0896C148.774 28.0896 154.49 30.3718 159.072 34.9366C163.655 39.5015 165.95 45.2253 165.957 52.108C165.952 53.492 165.853 54.8742 165.663 56.2452ZM149.241 40.8567C147.13 39.1984 144.524 38.2971 141.841 38.2971C139.157 38.2971 136.551 39.1984 134.44 40.8567C132.309 42.6099 130.817 45.0192 130.196 47.7098H153.497C152.877 45.0175 151.382 42.6069 149.247 40.8567H149.241Z"
                          fill="currentColor"
                        />
                        <path
                          d="M240.619 32.7266C243.737 35.8178 245.296 39.955 245.296 45.1382V74.9045H233.645V48.5982C233.645 45.7917 232.835 43.552 231.215 41.8786C229.595 40.2049 227.43 39.3645 224.719 39.3572C221.863 39.3572 219.546 40.2199 217.767 41.9452C215.988 43.6705 215.099 45.9471 215.099 48.776V74.877H203.448V48.5982C203.448 45.8252 202.625 43.5928 200.979 41.9005C199.333 40.2087 197.133 39.3611 194.377 39.3572C193.109 39.307 191.844 39.5123 190.657 39.9605C189.469 40.4088 188.384 41.0911 187.465 41.9675C186.574 42.8564 185.878 43.9204 185.42 45.0922C184.962 46.264 184.751 47.5183 184.801 48.776V74.877H173.173V29.1721H184.824V33.8928C188.26 30.0089 192.763 28.0689 198.333 28.0728C201.279 28.0136 204.195 28.683 206.821 30.0218C209.247 31.2795 211.281 33.1791 212.702 35.5142C216.474 30.5534 221.652 28.0728 228.236 28.0728C233.403 28.084 237.53 29.6349 240.619 32.7266Z"
                          fill="currentColor"
                        />
                        <path
                          d="M301.077 52.0355C301.077 58.8332 298.73 64.5235 294.036 69.1068C289.343 73.6902 283.51 75.9763 276.538 75.9655C269.57 75.9655 263.732 73.6756 259.023 69.0957C254.315 64.5162 251.957 58.8255 251.95 52.0248C251.95 45.227 254.308 39.535 259.023 34.9478C263.739 30.3606 269.577 28.0707 276.538 28.0784C283.506 28.0784 289.339 30.3679 294.036 34.9478C298.733 39.5277 301.08 45.2236 301.077 52.0355ZM285.543 61.0712C287.817 58.6125 289.082 55.3843 289.082 52.0329C289.082 48.6815 287.817 45.4533 285.543 42.9946C284.367 41.8159 282.971 40.8803 281.434 40.2422C279.897 39.6042 278.249 39.2757 276.585 39.2757C274.922 39.2757 273.274 39.6042 271.737 40.2422C270.2 40.8803 268.804 41.8159 267.628 42.9946C265.327 45.4314 264.044 48.6575 264.044 52.0106C264.044 55.3641 265.327 58.5902 267.628 61.0265C270.028 63.3521 273.237 64.6523 276.577 64.6523C279.917 64.6523 283.126 63.3521 285.526 61.0265L285.543 61.0712Z"
                          fill="currentColor"
                        />
                        <path
                          d="M322.355 39.818V58.822C322.355 62.7317 324.454 64.6862 328.651 64.6862C330.735 64.6094 332.778 64.0868 334.643 63.1537V74.0161C332.011 75.3777 329.078 76.054 326.116 75.9818C321.012 75.9818 317.169 74.6194 314.587 71.8945C312.006 69.1695 310.711 65.4415 310.704 60.7101V39.8291H303.442V29.1776H310.704V21.5641L322.355 17.5767V29.1776H334.643V39.818H322.355Z"
                          fill="currentColor"
                        />
                        <path
                          d="M386.208 56.2453H350.824C351.552 59.0062 353.205 61.4332 355.506 63.1202C357.953 64.8597 360.901 65.7507 363.9 65.658C366.422 65.6876 368.921 65.1405 371.201 64.0589C373.241 63.1336 375.04 61.7479 376.457 60.0102L384.22 66.8409C381.781 69.7458 378.707 72.052 375.233 73.5828C371.549 75.2111 367.56 76.0312 363.534 75.9874C359.009 76.0544 354.54 74.9711 350.547 72.8387C346.772 70.8351 343.624 67.8277 341.448 64.1478C339.317 60.4417 338.187 56.2448 338.169 51.9689C338.15 47.6935 339.244 43.4867 341.343 39.7626C343.419 36.1621 346.444 33.2019 350.086 31.2048C353.867 29.1162 358.124 28.0445 362.441 28.0947C369.29 28.0947 375.006 30.3791 379.583 34.9478C384.165 39.5166 386.453 45.2438 386.453 52.13C386.462 53.5057 386.38 54.8802 386.208 56.2453ZM369.801 40.8567C367.693 39.1984 365.087 38.2971 362.402 38.2971C359.719 38.2971 357.113 39.1984 355.001 40.8567C352.87 42.6099 351.378 45.0192 350.757 47.7094H374.057C373.434 45.0102 371.927 42.5957 369.78 40.8455L369.801 40.8567Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="px-4 w-40 md:w-64 h-12 flex shrink-0 justify-center items-center">
                      <svg
                        className="w-20 md:w-28 h-full object-contain text-gray-800 dark:text-neutral-200"
                        width={356}
                        height={86}
                        viewBox="0 0 356 86"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M147.23 58.8125C144.542 62.248 141.123 65.0424 137.221 66.9932C133.32 68.9441 129.033 70.0024 124.672 70.0916C109.364 70.0916 97.2797 59.2153 97.2797 45.1164C97.2638 41.6969 97.9737 38.313 99.3625 35.1882C100.751 32.0635 102.787 29.2689 105.336 26.9893C107.768 24.6072 110.676 22.7658 113.87 21.5857C117.063 20.4055 120.469 19.9133 123.866 20.1413C132.728 20.1413 141.188 24.1695 146.424 31.4204L136.354 38.6712C135.057 36.5035 133.231 34.7009 131.047 33.4325C128.862 32.1642 126.391 31.4718 123.866 31.4204C120.127 31.4204 116.541 32.9058 113.897 35.5498C111.253 38.1939 109.767 41.78 109.767 45.5192C110.17 53.5757 116.615 59.6181 124.269 59.6181C129.506 59.6181 134.34 57.2012 137.159 52.7701L147.23 58.8125Z"
                          fill="currentColor"
                        />
                        <path d="M152.87 0H165.357V68.8831H152.87V0Z" fill="currentColor" />
                        <path
                          d="M198.792 59.2153C206.848 59.2153 213.696 52.7701 214.099 44.7136C213.696 36.6571 206.848 30.2119 198.792 30.2119C190.735 30.2119 183.887 36.6571 183.484 44.7136C183.887 52.7701 190.332 59.2153 198.792 59.2153ZM198.792 19.7384C205.64 19.3356 212.488 21.7526 217.724 26.5865C222.961 31.4204 225.781 37.8656 226.184 44.7136C226.053 48.1463 225.237 51.5181 223.784 54.6311C222.331 57.744 220.271 60.5352 217.724 62.8407C215.189 65.1939 212.207 67.0128 208.954 68.1893C205.701 69.3658 202.245 69.8757 198.792 69.6888C183.484 69.6888 171.399 58.8125 171.399 44.7136C171.399 30.6147 183.484 19.7384 198.792 19.7384Z"
                          fill="currentColor"
                        />
                        <path
                          d="M223.767 20.5441H238.671L250.756 46.3249L263.646 20.5441H277.343L250.756 71.7029L223.767 20.5441Z"
                          fill="currentColor"
                        />
                        <path
                          d="M313.194 37.8656C312.278 35.5377 310.663 33.5512 308.571 32.1804C306.478 30.8095 304.012 30.1217 301.512 30.2119C296.275 30.2119 291.441 33.0317 289.024 37.8656H313.194ZM321.25 63.2436C316.044 67.5407 309.47 69.8276 302.721 69.6888C287.413 69.6888 275.328 58.8125 275.328 44.7136C275.328 37.8656 278.148 31.4204 282.982 26.5865C285.414 24.2044 288.322 22.363 291.515 21.1828C294.709 20.0027 298.115 19.5105 301.512 19.7384C308.36 19.3356 314.805 22.1554 319.639 26.9893C324.473 31.8232 326.89 38.2684 326.487 45.1164V48.339H287.816C288.661 50.9049 290.152 53.2096 292.148 55.0306C294.143 56.8517 296.574 58.1275 299.206 58.7349C301.838 59.3423 304.582 59.2608 307.174 58.4982C309.765 57.7356 312.116 56.3177 314 54.3814L321.25 63.2436ZM332.53 41.8938C332.53 30.2119 341.392 20.9469 355.491 20.9469V32.226C352.671 32.226 349.448 33.4345 347.434 35.4486C345.42 37.4627 344.614 40.6853 345.017 43.5051V68.8831H332.53V41.8938Z"
                          fill="currentColor"
                        />
                        <path
                          d="M40.0785 22.5582C39.8884 18.7732 38.6343 15.1186 36.4603 12.0144C34.2863 8.91017 31.2806 6.4823 27.7885 5.00977C24.2965 3.53723 20.4599 3.07979 16.7196 3.68999C12.9792 4.3002 9.48695 5.9533 6.64401 8.45933C1.00445 14.0989 -0.606846 22.5582 2.21293 29.8091C5.03271 37.0599 12.2836 41.8938 20.3401 41.8938H40.0785V22.5582ZM45.7181 22.5582C45.9081 18.7732 47.1622 15.1186 49.3363 12.0144C51.5103 8.91017 54.516 6.4823 58.008 5.00977C61.5 3.53723 65.3366 3.07979 69.077 3.68999C72.8173 4.3002 76.3096 5.9533 79.1525 8.45933C84.7921 14.0989 86.4034 22.5582 83.5836 29.8091C80.7638 37.0599 73.513 41.8938 65.4565 41.8938H45.7181V22.5582ZM45.7181 66.869C45.9081 70.654 47.1622 74.3086 49.3363 77.4128C51.5103 80.517 54.516 82.9449 58.008 84.4174C61.5 85.8899 65.3366 86.3474 69.077 85.7372C72.8173 85.127 76.3096 83.4739 79.1525 80.9679C84.7921 75.3283 86.4034 66.869 83.5836 59.6181C80.7638 52.3673 73.513 47.5334 65.4565 47.5334H45.7181V66.869ZM20.3401 80.9679C27.9937 80.9679 34.4389 74.9255 34.4389 66.869V52.7701H20.3401C12.6864 52.7701 6.24118 58.8125 6.24118 66.869C6.24118 74.9255 12.6864 80.9679 20.3401 80.9679ZM40.0785 66.869C39.8884 70.654 38.6343 74.3086 36.4603 77.4128C34.2863 80.517 31.2806 82.9449 27.7885 84.4174C24.2965 85.8899 20.4599 86.3474 16.7196 85.7372C12.9792 85.127 9.48695 83.4739 6.64401 80.9679C1.00445 75.3283 -0.606846 66.869 2.21293 59.6181C5.03271 52.3673 12.2836 47.5334 20.3401 47.5334H40.0785V66.869Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* End Brands */}
                  {/* Brands */}
                  <div className="flex items-center justify-around">
                    <div className="px-4 w-40 md:w-64 h-12 flex shrink-0 justify-center items-center">
                      <svg
                        className="w-20 md:w-28 h-full object-contain text-gray-800 dark:text-neutral-200"
                        width={391}
                        height={86}
                        viewBox="0 0 391 86"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M164.997 67.2927L150.691 9.90208H163.464L173.069 49.6471H173.24L187.069 9.90208H198.037L211.866 49.6471H212.036L221.71 9.90208H234.415L220.109 67.2927H207.097L192.621 28.918H192.45L177.906 67.2927H164.997Z"
                          fill="currentColor"
                        />
                        <path
                          d="M238.298 9.90208H250.322V28.918H250.492C251.548 26.965 253.66 25.3889 256.112 24.3268C258.394 23.3332 261.698 22.7164 264.628 22.7164C267.864 22.7164 272.292 23.5387 275.459 25.1834C278.661 26.9308 281.079 29.2606 282.68 32.2073C284.418 35.2567 285.269 38.6828 285.269 42.5204V67.2927H273.245V44.1309C273.245 40.7389 272.257 38.1347 270.248 36.2844C268.238 34.4344 265.513 33.5092 262.039 33.5092C258.565 33.5092 255.805 34.5029 253.592 36.4557C251.411 38.4089 250.356 40.9787 250.356 44.1309V67.2927H238.332V9.90208H238.298Z"
                          fill="currentColor"
                        />
                        <path
                          d="M289.493 45.6382C289.493 42.2118 290.14 39.0596 291.434 36.2159C292.728 33.372 294.5 30.9735 296.748 28.9863C298.996 26.999 301.584 25.4572 304.514 24.3608C307.443 23.2644 310.543 22.7162 313.779 22.7162C317.015 22.7162 320.285 23.2644 323.248 24.3951C326.211 25.5257 328.766 27.0675 330.981 29.0548C333.161 31.0421 334.897 33.4404 336.191 36.25C337.451 39.0596 338.099 42.1774 338.099 45.6038C338.099 49.0303 337.451 52.251 336.157 55.0605C334.864 57.8701 333.091 60.2685 330.878 62.2557C328.664 64.243 326.075 65.7847 323.112 66.8812C320.148 67.9774 317.049 68.5258 313.813 68.5258C310.577 68.5258 307.375 67.9774 304.412 66.8468C301.448 65.7162 298.894 64.1742 296.68 62.1529C294.5 60.1312 292.728 57.7328 291.434 54.9233C290.14 52.0796 289.493 48.9959 289.493 45.6382ZM326.075 45.6382C326.075 41.9376 324.951 38.9567 322.703 36.7296C320.455 34.5025 317.491 33.372 313.813 33.372C312.007 33.372 310.373 33.6803 308.84 34.2627C307.307 34.8796 306.012 35.7019 304.923 36.764C303.833 37.8261 303.015 39.128 302.402 40.6357C301.789 42.1774 301.516 43.8223 301.516 45.6382C301.516 47.4541 301.823 49.0987 302.402 50.6064C303.015 52.1137 303.867 53.4159 304.957 54.478C306.081 55.5742 307.375 56.3965 308.874 57.0134C310.373 57.6303 312.007 57.9041 313.813 57.9041C315.618 57.9041 317.253 57.5959 318.786 57.0134C320.319 56.3965 321.613 55.5742 322.703 54.5121C323.793 53.45 324.644 52.1481 325.224 50.6404C325.803 49.0987 326.075 47.4197 326.075 45.6382Z"
                          fill="currentColor"
                        />
                        <path
                          d="M342.492 22.6822H354.039V28.9181H354.211C354.958 27.2735 358.127 24.5325 360.648 23.8129C363.135 23.0934 365.655 22.7165 368.209 22.7165C371.447 22.7165 374.444 23.3332 377.17 24.5325C379.892 25.7317 382.21 27.3763 384.218 29.4321C386.196 31.5221 387.728 33.9204 388.852 36.6959C389.977 39.471 390.519 42.4519 390.519 45.6042C390.519 48.7564 389.977 51.9086 388.852 54.6838C387.728 57.4593 386.196 59.8917 384.218 61.9134C382.244 63.9691 379.892 65.5796 377.133 66.7443C374.408 67.9092 371.411 68.4917 368.245 68.4917C367.223 68.4917 366.066 68.3892 364.802 68.2179C363.509 68.0121 362.282 67.7379 361.058 67.3612C359.831 66.9844 358.673 66.5045 357.548 65.922C356.424 65.3395 355.504 64.6885 354.757 63.9007H354.585V85.6577H342.561L342.492 22.6822ZM378.43 45.6386C378.43 41.9379 377.305 38.957 375.089 36.7643C372.876 34.5713 369.912 33.4408 366.234 33.4408C364.941 33.4408 363.578 33.6465 362.215 34.0917C360.82 34.5373 359.559 35.1538 358.435 35.9761C357.31 36.7987 356.358 37.7924 355.64 38.9229C354.925 40.0535 354.552 41.3898 354.552 42.8631V48.3452C354.552 50.264 355.097 51.9086 356.219 53.3475C357.31 54.7522 358.739 55.8487 360.409 56.6026C362.146 57.4593 364.124 57.9045 366.337 57.9045C369.982 57.9045 372.909 56.7739 375.125 54.5124C377.305 52.2513 378.43 49.2704 378.43 45.6386Z"
                          fill="currentColor"
                        />
                        <path
                          d="M20.827 0.0678406C12.2513 0.0678406 6.3639 3.8324 1.87183 8.11027C1.87183 8.11027 0.0681903 9.82144 0.102221 9.88987L18.8873 28.7811L37.6723 9.88987C34.099 4.96174 27.395 0.0678406 20.827 0.0678406Z"
                          fill="currentColor"
                        />
                        <path
                          d="M67.2103 0.0678406C58.6345 0.0678406 52.7471 3.8666 48.2553 8.11027C48.2553 8.11027 46.6216 9.7872 46.5197 9.88987L23.3105 33.2301L42.0616 52.0869L84.0217 9.88987C80.4484 4.96174 73.7443 0.0678406 67.2103 0.0678406Z"
                          fill="currentColor"
                        />
                        <path
                          d="M113.698 0.0678406C105.122 0.0678406 99.2347 3.8666 94.7426 8.11027C94.7426 8.11027 93.0411 9.78724 92.9729 9.88991L46.521 56.5701L51.4214 61.4983C59.0102 69.1301 71.4657 69.1301 79.0886 61.4983L130.441 9.88991C126.902 4.96174 120.266 0.0678406 113.698 0.0678406Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="px-4 w-40 md:w-64 h-12 flex shrink-0 justify-center items-center">
                      <svg
                        className="w-20 md:w-28 h-full object-contain text-gray-800 dark:text-neutral-200"
                        width={296}
                        height={86}
                        viewBox="0 0 296 86"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M43.0002 56.4378C50.4215 56.4378 56.4377 50.4216 56.4377 43.0002C56.4377 35.5789 50.4215 29.5627 43.0002 29.5627C35.5788 29.5627 29.5627 35.5789 29.5627 43.0002C29.5627 50.4216 35.5788 56.4378 43.0002 56.4378Z"
                          fill="currentColor"
                        />
                        <path
                          d="M67.2113 74.8161C68.3546 75.9594 68.2399 77.8519 66.8964 78.7521C60.0618 83.3302 51.8411 86 42.9969 86C34.1526 86 25.9319 83.3302 19.0971 78.7521C17.7538 77.8519 17.639 75.9594 18.7823 74.8161L28.6022 64.9958C29.4898 64.1086 30.8666 63.9681 31.9838 64.5405C35.2869 66.2328 39.0304 67.1874 42.9969 67.1874C46.9633 67.1874 50.7068 66.2328 54.0102 64.5405C55.1273 63.9681 56.5037 64.1086 57.3915 64.9958L67.2113 74.8161Z"
                          fill="currentColor"
                        />
                        <path
                          d="M66.8998 7.24822C68.2433 8.14802 68.358 10.0408 67.2146 11.1841L57.3948 21.0041C56.5071 21.8917 55.1301 22.0318 54.0131 21.4596C50.7097 19.7674 46.9665 18.8126 43 18.8126C29.6416 18.8126 18.8125 29.6418 18.8125 43.0002C18.8125 46.9667 19.7673 50.7102 21.4595 54.0136C22.0317 55.1306 21.8916 56.5071 21.004 57.3948L11.184 67.2151C10.0407 68.358 8.14797 68.2433 7.24817 66.9002C2.67011 60.0651 0 51.8444 0 43.0002C0 19.2519 19.2518 0 43 0C51.8444 0 60.0651 2.67012 66.8998 7.24822Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M140.423 8.73445C140.423 8.36335 140.723 8.06254 141.094 8.06254H151.173C151.543 8.06254 151.844 8.36335 151.844 8.73445V77.2662C151.844 77.6369 151.543 77.9379 151.173 77.9379H141.094C140.723 77.9379 140.423 77.6369 140.423 77.2662V8.73445ZM126.199 63.4019C125.932 63.1707 125.532 63.1879 125.274 63.4306C123.704 64.9132 121.864 66.0995 119.848 66.9265C117.637 67.8348 115.259 68.292 112.861 68.2705C110.836 68.3302 108.82 67.9839 106.937 67.2524C105.054 66.5209 103.344 65.4201 101.912 64.0173C99.311 61.3618 97.8141 57.5706 97.8141 53.0513C97.8141 44.0041 103.833 37.8159 112.861 37.8159C115.283 37.7825 117.682 38.273 119.888 39.2517C121.887 40.1394 123.683 41.4084 125.17 42.9825C125.424 43.2517 125.846 43.2829 126.127 43.0405L132.93 37.1532C133.209 36.9126 133.242 36.4927 132.997 36.2189C127.879 30.5 119.862 27.547 112.237 27.547C96.8857 27.547 86.0005 37.9023 86.0005 53.1373C86.0005 60.6724 88.7057 67.0173 93.268 71.4974C97.8303 75.9781 104.33 78.6097 111.829 78.6097C121.232 78.6097 128.801 75.0039 133.238 70.378C133.499 70.1066 133.47 69.6747 133.185 69.4287L126.199 63.4019ZM207.361 56.4048C207.324 56.7412 207.038 56.993 206.699 56.993H171.395C170.966 56.993 170.646 57.391 170.758 57.8047C172.514 64.3159 177.751 68.2557 184.899 68.2557C187.308 68.3064 189.696 67.8104 191.879 66.8066C193.913 65.8716 195.717 64.5185 197.171 62.8415C197.347 62.6389 197.653 62.6088 197.859 62.7808L204.957 68.9604C205.229 69.1969 205.267 69.6064 205.034 69.8811C200.749 74.9365 193.805 78.6097 184.278 78.6097C169.62 78.6097 158.563 68.4592 158.563 53.0379C158.563 45.4719 161.168 39.1275 165.509 34.6476C167.801 32.344 170.548 30.5259 173.581 29.3055C176.614 28.0852 179.869 27.4882 183.146 27.5516C198.003 27.5516 207.61 37.9999 207.61 52.4268C207.591 53.756 207.508 55.0838 207.361 56.4048ZM170.97 47.0417C170.845 47.4564 171.165 47.8602 171.599 47.8602H195.073C195.507 47.8602 195.827 47.454 195.707 47.037C194.107 41.4996 190.048 37.8041 183.743 37.8041C181.889 37.7453 180.044 38.081 178.333 38.7877C176.623 39.4949 175.088 40.5567 173.834 41.9002C172.515 43.396 171.539 45.1497 170.97 47.0417ZM242.54 27.5544C242.914 27.5503 243.219 27.8523 243.219 28.2263V39.5101C243.219 39.9011 242.887 40.2093 242.496 40.1804C241.408 40.0997 240.378 40.0311 239.703 40.0311C230.912 40.0311 225.751 46.2185 225.751 54.3404V77.2662C225.751 77.6369 225.45 77.9379 225.079 77.9379H215.001C214.629 77.9379 214.328 77.6369 214.328 77.2662V28.9238C214.328 28.5528 214.629 28.252 215.001 28.252H225.079C225.45 28.252 225.751 28.5528 225.751 28.9238V35.709C225.751 35.7473 225.781 35.7783 225.82 35.7783C225.842 35.7783 225.863 35.7679 225.875 35.7504C229.815 30.4894 235.63 27.5628 241.773 27.5628L242.54 27.5544ZM269.84 57.1067C269.881 57.0623 269.939 57.0374 269.999 57.0374C270.074 57.0374 270.144 57.0761 270.184 57.1401L282.927 77.6212C283.05 77.818 283.265 77.9379 283.498 77.9379H294.954C295.481 77.9379 295.802 77.3598 295.525 76.9121L278.043 48.7045C277.885 48.4498 277.915 48.1216 278.116 47.8994L294.96 29.3153C295.351 28.8834 295.045 28.1922 294.462 28.1922H282.511C282.322 28.1922 282.143 28.2712 282.015 28.4099L262.527 49.6533C262.113 50.1048 261.36 49.812 261.36 49.199V8.7344C261.36 8.36335 261.059 8.06254 260.688 8.06254H250.61C250.239 8.06254 249.938 8.36335 249.938 8.7344V77.2662C249.938 77.6369 250.239 77.9379 250.61 77.9379H260.688C261.059 77.9379 261.36 77.6369 261.36 77.2662V66.4817C261.36 66.3121 261.424 66.1482 261.54 66.024L269.84 57.1067Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="px-4 w-40 md:w-64 h-12 flex shrink-0 justify-center items-center">
                      <svg
                        className="w-20 md:w-28 h-full object-contain text-gray-800 dark:text-neutral-200"
                        width={380}
                        height={87}
                        viewBox="0 0 380 87"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M189.522 21.5345C174.687 21.5345 163.991 31.2095 163.991 45.722C163.991 60.2345 176.031 69.9095 190.866 69.9095C199.829 69.9095 207.73 66.362 212.622 60.3824L202.342 54.443C199.627 57.4127 195.502 59.1461 190.866 59.1461C184.43 59.1461 178.961 55.7867 176.932 50.4117H214.583C214.879 48.9067 215.054 47.348 215.054 45.7086C215.054 31.2095 204.357 21.5345 189.522 21.5345ZM176.811 41.0189C178.49 35.6574 183.086 32.2845 189.509 32.2845C195.946 32.2845 200.541 35.6574 202.207 41.0189H176.811ZM334.217 21.5345C319.382 21.5345 308.686 31.2095 308.686 45.722C308.686 60.2345 320.726 69.9095 335.561 69.9095C344.524 69.9095 352.425 66.362 357.317 60.3824L347.037 54.443C344.323 57.4127 340.197 59.1461 335.561 59.1461C329.125 59.1461 323.656 55.7867 321.627 50.4117H359.278C359.574 48.9067 359.749 47.348 359.749 45.7086C359.749 31.2095 349.052 21.5345 334.217 21.5345ZM321.519 41.0189C323.199 35.6574 327.794 32.2845 334.217 32.2845C340.654 32.2845 345.25 35.6574 346.916 41.0189H321.519ZM269.073 45.722C269.073 53.7845 274.34 59.1595 282.51 59.1595C288.046 59.1595 292.198 56.6467 294.335 52.5483L304.655 58.5011C300.382 65.623 292.373 69.9095 282.51 69.9095C267.662 69.9095 256.979 60.2345 256.979 45.722C256.979 31.2095 267.675 21.5345 282.51 21.5345C292.373 21.5345 300.368 25.8211 304.655 32.943L294.335 38.8958C292.198 34.7974 288.046 32.2845 282.51 32.2845C274.353 32.2845 269.073 37.6595 269.073 45.722ZM379.905 6.7533V68.5658H367.811V6.7533H379.905ZM49.6516 0.0345459L99.3031 86.0345H0L49.6516 0.0345459ZM173.787 6.7533L136.552 71.2533L99.3166 6.7533H113.278L136.552 47.0658L159.826 6.7533H173.787ZM252.948 22.8783V35.8992C251.604 35.5095 250.179 35.2408 248.647 35.2408C240.84 35.2408 235.21 40.6158 235.21 48.6783V68.5658H223.116V22.8783H235.21V35.2408C235.21 28.4145 243.152 22.8783 252.948 22.8783Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="px-4 w-40 md:w-64 h-12 flex shrink-0 justify-center items-center">
                      <svg
                        className="w-20 md:w-28 h-full object-contain text-gray-800 dark:text-neutral-200"
                        width={376}
                        height={86}
                        viewBox="0 0 376 86"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M48.7857 5.80549e-07H37.1999C16.6612 0.025109 0.0179346 16.6361 0 37.1318C0.0251084 57.6239 16.6648 74.2277 37.1999 74.2528H48.8287C69.3674 74.2349 86.0143 57.6275 86.0394 37.1318C86.0179 16.6146 69.3459 -0.00358634 48.7857 5.80549e-07ZM4.6056 37.1318C4.6056 19.1793 19.1864 4.63071 37.1748 4.63071C38.9934 4.63071 40.812 4.77778 42.6054 5.07908C58.3018 7.66884 69.7943 21.2382 69.7369 37.1139C69.719 47.3043 62.3478 55.999 52.2794 57.7028C58.8685 52.9035 62.7603 45.2526 62.7532 37.1139C62.7747 25.4671 54.8799 15.291 43.5739 12.3964C41.4827 11.8548 39.3342 11.5858 37.1748 11.5858C23.0711 11.6288 11.6611 23.0424 11.6467 37.1139C11.6109 49.8654 18.1534 61.7345 28.9608 68.5353C14.6526 64.787 4.663 51.8956 4.63071 37.1318H4.6056ZM42.9749 17.0773C51.9314 19.6491 58.0973 27.8309 58.0902 37.1318C58.0938 46.4291 51.9278 54.6037 42.9749 57.1755C34.0219 54.6037 27.8596 46.4291 27.8596 37.1318C27.8524 27.8309 34.0183 19.6491 42.9749 17.0773ZM48.7857 69.6149H48.653C46.8846 69.6042 45.1163 69.4571 43.3694 69.1666C28.0892 66.6378 16.7366 53.6711 16.2774 38.2222V37.1318C16.2882 26.9378 23.6629 18.2395 33.7314 16.5393C27.1422 21.3386 23.2468 28.9895 23.2468 37.1318C23.2325 48.7749 31.1273 58.9474 42.4297 61.8421C44.5173 62.3837 46.6694 62.6563 48.8287 62.6491C62.9469 62.6348 74.3891 51.2212 74.4107 37.1318C74.4501 24.3803 67.9076 12.5076 57.093 5.71038C71.4012 9.46588 81.3764 22.368 81.38 37.1318C81.3764 45.7512 77.9402 54.019 71.8245 60.1096C65.7124 66.2038 57.423 69.6221 48.7857 69.6149Z"
                          fill="currentColor"
                        />
                        <path
                          d="M160.518 67.7784H107.536V61.8134C114.068 60.7158 115.352 58.4238 115.352 56.2178V18.86C115.352 14.6418 114.068 12.895 107.536 12.4394V6.47439H140.837V12.4394C134.305 12.895 133.017 14.6418 133.017 18.86V58.3879C133.017 60.5867 133.659 62.1506 139.18 62.1506H145.159C148.556 62.1506 152.606 60.497 155.457 51.501H161.433L160.518 67.7784ZM165.3 45.292C165.3 30.4278 176.064 19.4124 191.326 19.4124C207.428 19.4124 216.715 30.2449 216.715 43.4555C216.715 58.2408 205.774 69.0697 190.781 69.0697C174.41 69.0697 165.3 58.5134 165.3 45.292ZM199.426 48.6924C199.426 34.1009 194.364 25.3775 189.4 25.3775C184.708 25.3775 182.782 31.2528 182.782 39.6964C182.782 54.5678 187.929 63.1047 192.797 63.1047C197.41 63.1047 199.426 57.319 199.426 48.6924ZM222.418 45.292C222.418 30.4278 233.186 19.4124 248.448 19.4124C264.55 19.4124 273.836 30.2449 273.836 43.4555C273.836 58.2408 262.896 69.0697 247.896 69.0697C231.529 69.0697 222.418 58.5134 222.418 45.292ZM256.547 48.6924C256.547 34.1009 251.486 25.3775 246.522 25.3775C241.83 25.3775 239.893 31.2528 239.893 39.6964C239.893 54.5678 245.051 63.1047 249.919 63.1047C254.524 63.1047 256.547 57.319 256.547 48.6924ZM330.614 42.7274C330.614 58.786 320.868 69.0805 306.793 69.0805C303.956 69.1307 301.136 68.5998 298.511 67.5166V74.3066C298.511 77.707 299.892 79.0844 306.151 79.9991V86H276.071V80.035C280.852 78.9374 281.408 77.7393 281.408 74.3425V33.9323C281.408 31.5434 280.58 30.166 277.541 28.7958L276.071 28.1537V23.376L294.83 19.4303H298.511V25.3093C300.874 21.5682 305.032 19.3371 309.461 19.4303C324.082 19.4124 330.614 30.6574 330.614 42.7274ZM312.955 46.0309C312.955 36.4826 310.315 28.2255 303.941 28.2255C301.179 28.2255 300.72 28.039 298.511 29.6925V48.1365C298.511 59.0658 300.272 62.2797 305.042 62.2797C309.461 62.2797 312.955 56.8599 312.955 46.0309ZM375.07 24.8251L366.608 36.3929C362.559 28.3116 358.685 24.9219 354.101 24.9219C351.335 24.9219 347.752 26.5719 347.752 29.4199C347.752 39.0831 376.537 32.8096 375.992 54.1123C375.712 61.8134 368.262 69.0446 355.385 69.0446C344.161 69.0446 334.785 63.4419 332.497 61.4188L342.436 51.0526C347.956 59.6792 352.461 63.5351 356.873 63.5351C359.169 63.5351 363.219 62.5272 363.316 58.0292C363.316 47.6558 334.893 56.0098 334.979 35.1913C334.979 25.3703 343.168 19.3765 356.231 19.3765C366.511 19.4124 373.14 22.9886 375.07 24.8251Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="px-4 w-40 md:w-64 h-12 flex shrink-0 justify-center items-center">
                      <svg
                        className="w-20 md:w-28 h-full object-contain text-gray-800 dark:text-neutral-200"
                        width={558}
                        height={86}
                        viewBox="0 0 558 86"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M509.467 27.7238H523.592V34.5931C525.205 32.2066 527.365 30.3361 530.074 28.9816C532.783 27.6271 535.783 26.9498 539.072 26.9498C542.749 26.9498 545.974 27.7238 548.747 29.2718C551.521 30.7553 553.681 32.8838 555.229 35.6573C556.777 38.3663 557.551 41.5268 557.551 45.1388V77.9371H543.329V48.8153C543.329 45.9773 542.523 43.7198 540.91 42.0428C539.362 40.3658 537.266 39.5273 534.622 39.5273C532.235 39.5273 530.236 40.1723 528.623 41.4623C527.011 42.6878 525.753 44.5261 524.85 46.9771C524.011 49.4281 523.592 52.3951 523.592 55.8781V77.9371H509.467V27.7238Z"
                          fill="currentColor"
                        />
                        <path
                          d="M485.751 27.7245H499.876V77.9379H485.751V27.7245ZM485.364 7.60059H500.457V21.4358H485.364V7.60059Z"
                          fill="currentColor"
                        />
                        <path
                          d="M454.464 78.7111C451.497 78.7111 448.788 78.1628 446.337 77.0663C443.951 75.9698 442.145 74.5508 440.919 72.8093V77.9371H426.794V7.40637H440.919V32.6581C442.403 30.9166 444.338 29.5298 446.724 28.4978C449.111 27.4658 451.755 26.9498 454.658 26.9498C459.431 26.9498 463.591 28.0141 467.139 30.1426C470.751 32.2711 473.524 35.3026 475.459 39.2371C477.459 43.1071 478.458 47.6221 478.458 52.7821C478.458 58.0066 477.459 62.5861 475.459 66.5206C473.524 70.3906 470.751 73.3898 467.139 75.5183C463.527 77.6468 459.302 78.7111 454.464 78.7111ZM452.142 66.6173C454.529 66.6173 456.625 66.0368 458.431 64.8758C460.237 63.7148 461.624 62.1023 462.591 60.0383C463.559 57.9098 464.043 55.4911 464.043 52.7821C464.043 48.6541 462.946 45.3323 460.753 42.8168C458.56 40.3013 455.69 39.0436 452.142 39.0436C449.756 39.0436 447.66 39.6241 445.854 40.7851C444.048 41.9461 442.629 43.5586 441.597 45.6226C440.629 47.6866 440.145 50.0731 440.145 52.7821C440.145 55.5556 440.629 57.9743 441.597 60.0383C442.629 62.1023 444.048 63.7148 445.854 64.8758C447.66 66.0368 449.756 66.6173 452.142 66.6173Z"
                          fill="currentColor"
                        />
                        <path
                          d="M396.851 78.7111C393.884 78.7111 391.175 78.1628 388.724 77.0663C386.338 75.9698 384.532 74.5508 383.306 72.8093V77.9371H369.181V7.40637H383.306V32.6581C384.79 30.9166 386.725 29.5298 389.111 28.4978C391.498 27.4658 394.142 26.9498 397.045 26.9498C401.818 26.9498 405.978 28.0141 409.525 30.1426C413.137 32.2711 415.911 35.3026 417.846 39.2371C419.845 43.1071 420.845 47.6221 420.845 52.7821C420.845 58.0066 419.845 62.5861 417.846 66.5206C415.911 70.3906 413.137 73.3898 409.525 75.5183C405.913 77.6468 401.689 78.7111 396.851 78.7111ZM394.529 66.6173C396.916 66.6173 399.012 66.0368 400.818 64.8758C402.624 63.7148 404.011 62.1023 404.978 60.0383C405.946 57.9098 406.429 55.4911 406.429 52.7821C406.429 48.6541 405.333 45.3323 403.14 42.8168C400.947 40.3013 398.077 39.0436 394.529 39.0436C392.143 39.0436 390.046 39.6241 388.24 40.7851C386.434 41.9461 385.015 43.5586 383.983 45.6226C383.016 47.6866 382.532 50.0731 382.532 52.7821C382.532 55.5556 383.016 57.9743 383.983 60.0383C385.015 62.1023 386.434 63.7148 388.24 64.8758C390.046 66.0368 392.143 66.6173 394.529 66.6173Z"
                          fill="currentColor"
                        />
                        <path
                          d="M337.254 78.7111C332.223 78.7111 327.708 77.5823 323.709 75.3248C319.775 73.0673 316.711 69.9713 314.518 66.0368C312.325 62.1023 311.229 57.6841 311.229 52.7821C311.229 47.8801 312.325 43.4618 314.518 39.5273C316.776 35.5928 319.872 32.5291 323.806 30.3361C327.741 28.0786 332.223 26.9498 337.254 26.9498C342.221 26.9498 346.671 28.0786 350.606 30.3361C354.605 32.5936 357.733 35.6896 359.991 39.6241C362.248 43.4941 363.377 47.8801 363.377 52.7821C363.377 57.6841 362.248 62.1023 359.991 66.0368C357.733 69.9713 354.605 73.0673 350.606 75.3248C346.671 77.5823 342.221 78.7111 337.254 78.7111ZM337.254 66.6173C339.576 66.6173 341.608 66.0368 343.35 64.8758C345.156 63.7148 346.542 62.1023 347.51 60.0383C348.477 57.9098 348.961 55.4911 348.961 52.7821C348.961 50.1376 348.477 47.7833 347.51 45.7193C346.542 43.5908 345.156 41.9461 343.35 40.7851C341.544 39.6241 339.512 39.0436 337.254 39.0436C334.932 39.0436 332.868 39.6241 331.062 40.7851C329.321 41.9461 327.966 43.5908 326.999 45.7193C326.031 47.7833 325.548 50.1376 325.548 52.7821C325.548 55.4911 326.031 57.9098 326.999 60.0383C327.966 62.1023 329.321 63.7148 331.062 64.8758C332.804 66.0368 334.868 66.6173 337.254 66.6173Z"
                          fill="currentColor"
                        />
                        <path
                          d="M223.062 8.1806H243.574L259.537 50.8474C261.343 55.7494 262.762 60.2644 263.794 64.3924C264.891 60.2644 266.31 55.7494 268.051 50.8474L283.918 8.1806H303.849V77.9374H289.143V44.3651C289.143 39.1406 289.239 34.3676 289.433 30.0461C288.078 34.3676 286.563 38.8826 284.886 43.5911L272.018 77.9374H254.99L242.025 43.5911C240.219 38.6891 238.736 34.1741 237.575 30.0461C237.769 34.3676 237.865 39.1406 237.865 44.3651V77.9374H223.062V8.1806Z"
                          fill="currentColor"
                        />
                        <path
                          d="M182.754 40.1334H136.888V86H182.754V40.1334Z"
                          fill="currentColor"
                        />
                        <path
                          d="M0 85.9997V45.6183L45.6184 0H85.9997V40.3814L40.3814 85.9997H0Z"
                          fill="currentColor"
                        />
                        <path
                          d="M68.7989 85.9997V45.6184L114.417 0H154.799V40.3814L109.18 85.9997H68.7989Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="px-4 w-40 md:w-64 h-12 flex shrink-0 justify-center items-center">
                      <svg
                        className="w-20 md:w-28 h-full object-contain text-gray-800 dark:text-neutral-200"
                        width={345}
                        height={86}
                        viewBox="0 0 345 86"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.121 14.0845C10.6665 14.584 10.6966 15.3504 11.1741 15.8279L70.1872 74.8411C70.6647 75.3185 71.4311 75.3487 71.9306 74.8942C80.5836 67.0204 86.0151 55.668 86.0151 43.047C86.0151 19.2728 66.7424 0 42.9681 0C30.3472 0 18.9948 5.4315 11.121 14.0845ZM3.74525 25.2842C3.52718 25.765 3.63713 26.3288 4.01043 26.7021L59.313 82.0047C59.6863 82.378 60.2501 82.4879 60.7309 82.2699C62.0085 81.6904 63.2527 81.0503 64.4599 80.3534C65.1775 79.9391 65.2873 78.9601 64.7014 78.3742L7.64087 21.3137C7.05502 20.7278 6.076 20.8377 5.66175 21.5553C4.96478 22.7624 4.32472 24.0066 3.74525 25.2842ZM0.390217 41.1197C0.131279 40.8608 -0.00649288 40.5039 0.0178838 40.1385C0.13205 38.4273 0.346215 36.7435 0.654587 35.0928C0.839492 34.103 2.04893 33.7595 2.76091 34.4715L51.5437 83.2542C52.2556 83.9662 51.9121 85.1756 50.9224 85.3605C49.2717 85.6689 47.5878 85.8831 45.8766 85.9972C45.5112 86.0216 45.1544 85.8838 44.8954 85.6249L0.390217 41.1197ZM3.38389 53.1323C2.4951 52.2435 1.06079 53.0093 1.38629 54.2234C5.35206 69.0149 17.0002 80.6631 31.7917 84.6288C33.0058 84.9544 33.7717 83.52 32.8829 82.6312L3.38389 53.1323ZM173.442 23.6888C176.528 23.6888 179.029 21.1784 179.029 18.0817C179.029 14.985 176.528 12.4746 173.442 12.4746C170.357 12.4746 167.856 14.985 167.856 18.0817C167.856 21.1784 170.357 23.6888 173.442 23.6888ZM125.59 72.5889V12.478H135.518V63.7942H162.287V72.5889H125.59ZM196.253 48.0604V72.5889H186.647V29.9868H196.133V37.2888L196.253 37.2082C197.217 34.9221 198.772 33.0125 200.916 31.4794C203.059 29.9195 205.792 29.1396 209.116 29.1396C212.063 29.1396 214.742 29.7986 217.154 31.1164C219.566 32.4074 221.495 34.3034 222.942 36.8047C224.389 39.306 225.112 42.3721 225.112 46.0029V72.5889H215.506V47.3342C215.506 44.1068 214.648 41.6593 212.934 39.9919C211.246 38.2975 208.981 37.4502 206.141 37.4502C204.318 37.4502 202.657 37.8268 201.157 38.5798C199.656 39.3329 198.464 40.4894 197.58 42.0493C196.695 43.6092 196.253 45.6129 196.253 48.0604ZM283.235 71.8627C285.433 72.8041 287.952 73.2748 290.792 73.2748C293.123 73.2748 295.119 72.9789 296.78 72.3872C298.442 71.7686 299.809 70.9483 300.88 69.9263C301.979 68.9043 302.85 67.7881 303.493 66.5778H303.654V72.5889H312.859V43.2596C312.859 41.1886 312.456 39.2926 311.653 37.5713C310.849 35.8499 309.683 34.3573 308.155 33.0932C306.655 31.8291 304.833 30.8609 302.689 30.1885C300.546 29.4892 298.133 29.1396 295.454 29.1396C291.783 29.1396 288.608 29.7716 285.928 31.0357C283.275 32.2729 281.199 33.9404 279.698 36.0383C278.197 38.1361 277.38 40.5029 277.246 43.1385H286.531C286.638 41.9014 287.067 40.7987 287.817 39.8305C288.568 38.8623 289.586 38.1091 290.872 37.5713C292.159 37.0065 293.645 36.724 295.334 36.724C297.022 36.724 298.455 37.0065 299.635 37.5713C300.84 38.1361 301.765 38.9026 302.408 39.8708C303.051 40.839 303.373 41.9686 303.373 43.2596V43.5824C303.373 44.5506 303.037 45.2633 302.368 45.7205C301.724 46.1777 300.626 46.5139 299.072 46.7291C297.544 46.9442 295.454 47.1998 292.801 47.4956C290.631 47.7376 288.541 48.1008 286.531 48.5849C284.522 49.069 282.726 49.7817 281.145 50.723C279.591 51.6644 278.358 52.915 277.447 54.4749C276.536 56.0349 276.081 58.0386 276.081 60.486C276.081 63.3101 276.724 65.6768 278.01 67.5864C279.296 69.4691 281.038 70.8945 283.235 71.8627ZM298.791 64.722C297.236 65.5558 295.32 65.9727 293.043 65.9727C290.738 65.9727 288.902 65.4886 287.536 64.5204C286.169 63.5252 285.486 62.167 285.486 60.4457C285.486 59.101 285.861 58.0116 286.611 57.1779C287.389 56.3442 288.407 55.6852 289.666 55.2011C290.926 54.717 292.292 54.3808 293.766 54.1925C294.838 54.0312 295.883 53.8698 296.902 53.7084C297.919 53.5202 298.871 53.3454 299.755 53.184C300.64 52.9957 301.39 52.8074 302.006 52.6192C302.649 52.4309 303.118 52.2292 303.412 52.014V56.7745C303.412 58.442 303.024 59.975 302.247 61.3736C301.496 62.7453 300.345 63.8614 298.791 64.722ZM321.24 72.5889V29.9868H330.484V37.0065H330.605C331.382 34.5859 332.601 32.7436 334.263 31.4794C335.95 30.1885 338.162 29.543 340.895 29.543C341.565 29.543 342.168 29.5699 342.703 29.6237C343.267 29.6506 343.735 29.6775 344.111 29.7043V38.3781C343.762 38.3243 343.145 38.2571 342.262 38.1764C341.377 38.0957 340.44 38.0554 339.448 38.0554C337.866 38.0554 336.42 38.4184 335.107 39.1446C333.794 39.8708 332.748 40.987 331.972 42.4931C331.221 43.9724 330.846 45.8416 330.846 48.1008V72.5889H321.24ZM168.619 72.5889V29.9868H178.225V72.5889H168.619ZM241.09 70.6928C244.172 72.6024 247.83 73.5571 252.064 73.5571C255.333 73.5571 258.307 72.9654 260.987 71.782C263.693 70.5717 265.944 68.9177 267.739 66.8199C269.535 64.6952 270.701 62.2477 271.237 59.4774H262.193C261.79 60.7415 261.134 61.8577 260.223 62.8259C259.339 63.7672 258.227 64.5069 256.887 65.0448C255.547 65.5827 253.993 65.8516 252.224 65.8516C249.84 65.8516 247.789 65.3137 246.075 64.2379C244.387 63.1621 243.101 61.6694 242.216 59.7599C241.414 58.0023 240.975 56.012 240.901 53.7891H271.799V51.2071C271.799 47.926 271.317 44.9406 270.352 42.251C269.388 39.5346 268.021 37.1947 266.252 35.2314C264.484 33.2411 262.354 31.7081 259.861 30.6323C257.396 29.5565 254.65 29.0186 251.621 29.0186C247.683 29.0186 244.199 29.9734 241.171 31.8829C238.143 33.7925 235.772 36.4282 234.056 39.7901C232.342 43.1521 231.484 46.998 231.484 51.3282C231.484 55.6314 232.315 59.464 233.976 62.8259C235.637 66.1609 238.009 68.7832 241.09 70.6928ZM261.308 42.4931C260.424 40.6642 259.165 39.2522 257.53 38.2571C255.895 37.262 253.967 36.7644 251.742 36.7644C249.544 36.7644 247.629 37.262 245.994 38.2571C244.387 39.2522 243.127 40.6642 242.216 42.4931C241.566 43.8176 241.155 45.3238 240.983 47.0115H262.541C262.369 45.3238 261.958 43.8176 261.308 42.4931Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="px-4 w-40 md:w-64 h-12 flex shrink-0 justify-center items-center">
                      <svg
                        className="w-20 md:w-28 h-full object-contain text-gray-800 dark:text-neutral-200"
                        width={387}
                        height={86}
                        viewBox="0 0 387 86"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M63.2126 66.2965H64.2891V86H61.0656C40.1336 86 28.0226 74.0603 28.0226 54.5676V44.5439L34.8242 42.8336C36.8161 42.3291 38.6264 41.2753 40.0494 39.7914C41.4724 38.3078 42.4506 36.4541 42.8731 34.4411C43.2952 32.4286 43.1445 30.3374 42.4377 28.406C41.7309 26.475 40.4969 24.7811 38.8759 23.5174C37.2545 22.2537 35.3115 21.4709 33.268 21.2584C31.2241 21.0458 29.1622 21.4117 27.3158 22.3147C25.4699 23.2177 23.9142 24.6209 22.8257 26.3655C21.7371 28.1102 21.16 30.1253 21.1596 32.1821V75.1265H1.46393e-05V31.438C-0.00127354 30.1232 0.0824569 28.8101 0.249491 27.506C2.2247 12.0011 15.7506 0 32.1443 0C47.0073 0 59.5177 9.86829 63.2126 23.2744C65.1333 30.2958 64.5102 37.7715 61.4538 44.3773C58.8641 49.9521 54.7128 54.6535 49.5038 57.9109C51.2514 65.0027 54.9687 66.3132 63.2126 66.3132"
                          fill="currentColor"
                        />
                        <path
                          d="M115.616 28.4335V40.4732H113.646C109.508 40.4732 106.278 41.6116 103.96 43.8886C101.641 46.1657 100.485 49.2586 100.492 53.1682V74.8766H88.8417V29.1776H100.492V35.0865C103.991 30.6436 108.38 28.4223 113.657 28.4223L115.616 28.4335Z"
                          fill="currentColor"
                        />
                        <path
                          d="M165.663 56.2452H130.306C131.034 59.0062 132.687 61.4332 134.989 63.1202C137.436 64.8589 140.383 65.7498 143.383 65.6584C145.908 65.6867 148.407 65.1401 150.69 64.0589C152.727 63.1323 154.523 61.7466 155.938 60.0106L163.705 66.8409C161.263 69.7458 158.188 72.052 154.717 73.5828C151.032 75.2076 147.043 76.0239 143.017 75.9762C138.492 76.0428 134.023 74.9594 130.029 72.8275C126.256 70.8257 123.108 67.8178 120.936 64.1366C118.803 60.4318 117.671 56.2345 117.652 51.9586C117.633 47.6827 118.726 43.4755 120.825 39.7514C122.902 36.1527 125.927 33.1942 129.569 31.1992C133.349 29.1107 137.606 28.0389 141.924 28.0896C148.774 28.0896 154.49 30.3718 159.072 34.9366C163.655 39.5015 165.95 45.2253 165.957 52.108C165.952 53.492 165.853 54.8742 165.663 56.2452ZM149.241 40.8567C147.13 39.1984 144.524 38.2971 141.841 38.2971C139.157 38.2971 136.551 39.1984 134.44 40.8567C132.309 42.6099 130.817 45.0192 130.196 47.7098H153.497C152.877 45.0175 151.382 42.6069 149.247 40.8567H149.241Z"
                          fill="currentColor"
                        />
                        <path
                          d="M240.619 32.7266C243.737 35.8178 245.296 39.955 245.296 45.1382V74.9045H233.645V48.5982C233.645 45.7917 232.835 43.552 231.215 41.8786C229.595 40.2049 227.43 39.3645 224.719 39.3572C221.863 39.3572 219.546 40.2199 217.767 41.9452C215.988 43.6705 215.099 45.9471 215.099 48.776V74.877H203.448V48.5982C203.448 45.8252 202.625 43.5928 200.979 41.9005C199.333 40.2087 197.133 39.3611 194.377 39.3572C193.109 39.307 191.844 39.5123 190.657 39.9605C189.469 40.4088 188.384 41.0911 187.465 41.9675C186.574 42.8564 185.878 43.9204 185.42 45.0922C184.962 46.264 184.751 47.5183 184.801 48.776V74.877H173.173V29.1721H184.824V33.8928C188.26 30.0089 192.763 28.0689 198.333 28.0728C201.279 28.0136 204.195 28.683 206.821 30.0218C209.247 31.2795 211.281 33.1791 212.702 35.5142C216.474 30.5534 221.652 28.0728 228.236 28.0728C233.403 28.084 237.53 29.6349 240.619 32.7266Z"
                          fill="currentColor"
                        />
                        <path
                          d="M301.077 52.0355C301.077 58.8332 298.73 64.5235 294.036 69.1068C289.343 73.6902 283.51 75.9763 276.538 75.9655C269.57 75.9655 263.732 73.6756 259.023 69.0957C254.315 64.5162 251.957 58.8255 251.95 52.0248C251.95 45.227 254.308 39.535 259.023 34.9478C263.739 30.3606 269.577 28.0707 276.538 28.0784C283.506 28.0784 289.339 30.3679 294.036 34.9478C298.733 39.5277 301.08 45.2236 301.077 52.0355ZM285.543 61.0712C287.817 58.6125 289.082 55.3843 289.082 52.0329C289.082 48.6815 287.817 45.4533 285.543 42.9946C284.367 41.8159 282.971 40.8803 281.434 40.2422C279.897 39.6042 278.249 39.2757 276.585 39.2757C274.922 39.2757 273.274 39.6042 271.737 40.2422C270.2 40.8803 268.804 41.8159 267.628 42.9946C265.327 45.4314 264.044 48.6575 264.044 52.0106C264.044 55.3641 265.327 58.5902 267.628 61.0265C270.028 63.3521 273.237 64.6523 276.577 64.6523C279.917 64.6523 283.126 63.3521 285.526 61.0265L285.543 61.0712Z"
                          fill="currentColor"
                        />
                        <path
                          d="M322.355 39.818V58.822C322.355 62.7317 324.454 64.6862 328.651 64.6862C330.735 64.6094 332.778 64.0868 334.643 63.1537V74.0161C332.011 75.3777 329.078 76.054 326.116 75.9818C321.012 75.9818 317.169 74.6194 314.587 71.8945C312.006 69.1695 310.711 65.4415 310.704 60.7101V39.8291H303.442V29.1776H310.704V21.5641L322.355 17.5767V29.1776H334.643V39.818H322.355Z"
                          fill="currentColor"
                        />
                        <path
                          d="M386.208 56.2453H350.824C351.552 59.0062 353.205 61.4332 355.506 63.1202C357.953 64.8597 360.901 65.7507 363.9 65.658C366.422 65.6876 368.921 65.1405 371.201 64.0589C373.241 63.1336 375.04 61.7479 376.457 60.0102L384.22 66.8409C381.781 69.7458 378.707 72.052 375.233 73.5828C371.549 75.2111 367.56 76.0312 363.534 75.9874C359.009 76.0544 354.54 74.9711 350.547 72.8387C346.772 70.8351 343.624 67.8277 341.448 64.1478C339.317 60.4417 338.187 56.2448 338.169 51.9689C338.15 47.6935 339.244 43.4867 341.343 39.7626C343.419 36.1621 346.444 33.2019 350.086 31.2048C353.867 29.1162 358.124 28.0445 362.441 28.0947C369.29 28.0947 375.006 30.3791 379.583 34.9478C384.165 39.5166 386.453 45.2438 386.453 52.13C386.462 53.5057 386.38 54.8802 386.208 56.2453ZM369.801 40.8567C367.693 39.1984 365.087 38.2971 362.402 38.2971C359.719 38.2971 357.113 39.1984 355.001 40.8567C352.87 42.6099 351.378 45.0192 350.757 47.7094H374.057C373.434 45.0102 371.927 42.5957 369.78 40.8455L369.801 40.8567Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="px-4 w-40 md:w-64 h-12 flex shrink-0 justify-center items-center">
                      <svg
                        className="w-20 md:w-28 h-full object-contain text-gray-800 dark:text-neutral-200"
                        width={356}
                        height={86}
                        viewBox="0 0 356 86"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M147.23 58.8125C144.542 62.248 141.123 65.0424 137.221 66.9932C133.32 68.9441 129.033 70.0024 124.672 70.0916C109.364 70.0916 97.2797 59.2153 97.2797 45.1164C97.2638 41.6969 97.9737 38.313 99.3625 35.1882C100.751 32.0635 102.787 29.2689 105.336 26.9893C107.768 24.6072 110.676 22.7658 113.87 21.5857C117.063 20.4055 120.469 19.9133 123.866 20.1413C132.728 20.1413 141.188 24.1695 146.424 31.4204L136.354 38.6712C135.057 36.5035 133.231 34.7009 131.047 33.4325C128.862 32.1642 126.391 31.4718 123.866 31.4204C120.127 31.4204 116.541 32.9058 113.897 35.5498C111.253 38.1939 109.767 41.78 109.767 45.5192C110.17 53.5757 116.615 59.6181 124.269 59.6181C129.506 59.6181 134.34 57.2012 137.159 52.7701L147.23 58.8125Z"
                          fill="currentColor"
                        />
                        <path d="M152.87 0H165.357V68.8831H152.87V0Z" fill="currentColor" />
                        <path
                          d="M198.792 59.2153C206.848 59.2153 213.696 52.7701 214.099 44.7136C213.696 36.6571 206.848 30.2119 198.792 30.2119C190.735 30.2119 183.887 36.6571 183.484 44.7136C183.887 52.7701 190.332 59.2153 198.792 59.2153ZM198.792 19.7384C205.64 19.3356 212.488 21.7526 217.724 26.5865C222.961 31.4204 225.781 37.8656 226.184 44.7136C226.053 48.1463 225.237 51.5181 223.784 54.6311C222.331 57.744 220.271 60.5352 217.724 62.8407C215.189 65.1939 212.207 67.0128 208.954 68.1893C205.701 69.3658 202.245 69.8757 198.792 69.6888C183.484 69.6888 171.399 58.8125 171.399 44.7136C171.399 30.6147 183.484 19.7384 198.792 19.7384Z"
                          fill="currentColor"
                        />
                        <path
                          d="M223.767 20.5441H238.671L250.756 46.3249L263.646 20.5441H277.343L250.756 71.7029L223.767 20.5441Z"
                          fill="currentColor"
                        />
                        <path
                          d="M313.194 37.8656C312.278 35.5377 310.663 33.5512 308.571 32.1804C306.478 30.8095 304.012 30.1217 301.512 30.2119C296.275 30.2119 291.441 33.0317 289.024 37.8656H313.194ZM321.25 63.2436C316.044 67.5407 309.47 69.8276 302.721 69.6888C287.413 69.6888 275.328 58.8125 275.328 44.7136C275.328 37.8656 278.148 31.4204 282.982 26.5865C285.414 24.2044 288.322 22.363 291.515 21.1828C294.709 20.0027 298.115 19.5105 301.512 19.7384C308.36 19.3356 314.805 22.1554 319.639 26.9893C324.473 31.8232 326.89 38.2684 326.487 45.1164V48.339H287.816C288.661 50.9049 290.152 53.2096 292.148 55.0306C294.143 56.8517 296.574 58.1275 299.206 58.7349C301.838 59.3423 304.582 59.2608 307.174 58.4982C309.765 57.7356 312.116 56.3177 314 54.3814L321.25 63.2436ZM332.53 41.8938C332.53 30.2119 341.392 20.9469 355.491 20.9469V32.226C352.671 32.226 349.448 33.4345 347.434 35.4486C345.42 37.4627 344.614 40.6853 345.017 43.5051V68.8831H332.53V41.8938Z"
                          fill="currentColor"
                        />
                        <path
                          d="M40.0785 22.5582C39.8884 18.7732 38.6343 15.1186 36.4603 12.0144C34.2863 8.91017 31.2806 6.4823 27.7885 5.00977C24.2965 3.53723 20.4599 3.07979 16.7196 3.68999C12.9792 4.3002 9.48695 5.9533 6.64401 8.45933C1.00445 14.0989 -0.606846 22.5582 2.21293 29.8091C5.03271 37.0599 12.2836 41.8938 20.3401 41.8938H40.0785V22.5582ZM45.7181 22.5582C45.9081 18.7732 47.1622 15.1186 49.3363 12.0144C51.5103 8.91017 54.516 6.4823 58.008 5.00977C61.5 3.53723 65.3366 3.07979 69.077 3.68999C72.8173 4.3002 76.3096 5.9533 79.1525 8.45933C84.7921 14.0989 86.4034 22.5582 83.5836 29.8091C80.7638 37.0599 73.513 41.8938 65.4565 41.8938H45.7181V22.5582ZM45.7181 66.869C45.9081 70.654 47.1622 74.3086 49.3363 77.4128C51.5103 80.517 54.516 82.9449 58.008 84.4174C61.5 85.8899 65.3366 86.3474 69.077 85.7372C72.8173 85.127 76.3096 83.4739 79.1525 80.9679C84.7921 75.3283 86.4034 66.869 83.5836 59.6181C80.7638 52.3673 73.513 47.5334 65.4565 47.5334H45.7181V66.869ZM20.3401 80.9679C27.9937 80.9679 34.4389 74.9255 34.4389 66.869V52.7701H20.3401C12.6864 52.7701 6.24118 58.8125 6.24118 66.869C6.24118 74.9255 12.6864 80.9679 20.3401 80.9679ZM40.0785 66.869C39.8884 70.654 38.6343 74.3086 36.4603 77.4128C34.2863 80.517 31.2806 82.9449 27.7885 84.4174C24.2965 85.8899 20.4599 86.3474 16.7196 85.7372C12.9792 85.127 9.48695 83.4739 6.64401 80.9679C1.00445 75.3283 -0.606846 66.869 2.21293 59.6181C5.03271 52.3673 12.2836 47.5334 20.3401 47.5334H40.0785V66.869Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* End Brands */}
                </div>
              </div>
              {/* End Grid */}
            </div>
          </div>
          {/* End Clients */}
          {/* Features */}
          <div className="pb-10 md:pt-10 md:pb-20">
            <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 md:items-center gap-y-6">
                <div className="md:ps-[15%] md:order-2">
                  <div className="mb-8">
                    <h2 className="font-semibold text-3xl text-gray-800 dark:text-neutral-200">
                      Fully customizable rules to match your unique needs
                    </h2>
                  </div>
                  {/* Accordion Navs */}
                  <div className="hs-accordion-group [--keep-one-open:true] flex flex-col">
                    <div
                      className="hs-accordion py-5 border-b border-gray-200 last:border-b-0 dark:border-neutral-700 active"
                      data-hs-target="#hs-pro-dt-ftat"
                    >
                      <button
                        className="hs-accordion-toggle w-full flex justify-between gap-x-3 text-start"
                        aria-expanded="true"
                        aria-controls="hs-pro-dt-item-ftat"
                      >
                        <span className="grow">
                          <span className="block font-medium text-lg text-gray-800 dark:text-neutral-200">
                            Advanced tools
                          </span>
                        </span>
                        <svg
                          className="hs-accordion-active:rotate-180 shrink-0 size-5 text-gray-800 dark:text-neutral-200"
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
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                      <div
                        id="hs-pro-dt-item-ftat"
                        className="hs-accordion-content overflow-hidden transition-[height] duration-300"
                        style={{ display: "block" }}
                      >
                        <p className="mt-2 text-gray-500 dark:text-neutral-400">
                          Use Preline thoroughly thought and automated libraries to manage your
                          businesses.
                        </p>
                        <ul className="mt-3 space-y-1">
                          <li className="flex items-center gap-x-1 text-gray-500 dark:text-neutral-400">
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
                            Automate everything
                          </li>
                          <li className="flex items-center gap-x-1 text-gray-500 dark:text-neutral-400">
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
                            Connect any type of data
                          </li>
                          <li className="flex items-center gap-x-1 text-gray-500 dark:text-neutral-400">
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
                            Powerful reporting
                          </li>
                        </ul>
                        <div className="mt-3">
                          <a
                            className="group inline-flex justify-center items-center gap-x-1.5 whitespace-nowrap text-[13px] md:text-sm rounded-lg text-blue-600 hover:text-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:text-blue-700 dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600"
                            href="#"
                          >
                            Learn more
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
                              <path
                                className="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:group-focus:opacity-100 lg:group-focus:translate-x-0 lg:transition"
                                d="M5 12h14"
                              />
                              <path
                                className="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:group-focus:translate-x-0 lg:transition"
                                d="m12 5 7 7-7 7"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="hs-accordion py-5 border-b border-gray-200 last:border-b-0 dark:border-neutral-700"
                      data-hs-target="#hs-pro-dt-ftsd"
                    >
                      <button
                        className="hs-accordion-toggle w-full flex justify-between gap-x-3 text-start"
                        aria-expanded="false"
                        aria-controls="hs-pro-dt-item-ftsd"
                      >
                        <span className="grow">
                          <span className="block font-medium text-lg text-gray-800 dark:text-neutral-200">
                            Smart dashboards
                          </span>
                        </span>
                        <svg
                          className="hs-accordion-active:rotate-180 shrink-0 size-5 text-gray-800 dark:text-neutral-200"
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
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                      <div
                        id="hs-pro-dt-item-ftsd"
                        className="hs-accordion-content overflow-hidden transition-[height] duration-300"
                        style={{ display: "none" }}
                      >
                        <p className="mt-2 text-gray-500 dark:text-neutral-400">
                          Quickly Preline sample components, copy-paste codes, and start right off.
                        </p>
                        <ul className="mt-3 space-y-1">
                          <li className="flex items-center gap-x-1 text-gray-500 dark:text-neutral-400">
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
                            Connect work to company goals
                          </li>
                          <li className="flex items-center gap-x-1 text-gray-500 dark:text-neutral-400">
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
                            Automate workflows across departments
                          </li>
                          <li className="flex items-center gap-x-1 text-gray-500 dark:text-neutral-400">
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
                            Report on progress and address bottlenecks
                          </li>
                        </ul>
                        <div className="block mt-2">
                          <a
                            className="group inline-flex justify-center items-center gap-x-1.5 whitespace-nowrap text-[13px] md:text-sm rounded-lg text-blue-600 hover:text-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:text-blue-700 dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600"
                            href="#"
                          >
                            Learn more
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
                              <path
                                className="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:group-focus:opacity-100 lg:group-focus:translate-x-0 lg:transition"
                                d="M5 12h14"
                              />
                              <path
                                className="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:group-focus:translate-x-0 lg:transition"
                                d="m12 5 7 7-7 7"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="hs-accordion py-5 border-b border-gray-200 last:border-b-0 dark:border-neutral-700"
                      data-hs-target="#hs-pro-dt-ftpf"
                    >
                      <button
                        className="hs-accordion-toggle w-full flex justify-between gap-x-3 text-start"
                        aria-expanded="false"
                        aria-controls="hs-pro-dt-item-ftpf"
                      >
                        <span className="grow">
                          <span className="block font-medium text-lg text-gray-800 dark:text-neutral-200">
                            Powerful features
                          </span>
                        </span>
                        <svg
                          className="hs-accordion-active:rotate-180 shrink-0 size-5 text-gray-800 dark:text-neutral-200"
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
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                      <div
                        id="hs-pro-dt-item-ftpf"
                        className="hs-accordion-content overflow-hidden transition-[height] duration-300"
                        style={{ display: "none" }}
                      >
                        <p className="mt-2 text-gray-500 dark:text-neutral-400">
                          Reduce time and effort on building modern look design with Preline only.
                        </p>
                        <ul className="mt-3 space-y-1">
                          <li className="flex items-center gap-x-1 text-gray-500 dark:text-neutral-400">
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
                            Maximize impact
                          </li>
                          <li className="flex items-center gap-x-1 text-gray-500 dark:text-neutral-400">
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
                            Drive clarity and accountability
                          </li>
                          <li className="flex items-center gap-x-1 text-gray-500 dark:text-neutral-400">
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
                            Scale with confidence
                          </li>
                        </ul>
                        <div className="block mt-2">
                          <a
                            className="group inline-flex justify-center items-center gap-x-1.5 whitespace-nowrap text-[13px] md:text-sm rounded-lg text-blue-600 hover:text-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:text-blue-700 dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600"
                            href="#"
                          >
                            Learn more
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
                              <path
                                className="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:group-focus:opacity-100 lg:group-focus:translate-x-0 lg:transition"
                                d="M5 12h14"
                              />
                              <path
                                className="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:group-focus:translate-x-0 lg:transition"
                                d="m12 5 7 7-7 7"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Accordion Navs */}
                </div>
                {/* End Col */}
                {/* Accordion Content */}
                <div className="hs-accordion-outside-group relative h-96 md:h-150 w-full">
                  {/* Card */}
                  <div
                    id="hs-pro-dt-ftat"
                    className="absolute opacity-0 hs-accordion-outside-active:opacity-100 transition-opacity duration-500 active size-full"
                  >
                    <img
                      className="size-full object-cover rounded-xl"
                      src="https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80"
                      alt="Features Image"
                    />
                    <div className="absolute bottom-0 inset-x-0 after:absolute after:inset-0 after:size-full after:z-1 after:rounded-xl after:bg-linear-to-t after:from-blue-600 after:to-transparent">
                      <div className="p-4 md:p-6 relative z-10 flex flex-col justify-end gap-3">
                        <div>
                          <svg
                            className="shrink-0 w-auto h-6 md:h-8 text-white"
                            width={269}
                            height={87}
                            viewBox="0 0 269 87"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M266.3 59.3414C265.844 59.3414 265.428 59.6364 265.214 60.2532C262.465 68.097 258.751 72.763 255.694 72.763C253.937 72.763 253.227 70.8054 253.227 67.7349C253.227 60.0521 257.826 43.7611 260.145 36.333C260.413 35.4346 260.588 34.6302 260.588 33.9463C260.588 31.7876 259.408 30.7284 256.485 30.7284C253.334 30.7284 249.942 31.9619 246.643 37.7409C245.504 32.6458 242.058 30.42 237.244 30.42C231.68 30.42 226.303 34 221.878 39.8057C217.454 45.6114 212.251 47.5154 208.336 46.5768C211.152 39.685 212.198 34.5363 212.198 30.715C212.198 24.7215 209.234 21.1013 204.448 21.1013C197.167 21.1013 192.97 28.0467 192.97 35.3542C192.97 40.999 195.531 46.8048 201.163 49.6205C196.443 60.2934 189.551 69.9473 186.937 69.9473C183.558 69.9473 182.566 53.415 182.753 41.589C182.874 34.8045 183.437 34.4559 183.437 32.4044C183.437 31.2245 182.673 30.42 179.602 30.42C172.442 30.42 170.23 36.4805 169.895 43.4393C169.787 46.0838 169.373 48.707 168.661 51.2563C165.671 61.9292 159.504 70.0277 155.481 70.0277C153.617 70.0277 153.108 68.164 153.108 65.7237C153.108 58.0408 157.412 48.4406 157.412 40.2482C157.412 34.2279 154.771 30.42 149.796 30.42C143.937 30.42 136.187 37.3922 128.853 50.4518C131.266 40.4493 132.258 30.7686 125.112 30.7686C123.561 30.7917 122.039 31.1872 120.674 31.9217C120.215 32.1361 119.832 32.4835 119.573 32.9187C119.315 33.354 119.194 33.8569 119.225 34.362C119.909 45.0081 110.644 72.2803 101.862 72.2803C100.266 72.2803 99.4886 70.5506 99.4886 67.7617C99.4886 60.0655 104.074 43.8148 106.38 36.3732C106.675 35.4078 106.836 34.5765 106.836 33.8525C106.836 31.8144 105.576 30.7686 102.72 30.7686C99.5825 30.7686 96.1768 31.9619 92.8918 37.7409C91.7387 32.6458 88.2928 30.42 83.4793 30.42C75.5819 30.42 66.7593 38.7733 62.8843 49.6607C57.6954 64.1952 47.237 78.2335 33.1584 78.2335C20.3804 78.2335 13.6361 67.6008 13.6361 50.8004C13.6361 26.545 31.4422 6.72776 44.6492 6.72776C50.9645 6.72776 53.9813 10.7502 53.9813 16.918C53.9813 24.3863 49.8113 27.859 49.8113 30.7016C49.8113 31.5731 50.5354 32.4312 51.9701 32.4312C57.7088 32.4312 64.4665 25.6869 64.4665 16.4889C64.4665 7.2909 56.9981 0.56 43.7911 0.56C21.9626 0.56 0 22.5226 0 50.6663C0 73.058 11.0483 86.56 30.155 86.56C43.1877 86.56 54.5712 76.4234 60.7122 64.5974C61.4094 74.3988 65.8609 79.5207 72.6455 79.5207C78.6791 79.5207 83.5597 75.9273 87.2872 69.6121C88.7219 76.2223 92.5298 79.4537 97.4774 79.4537C103.149 79.4537 107.896 75.8603 112.414 69.183C112.347 74.4256 113.54 79.3598 118.086 79.3598C120.231 79.3598 122.792 78.8637 123.248 76.9866C128.035 57.1961 139.861 41.0393 143.481 41.0393C144.553 41.0393 144.848 42.0717 144.848 43.2918C144.848 48.6685 141.054 59.69 141.054 66.7293C141.054 74.3317 144.285 79.3598 150.963 79.3598C158.364 79.3598 165.886 70.2959 170.901 57.0486C172.469 69.4244 175.862 79.4134 181.171 79.4134C187.688 79.4134 199.259 65.6969 206.271 51.1758C209.02 51.5245 213.15 51.4306 217.119 48.6283C215.429 52.9055 214.437 57.5849 214.437 62.2644C214.437 75.7396 220.873 79.5207 226.41 79.5207C232.431 79.5207 237.311 75.9273 241.052 69.6121C242.286 75.3105 245.437 79.4403 251.229 79.4403C260.293 79.4403 268.163 70.1752 268.163 62.5728C268.163 60.5616 267.305 59.3414 266.3 59.3414ZM78.1696 72.0524C74.5092 72.0524 73.0745 68.3651 73.0745 62.8678C73.0745 53.3212 79.6043 37.3788 86.5095 37.3788C89.5264 37.3788 90.666 40.932 90.666 45.2762C90.666 54.9704 84.4581 72.0524 78.1696 72.0524ZM203.549 43.56C201.364 40.9588 200.573 37.4191 200.573 34.2681C200.573 30.3798 201.994 27.0948 203.697 27.0948C205.4 27.0948 205.923 28.7708 205.923 31.1038C205.923 35.0056 204.528 40.7041 203.549 43.56ZM231.935 72.0524C228.274 72.0524 226.839 67.8154 226.839 62.8678C226.839 53.6564 233.369 37.3788 240.328 37.3788C243.345 37.3788 244.418 40.9052 244.418 45.2762C244.418 54.9704 238.317 72.0524 231.935 72.0524Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                        <div className="mt-1.5 md:mt-3">
                          <blockquote className="md:text-xl text-white">
                            I'm absolutely floored by the level of care and attention to detail the
                            team at Preline have put into this project and for one can guarantee
                            that we will be a return customer.
                            <footer className="mt-4 md:mt-6 text-sm">
                              Luisa, <span className="opacity-70">Director of Canva</span>
                            </footer>
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Card */}
                  {/* Card */}
                  <div
                    id="hs-pro-dt-ftsd"
                    className="absolute opacity-0 hs-accordion-outside-active:opacity-100 transition-opacity duration-500 size-full"
                  >
                    <img
                      className="size-full object-cover rounded-xl"
                      src="https://images.unsplash.com/photo-1598929213452-52d72f63e307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80"
                      alt="Features Image"
                    />
                    <div className="absolute bottom-0 inset-x-0 after:absolute after:inset-0 after:size-full after:z-1 after:rounded-xl after:bg-linear-to-t after:from-violet-600 after:to-transparent">
                      <div className="p-4 md:p-6 relative z-10 flex flex-col justify-end gap-3">
                        <div>
                          <svg
                            className="shrink-0 w-auto h-6 md:h-8 text-white"
                            width={349}
                            height={87}
                            viewBox="0 0 349 87"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M284.82 3.46044H270.501V17.7827H284.816L284.82 3.46044Z"
                              fill="currentColor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M229.073 40.2275H216.5V63.4977C216.5 65.4378 216.98 66.8554 217.949 67.747C218.92 68.6457 220.338 69.1681 222.198 69.3144C224.061 69.3875 226.378 69.3562 229.14 69.2064V82.2957C219.37 83.4138 212.397 82.5152 208.22 79.6138C204.117 76.6323 202.069 71.2614 202.069 63.5047V40.2379H192.338V26.358H202.069V15.059L216.5 10.6982V26.365H238.805V15.066L253.235 10.7052V26.3719H265.875V40.2484H253.232V63.5151C253.232 65.4587 253.716 66.8763 254.684 67.7644C255.656 68.6666 257.074 69.1855 258.934 69.3353C260.797 69.405 263.113 69.3771 265.865 69.2239V82.3166C256.098 83.4312 249.129 82.5361 244.949 79.6347C240.85 76.6532 238.798 71.2823 238.798 63.5256V40.2553H229.066L229.073 40.2275Z"
                              fill="currentColor"
                            />
                            <path
                              d="M284.886 26.3441H270.456V82.2888H284.886V26.3441Z"
                              fill="currentColor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M318.88 24.8916C311.077 24.8935 303.594 27.9949 298.077 33.5136C292.56 39.0324 289.462 46.5166 289.463 54.3199C289.389 58.23 290.095 62.1155 291.541 65.7494C292.986 69.3833 295.141 72.6926 297.88 75.4839C300.62 78.2751 303.888 80.4924 307.494 82.006C311.1 83.5196 314.971 84.2991 318.882 84.2991C322.793 84.2991 326.664 83.5196 330.27 82.006C333.876 80.4924 337.144 78.2751 339.884 75.4839C342.623 72.6926 344.778 69.3833 346.223 65.7494C347.669 62.1155 348.375 58.23 348.302 54.3199C348.303 50.4555 347.543 46.6287 346.065 43.0582C344.587 39.4876 342.42 36.2432 339.688 33.5104C336.956 30.7775 333.712 28.6098 330.142 27.1309C326.571 25.6521 322.745 24.8912 318.88 24.8916ZM318.832 69.8752C314.749 69.7889 310.863 68.1067 308.007 65.1891C305.15 62.2715 303.55 58.3508 303.55 54.2676C303.55 50.1845 305.15 46.2638 308.007 43.3462C310.863 40.4286 314.749 38.7464 318.832 38.6601C322.969 38.661 326.937 40.3054 329.863 43.2317C332.789 46.1579 334.432 50.1263 334.432 54.2642C334.433 56.3139 334.03 58.3437 333.246 60.2377C332.463 62.1317 331.313 63.8527 329.864 65.3024C328.415 66.7521 326.695 67.9021 324.801 68.6867C322.907 69.4713 320.881 69.8752 318.832 69.8752ZM173.421 26.2326V29.3395C168.966 26.5692 163.852 25.0405 158.607 24.9114C153.363 24.7824 148.179 26.0579 143.593 28.6057C139.007 31.1535 135.186 34.8811 132.525 39.4022C129.864 43.9234 128.46 49.0738 128.459 54.3199C128.46 59.5665 129.863 64.7175 132.525 69.2392C135.186 73.7609 139.007 77.4888 143.594 80.0367C148.18 82.5846 153.365 83.8599 158.61 83.7304C163.855 83.601 168.97 82.0714 173.425 79.3003V82.4037H187.74V26.2326H173.421ZM157.828 69.8752C153.745 69.7889 149.859 68.1067 147.003 65.1891C144.146 62.2715 142.546 58.3508 142.546 54.2676C142.546 50.1845 144.146 46.2638 147.003 43.3462C149.859 40.4286 153.745 38.7464 157.828 38.6601C161.925 38.646 165.862 40.2505 168.782 43.1245C171.703 45.9985 173.37 49.9094 173.421 54.0064V54.5219C173.356 58.6143 171.684 62.5168 168.767 65.3877C165.849 68.2586 161.921 69.8678 157.828 69.8682V69.8752Z"
                              fill="currentColor"
                            />
                            <path
                              d="M103.632 60.0878L94.8821 46.086C94.8821 46.086 94.8507 46.0268 94.8298 46.0024L94.1402 44.9017C93.5057 43.8787 92.6204 43.0346 91.5684 42.4495C90.5163 41.8643 89.3323 41.5575 88.1285 41.558L74.0361 41.5092L73.0538 43.0871L55.2833 71.5227L62.3435 82.7903C63.6461 84.8871 65.8962 86.1375 68.3761 86.1375H88.125C90.5596 86.1375 92.8619 84.8558 94.1507 82.7973L94.8473 81.6827C94.8473 81.6827 94.8751 81.6548 94.8821 81.6409L103.642 67.6216C104.347 66.491 104.721 65.1854 104.721 63.853C104.721 62.5206 104.347 61.2149 103.642 60.0843H103.635L103.632 60.0878ZM100.963 65.9498L92.2001 79.969C92.1653 80.0387 92.1166 80.0875 92.0782 80.1432C91.955 80.2811 91.8011 80.3882 91.6289 80.4559C91.4568 80.5236 91.2712 80.5501 91.087 80.5332C90.9028 80.5162 90.7251 80.4564 90.5682 80.3584C90.4113 80.2605 90.2795 80.1271 90.1835 79.969L81.4236 65.9428C81.2253 65.6294 81.0728 65.2893 80.9708 64.9327C80.8188 64.404 80.7796 63.8492 80.8558 63.3044C80.932 62.7596 81.1219 62.2368 81.4131 61.7701L90.1626 47.7683L90.1835 47.7334C90.3924 47.42 90.6537 47.2772 90.8801 47.2319C90.9706 47.204 91.0507 47.1971 91.1134 47.1866H91.211C91.413 47.1866 91.9145 47.2493 92.228 47.7578L100.974 61.7597C101.775 63.0345 101.775 64.675 100.974 65.9498H100.963ZM77.7455 26.2117C78.4473 25.08 78.8192 23.7747 78.8192 22.443C78.8192 21.1114 78.4473 19.8061 77.7455 18.6744L68.9961 4.67254L68.2646 3.49527C67.6276 2.4701 66.7388 1.62499 65.6829 1.04033C64.627 0.455663 63.439 0.1509 62.232 0.15503H42.4831C40.0206 0.15503 37.7671 1.40892 36.454 3.49875L1.09061 60.1017C0.380099 61.2288 0.00247165 62.5336 0.00123918 63.8659C6.70999e-06 65.1982 0.375219 66.5037 1.08364 67.6321L10.568 82.8147C11.2032 83.84 12.0906 84.6854 13.1455 85.2702C14.2004 85.8549 15.3875 86.1595 16.5936 86.1549H36.3425C38.8225 86.1549 41.0725 84.901 42.3752 82.8112L43.0996 81.6618V81.6479L43.1101 81.6235L77.7316 26.2187L77.7455 26.2152V26.2117ZM75.6801 22.443C75.6801 23.164 75.478 23.892 75.0705 24.5364L40.4281 79.9795C40.3209 80.1513 40.1715 80.2927 39.994 80.3903C39.8166 80.4879 39.6171 80.5383 39.4146 80.5368C39.2116 80.5382 39.0116 80.4878 38.8336 80.3903C38.6557 80.2927 38.5055 80.1513 38.3975 79.9795L29.6446 65.9533C29.255 65.3245 29.0486 64.5996 29.0486 63.86C29.0486 63.1203 29.255 62.3954 29.6446 61.7666L64.2835 6.34092C64.3895 6.16644 64.5389 6.02242 64.7172 5.92291C64.8954 5.82341 65.0964 5.77182 65.3006 5.77318C65.5026 5.77318 66.0041 5.8324 66.3211 6.3444L75.0705 20.3463C75.478 20.9906 75.6801 21.7186 75.6801 22.443Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                        <div className="mt-1.5 md:mt-3">
                          <blockquote className="md:text-xl text-white">
                            I'm absolutely floored by the level of care and attention to detail the
                            team at Preline have put into this project and for one can guarantee
                            that we will be a return customer.
                            <footer className="mt-4 md:mt-6 text-sm">
                              Luisa, <span className="opacity-70">Director of Canva</span>
                            </footer>
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Card */}
                  {/* Card */}
                  <div
                    id="hs-pro-dt-ftpf"
                    className="absolute opacity-0 hs-accordion-outside-active:opacity-100 transition-opacity duration-500 size-full"
                  >
                    <img
                      className="size-full object-cover rounded-xl"
                      src="https://images.unsplash.com/photo-1720048171256-38c59a19fd37?q=80&w=560&h=720&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Features Image"
                    />
                    <div className="absolute bottom-0 inset-x-0 after:absolute after:inset-0 after:size-full after:z-1 after:rounded-xl after:bg-linear-to-t after:from-orange-600 after:to-transparent">
                      <div className="p-4 md:p-6 relative z-10 flex flex-col justify-end gap-3">
                        <div>
                          <svg
                            className="shrink-0 w-auto h-6 md:h-8 text-white"
                            width={437}
                            height={86}
                            viewBox="0 0 437 86"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M425.686 65.5259C425.949 68.527 428.35 72.348 432.512 72.348H434.945C435.4 72.3459 435.836 72.1642 436.157 71.8424C436.479 71.5206 436.661 71.0848 436.663 70.6297V17.1004H436.651C436.628 16.6629 436.438 16.2508 436.121 15.9487C435.804 15.6467 435.383 15.4776 434.945 15.4762H427.405C426.966 15.4776 426.546 15.6467 426.228 15.9487C425.911 16.2508 425.721 16.6629 425.698 17.1004H425.686V21.451C421.065 15.7548 413.78 13.3892 406.475 13.3892C402.525 13.3902 398.614 14.1694 394.965 15.6821C391.316 17.1948 388 19.4116 385.208 22.2057C382.416 24.9998 380.201 28.3166 378.691 31.9666C377.181 35.6166 376.404 39.5284 376.406 43.4786C376.404 47.4293 377.18 51.3417 378.69 54.9924C380.2 58.6431 382.414 61.9606 385.207 64.7555C387.999 67.5503 391.314 69.7677 394.964 71.2812C398.613 72.7946 402.525 73.5743 406.475 73.5759C413.78 73.5759 421.744 70.7395 425.686 65.518V65.5259ZM406.503 63.0426C395.942 63.0426 387.382 54.2865 387.382 43.4825C387.382 32.6786 395.942 23.9225 406.503 23.9225C417.067 23.9225 425.627 32.6786 425.627 43.4825C425.627 54.2865 417.067 63.0426 406.503 63.0426ZM366.873 67.3658V39.6694C366.873 24.0519 357.026 13.5187 341.334 13.5187C333.841 13.5187 327.698 17.8536 325.528 21.5804C325.057 18.6656 323.516 15.6057 318.722 15.6057H316.282C315.826 15.6067 315.39 15.7881 315.068 16.1101C314.746 16.4321 314.564 16.8686 314.563 17.324V70.8572H314.575C314.622 71.7595 315.372 72.4813 316.282 72.4813H323.826C323.939 72.4813 324.053 72.4656 324.163 72.446C324.214 72.4382 324.257 72.4146 324.308 72.4029L324.477 72.3519C324.544 72.3205 324.602 72.2852 324.665 72.2499L324.759 72.1989C324.833 72.1481 324.902 72.0917 324.967 72.0302L325.006 72.0027C325.322 71.7022 325.51 71.2922 325.532 70.8572H325.54V39.2378C325.539 35.212 327.137 31.3506 329.983 28.5028C332.828 25.655 336.688 24.054 340.714 24.0519C344.739 24.054 348.599 25.6544 351.444 28.5014C354.29 31.3483 355.888 35.2088 355.888 39.2339L355.892 65.6671V65.6592L355.9 65.7299V70.8572H355.908C355.959 71.7595 356.704 72.4813 357.614 72.4813H365.158C365.272 72.4804 365.385 72.4686 365.496 72.446C365.539 72.4382 365.582 72.4186 365.625 72.4068C365.688 72.3911 36.751 72.3754 365.81 72.3519C365.872 72.3244 365.927 72.2891 365.986 72.2577L366.092 72.1989C366.161 72.1509 366.226 72.0985 366.288 72.042L366.339 72.0027C366.409 71.9337 366.474 71.8589 366.531 71.7791L366.543 71.7634C366.735 71.4997 366.846 71.1865 366.865 70.8611H366.877L366.873 67.3658ZM288.326 65.5259C288.589 68.527 290.994 72.348 295.152 72.348H297.585C298.526 72.348 299.299 71.5751 299.299 70.6297V17.1004H299.291C299.267 16.6632 299.077 16.2517 298.76 15.9498C298.443 15.648 298.023 15.4786 297.585 15.4762H290.041C289.603 15.4786 289.183 15.648 288.865 15.9498C288.548 16.2517 288.358 16.6632 288.334 17.1004H288.326V21.451C283.705 15.7548 276.42 13.3892 269.112 13.3892C265.162 13.3907 261.251 14.1703 257.602 15.6832C253.954 17.1962 250.639 19.413 247.847 22.2071C245.055 25.0011 242.841 28.3177 241.331 31.9675C239.821 35.6173 239.044 39.5288 239.046 43.4786C239.046 60.1004 252.506 73.5759 269.112 73.5759C276.42 73.5759 284.38 70.7395 288.326 65.518V65.5259ZM269.143 63.0426C258.582 63.0426 250.018 54.2865 250.018 43.4825C250.018 32.6786 258.582 23.9225 269.143 23.9225C279.704 23.9225 288.264 32.6786 288.264 43.4825C288.264 54.2865 279.704 63.0426 269.143 63.0426ZM194.445 57.8564C199.478 61.3479 204.974 63.0426 210.255 63.0426C215.288 63.0426 220.49 60.4338 220.49 55.891C220.49 49.826 209.152 48.8806 202.032 46.4562C194.912 44.0357 188.776 39.0299 188.776 30.9211C188.776 18.5126 199.824 13.3853 210.133 13.3853C216.665 13.3853 223.405 15.5429 227.775 18.6342C229.281 19.7719 228.363 21.0861 228.363 21.0861L224.193 27.0491C223.722 27.716 222.906 28.2966 221.73 27.5708C220.553 26.8451 216.426 23.9225 210.133 23.9225C203.845 23.9225 200.051 26.8255 200.051 30.4346C200.051 34.7499 204.978 36.1112 210.749 37.5863C220.8 40.2971 231.765 43.5571 231.765 55.891C231.765 66.8205 221.549 73.5759 210.255 73.5759C201.699 73.5759 194.414 71.1358 188.302 66.6478C187.031 65.3729 187.917 64.1881 187.917 64.1881L192.068 58.2565C192.915 57.1503 193.978 57.5347 194.445 57.8564ZM165.45 65.5259C165.717 68.527 168.118 72.348 172.276 72.348H174.709C175.164 72.3459 175.599 72.1642 175.921 71.8424C176.243 71.5206 176.425 71.0848 176.427 70.6297V17.1004H176.415C176.392 16.6629 176.202 16.2508 175.885 15.9487C175.568 15.6467 175.147 15.4776 174.709 15.4762H167.169C166.731 15.4786 166.31 15.648 165.993 15.9498C165.676 16.2517 165.486 16.6632 165.462 17.1004H165.45V21.451C160.829 15.7548 153.544 13.3892 146.239 13.3892C138.262 13.3923 130.612 16.5641 124.973 22.2068C119.334 27.8496 116.167 35.5012 116.17 43.4786C116.17 60.1004 129.633 73.5759 146.239 73.5759C153.544 73.5759 161.508 70.7395 165.45 65.518V65.5259ZM146.267 63.0426C135.706 63.0426 127.146 54.2865 127.146 43.4825C127.146 32.6786 135.706 23.9225 146.271 23.9225C156.831 23.9225 165.391 32.6786 165.391 43.4825C165.391 54.2865 156.827 63.0426 146.267 63.0426Z"
                              fill="currentColor"
                            />
                            <path
                              d="M74.0169 45.5264C68.6497 45.5264 63.5024 47.6585 59.7073 51.4536C55.9122 55.2488 53.7801 60.3961 53.7801 65.7632C53.7801 71.1303 55.9122 76.2776 59.7073 80.0728C63.5024 83.8679 68.6497 86 74.0169 86C79.384 86 84.5313 83.8679 88.3264 80.0728C92.1216 76.2776 94.2537 71.1303 94.2537 65.7632C94.2537 60.3961 92.1216 55.2488 88.3264 51.4536C84.5313 47.6585 79.384 45.5264 74.0169 45.5264ZM21.4448 45.5303C18.764 45.493 16.1026 45.9888 13.6151 46.9888C11.1276 47.9889 8.86368 49.4733 6.95479 51.3558C5.04589 53.2382 3.53012 55.4813 2.49554 57.9546C1.46095 60.428 0.928183 63.0822 0.928183 65.7632C0.928183 68.4442 1.46095 71.0984 2.49554 73.5718C3.53012 76.0451 5.04589 78.2882 6.95479 80.1707C8.86368 82.0532 11.1276 83.5375 13.6151 84.5376C16.1026 85.5376 18.764 86.0334 21.4448 85.9961C26.7621 85.922 31.8365 83.7578 35.5705 79.9714C39.3045 76.1851 41.3978 71.081 41.3978 65.7632C41.3978 60.4454 39.3045 55.3413 35.5705 51.555C31.8365 47.7686 26.7621 45.6044 21.4448 45.5303ZM67.9637 20.2348C67.9637 25.6014 65.8318 30.7483 62.037 34.543C58.2423 38.3378 53.0955 40.4697 47.7289 40.4697C42.3622 40.4697 37.2154 38.3378 33.4207 34.543C29.6259 30.7483 27.494 25.6014 27.494 20.2348C27.494 14.8682 29.6259 9.72141 33.4207 5.92665C37.2154 2.13188 42.3622 0 47.7289 0C53.0955 0 58.2423 2.13188 62.037 5.92665C65.8318 9.72141 67.9637 14.8682 67.9637 20.2348Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                        <div className="mt-1.5 md:mt-3">
                          <blockquote className="md:text-xl text-white">
                            With Preline, we're able to easily track our performance in full detail.
                            It's become an essential tool for us to grow and engage with our
                            audience.
                            <footer className="mt-4 md:mt-6 text-sm">
                              Josh Tyson, <span className="opacity-70">CEO of Asana</span>
                            </footer>
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Card */}
                </div>
                {/* End Accordion Content */}
              </div>
              {/* End Grid */}
            </div>
          </div>
          {/* End Features */}
          {/* FAQ */}
          <div className="pt-10 pb-20">
            <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
              {/* Title */}
              <div className="mb-8 max-w-2xl mx-auto text-center">
                <h2 className="font-semibold text-3xl text-gray-800 dark:text-neutral-200">
                  Your questions, answered
                </h2>
                <p className="mt-2 text-gray-500 dark:text-neutral-400">
                  Answers to the most frequently asked questions.
                </p>
              </div>
              {/* End Title */}
              <div className="max-w-2xl mx-auto">
                {/* Accordion */}
                <div className="hs-accordion-group">
                  <div
                    className="hs-accordion hs-accordion-active:bg-gray-100 p-6 rounded-xl dark:hs-accordion-active:bg-neutral-800 active"
                    id="hs-basic-with-title-and-arrow-stretched-heading-one"
                  >
                    <button
                      className="hs-accordion-toggle group inline-flex items-center justify-between gap-x-3 w-full font-medium text-start text-gray-800 focus:outline-hidden dark:text-neutral-200"
                      aria-expanded="true"
                      aria-controls="hs-pro-dtc-one"
                    >
                      Can I cancel at anytime?
                      <svg
                        className="hs-accordion-active:hidden block shrink-0 size-5"
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
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hidden shrink-0 size-5"
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
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                    </button>
                    <div
                      id="hs-pro-dtc-one"
                      className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                      role="region"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                    >
                      <div className="pt-3">
                        <p className="text-gray-800 dark:text-neutral-200">
                          Yes, you can cancel anytime no questions are asked while you cancel but we
                          would highly appreciate if you will give us some feedback.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="hs-accordion hs-accordion-active:bg-gray-100 p-6 rounded-xl dark:hs-accordion-active:bg-neutral-800"
                    id="hs-basic-with-title-and-arrow-stretched-heading-two"
                  >
                    <button
                      className="hs-accordion-toggle group inline-flex items-center justify-between gap-x-3 w-full font-medium text-start text-gray-800 focus:outline-hidden dark:text-neutral-200"
                      aria-expanded="false"
                      aria-controls="hs-pro-dtc-two"
                    >
                      My team has credits. How do we use them?
                      <svg
                        className="hs-accordion-active:hidden block shrink-0 size-5"
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
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hidden shrink-0 size-5"
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
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                    </button>
                    <div
                      id="hs-pro-dtc-two"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      role="region"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
                    >
                      <div className="pt-3">
                        <p className="text-gray-800 dark:text-neutral-200">
                          Once your team signs up for a subscription plan. This is where we sit
                          down, grab a cup of coffee and dial in the details.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="hs-accordion hs-accordion-active:bg-gray-100 p-6 rounded-xl dark:hs-accordion-active:bg-neutral-800"
                    id="hs-basic-with-title-and-arrow-stretched-heading-three"
                  >
                    <button
                      className="hs-accordion-toggle group inline-flex items-center justify-between gap-x-3 w-full font-medium text-start text-gray-800 focus:outline-hidden dark:text-neutral-200"
                      aria-expanded="false"
                      aria-controls="hs-pro-dtc-three"
                    >
                      How does Preline's pricing work?
                      <svg
                        className="hs-accordion-active:hidden block shrink-0 size-5"
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
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hidden shrink-0 size-5"
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
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                    </button>
                    <div
                      id="hs-pro-dtc-three"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      role="region"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
                    >
                      <div className="pt-3">
                        <p className="text-gray-800 dark:text-neutral-200">
                          Our subscriptions are tiered. Understanding the task at hand and ironing
                          out the wrinkles is key.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="hs-accordion hs-accordion-active:bg-gray-100 p-6 rounded-xl dark:hs-accordion-active:bg-neutral-800"
                    id="hs-basic-with-title-and-arrow-stretched-heading-four"
                  >
                    <button
                      className="hs-accordion-toggle group inline-flex items-center justify-between gap-x-3 w-full font-medium text-start text-gray-800 focus:outline-hidden dark:text-neutral-200"
                      aria-expanded="false"
                      aria-controls="hs-pro-dtc-four"
                    >
                      How secure is Preline?
                      <svg
                        className="hs-accordion-active:hidden block shrink-0 size-5"
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
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hidden shrink-0 size-5"
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
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                    </button>
                    <div
                      id="hs-pro-dtc-four"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      role="region"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four"
                    >
                      <div className="pt-3">
                        <p className="text-gray-800 dark:text-neutral-200">
                          Protecting the data you trust to Preline is our first priority. This part
                          is really crucial in keeping the project in line to completion.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="hs-accordion hs-accordion-active:bg-gray-100 p-6 rounded-xl dark:hs-accordion-active:bg-neutral-800"
                    id="hs-basic-with-title-and-arrow-stretched-heading-five"
                  >
                    <button
                      className="hs-accordion-toggle group inline-flex items-center justify-between gap-x-3 w-full font-medium text-start text-gray-800 focus:outline-hidden dark:text-neutral-200"
                      aria-expanded="false"
                      aria-controls="hs-pro-dtc-five"
                    >
                      How do I get access to a theme I purchased?
                      <svg
                        className="hs-accordion-active:hidden block shrink-0 size-5"
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
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hidden shrink-0 size-5"
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
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                    </button>
                    <div
                      id="hs-pro-dtc-five"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      role="region"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five"
                    >
                      <div className="pt-3">
                        <p className="text-gray-800 dark:text-neutral-200">
                          If you lose the link for a theme you purchased, don't panic! We've got you
                          covered. You can login to your account, tap your avatar in the upper right
                          corner, and tap Purchases. If you didn't create a login or can't remember
                          the information, you can use our handy Redownload page, just remember to
                          use the same email you originally made your purchases with.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="hs-accordion hs-accordion-active:bg-gray-100 p-6 rounded-xl dark:hs-accordion-active:bg-neutral-800"
                    id="hs-basic-with-title-and-arrow-stretched-heading-six"
                  >
                    <button
                      className="hs-accordion-toggle group inline-flex items-center justify-between gap-x-3 w-full font-medium text-start text-gray-800 focus:outline-hidden dark:text-neutral-200"
                      aria-expanded="false"
                      aria-controls="hs-pro-dtc-six"
                    >
                      Upgrade License Type
                      <svg
                        className="hs-accordion-active:hidden block shrink-0 size-5"
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
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hidden shrink-0 size-5"
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
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                    </button>
                    <div
                      id="hs-pro-dtc-six"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      role="region"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six"
                    >
                      <div className="pt-3">
                        <p className="text-gray-800 dark:text-neutral-200">
                          There may be times when you need to upgrade your license from the original
                          type you purchased and we have a solution that ensures you can apply your
                          original purchase cost to the new license purchase.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Accordion */}
              </div>
            </div>
          </div>
          {/* End FAQ */}
          {/* CTA */}
          <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="md:-mx-4 xl:-mx-20 px-4 py-6 md:py-12 xl:p-20 bg-linear-to-b from-gray-100 to-transparent rounded-2xl dark:from-neutral-800">
              <div className="mb-4 sm:mb-8 text-center">
                <p className="mb-2 font-mono text-sm text-gray-500 dark:text-neutral-400">
                  Get started
                </p>
                <h2 className="font-semibold text-2xl sm:text-4xl text-gray-800 dark:text-neutral-200">
                  The Web App powering
                  <br />
                  thousands of companies.
                </h2>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-2">
                <a
                  className="py-2 px-3 md:py-2.5 md:px-4 inline-flex justify-center items-center gap-x-1.5 whitespace-nowrap text-[13px] md:text-sm rounded-lg shadow-md bg-blue-600 text-white hover:bg-blue-700 hover:shadow-none focus:outline-hidden focus:bg-blue-700 focus:shadow-none disabled:opacity-50 disabled:pointer-events-none"
                  href="#"
                >
                  Try it free
                </a>
                <a
                  className="group py-2 px-3 md:py-2.5 md:px-4 inline-flex justify-center items-center gap-x-1.5 whitespace-nowrap text-[13px] md:text-sm rounded-lg border border-transparent text-gray-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden dark:text-neutral-200"
                  href="#"
                >
                  Get a demo
                  <svg
                    className="shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      className="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:group-focus:opacity-100 lg:group-focus:translate-x-0 lg:transition"
                      d="M5 12h14"
                    />
                    <path
                      className="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:group-focus:translate-x-0 lg:transition"
                      d="m12 5 7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* End CTA */}
        </main>
        {/* ========== END MAIN CONTENT ========== */}
      </>
      <CookieConsentModal />
      {/*<Banner/>*/}
      {/*<TeamSection/>*/}
    </GuestLayout>
  );
}
