export interface Product {
  id: number;
  name: string;
  price: number;
  size: string;
  image: string;
  description: string;
  category: "Molde" | "Recipiente" | "Pintadas a mano" | "Ramos" | "Temporada";
}

const products: Product[] = [
  {
    id: 1,
    name: "Molde de Lavanda",
    description: "Molde para velas con diseño de lavanda.",
    price: 15.99,
    size: "Mediana",
    image:
      "https://laraza.com/wp-content/uploads/sites/5/2019/02/shutterstock_530271886.jpg",
    category: "Molde",
  },
  {
    id: 2,
    name: "Molde de Rosas",
    description: "Molde para velas con diseño de rosas.",
    price: 18.99,
    size: "Grande",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.etsystatic.com%2F16452522%2Fr%2Fil%2Fe769ba%2F3186528677%2Fil_1140xN.3186528677_nd3k.jpg&f=1&nofb=1&ipt=78b5ebcdbc452c1ca9e2a1c1c1722d58503e1236e44c506b22306c297cb16bf5&ipo=images",
    category: "Molde",
  },
  {
    id: 3,
    name: "Molde de Vainilla",
    description: "Molde para velas con esencia de vainilla.",
    price: 20.99,
    size: "Pequeña",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcasa.abril.com.br%2Fwp-content%2Fuploads%2F2016%2F11%2Fwillow-bones.jpeg&f=1&nofb=1&ipt=18d8edf7148942be5fab9d73d2855e83c76a6b4d501b4c835981423ee8b0d20d&ipo=images",
    category: "Molde",
  },
  {
    id: 4,
    name: "Recipiente Ángel",
    description: "Recipiente decorativo con forma de ángel.",
    price: 25.5,
    size: "Grande",
    image:
      "https://i.etsystatic.com/29742695/r/il/744cd9/3213569285/il_fullxfull.3213569285_mha0.jpg",
    category: "Recipiente",
  },
  {
    id: 5,
    name: "Recipiente Buda",
    description: "Recipiente decorativo con forma de Buda.",
    price: 30.0,
    size: "Mediana",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.etsystatic.com%2F27986929%2Fr%2Fil%2Fa0a985%2F3103271827%2Fil_fullxfull.3103271827_o06n.jpg&f=1&nofb=1&ipt=c40f60465e03c0ee8724bad4344bda1669ade78dcbb92d1d59b5c828b5bb15e3&ipo=images",
    category: "Recipiente",
  },
  {
    id: 6,
    name: "Recipiente Flor",
    description: "Recipiente decorativo con diseño floral.",
    price: 22.5,
    size: "Pequeña",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F65%2F19%2Ffa%2F6519fa03c77d18d48efcb9fad53488ff.jpg&f=1&nofb=1&ipt=fac958a8e65c0fdde1257140ddea79b061dd287eac9632e92761e60b2868d801&ipo=images",
    category: "Recipiente",
  },
  {
    id: 7,
    name: "Vela Pintada a mano de Canela",
    description: "Vela con pintura artesanal de canela.",
    price: 25.5,
    size: "Grande",
    image:
      "https://media.revistagq.com/photos/63a2d44a43d6a51b81e84b2b/16:9/w_2560,c_limit/GettyImages-1409853884.jpg",
    category: "Pintadas a mano",
  },
  {
    id: 8,
    name: "Vela Pintada a mano de Navidad",
    description: "Vela decorada con temática navideña.",
    price: 27.99,
    size: "Grande",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.eluniversal.com.mx%2Fsites%2Fdefault%2Ffiles%2F2022%2F11%2F01%2Frenuevan_la_tradicion_de_crear_velas_para_dia_de_muertos.jpg&f=1&nofb=1&ipt=a1a9ae77bc17fb6e9ff13873d984727ff60f9ddf06663816e811a0a54700fa46&ipo=images",
    category: "Pintadas a mano",
  },
  {
    id: 9,
    name: "Vela Pintada a mano de Halloween",
    description: "Vela decorada con temática de Halloween.",
    price: 23.99,
    size: "Mediana",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Foffloadmedia.feverup.com%2Fcdmxsecreta.com%2Fwp-content%2Fuploads%2F2022%2F12%2F21024847%2Fvelas-navidenas-en-CDMX-1024x683.jpg&f=1&nofb=1&ipt=5c5597cbc9d6560fc465783b726ca66db5e59e63c7838c35d0c4bb33bba3b6b0&ipo=images",
    category: "Pintadas a mano",
  },
  {
    id: 10,
    name: "Ramo Floral otoñal",
    description: "Ramo Floral otoñal ideal para San Valentin.",
    price: 29.99,
    size: "Grande",
    image: "https://example.com/vela-navidad.jpg",
    category: "Ramos",
  },
  {
    id: 11,
    name: "Ramo Floral de Primavera",
    description: "Hermoso ramo con flores de temporada primaveral.",
    price: 45.99,
    size: "Grande",
    image: "https://example.com/ramo-primavera.jpg",
    category: "Ramos",
  },
  {
    id: 12,
    name: "Ramo Floral",
    description: "Ramo Floral ideal para un regalo.",
    price: 29.99,
    size: "Grande",
    image: "https://example.com/vela-navidad.jpg",
    category: "Ramos",
  },
  {
    id: 13,
    name: "Vela navideña",
    description: "Hermosa vela navideña para acompañar las decoraciones.",
    price: 45.99,
    size: "Grande",
    image: "https://example.com/ramo-primavera.jpg",
    category: "Temporada",
  },
  {
    id: 14,
    name: "Vela para las Madres",
    description: "Hermoso ramo con flores de temporada primaveral.",
    price: 45.99,
    size: "Grande",
    image: "https://example.com/ramo-primavera.jpg",
    category: "Temporada",
  },
  {
    id: 15,
    name: "Vela para las/os Maestras/os",
    description: "Hermoso ramo con flores de temporada primaveral.",
    price: 45.99,
    size: "Grande",
    image: "https://example.com/ramo-primavera.jpg",
    category: "Temporada",
  },
];

export default products;
