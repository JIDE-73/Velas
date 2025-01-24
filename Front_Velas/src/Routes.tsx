import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Navbar from "./components/Menu";
import Footer from "./components/Footer";

function AppRoutes() {
  return (
    <Router basename="/Velas/">
      <Navbar /> {/* Menú fijo en la parte superior */}
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          {/* Redirige a la página de inicio si la ruta no existe */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default AppRoutes;
