import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import { Loader } from "../components/Loader";

export const TutorProtectedRoute = () => {
  const { userData, isAuthenticated, loading, isTutor } = useAuth();
  if (loading) return <h1>Cargando</h1>;
  if (!loading && !isAuthenticated) return <Navigate to={"/login"} replace />;
  return <Outlet />;
};
