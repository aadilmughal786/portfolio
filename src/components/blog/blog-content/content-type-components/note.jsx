import React from "react"

const Note = ({ data }) => {
  return (
    <div className="mb-8 flex gap-4 border-l-4 border-l-sky-600 bg-sky-100/80 p-4 dark:bg-sky-700/20">
      <div>{data}</div>
    </div>
  )
}

export default Note
