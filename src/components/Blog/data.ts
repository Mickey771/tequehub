export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string; // HTML content for now
    author: string;
    date: string;
    readTime: string;
    image: string;
    tags: string[];
}

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        title: "Integer Maecenas Eget Viverra.",
        slug: "integer-maecenas-eget-viverra-1",
        excerpt: "Aenean eleifend ante maecenas pulvinar montes lorem et pede.",
        content: `
      <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      <h2>Healthy food choices are happy food choices</h2>
      <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    `,
        author: "Admin",
        date: "June 21, 2022",
        readTime: "2 minute read",
        image: "/images/blog1.jpg", // Placeholder - need to check if exists or use a generic one
        tags: ["Aenean Eleifend", "Aliquam"],
    },
    {
        id: "2",
        title: "Integer Maecenas Eget Viverra.",
        slug: "integer-maecenas-eget-viverra-2",
        excerpt: "Aenean eleifend ante maecenas pulvinar montes lorem et pede.",
        content: "<p>Content for post 2...</p>",
        author: "Admin",
        date: "June 21, 2022",
        readTime: "2 minute read",
        image: "/images/blog2.jpg",
        tags: ["Aenean Eleifend", "Aliquam"],
    },
    {
        id: "3",
        title: "Integer Maecenas Eget Viverra.",
        slug: "integer-maecenas-eget-viverra-3",
        excerpt: "Aenean eleifend ante maecenas pulvinar montes lorem et pede.",
        content: "<p>Content for post 3...</p>",
        author: "Admin",
        date: "June 21, 2022",
        readTime: "2 minute read",
        image: "/images/blog3.jpg",
        tags: ["Aenean Eleifend", "Aliquam"],
    },
    {
        id: "4",
        title: "Integer Maecenas Eget Viverra.",
        slug: "integer-maecenas-eget-viverra-4",
        excerpt: "Aenean eleifend ante maecenas pulvinar montes lorem et pede.",
        content: "<p>Content for post 4...</p>",
        author: "Admin",
        date: "June 21, 2022",
        readTime: "2 minute read",
        image: "/images/blog1.jpg",
        tags: ["Aenean Eleifend", "Aliquam"],
    },
    {
        id: "5",
        title: "Integer Maecenas Eget Viverra.",
        slug: "integer-maecenas-eget-viverra-5",
        excerpt: "Aenean eleifend ante maecenas pulvinar montes lorem et pede.",
        content: "<p>Content for post 5...</p>",
        author: "Admin",
        date: "June 21, 2022",
        readTime: "2 minute read",
        image: "/images/blog2.jpg",
        tags: ["Aenean Eleifend", "Aliquam"],
    },
    {
        id: "6",
        title: "Integer Maecenas Eget Viverra.",
        slug: "integer-maecenas-eget-viverra-6",
        excerpt: "Aenean eleifend ante maecenas pulvinar montes lorem et pede.",
        content: "<p>Content for post 6...</p>",
        author: "Admin",
        date: "June 21, 2022",
        readTime: "2 minute read",
        image: "/images/blog3.jpg",
        tags: ["Aenean Eleifend", "Aliquam"],
    },
];
