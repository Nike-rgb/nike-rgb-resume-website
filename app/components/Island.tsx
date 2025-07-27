"use client";

import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  const gltf = useGLTF("/is.glb");
  return (
    <Center>
      <primitive object={gltf.scene} scale={0.03} rotation={[0, Math.PI, 0]} />
    </Center>
  );
}

useGLTF.preload("/is.glb");

export default function Island() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  return (
    <div className="island h-[36vh] md:h-[50vh] w-[80%] mx-auto bg-[#f0f0f] mt-8 md:mt-4 border border-gray-100 shadow-md rounded-xl md:border-none md:shadow-none">
      <Canvas camera={{ position: [0, 5, 9], fov: isMobile ? 75 : 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} />
        <Model />
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
      <div className="mt-2"></div>
      <small style={{ fontSize: "0.7rem", opacity: 0.4 }}>
        “Lowpoly island” by{" "}
        <a
          href="https://skfb.ly/68SED"
          target="_blank"
          rel="noopener noreferrer"
        >
          alfance
        </a>
        , licensed under{" "}
        <a
          href="http://creativecommons.org/licenses/by/4.0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CC BY 4.0
        </a>
      </small>
    </div>
  );
}
