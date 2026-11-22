import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
const SIGNAL = new THREE.Color("#45E8B8");
const AMBER = new THREE.Color("#FF8F5E");
function useIsMobile() {
    const [m, setM] = useState(false);
    useEffect(() => {
        const mq = window.matchMedia("(max-width: 768px)");
        const on = () => setM(mq.matches);
        on();
        mq.addEventListener("change", on);
        return () => mq.removeEventListener("change", on);
    }, []);
    return m;
}
function useReducedMotion() {
    const [r, setR] = useState(false);
    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        const on = () => setR(mq.matches);
        on();
        mq.addEventListener("change", on);
        return () => mq.removeEventListener("change", on);
    }, []);
    return r;
}
function Nodes({ count, radius, variant }) {
    const meshRef = useRef(null);
    const linesRef = useRef(null);
    const pulseRef = useRef(null);
    const { pointer, viewport } = useThree();
    const positions = useMemo(() => {
        const arr = [];
        for (let i = 0; i < count; i++) {
            arr.push(new THREE.Vector3((Math.random() - 0.5) * radius * 2, (Math.random() - 0.5) * radius * 1.2, (Math.random() - 0.5) * radius * 1.5));
        }
        return arr;
    }, [count, radius]);
    const velocities = useMemo(() => positions.map(() => ({
        x: (Math.random() - 0.5) * 0.002,
        y: (Math.random() - 0.5) * 0.002,
        z: (Math.random() - 0.5) * 0.002,
    })), [positions]);
    // pre-allocate line buffer: up to `maxLines` segments
    const maxLines = 60;
    const lineGeom = useMemo(() => {
        const g = new THREE.BufferGeometry();
        g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(maxLines * 2 * 3), 3));
        return g;
    }, []);
    const tmpObj = useMemo(() => new THREE.Object3D(), []);
    const tmpColor = useMemo(() => new THREE.Color(), []);
    const pulseTarget = useRef(0);
    // Calmer motion — animation should feel subconscious, not attention-seeking.
    const slow = variant === "ambient" ? 0.18 : 0.65;
    useFrame((state, delta) => {
        if (!meshRef.current)
            return;
        const cursorX = (pointer.x * viewport.width) / 2;
        const cursorY = (pointer.y * viewport.height) / 2;
        const time = state.clock.elapsedTime;
        // update node positions
        for (let i = 0; i < count; i++) {
            const p = positions[i];
            const v = velocities[i];
            p.x += v.x * slow;
            p.y += v.y * slow;
            p.z += v.z * slow;
            // gentle wrap
            if (p.x > radius)
                p.x = -radius;
            if (p.x < -radius)
                p.x = radius;
            if (p.y > radius)
                p.y = -radius;
            if (p.y < -radius)
                p.y = radius;
            if (p.z > radius)
                p.z = -radius;
            if (p.z < -radius)
                p.z = radius;
            // depth-driven scale
            const depth = (p.z + radius) / (radius * 2); // 0..1
            const scale = 0.03 + depth * 0.06;
            tmpObj.position.set(p.x, p.y, p.z);
            tmpObj.scale.setScalar(scale);
            tmpObj.updateMatrix();
            meshRef.current.setMatrixAt(i, tmpObj.matrix);
            // color: mostly signal, occasional amber flicker
            const flicker = Math.sin(time * 0.6 + i) * 0.5 + 0.5;
            tmpColor.copy(SIGNAL).lerp(AMBER, flicker < 0.02 ? 0.7 : 0);
            meshRef.current.setColorAt(i, tmpColor.multiplyScalar(0.6 + depth * 0.8));
        }
        meshRef.current.instanceMatrix.needsUpdate = true;
        if (meshRef.current.instanceColor)
            meshRef.current.instanceColor.needsUpdate = true;
        // compute nearest-to-cursor lines
        const posAttr = lineGeom.getAttribute("position");
        const arr = posAttr.array;
        arr.fill(0);
        const cursor = new THREE.Vector3(cursorX, cursorY, 0);
        const near = [];
        const threshold = variant === "ambient" ? 1.2 : 2.2;
        for (let i = 0; i < count; i++) {
            const p = positions[i];
            const d = Math.hypot(p.x - cursor.x, p.y - cursor.y);
            if (d < threshold)
                near.push(i);
        }
        let segIdx = 0;
        for (let a = 0; a < near.length && segIdx < maxLines; a++) {
            const p = positions[near[a]];
            // cursor→node
            arr[segIdx * 6 + 0] = cursor.x;
            arr[segIdx * 6 + 1] = cursor.y;
            arr[segIdx * 6 + 2] = 0;
            arr[segIdx * 6 + 3] = p.x;
            arr[segIdx * 6 + 4] = p.y;
            arr[segIdx * 6 + 5] = p.z;
            segIdx++;
            // node→next node (chain)
            if (a < near.length - 1 && segIdx < maxLines) {
                const q = positions[near[a + 1]];
                arr[segIdx * 6 + 0] = p.x;
                arr[segIdx * 6 + 1] = p.y;
                arr[segIdx * 6 + 2] = p.z;
                arr[segIdx * 6 + 3] = q.x;
                arr[segIdx * 6 + 4] = q.y;
                arr[segIdx * 6 + 5] = q.z;
                segIdx++;
            }
        }
        posAttr.needsUpdate = true;
        lineGeom.setDrawRange(0, segIdx * 2);
        // occasional surface pulse: pick one node index, ramp its scale
        if (pulseRef.current) {
            pulseTarget.current += delta * 0.4;
            const t = (Math.sin(pulseTarget.current) + 1) * 0.5;
            const idx = Math.floor((pulseTarget.current * 0.13) % count);
            const p = positions[idx];
            pulseRef.current.position.set(p.x, p.y, p.z);
            const s = 0.12 + t * 0.14;
            pulseRef.current.scale.setScalar(s);
            pulseRef.current.material.opacity = 0.15 + (1 - t) * 0.25;
        }
    });
    const lineOpacity = variant === "ambient" ? 0.10 : 0.28;
    return (<group>
      <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
        <sphereGeometry args={[1, 12, 12]}/>
        <meshBasicMaterial toneMapped={false} transparent opacity={variant === "ambient" ? 0.24 : 0.6}/>
      </instancedMesh>

      <lineSegments ref={linesRef} geometry={lineGeom}>
        <lineBasicMaterial color={SIGNAL} transparent opacity={lineOpacity} toneMapped={false}/>
      </lineSegments>

      <mesh ref={pulseRef}>
        <sphereGeometry args={[1, 24, 24]}/>
        <meshBasicMaterial color={SIGNAL} transparent opacity={0.2} toneMapped={false}/>
      </mesh>
    </group>);
}
export default function SignalField({ variant = "hero", className = "", }) {
    const isMobile = useIsMobile();
    const reduced = useReducedMotion();
    // Static fallback for reduced-motion or SSR guard
    if (reduced) {
        return (<div aria-hidden className={`pointer-events-none absolute inset-0 ${className}`} style={{
                background: "radial-gradient(ellipse at 30% 40%, rgba(69,232,184,0.10), transparent 60%), radial-gradient(ellipse at 75% 65%, rgba(255,143,94,0.06), transparent 55%)",
            }}/>);
    }
    const count = isMobile ? (variant === "ambient" ? 16 : 34) : variant === "ambient" ? 45 : 95;
    return (<div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden>
      <Canvas gl={{ antialias: true, alpha: true, powerPreference: "low-power" }} dpr={[1, 1.5]} camera={{ position: [0, 0, 8], fov: 55 }}>
        <color attach="background" args={["#0A1014"]}/>
        <fog attach="fog" args={["#0A1014", 6, 16]}/>
        <Nodes count={count} radius={6} variant={variant}/>
      </Canvas>
      {/* soft vignette so nodes fade at edges */}
      <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse at center, transparent 30%, rgba(10,16,20,0.85) 90%)",
        }}/>
    </div>);
}
