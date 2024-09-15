import { createContext, useContext, useState, useEffect } from "react";
import supabase from "../config/supabase";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const session = supabase.auth.getSession();
    setUser(session?.user ?? null);
    setAuth(!!session?.user);
    setLoading(false);

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null);
        setAuth(!!session?.user);
        setLoading(false);
      }
    );

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const login = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      setUser(data.user);
      setAuth(true);
      navigate("/");
      return { success: true };
    } catch (error) {
      console.error("Error logging in:", error.message);
      return { success: false, error: error.message };
    }
  };

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setUser(null);
      setAuth(false);
      navigate("/login");
      return { success: true };
    } catch (error) {
      console.error("Error logging out:", error.message);
      return { success: false, error: error.message };
    }
  };

  

  const getCartItems = async (userId) => {
    const { data, error } = await supabase
      .from("cart")
      .select(
        `
      *,
      products:product_id (
        id,
        title,
        image,
        price
      )
    `
      )
      .eq("user_id", userId);
    setCartItems(data);
    console.log(cartItems);

    if (error) throw error;
    return data;
  };

  useEffect(() => {
    getCartItems(user?.id);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, auth, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
