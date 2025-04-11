import React from "react";

type FormErrorProps = {
    message?: string;
};

const FormError: React.FC<FormErrorProps> = ({ message }) => {
    if (!message) return null;

    return (
        <div className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-2 transition-opacity duration-300 ease-in-out animate-fadeIn">
            <svg
                className="w-4 h-4 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span>{message}</span>
        </div>
    );
};

export default FormError;
