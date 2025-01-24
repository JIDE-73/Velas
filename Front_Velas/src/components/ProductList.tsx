import ProductCard from "./ProductCard";
import { Product } from "../types/productList";
import products from "../types/productList";

interface ProductListProps {
  selectedCategory: string | null;
}

const ProductList = ({ selectedCategory }: ProductListProps) => {
  const handleAddToCart = (product: Product) => {
    console.log("Añadido al carrito:", product);
  };

  // Filtrar productos si hay una categoría seleccionada, de lo contrario mostrar todos
  const filteredProducts =
    selectedCategory !== null
      ? products.filter((product) => product.category === selectedCategory)
      : products;

  return (
    <div className="p-5">
      {selectedCategory ? (
        <>
          <h2 className="text-3xl font-bold text-[#FFFF00] mb-4 text-center">
            {selectedCategory}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold text-[#FFFF00] mb-4">Aromáticas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products
              .filter((product) => product.category === "Aromática")
              .map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
          </div>

          <h2 className="text-2xl font-bold text-[#FFFF00] mt-8 mb-4">
            Esculturas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products
              .filter((product) => product.category === "Escultura")
              .map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
          </div>

          <h2 className="text-2xl font-bold text-[#FFFF00] mt-8 mb-4">
            Temporada
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products
              .filter((product) => product.category === "Temporada")
              .map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductList;
