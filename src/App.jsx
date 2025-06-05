import { Routes, Route } from "react-router";
import ListOfOrchids from "./components/ListOfOrchids";
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

function App() {
  return (
    <>
      <NavBar />
      <main className="pt-16 min-h-screen relative">
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/detail/:id" element={<DetailOrchid />} />


            <Route path="/orchids" element={<ListOfOrchids />} />
            <Route path="/employees" element={<ListOfEmployees />} />
            <Route path="/edit/:id" element={<EditOrchid />} />


          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
