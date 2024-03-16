import React, { useRef } from "react";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
const Cube = () => {

    // useFrame((state) => {
    //    console.log("State", state)
    //   });

    const textRef = useRef()
    useFrame(state =>  (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2))
  return (
    <mesh>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 2]} />
          <color attach="background" args={["#dc9dcd"]} />
          <Text ref={textRef} fontSize={1.5} color="#555">
            Ali Akber
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;
