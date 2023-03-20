import React from "react"
import Anchor from "../footer/anchor"
import { Link } from "gatsby"
import { HeartIcon } from "@heroicons/react/24/solid"

const Drawer = ({ data, showDrawer }) => {
  return (
    <div
      className={`flex flex-col gap-4 md:hidden ${
        showDrawer ? "block" : "hidden"
      }`}
    >
      {data.mid.map(item => (
        <div className="flex items-center gap-4 px-4 sm:px-8">
          {item.icon}
          <Link
            key={item.id}
            to={item.to}
            className="font-semibold  hover:text-sky-900  dark:hover:text-sky-300"
          >
            {item.label}
          </Link>
        </div>
      ))}

      {/* socail site icons mobile */}
      <div className="flex items-center gap-4 border-t border-slate-900/10 px-4 pt-3 dark:border-slate-50/[0.1] sm:hidden sm:px-8 md:border-0 md:pr-0">
        {data.right.map(item => (
          <a key={item.id} href={item.link} target="_blank" rel="noreferrer">
            {item.icon}
          </a>
        ))}
      </div>
      {/* made with gatsby */}
      <div className="flex items-center gap-1 border-t border-slate-900/10 px-4 pt-3 text-slate-700 dark:border-slate-50/[0.1] dark:text-slate-200 sm:hidden sm:px-8 md:border-0 md:pr-0">
        {data.made.text1}
        <HeartIcon className="inline-block h-4 w-4 text-red-400 " />
        {data.made.text2}
        <Anchor {...data.made.gatsby} />
      </div>
    </div>
  )
}

export default Drawer
