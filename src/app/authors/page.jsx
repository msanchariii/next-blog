// all author list
import { getAllAuthors } from "@/lib/data";
import Link from "next/link";
import AuthorCard from "@/components/AuthorsCard/AuthorCard";

import React from "react";

async function AllAuthors() {
    const authors = await getAllAuthors();
    return (
        <div className="mx-auto max-w-screen">
            <h1 className="text-2xl">Our Authors</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
                {authors.map((item) => (
                    <AuthorCard
                        key={item._id}
                        id={item._id}
                        name={item.name}
                        bio={item.bio}
                    />
                ))}
            </div>
        </div>
    );
}

export default AllAuthors;
