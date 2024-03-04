import { connectDB } from "./utlis";
import { Blog, Author } from "./models";
// import { unstable_noStore as noStore } from "next/cache";

export const getData = async () => {
    try {
        connectDB();
        const posts = await Blog.find();
        return posts;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch ALL POSTS");
    }
};

export const findArchive = async (month, year) => {
    try {
        connectDB();
        const query = {
            year: year,
            month: month,
        };
        const posts = await Blog.find({
            $and: [{ month: month }, { year: year }],
        });
        // const posts = await Blog.find();
        return posts;
    } catch (error) {
        console.log(error);
    }
};

export const getPost = async (id) => {
    try {
        connectDB();
        const post = await Blog.findOne({ _id: id });
        return post;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch the post");
    }
};

export const getPostByDay = async (day) => {
    try {
        connectDB();
        const posts = await Blog.find({ section: day })
            .sort({ createdAt: -1 }) // Corrected field to sort by
            .limit(8);
        return posts;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch posts");
    }
};
export const getPostByDay2 = async (day) => {
    try {
        connectDB();
        const posts = await Blog.find({ section: day })
            .sort({ createdAt: -1 })
            .limit(8);

        // Simplify the data
        const simplifiedPosts = posts.map((post) => ({
            _id: post._id,
            title: post.title,
            desc: post.desc, // Assuming "description" is stored in the "desc" field
            author: {
                _id: post.author._id,
                name: post.author.name,
            },
            createdAt: post.createdAt,
        }));

        return simplifiedPosts;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch posts");
    }
};

export const getAllAuthors = async () => {
    try {
        connectDB();
        const authors = await Author.find();
        return authors;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch ALL AUTHORS");
    }
};

// get author by blog id
// export const getAuthorByBlogId = async (blogId) => {
//     try {
//         connectDB();
//         const blog = await Blog.find({ _id: blogId });
//         const authorId = blog[0].author;
//         const author = await Author.find({ _id: authorId });
//         return author;
//     } catch (error) {
//         console.log(error);
//         throw new Error("Failed to fetch ALL AUTHORS");
//     }
// };

// export const getAuthorByBlogId = async (blogId) => {
//     try {
//         connectDB();
//         const blog = await Blog.findById(blogId);

//         if (!blog) {
//             throw new Error("Blog not found");
//         }

//         const authorId = blog.author;
//         const author = await Author.findById(authorId);

//         if (!author) {
//             throw new Error("Author not found");
//         }

//         return author;
//     } catch (error) {
//         console.error(error.message);
//         throw new Error("Failed to fetch author");
//     }
// };

// get author by author id
export const getAuthor = async (id) => {
    try {
        connectDB();
        const author = await Author.findById({ _id: id });
        return author;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch AUTHOR");
    }
};
