"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

function NavLink({ item }) {
    const pathName = usePathname();
    return (
        <Link
            href={item.path}
            className={`text-black hover:bg-red-800 hover:text-white px-4 py-2 rounded-full font-medium ${
                pathName === item.path
                    ? " bg-red-800 text-white"
                    : "bg-transparent"
            }`}
        >
            {item.title}
        </Link>
    );
}

export default NavLink;
