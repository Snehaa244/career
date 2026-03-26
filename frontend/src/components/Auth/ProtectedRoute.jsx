import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Context } from "../../main";

const ProtectedRoute = ({ children }) => {
  const { isAuthorized } = useContext(Context);
  const location = useLocation();

  if (!isAuthorized) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
