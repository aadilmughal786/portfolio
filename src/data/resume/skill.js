import React from "react"
import {
  FaBalanceScaleRight,
  FaBootstrap,
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaLinux,
  FaNodeJs,
} from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import {
  SiExpress,
  SiGnubash,
  SiNumpy,
  SiPython,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si"
import { RiReactjsLine } from "react-icons/ri"

const data = {
  title: "Skills",
  icon: <FaBalanceScaleRight />,
  items: [
    {
      id: 1,
      label: "Languages",
      items: [
        { id: 1, icon: <FaHtml5 />, title: "HTML5", per: 98 },
        { id: 2, icon: <FaCss3Alt />, title: "CSS3", per: 90 },
        { id: 3, icon: <IoLogoJavascript />, title: "JavaScript", per: 84 },
        { id: 4, icon: <SiTypescript />, title: "TypeScript", per: 78 },
        { id: 5, icon: <SiPython />, title: "Python", per: 89 },
      ],
    },

    {
      id: 2,
      label: "Frameworks & Libraries",
      items: [
        { id: 1, icon: <FaBootstrap />, title: "Bootstrap", per: 93 },
        { id: 2, icon: <RiReactjsLine />, title: "ReactJS", per: 94 },
        { id: 3, icon: <SiExpress />, title: "ExpressJS", per: 65 },
        { id: 4, icon: <SiTailwindcss />, title: "TailwindCSS", per: 95 },
        { id: 5, icon: <SiNumpy />, title: "Numpy", per: 88 },
      ],
    },

    {
      id: 3,
      label: "Tools",
      items: [
        { id: 1, icon: <FaNodeJs />, title: "NodeJS", per: 70 },
        { id: 2, icon: <FaFigma />, title: "Figma", per: 81 },
        { id: 3, icon: <FaGitAlt />, title: "Git/GitHub", per: 97 },
        { id: 4, icon: <FaLinux />, title: "Linux", per: 90 },
        { id: 5, icon: <SiGnubash />, title: "Bash", per: 82 },
      ],
    },
  ],
}

export default data
