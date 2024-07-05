import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./utilities/router";
import React from "react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  // <ThemeProvider theme={customTheme}>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  // </ThemeProvider>
);
