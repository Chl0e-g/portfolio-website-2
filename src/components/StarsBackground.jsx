import Particles from "react-tsparticles";

export default function StarsBackground() {
  
  return (
    <Particles
        className="starsBackground"
      options={{
        fpsLimit: 60,
        fullScreen: {
            enable: false
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            opacity: {
                animation: {
                    enable: true,
                    minimumValue: 0,
                    speed: 1,
                    sync: false,
                },
                random: true,
                value: 1,
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
