"use client";
import React from "react";
import { usePathname } from "next/navigation";

function Hero() {
    const pathname = usePathname();
    console.log(pathname);
    if (pathname == "/") {
        return (
            <div className="w-full min-h-screen flex flex-col divide-y justify-center items-center gap-y-3 py-4">
                <div className="w-11/12 h-screen bg-gray-200 border-4 border-black">
                    Hero Banner
                </div>
                <div className="flex flex-row gap-2 w-11/12">
                    <div className="bg-gray-200 w-1/2 h-96 border-4 border-black">
                        helo
                    </div>
                    <div className="bg-gray-200 w-1/2 h-96 border-4 border-black">
                        welcome
                    </div>
                </div>
            </div>
        );
    } else {
        return <></>;
    }
}

export default Hero;
