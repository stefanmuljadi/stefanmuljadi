import { Suspense, useEffect, useRef, useState } from "react"
import Typewriter from 'typewriter-effect';
import { Canvas, useLoader, useFrame } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import OrbitControls from "../components/OrbitControls";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Gallery from "../components/Gallery";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Loader = () => {
  const { progress } = useProgress()
  console.log("GOT HERER")
  return <Html center>{progress} % loaded</Html>
}

const Computer = () => {
  const gltf = useLoader(GLTFLoader, "/new_computer/scene.gltf");
  
  return(
      <>
        <Suspense fallback={<Loader/>}>
          <primitive object={gltf.scene} scale={0.6} />
          <OrbitControls />
        </Suspense>
      </>
  )
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
      <div className='overflow-hidden relative snap snap-y snap-mandatory w-screen h-screen overflow-y-scroll bg-black' ref={scrollRef}>
        <div id="Home" className='overflow-hidden lg:relative snap-start gap-12 w-full h-screen  flex justify-center items-center px-24'>
          <div className='flex flex-col z-20 w-screen lg:w-1/2'>
            <div className='text-white text-3xl font-semibold mb-6 mt-16'>
              Hi👋, I'm
            </div>
            <div className='text-8xl font-allenoire leading-[3rem]'>
              Stefan
            </div>
            <div className='flex flex-row items-center gap-3 text-2xl font-semibold lg:pl-2'>
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
            <div className="lg:w-[42rem] text-justify text-white font-semibold pt-2">
            I am a second-year computer science student at City University of Hong Kong with a passion for exploring the possibilities of technology to drive positive change. My studies and experience have equipped me with the skills and knowledge to pursue a career in this dynamic and constantly evolving field.
            </div>
            <a className="color" href="https://www.linkedin.com/in/stefanmuljadi/">
              <svg className="w-8 h-8 fill-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>            
            </a>
          </div>
          <div className="w-1/2 h-3/4 cursor-pointer z-20 hidden lg:block">
            <Canvas className="w-1/2 rounded-lg border-4 border-primary" shadows dpr={[1, 2]} camera={{rotateY:10, position: [0, 0, 4], fov: 80 }}>
              <ambientLight intensity={0.7} />
              <spotLight intensity={0.7} angle={0.2} penumbra={1} position={[100, 15, 100]} castShadow />
              <Computer />
            </Canvas>
            <div className='text-white text-center text-3xl font-semibold'>
              Play with me!👆
            </div>
          </div>
          <img className="absolute z-5 w-[40rem] -top-64 -left-64" src={"blob (1).svg"} alt="blob"/>
        </div>
        <div className="snap-start overflow-x-hidden" id="Experience">
          <Experience/>
        </div>
        <img className="hidden lg:block absolute z-0 w-[40rem] top-72 -right-64" src={"blob (1).svg"} alt="blob 2"/>
        <div className="snap-start overflow-x-hidden" id="Education">
          <Education/>
        </div>
        <div className="snap-start overflow-x-hidden" id="Gallery">
          <Gallery/>
        </div>
        <div className="bg-black text-primary w-full h-20 flex flex-col justify-center items-center font-semibold">
          <div className="text-center">Made with Next.js by Stefan Rafael MULJADI</div>
        </div>
      </div>
    </>
  )
}
