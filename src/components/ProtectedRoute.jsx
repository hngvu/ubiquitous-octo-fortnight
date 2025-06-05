// src/components/ProtectedRoute.jsx
import { Navigate, Outlet, useLocation } from 'react-router';
import { useAtom } from 'jotai';
import { isAuthenticatedAtom, userAtom, authLoadingAtom } from '../store/authAtom';

function ProtectedRoute({ allowedRoles: [] }) {
  const [isAuthenticated] = useAtom(isAuthenticatedAtom);
  const [user] = useAtom(userAtom);
  const [authLoading] = useAtom(authLoadingAtom);
  const location = useLocation();

  if (authLoading) {
    return <div>Loading authentication...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  if (allowedRoles && user && !allowedRoles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />; 
  }

  return <Outlet />;
}

export default ProtectedRoute;