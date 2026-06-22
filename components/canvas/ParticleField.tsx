"use client";

/**
 * ParticleField — 2000 points drifting slowly through space.
 * Color: cosmic white with faint aurora tint.
 * Size attenuation on. Wraps softly around camera.
 */

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 2000;

export function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);

  const { geometry, material } = useMemo(() => {
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const sizes = new Float32Array(COUNT);

    const aurora = new THREE.Color("#00F5FF");
    const gold = new THREE.Color("#FFD700");
    const white = new THREE.Color("#F6F8FF");

    for (let i = 0; i < COUNT; i++) {
      // Distribute in a slab in front of camera
      positions[i * 3 + 0] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;

      // Mostly white, occasional aurora/gold tint
      const r = Math.random();
      let c: THREE.Color;
      if (r < 0.04) c = gold;
      else if (r < 0.14) c = aurora;
      else c = white;
      colors[i * 3 + 0] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;

      // Two size tiers
      sizes[i] = Math.random() < 0.85 ? Math.random() * 0.04 + 0.012 : Math.random() * 0.09 + 0.05;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const mat = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    return { geometry: geo, material: mat };
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.elapsedTime;
    pointsRef.current.rotation.y = t * 0.012;
    pointsRef.current.rotation.x = Math.sin(t * 0.05) * 0.04;

    // Gentle dolly forward (ping-pong over ~30s)
    const dollyT = (Math.sin(t * 0.05) + 1) / 2; // 0..1
    pointsRef.current.position.z = -2 - dollyT * 1.2;
  });

  return <points ref={pointsRef} geometry={geometry} material={material} />;
}
