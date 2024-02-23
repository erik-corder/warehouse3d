/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.11 public/assets/models/amazon_packaging_box.glb -t 
Author: Shyam Barange (https://sketchfab.com/shyam11)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/amazon-packaging-box-cb743643cb624437bf67566725ed59e9
Title: Amazon Packaging Box
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh;
    Object_3: THREE.Mesh;
    Object_4: THREE.Mesh;
  };
  materials: {
    Material_0: THREE.MeshStandardMaterial;
  };
};

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

export function AmazonPackagingBox({
  position,
  ...props
}: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "assets/models/amazon_packaging_box.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group
        position={position}
        rotation={[-Math.PI, -Math.PI * 0.5, 0]}
        scale={3.5}
      >
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.Material_0}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.Material_0}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.Material_0}
        />
      </group>
    </group>
  );
}

useGLTF.preload("assets/models//amazon_packaging_box.glb");

export default AmazonPackagingBox;
