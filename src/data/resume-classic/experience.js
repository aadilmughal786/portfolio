import React from "react"
import { GiSkills } from "react-icons/gi"
import { socilaIconStyle } from "./education"

const data = {
  title: "Experience",
  icon: <GiSkills size={16} className={socilaIconStyle} />,
  items: [
    {
      id: 1,
      //   single or multiple
      roleCount: "single",
      logo: "",
      name: "",
      type: "",
    },

    {
      id: 2,
      type: "signle",
    },
  ],
}

export default data
