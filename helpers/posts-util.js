import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts"); // process.cwd() returns the current working directory

export function getPostData(postIdentifier) {
    // create the post slug
    const postSlug = filename.replace(/\.md$/, ""); // remove .md extension
    // create the filepath
    const filePath = path.join(postsDirectory, `${postSlug}.md`);
    // read the file contents
    const fileContent = fs.readFileSync(filePath, "utf-8");
    //parse md file into metadata and content
    const { data, content } = matter(fileContent);
    const postData = {
        slug: postSlug,
        ...data,
        content,
    };
    return postData;
}

export function getAllPosts() {
    // read all files in the directory
    const postFiles = fs.readdirSync(postsDirectory);
    // get the post data for each post
    const allPosts = postFiles.map((postFile) => {
        return getPostData(postFile);
    });
    // sort posts by date
    const sortedPosts = allPosts.sort((postA, postB) =>
        postA.date > postB.date ? -1 : 1
    );
    return sortedPosts;
}

export function getFeaturedPosts() {
    const allPosts = getAllPosts();
    const featuredPosts = allPosts.filter((post) => post.isFeatured);
    return featuredPosts;
}
