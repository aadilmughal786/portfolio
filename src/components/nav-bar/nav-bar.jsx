import * as React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"

import ThemeToggleBtn from "./theme-toggle-btn"

const NavBar = () => (
  <div className="sticky top-0 z-40 w-full backdrop-blur transition-colors duration-500 lg:z-50 border-b border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent px-4 sm:px-8 py-3 flex justify-between items-center">
    <div>LOGO</div>
    <div className="hidden md:flex gap-4 items-center text-sm leading-6 font-medium text-slate-700 dark:text-slate-200">
      <a className="cursor-pointer">Home</a>
      <a className="cursor-pointer">Project</a>
      <a className="cursor-pointer">Contact</a>
      <a className="cursor-pointer">Resume</a>
    </div>
    <div className="flex gap-8 items-center">
      <div className="hidden sm:flex gap-4 items-center">
        <ThemeToggleBtn />
        <a>
          <FaGithub size={20} />
        </a>
        <a>
          <FaLinkedin size={20} />
        </a>
      </div>
      <div className="md:hidden ">
        <Bars3Icon className="w-6" />
        {/* <XMarkIcon className="w-6" /> */}
      </div>
    </div>
  </div>
)

export default NavBar
