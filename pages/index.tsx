import type { NextPage } from "next";
import { VStack } from "@chakra-ui/layout";
import Aside from "../src/components/Aside";

import { getSortedPostsData } from "../lib/posts";
import Card from "../src/components/Card";

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
      <Aside />
      <VStack as="content" w="full" h="full" alignItems="flex-start">
        {allPostsData.map((data) => (
          <Card key={data.id} {...data} />
        ))}
      </VStack>
    </>
  );
};

export default Home;
