type Artwork = {
  id: number;
  title: string;
  description: string;
  date: string;
  artist: string;
  image: string;
};

const artworks: Artwork[] = [
  {
    id: 1,
    title: "La Escultura del Tiempo",
    description:
      "Una obra que representa la fugacidad de la vida en forma de escultura abstracta.",
    date: "2023",
    artist: "Canales Sandy",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.significados.com.br%2Ffoto%2Ftipos-de-arte-og.jpg&f=1&nofb=1&ipt=cc1960a8b9f8a245b7e8a84bf911d3eb2a0e43a657638f6313c961b85bdbf49e&ipo=images",
  },
  {
    id: 2,
    title: "El Rostro del Alma",
    description:
      "Retrato expresivo que captura la esencia interna de una persona.",
    date: "2022",
    artist: "Canales Sandy",
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Facrisg.weebly.com%2Fuploads%2F2%2F9%2F8%2F5%2F29856849%2F8567280.jpg%3F736&f=1&nofb=1&ipt=ef7f2fb2463b6dc4d58de818cd60719a87fb393ab58c3c1dc37e231744f354a2&ipo=images",
  },
  {
    id: 3,
    title: "Naturaleza Viva",
    description:
      "Una instalación artística con elementos naturales que reflejan la conexión con el entorno.",
    date: "2021",
    artist: "Canales Sandy",
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-NdBNsHvLeyw%2FWJpr_Q4DpeI%2FAAAAAAAA_ck%2FfIuRzdB0FZgGkMJdo5NkFxVm5w4n6vLMQCK4B%2Fs1600%2FFoto0818.jpg&f=1&nofb=1&ipt=38edf113511d4d380e6450228e9962300868887473d081e6f218d51c08ffc969&ipo=images",
  },
];

const artistInfo = {
  name: "Canales Sandy",
  academicBackground:
    "Licenciada en Bellas Artes por la Universidad de Arte Contemporáneo.",
  description:
    "Canales Sandy es una artista multidisciplinaria conocida por su trabajo en escultura, pintura y arte conceptual. Su obra explora temas sobre la naturaleza humana, el paso del tiempo y la conexión con el entorno natural.",
  photo:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.diphuelva.es%2Fexport%2Fsites%2Fdph%2Fcultura%2F.galleries%2Fimagenes%2Fartes-plasticas-1.jpg&f=1&nofb=1&ipt=09a133ccc7689e610a4fa564adbc8f7c31dd8bfbec46d0e40c5cf5f139c0a095&ipo=images",
};

const About = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="text-center mb-16 text-[#FFFF00]">
        <h1 className="text-4xl font-bold">Sobre el Artista</h1>
        <div className="mt-8">
          <img
            src={artistInfo.photo}
            alt={artistInfo.name}
            className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-semibold">{artistInfo.name}</h2>
          <p className="text-lg mt-4 text-white">
            {artistInfo.academicBackground}
          </p>
          <p className="text-lg text-white mt-4">{artistInfo.description}</p>
        </div>
      </div>

      {/* Obras del Artista */}
      <h2 className="text-3xl font-bold text-center mb-8 text-[#FFFF00]">
        Obras Destacadas
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-[#FFFF00]">
        {artworks.map((art) => (
          <div
            key={art.id}
            className="border border-gray-300 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={art.image}
              alt={art.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-2">{art.title}</h3>
              <p className="text-gray-400 mb-4">{art.description}</p>
              <p className="text-gray-600 text-sm">Creado en: {art.date}</p>
              <p className="text-gray-500 text-sm">Artista: {art.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
