import type { NextPage } from "next";
import { VStack } from "@chakra-ui/layout";
import Aside from "../src/components/Aside";

import Card from "../src/components/Card";

const Home: NextPage = () => {
  return (
    <>
      <Aside />
      <VStack as="content" w="full" h="full" alignItems="flex-start">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </VStack>
    </>
  );
};

export default Home;
