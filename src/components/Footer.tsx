import { useRouter } from "next/router";
import { HStack, Link } from "@chakra-ui/layout";

const Footer = () => {
  const router = useRouter();

  return (
    <HStack as="footer" mt={12}>
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
  );
};

export default Footer;
