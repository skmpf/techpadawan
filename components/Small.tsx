import readTime from "../lib/read-time";
import { Box } from "@chakra-ui/layout";

const Small = ({ date, fileContents }) => {
  return (
    <Box as="small">
      {new Date(date).toLocaleDateString(undefined, {
        dateStyle: "medium",
      })}{" "}
      • {readTime(fileContents)} min read
    </Box>
  );
};

export default Small;
