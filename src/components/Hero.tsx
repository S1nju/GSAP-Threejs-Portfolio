import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'
import Threads from '../blocks/Backgrounds/Threads/Threads'
import ShinyText from '../blocks/TextAnimations/ShinyText/ShinyText'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { faJs, faJava, faReact, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
function Hero() {

    useGSAP(()=>{

        gsap.to('.hero-title',{
opacity:1,
duration:4,
ease:'power2.out',

        })

        gsap.from('.threads',{
            opacity:0,
            duration:6,
           
            ease:'power2.out',
            
                    })
                    gsap.from('.words',{
                        y: -100,
                        opacity: 0,
                        rotation: "random(-30, 30)",
                        duration: 0.7, 
                        ease: "back",
                        stagger: 0.15

                    })


    },[])
  return (
    <section className='w-full nav-height bg-black relative my-32'>

<div className='h-5/6 w-full flex flex-center flex-col px-2 '>
<p className='  grey-glow  hero-title words ' style={{fontSize:"50px"}}>WELCOME TO MY PORTFOLIO</p>
<p className='py-10 font-semibold threads text-center text-gray-200  '>Full-stack developer building secure, user-focused  apps with <span className='text-blue'> React/Next .js | .ts</span>,<span className='text-blue'> Spring Boot</span>, and <span className='text-blue'>MySQL</span>. Focused on clean APIs, JWT auth, and smooth UX.</p>
<p className='threads font-semibold text-gray-200 text-center '>Turning ideas into powerful web applications...</p>

<div className='flex gap-5 justify-center items-center py-8 threads grey-glow'>
<FontAwesomeIcon icon={faJs} style={{color: "#ffffff",}}/>
<FontAwesomeIcon icon={faJava} style={{color: "#ffffff",}} />
<FontAwesomeIcon icon={faReact} style={{color: "#ffffff",}} />
<FontAwesomeIcon icon={faDatabase} style={{color: "#ffffff",}} />
<FontAwesomeIcon icon={faGithub} style={{color: "#ffffff",}} />
<FontAwesomeIcon icon={faCodeBranch} style={{color: "#ffffff",}} />

</div>

<a href='#contact' className='threads border border-s-gray-100 my-6 px-5 py-2 bg-gray-300 text-neutral-100 rounded-full hover:bg-gray-200-200 transition-all'><ShinyText text="Lets Connect" disabled={false} speed={3} className='custom-class' /></a>


<div className='threads' style={{ width: '100vw', height: '300px', position: 'relative' }}>
<Threads
    amplitude={1}
    distance={0}
    enableMouseInteraction={true}
  />
</div>
</div>

    </section>
  )
}

export default Hero