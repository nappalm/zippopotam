import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: () => ({
    body: {
      bg: "#C2F0D7",
      color: "#141616",
      fontWeight: 400,
      fontSize: "1.1rem"
    }
  })
};

const fonts = {
  heading: "Merriweather",
  body: "'Circular Std Book'"
};

const components = {
  Button: {}
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: true
};

export default extendTheme({
  config,
  styles,
  components,
  fonts
});
