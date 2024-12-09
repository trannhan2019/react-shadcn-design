import { lazy } from "react";
import { createBrowserRouter } from "react-router";

const HomeLayout = lazy(() => import("./components/layout/home"));
const Book = lazy(() => import("./pages/home/book"));
const EBook = lazy(() => import("./pages/home/ebook"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,

    // loader: () => redirect("/book"),

    children: [
      {
        index: true,
        element: <Book />,
      },
      {
        path: "ebook",
        element: <EBook />,
      },
    ],
  },
]);

export default router;
