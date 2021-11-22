import { Container, VStack } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <Container maxW="container.md" p={0}>
      <Flex minH="100vh" direction="column" px={5} py={10}>
        <Header />
        <VStack as="main" flexGrow={1}>
          {children}
        </VStack>
        <Footer />
      </Flex>
    </Container>
  );
}
