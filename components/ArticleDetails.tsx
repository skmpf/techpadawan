import readingTime from "reading-time";
import { Box } from "@chakra-ui/layout";
import { PostDetails } from "../lib/types";

const ArticleDetails = ({ date, fileContents }: PostDetails) => {
  return (
    <Box as="small">
      {new Date(date).toLocaleDateString(undefined, {
        dateStyle: "medium",
      })}{" "}
      • {Math.ceil(readingTime(fileContents).minutes)} min de lecture
    </Box>
  );
};

export default ArticleDetails;
