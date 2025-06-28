import React from "react";
import { useForm } from "@inertiajs/react";
import { TbLogout } from "react-icons/tb";
import FormError from "@/Components/Errors/FormError";
import ButtonSecureConfirmDialog from "@/Components/ButtonModals/ButtonSecureConfirmDialog";

interface LoginHistoryCardProps {
  deviceName: string;
  location?: string;
  deviceType: string;
  ipAddress: string;
  lastActivity: string;
  iconType?: "pc" | "tablet";
  showSignOut?: boolean;
  onSignOut?: () => void;
  isCurrent?: boolean;
  isExpired?: boolean;
}

const LoginHistoryCard: React.FC<LoginHistoryCardProps> = ({
  deviceName,
  location,
  deviceType,
  ipAddress,
  lastActivity,
  iconType = "pc",
  showSignOut = true,
  onSignOut,
  isCurrent = false,
  isExpired = false,
}) => {
  const renderMainIcon = () => {
    if (iconType === "tablet") {
      return (
        <svg
          className="size-5 text-gray-500 dark:text-neutral-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <rect width={16} height={20} x={4} y={2} rx={2} ry={2} />
          <line x1={12} x2="12.01" y1={18} y2={18} />
        </svg>
      );
    }

    return (
      <svg
        className="size-5 text-gray-500 dark:text-neutral-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
      </svg>
    );
  };

  const renderStatusBadge = () => {
    if (isCurrent) {
      return (
        <span className="inline-flex items-center gap-1.5 py-px px-2 text-xs font-medium bg-yellow-400 text-gray-900/90 rounded-full dark:bg-yellow-500/10 dark:text-yellow-500">
          Current session
        </span>
      );
    }

    if (isExpired) {
      return (
        <span className="inline-flex items-center gap-1.5 py-px px-2 text-xs font-medium bg-gray-100 text-gray-800 rounded-full dark:bg-neutral-700 dark:text-neutral-200">
          Expired
        </span>
      );
    }

    return null;
  };

  return (
    <div className="p-5 space-y-4 flex flex-col bg-white border border-gray-200 rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
      {/* Header */}
      <div className="flex justify-between">
        <div className="flex flex-col justify-center items-center size-9.5 border border-gray-200 rounded-lg dark:border-neutral-700">
          {renderMainIcon()}
        </div>
        {showSignOut && isCurrent && (
          <ButtonSecureConfirmDialog
            url={"/user/other-browser-sessions"}
            method={"delete"}
            modalId={"hs-sign-out-from-all"}
            title={"Singout from all devices"}
            message={
              " Please enter your password to confirm you would like to log out of your other\n" +
              "                      browser sessions across all of your devices."
            }
            triggerLabel={"Singout from all"}
            icon={<TbLogout />}
          />
        )}
      </div>

      {/* Heading */}
      <div className="flex flex-wrap justify-between items-center gap-2">
        <span className="font-medium text-gray-800 dark:text-neutral-200">{deviceName}</span>
        {renderStatusBadge()}
      </div>

      {/* List Group */}
      <ul className="space-y-2">
        {location && (
          <li className="flex justify-between items-center">
            <span className="text-xs uppercase text-gray-500 dark:text-neutral-500">Location:</span>
            <span className="text-sm text-gray-800 dark:text-neutral-200">{location}</span>
          </li>
        )}
        <li className="flex justify-between items-center">
          <span className="text-xs uppercase text-gray-500 dark:text-neutral-500">Device:</span>
          <span className="text-sm text-gray-800 dark:text-neutral-200">{deviceType}</span>
        </li>
        <li className="flex justify-between items-center">
          <span className="text-xs uppercase text-gray-500 dark:text-neutral-500">IP address:</span>
          <span className="text-sm text-gray-800 dark:text-neutral-200">{ipAddress}</span>
        </li>
        <li className="flex justify-between items-center">
          <span className="text-xs uppercase text-gray-500 dark:text-neutral-500">
            Recent activity:
          </span>
          <span className="text-sm text-gray-800 dark:text-neutral-200">{lastActivity}</span>
        </li>
      </ul>

      {/* Button */}
      {/*<button*/}
      {/*  type="button"*/}
      {/*  className="py-2 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"*/}
      {/*>*/}
      {/*  <svg*/}
      {/*    className="shrink-0 size-4"*/}
      {/*    xmlns="http://www.w3.org/2000/svg"*/}
      {/*    fill="none"*/}
      {/*    viewBox="0 0 24 24"*/}
      {/*    stroke="currentColor"*/}
      {/*    strokeWidth={2}*/}
      {/*  >*/}
      {/*    <circle cx={12} cy={12} r={10} />*/}
      {/*    <path d="M12 16v-4" />*/}
      {/*    <path d="M12 8h.01" />*/}
      {/*  </svg>*/}
      {/*  Don’t recognize something?*/}
      {/*</button>*/}
    </div>
  );
};

export default LoginHistoryCard;
