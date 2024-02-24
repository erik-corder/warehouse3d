/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.11 public/assets/models/cardboard_box.glb -t 
Author: Pricey1600 (https://sketchfab.com/Pricey1600)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/cardboard-box-4e622ef1a09c43e28a49d9fa37f9eeee
Title: Cardboard Box
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    CardboardBox_LP_lambert1_0: THREE.Mesh
  }
  materials: {
    lambert1: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function CardboardBox(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('assets/models/cardboard_box.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.CardboardBox_LP_lambert1_0.geometry} material={materials.lambert1} scale={1} />
    </group>
  )
}

useGLTF.preload('assets/models/cardboard_box.glb')

export default CardboardBox