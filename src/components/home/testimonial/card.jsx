import React from "react"

const Card = ({ data }) => {
  return (
    <div className="mb-4 flex flex-col items-center gap-1 py-4 sm:py-6 lg:px-36">
      <img
        className="w-24 rounded-full border border-sky-700/30 p-1 dark:border-sky-300/30"
        src={data.img}
        alt={data.name}
      />
      <div className="font-medium text-sky-700 dark:text-sky-300">
        {data.name}
      </div>
      <div className="text-slate-700 dark:text-slate-200/70">{data.role}</div>
      <div className="mt-2 flex text-center">
        <span className=" text-4xl text-sky-700 dark:text-sky-300 md:text-6xl">
          “
        </span>
        {data.text}
        <span className=" text-4xl text-sky-700 dark:text-sky-300 md:text-6xl">
          ”
        </span>
      </div>
    </div>
  )
}

export default Card
