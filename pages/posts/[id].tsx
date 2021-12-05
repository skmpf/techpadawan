import Head from "next/head";
import NextLink from "next/link";
import { getAllPostIds, getPostData } from "../../lib/posts";
import ArticleDetails from "../../components/ArticleDetails";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/react";
import Bio from "../../components/Bio";

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
        <title>{postData.title} - TechPadawan</title>
      </Head>
      <Box as="article">
        <Box as="header" mb={7}>
          <Heading as="h1">{postData.title}</Heading>
          <ArticleDetails
            date={postData.date}
            fileContents={postData.contentHtml}
          />
        </Box>
        <Text dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Box>
      <Box as="aside" w="full">
        <Heading as="h3" size="md" mt={2} mb={7}>
          <NextLink href="/" passHref>
            <Link variant="brand" textDecoration="none">
              TechPadawan
            </Link>
          </NextLink>
        </Heading>
        <Bio />
      </Box>
    </>
  );
}
