import React, { useEffect } from "react";
import FlashMessage from "@/Components/_Partials/FlashMessage";
import { initializePreline } from "@/Utils/preline-init";

interface SettingsLayoutProps {
    title: string;
    description: string;
  children?: React.ReactNode;
}

const SettingsLayout: React.FC<SettingsLayoutProps> = ({ children, title, description }) => {
  useEffect(() => {
    initializePreline();
  }, []);

  return (
    <div className="p-5 md:p-8 bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
      <FlashMessage />

        {/* Title */}
        <div className="mb-3 xl:mb-4">
            <h1 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                {title}
            </h1>
            <p className="text-sm text-gray-500 dark:text-neutral-500">
                {description}
            </p>
        </div>
        {/* End Title */}

      {children}
    </div>
  );
};

export default SettingsLayout;
