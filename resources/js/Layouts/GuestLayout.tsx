import React from 'react';
import {Head} from '@inertiajs/react';
import PrelineProviderLayout from "@/Layouts/PrelineProviderLayout";
import Header from "@/Components/_Partials/Header";
import Footer from "@/Components/_Partials/Footer";

// import {initializePreline} from "@/preline-init";


interface Props {
    title?: string;
    showHeader?: boolean;
    showFooter?: boolean;
    showChat? : boolean;
    children?: React.ReactNode;
}



export default function GuestLayout({title, children, showHeader = true, showFooter = true, showChat = true}: Props) {

    return (
        <PrelineProviderLayout>
            <Head title={title}/>
            {showHeader && <Header/>}
            {children}
            {showFooter && <Footer/>}
            {showChat && <ContactChat />}

        </PrelineProviderLayout>
    );
}

function ContactChat() {
    return <>
        {/* Welcome Dropdown */}
        <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] fixed inline-flex right-4 bottom-6">
            {/* Dropdown */}
            <div
                className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-full sm:w-96 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white overflow-hidden rounded-xl shadow-md sm:shadow-xl dark:bg-neutral-900"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="hs-pro-chwcnd"
            >
                <div className="h-[605px] relative">
                    {/* Header */}
                    <div className="absolute top-2 end-4 z-10">
                        {/* Button */}
                        <button
                            type="button"
                            className="hs-dropdown-close flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-white rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-white dark:text-neutral-600 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                            aria-label="Close"
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
                                <path d="M18 6 6 18"/>
                                <path d="m6 6 12 12"/>
                            </svg>
                            <span className="sr-only">Close</span>
                        </button>
                        {/* End Button */}
                    </div>
                    {/* End Header */}
                    {/* SVG Background Element */}
                    <figure className="overflow-hidden rounded-t-xl">
                        <svg
                            preserveAspectRatio="none"
                            width={576}
                            height={120}
                            viewBox="0 0 576 120"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_666_273469)">
                                <rect width={576} height={120} fill="#B2E7FE"/>
                                <rect
                                    x="289.678"
                                    y="-90.3"
                                    width="102.634"
                                    height="391.586"
                                    transform="rotate(59.5798 289.678 -90.3)"
                                    fill="#FF8F5D"
                                />
                                <rect
                                    x="41.3926"
                                    y="-0.996094"
                                    width="102.634"
                                    height="209.864"
                                    transform="rotate(-31.6412 41.3926 -0.996094)"
                                    fill="#3ECEED"
                                />
                                <rect
                                    x="66.9512"
                                    y="40.4817"
                                    width="102.634"
                                    height="104.844"
                                    transform="rotate(-31.6412 66.9512 40.4817)"
                                    fill="#4C48FF"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_666_273469">
                                    <rect width={576} height={120} fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </figure>
                    {/* End SVG Background Element */}
                    <div
                        className="-mt-7 ms-2.5 relative z-10 flex shrink-0 justify-center items-center size-14 bg-white rounded-full dark:bg-neutral-900">
                        <a
                            className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80"
                            href="../../pro/chat/index.html"
                            aria-label="Preline"
                        >
                            <svg
                                className="w-7 h-auto"
                                width={36}
                                height={36}
                                viewBox="0 0 36 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M18.0835 3.23358C9.88316 3.23358 3.23548 9.8771 3.23548 18.0723V35.5832H0.583496V18.0723C0.583496 8.41337 8.41851 0.583252 18.0835 0.583252C27.7485 0.583252 35.5835 8.41337 35.5835 18.0723C35.5835 27.7312 27.7485 35.5614 18.0835 35.5614H16.7357V32.911H18.0835C26.2838 32.911 32.9315 26.2675 32.9315 18.0723C32.9315 9.8771 26.2838 3.23358 18.0835 3.23358Z"
                                    className="fill-blue-600 dark:fill-white"
                                    fill="currentColor"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M18.0833 8.62162C12.8852 8.62162 8.62666 12.9245 8.62666 18.2879V35.5833H5.97468V18.2879C5.97468 11.5105 11.3713 5.97129 18.0833 5.97129C24.7954 5.97129 30.192 11.5105 30.192 18.2879C30.192 25.0653 24.7954 30.6045 18.0833 30.6045H16.7355V27.9542H18.0833C23.2815 27.9542 27.54 23.6513 27.54 18.2879C27.54 12.9245 23.2815 8.62162 18.0833 8.62162Z"
                                    className="fill-blue-600 dark:fill-white"
                                    fill="currentColor"
                                />
                                <path
                                    d="M24.8225 18.1012C24.8225 21.8208 21.8053 24.8361 18.0833 24.8361C14.3614 24.8361 11.3442 21.8208 11.3442 18.1012C11.3442 14.3815 14.3614 11.3662 18.0833 11.3662C21.8053 11.3662 24.8225 14.3815 24.8225 18.1012Z"
                                    className="fill-blue-600 dark:fill-white"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                    </div>
                    {/* Body */}
                    <div
                        className="p-5 h-[445px] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                        <div>
                            <h3 className="font-semibold text-xl text-gray-800 dark:text-neutral-200">
                                Send a message
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-neutral-500">
                                We'll get back to you in a few hours.
                            </p>
                        </div>
                        <div className="mt-5 space-y-5">
                            {/* Input */}
                            <div className="space-y-2">
                                <label
                                    htmlFor="hs-pro-chwlmn"
                                    className="block mb-2 text-sm font-medium text-gray-800 dark:text-neutral-200"
                                >
                                    Name
                                </label>
                                <input
                                    id="hs-pro-chwlmn"
                                    type="text"
                                    className="py-1.5 sm:py-2 px-3 block w-full border-gray-200 rounded-lg sm:text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600"
                                    placeholder="John Doe"
                                />
                            </div>
                            {/* End Input */}
                            {/* Input */}
                            <div className="space-y-2">
                                <label
                                    htmlFor="hs-pro-chwlme"
                                    className="block mb-2 text-sm font-medium text-gray-800 dark:text-neutral-200"
                                >
                                    Email
                                </label>
                                <input
                                    id="hs-pro-chwlme"
                                    type="email"
                                    className="py-1.5 sm:py-2 px-3 block w-full border-gray-200 rounded-lg sm:text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600"
                                    placeholder="john@site.co"
                                />
                            </div>
                            {/* End Input */}
                            {/* Input */}
                            <div className="space-y-2">
                                <label
                                    htmlFor="hs-pro-chwlms"
                                    className="block mb-2 text-sm font-medium text-gray-800 dark:text-neutral-200"
                                >
                                    Subject
                                </label>
                                <input
                                    id="hs-pro-chwlms"
                                    type="text"
                                    className="py-1.5 sm:py-2 px-3 block w-full border-gray-200 rounded-lg sm:text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600"
                                    placeholder="Preline Pro"
                                />
                            </div>
                            {/* End Input */}
                            {/* Input */}
                            <div className="space-y-2">
                                <label
                                    htmlFor="hs-pro-chwlmm"
                                    className="block mb-2 text-sm font-medium text-gray-800 dark:text-neutral-200"
                                >
                                    How can we help?
                                </label>
                                <div
                                    className="flex flex-col pb-1 bg-white border border-gray-200 rounded-lg dark:bg-neutral-900 dark:border-neutral-700">
                <textarea
                    id="hs-pro-chwlmm"
                    className="p-2.5 sm:p-3 block w-full border-transparent rounded-lg sm:text-sm placeholder:text-gray-400 resize-none focus:border-transparent focus:ring-transparent disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-transparent dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-transparent"
                    rows={3}
                    placeholder="Message..."
                    defaultValue={""}
                />
                                    {/* Button Group */}
                                    <div className="py-1 px-2 flex justify-end items-center gap-x-1">
                                        {/* Button */}
                                        <button
                                            type="button"
                                            className="flex justify-center items-center gap-x-3 size-6 text-sm text-gray-500 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-500 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                                        >
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
                                                    d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
                                            </svg>
                                            <span className="sr-only">Attach file</span>
                                        </button>
                                        {/* End Button */}
                                        {/* Button */}
                                        <button
                                            type="button"
                                            className="flex justify-center items-center gap-x-3 size-6 text-sm text-gray-500 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-500 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                                        >
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
                                                <path d="M22 11v1a10 10 0 1 1-9-10"/>
                                                <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                                                <line x1={9} x2="9.01" y1={9} y2={9}/>
                                                <line x1={15} x2="15.01" y1={9} y2={9}/>
                                                <path d="M16 5h6"/>
                                                <path d="M19 2v6"/>
                                            </svg>
                                            <span className="sr-only">Add emoji</span>
                                        </button>
                                        {/* End Button */}
                                    </div>
                                    {/* End Button Group */}
                                </div>
                            </div>
                            {/* End Input */}
                            <button
                                type="button"
                                className="py-2.5 px-3 w-full inline-flex justify-center items-center gap-x-1.5 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                            >
                                Send us a message
                            </button>
                        </div>
                    </div>
                    {/* End Body */}
                </div>
            </div>
            {/* End Dropdown */}
            <button
                id="hs-pro-chwcnd"
                type="button"
                className="hs-dropdown-toggle flex justify-center items-center size-12 text-sm font-medium rounded-full border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                aria-haspopup="menu"
                aria-expanded="false"
                aria-label="Dropdown"
            >
                <svg
                    className="hs-dropdown-open:block hidden shrink-0 size-5"
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
                    <path d="m6 9 6 6 6-6"/>
                </svg>
                <svg
                    className="hs-dropdown-open:hidden shrink-0 size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M14 0a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
                </svg>
            </button>
        </div>
        {/* End Welcome Dropdown */}
    </>;
}
