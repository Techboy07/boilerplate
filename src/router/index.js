import { createBrowserRouter } from "react-router";
import App from "../App";
import ErrorPage from "../pages/404";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/404",
    Component: ErrorPage,
  },
]);

export default router;
