import { Flame, Leaf, Sparkles } from "lucide-react";
import Hero from "../components/Banner";
import CategoryCard from "../components/PresentCard";

export default function Home() {
  return (
    <div className="text-shadow-md">
      <Hero />

      {/* Introduction Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-playfair mb-6 text-[#FFFF00]">
              Iluminando momentos especiales
            </h2>
            <p className="text-gray-200 leading-relaxed">
              En Brotes de luz, creamos velas únicas con ingredientes naturales,
              sostenibles y diseños hechos a mano. Cada pieza es una obra de
              arte que combina belleza y fragancia para crear ambientes
              inolvidables.
            </p>
          </div>
          <div className="hover:scale-105 md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&q=80"
              alt="Artesana trabajando en velas"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-400 bg-opacity-75 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-[#FFFF00] md:text-4xl font-playfair text-center mb-12">
            Nuestros valores
          </h2>
          <div className="grid md:grid-cols-3 gap-8 ">
            <CategoryCard
              icon={<Leaf className="w-8 h-8" />}
              title="Sostenibilidad"
              description="Materiales 100% ecológicos seleccionados cuidadosamente para respetar nuestro planeta."
            />
            <CategoryCard
              icon={<Sparkles className="w-8 h-8" />}
              title="Artesanal"
              description="Cada vela es única, creada a mano con atención al detalle y pasión por nuestro oficio."
            />
            <CategoryCard
              icon={<Flame className="w-8 h-8" />}
              title="Fragancias Naturales"
              description="Aceites esenciales y fragancias exclusivas que evocan sensaciones únicas."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
