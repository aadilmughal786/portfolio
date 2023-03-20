import React from "react"
import { FaAddressCard } from "react-icons/fa"
import { socilaIconStyle } from "./education"
import aadilPic from "../../images/resume-classic/aadil.png"

const data = {
  title: "Let me introduce myself",
  icon: <FaAddressCard size={16} className={socilaIconStyle} />,
  pic: aadilPic,
  alt: "aadil's pic",
  hand: "👋",
  greetText: "Hello, My name is Aadil Mugal",
  text: {
    text1: "I",
    text2: [
      "am from India",
      "am a web developer.",
      "love linux.",
      "am a UI/UX designer.",
      "like to buid stuff",
      "am a competitive programmer.",
      "like to buid stuff.",
    ],
  },
  about: [
    {
      id: 1,
      text: "I am a self-taught front-end developer based in Rajasthan, India. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences",
    },
    {
      id: 2,
      text: "Transforming my creativity and knowledge into a website has been my passion for over a year. I have developed various projects. I always strive to learn about the newest technologies and frameworks",
    },
    {
      id: 3,
      text: "I've hands-on experience in software development, mainly in MongoDB, ExpressJS, ReactJS, NodeJS stack(MERN stack), Bootstrap, Tailwind CSS, Figma and REST APIs.",
    },
  ],

  quote: {
    author: "- Anonymous",
    quote:
      "Coding is power and building something through coding is a superpower.",
  },
}

export default data
