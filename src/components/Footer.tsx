import { useRouter } from "next/router";
import { Box, HStack, Link, VStack } from "@chakra-ui/layout";

const Footer = () => {
  const router = useRouter();

  return (
    <VStack as="footer" mt={20} align="flex-start">
      <HStack>
        <Link
          variant={router.pathname === "/" && "brand"}
          href="https://mobile.twitter.com/thetechpadawan"
          isExternal
        >
          twitter
        </Link>
        <span>•</span>
        <Link
          variant={router.pathname === "/" && "brand"}
          href="https://github.com/thetechpadawan"
          isExternal
        >
          github
        </Link>
      </HStack>
      <HStack w="full" justify="flex-end">
        <Box>
          Built by{" "}
          <Link
            variant={router.pathname === "/" && "brand"}
            href="https://mobile.twitter.com/thetechpadawan"
            isExternal
          >
            TechPadawan
          </Link>{" "}
          • Design inspired by{" "}
          <Link
            variant={router.pathname === "/" && "brand"}
            href="https://overreacted.io/"
            isExternal
          >
            Overreacted
          </Link>
        </Box>
      </HStack>
    </VStack>
  );
};

export default Footer;
