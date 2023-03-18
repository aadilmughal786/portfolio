import React from "react"

const Education = ({ data }) => {
  return (
    <div>
      <div className="flex items-center gap-6 pb-2">
        <div>{data.icon}</div>
        <div className="w-full">
          <div className="flex flex-wrap items-center justify-between gap-x-8">
            <div className="font-medium">{data.educationType}</div>
            <div className="font-mono">{data.year}</div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-x-8 text-sky-700 dark:text-sky-300">
            <div>{data.instituteName}</div>
            <div>{data.status}</div>
          </div>
        </div>
      </div>
      <div className="text-sm">{data.description}</div>
    </div>
  )
}

export default Education
