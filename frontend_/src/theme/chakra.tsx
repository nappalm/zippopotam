import { ChakraProvider } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import config from "./config";
import GlobalStyle from "./global-style";

export const Chakra = ({ children }: PropsWithChildren) => {
  return (
    <ChakraProvider theme={config}>
      {children}
      <GlobalStyle />
    </ChakraProvider>
  );
};
