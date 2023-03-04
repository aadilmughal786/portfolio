import React, { useState } from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"

const THEME = {
  light: "light",
  dark: "dark",
}

export default function ThemeToggleBtn() {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => {
        return (
          <div>
            {theme === THEME.dark ? (
              <MoonIcon
                onClick={e => toggleTheme(theme === "light" ? "dark" : "light")}
                className="w-5 h-5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 cursor-pointer"
              />
            ) : (
              <SunIcon
                onClick={e => toggleTheme(theme === "light" ? "dark" : "light")}
                className="w-5 h-5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 cursor-pointer"
              />
            )}
          </div>
        )
      }}
    </ThemeToggler>
  )
}
