import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Produtos } from "./pages/Produtos";
import { Sobre } from "./pages/Sobre";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/produtos",
        element: <Produtos />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
