import { createBrowserRouter, Navigate } from "react-router";
import RootLayout from "../root/RootLayout";
import MainPage from "../pages/MainPage";
import Error from "../pages/Error";
import About from "../pages/About";
import ScrollToTop from "../components/ScrollToTop";
// User Components
import Userlayouts from "../pages/USER/Userlayouts"; 
import Home from "../pages/USER/Home";
import Products from "../pages/USER/Product"; 
import Userfaq from "../pages/USER/userfaq"; 
import UserProductDetails from "../pages/USER/UserProductDetails"; // ১. ইমপোর্ট করুন

const router = createBrowserRouter([
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
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },

  // User Routes
  {
    path: "/user", 
    element: (
      <>
        <Userlayouts />
        <ScrollToTop />
      </>
    ),
    children: [
      {
        index: true, 
        element: <Home />,
      },
      {
        path: "products", 
        element: <Products />, 
      },
      // ২. এখানে ডাইনামিক রাউটটি যোগ করুন
      {
        path: "product/:id", // এটি হবে /user/product/1
        element: <UserProductDetails />, 
      },
      {
        path: "about", 
        element: <About />,
      },
      {
        path: "faq", 
        element: <Userfaq />, 
      },
    ],
  },

  {
    path: "/home",
    element: <Navigate to="/user" replace />,
  }
]);

export default router;