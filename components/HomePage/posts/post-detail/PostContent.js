import PostHeader from "./PostHeader";
import styles from "./PostContent.module.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Image from "next/image";

const PostContent = (props) => {
    const { post } = props;
    const imagePath = `/images/posts/${post.slug}/${post.image}`;

    const customRenderers = {
        p(paragraph) {
            const { node } = paragraph;
            if (node.children[0].tagName === "img") {
                const image = node.children[0];
                return (
                    <div className={styles.image}>
                        <Image
                            src={`${image.properties.src}`}
                            alt={image.alt}
                            width={600}
                            height={300}
                        />
                    </div>
                );
            }
            return <p>{paragraph.children}</p>;
        },
        code(code) {
            const { className, children } = code;
            const language = className.split("-")[1]; // className is something like language-js => we want the js part
            return (
                <SyntaxHighlighter
                    style={atomDark}
                    language={language}
                    children={children}
                />
            );
        },
    };

    return (
        <article className={styles.content}>
            <PostHeader title={post.title} image={imagePath} />
            <ReactMarkdown components={customRenderers}>
                {post.content}
            </ReactMarkdown>
        </article>
    );
};

export default PostContent;
