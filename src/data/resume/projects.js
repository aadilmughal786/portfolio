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
    projectName: "Calculator",
    href: "https://aadilmughal786.github.io/simple-web-project/acal.html",
  },
  {
    projectName: "KeyCode",
    href: "https://aadilmughal786.github.io/simple-web-project/keyCode.html",
  },
  {
    projectName: "Debit-Card",
    href: "https://aadilmughal786.github.io/simple-web-project/debitCard.html",
  },
  {
    projectName: "Analog-Clock",
    href: "https://aadilmughal786.github.io/simple-web-project/dclock.html",
  },
  {
    projectName: "Drum-Kit",
    href: "https://aadilmughal786.github.io/simple-web-project/AdrumKit.html",
  },
  {
    projectName: "WeatherUI-card",
    href: "https://aadilmughal786.github.io/simple-web-project/weatherui.html",
  },
  {
    projectName: "glassCard",
    href: "https://aadilmughal786.github.io/simple-web-project/glassCard.html",
  },
  {
    projectName: "Clippath-css",
    href: "https://aadilmughal786.github.io/simple-web-project/clippathcss.html",
  },
  {
    projectName: "Css-Variables",
    href: "https://aadilmughal786.github.io/simple-web-project/cssvar.html",
  },
  {
    projectName: "Glassy-Site1",
    href: "https://aadilmughal786.github.io/simple-web-project/glasssite1.html",
  },
  {
    projectName: "LoginPage-Hue",
    href: "https://aadilmughal786.github.io/simple-web-project/loginhue.html",
  },
  {
    projectName: "Web-Filters",
    href: "https://aadilmughal786.github.io/simple-web-project/webfilters.html",
  },
  {
    projectName: "Dinosour",
    href: "https://aadilmughal786.github.io/simple-web-project/dino.html",
  },
  {
    projectName: "Flex-Galary",
    href: "https://aadilmughal786.github.io/simple-web-project/flexgal.html",
  },
]

const projects2 = [
  {
    projectName: "React-Mui-Project",
    href: "https://aadilmughal786.github.io/reactmui",
  },
]

const projects3 = [
  {
    projectName: "Aculator-Tkinter",
    href: "https://github.com/aadilmughal786/ACulator-Tkinter",
  },
  {
    projectName: "Color-Picker",
    href: "https://github.com/aadilmughal786/colorv2-Tkinter",
  },
  {
    projectName: "Linux-Distro-Scraper-from-wikipedia",
    href: "https://github.com/aadilmughal786/Python-Projects/blob/main/Linux%20Distro%20Scraper%20from%20wikipidia/main.py",
  },
  {
    projectName: "ASCII-Arts",
    href: "https://github.com/aadilmughal786/ascii-arts",
  },
  {
    projectName: "Handwritten-Character-Recognition",
    href: "https://github.com/aadilmughal786/Handwritten-character-recognition/blob/main/ml%20project%20code.ipynb",
  },
  {
    projectName: "Google-Image-Scraper",
    href: "https://github.com/aadilmughal786/Python-Projects/blob/main/google-image-scraper/main.py",
  },
  {
    projectName: "Drawing-App-Tkinter",
    href: "https://github.com/aadilmughal786/Python-Projects",
  },
  {
    projectName: "Steganography",
    href: "https://github.com/aadilmughal786/Python-Projects",
  },
  {
    projectName: "Cricket-Fastest-Hundreds-Scraper",
    href: "https://github.com/aadilmughal786/Python-Projects",
  },
]

const projects4 = [
  {
    projectName: "Searching",
    href: "https://github.com/aadilmughal786/cp-dsa/tree/main/search%20algorithm",
  },
  {
    projectName: "Play-with-bits",
    href: "https://aadilmughal786.github.io/simple-web-project/notesApp.html",
  },
  {
    projectName: "Shorting",
    href: "https://github.com/aadilmughal786/cp-dsa/tree/main/search%20algorithm",
  },
]

const projects5 = [
  {
    projectName: "Faba",
    href: "#",
  },
]

const projects6 = [
  {
    projectName: "Hack-The-Virtual-Memory(C strings & /proc)",
    href: "https://github.com/aadilmughal786/Linux-and-Scripting/tree/main/Hack%20The%20Virtual%20Memory:%20C%20strings%20%26%20proc",
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
