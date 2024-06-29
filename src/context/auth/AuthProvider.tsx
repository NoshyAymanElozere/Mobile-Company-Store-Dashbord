/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
} from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";

type AuthProvider_TP = {
  children: ReactNode;
};
type AuthContext_TP = {
  user: any;
  login: (data: any) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContext_TP>(
  null as unknown as AuthContext_TP
);

export const AuthProvider = ({ children }: AuthProvider_TP) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  const login = useCallback(
    async (data: any) => {
      if (setUser) setUser(data);
    },
    [setUser]
  );

  const logout = useCallback(async () => {
    if (setUser) setUser(null);
    navigate("/login", { replace: true });
  }, [setUser, navigate]);

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [login, logout, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export const useAuth = () => {
  return useContext(AuthContext);
};
