import Head from "next/head";
import { Container, VStack } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `var _paq = window._paq = window._paq || [];
              /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
              _paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
              _paq.push(["setCookieDomain", "*.techpadawan.com"]);
              _paq.push(["setDomains", ["*.techpadawan.com"]]);
              _paq.push(["setDoNotTrack", true]);
              _paq.push(['trackPageView']);
              _paq.push(['enableLinkTracking']);
              (function() {
                var u="//analytics.techpadawan.com/";
                _paq.push(['setTrackerUrl', u+'matomo.php']);
                _paq.push(['setSiteId', '1']);
                var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
              })();
              `,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img referrerpolicy="no-referrer-when-downgrade" src="https://analytics.techpadawan.com/matomo.php?idsite=1&amp;rec=1" style="border:0" alt="" />
              `,
          }}
        />
      </Head>
      <Container maxW="container.md" p={0}>
        <Flex minH="100vh" direction="column" px={5} py={10}>
          <Header />
          {children}
          <Footer />
        </Flex>
      </Container>
    </>
  );
}
