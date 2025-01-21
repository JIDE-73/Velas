import ProductCard from "./ProductCard";
import { Product } from "../types/product";

const products: Product[] = [
  {
    id: 1,
    name: "Vela de Lavanda",
    description: "Vela aromática de lavanda con aceites esenciales.",
    price: 15.99,
    size: "Mediana",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flaraza.com%2Fwp-content%2Fuploads%2Fsites%2F5%2F2019%2F02%2Fshutterstock_530271886.jpg%3Fquality%3D80%26strip%3Dall&f=1&nofb=1&ipt=7dabe467edf19cae196bc6a4ef00cace51cf8fae52bed04becda6bad82a85e1a&ipo=images",
    category: "Aromática",
  },
  {
    id: 2,
    name: "Vela Escultura Ángel",
    description: "Vela escultura de ángel con aroma a vainilla.",
    price: 25.50,
    size: "Grande",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.etsystatic.com%2F29742695%2Fr%2Fil%2F744cd9%2F3213569285%2Fil_fullxfull.3213569285_mha0.jpg&f=1&nofb=1&ipt=5389658735dca45e876c477557efd863197b7eacc37d26add253a30d353e443f&ipo=images",
    category: "Escultura",
  },
  {
    id: 3,
    name: "Vela de Canela",
    description: "Vela aromática de canela con aceites esenciales.",
    price: 25.50,
    size: "Grande",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.revistagq.com%2Fphotos%2F63a2d44a43d6a51b81e84b2b%2F16%3A9%2Fw_2560%252Cc_limit%2FGettyImages-1409853884.jpg&f=1&nofb=1&ipt=4b501733ab8ee555e4a34f7519b9fa5844944164bd936c1bdeb03578cfa9dde6&ipo=images",
    category: "Escultura",
  },
];

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
