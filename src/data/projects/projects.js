import React from "react"
import { SiGithub } from "react-icons/si"
import { HiExternalLink } from "react-icons/hi"

// img for projects
import whatappChatAnalyzerImg from "../../images/porojects/projects/whatapp-chat-analyzer.svg"
import handwrittenCharacterRecognitionImg from "../../images/porojects/projects/handwritten-character-recognition.svg"
import steganographyImg from "../../images/porojects/projects/steganography.svg"
import muiWebsiteImg from "../../images/porojects/projects/mui-website.svg"

const data = {
  label: "Projects",

  projects: [
    {
      id: 1,
      img: whatappChatAnalyzerImg,
      chip: "new",
      links: [
        {
          icon: <SiGithub size={20} />,
          href: "https://github.com/aadilmughal786/Whatsapp-chat-analysis",
        },
      ],
      name: "WhapApp chat Analyzer",
      description:
        "WhatApp chat analyzer App for individual or group chat insights.",
      tools: ["Python", "StreamLit", "Pandas"],
    },

    {
      id: 2,
      img: handwrittenCharacterRecognitionImg,
      links: [
        {
          icon: <SiGithub size={20} />,
          href: "https://github.com/aadilmughal786/Handwritten-character-recognition",
        },
      ],
      name: "Character Recognition",
      description: "Handwritten Character Recognition using ML algorithm",
      tools: ["Python", "ML", "DL"],
    },
    {
      id: 3,
      img: steganographyImg,
      links: [
        {
          icon: <SiGithub size={20} />,
          href: "https://github.com/aadilmughal786/Python-Projects/tree/main/steganography",
        },
      ],
      name: "Steganography",
      description:
        "A method of hiding secret data, by embedding it into an image.",
      tools: ["Python", "Tkinter", "Cryptography"],
    },
    {
      id: 4,
      img: muiWebsiteImg,
      links: [
        {
          icon: <SiGithub size={20} />,
          href: "https://github.com/aadilmughal786/reactmui",
        },
        {
          icon: <HiExternalLink size={25} />,
          href: "https://aadilmughal786.github.io/reactmui/",
        },
      ],
      name: "React MUI Frontend",
      description: "A Frontend web app using ReactJS and Material-UI",
      tools: ["reactJS", "NodeJS", "MUI"],
    },
  ],
}

export default data
