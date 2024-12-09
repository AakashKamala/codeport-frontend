// // Home.tsx
// import React, { useRef } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';

// function AnimatedAIModel() {
//   const modelRef = useRef<any>(null);

//   // Load the AI model
//   const { scene } = useGLTF('/ai_model.glb');

//   // Cursor movement logic
//   const handleMouseMove = (event: MouseEvent) => {
//     if (!modelRef.current) return;
//     const { clientX: x, clientY: y } = event;

//     // Normalize cursor position
//     const normalizedX = (x / window.innerWidth) * 2 - 1;
//     const normalizedY = -(y / window.innerHeight) * 2 + 1;

//     // Smoothly move the model
//     modelRef.current.position.x += (normalizedX - modelRef.current.position.x) * 0.1;
//     modelRef.current.position.y += (normalizedY - modelRef.current.position.y) * 0.1;
//   };

//   useFrame(() => {
//     if (!modelRef.current) return;
//     // Add oscillating AI-like animation
//     modelRef.current.rotation.y += 0.01;
//     modelRef.current.rotation.x = Math.sin(modelRef.current.position.y) * 0.2;
//   });

//   React.useEffect(() => {
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   return <primitive ref={modelRef} object={scene} scale={0.5} />;
// }

// function Home() {
//   return (
//     <Canvas style={{ width: '100vw', height: '100vh' }} camera={{ position: [0, 0, 5] }}>
//       <ambientLight intensity={0.5} />
//       <pointLight position={[10, 10, 10]} />
//       <AnimatedAIModel />
//       <OrbitControls />
//     </Canvas>
//   );
// }

// export default Home;







import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function AnimatedAIModel() {
  const modelRef = useRef<any>(null);

  // Load the AI model
  const { scene } = useGLTF('/ai_model.glb');

  // Define the initial position
  const initialPosition = { x: 0.5, y: -1, z: 0 };

  // Cursor movement logic
  const handleMouseMove = (event: MouseEvent) => {
    if (!modelRef.current) return;

    const { clientX: x, clientY: y } = event;

    // Normalize cursor position
    const normalizedX = (x / window.innerWidth) * 2 - 1;
    const normalizedY = -(y / window.innerHeight) * 2 + 1;

    // Smoothly move the model relative to the initial position
    modelRef.current.position.x += (normalizedX - modelRef.current.position.x) * 0.1;
    modelRef.current.position.y += (normalizedY - modelRef.current.position.y) * 0.1;
  };

  // Set the initial position of the model
  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.position.set(
        initialPosition.x,
        initialPosition.y,
        initialPosition.z
      );
    }
  }, []);

  useFrame(() => {
    if (!modelRef.current) return;
    // Add oscillating AI-like animation
    modelRef.current.rotation.y += 0.01;
    modelRef.current.rotation.x = Math.sin(modelRef.current.position.y) * 0.2;
  });

//   useEffect(() => {
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

  return <primitive ref={modelRef} object={scene} scale={0.5} />;
}

function Home() {
  return (
    <Canvas style={{ width: '100vw', height: '100vh' }} camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <AnimatedAIModel />
      <OrbitControls />
    </Canvas>
  );
}

export default Home;
