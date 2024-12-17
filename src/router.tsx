import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import DashboardLayout from "./layouts/dashboard";
import SharedLayout from "./layouts/shared";

const Book = lazy(() => import("./pages/shared/book"));
const EBook = lazy(() => import("./pages/shared/e-book"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const CongTy = lazy(() => import("./pages/dashboard/congty"));
const PhongBan = lazy(() => import("./pages/dashboard/phongban"));

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
      {
        path: "cong-ty",
        element: <CongTy />,
      },
      {
        path: "phong-ban",
        element: <PhongBan />,
      },
    ],
  },
]);

export default router;
