import NextLink from "next/link";
import { Heading, HStack } from "@chakra-ui/layout";
import { Button, Link, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack as="header" w="full" mb={12} justifyContent="space-between">
      <Heading as="h1" size="lg">
        <NextLink href="/">
          <Link textDecoration="none">TechPadawan</Link>
        </NextLink>
      </Heading>
      <Button
        onClick={toggleColorMode}
        bg="none"
        border="none"
        _active={{ bg: "none" }}
        _focus={{ outline: "none" }}
        _hover={{ bg: "none" }}
      >
        {colorMode === "light" ? (
          <MoonIcon boxSize={5} />
        ) : (
          <SunIcon boxSize={5} />
        )}
      </Button>
    </HStack>
  );
};

export default Header;
