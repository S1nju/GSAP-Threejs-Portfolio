import { useGSAP } from "@gsap/react"
import gsap from 'gsap/all'
import ModelView from "./ModelView"
import { useRef, useState } from "react"
import * as THREE from 'three'
import { Canvas } from "@react-three/fiber"
import { View } from "@react-three/drei"
function Skills() {
  // camera control
const cameraControllr = useRef()
const cameraControllj = useRef()
const cameraControlljs = useRef()
const cameraControllgh = useRef()
  // model
const react = useRef(new THREE.Group())
const js = useRef(new THREE.Group())
const java = useRef(new THREE.Group())
const github = useRef(new THREE.Group())
  // rotation
  const [ reactrotaion, setreactrotaion]=useState(0)
  const [ jrotaion, setjrotaion]=useState(0)
  const [ jsrotaion, setjsrotaion]=useState(0)
  const [ ghrotaion, setghrotaion]=useState(0)
  useGSAP(()=>{



    gsap.to('#heading',{

      opacity:1,
      y:0
    })
  },[])
  return (
    <section className="common-padding">

<div className="screen-max-width">
<h1 id='heading' className="section-heading">Tech Stack</h1>
<div className="flex items-center mt-5">
<div className="w-full h-[75vh] md:h-[60vh] flex gap-5  overflow-hidden relative">
  <ModelView index={1} groupeRef={react} gsapType="view1" contolref={cameraControllr} setrotation={setreactrotaion} ></ModelView>
  <ModelView index={2} groupeRef={js} gsapType="view2" contolref={cameraControlljs} setrotation={setjsrotaion} ></ModelView>
  <ModelView index={3} groupeRef={java} gsapType="view3" contolref={cameraControllj} setrotation={setjrotaion} ></ModelView>
  <ModelView index={4} groupeRef={github} gsapType="view4" contolref={cameraControllgh} setrotation={setghrotaion} ></ModelView>

  <Canvas
  className="w-full h-full"
  style={{


    position:"fixed",
    top:0,
    bottom:0,
    left:0,
    right:0,
    overflow:"hidden"

  }}

  eventSource={document.getElementById('root')!}

  >

<View.Port></View.Port>
  </Canvas>
</div>

</div>

</div>


    </section>
  )
}

export default Skills