import { Instagram, Facebook, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="bottom" className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-playfair text-xl mb-4">Brotes de luz</h3>
            <p className="text-neutral-400">
              Iluminando momentos especiales con velas artesanales únicas.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Contacto</h4>
            <div className="space-y-2 text-neutral-400">
              <p className="flex items-center gap-2">
                <Mail size={16} />
                info@luminara.com
              </p>
              <p className="flex items-center gap-2">
                <a
                  href="https://api.whatsapp.com/send?phone=526642221525"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  <FaWhatsapp size={18} />
                </a>
                +34 600 000 000
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/brotesdluz/"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100092718185890"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400">
          <p>&copy; 2024 Brotes de Luz. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

/*
Desarrollado por Jimenez Delgado Leonardo Sebastian
https://github.com/JIDE-73
*/

export default Footer;
