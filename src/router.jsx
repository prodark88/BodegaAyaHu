import { createBrowserRouter, Outlet } from "react-router-dom";

import Header from "./layouts/Header"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CategoryProducts from "./pages/CategoryProducts";
import Footer from "./layouts/Footer";
import Profile from "./pages/Profile";
import AddProduct from "./components/products/AddProduct";
import EditProduct from "./components/products/EditProduct";
import ProductTable from "./components/products/ProductTable";
import BannerCarousel from "./components/utils/BannerCarousel";
import LoadingSpinner from "./components/utils/LoadingSpinner";
import ProductFilters from "./components/products/ProductFilters";
const Root = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <div className="flex-grow">
      <Outlet />
    </div>
    <Footer/>
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
        element: <Profile />,
      },
      {
        path: "/admin",
        element: <Home />,
      },
      {
        path: "/products/:category",
        element: <CategoryProducts />
      },
      {
        path: "*",
        element: <Home />,
      },



      // RUTAS ADMIN
      {
        path: "/admin/products",
        element: <AddProduct />
      },
      {
        path: "/admin/users",
        element: <CategoryProducts />
      },
      {
        path: "/admin/",
        element: <CategoryProducts />
      },
      {
        path: "/table",
        element: <ProductTable />
      },
      {
        path: "admin/products/edit",
        element: <EditProduct />
      },
      {
        path: "/banner/",
        element: <BannerCarousel />
      },
      {
        path: "/spinner/",
        element: <LoadingSpinner />
      },

      {
        path: "/filters/",
        element: <ProductFilters />
      },
      
    ],
  },
]);
  