import { useRouter } from "next/router";
import { HStack, Text } from "@chakra-ui/layout";
import { Image, Link } from "@chakra-ui/react";

const Aside = () => {
  const router = useRouter();

  return (
    <HStack as="aside" w="full" h="full" spacing={3} mb={8}>
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

export default Aside;
