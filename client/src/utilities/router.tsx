import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const App = lazy(() => import("../pages/App/App"));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <Suspense fallback={<>loading...</>}>
          <App />
        </Suspense>
      }
    ></Route>
  )
);
