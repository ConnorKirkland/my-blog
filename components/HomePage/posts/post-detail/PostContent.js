import PostHeader from "./PostHeader";
import styles from "./PostContent.module.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const PostContent = (props) => {
    const { post } = props;
    const imagePath = `/images/posts/${post.slug}/${post.image}`;
    return (
        <article className={styles.content}>
            <PostHeader title={post.title} image={imagePath} />
            <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
    );
};

export default PostContent;
