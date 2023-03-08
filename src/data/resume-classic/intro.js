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
      text: "Enthusiastic, hardworking and Creative full stack web developer with a wide variety of skills, looking for a position in web domain where I can enhance my knowledge of design principles and grow with the organization.",
    },
    {
      id: 2,
      text: "I've hands-on experience in software development, mainly in MongoDB, ExpressJS, ReactJS, NodeJS stack(MERN stack), React Native, Bootstrap, Tailwind CSS, Figma and REST APIs.",
    },
  ],

  quote: {
    author: "- Anonymous",
    quote:
      "Coding is power and building something through coding is a superpower.",
  },
}

export default data
