import { StrictMode, useEffect, useState, useMemo } from "react";
import { createRoot } from "react-dom/client";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import App from "./App.tsx";
import "./index.css";

// Este es el componente que contiene la animación de partículas
const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Cargar Slim para partículas más ligeras
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#3D0066", // Color de fondo para las partículas
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#FFDB58", // Color de las partículas
        },
        links: {
          color: "#98FF98",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    >
      {init && <Particles id="tsparticles" options={options} />}
    </div>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <ParticlesBackground />
  </StrictMode>
);
