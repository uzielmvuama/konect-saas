import React from "react";
import {Link} from "@inertiajs/react";

interface AppLogoInterface {
    href?: string;
    width?: number;
}
export default function AppLogo({href= "/dashboard", width =9}: AppLogoInterface) {
    return (
        <>
            {/* Logo */}
            <Link
                className="flex text-white rounded-md text-xl items-start space-x-1 font-semibold focus:outline-hidden focus:opacity-80"
                href={href}
                aria-label="Preline"
            >
                <img src={"/assets/images/logo-yellow.png"} className={`w-${width}`} alt={"logo"}/>
                {/*<span>nect</span>*/}
            </Link>
            {/* End Logo */}
        </>
    );
}
