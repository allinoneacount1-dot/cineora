"use client";

/**
 * Aurora shader — full-screen plane with custom ShaderMaterial.
 *
 * Visual brief:
 *   - Layered FBM (4-6 octaves) flowing vertically
 *   - Top brighter, bottom fades to bg
 *   - Color palette: aurora #00F5FF -> teal #00B4A8 -> faint purple #9B4DFF in highlights
 *   - Additive blending, opacity ~0.55
 *   - Time-based slow flow
 *
 * Geometry: large enough to cover viewport with subtle parallax.
 */

import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;

  varying vec2 vUv;

  uniform float uTime;
  uniform vec2  uResolution;
  uniform vec3  uAurora;   // #00F5FF
  uniform vec3  uTeal;     // #00B4A8
  uniform vec3  uPurple;   // #9B4DFF
  uniform vec3  uBg;       // #0A0F2C
  uniform float uOpacity;

  // Hash + value noise + FBM
  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    mat2 rot = mat2(0.8, -0.6, 0.6, 0.8);
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p = rot * p * 2.02;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv;
    // Aspect-correct
    float aspect = uResolution.x / max(uResolution.y, 1.0);
    vec2 p = vec2(uv.x * aspect, uv.y);

    float t = uTime * 0.045;

    // Two flowing curtain layers
    vec2 q1 = vec2(p.x * 1.6 + t, p.y * 1.2 - t * 0.5);
    vec2 q2 = vec2(p.x * 2.2 - t * 0.7, p.y * 1.6 + t * 0.3);

    float n1 = fbm(q1 + vec2(0.0, t));
    float n2 = fbm(q2 + vec2(t * 1.3, 0.0));

    // Vertical gradient — bright top, fades to bg at bottom
    float vGrad = pow(uv.y, 1.4);

    // Curtain intensity: stronger mid-screen, soft top + bottom
    float band = smoothstep(0.05, 0.55, uv.y) * (1.0 - smoothstep(0.7, 1.0, uv.y));

    float curtain = (n1 * 0.6 + n2 * 0.55) * vGrad * band;

    // Color mix — aurora base, teal midtones, purple highlights in bright spikes
    vec3 col = uBg;
    col = mix(col, uTeal, clamp(curtain * 1.2, 0.0, 1.0));
    col = mix(col, uAurora, clamp(pow(curtain, 1.5) * 1.6, 0.0, 1.0));

    // Purple highlight only on peaks
    float peak = smoothstep(0.55, 0.85, curtain);
    col = mix(col, uPurple, peak * 0.45);

    // Faint horizontal streaks for "curtain" feel
    float streak = fbm(vec2(p.x * 8.0 + t * 2.0, p.y * 0.6)) * vGrad * 0.18;
    col += uAurora * streak;

    // Bottom fade to bg so it dissolves into the page
    float bottomFade = smoothstep(0.0, 0.35, uv.y);
    col = mix(uBg, col, bottomFade);

    // Top edge subtle bloom tint
    col += uAurora * vGrad * 0.04;

    gl_FragColor = vec4(col, uOpacity);
  }
`;

export function AuroraShader() {
  const matRef = useRef<THREE.ShaderMaterial>(null);
  const { size } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(size.width, size.height) },
      uAurora: { value: new THREE.Color("#00F5FF") },
      uTeal: { value: new THREE.Color("#00B4A8") },
      uPurple: { value: new THREE.Color("#9B4DFF") },
      uBg: { value: new THREE.Color("#0A0F2C") },
      uOpacity: { value: 0.62 },
    }),
    [] // intentionally only once
  );

  useFrame((state) => {
    if (!matRef.current) return;
    const u = matRef.current.uniforms;
    u.uTime.value = state.clock.elapsedTime;
    const w = state.size.width;
    const h = state.size.height;
    if (u.uResolution.value.x !== w || u.uResolution.value.y !== h) {
      u.uResolution.value.set(w, h);
    }
  });

  return (
    <mesh position={[0, 0, -1]} scale={[12, 8, 1]}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}
