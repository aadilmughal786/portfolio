import React from "react"
import {
  FaAngleDown,
  FaAngleUp,
  FaCodepen,
  FaFoursquare,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaYoutube,
} from "react-icons/fa"
import { socilaIconStyle } from "./education"

const ICON_SIZE = 20

const data = {
  title: "Follows",
  icon: <FaFoursquare size={16} className={socilaIconStyle} />,
  items: [
    {
      id: 1,
      icon: <FaGithub size={ICON_SIZE} className={socilaIconStyle} />,
      label: "GitHub",
      href: "https://github.com/aadilmughal786",
    },
    {
      id: 2,
      icon: <FaLinkedin size={ICON_SIZE} className={socilaIconStyle} />,
      label: "Linkedin",
      href: "https://www.linkedin.com/in/aadil-mugal-146bb818a",
    },
    {
      id: 3,
      icon: <FaStackOverflow size={ICON_SIZE} className={socilaIconStyle} />,
      label: "Stackoverflow",
      href: "https://stackoverflow.com/users/13190044/aadil-mughal",
    },
    {
      id: 4,
      icon: <FaCodepen size={ICON_SIZE} className={socilaIconStyle} />,
      label: "CodePen",
      href: "https://codepen.io/nevergiveup786",
    },
    {
      id: 5,
      icon: <FaYoutube className={socilaIconStyle} size={ICON_SIZE} />,
      label: "YouTube",
      href: "https://www.youtube.com/channel/UCwu1NeYOe5r1La0A0VuCbIA",
    },
    {
      id: 6,
      icon: <FaInstagram className={socilaIconStyle} size={ICON_SIZE} />,
      label: "Instagram",
      href: "https://www.instagram.com/aadil0x7f",
    },
  ],

  arrowUp: <FaAngleUp />,
  arrowDown: <FaAngleDown />,
}
export default data
