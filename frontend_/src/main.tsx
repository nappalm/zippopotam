import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Chakra } from "./theme/chakra.tsx";
import { StoreContext } from "./context/StoreContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Chakra>
      <StoreContext>
        <App />
      </StoreContext>
    </Chakra>
  </React.StrictMode>
);
