import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoginPage from "./Auth/Login/page.jsx";
import SignupPage from "./Auth/Signup/page.jsx";
import LandingPage from "./Landing/page.jsx";
import TemplatesPage from "./Templates/page.jsx";
import CvFormPage from "./CvForm/page.jsx";
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
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="/templates/:id/fill" element={<CvFormPage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/signup" element={<SignupPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
