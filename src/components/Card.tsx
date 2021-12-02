import NextLink from "next/link";
import { Box, Heading, Link, Text } from "@chakra-ui/layout";
import readTime from "../../lib/read-time";

const Card = ({ id, title, date, spoiler, fileContents }) => {
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
          <NextLink href="/">
            <Link variant="brand" textDecoration="none">
              {title}
            </Link>
          </NextLink>
        </Heading>
        <Box as="small">
          {new Date(date).toLocaleDateString(undefined, {
            dateStyle: "medium",
          })}{" "}
          • {readTime(fileContents)} min read
        </Box>
      </Box>
      <Text mb={4}>{spoiler}</Text>
    </Box>
  );
};

export default Card;
