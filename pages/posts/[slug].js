import React from "react";
import PostContent from "../../components/HomePage/posts/post-detail/PostContent";
import { getPostData } from "../../helpers/posts-util";

const PostDetails = () => {
    return <PostContent />;
};

export const getStaticProps = (context) => {
    // params contains the dynamic segments of the URL
    const { params } = context;
    const { slug } = params;
    const postData = getPostData(slug);
    return {
        props: {
            post: postData,
        },
    };
};

export default PostDetails;
