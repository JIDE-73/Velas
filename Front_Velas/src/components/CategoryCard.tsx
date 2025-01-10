import React from "react";

interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const CategoryCard = ({ icon, title, description }: CategoryCardProps) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="text-amber-600 mb-4">{icon}</div>
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
