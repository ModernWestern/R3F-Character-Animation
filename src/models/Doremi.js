import { useGLTF, useAnimations } from "@react-three/drei";
import React, { useRef, useEffect, useState } from "react";

const animations = {
  Angry: null,
  Thoughtful: null,
  Set: () => {
    animations.Angry = GetAnimations("Angry");
    animations.Thoughtful = GetAnimations("Thoughtful");
  }
};

const GetAnimations = (name) => {
  const { animations } = useGLTF(`/models/doremi/${name}.glb`);
  return animations;
};

const SetAnimation = (animationClips, root) => {
  const { actions } = useAnimations(animationClips, root);

  useEffect(() => {
    actions.animation_0.reset().fadeIn(0.5).play();
  }, [animationClips]);
};

export default function Model({ ...props }) {
  animations.Set();

  const group = useRef();
  const { nodes, materials } = useGLTF("/models/doremi/Doremi.glb");

  const [currentanimation, setCurrentAnimation] = useState(animations.Angry);

  SetAnimation(currentanimation, group);

  const Click = () => {
    setCurrentAnimation(animations.Thoughtful);
  };

  return (
    <group ref={group} {...props} dispose={null} onClick={() => Click()}>
      <skinnedMesh
        geometry={nodes.Doremi_1.geometry}
        material={materials.Doremi}
        skeleton={nodes.Doremi_1.skeleton}
        castShadow
        receiveShadow
      />
      <primitive object={nodes.Hips} />
    </group>
  );
}

useGLTF.preload("/models/doremi/Doremi.glb");
