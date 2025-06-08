import { useAtom } from "jotai";
import { authAtom, userAtom } from "../store/authAtom";

export const useAuth = () => {
  const [auth, setAuth] = useAtom(authAtom);
  const [user, setUser] = useAtom(userAtom);

  const login = (userData) => {
    setAuth({ id: userData.id, role: userData.role, token: userData.token });
  };

  const logout = () => {
    setUser(null);
    setAuth(null);
  };

  return {
    auth,
    user,
    login,
    logout,
  };
}