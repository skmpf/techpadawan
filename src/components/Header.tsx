import NextLink from "next/link";
import { Heading, HStack } from "@chakra-ui/layout";
import { IconButton, Link, useColorMode } from "@chakra-ui/react";
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
      <IconButton onClick={toggleColorMode} aria-label="ColorMode Switch">
        {colorMode === "light" ? (
          <MoonIcon boxSize={5} />
        ) : (
          <SunIcon boxSize={5} />
        )}
      </IconButton>
    </HStack>
  );
};

export default Header;
