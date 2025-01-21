import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Iconos de menú hamburguesa y cierre

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-md shadow-md focus:outline-none"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}

        {isOpen && (
          <div className="absolute top-14 left-4 bg-gray-400 bg-opacity-75 text-gray-800 w-48 rounded-lg shadow-lg">
            <ul className="flex flex-col space-y-4 p-4">
              <li className="hover:bg-gray-500 hover:text-black rounded-md transition duration-300">
                <Link to="/" className="block p-2">
                  Inicio
                </Link>
              </li>
              <li className="hover:bg-gray-500  hover:text-black rounded-md transition duration-300">
                <Link to="/products" className="block p-2">
                  Productos
                </Link>
              </li>
              <li className="hover:bg-gray-500  hover:text-black rounded-md transition duration-300">
                <Link to="/about" className="block p-2">
                  Sobre Nosotros
                </Link>
              </li>
              <li className="hover:bg-gray-500  hover:text-black rounded-md transition duration-300">
                <Link to="/contact" className="block p-2">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        )}
      </button>
    </div>
  );
}

export default Navbar;
