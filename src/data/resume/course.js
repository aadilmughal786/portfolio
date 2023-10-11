import React from "react"
import { FaClipboardCheck, FaAtlassian } from "react-icons/fa"
import { HiLibrary } from "react-icons/hi"
import { socilaIconStyle } from "./education"

const data = {
  title: "Courses & Certificates",
  icon: <FaClipboardCheck size={16} className={socilaIconStyle} />,
  item: [
    {
      id: 1,
      icon: <HiLibrary size={25} className={socilaIconStyle} />,
      courseName: "HTML, CSS and Javascript for Web Developers",
      courseLink:
        "https://www.coursera.org/account/accomplishments/certificate/H4S2GTZE8T2H",
      instituteName: "Johns Hopkins University",
      time: "June 1, 2021",
    },
    {
      id: 2,
      icon: <HiLibrary size={25} className={socilaIconStyle} />,
      courseName: "Problem Solving Through Programming In C",
      courseLink:
        "https://drive.google.com/file/d/1wQ3fQXPxczvYPj1XTczrppbkAODDVuJD",
      instituteName: "IIT Kharagpur(nptel-94% Topper)",
      time: "Jan-Apr 2022",
    },
    {
      id: 3,
      icon: <HiLibrary size={25} className={socilaIconStyle} />,
      courseName: "NDG Linux Unhatched",
      courseLink:
        "https://drive.google.com/file/d/1Scfp18fqbzrpQUbz8TUAsdt9K-WnV6Uq",
      instituteName: "Cisco Virtual Academy",
      time: "Jul 26, 2021",
    },
    {
      id: 4,
      icon: <FaAtlassian size={20} className={socilaIconStyle} />,
      courseName: "Version Control with Git",
      courseLink:
        "https://www.coursera.org/account/accomplishments/certificate/JTQQ9QWBNB2J",
      instituteName: "Atlassian",
      time: "June 20, 2021",
    },
  ],
}

export default data
