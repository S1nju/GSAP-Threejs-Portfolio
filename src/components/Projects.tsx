import { useGSAP } from "@gsap/react"
import gsap from 'gsap/all'

import Carousel from "../blocks/Components/Carousel/Carousel"
import { FaDatabase } from "react-icons/fa";
import { IoMdChatboxes } from "react-icons/io";
import { FaSuitcase } from "react-icons/fa";
import chatapp from '../assets/chatapp.png'
import ertodb from '../assets/ertodb.png'
import dzwork from '../assets/dzwork.png'
const projects = [
  [
    {
      title: "ERTODB",
      description: "Ertodb is a tool for creating ER diagrams that can be transformed into SQL code.",
      id: 1,
      icon: <FaDatabase className="carousel-icon" />,
      photo:ertodb
    },
    {
      title: "Features",
      description: "It features a drag-and-drop interface, making database design easy and visual.",
      id: 2,
      icon: <FaDatabase className="carousel-icon"/>,
      photo:ertodb
    },
    {
      title: "Auth System",
      description: "Users can sign up, log in, and manage their own set of diagrams securely",
      id: 3,
      icon: <FaDatabase className="carousel-icon"/>,
      photo:ertodb
    },
    {
      title: "Backend Tech",
      description: "The backend, built with Spring Boot, handles authentication and database logic.",
      id: 4,
      icon: <FaDatabase className="carousel-icon" />,
      photo:ertodb
    },
    {
      title: "Frontend Tech",
      description: "The frontend is developed using React.js, offering a smooth and responsive user experience.",
      id: 5,
      icon: <FaDatabase className="carousel-icon" />,
      photo:ertodb
    },
  ],
  [
    {
      title: "Chat App",
      description: "The Chat App enables real-time messaging between users over WebSockets.",
      id: 1,
      icon: <IoMdChatboxes className="carousel-icon"/>,
      photo:chatapp
    },
    {
      title: "Features",
      description: "It supports one-on-one conversations with a clean, modern UI.",
      id: 2,
      icon: <IoMdChatboxes className="carousel-icon" />,
      photo:chatapp
    },
    {
      title: "Auth System",
      description: "Authentication ensures that only registered users can join and chat.",
      id: 3,
      icon: <IoMdChatboxes className="carousel-icon" />,
      photo:chatapp
    },
    {
      title: "Tech",
      description: "Messages are exchanged instantly using WebRTC and WebSocket connections.",
      id: 4,
      icon: <IoMdChatboxes className="carousel-icon" />,
      photo:chatapp
    },
    {
      title: "Frontend & Backend",
      description: "The frontend is built using React.js, while the backend uses Spring Boot for handling communication logic",
      id: 5,
      icon: <IoMdChatboxes className="carousel-icon" />,
      photo:chatapp
    },
  ],
  [
    {
      title: "Freelance Platform",
      description: "Dzwork is a freelance marketplace platform inspired by Upwork",
      id: 1,
      icon: <FaSuitcase className="carousel-icon"/>,
      photo:dzwork
    },
    {
      title: "Features",
      description: "It supports two main user roles: freelancers and clients.",
      id: 2,
      icon: <FaSuitcase className="carousel-icon" />,
      photo:dzwork
    },
    {
      title: "User Roles",
      description: "Freelancers can submit proposals to jobs, post their own services, and track application statuses.",
      id: 3,
      icon: <FaSuitcase className="carousel-icon" />,
      photo:dzwork
    },
    {
      title: "Client Features",
      description: "Clients can post job listings, review incoming proposals, and browse freelancer profiles.",
      id: 4,
      icon: <FaSuitcase className="carousel-icon" />,
      photo:dzwork
    },
    {
      title: "Tech Stack",
      description: "Next.js with TypeScript and shadcn UI for frontend, Spring Boot for backend logic",
      id: 5,
      icon: <FaSuitcase className="carousel-icon" />,
      photo:dzwork
    },
  ]
]

export default function Projects() {
  useGSAP(() => {
    const timeline = gsap.timeline()

    timeline.to("#projects-title", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    })

    timeline.to(".project-carousel", {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.4")

    timeline.to("#projects-cta", {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out"
    }, "-=0.2")
  }, [])

  return (
    <section id="projects" className="w-full overflow-hidden py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2
            id="projects-title"
            className="text-5xl font-bold text-white opacity-0 transform translate-y-8 mb-6"
          >
            Projects
          </h2>
          <div className="w-24 h-1 bg-[#9368EC] mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {projects.map((items, i) => (
            <div
              key={i}
              className="project-carousel opacity-0 transform translate-y-12"
            >
              <Carousel
                items={items}
                baseWidth={350}
                autoplay={true}
                autoplayDelay={4000}
                pauseOnHover={true}
                loop={true}
                round={false}
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            id="projects-cta"
            href="https://github.com/S1nju"
            className="inline-block px-8 py-3 bg-[#9368EC] hover:bg-transparent text-white font-medium rounded-lg transition-colors duration-300 transform opacity-0 translate-y-4 border"
          >
            See More on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
