import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Product } from "../types/product";

const Cart = () => {
  const [cart, setCart] = useState<Product[]>([]);

  return (
     <div className="fixed top-5 right-5 bg-gray-400 bg-opacity-35 hover:scale-125 text-primary p-4 rounded-full shadow-lg">
      <ShoppingCart size={30} />
      <span className="text-xl font-bold ml-2">{cart.length}</span>
    </div>
  );
};

export default Cart;
