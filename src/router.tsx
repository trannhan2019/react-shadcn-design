import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import DashboardLayout from "./layouts/dashboard";
import SharedLayout from "./layouts/shared";

const Book = lazy(() => import("./pages/shared/book"));
const EBook = lazy(() => import("./pages/shared/e-book"));
const Dashboard = lazy(() => import("./pages/dashboard"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,

    children: [
      {
        index: true,
        element: <Book />,
      },
      {
        path: "book",
        element: <Book />,
      },
      {
        path: "e-book",
        element: <EBook />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
