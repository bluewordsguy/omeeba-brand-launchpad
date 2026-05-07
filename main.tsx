import React from "react";
import ReactDOM from "react-dom/client";
import "src/styles.css";
import Index from "./src/routes/index";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
);
