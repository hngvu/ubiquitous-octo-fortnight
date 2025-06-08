import { Routes, Route, useLocation } from "react-router";
import EditOrchid from "./components/EditOrchid";
import ListOfEmployees from "./components/ListOfEmployees";
import "./index.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import MainLayout from "./layouts/MainLayout";
import AboutPage from "./pages/AboutPage";
import ProductListLayout from "./layouts/ProductListLayout";
import { useProgress } from "@bprogress/react";
import { useEffect } from "react";
import ListOfOrchids from "./components/ListOfOrchids";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import HomePage from "./pages/HomePage";
import AdminLayout from "./layouts/AdminLayout";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const location = useLocation();
  const { start, stop, setOptions } = useProgress();
  setOptions({ showSpinner: false });

  useEffect(() => {
    start();

    const timer = setTimeout(() => stop(), 300);

    return () => clearTimeout(timer);
  }, [location.pathname, start, stop]);

  return (
    <>
      <Routes>
        <Route key={location.pathname} path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route
            key={location.pathname}
            path="/about"
            element={<AboutPage />}
          />
          <Route
            key={location.pathname}
            path="/login"
            element={<LoginPage />}
          />
          <Route
            key={location.pathname}
            path="/register"
            element={<RegisterPage />}
          />

          <Route
            key={location.pathname}
            path="/orchids"
            element={<ProductListLayout />}
          />
          <Route
            key={location.pathname}
            path="/orchids/:id"
            element={<ProductDetail />}
          />

          <Route path="/cart" element={<Cart />} />
        </Route>

        <Route
          path="/admin/*"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index path="products" element={<ListOfOrchids />} />
          <Route path="products/:id" element={<EditOrchid />} />
          <Route path="employees" element={<ListOfEmployees />} />
        </Route>
        
        <Route key={location.pathname} path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
