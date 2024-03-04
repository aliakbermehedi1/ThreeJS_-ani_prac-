import { styled } from 'styled-components'
import React from 'react'
import { Canvas } from '@react-three/fiber'

const Container = styled.div`
 height: 100vh;
 width: 100%;
 scroll-snap-align: center;
`

const Test = () => {
  return (
    <Container>
      <Canvas>
        <mesh>
          <boxGeometry args={[1,1,1]}/>
        </mesh>
      </Canvas>
    </Container>
  )
}

export default Test
