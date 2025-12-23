import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div className="h-screen flex justify-center items-center font-bold">Verifying Admin...</div>;
  }

  if (user && user.role === "admin") {
    return children;
  }

  return <Navigate to="/admin-login" state={{ from: location }} replace />;
};

export default AdminRoute;