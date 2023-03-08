import React from "react"

const Anchor = ({ label, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="font-medium hover:text-sky-900 dark:hover:text-sky-300"
    >
      {label}
    </a>
  )
}

export default Anchor
