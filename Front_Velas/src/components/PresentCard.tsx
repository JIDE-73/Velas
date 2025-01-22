import { CategoryCardProps } from "../types/product";

const CategoryCard = ({ icon, title, description }: CategoryCardProps) => {
  return (
    <div className="bg-white bg-opacity-50 p-8 hover:scale-105 hover:animate-none animate-pulse rounded-lg shadow-md hover:shadow-lg duration-300">
      <div className="text-[#FFFF00] mb-4">{icon}</div>
      <h3 className="text-xl font-playfair mb-4">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </div>
  );
};
/*
Desarrollado por Jimenez Delgado Leonardo Sebastian
https://github.com/JIDE-73
*/
export default CategoryCard;
