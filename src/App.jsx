import { Routes, Route, useLocation } from "react-router";
import EditOrchid from "./components/EditOrchid";
import HomeScreen from "./components/HomeScreen";
import NavBar from "./components/NavBar";
import ListOfEmployees from "./components/ListOfEmployees";
import DetailOrchid from "./components/DetailOrchid";
import "./index.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import MainLayout from "./layouts/MainLayout";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import ProductListLayout from "./layouts/ProductListLayout";
import ScrollToTop from "./components/ScrollToTop";
import { Bar, Peg, Progress, useProgress } from "@bprogress/react";
import { useEffect } from "react";
import ListOfOrchids from "./components/ListOfOrchids";


function App() {
  const location = useLocation()
  const { start, stop, setOptions } = useProgress()
  setOptions({ showSpinner: false });
  
  useEffect(() => {
    start()
    const timer = setTimeout(() => stop(), 300)

    return () => clearTimeout(timer)
  }, [location.pathname, start, stop])

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-[#18230F] backdrop-blur shadow-md">
        <NavBar />
      </div>
      <ScrollToTop />
      <main className="pt-16 px-10 min-h-screen relative">
        <Routes>
          <Route key={location.pathname} path="/" element={<MainLayout />} />
          <Route key={location.pathname} path="/login" element={<LoginPage />} />
          <Route key={location.pathname} path="/register" element={<RegisterPage />} />
          <Route key={location.pathname} path="/detail/:id" element={<DetailOrchid />} />

          <Route key={location.pathname} path="/orchids" element={<ProductListLayout />}>
            <Route index element={<HomeScreen />} />
          </Route>
          <Route key={location.pathname} path="/employees" element={<ListOfEmployees />} />
          <Route key={location.pathname} path="/edit/:id" element={<EditOrchid />} />
          <Route key={location.pathname} path="/admin/products" element={<ListOfOrchids />} />
          <Route key={location.pathname} path="/about" element={<AboutPage />} />
          <Route key={location.pathname} path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
