import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80"
          alt="Velas artesanales"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-playfair mb-6 text-[#FFFF00] shadow-red-700">
            Velas artesanales para iluminar tus momentos
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Descubre nuestra colección de velas hechas a mano con ingredientes
            naturales
          </p>
          <button
            className="bg-white text-neutral-900 px-8 py-3 rounded-full text-lg font-medium 
            hover:bg-gray-500 transition-colors duration-300 animate-pulse"
          >
            <Link to="/products" className="block p-2">
            Explorar Colección
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
/*
Desarrollado por Jimenez Delgado Leonardo Sebastian
https://github.com/JIDE-73
*/
export default Hero;
