import { data } from "@/data/data";
import { findArchive } from "@/lib/data";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import PostCard from "@/components/PostCard/PostCard";

const Filter = async ({ params }) => {
    const month = params.query[1] || null;
    const year = parseInt(params.query[0]) || null;
    console.log(month);
    console.log(year);
    const archive = await findArchive(month, year);
    // console.log(archive);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div>Archive fetched successfully. </div>
            <p>
                Month: {month}, Year: {year}
            </p>
            <div className="flex items-center">
                {archive?.map((item) => {
                    return (
                        <PostCard
                            key={item._id}
                            blogTitle={item.title}
                        ></PostCard>
                    );
                })}
            </div>
        </Suspense>
    );
};

export default Filter;
