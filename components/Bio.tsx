import { useRouter } from "next/router";
import { HStack, Text } from "@chakra-ui/layout";
import { Img, Link } from "@chakra-ui/react";

const Bio = () => {
  const router = useRouter();

  return (
    <HStack w="full" h="full" spacing={3} mb={8}>
      <Img
        borderRadius="full"
        boxSize="3.5rem"
        src="https://res.cloudinary.com/dzzyt6yhh/image/upload/v1638592074/avatar_ykbmmm.png"
        alt="TechPadawan avatar"
        backgroundColor="brand.100"
      />
      <Text>
        Personal blog by{" "}
        <Link href="https://mobile.twitter.com/thetechpadawan" isExternal>
          TechPadawan
        </Link>
        <br />I write about tech, web development, and other stuff.
      </Text>
    </HStack>
  );
};

export default Bio;
