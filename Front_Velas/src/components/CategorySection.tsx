import { useState } from "react";

interface CategorySelectorProps {
  onSelectCategory: (category: string | null) => void;
}

const CategorySelector = ({ onSelectCategory }: CategorySelectorProps) => {
  const [isVisible, setIsVisible] = useState(false); // Controla si la lista está visible
  const categories = ["Todas", "Aromática", "Escultura", "Temporada"];

  // Toggle visibility de la lista
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleVisibility}
        className="px-6 py-2 rounded-lg bg-gray-700 hover:scale-105 text-white font-bold"
      >
        Filtros
      </button>

      {/* Lista de categorías que aparece y desaparece */}
      {isVisible && (
        <ul className="absolute left-0 mt-2 bg-gray-700 text-white rounded-lg shadow-lg w-48">
          {categories.map((category) => (
            <li
              key={category}
              className="px-4 py-2 hover:bg-gray-500 hover:text-black"
            >
              <button
                className="w-full text-left"
                onClick={() => {
                  onSelectCategory(category === "Todas" ? null : category);
                  setIsVisible(false); // Ocultar la lista después de seleccionar
                }}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategorySelector;
