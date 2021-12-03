import { useRouter } from "next/router";
import { HStack, Text } from "@chakra-ui/layout";
import { Image, Link } from "@chakra-ui/react";

const Bio = () => {
  const router = useRouter();

  return (
    <HStack w="full" h="full" spacing={3} mb={8}>
      {/* TODO replace image component by next image component for optimization */}
      <Image
        borderRadius="full"
        boxSize="3.5rem"
        src="https://bit.ly/sage-adebayo"
        alt="Segun Adebayo"
      />
      <Text>
        Personal blog by{" "}
        <Link
          variant={router.pathname === "/" && "brand"}
          href="https://mobile.twitter.com/thetechpadawan"
          isExternal
        >
          TechPadawan
        </Link>
        <br />I write about tech, web development, and other stuff.
      </Text>
    </HStack>
  );
};

export default Bio;
