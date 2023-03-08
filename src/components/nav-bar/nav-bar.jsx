import * as React from "react"
import { Bars3Icon, XMarkIcon, HeartIcon } from "@heroicons/react/24/solid"
import ThemeToggleBtn from "./theme-toggle-btn"
import { Link } from "gatsby"
import data, { socilaIconStyle } from "../../data/nav-bar"
import Anchor from "../footer/anchor"

const NavBar = () => {
  const [drawer, setDrawer] = React.useState(false)
  return (
    <div className="supports-backdrop-blur:bg-white/50 sticky top-0 z-40 flex w-full flex-col gap-4 border-b border-slate-900/10 bg-white/50 py-3 backdrop-blur dark:border-slate-50/[0.06] dark:bg-transparent">
      <div
        className={` flex items-center justify-between px-4 sm:px-8 ${
          drawer &&
          " border-b pb-3 dark:border-slate-50/[0.06] dark:bg-transparent md:border-b-0 md:pb-0 "
        }`}
      >
        {/* left-part :: site logo */}
        <Link
          to={data.left.to}
          className="text-xl font-bold text-sky-500 hover:text-sky-900 dark:text-sky-400 dark:hover:text-sky-300"
        >
          {data.left.siteName} {data.left.siteLogo}
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
            {data.right.map(item => (
              <a key={item.id} href={item.link} target="_blank">
                {item.icon}
              </a>
            ))}
          </div>

          {/* drawer toggler btn */}
          <div className="md:hidden ">
            {drawer ? (
              <XMarkIcon
                onClick={e => setDrawer(false)}
                className={`h-6 w-6 ${socilaIconStyle}`}
              />
            ) : (
              <Bars3Icon
                onClick={e => setDrawer(true)}
                className={`h-6 w-6 ${socilaIconStyle}`}
              />
            )}
          </div>
        </div>
      </div>
      {/* Mobile Drawer */}
      <div
        className={`flex flex-col gap-4 md:hidden ${
          drawer ? "block" : "hidden"
        }`}
      >
        {data.mid.map((item, index) => (
          <div className="flex items-center gap-4 px-4 sm:px-8">
            {item.icon}
            <Link
              key={item.id}
              to={item.to}
              className="font-semibold text-slate-600 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-300"
            >
              {item.label}
            </Link>
          </div>
        ))}

        {/* socail site icons mobile */}
        <div className="flex items-center gap-4 border-t border-slate-900/10 px-4 pt-3 dark:border-slate-50/[0.1] sm:hidden sm:px-8 md:border-0 md:pr-0">
          {data.right.map(item => (
            <a key={item.id} href={item.link} target="_blank">
              {item.icon}
            </a>
          ))}
        </div>
        {/* made with gatsby */}
        <div className="flex items-center gap-4 border-t border-slate-900/10 px-4 pt-3 text-slate-700 dark:border-slate-50/[0.1] dark:text-slate-200 sm:hidden sm:px-8 md:border-0 md:pr-0">
          {data.made.text1}
          <HeartIcon className="inline-block h-4 w-4 text-red-400 " />
          {data.made.text2}
          <Anchor {...data.made.gatsby} />
        </div>
      </div>
    </div>
  )
}

export default NavBar
