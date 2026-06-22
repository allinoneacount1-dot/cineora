"use client";

/**
 * AuroraCanvas — R3F canvas composing AuroraShader + ParticleField.
 * Slow continuous forward dolly (camera z 5 -> 3, ping-pong over 30s).
 * Postprocessing: film grain Noise pass for cinematic texture.
 * Respects prefers-reduced-motion (animation disabled — static composition).
 */

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { AuroraShader } from "./AuroraShader";
import { ParticleField } from "./ParticleField";

function CameraDolly() {
  const { camera } = useThree();
  const base = useRef({ z: 5, target: 3 });

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    // ping-pong over ~30s
    const pingPong = (Math.sin((t / 30) * Math.PI * 2) + 1) / 2; // 0..1
    const targetZ = base.current.z - pingPong * 2;
    camera.position.z += (targetZ - camera.position.z) * 0.02;
  });

  return null;
}

export function AuroraCanvas() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 55, near: 0.1, far: 100 }}
        dpr={[1, 1.8]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "#0A0F2C" }}
      >
        <Suspense fallback={null}>
          {!reduced && <CameraDolly />}
          <AuroraShader />
          <ParticleField />
          {!reduced && (
            <EffectComposer multisampling={0} enableNormalPass={false}>
              <Noise
                premultiply
                blendFunction={BlendFunction.OVERLAY}
                opacity={0.18}
              />
            </EffectComposer>
          )}
        </Suspense>
      </Canvas>
    </div>
  );
}
