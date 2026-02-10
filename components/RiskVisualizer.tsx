
"use client";
import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, OrbitControls } from "@react-three/drei";

export default function RiskVisualizer() {
  return (
    <div className="h-[400px] w-full bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-800 relative">
      <div className="absolute top-4 left-4 z-10 text-xs font-mono text-blue-400">
        LIVE RENDER :: WEBGL
      </div>
      <Canvas camera={{ position: [0, 0, 5] }}> {/* FIX: Position Added */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Float speed={4} rotationIntensity={1} floatIntensity={2}>
          <mesh>
            <sphereGeometry args={[1.5, 64, 64]} />
            <MeshDistortMaterial 
                color="#3b82f6" 
                distort={0.4} 
                speed={2} 
                roughness={0.2}
            />
          </mesh>
        </Float>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}