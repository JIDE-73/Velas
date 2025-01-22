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
      fpsLimit: 60,
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
            quantity: 0,
          },
          repulse: {
            distance: 100,
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
          distance: 50,
          enable: false,
          opacity: 1,
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
          value: 50,
        },
        opacity: {
          value: 0.40,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 25, max: 150 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1] blur-sm">
      <div className="w-full h-full blur-sm">
        {init && <Particles id="tsparticles" options={options} />}
      </div>
    </div>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <ParticlesBackground />
  </StrictMode>
);
