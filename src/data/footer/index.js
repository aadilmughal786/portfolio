import React from "react"
import { HeartIcon } from "@heroicons/react/24/solid"
import { FiArrowUp } from "react-icons/fi"

const data = {
  copyrightChar: "© ",
  year: `${new Date().getFullYear()} `,
  dev: {
    label: "Aadil Mugal",
    link: "https://github.com/aadilmughal786",
  },

  made: {
    text1: "Made with ",
    heartIcon: <HeartIcon className="inline-block h-4 w-4 text-red-400 " />,
    text2: " and ",
    gatsby: {
      label: "gatsby",
      link: "https://www.gatsbyjs.com",
    },
  },

  goToTopIcon: (
    <FiArrowUp
      size={19}
      className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-sky-300"
    />
  ),
}

export default data
