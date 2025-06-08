import { Outlet } from "react-router";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ScrollToTop from "../components/ScrollToTop";

const MainLayout = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-[#18230F] backdrop-blur shadow-md">
        <NavBar />
      </div>
      <ScrollToTop />
      <main className="pt-16 px-10 min-h-screen relative">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
