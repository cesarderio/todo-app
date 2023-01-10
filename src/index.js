import React from "react";
import ReactDOM from "react-dom/client";
import SettingsProvider from "./Context/Settings";
import App from "./App";
import ModeProvider from "./Context/Mode/classMode";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ModeProvider>
      <SettingsProvider>
        <App />
      </SettingsProvider>
    </ModeProvider>
  </React.StrictMode>
);
