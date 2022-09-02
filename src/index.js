import React from "react";
import ReactDOM from "react-dom/client";
import Alert from "./Alert";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Alert type={"secondary"} text={"text"} />
  </React.StrictMode>
);
