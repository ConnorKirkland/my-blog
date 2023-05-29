import Hero from "../components/HomePage/Hero";
import FeaturedPosts from "../components/HomePage/FeaturedPosts";

const DUMMY_POSTS = [
    {
        slug: "getting-started-with-nextjs",
        title: "Getting Started with NextJS",
        image: "getting-started-nextjs.png",
        excerpt:
            "NextJS is a the most popular framework for React! In this course, you'll learn NextJS from the ground up.",
        date: "2021-02-10",
    },
    {
        slug: "getting-started-with-nextjs2",
        title: "Getting Started with NextJS",
        image: "getting-started-nextjs.png",
        excerpt:
            "NextJS is a the most popular framework for React! In this course, you'll learn NextJS from the ground up.",
        date: "2021-02-10",
    },
    {
        slug: "getting-started-with-nextjs3",
        title: "Getting Started with NextJS",
        image: "getting-started-nextjs.png",
        excerpt:
            "NextJS is a the most popular framework for React! In this course, you'll learn NextJS from the ground up.",
        date: "2021-02-10",
    },
    {
        slug: "getting-started-with-nextjs4",
        title: "Getting Started with NextJS",
        image: "getting-started-nextjs.png",
        excerpt:
            "NextJS is a the most popular framework for React! In this course, you'll learn NextJS from the ground up.",
        date: "2021-02-10",
    },
];

const HomePage = (props) => {
    return (
        <>
            <Hero />
            <FeaturedPosts posts={DUMMY_POSTS} />
        </>
    );
};

export default HomePage;
