import Head from "next/head";
import type { NextPage } from "next";
import { Box, VStack } from "@chakra-ui/layout";
import Bio from "../components/Bio";

import { getSortedPostsData } from "../lib/posts";
import ArticleCard from "../components/ArticleCard";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const Home: NextPage = ({ allPostsData }) => {
  return (
    <>
      <Head>
        <title>TechPadawan</title>
      </Head>
      <Box as="aside" w="full">
        <Bio />
      </Box>
      <VStack as="main" w="full" h="full" alignItems="flex-start" flexGrow={1}>
        {allPostsData.map((postData) => (
          <ArticleCard key={postData.id} {...postData} />
        ))}
      </VStack>
    </>
  );
};

export default Home;
