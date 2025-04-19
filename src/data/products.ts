import { Product } from "../types";

const products: Product[] = [
  {
    id: 1,
    name: "Camiseta JavaScript",
    description: "100% algodão, ideal para devs JS.",
    price: 59.9,
    image: "/js-shirt.jpg",
  },
  {
    id: 2,
    name: "Caneca React",
    description: "Cafézinho enquanto faz programa.",
    price: 39.9,
    image: "/react-mug.jpg",
  },
  {
    id: 3,
    name: "Mouse Gamer RGB",
    description: "Alta precisão e design moderno.",
    price: 119.9,
    image: "/mouse-rgb.jpg",
  },
  {
    id: 4,
    name: "Teclado Mecânico",
    description: "Switch azul, ideal para digitação rápida.",
    price: 249.9,
    image: "/keyboard.jpg",
  },
  {
    id: 5,
    name: "Headset com Microfone",
    description: "Áudio nítido para reuniões e games.",
    price: 199.9,
    image: "/headset.jpg",
  },
  {
    id: 6,
    name: "Cadeira Gamer",
    description: "Ergonômica, com ajuste lombar.",
    price: 899.9,
    image: "/gamer-chair.jpg",
  },
  {
    id: 7,
    name: "Notebook i7 16GB",
    description: "Desempenho para estudos e trabalho.",
    price: 4599.9,
    image: "/notebook.jpg",
  },
  {
    id: 8,
    name: "Placa de Vídeo RX 6600",
    description: "Performance excelente para jogos em 1080p.",
    price: 1699.9,
    image: "/gpu.jpg",
  },
  {
    id: 9,
    name: "HD Externo 1TB",
    description: "Backup seguro para seus arquivos.",
    price: 349.9,
    image: "/hdd.jpg",
  },
  {
    id: 10,
    name: "Monitor 24\" Full HD",
    description: "Alta definição com bordas finas.",
    price: 799.9,
    image: "/monitor.jpg",
  },
];

export default products;
