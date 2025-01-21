import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Menu";
import Footer from "./components/Footer";

function AppRoutes() {
  return (
    <Router basename="/Velas/">
      {" "}
      {/* Configura la base para GitHub Pages */}
      <Navbar /> {/* Menú fijo en la parte superior */}
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h2>Página no encontrada</h2>} />
        </Routes>
      </div>
      <Footer /> {/* Footer fijo en la parte inferior */}
    </Router>
  );
}

export default AppRoutes;
