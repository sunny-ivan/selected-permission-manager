import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import RouteError from "../pages/route-error";
import Logout from "../pages/logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>hello</div>,
    errorElement: <RouteError />,
  },
  { path: "/login", element: <Login /> },
  { path: "/logout", element: <Logout /> },
]);

export default router;
