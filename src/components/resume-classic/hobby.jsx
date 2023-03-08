import React from "react"

const Hobby = ({ data }) => {
  return (
    <div className="flex flex-row items-center gap-x-4">
      <div>{data.icon}</div>
      <div className="text-sky-700 dark:text-sky-300">{data.hobby}</div>
    </div>
  )
}

export default Hobby
