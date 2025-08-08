import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const Bubbles = () => {
  const bubblesRef = useRef<THREE.Group>(null);
  const bubbleCount = 15;

  useFrame((state) => {
    if (bubblesRef.current) {
      bubblesRef.current.rotation.y += 0.0002;
      bubblesRef.current.children.forEach((bubble, i) => {
        const t = state.clock.getElapsedTime() + i * 100;
        bubble.position.y += Math.sin(t * 0.1) * 0.001;
        bubble.position.x += Math.cos(t * 0.1) * 0.001;
        const scale = 1 + Math.sin(t * 0.2) * 0.1;
        bubble.scale.set(scale, scale, scale);
      });
    }
  });

  const generateRandomPosition = () => {
    const radius = 15;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos((Math.random() * 2) - 1);
    
    return [
      radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.sin(phi) * Math.sin(theta) * 0.5,
      radius * Math.cos(phi)
    ];
  };

  return (
    <group ref={bubblesRef}>
      {Array.from({ length: bubbleCount }).map((_, i) => {
        const scale = Math.random() * 4 + 3;
        const [x, y, z] = generateRandomPosition();
        
        return (
          <mesh
            key={i}
            position={[x, y, z]}
            scale={scale}
          >
            <sphereGeometry args={[1, 64, 64]} />
            <meshPhongMaterial
              color={new THREE.Color(0.8, 0.8, 0.9)}
              transparent
              opacity={0.15}
              shininess={100}
              specular={new THREE.Color(1, 1, 1)}
              depthWrite={false}
            />
          </mesh>
        );
      })}
    </group>
  );
};