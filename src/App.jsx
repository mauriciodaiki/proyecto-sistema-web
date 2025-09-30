import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import QuienesSomos from "./pages/QuienesSomos";
import Vision from "./pages/Vision";
import Mision from "./pages/Mision";
import Politicas from "./pages/Politicas";
import Ubicacion from "./pages/Ubicacion";
import Usuarios from "./pages/Usuarios";
import ChatWidget from "./components/ChatWidget";
import Faq from "./pages/Faq";
import SocialBar from "./components/SocialBar";


export default function App() {
  return (
    <HashRouter>
      <header className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={`${import.meta.env.BASE_URL}img/logo.png`} alt="EcoClean" className="h-8 w-8" />
            <span className="font-semibold">EcoClean</span>
          </div>
          <nav className="flex gap-4 text-sm">
            <Link to="/">Inicio</Link>
            <Link to="/quienes-somos">Quiénes somos</Link>
            <Link to="/vision">Visión</Link>
            <Link to="/mision">Misión</Link>
            <Link to="/politicas">Políticas</Link>
            <Link to="/ubicacion">Ubicación</Link>
            <Link to="/usuarios">Usuarios</Link>
            <Link to="/faq">FAQ</Link>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/mision" element={<Mision />} />
        <Route path="/politicas" element={<Politicas />} />
        <Route path="/ubicacion" element={<Ubicacion />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>

      <footer className="border-t mt-10">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-600 flex items-center justify-between">
          <p>© 2025 EcoClean. Todos los derechos reservados.</p>
          <SocialBar />
        </div>
      </footer>

      <ChatWidget />
    </HashRouter>
  );
}
