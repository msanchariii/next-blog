const data = [
    {
        id: 1,
        imagePath: "/img1.jpg",
        blogTitle: "Blog 1",
        blogContent: "",
        blogCreated: "1st Jan, 2024",
        blogAuthor: "ABC",
    },
    {
        id: 2,
        imagePath: "/img2.jpg",
        blogTitle: "Blog 2",
        blogContent: "",
        blogCreated: "2nd Jan, 2024",
        blogAuthor: "ABC",
    },
    {
        id: 3,
        imagePath: "/img3.jpg",
        blogTitle: "Blog 3",
        blogContent: "",
        blogCreated: "3rd Jan, 2024",
        blogAuthor: "ABC",
    },
    {
        id: 4,
        imagePath: "/img4.jpg",
        blogTitle: "Blog 4",
        blogContent: "",
        blogCreated: "4th Jan, 2024",
        blogAuthor: "ABC",
    },
    {
        id: 5,
        imagePath: "/img5.jpg",
        blogTitle: "Blog 5",
        blogContent: "",
        blogCreated: "5th Jan, 2024",
        blogAuthor: "ABC",
    },
    {
        id: 6,
        imagePath: "/img2.jpg",
        blogTitle: "Blog 6",
        blogContent: "",
        blogCreated: "5th Jan, 2024",
        blogAuthor: "ABC",
    },
];

// array of name, ids
const topAuthors = [
    { name: "Ayan Santra", id: "1" },
    { name: "Abhrojeet Bhattacharjee", id: "2" },
    { name: "Richik", id: "3" },
];
// array of title, ids
const topBlogs = [];
// archive - month, year
const archive = [];

export { data, topAuthors, topBlogs, archive };
