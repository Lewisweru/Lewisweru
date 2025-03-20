import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import type { Engine } from "@tsparticles/engine";

const MyParticles = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log("Particles Engine Initializing...");
    await loadFull(engine); // Loads the full package
    console.log("Particles Engine Loaded!");
  }, []);

  const options = {
    fullScreen: { enable: true },
    particles: {
      number: { value: 50 },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3 },
      move: { enable: true, speed: 1 },
    },
    background: { color: "#000000" },
  };

  return <Particles id="tsparticles" init={particlesInit} options={options} />;
};

export default MyParticles;

