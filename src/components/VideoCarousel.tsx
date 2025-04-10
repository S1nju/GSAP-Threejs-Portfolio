import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap/all'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Educationphoto from '../assets/Education.gif'
interface EducationData {
    schoolname:string;
    schoolPhotoURL:string;
    start:string;
    end:string;
    degree:string




}

const EducationData:EducationData[] = [{

  schoolname:"Ecole Nationale Polythechnique d'Oran (Current)",
  schoolPhotoURL:"https://wijhati.dz/images/ecole%20polytechnique%20oran%2002.PNG",
  start:"2024",
  end:"2027",
  degree:"Engineering degree in  CSE | Master in  CSE",





},
{

  schoolname:"ECOLE SUPÉRIEURE EN SCIENCES APPLIQUÉES TLEMCEN",
  schoolPhotoURL:"https://www.vitaminedz.com/photos/210/02-210163-l-essat-ecole-superieure-en-sciences-appliquees-de-tlemcen.jpg",
  start:"2022",
  end:"2024",
  degree:"Certificate of completing the national competition",





},
{

  schoolname:"Mouloud kacem HighSchool",
  schoolPhotoURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScVjaQeI9JAEgzSUMINp-ZoUr7RRkOoGpV1g&s",
  start:"2019",
  end:"2022",
  degree:"Bac",





},



]


gsap.registerPlugin(ScrollTrigger);
const VideoCarousel = () => {

  useGSAP(()=>{

gsap.from('.card',{
 opacity:0,
 scrollTrigger: {
  trigger: '.card',
  scrub: true,
  start: 'top 90%',
  end: 'bottom top',
  markers: false
},
 y:50,
 stagger:0.25


})


  },[])
  return (
    <div className='flex items-center justify-around gap-10'>
    <div className='flex items-start flex-col  mt-10'>
  {EducationData.map((data,index)=>{

return (
<div  key={index} className='w-full flex flex-col justify-center card '>
{index===1&&<FontAwesomeIcon  icon={faArrowUp}  style={{color: "#ffffff",}} />}
<div className='flex gap-5 justify-between my-5 rounded-3xl bg-gray-800 py-7 px-7 border border-gray-500' >
<div className='flex flex-col gap-5' >
<div>
<h3 className='font-bold'> {data.schoolname}</h3>

<div className='flex gap-2 text-gray-500'>
  <p>{data.start}</p>
   -
  <p>{data.end}</p>
</div></div >
<p>{data.degree}</p>
</div>
<div  style={{backgroundImage:"url("+data.schoolPhotoURL+")" ,backgroundRepeat:"no-repeat"
,backgroundSize:'cover',height:90
,width:120,
borderRadius:'10%'

}}>
   </div >
   </div >
{ }
{index===1&& <FontAwesomeIcon  icon={faArrowUp} style={{color: "#ffffff",}} />}</div>)
  })}


    </div>

    <img src={Educationphoto} alt='school imgae' width={350} height={500} className='rounded-3xl max-md:hidden ' ></img>
    </div>
  )
}

export default VideoCarousel