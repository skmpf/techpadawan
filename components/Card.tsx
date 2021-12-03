import NextLink from "next/link";
import { Box, Heading, Link, Text } from "@chakra-ui/layout";
import Small from "./Small";

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
          <NextLink href={`/posts/${id}`} passHref>
            <Link variant="brand" textDecoration="none">
              {title}
            </Link>
          </NextLink>
        </Heading>
        <Small date={date} fileContents={fileContents} />
      </Box>
      <Text mb={4}>{spoiler}</Text>
    </Box>
  );
};

export default Card;
