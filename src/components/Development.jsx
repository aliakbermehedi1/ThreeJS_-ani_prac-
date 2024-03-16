import { OrbitControls, Stage } from "@react-three/drei";
import React from "react";
import { Canvas } from "@react-three/fiber";
import Atom from "./Atom";

const Development = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Atom />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Development;
