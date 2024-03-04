import React from "react";
import NavLink from "./links/navLinks/NavLink.jsx";
import Links from "./links/Links.jsx";

function Navbar() {
    return (
        <div className="w-full flex py-3 px-6 flex-wrap justify-between shadow-md">
            <div className="w-1/3 text-lg font-bold">Logo</div>
            <Links />
        </div>
    );
}

export default Navbar;
