import React, { createContext, useState, useEffect } from "react";
import { auth } from './firebase/firebase';
import { onAuthStateChanged } from "firebase/auth";

// Create an AuthContext
const AuthContext = createContext();

export function AuthProvider({ children, store }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setUserLoggedIn(true);
      } else {
        setUser(null);
        setUserLoggedIn(false);
      }
      setLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, userLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

// Define a hook to access the auth state
export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}