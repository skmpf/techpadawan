import NextLink from "next/link";
import { Box, Heading, Link, Text } from "@chakra-ui/layout";

const Card = ({ id, title, date, spoiler }) => {
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
          • 14 min read
        </Box>
      </Box>
      <Text mb={4}>{spoiler}</Text>
    </Box>
  );
};

export default Card;
