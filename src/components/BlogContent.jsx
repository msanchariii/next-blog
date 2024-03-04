"use client";
import React from "react";
import ReactMarkdown from "react-markdown";

function BlogContent({ content }) {
    return (
        <article class="prose lg:prose-md">
            <ReactMarkdown>{content}</ReactMarkdown>
        </article>
    );
}

export default BlogContent;
