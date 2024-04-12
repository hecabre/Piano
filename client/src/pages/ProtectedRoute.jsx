import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import { Loader } from "../components/Loader";

export const ProtectedRoute = () => {
  const { userData, isAuthenticated, loading } = useAuth();
  if (loading) return <Loader />;
  if (!loading && !isAuthenticated) return <Navigate to={"/login"} replace />;
  return <Outlet />;
};
