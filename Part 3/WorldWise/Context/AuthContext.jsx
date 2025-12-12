import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const stored = localStorage.getItem("isAuthenticated");
    return stored === "true";
  });
  const user = {
    name: "Jack",
    email: "jack@example.com",
    password: "qwerty",
    avatar: "https://i.pravatar.cc/100?u=zz",
  };

  function login({ email, password }) {
    if (email === "jack@example.com" && password === "qwerty") {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
    } else {
      setIsAuthenticated(false);
      localStorage.removeItem("isAuthenticated");
    }
  }

  function logout() {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  if (!AuthContext) {
    throw new Error("useAuth must be used within a AuthContextProvider");
  }
  return useContext(AuthContext);
}

export { AuthContextProvider, useAuth };
