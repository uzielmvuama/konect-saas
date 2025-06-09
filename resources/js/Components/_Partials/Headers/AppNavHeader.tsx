import React from "react";
import {ucfirst} from "@/Utils/Functions/globals";
import {Link} from "@inertiajs/react";
import MainButton from "@/Components/Buttons/MainButton";
import {__} from "@/Utils/Functions/translate";
import {HiArrowCircleUp, HiTrendingUp} from "react-icons/hi";

interface  AppNavHeaderInterface {
    permissions: any,
    user: any,
    all_teams: any,
    jetstream: any,
    subscription: any,
    switchToTeam: any,
}
export default function AppNavHeader({ permissions, all_teams, jetstream, user, switchToTeam, subscription }: AppNavHeaderInterface) {
    return (
        <nav
            className="relative bg-white border-b border-gray-200 dark:bg-neutral-900 dark:border-neutral-800">
            <div
                className="max-w-[85rem] flex flex-wrap basis-full items-center w-full mx-auto md:py-2.5 px-4 sm:px-6 lg:px-8">
                {/* Nav Links */}
                <div className="basis-full grow md:basis-auto md:grow-0 md:w-full">
                    {/* Collapse */}
                    <div
                        id="hs-pro-dmh"
                        className="hs-collapse hidden overflow-hidden transition-all duration-300 md:block"
                        aria-labelledby="hs-pro-dmh-collapse"
                    >
                        <div
                            className="md:flex md:flex-wrap md:items-center md:gap-x-1 py-2 md:py-0 space-y-0.5 md:space-y-0">
                            <a
                                className="py-2 px-3 md:px-2.5 xl:px-2 flex items-center gap-x-2 text-sm text-start text-nowrap text-gray-800 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-800/40 dark:focus:bg-neutral-800 bg-gray-100 focus:bg-gray-200 dark:bg-neutral-800 dark:focus:bg-neutral-600 "
                                href="../../pro/saas/index.html"
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
                                    <rect width="18" height="18" x="3" y="3" rx="2"/>
                                    <path d="M8 7v7"/>
                                    <path d="M12 7v4"/>
                                    <path d="M16 7v9"/>
                                </svg>
                                Settings
                            </a>

                            <a
                                className="py-2 px-3 md:px-2.5 xl:px-2 flex items-center gap-x-2 text-sm text-start text-nowrap text-gray-800 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-800/40 dark:focus:bg-neutral-800"
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
                                    <path
                                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
                                    <path d="M12 9v4"/>
                                    <path d="M12 17h.01"/>
                                </svg>
                                Dashboard
                            </a>

                            <a
                                className="py-2 px-3 md:px-2.5 xl:px-2 flex items-center gap-x-2 text-sm text-start text-nowrap text-gray-800 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-800/40 dark:focus:bg-neutral-800"
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
                                    <rect width="7" height="7" x="14" y="3" rx="1"/>
                                    <path
                                        d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"/>
                                </svg>
                                Integrations
                            </a>

                            <a
                                className="py-2 px-3 md:px-2.5 xl:px-2 flex items-center gap-x-2 text-sm text-start text-nowrap text-gray-800 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-800/40 dark:focus:bg-neutral-800  "
                                href="../../pro/saas/search.html"
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
                                    <path d="M21 6H3"/>
                                    <path d="M10 12H3"/>
                                    <path d="M10 18H3"/>
                                    <circle cx="17" cy="15" r="3"/>
                                    <path d="m21 19-1.9-1.9"/>
                                </svg>
                                Search{" "}
                                <span
                                    className="py-0.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium bg-violet-100 text-violet-800 rounded-md dark:bg-violet-500/10 dark:text-violet-500">
                        New
                      </span>
                            </a>

                            <a
                                className="py-2 px-3 md:px-2.5 xl:px-2 flex items-center gap-x-2 text-sm text-start text-nowrap text-gray-800 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-800/40 dark:focus:bg-neutral-800  "
                                href="../../pro/saas/empty-states.html"
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
                                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
                                    <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
                                </svg>
                                Empty Contents
                            </a>
                            <div className="md:flex md:justify-end md:items-center md:gap-x-2 md:ms-auto">
                                {
                                    permissions.team.create ? <>
                                        {/*<a*/}
                                        {/*  className="flex items-center gap-x-2 p-2 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-800 dark:text-neutral-300 dark:focus:bg-neutral-800"*/}
                                        {/*  href="../../pro/index.html"*/}
                                        {/*>*/}
                                        {/*  <span className="flex justify-center items-center size-5 bg-indigo-600 text-white rounded-md dark:bg-indigo-500">*/}
                                        {/*    <svg*/}
                                        {/*      className="shrink-0 size-3"*/}
                                        {/*      xmlns="http://www.w3.org/2000/svg"*/}
                                        {/*      width="24"*/}
                                        {/*      height="24"*/}
                                        {/*      viewBox="0 0 24 24"*/}
                                        {/*      fill="none"*/}
                                        {/*      stroke="currentColor"*/}
                                        {/*      strokeWidth="2"*/}
                                        {/*      strokeLinecap="round"*/}
                                        {/*      strokeLinejoin="round"*/}
                                        {/*    >*/}
                                        {/*      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>*/}
                                        {/*      <path d="m3.3 7 8.7 5 8.7-5"></path>*/}
                                        {/*      <path d="M12 22V12"></path>*/}
                                        {/*    </svg>*/}
                                        {/*  </span>*/}
                                        {/*  PRO*/}
                                        {/*</a>*/}

                                        {jetstream && (
                                            <>
                                                {/* Project Dropdown */}
                                                <div
                                                    className="hs-dropdown [--auto-close:inside] [--placement:top-right] relative flex">
                                                    {/* Project Button */}
                                                    <button
                                                        id="hs-pro-dnwpd"
                                                        type="button"
                                                        className="inline-flex items-center text-start text-sm font-medium text-stone-800 align-middle disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:text-stone-500 dark:text-white dark:focus:text-neutral-200 cursor-pointer"
                                                        aria-haspopup="menu"
                                                        aria-expanded="false"
                                                        aria-label="Dropdown"
                                                    >
                                                        <svg
                                                            className="shrink-0 size-5 me-1.5"
                                                            width="33"
                                                            height="32"
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
                                                        {ucfirst(user.current_team?.name ?? "Aucune Organisation")}
                                                        <svg
                                                            className="shrink-0 size-4 ms-1"
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
                                                            <path d="m6 9 6 6 6-6"/>
                                                        </svg>
                                                    </button>
                                                    {/* End Project Button */}

                                                    {/* Dropdown */}
                                                    <div
                                                        className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-60 transition-[opacity,margin] duration opacity-0 hidden z-20 bg-white rounded-xl shadow-xl dark:bg-neutral-900"
                                                        role="menu"
                                                        aria-orientation="vertical"
                                                        aria-labelledby="hs-pro-dnwpd"
                                                    >
                                                        <div className="p-1 space-y-0.5">
                                                            {all_teams.map((team: any) => (
                                                                <span key={team.name}
                                                                      className={"cursor-pointer"}>
                                    {/* Item */}
                                                                    <a
                                                                        className={`py-2 px-3 block w-full text-start ${team.name === user.current_team.name ? "bg-stone-100 dark:bg-neutral-800" : "hover:bg-stone-100 dark:hover:bg-neutral-800"} rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-stone-100 dark:focus:bg-neutral-800`}
                                                                        onClick={(e: any) => {
                                                                            e.preventDefault();
                                                                            switchToTeam(team);
                                                                        }}
                                                                    >
                                      <div className="flex items-center gap-x-2">
                                        <svg
                                            className="shrink-0 size-5 text-stone-500 dark:text-neutral-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                          <path
                                              d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                        </svg>
                                        <svg
                                            className="shrink-0 size-7"
                                            width="33"
                                            height="32"
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
                                          <p className="text-sm font-medium text-stone-800 dark:text-neutral-200">
                                            {ucfirst(team.name ?? "Aucune Organisation")}
                                          </p>
                                          <p className="text-xs text-stone-500 dark:text-neutral-500">
                                            {ucfirst(team.email ?? "")}
                                          </p>
                                        </div>
                                          {team.name === user.current_team.name &&
                                              <div className="ms-auto self-center">
                                                  <svg
                                                      className="shrink-0 size-4 text-stone-800 dark:text-neutral-200"
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
                                                      <polyline points="20 6 9 17 4 12"/>
                                                  </svg>
                                              </div>}
                                      </div>
                                    </a>
                                                                    {/* End Item */}
                                  </span>
                                                            ))}
                                                        </div>

                                                        <div
                                                            className="p-1 border-t border-stone-200 dark:border-neutral-800">
                                                            <Link
                                                                href={"/teams/create"}
                                                                className="w-full flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-stone-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                                                                    <circle cx="12" cy="12" r="10"/>
                                                                    <path d="M8 12h8"/>
                                                                    <path d="M12 8v8"/>
                                                                </svg>
                                                                Add another team
                                                            </Link>
                                                        </div>

                                                        <div
                                                            className="p-1 border-t border-stone-200 dark:border-neutral-800">
                                                            <button
                                                                type="button"
                                                                className="w-full flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-stone-800 hover:bg-stone-100 disabled:opacity-50 focus:outline-hidden focus:bg-stone-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                                            >
                                                                Sign out
                                                                <span
                                                                    className="ms-auto text-xs text-stone-500 dark:text-neutral-500">
                                    {ucfirst(user.current_team?.name ?? "Aucune Organisation")}
                                  </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    {/* End Dropdown */}
                                                </div>
                                                {/* End Project Dropdown */}
                                            </>
                                        )}
                                        {/*<a*/}
                                        {/*  className="flex items-center gap-x-2 p-2 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-800 dark:text-neutral-300 dark:focus:bg-neutral-800"*/}
                                        {/*  href="../../pro/examples.html"*/}
                                        {/*>*/}
                                        {/*  <span className="flex justify-center items-center size-5 bg-indigo-600 text-white rounded-md dark:bg-indigo-500">*/}
                                        {/*    <svg*/}
                                        {/*      className="shrink-0 size-3"*/}
                                        {/*      xmlns="http://www.w3.org/2000/svg"*/}
                                        {/*      width="24"*/}
                                        {/*      height="24"*/}
                                        {/*      viewBox="0 0 24 24"*/}
                                        {/*      fill="none"*/}
                                        {/*      stroke="currentColor"*/}
                                        {/*      strokeWidth="2"*/}
                                        {/*      strokeLinecap="round"*/}
                                        {/*      strokeLinejoin="round"*/}
                                        {/*    >*/}
                                        {/*      <rect width="18" height="7" x="3" y="3" rx="1"></rect>*/}
                                        {/*      <rect width="9" height="7" x="3" y="14" rx="1"></rect>*/}
                                        {/*      <rect width="5" height="7" x="16" y="14" rx="1"></rect>*/}
                                        {/*    </svg>*/}
                                        {/*  </span>*/}
                                        {/*  Examples*/}
                                        {/*</a>*/}
                                    </> : <MainButton title={__("messages.upgrade_to_plan.title_short", {
                                        plan : subscription.upgrade_plan.name
                                    })} icon={HiTrendingUp }/>
                                }
                            </div>
                        </div>
                    </div>
                    {/* End Collapse */}
                </div>
                {/* End Nav Links */}
            </div>
        </nav>
    );
}
