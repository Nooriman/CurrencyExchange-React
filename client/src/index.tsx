import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./utilities/router";
import { customTheme } from "./utilities/theme";
import { ThemeProvider } from "@emotion/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ThemeProvider theme={customTheme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
