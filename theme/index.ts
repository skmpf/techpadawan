import { extendTheme, theme as base } from "@chakra-ui/react";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { Dict } from "@chakra-ui/utils";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#845EC2",
      200: "#C197FF",
      300: "#00C9A7",
      400: "#005B44",
    },
  },
  fonts: {
    heading: `Inter, sans-serif, ${base.fonts?.heading}`,
    body: `Merriweather, Georgia, serif, ${base.fonts?.body}`,
  },
  components: {
    Link: {
      baseStyle: (props: Dict | StyleFunctionProps) => ({
        color: mode("brand.100", "brand.200")(props),
        textDecoration: "underline",
        _hover: {
          textDecoration: "none",
        },
      }),
      variants: {
        header: (props: Dict | StyleFunctionProps) => ({
          color: mode("gray.800", "whiteAlpha.900")(props),
        }),
      },
    },
  },
});

export default theme;
