import NextLink from "next/link";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/react";

const Card = () => {
  return (
    <Box as="article">
      <Box as="header">
        <Heading as="h3">
          <NextLink href="/">
            <Link textDecoration="none">npm audit: Broken by Design</Link>
          </NextLink>
        </Heading>
        <Box as="small">{new Date().toDateString()} • 14 min read</Box>
      </Box>
      <Text>
        Found 99 vulnerabilities (84 moderately irrelevant, 15 highly
        irrelevant)
      </Text>
    </Box>
  );
};

export default Card;
