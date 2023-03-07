import React from "react"
import { TbExternalLink } from "react-icons/tb"

const Course = ({ data }) => {
  return (
    <div className="flex flex-row items-center gap-6">
      <div>{data.icon}</div>
      <div className="w-full">
        <div className="flex-row items-center gap-1 font-medium text-sky-700 dark:text-sky-300 sm:flex">
          <a href={data.courseLink}>{data.courseName}</a>
          <TbExternalLink
            className="-mt-[3px] ml-1 inline-block sm:ml-0"
            size={16}
          />
        </div>
        <div className="flex-row flex-wrap items-center justify-between gap-x-8 sm:flex">
          <div>{data.instituteName}</div>
          <div className="font-mono">{data.time}</div>
        </div>
      </div>
    </div>
  )
}

export default Course
