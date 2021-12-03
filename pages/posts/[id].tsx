import Head from "next/head";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Small from "../../components/Small";
import { Box, Heading, Text } from "@chakra-ui/layout";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Box as="article">
        <Box as="header">
          <Heading as="h1">{postData.title}</Heading>
          <Small date={postData.date} fileContents={postData.contentHtml} />
        </Box>
        <Text dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Box>
    </>
  );
}
