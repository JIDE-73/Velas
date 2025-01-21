export interface Product {
  id: number;
  name: string;
  price: number;
  size: string;
  image: string;
  description: string;
  category: "Aromática" | "Escultura" | "Temporada";
}
