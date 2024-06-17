import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const darkTheme = extendTheme({
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
      secondary: "gray.400", // Light grey color for secondary text
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={darkTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
