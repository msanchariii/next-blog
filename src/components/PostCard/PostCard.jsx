import React from "react";
import Image from "next/image";
import Link from "next/link";
import SwiperComp from "../Carousel/Swiper";
// import Image from 'next/image';

function PostCard({
    id,
    imagePath,
    blogTitle,
    blogCreated,
    blogAuthor,
    blogDescription = "Description",
}) {
    return (
        <div className="w-[220px] h-[390px] p-3 my-4 bg-white rounded flex flex-col justify-between border-2 border-gray-100 shadow">
            {/* image */}
            <div className=" w-full aspect-[4/3] p-1 relative">
                <Image
                    fill={true}
                    src={imagePath}
                    alt={blogTitle}
                    loading="lazy"
                    className="rounded-md"
                />
            </div>

            {/* title, author, date */}
            <div className="p-2 w-full">
                <div className="text-md font-bold m-1 text-wrap">
                    {blogTitle}
                </div>
                <p>by {blogAuthor}</p>
                <p className="text-sm text-gray-500 m-1">{blogDescription}</p>
            </div>
            {/* button */}
            <Link href={`/blog/${id}`} className="text-sm underline m-1 p-1">
                Read more
            </Link>
        </div>
    );
}

export default PostCard;
