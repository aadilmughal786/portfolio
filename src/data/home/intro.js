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
      "am from India",
      "am a web developer.",
      "love linux.",
      "am a UI/UX designer.",
      "like to buid stuff",
      "am a competitive programmer.",
      "like to buid stuff.",
    ],
  },
  primaryBtn: {
    label: "Resume",
    to: "/resume-classic",
  },

  secondaryBtn: {
    label: "Projects",
    to: "/projects",
    icon: <ArrowLongRightIcon />,
  },
}

export default data
