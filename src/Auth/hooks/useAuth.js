import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const login = useCallback(
    async (credentials) => {
      const response = await fetch(
        "http://localhost:8080/api/auth/authenticate",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
          credentials: "include",
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }

      const data = await response.json();
      localStorage.setItem("accessToken", data.accessToken);
      setUser(data.user);
      navigate("/");
      return data;
    },
    [navigate]
  );

  const logout = useCallback(() => {
    localStorage.removeItem("accessToken");
    setUser(null);
    navigate("/");
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      setLoading(false);
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        if (res.ok) {
          const data = await res.json();
          setUser(data);
        } else {
          localStorage.removeItem("accessToken");
          setUser(null);
        }
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, login, logout, isAuthenticated: !!user, loading };
};

export default useAuth;
