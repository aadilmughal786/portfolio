import * as React from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import ThemeToggleBtn from "./theme-toggle-btn"
import { Link } from "gatsby"
import data, { socilaIconStyle } from "../../data/nav-bar"
import Drawer from "./drawer"

const NavBar = () => {
  const [showDrawer, setShowDrawer] = React.useState(false)

  return (
    <div className="supports-backdrop-blur:bg-white/50 sticky top-0 z-40 flex w-full flex-col gap-4 border-b border-slate-900/10 bg-white/50 py-3 backdrop-blur dark:border-slate-50/[0.06] dark:bg-transparent">
      <div
        className={` flex items-center justify-between px-4 sm:px-8 lg:px-16 ${
          showDrawer &&
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
              className="font-semibold  tracking-wide  hover:text-sky-900 dark:hover:text-sky-300"
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
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* drawer toggler btn */}
          <div className="md:hidden ">
            {showDrawer ? (
              <XMarkIcon
                onClick={e => setShowDrawer(false)}
                className={`h-6 w-6 ${socilaIconStyle}`}
              />
            ) : (
              <Bars3Icon
                onClick={e => setShowDrawer(true)}
                className={`h-6 w-6 ${socilaIconStyle}`}
              />
            )}
          </div>
        </div>
      </div>
      <Drawer data={data} showDrawer={showDrawer} />
    </div>
  )
}

export default NavBar
