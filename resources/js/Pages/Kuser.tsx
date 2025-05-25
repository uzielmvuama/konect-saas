import React from "react";
import AppLayout from "@/Layouts/AppLayout";
import GuestLayout from "@/Layouts/GuestLayout";

export default function Kuser() {
  return (
    <GuestLayout title="Kuser - " showFooter={false} showHeader={false}>
      <div className="min-h-screen flex items-center justify-center px-4">
        {/* User Profile Card */}
        <div className="bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700 w-full max-w-md">
          {/* SVG Background Element */}
          <figure className="shrink-0 h-40 overflow-hidden rounded-t-xl">
            <svg
              className="w-full h-40 rounded-t-xl"
              preserveAspectRatio="xMidYMid slice"
              width="1113"
              height="161"
              viewBox="0 0 1113 161"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_697_201879)">
                <rect x="1" width="1112" height="348" fill="#B2E7FE" />
                <rect
                  width="185.209"
                  height="704.432"
                  transform="matrix(0.50392 0.86375 -0.860909 0.508759 435.452 -177.87)"
                  fill="#FF8F5D"
                />
                <rect
                  width="184.653"
                  height="378.667"
                  transform="matrix(0.849839 -0.527043 0.522157 0.852849 -10.4556 -16.4521)"
                  fill="#3ECEED"
                />
                <rect
                  width="184.653"
                  height="189.175"
                  transform="matrix(0.849839 -0.527043 0.522157 0.852849 35.4456 58.5195)"
                  fill="#4C48FF"
                />
              </g>
              <defs>
                <clipPath id="clip0_697_201879">
                  <rect x="0.5" width="1112" height="161" rx="12" fill="white" />
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
                src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                alt="Hero Image"
              />
            </div>
          </div>
          {/* End Avatar */}

          {/* Body */}
          <div className="p-4 sm:p-8">
            {/* List */}
            <dl className="grid grid-cols-2 gap-y-2 gap-x-4">
              <dt className="py-1 text-end text-sm text-gray-500 dark:text-neutral-500">
                Full name:
              </dt>
              <dd className="py-1 font-medium text-sm text-gray-800 dark:text-neutral-200">
                Amanda Harvey
              </dd>

              <dt className="py-1 text-end text-sm text-gray-500 dark:text-neutral-500">Email:</dt>
              <dd className="py-1 font-medium text-sm text-gray-800 dark:text-neutral-200">
                amanda@site.com
              </dd>

              <dt className="py-1 text-end text-sm text-gray-500 dark:text-neutral-500">Phone:</dt>
              <dd className="py-1 font-medium text-sm text-gray-800 dark:text-neutral-200">
                +1 (609) 972-22-22
              </dd>

              <dt className="py-1 text-end text-sm text-gray-500 dark:text-neutral-500">
                Organization:
              </dt>
              <dd className="py-1 font-medium text-sm text-gray-800 dark:text-neutral-200">
                Notion
              </dd>

              <dt className="py-1 text-end text-sm text-gray-500 dark:text-neutral-500">
                Department:
              </dt>
              <dd className="py-1 font-medium text-sm text-gray-800 dark:text-neutral-200">-</dd>

              <dt className="py-1 text-end text-sm text-gray-500 dark:text-neutral-500">
                Account type:
              </dt>
              <dd className="py-1 font-medium text-sm text-gray-800 dark:text-neutral-200">
                Individual
              </dd>

              <dt className="py-1 text-end text-sm text-gray-500 dark:text-neutral-500">
                Country:
              </dt>
              <dd className="py-1 font-medium text-sm text-gray-800 dark:text-neutral-200">
                <span className="flex items-center gap-x-1.5">
                  <svg
                    className="shrink-0 size-4 rounded-full"
                    xmlns="http://www.w3.org/2000/svg"
                    id="flag-icon-css-gb"
                    viewBox="0 0 512 512"
                  >
                    <path fill="#012169" d="M0 0h512v512H0z" />
                    <path
                      fill="#FFF"
                      d="M512 0v64L322 256l190 187v69h-67L254 324 68 512H0v-68l186-187L0 74V0h62l192 188L440 0z"
                    />
                    <path
                      fill="#C8102E"
                      d="M184 324l11 34L42 512H0v-3l184-185zm124-12l54 8 150 147v45L308 312zM512 0L320 196l-4-44L466 0h46zM0 1l193 189-59-8L0 49V1z"
                    />
                    <path fill="#FFF" d="M176 0v512h160V0H176zM0 176v160h512V176H0z" />
                    <path fill="#C8102E" d="M0 208v96h512v-96H0zM208 0v512h96V0h-96z" />
                  </svg>{" "}
                  United Kingdom
                </span>
              </dd>

              <dt className="py-1 text-end text-sm text-gray-500 dark:text-neutral-500">City:</dt>
              <dd className="py-1 font-medium text-sm text-gray-800 dark:text-neutral-200">
                London
              </dd>

              <dt className="py-1 text-end text-sm text-gray-500 dark:text-neutral-500">State:</dt>
              <dd className="py-1 font-medium text-sm text-gray-800 dark:text-neutral-200">-</dd>

              <dt className="py-1 text-end text-sm text-gray-500 dark:text-neutral-500">
                Address line 1:
              </dt>
              <dd className="py-1 font-medium text-sm text-gray-800 dark:text-neutral-200">
                45 Roker Terrace, Latheronwheel
              </dd>

              <dt className="py-1 text-end text-sm text-gray-500 dark:text-neutral-500">
                Address line 2:
              </dt>
              <dd className="py-1 font-medium text-sm text-gray-800 dark:text-neutral-200">-</dd>

              <dt className="py-1 text-end text-sm text-gray-500 dark:text-neutral-500">
                Zip code:
              </dt>
              <dd className="py-1 font-medium text-sm text-gray-800 dark:text-neutral-200">
                KW5 8NW
              </dd>
            </dl>
            {/* End List */}
          </div>
          {/* End Body */}

          {/* Footer */}
          <div className="p-4 flex flex-wrap justify-between gap-2 border-t border-gray-200 dark:border-neutral-700">
            <div>
              <button
                type="button"
                className="py-2 px-3 inline-flex justify-center items-center text-start bg-white border border-gray-200 text-red-500 text-sm font-medium rounded-lg shadow-2xs align-middle hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              >
                Delete
              </button>
            </div>

            <div className="flex-1 flex justify-end items-center gap-2">
              <button
                type="button"
                className="py-2 px-3 text-nowrap inline-flex justify-center items-center text-start whitespace-nowrap bg-white border border-gray-200 text-gray-800 text-sm font-medium rounded-lg shadow-2xs align-middle hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              >
                Cancel
              </button>

              <button
                type="button"
                className="py-2 px-3 text-nowrap inline-flex justify-center items-center gap-x-2 text-start whitespace-nowrap bg-blue-600 border border-blue-600 text-white text-sm font-medium rounded-lg shadow-2xs align-middle hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-1 focus:ring-blue-300 dark:focus:ring-blue-500"
              >
                Add user
              </button>
            </div>
          </div>
          {/* End Footer */}
        </div>
        {/* End User Profile Card */}
      </div>
    </GuestLayout>
  );
}
