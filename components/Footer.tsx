import { useRouter } from "next/router";
import { Box, HStack, Link } from "@chakra-ui/layout";

const Footer = () => {
  const router = useRouter();

  return (
    <HStack as="footer" mt={20} justify="space-between">
      <Box>
        <Link
          variant={router.pathname === "/" && "brand"}
          href="https://mobile.twitter.com/thetechpadawan"
          isExternal
        >
          twitter
        </Link>
      </Box>
      <Box>
        Design inspired by{" "}
        <Link
          variant={router.pathname === "/" && "brand"}
          href="https://overreacted.io/"
          isExternal
        >
          Overreacted
        </Link>
      </Box>
    </HStack>
  );
};

export default Footer;
