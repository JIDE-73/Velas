import { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import CategorySelector from "../components/CategorySection";
import Cart from "../components/Cart";
import Swal from "sweetalert2";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Mostrar la alerta con retraso
  useEffect(() => {
    const timer = setTimeout(() => {
      // Muestra la alerta con SweetAlert2 después del delay
      Swal.fire({
        title: "¡Tratos directos con la artista!",
        text: "¿Quieres saber mas?",
        icon: "info", // Tipo de alerta
        showCancelButton: true, // Muestra el botón de Cancelar
        confirmButtonText: "Sí, por favor", // Texto del botón de confirmación
        cancelButtonText: "No, gracias", // Texto del botón de cancelación
        reverseButtons: true, // Opcional: cambia el orden de los botones
      }).then((result) => {
        if (result.isConfirmed) {
          const footer = document.getElementById("bottom");
          if (footer) {
            footer.scrollIntoView(); // Desplaza directamente al footer
          }
        } else if (result.isDismissed) {
          Swal.fire("¡No olvides seguirnos en redes!", "Brotes de luz", "success");
        }
      });
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="products"
      className="bg-primary min-h-screen text-text text-shadow-md"
    >
      <div className="pt-20 container mx-auto p-5">
        <h2 className="text-5xl font-bold text-title text-center mb-10 text-[#FFFF00] animate-bounce">
          Explora nuestras velas
        </h2>

        <CategorySelector onSelectCategory={setSelectedCategory} />

        <ProductList selectedCategory={selectedCategory} />
      </div>

      <Cart />
    </div>
  );
};

export default Products;
