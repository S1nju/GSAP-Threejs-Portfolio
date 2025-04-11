import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'
import Threads from '../blocks/Backgrounds/Threads/Threads'
import ShinyText from '../blocks/TextAnimations/ShinyText/ShinyText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { faJs, faJava, faReact, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import Squares from '../blocks/Backgrounds/Squares/Squares'
function Hero() {
    useGSAP(()=>{
        gsap.to('.hero-title',{
        opacity:1,
        duration:4,
        ease:'power2.out',})

        gsap.from('.threads',{
            opacity:0,
            duration:6,
            ease:'power2.out',})
        gsap.from('.words',{
              y: 100,
              duration: 0.7,
              ease: "power2.out",


          })


    },[])
  return (
    <section className='w-full nav-height bg-black   mb-0 ' style={{backgroundColor:'transparent'}} >

<div className='h-5/6 w-full flex flex-center flex-col px-2 '>
<p className='  grey-glow  hero-title words ' style={{fontSize:"50px"}}>WELCOME TO MY PORTFOLIO</p>
<p className='py-10 font-semibold threads text-center text-gray-200'>Full-stack developer building secure, user-focused  apps with
 <span className='text-[#9368EC]'> React/Next .js | .ts</span>
 ,<span className='text-[#9368EC]'> Spring Boot</span>
 , and <span className='text-[#9368EC]'>MySQL</span>
. Focused on clean APIs, JWT auth, and smooth UX.</p>
<p className='threads font-semibold text-gray-200 text-center  '>Turning ideas into powerful web applications...</p>

<div className='flex gap-5 justify-center items-center py-8 threads grey-glow '>
<FontAwesomeIcon icon={faJs} style={{color: "#ffffff",}}/>
<FontAwesomeIcon icon={faJava} style={{color: "#ffffff",}} />
<FontAwesomeIcon icon={faReact} style={{color: "#ffffff",}} />
<FontAwesomeIcon icon={faDatabase} style={{color: "#ffffff",}} />
<FontAwesomeIcon icon={faGithub} style={{color: "#ffffff",}} />
<FontAwesomeIcon icon={faCodeBranch} style={{color: "#ffffff",}} />

</div>

<a href='https://www.linkedin.com/in/anes-bouhaik-1a8956272/' className='threads border hover:border-s-gray-100 border-[#9368EC]  my-6 px-5 py-2 bg-[#9368EC] text-neutral-100 rounded-full hover:bg-transparent transition-all '>
  <ShinyText text="Lets Connect" disabled={false} speed={3} className='custom-class' />

  </a>

<div className='threads' style={{ width: '100vw', height: '100%', position: 'absolute',opacity:0.4, top:0,zIndex:-2}}>



<Threads
    amplitude={0.5}
    distance={0.9}
    enableMouseInteraction={false}
  />
</div>
<div className='threads' style={{ width: '100vw', height: '100%', position: 'absolute',opacity:0.3, top:0,zIndex:-2,maskImage:'linear-gradient(black,transparent 55%)'}}>


<Squares
speed={0.5}
squareSize={40}
direction='diagonal' // up, down, left, right, diagonal
borderColor='#fff'
hoverFillColor='#222'
/>

</div>
</div>
    </section>
  )
}

export default Hero