import Head from "next/head";
import NextLink from "next/link";
import { Box, Heading } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/react";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";
import remarkLint from "remark-lint";
import rehypeRaw from "rehype-raw";
import { getAllPostIds, getPostData } from "../../lib/posts";
import ArticleDetails from "../../components/ArticleDetails";
import Bio from "../../components/Bio";
import MDXComponents from "../../components/MDXComponents";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const source = await getPostData(params.id);

  const { content, data } = matter(source.fileContents);
  const mdxSource = await serialize(content, {
    scope: data,
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkLint],
      rehypePlugins: [rehypeRaw],
    },
  });
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      fileContents: source.fileContents,
    },
  };
}

export default function Post({ source, frontMatter, fileContents }) {
  return (
    <>
      <Head>
        <title>{frontMatter.title} - TechPadawan</title>
      </Head>
      <Box as="main" flexGrow={1}>
        <Box as="article">
          <Box as="header" mb={7}>
            <Heading as="h1">{frontMatter.title}</Heading>
            <ArticleDetails
              date={frontMatter.date}
              fileContents={fileContents}
            />
          </Box>
          <Box>
            <MDXRemote {...source} components={MDXComponents} />
          </Box>
          <Box mt={8}>
            <NextLink href="/" passHref>
              <Link>← Back to home</Link>
            </NextLink>
          </Box>
        </Box>
      </Box>
      <Box as="aside" w="full" mt={24}>
        <Heading as="h3" size="md" mt={2} mb={7}>
          <NextLink href="/" passHref>
            <Link textDecoration="none">TechPadawan</Link>
          </NextLink>
        </Heading>
        <Bio />
      </Box>
    </>
  );
}
