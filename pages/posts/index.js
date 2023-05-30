import React from "react";
import AllPosts from "../../components/HomePage/posts/AllPosts";
import { getAllPosts } from "../../helpers/posts-util";

const AllPostsPage = (props) => {
    return <AllPosts posts={props.posts} />;
};

export const getStaticProps = () => {
    const posts = getAllPosts();
    return {
        props: {
            posts,
        },
    };
};

export default AllPostsPage;
