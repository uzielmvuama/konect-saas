import React from "react";
import {Link} from "@inertiajs/react";

interface AppLogoInterface {
    href?: string;
}
export default function AppLogo({href= "/dashboard"}: AppLogoInterface) {
    return (
        <>
            {/* Logo */}
            <Link
                className="flex text-white rounded-md text-xl items-start space-x-1 font-semibold focus:outline-hidden focus:opacity-80"
                href={href}
                aria-label="Preline"
            >
                <img src={"/assets/images/logo-yellow.png"} className="w-7" alt={"logo"}/>
                <span>nect</span>
            </Link>
            {/* End Logo */}
        </>
    );
}
