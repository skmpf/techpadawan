import NextLink from "next/link";
import { Heading, HStack } from "@chakra-ui/layout";
import { Button, Link } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Header = () => {
  return (
    <HStack as="header" w="full" mb={12} justifyContent="space-between">
      <Heading as="h1" size="lg">
        <NextLink href="/">
          <Link>TechPadawan</Link>
        </NextLink>
      </Heading>
      <Button>
        <SunIcon boxSize={5} />
        <MoonIcon boxSize={5} />
      </Button>
    </HStack>
  );
};

export default Header;
