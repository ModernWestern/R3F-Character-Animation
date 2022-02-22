import { Canvas } from "@react-three/fiber";

const Scene = ({ children, shadows = false }) => {
  return <Canvas shadows={shadows}>{children}</Canvas>;
};

export default Scene;
