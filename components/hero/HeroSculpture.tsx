"use client";

import { ContactShadows, Environment, Lightformer } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Component,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import * as THREE from "three";

type Quality = "high" | "low";

class SculptureBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

function StaticArtwork({ reduced }: { reduced: boolean }) {
  return (
    <svg
      viewBox="0 0 400 400"
      role="img"
      aria-label="An abstract arrangement of interconnected spheres and orbital rings"
      className="h-full w-full"
    >
      <g
        className={reduced ? "" : "sculpture-fallback-orbit"}
        style={{ transformOrigin: "200px 200px" }}
        fill="none"
      >
        <ellipse cx="200" cy="200" rx="146" ry="62" stroke="#C9D3CA" strokeWidth="1" transform="rotate(-24 200 200)" />
        <ellipse cx="200" cy="200" rx="128" ry="92" stroke="#E0E5DE" strokeWidth="1" transform="rotate(38 200 200)" />
        <circle cx="200" cy="200" r="106" stroke="#DDE3DC" strokeWidth="1" />
        <circle cx="200" cy="200" r="54" fill="#1B3A2E" />
        <circle cx="200" cy="200" r="54" stroke="#7C9787" strokeWidth="0.75" />
        <circle cx="324" cy="152" r="7" fill="#245240" />
        <circle cx="86" cy="244" r="5" fill="#8FA59A" />
        <circle cx="262" cy="305" r="4" fill="#8FA59A" />
        <circle cx="126" cy="122" r="3.5" fill="#245240" />
      </g>
    </svg>
  );
}

const rings: Array<{
  radius: number;
  tube: number;
  rotation: [number, number, number];
  color: string;
}> = [
  { radius: 1.52, tube: 0.018, rotation: [1.08, 0.24, 0.32], color: "#2C5A48" },
  { radius: 2.04, tube: 0.012, rotation: [0.52, 0.92, -0.4], color: "#93A89A" },
  { radius: 1.22, tube: 0.009, rotation: [-0.62, 0.38, 0.84], color: "#BFCBC1" },
];

function OrbitNodes({ count, reduced }: { count: number; reduced: boolean }) {
  const ref = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const seeds = useMemo(
    () =>
      Array.from({ length: count }, (_, index) => ({
        radius: 1.6 + (index % 4) * 0.24,
        speed: 0.09 + (index % 5) * 0.028,
        phase: (index / count) * Math.PI * 2,
        lift: ((index % 3) - 1) * 0.38,
        scale: index % 5 === 0 ? 0.082 : 0.046,
      })),
    [count],
  );

  useFrame((state) => {
    if (!ref.current) return;
    const time = reduced ? 0 : state.clock.elapsedTime;

    seeds.forEach((seed, index) => {
      const angle = seed.phase + time * seed.speed;
      dummy.position.set(
        Math.cos(angle) * seed.radius,
        Math.sin(angle * 1.3) * 0.48 + seed.lift,
        Math.sin(angle) * seed.radius,
      );
      dummy.scale.setScalar(seed.scale);
      dummy.updateMatrix();
      ref.current!.setMatrixAt(index, dummy.matrix);
    });

    ref.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, count]} frustumCulled={false}>
      <sphereGeometry args={[1, 12, 12]} />
      <meshStandardMaterial color="#8CA396" metalness={0.8} roughness={0.28} />
    </instancedMesh>
  );
}

function Spokes() {
  const spokes = useMemo(
    () =>
      Array.from({ length: 6 }, (_, index) => {
        const angle = (index / 6) * Math.PI * 2;
        const end = new THREE.Vector3(
          Math.cos(angle) * 1.44,
          Math.sin(angle * 2) * 0.36,
          Math.sin(angle) * 1.44,
        );
        return {
          position: end.clone().multiplyScalar(0.5),
          quaternion: new THREE.Quaternion().setFromUnitVectors(
            new THREE.Vector3(0, 1, 0),
            end.clone().normalize(),
          ),
          length: end.length(),
        };
      }),
    [],
  );

  return (
    <>
      {spokes.map((spoke, index) => (
        <mesh
          key={index}
          position={spoke.position}
          quaternion={spoke.quaternion}
        >
          <cylinderGeometry args={[0.006, 0.006, spoke.length, 6]} />
          <meshBasicMaterial color="#779083" transparent opacity={0.42} />
        </mesh>
      ))}
    </>
  );
}

