import fs from "fs/promises";
import path from "path";

export async function getAllPostPath() {
  let allPostData = [];
  const postsDirectory = path.join(process.cwd(), "src", "posts");
  try {
    const booksDir = await fs.readdir(postsDirectory);

    for (const bookDir of booksDir) {
      const fullBookDir = path.join(postsDirectory, bookDir);
      const stat = await fs.stat(fullBookDir);

      if (!stat.isDirectory()) {
        allPostData.push({
          params: {
            id: [""],
          },
        });

        continue;
      }

      const filesNames = await fs.readdir(fullBookDir);
      const route = filesNames.map((fileName) => {
        const id = fileName.replace(/\.mdx$/, "");
        return {
          params: {
            id: id === "index" ? [bookDir] : [bookDir, id],
          },
        };
      });

      allPostData.push(...route);
    }
  } catch (e) {
    console.error("getAllPostPath", e);
  }

  return allPostData;
  // return [
  //   {
  //     params: {
  //       id: ["index"],
  //     },
  //   },
  // ];
}
