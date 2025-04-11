
import { logoImg } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'
function NavBar() {
useGSAP(()=>{
gsap.from('.header',{
    yPercent:-250,
    borderRadius:0,
   borderColor:"transparent",
    opacity:0,
    duration:1,
    ease:"power2.out"

})


},[])
  return (
    <header  className='header w-3/5 h-13 my-8 mx-auto  px-5  max-md:px-12    flex justify-between items-center border border-gray-100 rounded-full  '>
        <nav className="flex w-full justify-between screen-max-width max-md:justify-center ">
            <img src={logoImg} alt="Logo" height={90} width={90} className="logo"  />
            <div className='flex flex-1 justify-end items-center gap-2 max-md:hidden '>
            {['Home', 'Projects', 'Contact'].map((navItem: string, index: number) => (
                <div key={index} className="px-5 text-sm cursor-pointer  text-gray-100 hover:text-[#9368EC] transition-all">
                  <a href={'#'+navItem.toLowerCase()}>  {navItem}</a>
                </div>
            ))}



            </div>
        </nav>

        </header>
  )
}

export default NavBar