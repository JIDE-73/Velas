import ProductCard from "./ProductCard";
import { Product } from "../types/productList";
import products from "../types/productList";

const ProductList = () => {
  const handleAddToCart = (product: Product) => {
    console.log("Añadido al carrito:", product);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
      ))}
    </div>
  );
};

export default ProductList;
