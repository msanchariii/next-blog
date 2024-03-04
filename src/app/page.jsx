// "use client";
import React from "react";
import PostCard from "@/components/PostCard/PostCard";
import { getPostByDay, getAuthor, getAllAuthors } from "@/lib/data";
import Carousel from "@components/Carousel/Carousel";
import Image from "next/image";
import Link from "next/link";
// import { SwiperComponent } from "@/components/Carousel/Swiper";

const BlogPage = async () => {
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    const allPosts = [];
    const authorIds = new Set();

    // Fetch posts and build the set of unique author ids
    for (const day of days) {
        const posts = await getPostByDay(day);
        allPosts.push(posts);
        posts.forEach((post) => authorIds.add(post.author));
    }

    // Fetch all authors
    const allAuthors = await getAllAuthors();

    // Create a map of author id to author object
    const authorMap = new Map(
        allAuthors.map((author) => [author._id.toString(), author])
    );

    const avatars = [
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ];

    return (
        <div>
            {allPosts.map((dayPosts, index) => (
                <div key={days[index]} className="my-16">
                    <h2 className="text-xl font-bold w-1/2 mx-auto text-center">
                        {days[index]}
                    </h2>
                    {/* <SwiperComp dayPosts={dayPosts} authorMap={authorMap} /> */}

                    <Carousel>
                        {dayPosts.map((post) => (
                            <PostCard
                                key={post._id}
                                id={post._id}
                                blogTitle={post.title}
                                blogContent={post.desc}
                                blogDescription={post.desc}
                                imagePath={post.image}
                                blogAuthor={
                                    authorMap.get(post.author.toString())?.name
                                }
                            />
                        ))}
                    </Carousel>
                    {/* </div> */}
                </div>
            ))}
            {/* Meet Our Fav Authors */}
            <div>
                <h1 className="text-2xl font-semibold text-center my-12 ">
                    Meet Our Authors
                </h1>
                <div className="flex flex-wrap">
                    {allAuthors.map((author) => {
                        return (
                            <div className="w-[180px] flex flex-col">
                                <div className="w-[150px] h-[150px] mx-auto my-3 rounded-full bg-green-400 relative">
                                    <Link href={`/authors/${author._id}`}>
                                        <Image
                                            alt={author.name}
                                            fill
                                            src={
                                                author.image ||
                                                "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
                                            }
                                            style={{
                                                objectFit: "cover",
                                                borderRadius: "100%",
                                            }}
                                        />
                                    </Link>
                                </div>

                                <h2 className="font-medium text-md text-wrap text-center my-1">
                                    {author.name}
                                </h2>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
