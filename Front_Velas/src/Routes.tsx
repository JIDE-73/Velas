import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Navbar from "./components/Menu";
import Footer from "./components/Footer";

function AppRoutes() {
  return (
    <Router basename="/Velas/">
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<h2>Página no encontrada</h2>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default AppRoutes;
