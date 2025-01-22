import artpost from "../types/artPost";
import edu from "../types/artWorks";

const artistInfo = {
  name: "Sandy Canales",
  academicBackground: "Licenciada en Bellas Artes por la Universidad 123.",
  description:
    "Soy una artista multidisciplinaria conocida por su trabajo en escultura, pintura y arte conceptual. Su obra explora temas sobre la naturaleza humana, el paso del tiempo y la conexión con el entorno natural.",
  photo:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.diphuelva.es%2Fexport%2Fsites%2Fdph%2Fcultura%2F.galleries%2Fimagenes%2Fartes-plasticas-1.jpg&f=1&nofb=1&ipt=09a133ccc7689e610a4fa564adbc8f7c31dd8bfbec46d0e40c5cf5f139c0a095&ipo=images",
};

const About = () => {
  return (
    <div className="container mx-auto p-8 text-shadow-md">
      {/* Sección de historia del proyecto */}
      <div className="text-center mb-16 text-[#FFFF00]">
        <h1 className="text-5xl font-bold mb-6 animate-bounce">
          Nuestra Historia
        </h1>
        <h3 className="text-2xl font-semibold">
          ¿Cómo surgió la idea para este proyecto?
        </h3>
        <p className="text-xl text-white mt-4">hola</p>

        <h3 className="text-2xl font-semibold">
          ¿Cuáles fueron los mayores desafíos que enfrentaste durante el
          proceso?
        </h3>
        <p className="text-xl text-white mt-4">hola</p>

        <h3 className="text-2xl font-semibold">
          ¿Qué significa este proyecto para ti?
        </h3>
        <p className="text-xl text-white mt-4">hola</p>

        <h3 className="text-2xl font-semibold">
          ¿Cómo ha sido recibido por los demás?
        </h3>
        <p className="text-xl text-white mt-4">hola</p>

        <h3 className="text-2xl font-semibold">
          ¿Cuál consideras que ha sido tu mayor logro con este proyecto?
        </h3>
        <p className="text-xl text-white mt-4">hola</p>

        <h3 className="text-2xl font-semibold">
          ¿Tienes planes de expandir o mejorar el proyecto en el futuro?
        </h3>
        <p className="text-xl text-white mt-4">hola</p>

        <h3 className="text-2xl font-semibold">
          ¿Qué aprendizajes te ha dejado esta experiencia?
        </h3>
        <p className="text-xl text-white mt-4">hola</p>
      </div>
      <div className="text-center mb-16 text-[#FFFF00]">
        <h1 className="text-4xl font-bold animate-bounce">
          Artista detras del proyecto
        </h1>
        <div className="mt-8">
          <img
            src={artistInfo.photo}
            alt={artistInfo.name}
            className="w-72 h-72 object-cover rounded-full mx-auto mb-4 hover:scale-105 transition-all"
          />
          <h2 className="text-2xl font-semibold">{artistInfo.name}</h2>
          <p className="text-lg mt-4 text-white">
            {artistInfo.academicBackground}
          </p>
          <p className="text-lg text-white mt-4">{artistInfo.description}</p>
        </div>
      </div>

      {/* Obras del Artista */}
      <h2 className="text-3xl font-bold text-center mb-8 text-[#FFFF00] animate-bounce">
        Obras Destacadas
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10  text-[#FFFF00]">
        {artpost.map((art) => (
          <div
            key={art.id}
            className="border border-gray-300 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all"
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
              <p className="text-white text-sm">Artista: {art.artist}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold text-center mb-8 text-[#FFFF00] animate-bounce">
        Desempeño como docente
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-[#FFFF00]">
        {edu.map((edu) => (
          <div
            key={edu.id}
            className="border border-gray-300 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all"
          >
            <img
              src={edu.image}
              alt={edu.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-2">{edu.title}</h3>
              <p className="text-gray-400 mb-4">{edu.description}</p>
              <p className="text-gray-400 text-sm">Creado en: {edu.date}</p>
              <p className="text-white text-sm">Locacion: {edu.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
