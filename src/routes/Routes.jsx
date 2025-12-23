import { createBrowserRouter, Navigate } from "react-router";
import RootLayout from "../root/RootLayout";
import ScrollToTop from "../components/ScrollToTop";
import Error from "../pages/Error";
import MainPage from "../pages/MainPage";
import About from "../pages/About";
import LoginRegister from "../pages/Auth/LoginRegister";

// User Components
import Userlayouts from "../../src/pages/USER/Userlayouts";
import Home from "../pages/USER/Home";
import Products from "../pages/USER/Product";
import Userfaq from "../pages/USER/userfaq";
import UserProductDetails from "../pages/USER/UserProductDetails";
import MyDashBoard from "../pages/USER/MyDashBoard";
import MyCart from "../pages/USER/MyCart";
import PaymentSuccess from "../pages/USER/PaymentSuccess";

// Admin Components
import AdminRoute from "./AdminRoute"; 
import AdminLayout from "../ADMIN/AdminLayout";
import AdminHome from "../ADMIN/AdminHome";
import AllOrders from "../ADMIN/AllOrders";
import AllUsers from "../ADMIN/AllUsers";
import AddProduct from "../ADMIN/AddProduct";
import Inventory from "../ADMIN/Inventory";
import { Settings } from "lucide-react";



const router = createBrowserRouter([
  // ১. পাবলিক রুট
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
      { path: "login", element: <LoginRegister /> },
    ],
  },

  // ২. ইউজার রুট
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
      { path: "payment/success", element: <PaymentSuccess /> },
      {
        path: "payment/cancel",
        element: (
          <div className="text-center py-20 font-bold text-red-500">
            Payment Cancelled!
          </div>
        ),
      },
      { path: "faq", element: <Userfaq /> },
      { path: "about", element: <About /> },
    ],
  },

  // ৩. অ্যাডমিন রুট (সবগুলো কম্পোনেন্ট এখানে অ্যাড করা হয়েছে)
  {
    path: "/admin",
    element: (
      <AdminRoute>
        <AdminLayout />
        <ScrollToTop />
      </AdminRoute>
    ),
    children: [
      { index: true, element: <Navigate to="/admin/home" replace /> },
      { path: "home", element: <AdminHome /> },
      { path: "orders", element: <AllOrders /> },
      { path: "users", element: <AllUsers /> },
      { path: "add", element: <AddProduct /> },
      { path: "inventory", element: <Inventory /> },
      { path: "settings", element: <Settings /> },
    ],
  },

  // ৪. অ্যাডমিন লগইন
  {
    path: "/admin-login",
    element: <LoginRegister />,
  },
]);

export default router;