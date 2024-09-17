import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim"; // Keep using the slim package for bundle size optimization.

const ParticlesContainer = ({ theme, id }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  // Map your theme class names to the corresponding color codes
  const themeColorMap = {
    'text-primary-green': '#00cc99',
    'text-primary-pink': '#ff3385',
  };

  // Dynamically select the color based on the theme
  const primaryColorClass = theme === 'theme2' ? 'text-primary-green' : 'text-primary-pink';
  const primaryColor = themeColorMap[primaryColorClass];

  const secondaryColorClass = theme === 'theme2' ? 'text-primary-green' : 'text-primary-pink';
  const secondaryColor = themeColorMap[secondaryColorClass];

  const options = useMemo(
    () => ({
      fullScreen: { enable: true },
      background: {
        color: {
          value: "#1E2F97", // Adjust the background color if needed.
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 90,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: {
          value: primaryColor, // Dynamic primary color based on the theme.
        },
        links: {
          color: secondaryColor, // Dynamic secondary color for the links.
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 150,
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
    [theme], // Re-run useMemo when the theme changes.
  );

  return <Particles id={id} init={particlesLoaded} options={options} />;
};

export default ParticlesContainer;
