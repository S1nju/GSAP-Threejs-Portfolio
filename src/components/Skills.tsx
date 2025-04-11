"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef, useState } from "react"
import * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import { View } from "@react-three/drei"
import ModelView from "./ModelView"

function Skills() {
  // Camera controllers
  const cameraControllr = useRef(0)
  const cameraControllj = useRef(0)
  const cameraControlljs = useRef(0)
  const cameraControllgh = useRef(0)

  // Model references
  const react = useRef(new THREE.Group())
  const js = useRef(new THREE.Group())
  const java = useRef(new THREE.Group())
  const github = useRef(new THREE.Group())

  // Rotation states
  const [reactRotation, setReactRotation] = useState(0)
  const [jRotation, setJRotation] = useState(0)
  const [jsRotation, setJsRotation] = useState(0)
  const [ghRotation, setGhRotation] = useState(0)
  console.log(reactRotation);
  console.log(jRotation);
  console.log(jsRotation);
  console.log(ghRotation);
  // Skills data
  const skills = [
    {
      title: "Frontend",
      description: "React.js, Next.js, shadcn/ui",
      index: 1,
      groupRef: react,
      gsapType: "view1",
      controlRef: cameraControllr,
      setRotation: setReactRotation,
      bgColor: "from-purple-500 to-indigo-600",
      textColor: "text-purple-100",
    },
    {
      title: "JavaScript",
      description: "JavaScript, TypeScript, GSAP",
      index: 2,
      groupRef: js,
      gsapType: "view2",
      controlRef: cameraControlljs,
      setRotation: setJsRotation,
      bgColor: "from-amber-500 to-yellow-600",
      textColor: "text-amber-100",
    },
    {
      title: "Backend",
      description: "Java, Spring, SQL",
      index: 4,
      groupRef: java,
      gsapType: "view3",
      controlRef: cameraControllj,
      setRotation: setJRotation,
      bgColor: "from-blue-500 to-cyan-600",
      textColor: "text-blue-100",
    },
    {
      title: "Version Control",
      description: "Git, GitHub",
      index: 3,
      groupRef: github,
      gsapType: "view4",
      controlRef: cameraControllgh,
      setRotation: setGhRotation,
      bgColor: "from-emerald-500 to-green-600",
      textColor: "text-emerald-100",
    },
  ]

  useGSAP(() => {
    // Animate heading
    gsap.to("#skills-heading", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    })

    // Animate divider
    gsap.to("#skills-divider", {
      width: "9rem",
      opacity: 1,
      duration: 1,
      delay: 0.3,
      ease: "power3.inOut",
    })

    // Animate skill cards
    gsap.to(".skill-card", {
      opacity: 1,
      y: 0,
      stagger: 0.15,
      duration: 0.8,
      delay: 0.5,
      ease: "power3.out",
    })
  }, [])

  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="skills-heading" className="text-5xl font-bold text-white opacity-0 transform translate-y-8">
            Tech Stack
          </h2>
          <div
            id="skills-divider"
            className="h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-4 mx-auto opacity-0"
            style={{ width: "0" }}
          ></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card opacity-0 transform translate-y-12 relative rounded-xl overflow-hidden shadow-xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.bgColor} opacity-90`}></div>

              <div className="relative z-10 p-6">
                <h3 className={`text-2xl font-bold mb-2 ${skill.textColor}`}>{skill.title}</h3>

                <div className="h-64 w-full relative mb-4">
                  <ModelView
                    index={skill.index}
                    groupeRef={skill.groupRef}
                    gsapType={skill.gsapType}
                    contolref={skill.controlRef}
                    setrotation={skill.setRotation}
                  />
                </div>

                <div className="flex items-center justify-center">
                  <p className={`font-medium text-lg ${skill.textColor}`}>{skill.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Canvas
        className="w-full h-full"
        style={{
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
        eventSource={document.getElementById("root")!}
      >
        <View.Port />
      </Canvas>
    </section>
  )
}

export default Skills
