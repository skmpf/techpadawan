import type { NextPage } from "next";
import { VStack } from "@chakra-ui/layout";
import Aside from "../src/components/Aside";

const Home: NextPage = () => {
  return (
    <>
      <Aside />
      <VStack as="content" w="full" h="full" alignItems="flex-start">
        <h2>Greetings Padawan</h2>
      </VStack>
    </>
  );
};

export default Home;
