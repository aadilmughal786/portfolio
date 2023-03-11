import React from "react"
import { GiCoffeeMug } from "react-icons/gi"
import { AiFillProject } from "react-icons/ai"
import { SiCoursera } from "react-icons/si"
import { FaSmile } from "react-icons/fa"
import { socilaIconStyle } from "../nav-bar/index"

const ICON_SIZE = 50

const data = {
  label: "Facts",
  description: "These are some fact about me",
  facts: [
    {
      icon: <GiCoffeeMug size={ICON_SIZE} className={socilaIconStyle} />,
      value: "IDK",
      label: "Cup Of Coffee",
    },
    {
      icon: <AiFillProject size={ICON_SIZE} className={socilaIconStyle} />,
      value: "20+",
      label: "Project Done",
    },
    {
      icon: <FaSmile size={ICON_SIZE} className={socilaIconStyle} />,
      value: "6M",
      label: "Experience In Web",
    },
    {
      icon: <SiCoursera size={ICON_SIZE} className={socilaIconStyle} />,
      value: "25+",
      label: "Courses Done",
    },
  ],
}

export default data
