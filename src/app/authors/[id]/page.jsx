// all posts of a particular author
import React from "react";
import { getAuthor, getPost } from "@/lib/data";
import PostCard from "@/components/PostCard/PostCard";

async function AllPostsOfAuthor({ params }) {
    const authorId = params.id;
    const author = await getAuthor(authorId);

    // Get an array of promises for fetching each blog
    const blogPromises = author.blogs.map(async (blogId) => {
        const blog = await getPost(blogId);
        return blog;
    });

    // Wait for all promises to resolve
    const posts = await Promise.all(blogPromises);

    console.log(posts);
    return (
        <div className="flex">
            {posts.map((post) => (
                <PostCard key={post._id} blogTitle={post.title} id={post._id} />
            ))}
        </div>
    );
}

export default AllPostsOfAuthor;
