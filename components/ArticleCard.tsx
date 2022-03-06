import NextLink from "next/link";
import { Box, Heading, Link, Text } from "@chakra-ui/layout";
import ArticleDetails from "./ArticleDetails";
import { Post } from "../lib/types";

const ArticleCard = ({ id, title, date, spoiler, fileContents }: Post) => {
  return (
    <Box as="article">
      <Box as="header">
        <Heading
          as="h3"
          size="lg"
          fontSize="1.75rem"
          fontWeight="900"
          mt={8}
          mb={2}
        >
          <NextLink href={`/posts/${id}`} passHref>
            <Link textDecoration="none">{title}</Link>
          </NextLink>
        </Heading>
        <ArticleDetails date={date} fileContents={fileContents} />
      </Box>
      <Text mb={4}>{spoiler}</Text>
    </Box>
  );
};

export default ArticleCard;
