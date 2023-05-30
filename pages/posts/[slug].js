import React from "react";
import PostContent from "../../components/HomePage/posts/post-detail/PostContent";
import { getPostData, getPostsFiles } from "../../helpers/posts-util";

const PostDetails = (props) => {
    return <PostContent post={props.post} />;
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

export const getStaticPaths = () => {
    const postFilenames = getPostsFiles();

    const slugs = postFilenames.map((filename) =>
        filename.replace(/\.md$/, "")
    );

    return {
        paths: slugs.map((slug) => ({ params: { slug: slug } })) || [],
        fallback: false,
    };
};

export default PostDetails;
