import { Navigate } from "react-router-dom";
import useAuth from "../../Auth/hooks/useAuth.js";
import LoadingPage from "./LoadingPage.jsx";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <LoadingPage />;

  return isAuthenticated ? children : <Navigate to="/auth/login" />;
};

export default PrivateRoute;
