import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoginPage from "./Auth/Login/page.jsx";
import SignupPage from "./Auth/Signup/page.jsx";
import DashboardPage from "./Dashboard/page.jsx";
import LandingPage from "./Landing/page.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 5 * 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/signup" element={<SignupPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
