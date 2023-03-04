import React, { useState } from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"

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
                className="w-5 text-white"
              />
            ) : (
              <SunIcon
                onClick={e => toggleTheme(theme === "light" ? "dark" : "light")}
                className="w-5"
              />
            )}
          </div>
        )
      }}
    </ThemeToggler>
  )
}
