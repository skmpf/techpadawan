import Image from "next/image";
import { Box, Code, Heading, Text } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

const MDXComponents = {
  code: function ({ inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    const lang = match?.[1] === "js" ? "javascript" : match?.[1];
    return !inline && match ? (
      <SyntaxHighlighter
        style={vscDarkPlus}
        PreTag="div"
        showLineNumbers
        showInlineLineNumbers
        language={lang}
        customStyle={{ marginBottom: "2rem" }}
      >
        {String(children).replace(/\n$/, "") || ""}
      </SyntaxHighlighter>
    ) : (
      <Code {...props}>{children}</Code>
    );
  },
  a: ({ children, href, ...props }) => (
    <Link href={href} {...props} isExternal>
      {children}
    </Link>
  ),
  h2: ({ children }) => (
    <Heading as="h2" fontSize="xl" mt="8" mb="6" fontWeight="bold">
      {children}
    </Heading>
  ),
  h3: ({ children }) => (
    <Heading as="h3" fontSize="md" mt="8" mb="6" fontWeight="bold">
      {children}
    </Heading>
  ),
  p: ({ children }) => <Text mb="8">{children}</Text>,
  ul: ({ children }) => (
    <Box as="ul" mb="8">
      {children}
    </Box>
  ),
  li: ({ children }) => (
    <Text as="li" mb="2" ms="4">
      {children}
    </Text>
  ),
  img: ({ src, alt }) => (
    <Box width="100%" className="post-image-container" mt={2} mb={2}>
      <Image src={src || ""} alt={alt} layout="fill" className="image" />
    </Box>
  ),
};

export default MDXComponents;
