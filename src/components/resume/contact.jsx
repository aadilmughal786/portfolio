import React from "react"
import { TbExternalLink } from "react-icons/tb"

const Contact = ({ data }) => {
  return (
    <div className="flex items-center gap-6">
      <div>{data.icon}</div>
      <div className="flex flex-row items-center gap-1 text-sky-700 dark:text-sky-300">
        <a href={data.href} target="_blank" rel="noreferrer">
          {data.label}
        </a>
        <TbExternalLink size={16} />
      </div>
    </div>
  )
}

export default Contact
