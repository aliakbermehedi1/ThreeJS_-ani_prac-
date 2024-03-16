import { OrbitControls, Stage } from "@react-three/drei";
import React from "react";
import { Canvas } from "@react-three/fiber";
import Shoe from "./Shoe";
import { styled } from "styled-components";

const ProductDesign = () => {
  const ColorSetup = styled.div`
    width: 200px;
    height: 70px;
    background-color: white;
    border-radius: 10px;
    position: absolute;
    bottom: 10px;
    right: 100px;
  `;

  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Shoe color="green" />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>

      <ColorSetup>
       <div className="flex gap-2">
        <div className="w-3 h-3 bg-green-700">HI</div>
        <div className="w-3 h-3 bg-blue-800"></div>
       </div>
      </ColorSetup>
    </>
  );
};

export default ProductDesign;
