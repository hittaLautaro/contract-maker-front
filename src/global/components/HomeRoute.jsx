import useAuth from "../../Auth/hooks/useAuth.js";
import LandingPage from "../../Landing/page.jsx";
import Dashboard from "../../Dashboard/page.jsx";
import LoadingPage from "../components/LoadingPage.jsx";

const HomeRoute = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <LoadingPage />;

  return isAuthenticated ? <Dashboard /> : <LandingPage />;
};

export default HomeRoute;
