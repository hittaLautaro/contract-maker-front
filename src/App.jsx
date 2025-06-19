import LoginPage from "./Auth/Login/page.jsx";
import SignupPage from "./Auth/Signup/page.jsx";
import LandingPage from "./Landing/page.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
