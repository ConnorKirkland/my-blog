import PostHeader from "./PostHeader";
import styles from "./PostContent.module.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const PostContent = () => {
    const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
    return (
        <article className={styles.content}>
            <PostHeader title={DUMMY_POST.title} image={imagePath} />
            <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
        </article>
    );
};

export default PostContent;
