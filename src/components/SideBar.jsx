import React from "react";
import { topAuthors, topBlogs, archive } from "@/data/data";
import ArchiveSection from "./Archive";
import Link from "next/link";

function SideBar() {
    return (
        <div className="w-full flex flex-col p-2 mx-1 py-4 mt-8 px-4 gap-6 bg-slate-200 rounded-lg min-h-screen">
            {/* */}
            <div>
                <h2 className="font-semibold text-base">Popular Authors</h2>
                <ul className="list-disc pl-6">
                    {topAuthors.map((item) => {
                        return (
                            <li
                                key={item.id}
                                className="hover:underline cursor-pointer font-normal text-sm"
                            >
                                <Link href={`/authors/${item.id}`}>
                                    {item.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div>
                <h2 className="font-semibold">Top Posts</h2>
            </div>
            <div>
                <ArchiveSection />
            </div>
        </div>
    );
}

export default SideBar;
