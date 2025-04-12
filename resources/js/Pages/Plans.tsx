import React from 'react';
import GuestLayout from "@/Layouts/GuestLayout";


export default function Plans() {
    return (
        <GuestLayout title="Plans">
            <>
                {/* ========== MAIN CONTENT ========== */}
                <main id="content">
                    {/* Hero */}
                    <div className="relative py-10 md:py-14 px-4 before:absolute before:inset-0 before:-z-1 before:mx-3 lg:before:mx-6 2xl:before:mx-10 before:bg-linear-to-b before:from-gray-100 before:to-transparent before:rounded-2xl dark:before:from-neutral-800">
                        <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
                            {/* Heading */}
                            <div className="mb-8 max-w-2xl mx-auto text-center">
                                <h1 className="font-bold text-gray-800 text-4xl md:text-5xl dark:text-white">
                                    Simple, transparent pricing
                                </h1>
                                <p className="mt-5 text-sm md:text-lg text-gray-800 dark:text-gray-200">
                                    Whatever your status, our offers evolve according to your needs.
                                </p>
                            </div>
                            {/* End Heading */}
                            {/* Switch */}
                            <div
                                id="toggle-count"
                                className="flex justify-center items-center gap-x-3"
                            >
                                <label
                                    htmlFor="pricing-switch"
                                    className="text-sm text-gray-800 dark:text-neutral-200"
                                >
                                    Monthly
                                </label>
                                <label
                                    htmlFor="pricing-switch"
                                    className="relative inline-block w-11 h-6 cursor-pointer"
                                >
                                    <input
                                        type="checkbox"
                                        id="pricing-switch"
                                        className="peer sr-only"
                                        defaultChecked={false}
                                    />
                                    <span className="absolute inset-0 bg-gray-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-blue-600 dark:bg-neutral-700 dark:peer-checked:bg-blue-500 peer-disabled:opacity-50 peer-disabled:pointer-events-none" />
                                    <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-sm transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white" />
                                </label>
                                <label
                                    htmlFor="pricing-switch"
                                    className="text-sm text-gray-800 dark:text-neutral-200"
                                >
                                    Annually
                                </label>
                            </div>
                            {/* End Switch */}
                        </div>
                        <div className="my-8">
                            <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
                                {/* Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {/* Card */}
                                    <div className="p-4 md:p-6 h-full flex flex-col bg-white border border-gray-200 rounded-xl shadow-xs dark:bg-neutral-900 dark:border-neutral-700">
                                        {/* Header */}
                                        <header className="flex flex-col">
                                            <h4 className="font-semibold text-lg text-gray-800 dark:text-neutral-200">
                                                Starter
                                            </h4>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-500 dark:text-neutral-500">
                                                    Best for individual developers
                                                </p>
                                            </div>
                                        </header>
                                        {/* End Header */}
                                        {/* Body */}
                                        <div className="flex flex-col">
                                            {/* Price */}
                                            <div className="mt-4 flex items-start gap-x-1">
                  <span className="font-semibold text-gray-800 text-xl dark:text-neutral-200">
                    $
                  </span>
                                                <span
                                                    data-hs-toggle-count='{
              "target": "#toggle-count",
              "min": 0,
              "max": 0
            }'
                                                    className="font-semibold text-3xl md:text-4xl text-gray-800 dark:text-neutral-200"
                                                >
                    0
                  </span>
                                                <span className="block mt-0.5 text-gray-800 dark:text-neutral-200">
                    USD
                  </span>
                                            </div>
                                            {/* End Price */}
                                            <p className="text-xs text-gray-500 dark:text-neutral-500">
                                                /month for one person
                                            </p>
                                            <div className="mt-5 pb-7 border-b border-gray-200 dark:border-neutral-700">
                                                <button
                                                    type="button"
                                                    className="py-2 px-2.5 w-full inline-flex justify-center items-center gap-x-1.5 whitespace-nowrap text-[13px] md:text-sm rounded-lg bg-white border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                                >
                                                    Get started
                                                </button>
                                            </div>
                                            {/* List */}
                                            <ul className="mt-7 space-y-2.5 text-sm">
                                                <li className="flex items-center gap-x-3">
                                                    <svg
                                                        className="shrink-0 size-4 text-gray-800 dark:text-neutral-200"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                    <span className="text-gray-800 dark:text-neutral-400">
                      5 GB Cloud Storage
                    </span>
                                                </li>
                                                <li className="flex items-center gap-x-3">
                                                    <svg
                                                        className="shrink-0 size-4 text-gray-800 dark:text-neutral-200"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                    <span className="text-gray-800 dark:text-neutral-400">
                      10 API Requests/min
                    </span>
                                                </li>
                                                <li className="flex items-center gap-x-3">
                                                    <svg
                                                        className="shrink-0 size-4 text-gray-800 dark:text-neutral-200"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                    <span className="text-gray-800 dark:text-neutral-400">
                      2 Team Members
                    </span>
                                                </li>
                                                <li className="flex items-center gap-x-3">
                                                    <svg
                                                        className="shrink-0 size-4 text-gray-800 dark:text-neutral-200"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                    <span className="text-gray-800 dark:text-neutral-400">
                      1 Project Template
                    </span>
                                                </li>
                                                <li className="flex items-center gap-x-3">
                                                    <svg
                                                        className="shrink-0 size-4 text-gray-800 dark:text-neutral-200"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                    <span className="text-gray-800 dark:text-neutral-400">
                      100 Build Minutes/month
                    </span>
                                                </li>
                                                <li className="flex items-center gap-x-3">
                                                    <svg
                                                        className="shrink-0 size-4 text-gray-800 dark:text-neutral-200"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                    <span className="text-gray-800 dark:text-neutral-400">
                      Email Support
                    </span>
                                                </li>
                                                <li className="flex items-center gap-x-3">
                                                    <svg
                                                        className="shrink-0 size-4 text-gray-800 dark:text-neutral-200"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                    <span className="text-gray-800 dark:text-neutral-400">
                      Basic Analytics
                    </span>
                                                </li>
                                            </ul>
                                            {/* End List */}
                                        </div>
                                        {/* End Body */}
                                    </div>
                                    {/* End Card */}
                                    {/* Card */}
                                    <div className="p-4 md:p-6 h-full flex flex-col bg-white border border-gray-200 rounded-xl shadow-xs dark:bg-neutral-900 dark:border-neutral-700">
                                        {/* Header */}
                                        <header className="flex flex-col">
                                            <h4 className="font-semibold text-lg text-gray-800 dark:text-neutral-200">
                                                Pro{" "}
                                                <span className="font-mono font-normal text-xs text-blue-600 dark:text-blue-500">
                    — Most popular
                  </span>
                                            </h4>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-500 dark:text-neutral-500">
                                                    Perfect for small teams
                                                </p>
                                            </div>
                                        </header>
                                        {/* End Header */}
                                        {/* Body */}
                                        <div className="flex flex-col">
                                            {/* Price */}
                                            <div className="mt-4 flex items-start gap-x-1">
                  <span className="font-semibold text-gray-800 text-xl dark:text-neutral-200">
                    $
                  </span>
                                                <span
                                                    data-hs-toggle-count='{
              "target": "#toggle-count",
              "min": 15,
              "max": 30
            }'
                                                    className="font-semibold text-3xl md:text-4xl text-gray-800 dark:text-neutral-200"
                                                >
                    15
                  </span>
                                                <span className="block mt-0.5 text-gray-800 dark:text-neutral-200">
                    USD
                  </span>
                                            </div>
                                            {/* End Price */}
                                            <p className="text-xs text-gray-500 dark:text-neutral-500">
                                                /month for one person
                                            </p>
                                            <div className="mt-5 pb-7 border-b border-gray-200 dark:border-neutral-700">
                                                <button
                                                    type="button"
                                                    className="py-2 px-2.5 w-full inline-flex justify-center items-center gap-x-1.5 whitespace-nowrap text-[13px] md:text-sm rounded-lg shadow-md bg-blue-600 text-white hover:bg-blue-700 hover:shadow-none focus:outline-hidden focus:bg-blue-700 focus:shadow-none disabled:opacity-50 disabled:pointer-events-none"
                                                >
                                                    Get started
                                                </button>
                                            </div>
                                            {/* List */}
                                            <ul className="mt-7 space-y-2.5 text-sm">
                                                <li className="flex items-center gap-x-3">
                                                    <svg
                                                        className="shrink-0 size-4 text-gray-800 dark:text-neutral-200"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                    <span className="text-gray-800 dark:text-neutral-400">
                      25 GB Cloud Storage
                    </span>
                                                </li>
                                                <li className="flex items-center gap-x-3">
                                                    <svg
                                                        className="shrink-0 size-4 text-gray-800 dark:text-neutral-200"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                    <span className="text-gray-800 dark:text-neutral-400">
                      50 API Requests/min
                    </span>
                                                </li>
                                                <li className="flex items-center gap-x-3">
                                                    <svg
                                                        className="shrink-0 size-4 text-gray-800 dark:text-neutral-200"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                    <span className="text-gray-800 dark:text-neutral-400">
                      5 Team Members
                    </span>
                                                </li>
                                                <li className="flex items-center gap-x-3">
                                                    <svg
                                                        className="shrink-0 size-4 text-gray-800 dark:text-neutral-200"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                    <span className="text-gray-800 dark:text-neutral-400">
                      5 Project Templates
                    </span>
                                                </li>
                                                <li className="flex items-center gap-x-3">
                                                    <svg
                                                        className="shrink-0 size-4 text-gray-800 dark:text-neutral-200"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                    <span className="text-gray-800 dark:text-neutral-400">
                      500 Build Minutes/month
                    </span>
                                                </li>
                                                <li className="flex items-center gap-x-3">
                                                    <svg
                                                        className="shrink-0 size-4 text-gray-800 dark:text-neutral-200"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                    <span className="text-gray-800 dark:text-neutral-400">
                      Priority Email Support
                    </span>
                                                </li>
                                                <li className="flex items-center gap-x-3">
                                                    <svg
                                                        className="shrink-0 size-4 text-gray-800 dark:text-neutral-200"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                    <span className="text-gray-800 dark:text-neutral-400">
                      Advanced Analytics
                    </span>
                                                </li>
                                            </ul>
                                            {/* End List */}
                                        </div>
                                        {/* End Body */}
                                    </div>
                                    {/* End Card */}
                                    {/* Card */}
                                    <div className="p-4 md:p-6 h-full flex flex-col bg-white border border-gray-200 rounded-xl shadow-xs dark:bg-neutral-900 dark:border-neutral-700">
                                        {/* Header */}
                                        <header className="flex flex-col">
                                            <h4 className="font-semibold text-lg text-gray-800 dark:text-neutral-200">
                                                Team
                                            </h4>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-500 dark:text-neutral-500">
                                                    For growing businesses
                                                </p>
                                            </div>
                                        </header>
                                        {/* End Header */}
                                        {/* Body */}
                                        <div className="flex flex-col">
                                            {/* Price */}
                                            <div className="mt-4 flex items-start gap-x-1">
                  <span className="font-semibold text-gray-800 text-xl dark:text-neutral-200">
                    $
                  </span>
                                                <span
                                                    data-hs-toggle-count='{
              "target": "#toggle-count",
              "min": 45,
              "max": 90
            }'
                                                    className="font-semibold text-3xl md:text-4xl text-gray-800 dark:text-neutral-200"
                                                >
                    45
                  </span>
                                                <span className="block mt-0.5 text-gray-800 dark:text-neutral-200">
                    USD
                  </span>
                                            </div>
                                            {/* End Price */}
                                            <p className="text-xs text-gray-500 dark:text-neutral-500">
                                                /month for one person
                                            </p>
                                            <div className="mt-5 pb-7 border-b border-gray-200 dark:border-neutral-700">
                                                <button
                                                    type="button"
                                                    className="py-2 px-2.5 w-full inline-flex justify-center items-center gap-x-1.5 whitespace-nowrap text-[13px] md:text-sm rounded-lg shadow-md bg-blue-600 text-white hover:bg-blue-700 hover:shadow-none focus:outline-hidden focus:bg-blue-700 focus:shadow-none disabled:opacity-50 disabled:pointer-events-none"
                                                >
                                                    Get started
                                                </button>
                                            </div>
                                            {/* List */}
                                            <ul className="mt-7 space-y-2.5 text-sm">
                                                <li className="flex items-center gap-x-3">
                                                    <svg
                                                        className="shrink-0 size-4 text-gray-800 dark:text-neutral-200"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                    <span className="text-gray-800 dark:text-neutral-400">
                      100 GB Cloud Storage
                    </span>
                                                </li>
                                                <li className="flex items-center gap-x-3">
                                                    <svg
                                                        className="shrink-0 size-4 text-gray-800 dark:text-neutral-200"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                    <span className="text-gray-800 dark:text-neutral-400">
                      200 API Requests/min
                    </span>
                                                </li>
                                                <li className="flex items-center gap-x-3">
                                                    <svg
                                                        className="shrink-0 size-4 text-gray-800 dark:text-neutral-200"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                    <span className="text-gray-800 dark:text-neutral-400">
                      15 Team Members
                    </span>
                                                </li>
                                                <li className="flex items-center gap-x-3">
                                                    <svg
                                                        className="shrink-0 size-4 text-gray-800 dark:text-neutral-200"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                    <span className="text-gray-800 dark:text-neutral-400">
                      20 Project Templates
                    </span>
                                                </li>
                                                <li className="flex items-center gap-x-3">
                                                    <svg
                                                        className="shrink-0 size-4 text-gray-800 dark:text-neutral-200"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                    <span className="text-gray-800 dark:text-neutral-400">
                      2000 Build Minutes/month
                    </span>
                                                </li>
                                                <li className="flex items-center gap-x-3">
                                                    <svg
                                                        className="shrink-0 size-4 text-gray-800 dark:text-neutral-200"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                    <span className="text-gray-800 dark:text-neutral-400">
                      24/7 Phone Support
                    </span>
                                                </li>
                                                <li className="flex items-center gap-x-3">
                                                    <svg
                                                        className="shrink-0 size-4 text-gray-800 dark:text-neutral-200"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                    <span className="text-gray-800 dark:text-neutral-400">
                      Enterprise Analytics
                    </span>
                                                </li>
                                            </ul>
                                            {/* End List */}
                                        </div>
                                        {/* End Body */}
                                    </div>
                                    {/* End Card */}
                                    {/* Card */}
                                    <div className="p-4 md:p-6 h-full flex flex-col bg-white border border-gray-200 rounded-xl shadow-xs dark:bg-neutral-900 dark:border-neutral-700">
                                        {/* Header */}
                                        <header className="flex flex-col">
                                            <h4 className="font-semibold text-lg text-gray-800 dark:text-neutral-200">
                                                Enterprise
                                            </h4>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-500 dark:text-neutral-500">
                                                    For large organizations
                                                </p>
                                            </div>
                                        </header>
                                        {/* End Header */}
                                        {/* Body */}
                                        <div className="flex flex-col">
                                            {/* Price */}
                                            <div className="mt-4 flex items-start gap-x-1">
                  <span className="font-semibold text-gray-800 text-xl dark:text-neutral-200">
                    $
                  </span>
                                                <span
                                                    data-hs-toggle-count='{
              "target": "#toggle-count",
              "min": 199,
              "max": 399
            }'
                                                    className="font-semibold text-3xl md:text-4xl text-gray-800 dark:text-neutral-200"
                                                >
                    199
                  </span>
                                                <span className="block mt-0.5 text-gray-800 dark:text-neutral-200">
                    USD
                  </span>
                                            </div>
                                            {/* End Price */}
                                            <p className="text-xs text-gray-500 dark:text-neutral-500">
                                                /month per person (Min 10 people)
                                            </p>
                                            <div className="mt-5 pb-7 border-b border-gray-200 dark:border-neutral-700">
                                                <button
                                                    type="button"
                                                    className="py-2 px-2.5 w-full inline-flex justify-center items-center gap-x-1.5 whitespace-nowrap text-[13px] md:text-sm rounded-lg shadow-md bg-blue-600 text-white hover:bg-blue-700 hover:shadow-none focus:outline-hidden focus:bg-blue-700 focus:shadow-none disabled:opacity-50 disabled:pointer-events-none"
                                                >
                                                    Get started
                                                </button>
                                            </div>
                                            {/* List */}
                                            <ul className="mt-7 space-y-2.5 text-sm">
                                                <li className="flex items-center gap-x-3">
                                                    <svg
                                                        className="shrink-0 size-4 text-gray-800 dark:text-neutral-200"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                    <span className="text-gray-800 dark:text-neutral-400">
                      Unlimited Storage
                    </span>
                                                </li>
                                                <li className="flex items-center gap-x-3">
                                                    <svg
                                                        className="shrink-0 size-4 text-gray-800 dark:text-neutral-200"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                    <span className="text-gray-800 dark:text-neutral-400">
                      Unlimited API Requests
                    </span>
                                                </li>
                                                <li className="flex items-center gap-x-3">
                                                    <svg
                                                        className="shrink-0 size-4 text-gray-800 dark:text-neutral-200"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                    <span className="text-gray-800 dark:text-neutral-400">
                      Unlimited Team Members
                    </span>
                                                </li>
                                                <li className="flex items-center gap-x-3">
                                                    <svg
                                                        className="shrink-0 size-4 text-gray-800 dark:text-neutral-200"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                    <span className="text-gray-800 dark:text-neutral-400">
                      Unlimited Project Templates
                    </span>
                                                </li>
                                                <li className="flex items-center gap-x-3">
                                                    <svg
                                                        className="shrink-0 size-4 text-gray-800 dark:text-neutral-200"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                    <span className="text-gray-800 dark:text-neutral-400">
                      Unlimited Build Minutes
                    </span>
                                                </li>
                                                <li className="flex items-center gap-x-3">
                                                    <svg
                                                        className="shrink-0 size-4 text-gray-800 dark:text-neutral-200"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                    <span className="text-gray-800 dark:text-neutral-400">
                      Dedicated Support Team
                    </span>
                                                </li>
                                                <li className="flex items-center gap-x-3">
                                                    <svg
                                                        className="shrink-0 size-4 text-gray-800 dark:text-neutral-200"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                    <span className="text-gray-800 dark:text-neutral-400">
                      Custom Analytics
                    </span>
                                                </li>
                                            </ul>
                                            {/* End List */}
                                        </div>
                                        {/* End Body */}
                                    </div>
                                    {/* End Card */}
                                </div>
                                {/* End Grid */}
                            </div>
                        </div>
                        <div className="max-w-2xl px-4 sm:px-6 lg:px-8 mx-auto">
                            {/* Card */}
                            <div className="p-4 bg-white border border-gray-200 rounded-xl dark:bg-neutral-900 dark:border-neutral-700">
                                <div className="flex gap-x-4">
                                    <svg
                                        className="shrink-0 size-7 mt-1 text-blue-600 dark:text-blue-500"
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
                                        <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z" />
                                        <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                                    </svg>
                                    <div className="grow">
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                                            <div className="grow">
                                                <h4 className="font-medium text-gray-800 dark:text-neutral-200">
                                                    Need custom plan?
                                                </h4>
                                                <p className="text-sm text-gray-500 dark:text-neutral-500">
                                                    Talk to our team to customize a plan that suits your needs.
                                                </p>
                                            </div>
                                            <div>
                                                <a
                                                    className="py-2 px-2.5 inline-flex items-center gap-x-1.5 whitespace-nowrap text-[13px] md:text-sm rounded-lg bg-white border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                                    href="#"
                                                >
                                                    Contact sales
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Card */}
                        </div>
                    </div>
                    {/* End Hero */}
                    {/* Compare Plans */}
                    <div className="pt-14 lg:pt-24">
                        <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
                            {/* Comparison Table */}
                            <div className="relative">
                                <div className="mb-8 max-w-2xl mx-auto text-center">
                                    <h2 className="font-semibold text-3xl text-gray-800 dark:text-neutral-200">
                                        Compare plan features
                                    </h2>
                                </div>
                                {/* Header */}
                                <div className="hidden lg:block sticky top-16 start-0 py-2 bg-white border-b border-gray-200 dark:bg-neutral-900 dark:border-neutral-700">
                                    {/* Grid */}
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-2 pb-4">
                <span className="font-semibold text-lg text-gray-800 dark:text-neutral-200">
                  Features
                </span>
                                        </div>
                                        {/* End Col */}
                                        <div className="col-span-1 pb-4">
                <span className="font-semibold text-lg text-gray-800 dark:text-neutral-200">
                  Free
                </span>
                                            <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
                                                Free forever
                                            </p>
                                        </div>
                                        {/* End Col */}
                                        <div className="col-span-1 pb-4">
                <span className="font-semibold text-lg text-gray-800 dark:text-neutral-200">
                  Startup
                </span>
                                            <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
                                                $39 per month billed annually
                                            </p>
                                        </div>
                                        {/* End Col */}
                                        <div className="col-span-1 pb-4">
                <span className="font-semibold text-lg text-gray-800 dark:text-neutral-200">
                  Team
                </span>
                                            <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
                                                $89 per month billed annually
                                            </p>
                                        </div>
                                        {/* End Col */}
                                        <div className="col-span-1 pb-4">
                <span className="font-semibold text-lg text-gray-800 dark:text-neutral-200">
                  Enterprise
                </span>
                                            <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
                                                $149 per month billed annually
                                            </p>
                                        </div>
                                        {/* End Col */}
                                    </div>
                                    {/* End Grid */}
                                </div>
                                {/* End Header */}
                                {/* Section */}
                                <div className="mt-6 space-y-4 lg:space-y-0">
                                    {/* List */}
                                    <ul className="grid lg:grid-cols-6 lg:gap-6">
                                        {/* Item */}
                                        <li className="lg:col-span-2 lg:py-3">
                <span className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  General
                </span>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                                        {/* End Item */}
                                    </ul>
                                    {/* End List */}
                                    {/* List */}
                                    <ul className="grid lg:grid-cols-6 lg:gap-6">
                                        {/* Item */}
                                        <li className="lg:col-span-2 pb-1.5 lg:py-3">
                <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
                  Number of seats
                </span>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Free
                  </span>
                                                <span className="text-sm text-gray-800 dark:text-neutral-200">
                    1
                  </span>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Startup
                  </span>
                                                <span className="text-sm text-gray-800 dark:text-neutral-200">
                    Up to 3
                  </span>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Team
                  </span>
                                                <span className="text-sm text-gray-800 dark:text-neutral-200">
                    Up to 10
                  </span>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Enterprise
                  </span>
                                                <span className="text-sm text-gray-800 dark:text-neutral-200">
                    Unlimited
                  </span>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                    </ul>
                                    {/* End List */}
                                    {/* List */}
                                    <ul className="grid lg:grid-cols-6 lg:gap-6">
                                        {/* Item */}
                                        <li className="lg:col-span-2 pb-1.5 lg:py-3">
                <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
                  Storage
                </span>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Free
                  </span>
                                                <span className="text-sm text-gray-800 dark:text-neutral-200">
                    15 GB
                  </span>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Startup
                  </span>
                                                <span className="text-sm text-gray-800 dark:text-neutral-200">
                    1 TB
                  </span>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Team
                  </span>
                                                <span className="text-sm text-gray-800 dark:text-neutral-200">
                    15 TB
                  </span>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Enterprise
                  </span>
                                                <span className="text-sm text-gray-800 dark:text-neutral-200">
                    Unlimited
                  </span>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                    </ul>
                                    {/* End List */}
                                    {/* List */}
                                    <ul className="grid lg:grid-cols-6 lg:gap-6">
                                        {/* Item */}
                                        <li className="lg:col-span-2 pb-1.5 lg:py-3">
                <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
                  Email sharing
                </span>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Free
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
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
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Startup
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
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
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Team
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
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
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Enterprise
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
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
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                    </ul>
                                    {/* End List */}
                                    {/* List */}
                                    <ul className="grid lg:grid-cols-6 lg:gap-6">
                                        {/* Item */}
                                        <li className="lg:col-span-2 pb-1.5 lg:py-3">
                <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
                  Any time, anywhere access
                </span>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Free
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-gray-800 dark:text-neutral-200"
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
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Startup
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
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
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Team
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
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
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Enterprise
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
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
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                    </ul>
                                    {/* End List */}
                                </div>
                                {/* End Section */}
                                {/* Section */}
                                <div className="mt-6 space-y-4 lg:space-y-0">
                                    {/* List */}
                                    <ul className="grid lg:grid-cols-6 lg:gap-6">
                                        {/* Item */}
                                        <li className="lg:col-span-2 lg:py-3">
                <span className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  Financial data
                </span>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                                        {/* End Item */}
                                    </ul>
                                    {/* End List */}
                                    {/* List */}
                                    <ul className="grid lg:grid-cols-6 lg:gap-6">
                                        {/* Item */}
                                        <li className="lg:col-span-2 pb-1.5 lg:py-3">
                <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
                  Open/High/Low/Close
                </span>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Free
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-gray-800 dark:text-neutral-200"
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
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Startup
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-gray-800 dark:text-neutral-200"
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
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Team
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
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
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Enterprise
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
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
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                    </ul>
                                    {/* End List */}
                                    {/* List */}
                                    <ul className="grid lg:grid-cols-6 lg:gap-6">
                                        {/* Item */}
                                        <li className="lg:col-span-2 pb-1.5 lg:py-3">
                <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
                  Price-volume difference indicator
                </span>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Free
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-gray-800 dark:text-neutral-200"
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
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Startup
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
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
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Team
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
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
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Enterprise
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
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
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                    </ul>
                                    {/* End List */}
                                </div>
                                {/* End Section */}
                                {/* Section */}
                                <div className="mt-6 space-y-4 lg:space-y-0">
                                    {/* List */}
                                    <ul className="grid lg:grid-cols-6 lg:gap-6">
                                        {/* Item */}
                                        <li className="lg:col-span-2 lg:py-3">
                <span className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  On-chain data
                </span>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                                        {/* End Item */}
                                    </ul>
                                    {/* End List */}
                                    {/* List */}
                                    <ul className="grid lg:grid-cols-6 lg:gap-6">
                                        {/* Item */}
                                        <li className="lg:col-span-2 pb-1.5 lg:py-3">
                <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
                  Network growth
                </span>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Free
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-gray-800 dark:text-neutral-200"
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
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Startup
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-gray-800 dark:text-neutral-200"
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
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Team
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
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
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Enterprise
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
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
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                    </ul>
                                    {/* End List */}
                                    {/* List */}
                                    <ul className="grid lg:grid-cols-6 lg:gap-6">
                                        {/* Item */}
                                        <li className="lg:col-span-2 pb-1.5 lg:py-3">
                <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
                  Average token age consumed
                </span>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Free
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-gray-800 dark:text-neutral-200"
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
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Startup
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
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
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Team
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
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
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Enterprise
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
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
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                    </ul>
                                    {/* End List */}
                                    {/* List */}
                                    <ul className="grid lg:grid-cols-6 lg:gap-6">
                                        {/* Item */}
                                        <li className="lg:col-span-2 pb-1.5 lg:py-3">
                <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
                  Exchange flow
                </span>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Free
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-gray-800 dark:text-neutral-200"
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
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Startup
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-gray-800 dark:text-neutral-200"
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
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Team
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-gray-800 dark:text-neutral-200"
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
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Enterprise
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
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
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                    </ul>
                                    {/* End List */}
                                    {/* List */}
                                    <ul className="grid lg:grid-cols-6 lg:gap-6">
                                        {/* Item */}
                                        <li className="lg:col-span-2 pb-1.5 lg:py-3">
                <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
                  Total ERC20 exchange funds flow
                </span>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Free
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-gray-800 dark:text-neutral-200"
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
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Startup
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
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
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Team
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
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
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Enterprise
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
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
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                    </ul>
                                    {/* End List */}
                                    {/* List */}
                                    <ul className="grid lg:grid-cols-6 lg:gap-6">
                                        {/* Item */}
                                        <li className="lg:col-span-2 pb-1.5 lg:py-3">
                <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
                  Transaction volume
                </span>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Free
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-gray-800 dark:text-neutral-200"
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
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Startup
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-gray-800 dark:text-neutral-200"
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
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Team
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
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
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Enterprise
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
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
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                    </ul>
                                    {/* End List */}
                                    {/* List */}
                                    <ul className="grid lg:grid-cols-6 lg:gap-6">
                                        {/* Item */}
                                        <li className="lg:col-span-2 pb-1.5 lg:py-3">
                <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
                  Total circulation (beta)
                </span>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Free
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-gray-800 dark:text-neutral-200"
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
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Startup
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
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
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Team
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-gray-800 dark:text-neutral-200"
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
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Enterprise
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
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
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                    </ul>
                                    {/* End List */}
                                    {/* List */}
                                    <ul className="grid lg:grid-cols-6 lg:gap-6">
                                        {/* Item */}
                                        <li className="lg:col-span-2 pb-1.5 lg:py-3">
                <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
                  Velocity of tokens (beta)
                </span>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Free
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-gray-800 dark:text-neutral-200"
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
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Startup
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-gray-800 dark:text-neutral-200"
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
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Team
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-gray-800 dark:text-neutral-200"
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
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Enterprise
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
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
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                    </ul>
                                    {/* End List */}
                                    {/* List */}
                                    <ul className="grid lg:grid-cols-6 lg:gap-6">
                                        {/* Item */}
                                        <li className="lg:col-span-2 pb-1.5 lg:py-3">
                <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
                  ETH gas used
                </span>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Free
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-gray-800 dark:text-neutral-200"
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
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Startup
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
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
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Team
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
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
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Enterprise
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
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
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                    </ul>
                                    {/* End List */}
                                </div>
                                {/* End Section */}
                                {/* Section */}
                                <div className="mt-6 space-y-4 lg:space-y-0">
                                    {/* List */}
                                    <ul className="grid lg:grid-cols-6 lg:gap-6">
                                        {/* Item */}
                                        <li className="lg:col-span-2 lg:py-3">
                <span className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  Social data
                </span>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                                        {/* End Item */}
                                    </ul>
                                    {/* End List */}
                                    {/* List */}
                                    <ul className="grid lg:grid-cols-6 lg:gap-6">
                                        {/* Item */}
                                        <li className="lg:col-span-2 pb-1.5 lg:py-3">
                <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
                  Dev activity
                </span>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Free
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-gray-800 dark:text-neutral-200"
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
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Startup
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-gray-800 dark:text-neutral-200"
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
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Team
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
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
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Enterprise
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
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
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                    </ul>
                                    {/* End List */}
                                    {/* List */}
                                    <ul className="grid lg:grid-cols-6 lg:gap-6">
                                        {/* Item */}
                                        <li className="lg:col-span-2 pb-1.5 lg:py-3">
                <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
                  Topic search
                </span>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Free
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-gray-800 dark:text-neutral-200"
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
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Startup
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
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
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Team
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
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
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Enterprise
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
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
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                    </ul>
                                    {/* End List */}
                                    {/* List */}
                                    <ul className="grid lg:grid-cols-6 lg:gap-6">
                                        {/* Item */}
                                        <li className="lg:col-span-2 pb-1.5 lg:py-3">
                <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
                  Relative social dominance
                </span>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Free
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-gray-800 dark:text-neutral-200"
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
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Startup
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-gray-800 dark:text-neutral-200"
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
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Team
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-gray-800 dark:text-neutral-200"
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
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                        {/* Item */}
                                        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-700">
                                            <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                    Enterprise
                  </span>
                                                <svg
                                                    className="shrink-0 size-5 text-blue-600 dark:text-blue-500"
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
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                        </li>
                                        {/* End Item */}
                                    </ul>
                                    {/* End List */}
                                </div>
                                {/* End Section */}
                                {/* Header */}
                                <div className="hidden lg:block mt-6">
                                    {/* Grid */}
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-2"></div>
                                        {/* End Col */}
                                        <div className="col-span-1">
                                            <a
                                                className="py-2.5 px-3.5 w-full inline-flex justify-center items-center gap-x-1.5 whitespace-nowrap text-[13px] md:text-sm rounded-lg bg-white border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                                href="#"
                                            >
                                                Get started
                                            </a>
                                        </div>
                                        {/* End Col */}
                                        <div className="col-span-1">
                                            <a
                                                className="py-2.5 px-3.5 w-full inline-flex justify-center items-center gap-x-1.5 whitespace-nowrap text-[13px] md:text-sm rounded-lg shadow-md bg-blue-600 text-white hover:bg-blue-700 hover:shadow-none focus:outline-hidden focus:bg-blue-700 focus:shadow-none disabled:opacity-50 disabled:pointer-events-none"
                                                href="#"
                                            >
                                                Get started
                                            </a>
                                        </div>
                                        {/* End Col */}
                                        <div className="col-span-1">
                                            <a
                                                className="py-2.5 px-3.5 w-full inline-flex justify-center items-center gap-x-1.5 whitespace-nowrap text-[13px] md:text-sm rounded-lg shadow-md bg-blue-600 text-white hover:bg-blue-700 hover:shadow-none focus:outline-hidden focus:bg-blue-700 focus:shadow-none disabled:opacity-50 disabled:pointer-events-none"
                                                href="#"
                                            >
                                                Get started
                                            </a>
                                        </div>
                                        {/* End Col */}
                                        <div className="col-span-1">
                                            <a
                                                className="py-2.5 px-3.5 w-full inline-flex justify-center items-center gap-x-1.5 whitespace-nowrap text-[13px] md:text-sm rounded-lg shadow-md bg-blue-600 text-white hover:bg-blue-700 hover:shadow-none focus:outline-hidden focus:bg-blue-700 focus:shadow-none disabled:opacity-50 disabled:pointer-events-none"
                                                href="#"
                                            >
                                                Get started
                                            </a>
                                        </div>
                                        {/* End Col */}
                                    </div>
                                    {/* End Grid */}
                                </div>
                                {/* End Header */}
                            </div>
                            {/* End Comparison Table */}
                        </div>
                    </div>
                    {/* End Compare Plans */}
                    {/* Clients */}
                    <div className="pb-10 pt-20 lg:pt-32">
                        <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
                            {/* Heading */}
                            <div className="mb-8 text-center">
                                <p className="font-mono text-sm text-gray-500 dark:text-neutral-400">
                                    Trusted by fast-growing companies worldwide
                                </p>
                            </div>
                            {/* End Heading */}
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
                                                <path
                                                    d="M152.87 0H165.357V68.8831H152.87V0Z"
                                                    fill="currentColor"
                                                />
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
                                                <path
                                                    d="M152.87 0H165.357V68.8831H152.87V0Z"
                                                    fill="currentColor"
                                                />
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
                    {/* FAQ */}
                    <div className="py-14 lg:py-20">
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
                                                    Yes, you can cancel anytime no questions are asked while you
                                                    cancel but we would highly appreciate if you will give us
                                                    some feedback.
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
                                                    Once your team signs up for a subscription plan. This is
                                                    where we sit down, grab a cup of coffee and dial in the
                                                    details.
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
                                                    Our subscriptions are tiered. Understanding the task at hand
                                                    and ironing out the wrinkles is key.
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
                                                    Protecting the data you trust to Preline is our first
                                                    priority. This part is really crucial in keeping the project
                                                    in line to completion.
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
                                                    If you lose the link for a theme you purchased, don't panic!
                                                    We've got you covered. You can login to your account, tap
                                                    your avatar in the upper right corner, and tap Purchases. If
                                                    you didn't create a login or can't remember the information,
                                                    you can use our handy Redownload page, just remember to use
                                                    the same email you originally made your purchases with.
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
                                                    There may be times when you need to upgrade your license
                                                    from the original type you purchased and we have a solution
                                                    that ensures you can apply your original purchase cost to
                                                    the new license purchase.
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

        </GuestLayout>
    );
}


