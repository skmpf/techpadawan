import Head from "next/head";
import type { NextPage } from "next";
import { Box, VStack } from "@chakra-ui/layout";
import Bio from "../components/Bio";

import { getSortedPostsData } from "../lib/posts";
import ArticleCard from "../components/ArticleCard";
import { Post } from "../lib/types";

interface Props {
  allPostsData: Post[];
}

export async function getStaticProps() {
  const allPostsData: Post[] = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const Home: NextPage<Props> = ({ allPostsData }) => {
  return (
    <>
      <Head>
        <title>TechPadawan</title>
      </Head>
      <Box as="aside" w="full">
        <Bio />
      </Box>
      <VStack as="main" w="full" h="full" alignItems="flex-start" flexGrow={1}>
        {allPostsData.map((postData: Post) => (
          <ArticleCard key={postData.id} {...postData} />
        ))}
      </VStack>
    </>
  );
};

export default Home;
