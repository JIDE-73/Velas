import { Instagram, Facebook, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12">
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
                <Phone size={16} />
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
                href="#"
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
