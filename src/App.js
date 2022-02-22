import { OrbitControls } from "@react-three/drei";
import Scene from "./components/Scene";
import Mesh from "./components/Mesh";
import Doremi from "./models/Doremi";

export default function Level() {
  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <Scene shadows>
        <Doremi position={[0.5, 0, 0]} scale={1.5} />
        <Mesh position={[-2, 1, 0]} type="sphere" color="#12ff89" />
        <Mesh
          position={[0, 0, 0]}
          type="shadowPlane"
          opacity={0.4}
          size={1000}
        />
        <ambientLight intensity={0.45} />
        <directionalLight
          castShadow
          intensity={0.5}
          position={[2.5, 8, 5]}
          shadow-mapSize-width={10000}
          shadow-mapSize-height={10000}
        />
        <OrbitControls />
      </Scene>
    </div>
  );
}
