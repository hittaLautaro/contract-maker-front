import LandingPage from "../../Landing/page.jsx";
import Dashboard from "../../Dashboard/page.jsx";
import LoadingPage from "../components/LoadingPage.jsx";
import { useAuth } from "../../context/AuthContext.jsx";

const HomeRoute = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <LoadingPage />;

  console.log(isAuthenticated);

  return isAuthenticated ? <Dashboard /> : <LandingPage />;
};

export default HomeRoute;
