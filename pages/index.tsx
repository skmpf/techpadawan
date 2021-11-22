import type { NextPage } from "next";
import { Container, Flex, VStack } from "@chakra-ui/layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <Container maxW="container.md" p={0}>
      <Header />
      <Flex h="100vh" py={20}>
        <VStack w="full" h="full" p={10} alignItems="flex-start">
          <h2>Greetings Padawan</h2>
        </VStack>
      </Flex>
      <Footer />
    </Container>
  );
};

export default Home;
