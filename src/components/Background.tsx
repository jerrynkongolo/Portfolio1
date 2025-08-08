import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Bubbles } from './Bubbles';

export const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-b from-white to-gray-100 dark:from-[#1a1a1a] dark:to-[#121212]">
      <Canvas 
        camera={{ position: [0, 0, 20], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['transparent']} />
        <fog attach="fog" args={['#1a1a1a', 15, 25]} />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          enableRotate={true}
          autoRotate 
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 2.5}
        />
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} />
        <pointLight position={[-10, -10, -5]} intensity={0.2} />
        <Bubbles />
      </Canvas>
    </div>
  );
};