import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei"

import { Suspense } from "react"
import  React from "./React"
import * as THREE from 'three'
import Lights from "./Lights"
import JS from "./JS"
import GH from "./GH"
import Java from "./Java"
interface propsType{

  index:number
   groupeRef:any
    gsapType:string
     contolref:any
      setrotation:any
}




const ModelView = (props:propsType) => {
  return (
    <View
    index={props.index}
    id={props.gsapType}
    className=" w-full h-full"
    >

<ambientLight intensity={0.3}></ambientLight>
<PerspectiveCamera makeDefault position={[0,0,1]}></PerspectiveCamera>
<Lights></Lights>
<OrbitControls
makeDefault
ref={props.contolref}
enableZoom={false}
enablePan={false}
rotateSpeed={0.4}
target={new THREE.Vector3(0,0,0)}
onEnd={()=> props.setrotation(props.contolref.current.getAzimuthalAngle())}

></OrbitControls>
<group ref={props.groupeRef} position={[0,0,0]}>
<Suspense fallback={<div>loading</div>}>
{ props.index===1&&<React ></React>}
{ props.index===2&&<JS ></JS>}
{ props.index===3&&<GH ></GH>}
{ props.index===4&&<Java scale={[0.1,0.1,0.1]} ></Java>}
</Suspense>
</group>

    </View>
  )
}

export default ModelView