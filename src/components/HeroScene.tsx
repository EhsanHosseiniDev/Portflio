import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron, OrbitControls, Points, PointMaterial } from '@react-three/drei';
import { useMemo, useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

function ParticleField({ count = 1800 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Sphere shell distribution
      const r = 4 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.04;
      ref.current.rotation.x += delta * 0.015;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#22d3ee"
        size={0.018}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function MagentaParticles({ count = 600 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2 + Math.random() * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y -= delta * 0.08;
      ref.current.rotation.z += delta * 0.02;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#ec4899"
        size={0.028}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function Core() {
  const wireRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (wireRef.current) {
      wireRef.current.rotation.x -= delta * 0.05;
      wireRef.current.rotation.y -= delta * 0.08;
      const s = 1 + Math.sin(state.clock.elapsedTime * 0.8) * 0.04;
      wireRef.current.scale.set(s, s, s);
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={wireRef}>
        <icosahedronGeometry args={[1.7, 1]} />
        <meshBasicMaterial
          color="#22d3ee"
          wireframe
          transparent
          opacity={0.08}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <Icosahedron args={[2.3, 1]}>
        <meshBasicMaterial
          color="#ec4899"
          wireframe
          transparent
          opacity={0.05}
          blending={THREE.AdditiveBlending}
        />
      </Icosahedron>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={['#05060f']} />
      <fog attach="fog" args={['#05060f', 6, 18]} />
      <ambientLight intensity={0.4} />
      <pointLight position={[6, 4, 4]} intensity={1.4} color="#22d3ee" />
      <pointLight position={[-6, -3, 2]} intensity={1.2} color="#ec4899" />
      <pointLight position={[0, 0, 5]} intensity={0.6} color="#8b5cf6" />

      <Core />
      <ParticleField />
      <MagentaParticles />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.4}
        rotateSpeed={0.4}
      />
    </>
  );
}

export default function HeroScene() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const m = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduce(m.matches);
    const handler = (e: MediaQueryListEvent) => setReduce(e.matches);
    m.addEventListener('change', handler);
    return () => m.removeEventListener('change', handler);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 50 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      frameloop={reduce ? 'demand' : 'always'}
      style={{ background: 'transparent' }}
    >
      <Scene />
    </Canvas>
  );
}
