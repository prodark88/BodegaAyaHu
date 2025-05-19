import { createBrowserRouter, Outlet } from "react-router-dom";

import Header from "./layouts/Header"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CategoryProducts from "./pages/CategoryProducts";

const Root = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <div className="flex-grow">
      <Outlet />
    </div>
  </div>
);
  


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // Componente que es común en todas las rutas
    children: [
      {
        index: true,
        element: <Home />, // Componente que aparece en la ruta raíz
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/products",
        element: <Home/>,
      },
      {
        path: "/profile",
        element: <Home />,
      },
      {
        path: "/admin",
        element: <Home />,
      },
      {
        path: "/productos/:category",
        element: <CategoryProducts />
      },
      {
        path: "*",
        element: <Home />,
      },
    ],
  },
]);
  