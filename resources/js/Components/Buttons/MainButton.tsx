import React from "react";
import { Link } from "@inertiajs/react";
import { IconType } from "react-icons";
import Spinner from "@/Components/Spinners/Spinner";

type ButtonType = "button" | "link" | "inertiaLink";

interface MainButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asType?: ButtonType; // <- nouveau nom pour éviter le conflit avec type="submit"
  title: string;
  href?: string;
  customClassName?: string;
  icon?: IconType;
  iconClass?: string;
  paddindClassYX?: string;
  processing?: boolean;
}

const baseClass =
  "inline-flex items-center justify-center gap-x-1.5 whitespace-nowrap text-[13px] md:text-sm" +
  " rounded-lg" +
  " shadow-md" +
  " bg-yellow-700 text-dark-900 hover:bg-yellow-800 hover:shadow-none focus:outline-hidden focus:bg-yellow-700" +
  " focus:shadow-none disabled:opacity-50 disabled:pointer-events-none";

const MainButton: React.FC<MainButtonProps> = ({
  asType = "inertiaLink",
  title,
  href = "#",
  icon: Icon,
                                                   iconClass ="",
  customClassName = "",
  paddindClassYX = " py-3 px-2.5",
  processing = false,
  ...rest
}) => {
  if (asType === "link") {
    return (
      <a
        className={baseClass + " " + customClassName + paddindClassYX}
        href={href}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {processing && <Spinner />}
        {Icon && <i className="mr-0">{<Icon className={iconClass}/>}</i>}
        <span>{title}</span>
      </a>
    );
  }

  if (asType === "button") {
    return (
      <button className={baseClass + " " + customClassName + paddindClassYX} {...rest}>
        {processing && <Spinner />}
        {Icon && <i className="mr-0">{<Icon className={iconClass} />}</i>}
        <span>{title}</span>
      </button>
    );
  }

  // inertiaLink par défaut
  return (
    <Link className={baseClass + " " + customClassName + paddindClassYX} href={href}>
      {processing && <Spinner />}
      {Icon && <i className="mr-0">{<Icon className={iconClass}/>}</i>}
      <span>{title}</span>
    </Link>
  );
};

export default MainButton;
