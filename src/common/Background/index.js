import Particles from "react-tsparticles";
import "./index.css";

export default function Background() {
  return (
    <Particles
      className="particles"
      options={{
        particles: {
          size: {
            random: true,
            value: 1,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 60,
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
            straight: false,
          },
        },
      }}
    />
  );
}
