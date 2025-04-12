import {Head} from '@inertiajs/react';
import PrelineProviderLayout from "@/Layouts/PrelineProviderLayout";


interface AuthProps {
    title: string;
    bgSrc?: string | undefined;
    children?: React.ReactNode;
}

export default function AuthLayout({title, bgSrc, children}: AuthProps) {
    return (
        <PrelineProviderLayout>
            <Head title={title}/>
            {/* ========== MAIN CONTENT ========== */}
            <main className="flex min-h-full">
                {/* Sidebar */}
                <div
                    className="hidden min-h-screen lg:w-100 xl:w-107.5bg-gray-100 lg:flex flex-col justify-between p-6 dark:bg-neutral-950">
                    {/* Header */}
                    <div className="flex flex-wrap justify-between items-center gap-2">
                        {/* Logo */}
                        <a className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80"
                           href="#" aria-label="Preline">
                            <svg className="w-9 h-auto" width="36" height="36" viewBox="0 0 36 36" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M18.0835 3.23358C9.88316 3.23358 3.23548 9.8771 3.23548 18.0723V35.5832H0.583496V18.0723C0.583496 8.41337 8.41851 0.583252 18.0835 0.583252C27.7485 0.583252 35.5835 8.41337 35.5835 18.0723C35.5835 27.7312 27.7485 35.5614 18.0835 35.5614H16.7357V32.911H18.0835C26.2838 32.911 32.9315 26.2675 32.9315 18.0723C32.9315 9.8771 26.2838 3.23358 18.0835 3.23358Z"
                                      className="fill-blue-600 dark:fill-blue-500" fill="currentColor"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M18.0833 8.62162C12.8852 8.62162 8.62666 12.9245 8.62666 18.2879V35.5833H5.97468V18.2879C5.97468 11.5105 11.3713 5.97129 18.0833 5.97129C24.7954 5.97129 30.192 11.5105 30.192 18.2879C30.192 25.0653 24.7954 30.6045 18.0833 30.6045H16.7355V27.9542H18.0833C23.2815 27.9542 27.54 23.6513 27.54 18.2879C27.54 12.9245 23.2815 8.62162 18.0833 8.62162Z"
                                      className="fill-blue-600 dark:fill-blue-500" fill="currentColor"/>
                                <path
                                    d="M24.8225 18.1012C24.8225 21.8208 21.8053 24.8361 18.0833 24.8361C14.3614 24.8361 11.3442 21.8208 11.3442 18.1012C11.3442 14.3815 14.3614 11.3662 18.0833 11.3662C21.8053 11.3662 24.8225 14.3815 24.8225 18.1012Z"
                                    className="fill-blue-600 dark:fill-blue-500" fill="currentColor"/>
                            </svg>
                        </a>
                        {/* End Logo */}

                        {/* Language Select */}
                        <div className="relative">
                            <select id="hs-pro-select-language" data-hs-select='{
              "placeholder": "Select country",
              "toggleTag": "<button type=\"button\" aria-expanded=\"false\"><div data-icon></div></button>",
              "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-2 px-3 pe-7 flex items-center gap-x-2 text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-lg text-start text-sm text-gray-800 hover:border-gray-300 focus:outline-hidden focus:border-gray-300 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-200 dark:hover:border-neutral-700 dark:focus:border-neutral-700",
              "dropdownClasses": "end-0 w-full min-w-45 max-h-72 p-1 space-y-0.5 z-50 w-full overflow-hidden overflow-y-auto bg-white rounded-xl shadow-xl [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900",
              "optionClasses": "hs-selected:bg-gray-100 dark:hs-selected:bg-neutral-800 py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800",
              "optionTemplate": "<div><div className=\"flex items-center gap-x-2\"><div data-icon></div><div className=\"text-gray-800 dark:text-neutral-200 \" data-title></div><span className=\"hidden hs-selected:block ms-auto\"><svg className=\"shrink-0 size-3.5 text-gray-800 dark:text-neutral-200 \" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div></div>"
            }' className="hidden">
                                <option defaultValue="">Choose</option>
                                <option defaultValue="English-us" selected data-hs-select-option='{
              "icon": "<svg className=\"shrink-0 size-4 rounded-full\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><g fillRule=\"evenodd\"><g strokeWidth=\"1pt\"><path fill=\"#bd3d44\" d=\"M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z\" transform=\"scale(3.9385)\"/><path fill=\"#fff\" d=\"M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z\" transform=\"scale(3.9385)\"/></g><path fill=\"#192f5d\" d=\"M0 0h98.8v70H0z\" transform=\"scale(3.9385)\"/><path fill=\"#fff\" d=\"M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z\" transform=\"scale(3.9385)\"/></g></svg>"}'>
                                    English (US)
                                </option>
                                <option value="English-uk" data-hs-select-option='{
              "icon": "<svg className=\"shrink-0 size-4 rounded-full\" xmlns=\"http://www.w3.org/2000/svg\" id=\"flag-icon-css-gb\" viewBox=\"0 0 512 512\"><path fill=\"#012169\" d=\"M0 0h512v512H0z\"/><path fill=\"#FFF\" d=\"M512 0v64L322 256l190 187v69h-67L254 324 68 512H0v-68l186-187L0 74V0h62l192 188L440 0z\"/><path fill=\"#C8102E\" d=\"M184 324l11 34L42 512H0v-3l184-185zm124-12l54 8 150 147v45L308 312zM512 0L320 196l-4-44L466 0h46zM0 1l193 189-59-8L0 49V1z\"/><path fill=\"#FFF\" d=\"M176 0v512h160V0H176zM0 176v160h512V176H0z\"/><path fill=\"#C8102E\" d=\"M0 208v96h512v-96H0zM208 0v512h96V0h-96z\"/></svg>"}'>
                                    English (UK)
                                </option>
                                <option defaultValue="Deutsch" data-hs-select-option='{
              "icon": "<svg className=\"shrink-0 size-4 rounded-full\" xmlns=\"http://www.w3.org/2000/svg\" id=\"flag-icon-css-de\" viewBox=\"0 0 512 512\"><path fill=\"#ffce00\" d=\"M0 341.3h512V512H0z\"/><path d=\"M0 0h512v170.7H0z\"/><path fill=\"#d00\" d=\"M0 170.7h512v170.6H0z\"/></svg>"}'>
                                    Deutsch
                                </option>
                                <option defaultValue="Dansk" data-hs-select-option='{
              "icon": "<svg className=\"shrink-0 size-4 rounded-full\" xmlns=\"http://www.w3.org/2000/svg\" id=\"flag-icon-css-dk\" viewBox=\"0 0 512 512\"><path fill=\"#c8102e\" d=\"M0 0h512.1v512H0z\"/><path fill=\"#fff\" d=\"M144 0h73.1v512H144z\"/><path fill=\"#fff\" d=\"M0 219.4h512.1v73.2H0z\"/></svg>"}'>
                                    Dansk
                                </option>
                                <option defaultValue="Italiano" data-hs-select-option='{
              "icon": "<svg className=\"shrink-0 size-4 rounded-full\" xmlns=\"http://www.w3.org/2000/svg\" id=\"flag-icon-css-it\" viewBox=\"0 0 512 512\"><g fillRule=\"evenodd\" strokeWidth=\"1pt\"><path fill=\"#fff\" d=\"M0 0h512v512H0z\"/><path fill=\"#009246\" d=\"M0 0h170.7v512H0z\"/><path fill=\"#ce2b37\" d=\"M341.3 0H512v512H341.3z\"/></g></svg>"}'>
                                    Italiano
                                </option>
                                <option defaultValue="中文-繁體" data-hs-select-option='{
              "icon": "<svg className=\"shrink-0 size-4 rounded-full\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" id=\"flag-icon-css-cn\" viewBox=\"0 0 512 512\"><defs><path id=\"a\" fill=\"#ffde00\" d=\"M1-.3L-.7.8 0-1 .6.8-1-.3z\"/></defs><path fill=\"#de2910\" d=\"M0 0h512v512H0z\"/><use width=\"30\" height=\"20\" transform=\"matrix(76.8 0 0 76.8 128 128)\" xlink:href=\"#a\"/><use width=\"30\" height=\"20\" transform=\"rotate(-121 142.6 -47) scale(25.5827)\" xlink:href=\"#a\"/><use width=\"30\" height=\"20\" transform=\"rotate(-98.1 198 -82) scale(25.6)\" xlink:href=\"#a\"/><use width=\"30\" height=\"20\" transform=\"rotate(-74 272.4 -114) scale(25.6137)\" xlink:href=\"#a\"/><use width=\"30\" height=\"20\" transform=\"matrix(16 -19.968 19.968 16 256 230.4)\" xlink:href=\"#a\"/></svg>"}'>
                                    中文 (繁體)
                                </option>
                            </select>

                            <div className="absolute top-1/2 end-2.5 -translate-y-1/2">
                                <svg className="shrink-0 size-3.5 text-gray-500 dark:text-neutral-500"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round">
                                    <path d="m7 15 5 5 5-5"/>
                                    <path d="m7 9 5-5 5 5"/>
                                </svg>
                            </div>
                            {/* End Header */}
                        </div>
                        {/* End Language Select */}
                    </div>
                    {/* End Header */}

                    {/* Body */}
                    <div>
          <span className="text-2xl font-medium text-gray-800 dark:text-white">
            The simplest way to manage your workforce
          </span>

                        <img className="dark:hidden"
                             src={bgSrc ? bgSrc : "../../assets/svg/pro/authentication-charts.svg"}
                             alt="Charts Mockups"/>
                        <img className="hidden dark:block"
                             src={bgSrc ? bgSrc : "../../assets/svg/pro/authentication-charts-dark.svg"}
                             alt="Charts Mockups"/>
                    </div>
                    {/* End Body */}

                    {/* Footer */}
                    <div className="flex justify-center gap-x-8">
                        <svg className="w-20" width="81" height="20" viewBox="0 0 81 20" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_399_369933)">
                                <path
                                    d="M57.5137 7.91177C56.3526 7.91177 55.5239 8.30838 55.1172 9.05941L54.8986 9.46615V8.10754H53.0092V16.3655H54.9965V11.4526C54.9965 10.2788 55.6344 9.60539 56.7458 9.60539C57.8057 9.60539 58.4133 10.2611 58.4133 11.4036V16.3655H60.4014V11.0492C60.4014 9.08304 59.3221 7.91177 57.5137 7.91177ZM47.876 7.91177C45.5309 7.91177 44.0787 9.37502 44.0787 11.7302V12.8897C44.0787 15.1546 45.5478 16.5613 47.9132 16.5613C49.4954 16.5613 50.6042 15.9816 51.3021 14.7892L50.07 14.0804C49.5545 14.7681 48.7309 15.1942 47.914 15.1942C46.7166 15.1942 46.0018 14.455 46.0018 13.2162V12.888H51.5485V11.5184C51.5485 9.32438 50.108 7.91177 47.8777 7.91177H47.876ZM49.7401 11.553H45.9951V11.3547C45.9951 9.99525 46.6626 9.24506 47.8743 9.24506C49.0414 9.24506 49.7384 9.98428 49.7384 11.2231L49.7401 11.553ZM80.1375 6.74809V5.16839H73.2634V6.74809H75.6735V14.7824H73.2634V16.3621H80.1375V14.7824H77.7266V6.74809H80.1375ZM28.0159 4.94055C24.9459 4.94055 23.0371 6.85357 23.0371 9.93449V11.6003C23.0371 14.6803 24.9451 16.5942 28.0159 16.5942C31.0867 16.5942 32.9946 14.6803 32.9946 11.6003V9.93449C32.9938 6.8502 31.0833 4.94055 28.0159 4.94055ZM30.9407 11.7142C30.9407 13.7597 29.8749 14.9327 28.0159 14.9327C26.1569 14.9327 25.0919 13.7597 25.0919 11.7142V9.81973C25.0919 7.77422 26.1585 6.60126 28.0167 6.60126C29.8749 6.60126 30.9415 7.77422 30.9415 9.81973L30.9407 11.7142ZM39.2366 7.91177C38.1936 7.91177 37.2907 8.34382 36.8198 9.06701L36.6063 9.39611V8.10754H34.7161V19.2068H36.7042V15.1867L36.9169 15.5023C37.3641 16.1655 38.2375 16.5613 39.2535 16.5613C40.9674 16.5613 42.6964 15.4415 42.6964 12.9386V11.5344C42.6964 9.73112 41.6306 7.91177 39.2366 7.91177ZM40.7083 12.8416C40.7083 14.1723 39.932 14.9993 38.6831 14.9993C37.5185 14.9993 36.7059 14.1251 36.7059 12.8745V11.6323C36.7059 10.3665 37.5253 9.47543 38.6999 9.47543C39.9396 9.47543 40.71 10.3016 40.71 11.6323L40.7083 12.8416ZM65.8949 5.16924L61.884 16.3655H63.9034L64.6713 13.9656H69.2821L69.2897 13.9892L70.0492 16.3655H72.0677L68.0501 5.16839L65.8949 5.16924ZM65.1641 12.3867L66.9733 6.72615L68.764 12.3867H65.1641ZM19.1503 8.29488C19.3679 7.6417 19.4434 6.94957 19.3718 6.26484C19.3002 5.5801 19.0832 4.91857 18.7351 4.32454C18.2185 3.42674 17.4304 2.716 16.4842 2.29459C15.5379 1.87319 14.4824 1.76285 13.4695 1.97946C13.0126 1.46423 12.451 1.05255 11.8221 0.771961C11.1933 0.491375 10.5118 0.348365 9.82318 0.352504C8.78718 0.350146 7.7772 0.67693 6.93894 1.28572C6.10068 1.89451 5.47746 2.75384 5.15919 3.73974C4.48472 3.8781 3.84756 4.15887 3.29034 4.56329C2.73311 4.96771 2.26867 5.48645 1.92806 6.08482C1.40872 6.98114 1.18717 8.01913 1.29529 9.04938C1.40341 10.0796 1.83563 11.049 2.52973 11.818C2.31298 12.4706 2.2379 13.1619 2.30949 13.8458C2.38109 14.5297 2.59771 15.1905 2.94491 15.7841C3.46103 16.6836 4.24953 17.396 5.19669 17.8184C6.14385 18.2407 7.2007 18.3514 8.21479 18.1342C8.67124 18.6488 9.23222 19.0602 9.86028 19.3407C10.4883 19.6213 11.169 19.7646 11.8569 19.7612C12.8929 19.7636 13.9029 19.4368 14.7411 18.828C15.5794 18.2192 16.2026 17.3599 16.5209 16.374C17.1952 16.2355 17.8322 15.9547 18.3893 15.5503C18.9464 15.1459 19.4107 14.6272 19.7511 14.0289C20.2718 13.1329 20.4942 12.0945 20.3862 11.0639C20.2782 10.0332 19.8454 9.06351 19.1503 8.29488ZM11.8569 18.4954C11.0061 18.4962 10.1821 18.1974 9.52952 17.6516C9.55821 17.6355 9.6139 17.6077 9.64597 17.5866L13.5108 15.3554C13.6078 15.3003 13.6883 15.2204 13.7441 15.1238C13.7999 15.0273 13.8289 14.9176 13.8281 14.8061V9.35645L15.461 10.299C15.4698 10.3032 15.4774 10.3096 15.483 10.3176C15.4886 10.3256 15.4921 10.3349 15.493 10.3446V14.855C15.493 15.8198 15.1101 16.7451 14.4283 17.4277C13.7465 18.1103 12.8216 18.4943 11.8569 18.4954ZM4.04361 15.1588C3.61756 14.4225 3.46374 13.5599 3.60902 12.7217C3.63771 12.7395 3.68835 12.7698 3.72379 12.7901L7.58949 15.0221C7.68573 15.0785 7.79525 15.1082 7.90678 15.1082C8.01831 15.1082 8.12783 15.0785 8.22407 15.0221L12.9404 12.2948V14.1799C12.9413 14.1896 12.9396 14.1994 12.9356 14.2082C12.9316 14.2171 12.9254 14.2248 12.9176 14.2306L9.01055 16.4853C8.17515 16.9664 7.18307 17.0964 6.25194 16.8469C5.3208 16.5974 4.52662 15.9888 4.04361 15.1546V15.1588ZM3.03098 6.72024C3.45504 5.98284 4.12511 5.41822 4.92375 5.12535V9.71931C4.92318 9.83078 4.95227 9.94041 5.00802 10.0369C5.06378 10.1335 5.1442 10.2134 5.24104 10.2687L9.9582 12.9926L8.31943 13.9386C8.31144 13.944 8.30224 13.9472 8.29265 13.9481C8.28306 13.949 8.27341 13.9475 8.26458 13.9437L4.35837 11.688C3.52373 11.2052 2.91481 10.4108 2.6653 9.47943C2.4158 8.54802 2.5461 7.55567 3.02761 6.72024H3.03098ZM16.4483 9.84251L11.7311 7.11854L13.3623 6.17511C13.3703 6.16981 13.3795 6.16657 13.3891 6.16568C13.3987 6.1648 13.4083 6.1663 13.4172 6.17005L17.3234 8.42568C17.9217 8.77137 18.4091 9.28035 18.7286 9.89302C19.0481 10.5057 19.1865 11.1967 19.1276 11.8852C19.0686 12.5736 18.8147 13.2311 18.3957 13.7805C17.9766 14.3299 17.4097 14.7486 16.7614 14.9875V10.3944C16.7626 10.2826 16.7341 10.1726 16.6786 10.0756C16.6231 9.97853 16.5427 9.89808 16.4458 9.84251H16.4483ZM18.0744 7.39533C18.0457 7.37761 17.9951 7.34723 17.9596 7.32698L14.0939 5.09498C13.9977 5.03861 13.8882 5.0089 13.7766 5.0089C13.6651 5.0089 13.5556 5.03861 13.4594 5.09498L8.7422 7.8181V5.93377C8.74187 5.92407 8.74384 5.91442 8.74794 5.90562C8.75205 5.89682 8.75818 5.88912 8.76583 5.88314L12.672 3.62835C13.2706 3.28335 13.955 3.11594 14.6452 3.14571C15.3354 3.17549 16.0028 3.40123 16.5694 3.79651C17.136 4.19179 17.5782 4.74026 17.8445 5.37774C18.1107 6.01522 18.1899 6.71534 18.0727 7.39617L18.0744 7.39533ZM7.85193 10.7573L6.21823 9.81466C6.20983 9.81002 6.20264 9.80349 6.19722 9.79558C6.1918 9.78767 6.1883 9.7786 6.187 9.7691V5.25868C6.18648 4.56739 6.38303 3.89026 6.75361 3.30668C7.12419 2.72311 7.65345 2.25726 8.27935 1.96375C8.90525 1.67025 9.60184 1.56124 10.2875 1.64951C10.9731 1.73778 11.6194 2.01968 12.1505 2.46214C12.1218 2.47818 12.0704 2.50603 12.0341 2.52712L8.16922 4.75828C8.07238 4.81349 7.99196 4.89346 7.9362 4.99C7.88045 5.08653 7.85136 5.19615 7.85193 5.30763V10.7573ZM8.73882 8.84423L10.84 7.63076L12.9404 8.84423V11.2695L10.8392 12.4829L8.73798 11.2695L8.73882 8.84423Z"
                                    fill="currentColor" className="fill-gray-500 dark:fill-neutral-400"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_399_369933">
                                    <rect width="80" height="19.424" fill="currentColor"
                                          className="fill-gray-500 dark:fill-neutral-400"
                                          transform="translate(0.5 0.344116)"/>
                                </clipPath>
                            </defs>
                        </svg>

                        <svg className="w-20" width="81" height="20" viewBox="0 0 81 20" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_399_369935)">
                                <path
                                    d="M79.1626 17.2178C78.8133 17.2211 78.4796 17.3627 78.2344 17.6114C77.9892 17.8602 77.8524 18.196 77.8541 18.5453C77.8558 18.8946 77.9958 19.229 78.2433 19.4754C78.4909 19.7218 78.826 19.8601 79.1753 19.8601C79.5246 19.8601 79.8597 19.7218 80.1073 19.4754C80.3549 19.229 80.4948 18.8946 80.4965 18.5453C80.4982 18.196 80.3615 17.8602 80.1163 17.6114C79.871 17.3627 79.5373 17.2211 79.188 17.2178H79.1626ZM79.1626 19.7088C78.9335 19.7127 78.7084 19.6484 78.5158 19.5243C78.3232 19.4002 78.1717 19.2218 78.0805 19.0116C77.9893 18.8014 77.9625 18.5689 78.0035 18.3434C78.0444 18.118 78.1513 17.9097 78.3106 17.745C78.4699 17.5804 78.6745 17.4666 78.8984 17.4182C79.1224 17.3697 79.3557 17.3888 79.5688 17.4729C79.7819 17.5571 79.9653 17.7025 80.0957 17.8909C80.2262 18.0793 80.2979 18.3021 80.3017 18.5312V18.5506C80.3081 18.8512 80.1949 19.142 79.9869 19.359C79.779 19.5761 79.4933 19.7017 79.1928 19.7082H79.1629M74.091 16.8568H71.2202V12.3609C71.2202 11.2888 71.201 9.90872 69.727 9.90872C68.2318 9.90872 68.003 11.0768 68.003 12.2829V16.8565H65.1321V7.61114H67.8882V8.87461H67.9268C68.2026 8.40303 68.6011 8.01508 69.08 7.75209C69.5588 7.48909 70.1001 7.3609 70.646 7.38117C73.5557 7.38117 74.0922 9.29508 74.0922 11.785L74.091 16.8568ZM61.8929 6.34736C61.5634 6.34742 61.2412 6.24976 60.9672 6.06675C60.6932 5.88374 60.4796 5.62358 60.3535 5.31918C60.2273 5.01479 60.1943 4.67981 60.2585 4.35663C60.3227 4.03345 60.4813 3.73657 60.7143 3.50353C60.9473 3.27049 61.2441 3.11177 61.5672 3.04743C61.8904 2.98309 62.2254 3.01602 62.5298 3.14206C62.8343 3.2681 63.0945 3.48159 63.2776 3.75553C63.4607 4.02947 63.5585 4.35156 63.5586 4.68106C63.5586 4.89984 63.5155 5.11649 63.4319 5.31863C63.3482 5.52078 63.2255 5.70446 63.0708 5.85919C62.9161 6.01392 62.7325 6.13667 62.5304 6.22043C62.3283 6.30419 62.1116 6.34732 61.8929 6.34736ZM63.3283 16.8568H60.4544V7.61114H63.3283V16.8568ZM75.5223 0.349342H59.0118C58.6371 0.345113 58.276 0.489833 58.0079 0.751702C57.7398 1.01357 57.5866 1.37116 57.5821 1.7459V18.3248C57.5865 18.6998 57.7396 19.0576 58.0076 19.3197C58.2757 19.5819 58.6369 19.7269 59.0118 19.7229H75.5223C75.898 19.7276 76.2601 19.583 76.5293 19.3209C76.7984 19.0588 76.9525 18.7005 76.9577 18.3248V1.7447C76.9524 1.36922 76.7982 1.01122 76.529 0.749363C76.2599 0.487501 75.8978 0.343194 75.5223 0.348146M49.7682 9.84264C48.3328 9.84264 47.4715 10.8011 47.4715 12.1976C47.4715 13.5942 48.3325 14.5535 49.7682 14.5535C51.204 14.5535 52.067 13.5966 52.067 12.1976C52.067 10.7987 51.2055 9.84264 49.7682 9.84264ZM54.71 16.8514H52.067V15.6253H52.0278C51.6963 16.0713 51.2662 16.4347 50.7711 16.6872C50.2761 16.9397 49.7294 17.0745 49.1737 17.0811C46.4153 17.0811 44.5983 15.0903 44.5983 12.2751C44.5983 9.68952 46.2063 7.31538 48.8496 7.31538C50.0377 7.31538 51.1474 7.64044 51.7985 8.54148H51.8362V3.21213H54.7097L54.71 16.8514ZM40.9122 11.1552C40.9177 10.9222 40.8759 10.6906 40.7892 10.4744C40.7026 10.2581 40.5729 10.0617 40.4081 9.89701C40.2433 9.73232 40.0468 9.60281 39.8305 9.5163C39.6142 9.4298 39.3825 9.38811 39.1496 9.39376C38.648 9.36255 38.1542 9.52971 37.7747 9.85921C37.3952 10.1887 37.1604 10.6541 37.1209 11.1552H40.9122ZM43.3441 15.2521C42.867 15.8306 42.2673 16.2958 41.5883 16.6139C40.9093 16.9321 40.168 17.0952 39.4182 17.0916C36.5473 17.0916 34.2488 15.1753 34.2488 12.2078C34.2488 9.24035 36.547 7.32495 39.4182 7.32495C42.1015 7.32495 43.7843 9.23886 43.7843 12.2078V13.1079H37.1209C37.2038 13.6184 37.4685 14.0818 37.8661 14.4125C38.2637 14.7433 38.7674 14.9192 39.2845 14.9079C39.6931 14.9054 40.0946 14.8007 40.4524 14.6034C40.8103 14.406 41.1131 14.1223 41.3333 13.7781L43.3441 15.2521ZM14.8047 7.60874H17.5616V8.87222H17.6008C17.8762 8.40044 18.2745 8.01231 18.7533 7.74928C19.232 7.48624 19.7733 7.35818 20.3191 7.37877C23.2304 7.37877 23.7663 9.29418 23.7663 11.7826V16.8526H20.8954V12.3576C20.8954 11.2846 20.8757 9.90543 19.4002 9.90543C17.9079 9.90543 17.6776 11.0738 17.6776 12.2796V16.8514H14.8068L14.8047 7.60874ZM25.222 3.21303H28.0929V11.3666L31.3465 7.60366H34.8663L31.0983 11.8839L34.7871 16.8571H31.1788L28.1312 12.2871H28.0935V16.8565H25.2226L25.222 3.21303ZM10.342 7.60785H13.2128V16.8532H10.342V7.60785ZM11.7774 3.01147C12.1068 3.01153 12.4287 3.10925 12.7026 3.29229C12.9764 3.47532 13.1898 3.73544 13.3158 4.03976C13.4418 4.34408 13.4748 4.67892 13.4105 5.00196C13.3462 5.325 13.1876 5.62171 12.9546 5.85459C12.7217 6.08747 12.425 6.24606 12.1019 6.31029C11.7789 6.37453 11.444 6.34153 11.1397 6.21547C10.8354 6.08941 10.5753 5.87596 10.3924 5.60209C10.2094 5.32822 10.1117 5.00624 10.1117 4.67687C10.1117 4.45814 10.1548 4.24156 10.2385 4.03948C10.3222 3.83741 10.4449 3.6538 10.5996 3.49915C10.7543 3.3445 10.9379 3.22183 11.14 3.13816C11.3421 3.05448 11.5587 3.01143 11.7774 3.01147ZM0.5 3.21512H3.48839V14.1005H9.02079V16.8583H0.5V3.21512ZM79.3722 18.6227C79.4214 18.6232 79.4701 18.6136 79.5154 18.5944C79.5607 18.5753 79.6016 18.5471 79.6355 18.5115C79.6695 18.4759 79.6957 18.4337 79.7127 18.3876C79.7296 18.3414 79.7369 18.2923 79.7341 18.2432C79.7341 17.9741 79.5717 17.8455 79.2386 17.8455H78.7003V19.2546H78.9027V18.6403H79.1515L79.1572 18.6478L79.5433 19.2546H79.7598L79.3444 18.6266L79.3722 18.6227ZM79.1381 18.4815H78.9033V18.0052H79.2009C79.3546 18.0052 79.5298 18.0303 79.5298 18.2315C79.5298 18.463 79.3525 18.4815 79.1369 18.4815"
                                    fill="currentColor" className="fill-gray-500 dark:fill-neutral-400"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_399_369935">
                                    <rect width="80" height="19.52" fill="currentColor"
                                          className="fill-gray-500 dark:fill-neutral-400"
                                          transform="translate(0.5 0.344116)"/>
                                </clipPath>
                            </defs>
                        </svg>

                        <svg className="w-20" width="81" height="20" viewBox="0 0 81 20" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_399_369931)">
                                <path
                                    d="M14.3199 0.344116H6.78091V10.5178H16.9546V2.97877C16.9546 1.51899 15.7797 0.344116 14.3199 0.344116ZM4.43117 0.344116H3.13465C1.67487 0.344116 0.5 1.51899 0.5 2.97877V4.27529H4.43117V0.344116ZM0.5 6.62503H4.43117V10.5562H0.5V6.62503ZM13.065 16.7987H14.3615C15.8213 16.7987 16.9962 15.6238 16.9962 14.164V12.9091H13.065V16.7987ZM6.78091 12.9091H10.7121V16.8403H6.78091V12.9091ZM0.5 12.9091V14.2057C0.5 15.6654 1.67487 16.8403 3.13465 16.8403H4.43117V12.9091H0.5ZM27.0066 1.39734H25.4668V15.7839H33.614V14.4073H27.0066V1.39734ZM38.5568 5.20686C35.5572 5.20686 33.4508 7.43495 33.4508 10.6362V11.0044C33.4924 12.3809 34.1006 13.6807 35.1122 14.6506C36.0854 15.5438 37.3403 16.0688 38.6785 16.0688H38.8802C40.2983 16.0688 41.6365 15.5406 42.6897 14.6506L42.7313 14.609L42.043 13.4758L41.963 13.5174C41.1114 14.2889 40.0582 14.7339 38.925 14.7339C37.0618 14.7339 35.1571 13.5174 35.0354 10.8027H42.8177V10.7227C42.8177 10.7227 42.8593 10.2361 42.8593 9.99278C42.8497 7.07321 41.1499 5.20686 38.5568 5.20686ZM35.0706 9.50298C35.394 7.67825 36.7321 6.50338 38.4736 6.50338C39.7701 6.50338 41.1883 7.27489 41.3099 9.50298H35.0706ZM51.7685 6.42335V6.95156C51.1186 5.85672 49.9054 5.16845 48.6473 5.16845H48.5256C45.7693 5.16845 43.8645 7.35812 43.8645 10.5594C43.8645 13.8023 45.6893 15.9888 48.404 15.9888C50.552 15.9888 51.5252 14.6923 51.8485 14.1256V15.7071H53.3083V1.39734H51.8101V6.42335H51.7685ZM48.6056 14.6506C46.7009 14.6506 45.446 13.0308 45.446 10.5978C45.446 8.24808 46.7841 6.58661 48.6473 6.58661C50.2287 6.58661 51.8069 7.84152 51.8069 10.5978C51.8069 13.5974 50.1455 14.6506 48.6056 14.6506ZM62.1823 6.62503V6.70506C61.8974 6.21847 61.0074 5.16525 58.8593 5.16525C56.1447 5.16525 54.3615 7.23327 54.3615 10.3929C54.3615 13.5526 56.2247 15.7007 58.981 15.7007C60.4792 15.7007 61.494 15.1724 62.1823 14.0808V15.499C62.1823 17.4838 60.9274 18.6202 58.6961 18.6202C57.7645 18.6202 56.7913 18.3769 55.9398 17.932L55.8597 17.8903L55.2931 19.1452L55.3731 19.1869C56.4264 19.7151 57.6012 19.9968 58.7377 19.9968C61.1291 19.9968 63.6805 18.7803 63.6805 15.4157V5.45016H62.1823V6.62503ZM59.1827 14.3657C57.1979 14.3657 55.9014 12.8259 55.9014 10.4346C55.9014 8.00158 57.0346 6.62503 58.981 6.62503C61.1291 6.62503 62.1407 7.87993 62.1407 10.4346C62.1823 12.9476 61.1291 14.3657 59.1827 14.3657ZM69.8013 5.20686C66.8017 5.20686 64.7369 7.43495 64.7369 10.5978V10.9628C64.7785 12.3393 65.3868 13.639 66.3984 14.609C67.3716 15.5022 68.6264 16.0272 69.9646 16.0272H70.1663C71.5844 16.0272 72.9226 15.499 73.9758 14.609L74.0174 14.5674L73.2875 13.4342L73.2075 13.4758C72.3559 14.2473 71.3027 14.6923 70.1695 14.6923C68.3063 14.6923 66.4016 13.4758 66.2799 10.7611H74.0974V10.6811C74.0974 10.6811 74.1391 10.1945 74.1391 9.95116C74.1391 7.07321 72.436 5.20686 69.8013 5.20686ZM66.3567 9.50298C66.6801 7.67825 68.0182 6.50338 69.7597 6.50338C71.0562 6.50338 72.4744 7.27489 72.596 9.50298H66.3567ZM80.4616 5.40854C80.2599 5.36693 80.0966 5.36693 79.895 5.32851C78.4768 5.32851 77.3019 6.22167 76.6937 7.71987V5.40854H75.1955L75.2371 15.6622V15.7423H76.7769V11.4077C76.7769 10.7579 76.8569 10.0696 77.0618 9.46136C77.5484 7.87993 78.6433 6.86833 79.9398 6.86833C80.103 6.86833 80.2631 6.86833 80.4264 6.90994H80.5064V5.41174L80.4616 5.40854Z"
                                    fill="currentColor" className="fill-gray-500 dark:fill-neutral-400"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_399_369931">
                                    <rect width="80" height="19.6559" fill="currentColor"
                                          className="fill-gray-500 dark:fill-neutral-400"
                                          transform="translate(0.5 0.344116)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    {/* End Footer */}
                </div>
                {/* End Sidebar */}

                {/* Content */}
                {children}
                {/* End Content */}
            </main>
            {/* ========== END MAIN CONTENT ========== */}


        </PrelineProviderLayout>
    );
}
