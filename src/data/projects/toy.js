import React from "react"
import { SlCalculator } from "react-icons/sl"
import { SiGithub, SiTodoist, SiMicrosofttranslator } from "react-icons/si"
import { HiExternalLink } from "react-icons/hi"
import { MdOutlineFolderOpen as DefaultIcon } from "react-icons/md"
import { GiDinosaurRex, GiForkKnifeSpoon } from "react-icons/gi"
import { BsClock } from "react-icons/bs"
import { AiFillContacts } from "react-icons/ai"
import { TiWeatherPartlySunny } from "react-icons/ti"

const data = {
  label: "Toy Projects",
  projects: [
    {
      icon: <SiMicrosofttranslator size={50} />,
      links: [
        {
          icon: <SiGithub size={20} />,
          href: "https://github.com/aadilmughal786/simple-web-project/blob/main/translator.html",
        },
        {
          icon: <HiExternalLink size={25} />,
          href: "https://aadilmughal786.github.io/simple-web-project/translator.html",
        },
      ],
      name: "Language Translator",
      description: "A app like google translator",
      tools: ["JavaScript", "html", "CSS"],
    },

    {
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
        "A simple notes taking app which do basic notes stuff and use browser's local storage to preserve your data for furder use",
      tools: ["JavaScript", "html", "CSS"],
    },

    {
      icon: <DefaultIcon size={60} />,
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
      description: "A glassy look web project for fun and learn",
      tools: ["JavaScript", "html", "CSS"],
    },

    {
      icon: <GiDinosaurRex size={50} />,
      links: [
        {
          icon: <SiGithub size={20} />,
          href: "https://github.com/aadilmughal786/simple-web-project/tree/main/dinosour_game",
        },
        {
          icon: <HiExternalLink size={25} />,
          href: "https://aadilmughal786.github.io/simple-web-project/dino.html",
        },
      ],
      name: "Dinosour game",
      description: "A Dinosour game just for full",
      tools: ["JavaScript", "html", "CSS", "Local Storage"],
    },

    {
      icon: <DefaultIcon size={60} />,
      links: [
        {
          icon: <SiGithub size={20} />,
          href: "https://github.com/aadilmughal786/simple-web-project/blob/main/flexgal.html",
        },
        {
          icon: <HiExternalLink size={25} />,
          href: "https://aadilmughal786.github.io/simple-web-project/flexgal.html",
        },
      ],
      name: "Flex galary",
      description: "A simple image galary using css flexbox layout",
      tools: ["JavaScript", "html", "CSS", "Flexbox"],
    },

    {
      icon: <BsClock size={50} />,
      links: [
        {
          icon: <SiGithub size={20} />,
          href: "https://github.com/aadilmughal786/simple-web-project/blob/main/dclock.html",
        },
        {
          icon: <HiExternalLink size={25} />,
          href: "https://aadilmughal786.github.io/simple-web-project/dclock.html",
        },
      ],
      name: "Analog clock",
      description: "A beautiful and simple analog clock",
      tools: ["JavaScript", "html", "CSS"],
    },

    {
      icon: <DefaultIcon size={60} />,
      links: [
        {
          icon: <SiGithub size={20} />,
          href: "https://github.com/aadilmughal786/simple-web-project/blob/main/loginhue.html",
        },
        {
          icon: <HiExternalLink size={25} />,
          href: "https://aadilmughal786.github.io/simple-web-project/loginhue.html",
        },
      ],
      name: "Login form",
      description: "A simple login form UI",
      tools: ["JavaScript", "html", "CSS"],
    },

    {
      icon: <AiFillContacts size={50} />,
      links: [
        {
          icon: <SiGithub size={20} />,
          href: "https://github.com/aadilmughal786/simple-web-project/blob/main/glassCard.html",
        },
        {
          icon: <HiExternalLink size={25} />,
          href: "https://aadilmughal786.github.io/simple-web-project/glassCard.html",
        },
      ],
      name: "Contact Card",
      description: "Glassy lokking contact catd UI",
      tools: ["JavaScript", "html", "CSS"],
    },

    {
      icon: <TiWeatherPartlySunny size={50} />,
      links: [
        {
          icon: <SiGithub size={20} />,
          href: "https://github.com/aadilmughal786/simple-web-project/blob/main/weatherui.html",
        },
        {
          icon: <HiExternalLink size={25} />,
          href: "https://aadilmughal786.github.io/simple-web-project/weatherui.html",
        },
      ],
      name: "Weather UI",
      description: "A simple glassy lokking weather info card",
      tools: ["JavaScript", "html", "CSS"],
    },

    {
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
        "A simple calculator which do basic stuff computation and fully responsive in any device",
      tools: ["JavaScript", "html", "CSS"],
    },

    {
      icon: <GiForkKnifeSpoon size={50} />,
      links: [
        {
          icon: <SiGithub size={20} />,
          href: "https://github.com/aadilmughal786/The-Odin-Project/tree/main/Foundations/odin-recipes",
        },
        {
          icon: <HiExternalLink size={25} />,
          href: "https://aadilmughal786.github.io/The-Odin-Project/Foundations/odin-recipes/index.html",
        },
      ],
      name: "My favourite Recipes",
      description: "A Simple project on my favourite food Recipes",
      tools: ["JavaScript", "html", "CSS"],
    },

    {
      icon: <BsClock size={50} />,
      links: [
        {
          icon: <SiGithub size={20} />,
          href: "https://github.com/aadilmughal786/simple-web-project/blob/main/aclock.html",
        },
        {
          icon: <HiExternalLink size={25} />,
          href: "https://aadilmughal786.github.io/simple-web-project/aclock.html",
        },
      ],
      name: "Digital clock",
      description: "A beautiful and simple digital clock",
      tools: ["JavaScript", "html", "CSS"],
    },

    {
      icon: <DefaultIcon size={50} />,
      links: [
        {
          icon: <SiGithub size={20} />,
          href: "https://github.com/aadilmughal786/Python-Projects/tree/main/White%20Board",
        },
      ],
      name: "White Board",
      description: "A simple white board using tkinter",
      tools: ["Python", "Tkinter", "canvas"],
    },

    {
      icon: <DefaultIcon size={50} />,
      links: [
        {
          icon: <SiGithub size={20} />,
          href: "https://github.com/aadilmughal786/Python-Projects/tree/main/Linux%20Distro%20Scraper%20from%20wikipidia",
        },
      ],
      name: "Distro Scrapper",
      description: "A scrapper script for linux distro table",
      tools: ["Python", "sqlite3", "mechanicalsoup"],
    },
  ],
}

export default data
