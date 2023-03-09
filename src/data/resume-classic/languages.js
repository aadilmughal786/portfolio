import React from "react"
import { FaLanguage } from "react-icons/fa"
import { socilaIconStyle } from "./education"

const data = {
  title: "Language",
  icon: <FaLanguage size={25} className={socilaIconStyle} />,
  items: [
    {
      id: 1,
      language: "English",
      Proficiency: "Professional working proficiency",
    },
    {
      id: 2,
      language: "Hindi",
      Proficiency: "Native or bilingual proficiency",
    },
    {
      id: 3,
      language: "Rajasthani",
      Proficiency: "Native or bilingual proficiency",
    },
  ],
}

export default data
