import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Iconos de menú hamburguesa y cierre

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToFooter = () => {
    const footer = document.getElementById("bottom");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToBanner = () => {
    const banner = document.getElementById("banner");
    if (banner) {
      banner.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProducts = () => {
    const products = document.getElementById("products");
    if (products) {
      products.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const about = document.getElementById("about");
    if (about) {
      about.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 bg-gray-800 hover:scale-105 text-white p-2 rounded-md shadow-md focus:outline-none"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <div className="fixed top-14 left-4 bg-gray-400 bg-opacity-75 text-gray-800 w-48 rounded-lg shadow-lg z-50 mt-1">
          <ul className="flex flex-col space-y-4 p-4">
            <li className="hover:bg-gray-500 hover:text-black rounded-md transition duration-300">
              <Link to="/" onClick={scrollToBanner} className="block p-2">
                Inicio
              </Link>
            </li>
            <li className="hover:bg-gray-500 hover:text-black rounded-md transition duration-300">
              <Link
                to="/products"
                onClick={scrollToProducts}
                className="block p-2"
              >
                Productos
              </Link>
            </li>
            <li className="hover:bg-gray-500 hover:text-black rounded-md transition duration-300">
              <Link to="/about" onClick={scrollToAbout} className="block p-2">
                Sobre Nosotros
              </Link>
            </li>
            <li className="hover:bg-gray-500 hover:text-black rounded-md transition duration-300">
              <Link to="#" onClick={scrollToFooter} className="block p-2">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
