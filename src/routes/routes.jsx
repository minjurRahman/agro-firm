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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/shoes"),
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
      // {
      //   path: "profile",
      //   element: (
      //     <PrivateRoute>
      //       <ProfileDashboard />
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: "profile/edit/:id",
      //   element: (
      //     <PrivateRoute>
      //       <EditProfile></EditProfile>
      //     </PrivateRoute>
      //   ),
      //   loader: ({ params }) =>
      //     fetch(`http://localhost:5000/user/get/${params.id}`),
      // },
      // {
      //   path: "all-products",
      //   element: (
      //     <PrivateRoute>
      //       <AllProducts />
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: "add-products",
      //   element: (
      //     <PrivateRoute>
      //       <AddProducts />
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: "all-products/edit/:id",
      //   element: (
      //     <PrivateRoute>
      //       <EditsProduct />
      //     </PrivateRoute>
      //   ),
      //   loader: ({ params }) =>
      //     fetch(`http://localhost:5000/shoes/${params.id}`),
      // },
    ],
  },
]);
