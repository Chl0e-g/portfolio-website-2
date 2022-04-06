import Particles from "react-tsparticles";

export default function StarsBackground() {
  return (
    <Particles
      className="starsBackground"
      options={{
        fpsLimit: 60,
        fullScreen: {
          enable: false,
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          opacity: {
            animation: {
              enable: true,
              minimumValue: 0,
              speed: 2,
              sync: false,
            },
            random: true,
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 2,
          },
        },
      }}
    />
  );
}
