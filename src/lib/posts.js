import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export function getAllPostPath() {
  let allPostData = [];
  const postsDirectory = path.join(process.cwd(), "src", "posts");
  const booksDir = fs.readdirSync(postsDirectory);

  booksDir.map((bookDir) => {
    const filesNames = fs.readdirSync(path.join(postsDirectory, bookDir));
    const route = filesNames.map((fileName) => {
      const id = fileName.replace(/\.mdx$/, "");
      return {
        params: {
          id: id === "index" ? ["posts", bookDir] : ["posts", bookDir, id],
        },
      };
    });

    allPostData.push(...route);
  });

  return allPostData;
}
