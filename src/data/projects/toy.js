import React from "react"
import { SlCalculator } from "react-icons/sl"
import { CgWebsite } from "react-icons/cg"
import { SiGithub, SiTodoist } from "react-icons/si"
import { HiExternalLink } from "react-icons/hi"

const data = {
  label: "Toy Projects",
  projects: [
    {
      id: 1,
      icon: <SlCalculator size={50} />,
      links: [
        {
          icon: <SiGithub size={20} />,
          href: "https://github.com/aadilmughal786/simple-web-project/blob/main/acal.html",
        },
        {
          icon: <HiExternalLink size={25} />,
          href: "https://aadilmughal786.github.io/simple-web-project/acal.html",
        },
      ],
      name: "ACulator",
      description:
        "It is a simple calculator which do basic stuff computation and fully responsive in any device",
      tools: ["JavaScript", "html", "CSS"],
    },
    {
      id: 2,
      icon: <SiTodoist size={50} />,
      links: [
        {
          icon: <SiGithub size={20} />,
          href: "https://github.com/aadilmughal786/simple-web-project/blob/main/notesApp.html",
        },
        {
          icon: <HiExternalLink size={25} />,
          href: "https://aadilmughal786.github.io/simple-web-project/notesApp.html",
        },
      ],
      name: "Notes App",
      description:
        "It is a simple notes taking app which do basic notes stuff and use browser's local storage to preserve your data for furder use",
      tools: ["JavaScript", "html", "CSS"],
    },
    {
      id: 3,
      icon: <CgWebsite size={50} />,
      links: [
        {
          icon: <SiGithub size={20} />,
          href: "https://github.com/aadilmughal786/simple-web-project/blob/main/glasssite1.html",
        },
        {
          icon: <HiExternalLink size={25} />,
          href: "https://aadilmughal786.github.io/simple-web-project/glasssite1.html",
        },
      ],
      name: "Glassy website",
      description:
        "It is a simple calculator which do basic stuff computation and fully responsive in any device",
      tools: ["JavaScript", "html", "CSS"],
    },
    {
      id: 4,
      icon: <SlCalculator size={50} />,
      links: [
        {
          icon: <SiGithub size={20} />,
          href: "https://github.com/aadilmughal786/simple-web-project/blob/main/acal.html",
        },
        {
          icon: <HiExternalLink size={25} />,
          href: "https://aadilmughal786.github.io/simple-web-project/acal.html",
        },
      ],
      name: "ACulator",
      description:
        "It is a simple calculator which do basic stuff computation and fully responsive in any device",
      tools: ["JavaScript", "html", "CSS"],
    },
    {
      id: 5,
      icon: <SlCalculator size={50} />,
      links: [
        {
          icon: <SiGithub size={20} />,
          href: "https://github.com/aadilmughal786/simple-web-project/blob/main/acal.html",
        },
        {
          icon: <HiExternalLink size={25} />,
          href: "https://aadilmughal786.github.io/simple-web-project/acal.html",
        },
      ],
      name: "ACulator",
      description:
        "It is a simple calculator which do basic stuff computation and fully responsive in any device",
      tools: ["JavaScript", "html", "CSS"],
    },
    {
      id: 6,
      icon: <SlCalculator size={50} />,
      links: [
        {
          icon: <SiGithub size={20} />,
          href: "https://github.com/aadilmughal786/simple-web-project/blob/main/acal.html",
        },
        {
          icon: <HiExternalLink size={25} />,
          href: "https://aadilmughal786.github.io/simple-web-project/acal.html",
        },
      ],
      name: "ACulator",
      description:
        "It is a simple calculator which do basic stuff computation and fully responsive in any device",
      tools: ["JavaScript", "html", "CSS"],
    },
    {
      id: 7,
      icon: <SlCalculator size={50} />,
      links: [
        {
          icon: <SiGithub size={20} />,
          href: "https://github.com/aadilmughal786/simple-web-project/blob/main/acal.html",
        },
        {
          icon: <HiExternalLink size={25} />,
          href: "https://aadilmughal786.github.io/simple-web-project/acal.html",
        },
      ],
      name: "ACulator",
      description:
        "It is a simple calculator which do basic stuff computation and fully responsive in any device",
      tools: ["JavaScript", "html", "CSS"],
    },
    {
      id: 8,
      icon: <SlCalculator size={50} />,
      links: [
        {
          icon: <SiGithub size={20} />,
          href: "https://github.com/aadilmughal786/simple-web-project/blob/main/acal.html",
        },
        {
          icon: <HiExternalLink size={25} />,
          href: "https://aadilmughal786.github.io/simple-web-project/acal.html",
        },
      ],
      name: "ACulator",
      description:
        "It is a simple calculator which do basic stuff computation and fully responsive in any device",
      tools: ["JavaScript", "html", "CSS"],
    },
    {
      id: 9,
      icon: <SlCalculator size={50} />,
      links: [
        {
          icon: <SiGithub size={20} />,
          href: "https://github.com/aadilmughal786/simple-web-project/blob/main/acal.html",
        },
        {
          icon: <HiExternalLink size={25} />,
          href: "https://aadilmughal786.github.io/simple-web-project/acal.html",
        },
      ],
      name: "ACulator",
      description:
        "It is a simple calculator which do basic stuff computation and fully responsive in any device",
      tools: ["JavaScript", "html", "CSS"],
    },
    {
      id: 10,
      icon: <SlCalculator size={50} />,
      links: [
        {
          icon: <SiGithub size={20} />,
          href: "https://github.com/aadilmughal786/simple-web-project/blob/main/acal.html",
        },
        {
          icon: <HiExternalLink size={25} />,
          href: "https://aadilmughal786.github.io/simple-web-project/acal.html",
        },
      ],
      name: "ACulator",
      description:
        "It is a simple calculator which do basic stuff computation and fully responsive in any device",
      tools: ["JavaScript", "html", "CSS"],
    },
    {
      id: 11,
      icon: <SlCalculator size={50} />,
      links: [
        {
          icon: <SiGithub size={20} />,
          href: "https://github.com/aadilmughal786/simple-web-project/blob/main/acal.html",
        },
        {
          icon: <HiExternalLink size={25} />,
          href: "https://aadilmughal786.github.io/simple-web-project/acal.html",
        },
      ],
      name: "I aqm java",
      description:
        "It is a simple calculator which do basic stuff computation and fully responsive in any device",
      tools: ["JavaScript", "html", "CSS"],
    },
    // {
    //   id: 12,
    //   icon: <SlCalculator size={50} />,
    //   links: [
    //     {
    //       icon: <SiGithub size={20} />,
    //       href: "https://github.com/aadilmughal786/simple-web-project/blob/main/acal.html",
    //     },
    //     {
    //       icon: <HiExternalLink size={25} />,
    //       href: "https://aadilmughal786.github.io/simple-web-project/acal.html",
    //     },
    //   ],
    //   name: "Kon ho tum",
    //   description:
    //     "It is a simple calculator which do basic stuff computation and fully responsive in any device",
    //   tools: ["JavaScript", "html", "CSS"],
    // },
  ],
}

export default data
