// import Layout from '../../components/layout'
// import Head from "next/head";
import MarkdownPage from "@/components/MarkdownPage";
import { getAllPostIds, getAllPostPath, getPostData } from "../lib/posts";

// import Date from "../../components/date";
// import utilStyles from "../../styles/utils.module.css";
// import { IPostData } from "../../lib/type";

interface IPostProps {
  postData: {
    contentHtml: string;
  };
}

export default function Post({ postData }: IPostProps) {
  return (
    // <Page>
    <MarkdownPage>
      {<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />}
    </MarkdownPage>
    // </Page>
  );

  // return (
  // <Layout>
  // <div className="bg-[#5699C3] max-w-8xl min-h-screen mx-auto px-4 sm:px-6 md:px-8">
  //   <Head>
  //     <title>{postData.title}</title>
  //   </Head>
  //   <article className="md:container mx:auto">
  //     <h1 className={utilStyles.headingXl}>{postData.title}</h1>
  //     <div className={utilStyles.lightText}>
  //       <Date dateString={postData.date} />
  //     </div>
  //   </article>
  // </div>
  // </Layout>
  // );
}

export async function getStaticPaths() {
  const paths = getAllPostPath();
  // console.log("paths", paths2);
  // const paths = [
  //   {
  //     params: {
  //       id: ["css", "flex"],
  //     },
  //   },
  // ];
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const postData = await getPostData(params);
  console.log(params);

  return {
    props: {
      postData,
    },
  };
}
