"use client";
// Supports weights 100-900
import "@fontsource-variable/jost";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  // fonts: {
  //   heading: `'Jost Variable', sans-serif`,
  //   body: `'Jost Variable', sans-serif`,
  // },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "semibold",
      },

      sizes: {
        sm: {
          h: "40px",
          fontSize: "sm",
          px: "24px",
        },
        md: {
          h: "56px",
          fontSize: "lg",
          px: "32px",
        },
        lg: {
          h: "56px",
          fontSize: "lg",
          px: "32px",
        },
      },

      variants: {
        primary: {
          bg: "#AD1FEA",
          color: "white",
        },
      },

      defaultProps: {
        size: "lg",
        variant: "primary",
        colorScheme: "teal",
      },
    },
  },
});
function GlobalProviders({ children }: React.PropsWithChildren) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

export default GlobalProviders;
