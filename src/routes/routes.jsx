import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/home/Home";
import About from "../pages/About";
import Login from "../components/LoginRegistration/Login";
import Registration from "../components/LoginRegistration/Registration";
import ErrorPage from "../pages/ErrorPage";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../components/dashboard/dashboard";
import CowProductDetails from "../pages/CowProductDetails";
import AllProducts from "../components/dashboard/AllProducts";
import AddProduct from "../components/dashboard/AddProduct";
import EditProduct from "../components/dashboard/EditProduct";
import EditProfile from "../components/dashboard/EditProfile";
import Profile from "../components/dashboard/Profile";
import Faq from "../pages/Faq";
import Career from "../pages/Career";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://agro-firm-server.onrender.com/cows"),
      },
      {
        path: "/cow-products/:id",
        element: <CowProductDetails />,
        loader: ({ params }) =>
          fetch(`https://agro-firm-server.onrender.com/cows/${params.id}`),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "profile/edit/:id",
        element: (
          <PrivateRoute>
            <EditProfile />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://agro-firm-server.onrender.com/user/get/${params.id}`),
      },
      {
        path: "all-products",
        element: (
          <PrivateRoute>
            <AllProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "add-products",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "all-products/edit/:id",
        element: (
          <PrivateRoute>
            <EditProduct />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://agro-firm-server.onrender.com/cows/${params.id}`),
      },
    ],
  },
]);
