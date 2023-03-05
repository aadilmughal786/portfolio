import React from "react"
import data from "../../data/footer/index"
import Anchor from "./anchor"

const Footer = () => {
  return (
    <div className="supports-backdrop-blur:bg-white/60 z-40 flex items-center border-t  border-slate-900/10 bg-white/95 px-4  text-slate-600 backdrop-blur dark:border-slate-50/[0.06] dark:bg-transparent dark:text-slate-300 sm:px-8">
      <div className="flex w-full items-center border-r border-slate-900/10 py-3 pr-8 dark:border-slate-50/[0.1] sm:justify-center sm:gap-4">
        <div>
          {`${data.copyrightChar} ${data.year}`}
          <Anchor {...data.dev} />
        </div>
        <div className="hidden border-l border-slate-900/10 pl-4 dark:border-slate-50/[0.1] sm:block">
          {data.made.text1}
          {data.made.heartIcon}
          {data.made.text2}
          <Anchor {...data.made.gatsby} />
        </div>
      </div>

      {/* go to top btn */}
      <div className="ml-4 flex h-full items-center justify-center sm:ml-8 ">
        <a href="#">{data.goToTopIcon}</a>
      </div>
    </div>
  )
}

export default Footer
