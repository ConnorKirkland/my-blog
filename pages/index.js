import Hero from "../components/HomePage/Hero";
import FeaturedPosts from "../components/HomePage/FeaturedPosts";
import { getFeaturedPosts } from "../helpers/posts-util";

const HomePage = (props) => {
    return (
        <>
            <Hero />
            <FeaturedPosts posts={props.posts} />
        </>
    );
};

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts();
    return {
        props: {
            posts: featuredPosts,
        },
    };
}

export default HomePage;
