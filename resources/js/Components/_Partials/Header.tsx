import React from "react";
import {Link, usePage} from "@inertiajs/react";
import AppLogo from "@/Components/_Partials/AppLogo";
import MainButton from "@/Components/Buttons/MainButton";

export default function Header() {
  return (
    <header className="sticky top-0 inset-x-0 z-50 bg-white dark:bg-neutral-900">
      <nav className="max-w-6xl basis-full w-full py-4 px-4 sm:px-6 lg:px-8 lg:mx-auto">
        <div className="flex flex-wrap md:flex-nowrap basis-full justify-between gap-x-2 w-full">
          <div className="flex items-center gap-x-1">
           <AppLogo href="/" />
            <div className="ms-1 sm:ms-2"></div>
          </div>

          {/* Button Group */}
          <div className="md:order-3 flex gap-x-1">
            {/*<a className="py-2 px-2.5 hidden md:flex items-center gap-x-1.5 text-sm whitespace-nowrap text-start text-gray-800 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">*/}
            {/*    Get a demo*/}
            {/*</a>*/}

            <Link
              className="py-2 px-2.5 flex items-center gap-x-1.5 whitespace-nowrap text-[13px] md:text-sm text-start text-gray-800 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              href="/login"
            >
              Connexion
            </Link>

            <MainButton title={"Essai gratuit"} />

            {/* Collapse Button Trigger */}
            <button
              type="button"
              className="hs-collapse-toggle md:hidden flex justify-center items-center size-9 rounded-lg shadow-2xs bg-white border border-gray-200 text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:hover:bg-neutral-800 dark:text-neutral-300 dark:focus:bg-neutral-800"
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
          {/* End Button Group */}

          {/* Collapse */}
          <div
            id="hs-pro-dmh"
            className="ml-5 hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block bg-white dark:bg-neutral-900"
            aria-labelledby="hs-pro-dmh-collapse"
          >
            <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-white/10 [&::-webkit-scrollbar-thumb]:bg-white/30 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
              {/* Nav */}
              <div className="flex flex-col md:flex-row md:gap-y-0 md:gap-x-1 py-2 md:p-0">
                <a
                  className="py-2 px-2.5 flex items-center gap-x-1.5 text-sm whitespace-nowrap text-start text-gray-800 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  href="#"
                >
                  Pour Entreprises
                </a>

                <a
                  className="py-2 px-2.5 flex items-center gap-x-1.5 text-sm whitespace-nowrap text-start text-gray-800 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  href="/features"
                >
                  Fonctionalités
                </a>

                <a
                  className="py-2 px-2.5 flex items-center gap-x-1.5 text-sm whitespace-nowrap text-start text-gray-800 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  href="/product/list"
                >
                  Produits
                </a>

                <Link
                  className="py-2 px-2.5 flex items-center gap-x-1.5 text-sm whitespace-nowrap text-start text-gray-800 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  href="/plans"
                >
                  Prix et tarrifs
                </Link>

                <a
                  className="py-2 px-2.5 flex items-center gap-x-1.5 text-sm whitespace-nowrap text-start text-gray-800 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  href="/about"
                >
                  A propos
                </a>

                <a
                  className="py-2 px-2.5 md:hidden flex items-center gap-x-1.5 text-sm whitespace-nowrap text-start text-gray-800 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  href="#"
                >
                  Get a demo
                </a>
              </div>
              {/* End Nav */}
            </div>
          </div>
          {/* End Collapse */}
        </div>
      </nav>
    </header>
  );
}
