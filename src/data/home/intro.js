import React from "react"
import { ArrowLongRightIcon } from "@heroicons/react/24/solid"
import dev from "../../images/home/dev.svg"

const data = {
  img: dev,
  alt: "developer image",
  hand: "👋",
  name: "I'm Aadil",
  tagLine: "I build things for the web.",
  text: {
    text1: "I",
    text2: [
      "like to build stuff",
      "am a web developer.",
      "am a UI/UX designer.",
      "am a linux lover.",
      "am from India",
    ],
  },
  primaryBtn: {
    label: "Resume",
    to: "/resume",
  },

  secondaryBtn: {
    label: "Projects",
    to: "/projects",
    icon: <ArrowLongRightIcon />,
  },
}

export default data
