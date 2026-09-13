"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Bounds, Center, ContactShadows, OrbitControls } from "@react-three/drei";
import { BedModel } from "@/components/3d/BedModel";

export default function BedScene() {
  return (
    <Canvas
      shadows
      dpr={[1, 1.7]}
      camera={{ position: [2.8, 1.7, 3.2], fov: 32, near: 0.1, far: 50 }}
      gl={{ antialias: true, alpha: false }}
      onCreated={({ gl }) => {
        gl.setClearColor("#e5d0b5", 1);
      }}
    >
      <color attach="background" args={["#e5d0b5"]} />
      <hemisphereLight args={["#efe0c8", "#c4a078", 1]} />
      <ambientLight intensity={0.9} />
      <directionalLight
        position={[4, 6, 3]}
        intensity={1.8}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <directionalLight position={[-3, 2, -2]} intensity={0.5} />

      <Suspense fallback={null}>
        <Bounds fit margin={1.25}>
          <Center>
            <BedModel />
          </Center>
        </Bounds>
      </Suspense>

      <ContactShadows
        position={[0, -0.02, 0]}
        opacity={0.35}
        scale={8}
        blur={2.2}
        far={4}
        color="#4d3d2e"
      />

      <OrbitControls
        makeDefault
        enablePan={false}
        enableZoom={false}
        enableDamping
        dampingFactor={0.08}
        autoRotate
        autoRotateSpeed={0.7}
        minPolarAngle={0.6}
        maxPolarAngle={1.35}
      />
    </Canvas>
  );
}
