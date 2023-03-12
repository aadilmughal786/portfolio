import React from "react"

import {
  SiGatsby,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiStrapi,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si"

const ICON_SIZE = 25

const data = [
  {
    id: 1,
    icon: <SiGatsby size={ICON_SIZE} />,
    label: "GatsBy",
  },
  {
    id: 2,
    icon: <SiReact size={ICON_SIZE} />,
    label: "ReactJS",
  },
  {
    id: 3,
    icon: <SiTailwindcss size={ICON_SIZE} />,
    label: "TailwindCSS",
  },
  {
    id: 4,
    icon: <SiNodedotjs size={ICON_SIZE} />,
    label: "NodeJS",
  },
  {
    id: 5,
    icon: <SiPython size={ICON_SIZE} />,
    label: "Python",
  },
  {
    id: 6,
    icon: <SiJavascript size={ICON_SIZE} />,
    label: "JavaScript",
  },
  {
    id: 7,
    icon: <SiTypescript size={ICON_SIZE} />,
    label: "TypeScript",
  },
  {
    id: 8,
    icon: <SiGit size={ICON_SIZE} />,
    label: "Git",
  },
  {
    id: 9,
    icon: <SiMongodb size={ICON_SIZE} />,
    label: "MongoDB",
  },
  {
    id: 10,
    icon: <SiStrapi size={ICON_SIZE} />,
    label: "StrApi",
  },
]

export default data
