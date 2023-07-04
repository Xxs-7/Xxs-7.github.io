import Head from "next/head";
// import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
// import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import path from "path";
import fs from "fs";
import matter from "gray-matter";

export default function Home({}) {
  return (
    <>
      <Head>
        <title>{"hello world"}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {/* {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                {"2023-7-1"}
              </small>
            </li>
          ))} */}
        </ul>
      </section>
    </>
  );
}

// function getAllPostPath() {
//   let allPostData = [];
//   const postsDirectory = path.join(process.cwd(), "src/posts");
//   const booksDir = fs.readdirSync(postsDirectory);
//   const routes = [];
//   // console.log("booksDir", booksDir);
//   allPostData.push({
//     title: booksDir,
//     path: booksDir,
//   });

//   booksDir.map((bookDir) => {
//     const filesName = fs.readdirSync(path.join(postsDirectory, bookDir));

//     const route = filesName.map((fileName) => {
//       const id = fileName.replace(/\.md$/, "");
//       // Read markdown file as string
//       const fullPath = path.join(postsDirectory, bookDir, fileName);
//       const fileContents = fs.readFileSync(fullPath, "utf8");
//       const matterResult = matter(fileContents);
//       return {
//         path: id,
//         ...matterResult.data,
//       };
//     });

//     allPostData.push(...route);
//   });

//   // console.log("allPostData", allPostData);

//   return allPostData;
// }

// export async function getStaticProps() {
//   const allPostsData = getAllPostData();

//   return {
//     props: {
//       allPostsData: allPostsData,
//     },
//   };
// }
