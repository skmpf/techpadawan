import Head from "next/head";
import type { NextPage } from "next";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import { Box, Heading, HStack, VStack } from "@chakra-ui/layout";

const NotFound: NextPage = ({ allPostsData }) => {
  return (
    <>
      <Head>
        <title>404: This page could not be found - TechPadawan</title>
      </Head>
      <VStack as="article" flexGrow={1} justify="Center">
        <HStack justify="center" mb={8}>
          <Heading
            as="h1"
            size="lg"
            pr={6}
            mr={5}
            borderRight={1}
            borderRightWidth={1}
            borderRightStyle="solid"
          >
            404
          </Heading>
          <Box ml={0}>
            <Heading as="h2" size="sm">
              This page could not be found.
            </Heading>
          </Box>
        </HStack>
        <Box>
          <NextLink href="/" passHref>
            <Link>← Back to home</Link>
          </NextLink>
        </Box>
      </VStack>
    </>
  );
};

export default NotFound;
