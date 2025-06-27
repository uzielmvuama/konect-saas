import React from "react";
import FlashMessage from "@/Components/_Partials/FlashMessage";

interface SettingsLayoutProps {
  children?: React.ReactNode;
}

const SettingsLayout: React.FC<SettingsLayoutProps> = ({ children }) => {
  return (
    <div className="p-5 md:p-8 bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
        <FlashMessage />
      {children}
    </div>
  );
};

export default SettingsLayout;
