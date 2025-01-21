import ProductList from "../components/ProductList";
import Cart from "../components/Cart";

const Products = () => {
  return (
    <div className="bg-primary min-h-screen text-text">
      <div className="pt-20 container mx-auto p-5">
        <h2 className="text-5xl font-bold text-title text-center mb-10 text-[#FFFF00] animate-bounce">
          Explora nuestras velas
        </h2>

        <ProductList />
      </div>

      <Cart />
    </div>
  );
};

export default Products;
