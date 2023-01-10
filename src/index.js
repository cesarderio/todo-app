import React from "react";
import ReactDOM from "react-dom/client";
import TodoProvider from "./Context/Settings";
import App from "./App";
import ModeProvider from "./Context/Mode/classMode";
import { MantineProvider } from "@mantine/core";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{colorScheme: 'dark'}}>
      <ModeProvider>
        <TodoProvider>
          <App />
        </TodoProvider>
      </ModeProvider>
    </MantineProvider>
  </React.StrictMode>
);
