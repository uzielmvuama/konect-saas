import React from 'react'
import clsx from 'clsx'
import {LiaQrcodeSolid} from "react-icons/lia";

interface CreditCardProps {
    bgColor: string // ex: 'bg-gray-800', 'bg-gray-300'
    firstname: string // ex: '8080'
    lastname: string // ex: 'USD'
    title: string // ex: '12/24'
    link: string // ex: '/payment/card-details'
    iconColorClass?: string // ex: 'text-white' ou 'text-gray-800'
    type?: string | 'center' | 'bottom' // ex: 'center', 'bottom'

}

const NFCCard: React.FC<CreditCardProps> = ({
                                                bgColor,
                                                firstname,
                                                lastname,
                                                title,
                                                link,
                                                iconColorClass = 'text-white',
                                                type = 'center'
                                            }) => {
    return (
        <div
            className={clsx(`${type == "bottom" ? "py-5 " : "sm:py-5 py-5 "} px-4 relative w-full flex flex-col justify-between text-start rounded-xl`, bgColor)}>
            <div
                className={`${type == "bottom" ? "mb-10 " : "sm:-mb-4 mb-8"} flex flex-wrap items-center whitespace-nowrap gap-2`}>
                {/*<svg className="shrink-0 size-6" width={82} height={82} viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                {/*    <path d="M1 11C1 5.47715 5.47715 1 11 1H71C76.5228 1 81 5.47715 81 11V71C81 76.5228 76.5228 81 71 81H11C5.47715 81 1 76.5228 1 71V11Z"*/}
                {/*          fill="currentColor" className="fill-yellow-500" />*/}
                {/*    <path d="M29 32C29 30.3431 30.3431 29 32 29H50C51.6569 29 53 30.3431 53 32V50C53 51.6569 51.6569 53 50 53H32C30.3431 53 29 51.6569 29 50V32Z"*/}
                {/*          fill="currentColor" className="fill-yellow-500" />*/}
                {/*    <path d="M41 2V80M52.1177 52.1249L61.5334 63.2903C61.9134 63.7404 62.4724 64 63.0615 64H81M29.8712 52.1139L20.4666 63.2903C20.0866 63.7404 19.5276 64 18.9385 64H1M52.1232 29.8805L61.5334 18.7097C61.9134 18.2596 62.4724 18 63.0615 18H81M29.8862 29.8712L20.4666 18.7097C20.0866 18.2596 19.5276 18 18.9385 18H1M81 41H53M1 41H29M11 81H71C76.5228 81 81 76.5228 81 71V11C81 5.47715 76.5228 1 71 1H11C5.47715 1 1 5.47715 1 11V71C1 76.5228 5.47715 81 11 81ZM32 53H50C51.6569 53 53 51.6569 53 50V32C53 30.3431 51.6569 29 50 29H32C30.3431 29 29 30.3431 29 32V50C29 51.6569 30.3431 53 32 53Z"*/}
                {/*          stroke="black" strokeWidth={2} strokeLinecap="round" />*/}
                {/*</svg>*/}
                <svg
                    className={clsx('shrink-0 size-5 rotate-90', iconColorClass)}
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
                    <path d="M12 20h.01"/>
                    <path d="M2 8.82a15 15 0 0 1 20 0"/>
                    <path d="M5 12.859a10 10 0 0 1 14 0"/>
                    <path d="M8.5 16.429a5 5 0 0 1 7 0"/>
                </svg>
            </div>

            <div className="w-full flex justify-between items-center">
                <div className="grow">
                    <div className="flex flex-wrap items-center whitespace-nowrap gap-2">
            <span className={clsx('inline-flex items-center relative font-mono font-medium', iconColorClass)}>
             {firstname}
            </span>
                        <span
                            className={clsx('inline-flex items-center relative font-mono font-medium ps-1',
                                iconColorClass,
                                iconColorClass.includes('white') ? 'before:bg-white' : 'before:bg-gray-800'
                            )}>
              {lastname}
            </span>
                    </div>
                    <span className={clsx('block font-mono text-sm', iconColorClass)}>
            {title}
          </span>
                </div>

                <LiaQrcodeSolid className="text-4xl border border-gray-700 rounded-sm"/>
            </div>

            <a className="after:absolute after:inset-0 after:z-1" href={link}></a>
        </div>
    )
}

export default NFCCard
