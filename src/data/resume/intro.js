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
      text: "I'm an accomplished Full Stack Web Developer based in Rajasthan, India, with a year of extensive experience. My passion lies in crafting visually stunning and user-friendly websites that make a lasting impact. As a self-taught developer, I've thrived on successfully delivering a range of projects.",
    },
    {
      id: 2,
      text: "My skill set includes proficiency in the MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS), Bootstrap, Tailwind CSS, and working with tools like Figma and REST APIs. I'm well-versed in JavaScript and TypeScript, and I'm experienced in Postman, Gatsby, Jira, Git, GitHub, and GitHub Actions.",
    },
    {
      id: 3,
      text: "I bring a year of proven success, a passion for creativity, and a commitment to staying at the cutting edge of web development. My goal is simple: To craft user-friendly websites that exceed expectations and make a lasting impact. Let's collaborate and build something extraordinary together.",
    },
  ],

  quote: {
    author: "- Anonymous",
    quote:
      "Coding is power and building something through coding is a superpower.",
  },
}

export default data
