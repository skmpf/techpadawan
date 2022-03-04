import readingTime from "reading-time";
import { Box } from "@chakra-ui/layout";

const ArticleDetails = ({ date, fileContents }) => {
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
