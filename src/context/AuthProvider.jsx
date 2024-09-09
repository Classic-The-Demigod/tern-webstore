import { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) =>
    supabase.auth.signInWithPassword({ email, password });

  const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [auth, setAuth] = useState(false);

    useEffect(() => {
      const { data } = supabase.auth.onAuthStateChange((event, session) => {
        if (event === "SIGNED_IN") {
          setUser(session.user);
          setAuth(true);
        }
      });
      return () => {
        data.subscription.unsubscribe();
      };
    }, []);

    return (
      <AuthContext.Provider value={{ user, login }}>{children}</AuthContext.Provider>
    );
  };
}

export default AuthProvider;
