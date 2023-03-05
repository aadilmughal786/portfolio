import * as React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { Bars3Icon, XMarkIcon, HeartIcon } from "@heroicons/react/24/solid"
import ThemeToggleBtn from "./theme-toggle-btn"
import { Link } from "gatsby"
import data from "../../data/nav-bar"

const socilaIconStyle =
  "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"

const NavBar = () => (
  <div className="supports-backdrop-blur:bg-white/60 sticky top-0 z-40 flex w-full items-center justify-between border-b border-slate-900/10 bg-white/95 px-4 py-3 backdrop-blur dark:border-slate-50/[0.06] dark:bg-transparent sm:px-8">
    {/* left-part :: site logo */}
    <Link
      to={data.left.to}
      className="text-xl font-bold text-sky-500 hover:text-sky-900 dark:text-sky-400 dark:hover:text-sky-300"
    >
      {data.left.siteName} <HeartIcon className="inline-block h-5 w-5" />
    </Link>

    {/* mid-part :: options */}
    <div className="hidden items-center gap-4 text-sm font-medium leading-6 text-slate-700 dark:text-slate-200 md:flex">
      {data.mid.map(item => (
        <Link
          key={item.id}
          to={item.to}
          className="font-semibold text-slate-600 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-300"
        >
          {item.label}
        </Link>
      ))}
    </div>

    {/* right-part :: links, theme and toggle-btn */}
    <div className="inline-flex items-center gap-4">
      {/* theme switch btn */}
      <ThemeToggleBtn />

      {/* socail site icons */}
      <div className="hidden items-center gap-4 border-r border-slate-900/10 pr-4 dark:border-slate-50/[0.1] sm:flex md:border-0 md:pr-0">
        <a href={data.right.gitHubLink}>
          <FaGithub size={19} className={socilaIconStyle} />
        </a>
        <a href={data.right.linkInLink}>
          <FaLinkedin size={19} className={socilaIconStyle} />
        </a>
      </div>

      {/* drawer toggler btn */}
      <div className="md:hidden ">
        <Bars3Icon className={`h-6 w-6 ${socilaIconStyle}`} />
        {/* <XMarkIcon className="w-6 dark:text-white" /> */}
      </div>
    </div>
  </div>
)

export default NavBar
