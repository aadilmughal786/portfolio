import React from "react"

const Language = ({ data }) => {
  return (
    <div>
      <div className="font-semibold text-slate-600/80 dark:text-slate-400">
        {data.language}
      </div>
      <div className="text-sky-700 dark:text-sky-300">{data.Proficiency}</div>
    </div>
  )
}

export default Language
