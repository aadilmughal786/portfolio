import React from "react"
import { FaBell, FaThumbsUp, FaYoutube } from "react-icons/fa"
import { socilaIconStyle } from "./education"

const data = {
  title: "YouTube",
  icon: <FaYoutube size={18} className={socilaIconStyle} />,
  thumbUpIcon: <FaThumbsUp size={14} className={socilaIconStyle} />,
  bellIcon: <FaBell size={14} className={socilaIconStyle} />,
  text1: "Like and",
  text2: "Subscribe",
  videoLink: "https://www.youtube.com/embed/_Vgsjz5d3ow",
}

export default data
