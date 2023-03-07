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
      label: "Languages",
      items: [
        {
          icon: <FaHtml5 />,
          title: "HTML5",
          per: 98,
        },
        {
          icon: <FaCss3Alt />,
          title: "CSS3",
          per: 90,
        },
        {
          icon: <IoLogoJavascript />,
          title: "JavaScript",
          per: 84,
        },
        {
          icon: <SiTypescript />,
          title: "TypeScript",
          per: 78,
        },
        {
          icon: <SiPython />,
          title: "Python",
          per: 89,
        },
      ],
    },

    {
      label: "Frameworks & Libraries",
      items: [
        {
          icon: <FaBootstrap />,
          title: "Bootstrap",
          per: 93,
        },
        {
          icon: <RiReactjsLine />,
          title: "ReactJS",
          per: 94,
        },
        {
          icon: <SiExpress />,
          title: "ExpressJS",
          per: 65,
        },
        {
          icon: <SiTailwindcss />,
          title: "TailwindCSS",
          per: 95,
        },
        {
          icon: <SiNumpy />,
          title: "Numpy",
          per: 88,
        },
      ],
    },

    {
      label: "Tools",
      items: [
        {
          icon: <FaNodeJs />,
          title: "NodeJS",
          per: 70,
        },
        {
          icon: <FaFigma />,
          title: "Figma",
          per: 81,
        },
        {
          icon: <FaGitAlt />,
          title: "Git/GitHub",
          per: 97,
        },
        {
          icon: <FaLinux />,
          title: "Linux",
          per: 90,
        },
        {
          icon: <SiGnubash />,
          title: "Bash",
          per: 82,
        },
      ],
    },
  ],
}

export default data
