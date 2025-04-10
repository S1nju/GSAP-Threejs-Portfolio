import { useGSAP } from "@gsap/react"
import gsap from 'gsap/all'

import Carousel from "../blocks/Components/Carousel/Carousel"
import { FaDatabase } from "react-icons/fa";
import { IoMdChatboxes } from "react-icons/io";
import { FaSuitcase } from "react-icons/fa";
const projects = [[
  {
    title: "ERTODB",
    description: "Ertodb is a tool for creating ER diagrams that can be transformed into SQL code.",
    id: 1,
    icon: <FaDatabase className="carousel-icon" />,
  },
  {
    title: "features",
    description: "It features a drag-and-drop interface, making database design easy and visual.",
    id: 2,
    icon: <FaDatabase  className="carousel-icon"/>,
  },
  {
    title: "auth system",
    description: "Users can sign up, log in, and manage their own set of diagrams securely",
    id: 3,
    icon: <FaDatabase  className="carousel-icon"/>,
  },
  {
    title: "backend tech",
    description: "The backend, built with Spring Boot, handles authentication and database logic.",
    id: 4,
    icon: <FaDatabase className="carousel-icon" />,
  },
  {
    title: "frontend tech",
    description: "The frontend is developed using React.js, offering a smooth and responsive user experience.",
    id: 5,
    icon: <FaDatabase className="carousel-icon" />,
  },
],

[
  {
    title: "Chat App",
    description: "The Chat App enables real-time messaging between users over WebSockets.",
    id: 1,
    icon: <IoMdChatboxes  className="carousel-icon"/>,
  },
  {
    title: "features",
    description: "It supports one-on-one conversations with a clean, modern UI.",
    id: 2,
    icon:<IoMdChatboxes className="carousel-icon" />,
  },
  {
    title: "auth system",
    description: "Authentication ensures that only registered users can join and chat.",
    id: 3,
    icon:<IoMdChatboxes className="carousel-icon" />,
  },
  {
    title: "Tech",
    description: "Messages are exchanged instantly using WebRTC and WebSocket connections.",
    id: 4,
    icon:<IoMdChatboxes className="carousel-icon" />,
  },
  {
    title: "frontend and backend tech",
    description: "The frontend is built using React.js, while the backend uses Spring Boot for handling communication logic",
    id: 5,
    icon: <IoMdChatboxes className="carousel-icon" />,
  },
],
[
  {
    title: "Freelance Platform",
    description: "Dzwork is a freelance marketplace platform inspired by Upwork",
    id: 1,
    icon: <FaSuitcase   className="carousel-icon"/>,
  },
  {
    title: "features",
    description: "It supports two main user roles: freelancers and clients.",
    id: 2,
    icon:<FaSuitcase className="carousel-icon" />,
  },
  {
    title: "auth system",
    description: "Freelancers can submit proposals to jobs, post their own services, and track application statuses.",
    id: 3,
    icon:<FaSuitcase className="carousel-icon" />,
  },
  {
    title: "Tech",
    description: "Clients can post job listings, review incoming proposals, and browse freelancer profiles.",
    id: 4,
    icon:<FaSuitcase className="carousel-icon" />,
  },
  {
    title: "frontend and backend tech",
    description: "front:next js typescript and shadcn ui, backend uses Spring Boot for handling communication logic",
    id: 5,
    icon: <FaSuitcase className="carousel-icon" />,
  },
],



]



function Projects() {
  useGSAP(()=>{


    gsap.to("#title",{
      opacity:1,
      y:0
    })
  },[])
  return (
    <section id="projects" className="w-screen overflow-hidden h-full common-padding bg-zinc">

<div className="screen-max-width">
<div>
  <h1 id="title" className="section-heading">
Projects
  </h1>
</div>
<div className="flex flex-col items-center justify-center">

<div style={{ height: 'auto', position: 'relative' }} className="flex flex-wrap items-center justify-center gap-5 w-full my-20">
 {projects.map((items,i)=>

 (
<Carousel
key={i}
items={items}
    baseWidth={300}
    autoplay={true}
    autoplayDelay={3000}
    pauseOnHover={true}
    loop={true}
    round={false}
  />


 ))}

</div>
<a href="https://github.com/S1nju" className="btn">See more</a>
</div>
</div>

   </section>
  )
}

export default Projects