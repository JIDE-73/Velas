export interface Product {
  id: number;
  name: string;
  price: number;
  size: string;
  image: string;
  description: string;
  category: "Aromática" | "Escultura" | "Temporada";
}

const products: Product[] = [
  {
    id: 1,
    name: "Vela de Lavanda",
    description: "Vela aromática de lavanda con aceites esenciales.",
    price: 15.99,
    size: "Mediana",
    image:
      "https://laraza.com/wp-content/uploads/sites/5/2019/02/shutterstock_530271886.jpg",
    category: "Aromática",
  },
  {
    id: 4,
    name: "Vela de Rosas",
    description: "Vela aromática de rosas frescas.",
    price: 18.99,
    size: "Grande",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.etsystatic.com%2F16452522%2Fr%2Fil%2Fe769ba%2F3186528677%2Fil_1140xN.3186528677_nd3k.jpg&f=1&nofb=1&ipt=78b5ebcdbc452c1ca9e2a1c1c1722d58503e1236e44c506b22306c297cb16bf5&ipo=images",
    category: "Aromática",
  },
  {
    id: 5,
    name: "Vela de Vainilla",
    description: "Vela aromática con esencia de vainilla.",
    price: 20.99,
    size: "Pequeña",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcasa.abril.com.br%2Fwp-content%2Fuploads%2F2016%2F11%2Fwillow-bones.jpeg&f=1&nofb=1&ipt=18d8edf7148942be5fab9d73d2855e83c76a6b4d501b4c835981423ee8b0d20d&ipo=images",
    category: "Aromática",
  },
  {
    id: 2,
    name: "Vela Escultura Ángel",
    description: "Vela escultura de ángel con aroma a vainilla.",
    price: 25.5,
    size: "Grande",
    image:
      "https://i.etsystatic.com/29742695/r/il/744cd9/3213569285/il_fullxfull.3213569285_mha0.jpg",
    category: "Escultura",
  },
  {
    id: 6,
    name: "Vela Escultura Buda",
    description: "Vela con forma de Buda, aroma a sándalo.",
    price: 30.0,
    size: "Mediana",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.etsystatic.com%2F27986929%2Fr%2Fil%2Fa0a985%2F3103271827%2Fil_fullxfull.3103271827_o06n.jpg&f=1&nofb=1&ipt=c40f60465e03c0ee8724bad4344bda1669ade78dcbb92d1d59b5c828b5bb15e3&ipo=images",
    category: "Escultura",
  },
  {
    id: 7,
    name: "Vela Escultura Flor",
    description: "Vela con diseño floral, aroma a jazmín.",
    price: 22.5,
    size: "Pequeña",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F65%2F19%2Ffa%2F6519fa03c77d18d48efcb9fad53488ff.jpg&f=1&nofb=1&ipt=fac958a8e65c0fdde1257140ddea79b061dd287eac9632e92761e60b2868d801&ipo=images",
    category: "Escultura",
  },
  {
    id: 3,
    name: "Vela de Canela",
    description: "Vela aromática de canela con aceites esenciales.",
    price: 25.5,
    size: "Grande",
    image:
      "https://media.revistagq.com/photos/63a2d44a43d6a51b81e84b2b/16:9/w_2560,c_limit/GettyImages-1409853884.jpg",
    category: "Temporada",
  },
  {
    id: 8,
    name: "Vela de Navidad",
    description: "Vela con aroma a pino navideño.",
    price: 27.99,
    size: "Grande",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.eluniversal.com.mx%2Fsites%2Fdefault%2Ffiles%2F2022%2F11%2F01%2Frenuevan_la_tradicion_de_crear_velas_para_dia_de_muertos.jpg&f=1&nofb=1&ipt=a1a9ae77bc17fb6e9ff13873d984727ff60f9ddf06663816e811a0a54700fa46&ipo=images",
    category: "Temporada",
  },
  {
    id: 9,
    name: "Vela de Halloween",
    description: "Vela con aroma a calabaza especiada.",
    price: 23.99,
    size: "Mediana",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Foffloadmedia.feverup.com%2Fcdmxsecreta.com%2Fwp-content%2Fuploads%2F2022%2F12%2F21024847%2Fvelas-navidenas-en-CDMX-1024x683.jpg&f=1&nofb=1&ipt=5c5597cbc9d6560fc465783b726ca66db5e59e63c7838c35d0c4bb33bba3b6b0&ipo=images",
    category: "Temporada",
  },
];

export default products;
