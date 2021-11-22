import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Link: {
      baseStyle: {
        textDecoration: "underline",
        _hover: {
          textDecoration: "none",
        },
      },
    },
  },
  fonts: {
    heading: `Inter, sans-serif, ${base.fonts?.heading}`,
    body: `Merriweather, Georgia, serif, ${base.fonts?.body}`,
  },
});

export default theme;
