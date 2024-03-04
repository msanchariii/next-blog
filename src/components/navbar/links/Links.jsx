import React from "react";
import NavLink from "./navLinks/NavLink";

function Links() {
    const links = [
        {
            title: "Homepage",
            path: "/",
        },
        {
            title: "Authors",
            path: "/authors",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contact",
        },
    ];
    return (
        <div className="w-2/5 flex flex-row flex-wrap justify-between">
            {links.map((link) => (
                <NavLink item={link} key={link.title} />
            ))}
        </div>
    );
}

export default Links;
