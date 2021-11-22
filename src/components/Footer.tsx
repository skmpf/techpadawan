import { HStack, Link } from "@chakra-ui/layout";

const Footer = () => {
  return (
    <HStack as="footer" mt={12}>
      <Link href="https://mobile.twitter.com/thetechpadawan" isExternal>
        twitter
      </Link>
      <span>•</span>
      <Link href="https://github.com/thetechpadawan" isExternal>
        github
      </Link>
    </HStack>
  );
};

export default Footer;
