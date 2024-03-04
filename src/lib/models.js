import mongoose from "mongoose";

const authorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        bio: {
            type: String,
        },
        // Array of references to Post documents authored by this author
        blogs: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Blog",
            },
        ],
        // Additional fields as needed (e.g., profile picture, contact information, etc.)
    },
    { timestamps: true }
);

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        image: String,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Author",
            required: true,
        },
        authorName: {
            type: String,
            required: true,
        },
        // author: {
        //     type: String,
        //     required: true,
        // },
        section: {
            type: String,
            enum: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
            required: true,
        },
        year: {
            type: Number,
            required: true,
        },
        month: {
            type: String,
            enum: [
                "jan",
                "feb",
                "mar",
                "apr",
                "may",
                "june",
                "july",
                "aug",
                "sep",
                "oct",
                "nov",
                "dec",
            ],
            required: true,
        },

        // Additional fields as needed (e.g., tags, etc.)
    },
    { timestamps: true }
);
export const Author =
    mongoose.models.Author || mongoose.model("Author", authorSchema);
export const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
