import React from "react";

function DaySection({ days, index }) {
    return (
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
    );
}

export default DaySection;
