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

      try {
        const userResponse = await fetch("http://localhost:8080/api/auth/me", {
          headers: {
            Authorization: `Bearer ${data.accessToken}`,
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        if (userResponse.ok) {
          const userData = await userResponse.json();
          setUser(userData);
        }
      } catch (error) {
        console.error("error fetching user:", error);
      }

      navigate("/");
      return data;
    },
    [navigate]
  );

  const logout = useCallback(() => {
    localStorage.removeItem("accessToken");
    setUser(null);
    console.log("logged out");
    navigate("/");
  }, [navigate]);

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
      } catch (error) {
        console.error("Failed to fetch user:", error);
        localStorage.removeItem("accessToken");
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    console.log("User state changed:", user);
    console.log("Is authenticated:", !!user);
  }, [user]);

  return { user, login, logout, isAuthenticated: !!user, loading };
};

export default useAuth;
