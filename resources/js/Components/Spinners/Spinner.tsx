import React from "react";
import classNames from "classnames";

type SpinnerProps = {
  size?: "xs"| "sm" | "md" | "lg";
  color?: "yellow" | "blue" | "gray" | "white" | "dark";
  className?: string;
};

const sizeMap = {
    xs: "size-3",
  sm: "size-4",
  md: "size-6",
  lg: "size-8",
};

const colorMap = {
  yellow: "text-yellow-500 dark:text-yellow-400",
  blue: "text-blue-600 dark:text-blue-500",
  gray: "text-gray-600 dark:text-gray-400",
  white: "text-white",
    dark: "text-dark/50",
};

const Spinner: React.FC<SpinnerProps> = ({ size = "xs", color = "dark", className = "" }) => {
  return (
    <div
      role="status"
      aria-label="loading"
      className={classNames(
        "animate-spin inline-block border-2 border-current border-t-transparent rounded-full",
        sizeMap[size],
        colorMap[color],
        className
      )}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
