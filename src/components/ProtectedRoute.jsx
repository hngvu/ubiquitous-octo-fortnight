import { useAtom } from "jotai";
import { Navigate } from "react-router";
import { authAtom } from "../store/authAtom";
import NoPermissionPage from "../pages/NoPermissionPage";

export default function ProtectedRoute({ allowedRoles = [], children }) {
  const [auth] = useAtom(authAtom);

  if (!auth) {
    return <Navigate to="/login" replace />;
  }


  if (!allowedRoles.includes(auth.role)) {
    return <NoPermissionPage />;
  }

  return children;
}
