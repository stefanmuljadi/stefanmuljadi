import { Suspense, useEffect, useRef, useState } from "react"
import Typewriter from 'typewriter-effect';
import { Canvas, useLoader, useFrame } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import OrbitControls from "../components/OrbitControls";
import Experience from "../components/Experience";


const Computer = () => {
  const gltf = useLoader(GLTFLoader, "/new_computer/scene.gltf");
  return (
    <>
      <Suspense fallback={null}>
        <primitive object={gltf.scene} scale={0.6} />
        <OrbitControls />
      </Suspense>
    </>
  );
};

export default function Home({ dest }) {

  const scrollRef = useRef(null);

  useEffect(() => {
    if (!dest) {
      return;
    }
    console.log("dest here", document.getElementById(dest))
    const element = document.getElementById(dest);
    element.scrollIntoView({ behavior: "smooth", block: "start" });

  }, [dest])

  return (
    <>
      <div className='overflow-hidden relative snap snap-y snap-mandatory w-screen h-screen overflow-y-scroll' ref={scrollRef}>
        <div id="Home" className='overflow-hidden relative snap-start gap-12 h-screen bg-black flex justify-center items-center'>
          <div className='flex flex-col z-20 '>
            <div className='text-white text-3xl font-semibold mb-6'>
              Hi👋, I'm
            </div>
            <div className='text-8xl font-allenoire leading-[3rem]'>
              Stefan
            </div>
            <div className='flex flex-row items-center gap-3 text-2xl font-semibold pl-2'>
              <div className="h-[0.1rem] w-8 bg-primary"></div>
              <Typewriter
                options={{
                  strings: ['Student', 'Developer', 'Engineer', 'Problem Solver'],
                  autoStart: true,
                  loop: true,
                  pauseFor: 2000,
                }}
              />
            </div>
            <div className="w-[42rem] text-justify text-white font-semibold pt-2">
            I am a second-year computer science student at City University of Hong Kong with a passion for exploring the possibilities of technology to drive positive change. My studies and experience have equipped me with the skills and knowledge to pursue a career in this dynamic and constantly evolving field.
            </div>

          </div>
          <div className="w-1/3 h-3/4 cursor-pointer z-20">
          <Canvas className="w-1/2 pt-24" shadows dpr={[1, 2]} camera={{rotateY:10, position: [0, 0, 4], fov: 80 }}>
              <ambientLight intensity={0.7} />
              <spotLight intensity={0.7} angle={0.2} penumbra={1} position={[100, 15, 100]} castShadow />
              <Computer />
            </Canvas>
          </div>
          <img className="absolute z-5 w-[40rem] -top-64 -left-64" src={"blob (1).svg"}/>
        </div>
        <div className="snap-start overflow-x-hidden" id="Experience">
          <Experience/>
        </div>
        <img className="absolute z-0 w-[40rem] top-72 -right-64" src={"blob (1).svg"}/>
      </div>
    </>
  )
}
