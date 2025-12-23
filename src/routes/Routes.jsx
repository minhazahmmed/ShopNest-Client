import { createBrowserRouter, Navigate } from "react-router";
import RootLayout from "../root/RootLayout";
import ScrollToTop from "../components/ScrollToTop";
import Error from "../pages/Error";
import MainPage from "../pages/MainPage";
import About from "../pages/About";
import userfaq from "../pages/USER/userfaq";

// User Components
import Userlayouts from "../../src/pages/USER/Userlayouts"; 
import Home from "../pages/USER/Home";
import Products from "../pages/USER/Product"; 
import Userfaq from "../pages/USER/userfaq"; 
import UserProductDetails from "../pages/USER/UserProductDetails";
import MyDashBoard from "../pages/USER/MyDashBoard";
import MyCart from "../pages/USER/MyCart";

// Admin Components
import AdminRoute from "../routes/AdminRoute";
import AdminLayout from "../ADMIN/AdminLayouts";
import AdminHome from "../ADMIN/AdminHome";


const router = createBrowserRouter([
  // 1. General Routes
  {
    path: "/",
    element: (
      <>
        <RootLayout />
        <ScrollToTop />
      </>
    ),
    errorElement: <Error />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "about", element: <About /> },
    ],
  },

  // 2. User Dashboard/Shopping Routes
  {
    path: "/user", 
    element: (
      <>
        <Userlayouts />
        <ScrollToTop />
      </>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "dashboard", element: <MyDashBoard /> },
      { path: "cart", element: <MyCart /> },
      { path: "products", element: <Products /> },
      { path: "product/:id", element: <UserProductDetails /> },
      { path: "faq", element: <Userfaq /> },
      { path: "about", element: <About /> },
    ],
  },

  // 3. Admin Panel Routes (Protected)
  {
    path: "/admin",
    element: (
      <AdminRoute>
        <AdminLayout />
      </AdminRoute>
    ),
    children: [
      { index: true, element: <Navigate to="home" replace /> },
      { path: "home", element: <AdminHome /> },
      // { path: "add", element: <AdminAddProduct /> },
      { path: "inventory", element: <div className="p-10 font-bold">Inventory Coming Soon...</div> },
      { path: "settings", element: <div className="p-10 font-bold">Settings Coming Soon...</div> },
    ],
  },

  // 4. Helper Redirects
  {
    path: "/home",
    element: <Navigate to="/user" replace />,
  }
]);

export default router;