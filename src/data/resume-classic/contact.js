import React from "react"
import { FaStaylinked, FaPaperPlane, FaPhoneAlt } from "react-icons/fa"
import { HiHome } from "react-icons/hi"
import { socilaIconStyle } from "./education"

const data = {
  title: "Contact",
  icon: <FaStaylinked size={16} className={socilaIconStyle} />,
  item: [
    {
      id: 1,
      icon: <FaPaperPlane size={16} className={socilaIconStyle} />,
      label: "Aadilshe786@gmail.com",
      href: "mailto:aadilshe786@gmail.com",
    },
    {
      id: 2,
      icon: <FaPhoneAlt size={16} className={socilaIconStyle} />,
      label: "(+91) 77269 89416",
      href: "tel:+917726989416",
    },
  ],
  home: {
    icon: <HiHome size={20} className={socilaIconStyle} />,
    label: "Jhunjhunu, Rajasthan, India",
  },
}

export default data
