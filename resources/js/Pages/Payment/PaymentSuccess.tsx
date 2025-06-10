import React from 'react';
import AppLayout from "@/Layouts/AppLayout";
import Confetti from "@/Components/Confetti";

interface PaymentSuccessProps {
    // Props ici
}

const PaymentSuccess: React.FC<PaymentSuccessProps> = (props) => {
    return (
        <AppLayout>
            <Confetti />
            {/* Success Message */}
            <div className="py-20 max-w-lg mx-auto">
                {/* Icon */}
                <div className="mb-5 sm:mb-7 text-center">
    <span className="shrink-0 size-14 md:size-16 mx-auto flex justify-center items-center border-2 border-purple-500 text-purple-500 rounded-full">
      <svg className="shrink-0 size-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
    </span>
                </div>
                {/* End Icon */}

                {/* Heading */}
                <div className="mb-5 sm:mb-8 text-center">
                    <h1 className="mb-1 md:mb-3 font-semibold text-xl md:text-2xl text-gray-800 dark:text-neutral-200">
                        Your transfer is on the way
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-neutral-500">
                        We've scheduled a transfer of 52.25 USD to your Preline balance. This transfer will be sent from your USD Debit Card.
                    </p>
                </div>
                {/* End Heading */}

                {/* Button Group */}
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                    <a className="py-3 px-4 inline-flex justify-center items-center gap-x-1.5 font-medium text-sm rounded-xl border border-transparent bg-purple-500 text-white hover:bg-purple-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-purple-600" href="../../pro/payment/transactions.html">
                        Manage your transfers
                    </a>

                    <a className="py-3 px-4 inline-flex justify-center items-center gap-x-1.5 font-medium text-sm rounded-xl border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="../../pro/payment/add-money.html">
                        Add another money
                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </a>
                </div>
                {/* End Button Group */}
            </div>
            {/* End Success Message */}
        </AppLayout>
    );
};

export default PaymentSuccess;
