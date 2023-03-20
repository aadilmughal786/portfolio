import React from "react"
import {
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaLinux,
  FaNodeJs,
} from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import { SiExpress, SiMongodb, SiPython, SiTypescript } from "react-icons/si"
import { RiReactjsLine } from "react-icons/ri"

const data = {
  label: "Skills",
  description: "These are some of technologies i have worked upon",

  skills: [
    {
      id: 1,
      icon: <FaHtml5 />,
      label: "HTML",
      per: 95,
    },
    {
      id: 2,
      icon: <FaCss3Alt />,
      label: "CSS",
      per: 80,
    },
    {
      id: 3,
      icon: <IoLogoJavascript />,
      label: "JavaScript",
      per: 85,
    },
    {
      id: 4,
      icon: <SiTypescript />,
      label: "Typescript",
      per: 70,
    },
    {
      id: 5,
      icon: <RiReactjsLine />,
      label: "ReactJS",
      per: 80,
    },
    {
      id: 6,
      icon: <FaNodeJs />,
      label: "NodeJS",
      per: 85,
    },
    {
      id: 7,
      icon: <SiExpress />,
      label: "ExpressJS",
      per: 75,
    },
    { id: 8, icon: <SiMongodb />, label: "MongoDb", per: 70 },
    { id: 9, icon: <SiPython />, label: "Python", per: 90 },
    { id: 10, icon: <FaFigma />, label: "Figma", per: 80 },
    { id: 11, icon: <FaGitAlt />, label: "Git/GitHub", per: 60 },
    { id: 12, icon: <FaLinux />, label: "Linux", per: 88 },
  ],
}

export default data
