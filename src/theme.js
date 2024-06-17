import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      "html, body": {
        backgroundColor: "black",
        color: "white",
      },
    },
  },
  colors: {
    text: {
      primary: "white",
      secondary: "gray.400",
    },
  },
});

export default theme;