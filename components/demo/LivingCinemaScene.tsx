"use client";

/**
 * LivingCinemaScene — interactive WebGL demo of the Living Cinema Engine.
 * Mouse-follows camera + scroll accelerates time + 3000 particles.
 * 60fps target.
 */

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

const COUNT = 3000;

function ParticleField({ mouseRef }: { mouseRef: React.MutableRefObject<{ x: number; y: number }> }) {
  const pointsRef = useRef<THREE.Points>(null);

  const { geometry, material } = useMemo(() => {
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const sizes = new Float32Array(COUNT);

    const aurora = new THREE.Color("#00F5FF");
    const gold = new THREE.Color("#FFD700");
    const purple = new THREE.Color("#9B4DFF");
    const white = new THREE.Color("#F6F8FF");

    for (let i = 0; i < COUNT; i++) {
      // Spherical distribution
      const r = 4 + Math.random() * 12;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3 + 0] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi) - 8;

      const roll = Math.random();
      let c: THREE.Color;
      if (roll < 0.04) c = gold;
      else if (roll < 0.12) c = aurora;
      else if (roll < 0.18) c = purple;
      else c = white;
      colors[i * 3 + 0] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;

      sizes[i] = Math.random() < 0.85 ? 0.04 + Math.random() * 0.05 : 0.1 + Math.random() * 0.12;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const mat = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    return { geometry: geo, material: mat };
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.elapsedTime;

    // Slow rotation
    pointsRef.current.rotation.y = t * 0.02 + mouseRef.current.x * 0.3;
    pointsRef.current.rotation.x = Math.sin(t * 0.07) * 0.1 + mouseRef.current.y * 0.2;

    // Gentle wave motion
    pointsRef.current.position.y = Math.sin(t * 0.4) * 0.2;
  });

  return <points ref={pointsRef} geometry={geometry} material={material} />;
}

function MouseCamera({ mouseRef }: { mouseRef: React.MutableRefObject<{ x: number; y: number }> }) {
  const { camera } = useThree();

  useFrame(() => {
    const targetX = mouseRef.current.x * 1.5;
    const targetY = mouseRef.current.y * 1.0;
    camera.position.x += (targetX - camera.position.x) * 0.05;
    camera.position.y += (targetY - camera.position.y) * 0.05;
    camera.lookAt(0, 0, -4);

    // Scroll position drives z
    const scrollEl = document.documentElement;
    const scrolled = scrollEl.scrollTop / scrollEl.scrollHeight;
    const targetZ = 5 - scrolled * 8;
    camera.position.z += (targetZ - camera.position.z) * 0.03;
  });

  return null;
}

function ScrollTime() {
  // Acceleration of motion based on scroll velocity
  const { clock } = useThree();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const delta = Math.abs(y - lastScrollY.current);
      clock.elapsedTime += delta * 0.005;
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [clock]);

  return null;
}

export function LivingCinemaScene() {
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60, near: 0.1, far: 100 }}
        dpr={[1, 1.8]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "#0A0F2C" }}
      >
        <Suspense fallback={null}>
          <MouseCamera mouseRef={mouseRef} />
          <ScrollTime />
          <ParticleField mouseRef={mouseRef} />
        </Suspense>
      </Canvas>
    </div>
  );
}