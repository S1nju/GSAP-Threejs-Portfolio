/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: agustin.trezza (https://sketchfab.com/agustin.trezza)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/javascript-1-e6a5af39d2b3495fb4fb1f8f94d3efda
Title: Javascript (1)
*/


import { useGLTF } from '@react-three/drei'
import { Mesh } from 'three'

export default function JS(props:any) {
  const { nodes, materials } = useGLTF('/models/javascript_1.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Object_2 as Mesh).geometry}
        material={materials.mat_3220964}
        rotation={[Math.PI / 1,0, 5]}
        scale={[0.01,0.01, 0.01]}
      />
    </group>
  )
}

useGLTF.preload('/models/javascript_1.glb')
