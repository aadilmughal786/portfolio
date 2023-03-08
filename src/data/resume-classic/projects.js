import React from "react"
import {
  FaCodepen,
  FaLaptopCode,
  FaLinux,
  FaPython,
  FaReact,
  FaSlidersH,
  FaUserNinja,
} from "react-icons/fa"
import { socilaIconStyle } from "./education"

// Projects Array with Project Name and it's link

const projects1 = [
  {
    projectName: "NotesApp",
    href: "https://aadilmughal786.github.io/simple-web-project/notesApp.html",
  },
  {
    projectName: "NotesApp",
    href: "https://aadilmughal786.github.io/simple-web-project/notesApp.html",
  },
  {
    projectName: "NotesApp",
    href: "https://aadilmughal786.github.io/simple-web-project/notesApp.html",
  },
]
const projects2 = [
  {
    projectName: "NotesApp",
    href: "https://aadilmughal786.github.io/simple-web-project/notesApp.html",
  },
  {
    projectName: "NotesApp",
    href: "https://aadilmughal786.github.io/simple-web-project/notesApp.html",
  },
  {
    projectName: "NotesApp",
    href: "https://aadilmughal786.github.io/simple-web-project/notesApp.html",
  },
]
const projects3 = [
  {
    projectName: "NotesApp",
    href: "https://aadilmughal786.github.io/simple-web-project/notesApp.html",
  },
  {
    projectName: "NotesApp",
    href: "https://aadilmughal786.github.io/simple-web-project/notesApp.html",
  },
  {
    projectName: "NotesApp",
    href: "https://aadilmughal786.github.io/simple-web-project/notesApp.html",
  },
]
const projects4 = [
  {
    projectName: "NotesApp",
    href: "https://aadilmughal786.github.io/simple-web-project/notesApp.html",
  },
  {
    projectName: "NotesApp",
    href: "https://aadilmughal786.github.io/simple-web-project/notesApp.html",
  },
  {
    projectName: "NotesApp",
    href: "https://aadilmughal786.github.io/simple-web-project/notesApp.html",
  },
]
const projects5 = [
  {
    projectName: "NotesApp",
    href: "https://aadilmughal786.github.io/simple-web-project/notesApp.html",
  },
  {
    projectName: "NotesApp",
    href: "https://aadilmughal786.github.io/simple-web-project/notesApp.html",
  },
  {
    projectName: "NotesApp",
    href: "https://aadilmughal786.github.io/simple-web-project/notesApp.html",
  },
]
const projects6 = [
  {
    projectName: "NotesApp",
    href: "https://aadilmughal786.github.io/simple-web-project/notesApp.html",
  },
  {
    projectName: "NotesApp",
    href: "https://aadilmughal786.github.io/simple-web-project/notesApp.html",
  },
  {
    projectName: "NotesApp",
    href: "https://aadilmughal786.github.io/simple-web-project/notesApp.html",
  },
]

// main data
const data = {
  title: "Projects",
  icon: <FaSlidersH size={16} className={socilaIconStyle} />,
  items: [
    {
      id: 1,
      icon: <FaCodepen size={30} className={socilaIconStyle} />,
      title: "CodePan & Web Projects Collection",
      chips: [
        "HTML",
        "CSS",
        "Bootstrap",
        "Fontawesome",
        "JavaScript",
        "Local Stograge",
      ],
      description:
        "Various projects made with html5, css3,javascript and various tools and technologies",
      projects: projects1,
    },
    {
      id: 2,
      icon: <FaReact size={30} className={socilaIconStyle} />,
      title: "React & NodeJS Projects",
      chips: [
        "ReactJS",
        "NodeJS",
        "MonogoDB",
        "ExpressJS",
        "Material-UI",
        "REST-APIs",
        "CRUD App",
        "Frontend",
        "Backend",
        "RDBMS",
      ],
      description:
        "Web app made with various technologies like ractjs, nodejs, expressjs, mongodb, matrialui, api ...etc",
      projects: projects2,
    },
    {
      id: 3,
      icon: <FaPython size={30} className={socilaIconStyle} />,
      title: "Python Projects",
      chips: [
        "Python",
        "AI",
        "ML",
        "SQLite",
        "NumPy",
        "Pandas",
        "Web Scraping",
        "Tkinter",
      ],
      description:
        "Various Python projects like simple app, ai-ml projects and web scraping stuff. Python is just awesome language.",
      projects: projects3,
    },
    {
      id: 4,
      icon: <FaLaptopCode size={30} className={socilaIconStyle} />,
      title: "Competitive Coding Library in C++",
      chips: ["CP", "DS", "Algorithm", "Fun", "Puzzles"],
      description:
        "This is my personal competitive Coding library in C++. Feel free to fork and Pull Request",
      projects: projects4,
    },
    {
      id: 5,
      icon: <FaUserNinja size={30} className={socilaIconStyle} />,
      title: "UI-UX, Graphic Design Projects",
      chips: ["Figma", "UI", "UX", "SVG", "Canva", "Inkscape"],
      description:
        "Projects made with help of Figma, Inkscape, Canva and other tools. User experience and interfaces.",
      projects: projects5,
    },
    {
      id: 6,
      icon: <FaLinux size={30} className={socilaIconStyle} />,
      title: "Linux, Scripting & Fun",
      chips: [
        "Python Scripting",
        "Bash Scripting",
        "Shell",
        "Linux",
        "Hacks/Tricks",
        "C/CPP",
        "OS",
      ],
      description:
        "Scripts and Projects to make fun with operating system and other cool stuff using python, bash and c/c++. Linux is just awesome.",
      projects: projects6,
    },
  ],
}

export default data
