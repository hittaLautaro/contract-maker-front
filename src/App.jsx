import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./Auth/Login/page.jsx";
import SignupPage from "./Auth/Signup/page.jsx";
import TemplatesPage from "./Templates/page.jsx";
import CvFormPage from "./CvForm/page.jsx";
import PrivateRoute from "./global/components/PrivateRoute.jsx";
import PublicRoute from "./global/components/PublicRoute.jsx";
import HomeRoute from "./global/components/HomeRoute.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import ResumesPage from "./Resumes/ResumesPage.jsx";
import EditResumePage from "./Resumes/EditResumePage.jsx";

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
        <AuthProvider>
          <Routes>
            <Route path="/" element={<HomeRoute />} />
            <Route
              path="/templates"
              element={
                <PrivateRoute>
                  <TemplatesPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/templates/:id/fill"
              element={
                <PrivateRoute>
                  <CvFormPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/resumes"
              element={
                <PrivateRoute>
                  <ResumesPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/resumes/:id/edit"
              element={
                <PrivateRoute>
                  <EditResumePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/auth/login"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="/auth/signup"
              element={
                <PublicRoute>
                  <SignupPage />
                </PublicRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
