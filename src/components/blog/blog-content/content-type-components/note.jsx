import React from "react"

const Note = ({ data }) => {
  return (
    <div className="flex gap-4 border-l-4 border-l-sky-600 bg-sky-100/80 p-4 dark:bg-sky-700/20">
      <span className="font-semibold">{data.text1}</span>
      <div>{data.text2}</div>
    </div>
  )
}

export default Note
