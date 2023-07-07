import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllPostPath() {
  let allPostData = [];
  const postsDirectory = path.join(process.cwd(), "posts");
  const booksDir = fs.readdirSync(postsDirectory);
  console.log("bookdir", booksDir);
  const routes = [];
  // console.log("booksDir", booksDir);

  booksDir.map((bookDir) => {
    const filesName = fs.readdirSync(path.join(postsDirectory, bookDir));
    const route = filesName.map((fileName) => {
      const id = fileName.replace(/\.mdx$/, "");
      console.log([bookDir, id]);
      // Read markdown file as string
      // const fullPath = path.join(postsDirectory, bookDir, fileName);
      // const fileContents = fs.readFileSync(fullPath, "utf8");
      // const matterResult = matter(fileContents);
      return {
        params: {
          id: [bookDir, id],
          // ...matterResult.data,
        },
      };
    });

    allPostData.push(...route);
  });

  return allPostData;
}
