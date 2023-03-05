import * as React from "react"
import {
  FaGithub,
  FaLinkedin,
  FaCodepen,
  FaStackOverflow,
} from "react-icons/fa"

import {
  HomeIcon,
  UserIcon,
  DocumentIcon,
  BeakerIcon,
  HeartIcon,
} from "@heroicons/react/24/solid"

export const socilaIconStyle =
  "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"

const data = {
  left: {
    siteLogo: <HeartIcon className="inline-block h-5 w-5" />,
    siteName: "Aa",
    to: "/",
  },
  mid: [
    {
      id: 1,
      label: "Home",
      icon: <HomeIcon className={`h-5 w-5 ${socilaIconStyle}`} />,
      to: "/",
    },
    {
      id: 2,
      label: "Contact",
      icon: <UserIcon className={`h-5 w-5 ${socilaIconStyle}`} />,

      to: "/",
    },
    {
      id: 3,
      label: "Resume",
      icon: <DocumentIcon className={`h-5 w-5 ${socilaIconStyle}`} />,
      to: "/",
    },
    {
      id: 4,
      label: "Projects",
      icon: <BeakerIcon className={`h-5 w-5 ${socilaIconStyle}`} />,
      to: "/",
    },
  ],
  right: [
    {
      id: 1,
      link: "https://github.com/aadilmughal786",
      icon: <FaGithub size={19} className={socilaIconStyle} />,
    },
    {
      id: 2,
      link: "https://codepen.io/nevergiveup786",
      icon: <FaCodepen size={19} className={socilaIconStyle} />,
    },
    {
      id: 3,
      link: "https://www.linkedin.com/in/aadil-mugal-146bb818a",
      icon: <FaLinkedin size={19} className={socilaIconStyle} />,
    },
    {
      id: 4,
      link: "https://stackoverflow.com/users/13190044/aadil-mughal",
      icon: <FaStackOverflow size={19} className={socilaIconStyle} />,
    },
  ],

  // data from footer and need Anchor component of footer
  made: {
    text1: "Made with ",
    heartIcon: <HeartIcon className="inline-block h-4 w-4 text-red-400 " />,
    text2: " and ",
    gatsby: {
      label: "gatsby",
      link: "https://www.gatsbyjs.com",
    },
  },
}

export default data
