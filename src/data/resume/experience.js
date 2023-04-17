import React from "react"
import { BsPostcardHeartFill } from "react-icons/bs"
import { socilaIconStyle } from "./education"
import { CgOrganisation } from "react-icons/cg"

const data = {
  title: "Experience",
  icon: <BsPostcardHeartFill size={16} className={socilaIconStyle} />,
  items: [
    // {
    //   id: 1,
    //   //   single or multiple
    //   position: "single",
    //   icon: <CgOrganisation size={40} className={socilaIconStyle} />,
    //   role: "Web developer Intern",
    //   name: "Jalan Technology Consulting",
    //   time: "Full-Time",
    //   start: new Date(2022, 10 - 1),
    //   end: "present",
    //   location: "Remote",
    //   points: [
    //     "Developed, improved, and operated web-based software.",
    //     "Created responsive web apps.",
    //     "Collaborated with team members to implement feature updates.",
    //     "Write clean code, drive technical design, and take responsibility for technical delivery.",
    //     "The technology used like Gatsby, Strapi, React, JavaScript, HTML, Git, CSS, etc.",
    //   ],
    // },

    {
      id: 2,
      position: "multiple",
      icon: <CgOrganisation size={40} className={socilaIconStyle} />,
      name: "Jalan Technology Consulting",
      time: "Full-Time",
      start: new Date(2022, 10 - 1),
      end: "present",
      positions: [
        {
          role: "Software Intern",
          start: new Date(2022, 10 - 1),
          end: new Date(2023, 4 - 1),
          location: "Remote",
        },
        {
          role: "Software Engineer",
          start: new Date(2023, 5 - 1),
          end: "present",
          location: "Remote",
        },
      ],
      points: [
        "Developed, improved, and operated web-based software.",
        "Created responsive web apps.",
        "Collaborated with team members to implement feature updates.",
        "Write clean code, drive technical design, and take responsibility for technical delivery.",
        "The technology used like Gatsby, Strapi, React, JavaScript, HTML, Git, CSS, etc.",
      ],
    },
  ],
}

export default data
