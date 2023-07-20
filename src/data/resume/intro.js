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
    ],
  },
  about: [
    {
      id: 1,
      text: "Experienced Full Stack Web Developer from Rajasthan, India, with a passion for crafting stunning and user-friendly websites. Self-taught and thriving, my journey spans over a year, packed with successful projects. Always at the forefront of tech trends, I'm ready to deliver unparalleled results! Let's build something incredible together",
    },
    {
      id: 2,
      text: "Passionate about transforming creativity into stunning websites. Over a year of successful project experience, always staying updated with the latest technologies for unparalleled results",
    },
    {
      id: 3,
      text: "Experienced Full Stack Web Developer proficient in the MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS), Bootstrap, Tailwind CSS, Figma, and REST APIs. Skilled in JavaScript, TypeScript, Postman, Gatsby, Jira, Git, GitHub, and GitHub Actions",
    },
  ],

  quote: {
    author: "- Anonymous",
    quote:
      "Coding is power and building something through coding is a superpower.",
  },
}

export default data
