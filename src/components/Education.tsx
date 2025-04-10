import { useGSAP } from "@gsap/react"
import gsap from 'gsap/all'
import VideoCarousel from "./VideoCarousel"

function Education() {

  useGSAP(()=>{


    gsap.to("#title",{
      opacity:1,
      y:0
    })
  },[])
  return (
   <section id="education" className="w-screen overflow-hidden h-full common-padding bg-zinc">

<div className="screen-max-width">
<div>
  <h1 id="title" className="section-heading">
Education
  </h1>
</div>

</div>
<VideoCarousel ></VideoCarousel>

   </section>
  )
}

export default Education