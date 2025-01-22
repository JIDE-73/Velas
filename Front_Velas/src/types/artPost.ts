type ArtPost = {
    id: number;
    title: string;
    description: string;
    date: string;
    artist: string;
    image: string;
  };

  const artpost: ArtPost[] = [
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
  export default artpost;