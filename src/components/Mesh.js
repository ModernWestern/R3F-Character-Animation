import { MeshWobbleMaterial } from "@react-three/drei";

const Sphere = (position = [0, 0, 0], color = "white") => {
  return (
    <mesh position={position} receiveShadow castShadow>
      <sphereBufferGeometry />
      <MeshWobbleMaterial
        attach="material"
        factor={50} // Strength, 0 disables the effect (default=1)
        speed={0.5} // Speed (default=1)
        color={color}
        roughness={0.1}
        metalness={0.1}
      />
    </mesh>
  );
};

const ShadowPlane = (position = [0, 0, 0], size = 100, opacity = 0.5) => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={position} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[size, size]} />
      <shadowMaterial attach="material" transparent opacity={opacity} />
    </mesh>
  );
};

export default function Mesh(props) {
  let mesh = undefined;
  switch (props.type) {
    case "shadowPlane":
      mesh = ShadowPlane(props.position, props.size, props.opacity);
      break;
    case "sphere":
      mesh = Sphere(props.position, props.color);
      break;
  }
  return mesh;
}
