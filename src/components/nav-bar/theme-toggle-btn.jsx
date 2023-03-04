import React, { useState } from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"

const THEME = {
  light: "light",
  dark: "dark",
}

// This is common style for both icons
const styleForIcon =
  "h-5 w-5 cursor-pointer text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"

export default function ThemeToggleBtn() {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => {
        return (
          <div className="border-r border-slate-900/10 pr-4 dark:border-slate-50/[0.1]">
            {theme === THEME.dark ? (
              <MoonIcon
                onClick={e => toggleTheme(theme === "light" ? "dark" : "light")}
                className={styleForIcon}
              />
            ) : (
              <SunIcon
                onClick={e => toggleTheme(theme === "light" ? "dark" : "light")}
                className={styleForIcon}
              />
            )}
          </div>
        )
      }}
    </ThemeToggler>
  )
}
