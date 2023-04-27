import React from "react"
import { ArrowLongRightIcon } from "@heroicons/react/24/solid"
import bg from "../../images/resume-classic/pdf-card-bg.svg"
import resumePDF from "./aadil-mugal-resume.pdf"

const data = {
  bg: bg,
  link: {
    label: "PDF Version",
    href: resumePDF,
    icon: <ArrowLongRightIcon />,
  },
}

export default data