function Sculpture({ quality, reduced }: { quality: Quality; reduced: boolean }) {
  const group = useRef<THREE.Group>(null);
  const { pointer } = useThree();
  const tilt = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (!group.current) return;
    const time = state.clock.elapsedTime;
    const targetX = reduced ? 0 : pointer.y * 0.15;
    const targetY = reduced ? 0 : pointer.x * 0.22;
    const ease = Math.min(1, delta * 2.4);

    tilt.current.x += (targetX - tilt.current.x) * ease;
    tilt.current.y += (targetY - tilt.current.y) * ease;

    group.current.rotation.y = (reduced ? 0.4 : time * 0.085) + tilt.current.y;
    group.current.rotation.x = tilt.current.x + (reduced ? -0.18 : Math.sin(time * 0.24) * 0.05);
    group.current.position.y = reduced ? 0 : Math.sin(time * 0.45) * 0.06;
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[0.82, 1]} />
        <meshPhysicalMaterial
          color="#1B3A2E"
          metalness={0.85}
          roughness={0.17}
          clearcoat={1}
          clearcoatRoughness={0.12}
          envMapIntensity={1.35}
        />
      </mesh>

      <mesh scale={1.014}>
        <icosahedronGeometry args={[0.82, 1]} />
        <meshBasicMaterial wireframe color="#DCE5DD" transparent opacity={0.18} />
      </mesh>

      <mesh>
        <sphereGeometry args={[1.28, quality === "high" ? 40 : 24, quality === "high" ? 40 : 24]} />
        {quality === "high" ? (
          <meshPhysicalMaterial
            color="#EFF3EE"
            transmission={0.9}
            thickness={0.85}
            roughness={0.11}
            metalness={0}
            ior={1.36}
            transparent
            opacity={0.98}
            depthWrite={false}
          />
        ) : (
          <meshBasicMaterial color="#D9E4DA" transparent opacity={0.07} depthWrite={false} />
        )}
      </mesh>

      {rings.map((ring, index) => (
        <mesh key={index} rotation={ring.rotation}>
          <torusGeometry args={[ring.radius, ring.tube, 10, quality === "high" ? 96 : 56]} />
          <meshStandardMaterial
            color={ring.color}
            metalness={0.9}
            roughness={0.22}
            envMapIntensity={1.1}
          />
        </mesh>
      ))}

      <Spokes />
      <OrbitNodes count={quality === "high" ? 16 : 10} reduced={reduced} />
    </group>
  );
}

export default function HeroSculpture() {
  const container = useRef<HTMLDivElement>(null);
  const [supported, setSupported] = useState<boolean | null>(null);
  const [inView, setInView] = useState(true);
  const [quality, setQuality] = useState<Quality>("high");
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    let available = false;
    try {
      const canvas = document.createElement("canvas");
      available = Boolean(
        canvas.getContext("webgl2") || canvas.getContext("webgl"),
      );
    } catch {
      available = false;
    }
    setSupported(available);
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    setQuality(window.innerWidth < 720 ? "low" : "high");

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotionChange = () => setReduced(motionQuery.matches);
    motionQuery.addEventListener?.("change", onMotionChange);
    return () => motionQuery.removeEventListener?.("change", onMotionChange);
  }, []);

  useEffect(() => {
    if (!container.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.05 },
    );
    observer.observe(container.current);
    return () => observer.disconnect();
  }, []);

  const fallback = <StaticArtwork reduced={reduced} />;

  return (
    <div ref={container} className="absolute inset-0" aria-hidden={supported !== false}>
      {supported === false ? (
        fallback
      ) : supported === null ? (
        fallback
      ) : (
        <SculptureBoundary fallback={fallback}>
          <Canvas
            dpr={[1, quality === "high" ? 1.7 : 1.25]}
            camera={{ position: [0, 0, 6.7], fov: 38 }}
            gl={{
              antialias: quality === "high",
              alpha: true,
              powerPreference: "high-performance",
            }}
            frameloop={inView ? (reduced ? "demand" : "always") : "never"}
            onCreated={({ gl }) => {
              gl.toneMapping = THREE.ACESFilmicToneMapping;
              gl.toneMappingExposure = 1.05;
            }}
          >
            <ambientLight intensity={0.7} />
            <directionalLight position={[4, 6, 5]} intensity={2.1} />
            <directionalLight position={[-5, 2, -3]} intensity={1.05} color="#DCE9DF" />
            <pointLight position={[0, -3, 2]} intensity={0.75} color="#245240" />
            <Environment resolution={quality === "high" ? 128 : 64}>
              <Lightformer
                form="rect"
                intensity={2.4}
                color="white"
                position={[0, 4, 3]}
                scale={[6, 2, 1]}
              />
              <Lightformer
                form="circle"
                intensity={1.5}
                color="#C7D8CC"
                position={[-4, 0, 2]}
                scale={3}
              />
            </Environment>
            <Sculpture quality={quality} reduced={reduced} />
            {quality === "high" && (
              <ContactShadows
                position={[0, -2.1, 0]}
                opacity={0.2}
                scale={6}
                blur={2.6}
                far={4}
                frames={1}
                resolution={256}
                color="#1D2A22"
              />
            )}
          </Canvas>
        </SculptureBoundary>
      )}
    </div>
  );
}
