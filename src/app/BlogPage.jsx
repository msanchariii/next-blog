import React from "react";
import PostCard from "@/components/PostCard/PostCard";
import { getPostByDay } from "@/lib/data";

export const BlogPage = async () => {
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    const sun = await getPostByDay("SUN");
    const mon = await getPostByDay("MON");
    const tue = await getPostByDay("TUE");
    const wed = await getPostByDay("WED");
    const thu = await getPostByDay("THU");
    const fri = await getPostByDay("FRI");
    const sat = await getPostByDay("SAT");

    const data = [sun, mon, tue, wed, thu, fri, sat];
    // console.log(wed);
    return (
        <div>
            {/* Left : ALL BLOGS */}
            <div
                className=""
                {...data.map((dayPosts, index) => (
                    <div key={days[index]} className="mb-4">
                        <h2 className="text-xl font-bold">{days[index]}</h2>
                        <div className="flex flex-row flex-wrap">
                            {dayPosts?.map((post) => (
                                <PostCard
                                    key={post._id}
                                    id={post._id}
                                    blogTitle={post.title}
                                    blogContent={post.desc}
                                    blogDescription={post.desc}
                                    imagePath={post.image}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            />
        </div> /* Right: SIDE BAR => Ads/Archive/Updates  */
    );
    {
        /* Right: SIDE BAR => Ads/Archive/Updates  */
    }
    <div className="bg-red-200 w-1/4"></div>;
};
