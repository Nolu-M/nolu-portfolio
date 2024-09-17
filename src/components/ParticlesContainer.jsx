import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim"; // Keep using the slim package for bundle size optimization.

const ParticlesContainer = (props) => {
  const [init, setInit] = useState(false);

  // This should be run only once per application lifetime.
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Use loadSlim for reduced bundle size, but you could swap this for loadFull if needed.
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  // Define the particles options, now updated with the colors and options from the second code.
  const options = useMemo(
    () => ({
      fullScreen: { enable: true }, // Enable full-screen mode like in the second code.
      background: {
        color: {
          value: "", // You can adjust the background color if needed.
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse", // Kept the "repulse" mode on click from the first code.
          },
          onHover: {
            enable: true,
            mode: "grab", // Using "grab" like in the first code, but you can change it.
          },
          resize: true, // Added resize support from the second code.
        },
        modes: {
          push: {
            quantity: 90, // Added push mode from the second code.
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          grab: {
            distance: 150, // Grab mode as defined in the first code.
          },
        },
      },
      particles: {
        color: {
          value: "#e68e2e", // Color from the second code.
        },
        links: {
          color: "#f5d393", // Links color from the second code.
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true, // Enable collisions from the second code.
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true, // Keep random movement from the first code.
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800, // Updated area from the second code.
          },
          value: 150, // Particle count remains from the first code.
        },
        opacity: {
          value: 0.5, // Opacity from the second code.
        },
        shape: {
          type: "circle", // Keep the "circle" shape.
        },
        size: {
          value: { min: 1, max: 5 }, // Updated size range from the second code.
        },
      },
      detectRetina: true,
    }),
    [],
  );

  return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticlesContainer;
