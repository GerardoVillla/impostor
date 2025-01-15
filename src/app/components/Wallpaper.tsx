"use client"
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import {type ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";

const Wallpaper = () => {
	const [init, setInit] = useState(false);
	useEffect(() => {
	  initParticlesEngine(async (engine) => {
		await loadSlim(engine); // Carga solo las funcionalidades necesarias
	  }).then(() => setInit(true));

	}, []);
  
	console.log("Particles engine initialized");
	const options: ISourceOptions = useMemo(
	  () => ({
		background: {
		  color: { value: "#0E1215" }, 
		},
		fpsLimit: 120,
		particles: {
		  color: { value: "#FFFFFF" }, 
		  move: {
			direction: MoveDirection.none,
			enable: true,
			outModes: { default: OutMode.out },
			speed: 1,
		  },
		  number: {
			density: { enable: true },
			value: 50	,
		  },
		  opacity: { value: 0.3 },
		  shape: { type: "circle" }, 
		  size: { value: { min: 1, max: 4 } },
		},
		detectRetina: true, 
	  }),
	  []
	);
  
	// Renderizar partículas si ya está inicializado
	if (init) {
	  return (
		<Particles
		  id="tsparticles"
		  options={options}
		  className="wallpaper absolute inset-0"
		/>
	  );
	}
  
	return <>loading</>;
  };
  
  export default Wallpaper;