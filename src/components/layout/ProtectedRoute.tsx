import { Navigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import type { ReactNode } from "react";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = Cookies.get(import.meta.env.VITE_TOKEN_NAME);
  const location = useLocation();

  if (!token) {
    return <Navigate to={`/login?redirect=${location.pathname}`} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
