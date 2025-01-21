import { ShoppingCart } from "lucide-react";
import { Product } from "../types/product";

interface Props {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<Props> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-primary text-text p-5 rounded-lg shadow-lg hover:scale-105 transition-all">
      <img src={product.image} alt={product.name} className="rounded-lg w-full h-48 object-cover text-[#FFFF00]" />
      <h3 className="text-title text-xl font-bold mt-3 text-[#FFFF00]">{product.name}</h3>
      <p className="text-accent mt-2 text-white">{product.description}</p>
      <p className="text-accent mt-2 text-gray-500">${product.price.toFixed(2)}</p>
      <p className="text-sm text-black">Tamaño: {product.size}</p>
      <button
        className="mt-4 flex items-center gap-2 bg-orange-400 text-primary text-gray-900 py-2 px-4 rounded-lg shadow-xl hover:bg-yellow-500 transition hover:text-black"
        onClick={() => onAddToCart(product)}
      >
        <ShoppingCart size={20} />
        Añadir al carrito
      </button>
    </div>
  );
};

export default ProductCard;
