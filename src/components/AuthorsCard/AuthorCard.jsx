import React from "react";
import Link from "next/link";

function AuthorCard({
    id,
    name,
    bio = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, consequatur.",
}) {
    return (
        <div className="bg-gray-100 p-3 rounded-md text-black w-11/12 h-80 flex flex-col m-2 border-gray-600 border-2">
            <h1 className="text-xl basis-1/5">{name}</h1>
            <p className="basis-3/5">{bio} </p>
            <Link
                className="bg-slate-400 p-1 rounded w-32 text-center basis-1/5"
                href={`/authors/${id}`}
            >
                View
            </Link>
        </div>
    );
}

export default AuthorCard;
