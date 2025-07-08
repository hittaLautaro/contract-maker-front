import { Navigate } from "react-router-dom";
import useAuth from "../../Auth/hooks/useAuth.js";
import LoadingPage from "./LoadingPage.jsx";

const PublicRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <LoadingPage />;

  return isAuthenticated ? <Navigate to="/" /> : children;
};

export default PublicRoute;
