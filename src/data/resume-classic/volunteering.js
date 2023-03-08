import React from "react"
import { MdVolunteerActivism } from "react-icons/md"
import yefLogo from "../../images/volunteer/yef.jpeg"

import { socilaIconStyle } from "./education"

const data = {
  title: "Volunteering",
  icon: <MdVolunteerActivism size={16} className={socilaIconStyle} />,
  items: [
    {
      id: 1,
      logo: yefLogo,
      altText: "yef logo",
      role: "Volunteer",
      organization: "Youth Empowerment Foundation",
      organizationWebsite: "https://yefindia.org",
      cause: "Education",
      descriptions: [
        "Volunteers do not necessarily have the time, they just have a Heart.",
        "There is no better exercise for your heart than reaching down and helping to lift someone up",
      ],
    },
  ],
}

export default data
