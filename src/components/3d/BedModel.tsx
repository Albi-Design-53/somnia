"use client";

import { useLayoutEffect } from "react";
import { RoundedBox, useTexture } from "@react-three/drei";
import { RepeatWrapping, SRGBColorSpace, type Texture } from "three";

function prep(map: Texture, repeatX = 1, repeatY = 1) {
  map.colorSpace = SRGBColorSpace;
  map.wrapS = RepeatWrapping;
  map.wrapT = RepeatWrapping;
  map.repeat.set(repeatX, repeatY);
  map.anisotropy = 8;
  map.needsUpdate = true;
  return map;
}

function Wood({
  args,
  position,
  rotation,
  radius = 0.012,
}: {
  args: [number, number, number];
  position: [number, number, number];
  rotation?: [number, number, number];
  radius?: number;
}) {
  const oak = useTexture("/models/textures/oak.png");
  useLayoutEffect(() => {
    prep(oak, 1.6, 1.2);
  }, [oak]);

  return (
    <RoundedBox
      args={args}
      radius={radius}
      smoothness={4}
      position={position}
      rotation={rotation}
      castShadow
      receiveShadow
    >
      <meshStandardMaterial map={oak} roughness={0.48} metalness={0} color="#f3e6d2" />
    </RoundedBox>
  );
}

export function BedModel() {
  const [quilt, paisley, heart] = useTexture([
    "/models/textures/quilt.png",
    "/models/textures/paisley.png",
    "/models/textures/heart-cushion.png",
  ]);

  useLayoutEffect(() => {
    prep(quilt, 1, 1.4);
    prep(paisley, 1.15, 1.35);
    heart.colorSpace = SRGBColorSpace;
    heart.anisotropy = 8;
  }, [quilt, paisley, heart]);

  return (
    <group>
      {/* Platform + rails */}
      <Wood args={[1.86, 0.07, 2.08]} position={[0, 0.22, 0]} radius={0.008} />
      <Wood args={[0.08, 0.2, 2.08]} position={[-0.89, 0.14, 0]} />
      <Wood args={[0.08, 0.2, 2.08]} position={[0.89, 0.14, 0]} />
      <Wood args={[1.86, 0.2, 0.08]} position={[0, 0.14, -1.0]} />

      {/* Legs */}
      <Wood args={[0.09, 0.22, 0.09]} position={[-0.82, 0.11, 0.92]} />
      <Wood args={[0.09, 0.22, 0.09]} position={[0.82, 0.11, 0.92]} />
      <Wood args={[0.09, 0.22, 0.09]} position={[-0.82, 0.11, -0.92]} />
      <Wood args={[0.09, 0.22, 0.09]} position={[0.82, 0.11, -0.92]} />

      {/* Headboard */}
      <Wood args={[1.9, 0.92, 0.09]} position={[0, 0.58, 1.08]} radius={0.01} />

      {/* Mattress */}
      <RoundedBox
        args={[1.72, 0.22, 1.96]}
        radius={0.03}
        smoothness={5}
        position={[0, 0.39, 0.02]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial map={quilt} roughness={0.82} color="#f7f4ee" />
      </RoundedBox>

      {/* Folded paisley duvet over the foot half */}
      <RoundedBox
        args={[1.74, 0.09, 1.12]}
        radius={0.045}
        smoothness={6}
        position={[0, 0.54, -0.38]}
        castShadow
      >
        <meshStandardMaterial map={paisley} roughness={0.72} />
      </RoundedBox>

      {/* Paisley pillow */}
      <RoundedBox
        args={[0.68, 0.18, 0.44]}
        radius={0.07}
        smoothness={6}
        position={[0, 0.6, 0.74]}
        rotation={[-0.22, 0, 0]}
        castShadow
      >
        <meshStandardMaterial map={paisley} roughness={0.68} />
      </RoundedBox>

      {/* Bench at the foot */}
      <Wood args={[1.28, 0.05, 0.38]} position={[0, 0.4, -1.32]} />
      <Wood args={[0.07, 0.38, 0.07]} position={[-0.54, 0.19, -1.2]} />
      <Wood args={[0.07, 0.38, 0.07]} position={[0.54, 0.19, -1.2]} />
      <Wood args={[0.07, 0.38, 0.07]} position={[-0.54, 0.19, -1.44]} />
      <Wood args={[0.07, 0.38, 0.07]} position={[0.54, 0.19, -1.44]} />

      {/* Heart cushions on the bench */}
      {([-0.28, 0.28] as const).map((x) => (
        <RoundedBox
          key={x}
          args={[0.42, 0.12, 0.42]}
          radius={0.04}
          smoothness={5}
          position={[x, 0.5, -1.32]}
          rotation={[-0.08, 0.18 * Math.sign(x || 1), 0.04]}
          castShadow
        >
          <meshStandardMaterial map={heart} roughness={0.7} />
        </RoundedBox>
      ))}

      {/* Side table */}
      <Wood args={[0.42, 0.05, 0.42]} position={[1.28, 0.34, 0.18]} />
      <Wood args={[0.06, 0.32, 0.06]} position={[1.14, 0.16, 0.04]} />
      <Wood args={[0.06, 0.32, 0.06]} position={[1.42, 0.16, 0.04]} />
      <Wood args={[0.06, 0.32, 0.06]} position={[1.14, 0.16, 0.32]} />
      <Wood args={[0.06, 0.32, 0.06]} position={[1.42, 0.16, 0.32]} />
    </group>
  );
}

useTexture.preload("/models/textures/oak.png");
useTexture.preload("/models/textures/quilt.png");
useTexture.preload("/models/textures/paisley.png");
useTexture.preload("/models/textures/heart-cushion.png");
