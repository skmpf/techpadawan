import NextLink from "next/link";
import { useRouter } from "next/router";
import { Heading, HStack } from "@chakra-ui/layout";
import { IconButton, Link, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();

  return (
    <HStack as="header" w="full" mb={12} justify="space-between">
      <Heading
        as={router.pathname === "/" ? "h1" : "h3"}
        size={router.pathname === "/" ? "lg" : "md"}
        fontWeight="900"
      >
        <NextLink href={"/"} passHref>
          <Link
            variant={router.pathname === "/" ? "header" : "brand"}
            textDecoration="none"
          >
            TechPadawan
          </Link>
        </NextLink>
      </Heading>
      <IconButton
        onClick={toggleColorMode}
        aria-label="ColorMode Switch"
        bg="none"
      >
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
