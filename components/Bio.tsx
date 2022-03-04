import { useRouter } from "next/router";
import { HStack, Text } from "@chakra-ui/layout";
import { Img, Link } from "@chakra-ui/react";

const Bio = () => {
  const router = useRouter();

  return (
    <HStack w="full" h="full" spacing={3} mb={8}>
      <Img
        borderRadius="full"
        boxSize="3.5rem"
        src="https://res.cloudinary.com/dzzyt6yhh/image/upload/v1646412241/techpadawan/725D35D9-F0FB-432F-8331-EFDB63F8A3AC_kz9isn.png"
        alt="TechPadawan avatar"
        backgroundColor="brand.100"
      />
      <Text>
        Blog personnel de{" "}
        <Link href="https://mobile.twitter.com/thetechpadawan" isExternal>
          TechPadawan
        </Link>
        <br />
        Je parle de tech, développement web et d'autres sujets.
      </Text>
    </HStack>
  );
};

export default Bio;
