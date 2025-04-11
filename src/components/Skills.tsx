import { useGSAP } from "@gsap/react"
import gsap from 'gsap/all'
import ModelView from "./ModelView"
import { useRef, useState } from "react"
import * as THREE from 'three'
import { Canvas } from "@react-three/fiber"
import { View } from "@react-three/drei"
function Skills() {
  // camera control
const cameraControllr = useRef(0)
const cameraControllj = useRef(0)
const cameraControlljs = useRef(0)
const cameraControllgh = useRef(0)
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
  console.log(reactrotaion);  console.log(jrotaion);   console.log(jsrotaion);   console.log(ghrotaion);
  useGSAP(()=>{



    gsap.to('#heading',{

      opacity:1,
      y:0
    })
  },[])
  return (
    <section className="common-padding">

<div className="screen-max-width">
  <div>
<h1 id='heading' className="section-heading ">Tech Stack</h1>
<div className="w-36 h-1 bg-[#9368EC]  rounded-full mt-4"></div></div>
<div className="flex items-center mt-5">
<div className="w-full h-[50vh] items-center  max-lg:h-[150vh]  flex max-lg:flex-col   overflow-hidden relative text-center font-bold">

<div className="w-1/2 h-full">
  <ModelView index={1} groupeRef={react} gsapType="view1" contolref={cameraControllr} setrotation={setreactrotaion} ></ModelView>
 <p className="font-bold"> react.js,next.js,shadcnUI</p>
  </div>

  <div className="w-1/2 h-full">
  <ModelView index={2} groupeRef={js} gsapType="view2" contolref={cameraControlljs} setrotation={setjsrotaion} ></ModelView>

 <p className="font-bold">   javascript,typescript,gsap</p>
  </div>

  <div className="w-1/2 h-full">
  <ModelView index={4} groupeRef={java} gsapType="view3" contolref={cameraControllj} setrotation={setjrotaion} ></ModelView>

 <p className="font-bold">java,spring,sql
</p>
  </div>
  <div className="w-1/2 h-full">

  <ModelView index={3} groupeRef={github} gsapType="view4" contolref={cameraControllgh} setrotation={setghrotaion} ></ModelView>
  <p className="font-bold">git,github</p>
  </div>




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