import React from "react";
import { getPost, getAuthor } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import BlogContent from "@/components/BlogContent";

const SinglePost = async ({ params }) => {
    const id = params.id;
    const post = await getPost(id);

    // Convert ObjectId to string
    const authorId = post.author.toString();

    // Fetch author using the converted string
    const author = await getAuthor(authorId);

    const publishedOn = post.createdAt.toLocaleDateString("en-IN", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    console.log(post);

    return (
        post &&
        author && (
            <div className="flex flex-col">
                <div className="flex flex-row my-6 mx-12">
                    {post._doc.image && (
                        <div className="w-1/2">
                            <Image
                                src={post._doc.image}
                                alt={post.title}
                                width={300}
                                height={300}
                                // objectFit="cover"
                                className="rounded-md"
                            />
                        </div>
                    )}
                    <div className="w-1/2">
                        <h1 className="text-3xl font-bold m-4">
                            {post._doc.title}
                        </h1>
                        <h2 className="text-xl font-medium m-4 mb-2 ">
                            <Link href={`/authors/${author._doc._id}`}>
                                by{" "}
                                <span className="hover:underline hover:bg-yellow-200">
                                    {author._doc.name}
                                </span>
                            </Link>
                        </h2>
                        <p className="m-4 mt-0 text-sm">
                            Published on {publishedOn}
                        </p>
                    </div>
                </div>
                <div className="mx-4 px-6 my-12">
                    {/* {post._doc.content} */}
                    <BlogContent content={post._doc.content}></BlogContent>
                </div>
            </div>
        )
    );
};

export default SinglePost;
