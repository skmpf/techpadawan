import NextLink from "next/link";
import { Heading, HStack } from "@chakra-ui/layout";
import { Button, Link } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Header = () => {
  return (
    <HStack as="header" w="full" justifyContent="space-between">
      <Heading as="h1">
        <NextLink href="/">
          <Link>TechPadawan</Link>
        </NextLink>
      </Heading>
      <Button>
        <SunIcon boxSize={6} />
        <MoonIcon boxSize={6} />
      </Button>
    </HStack>
  );
};

export default Header;
