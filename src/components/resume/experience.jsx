import React from "react"
import {
  formateDate,
  getCurrentDateObject,
  getDiff,
} from "../../utils/resume-date"

const position = {
  SINGLE: "single",
  MULTIPLE: "multiple",
}

// for single role/position
const Single = ({ item }) => (
  <div>
    <div className="mb-2 flex items-center gap-4">
      <div>{item.icon}</div>
      <div className="flex-1">
        <div className="font-semibold text-slate-700/80 dark:text-slate-300">
          {item.role}
        </div>
        <div className="flex flex-wrap justify-between  gap-x-8">
          <div className="text-sky-700 dark:text-sky-300">{item.name}</div>
          <div>{item.time}</div>
        </div>
        <div className="flex flex-wrap justify-between  gap-x-8  text-slate-600/80 dark:text-slate-400">
          <div>{`${formateDate(item.start)} - ${
            item.end === "present" ? "present" : formateDate(item.end)
          }`}</div>
          <div className="font-mono">
            {item.end === "present"
              ? getDiff(item.start, getCurrentDateObject())
              : getDiff(item.start, item.end)}
          </div>
        </div>
        <div className="text-slate-600/80 dark:text-slate-400">
          {item.location}
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-2">
      {item.points.map(point => (
        <div className="flex gap-3">
          <span className="hidden font-semibold text-sky-600 dark:text-sky-300 sm:inline ">
            {"⤏"}
          </span>
          {point}
        </div>
      ))}
    </div>
    <div className="flex flex-row flex-wrap gap-2">
      {item.technologies.map(chip => (
        <span className="rounded bg-sky-400/80 px-2 py-[2px] text-[10px] font-medium text-slate-800 dark:bg-sky-300 dark:text-black">
          {chip}
        </span>
      ))}
    </div>
  </div>
)

// for multiple role/position
const Multiple = ({ item }) => (
  <div>
    <div>
      <div className="mb-2 flex items-center gap-4">
        <div>{item.icon}</div>
        <div className="flex-1">
          <div className="font-medium text-sky-700 dark:text-sky-300">
            {item.name}
          </div>
          <div className="flex flex-wrap justify-between  gap-x-8">
            <div>{item.time}</div>
            <div className="font-mono">
              {item.end === "present"
                ? getDiff(item.start, getCurrentDateObject())
                : getDiff(item.start, item.end)}
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6">
        {item.positions.map(position => (
          <div className="pl-4">
            <li>{position.role}</li>
            <div className="ml-[2px] border-l border-black/50 pl-6 pb-4 dark:border-white/50">
              <div>{position.location}</div>
              <div className="flex flex-wrap justify-between  gap-x-8  text-slate-600/80 dark:text-slate-400">
                <div>{`${formateDate(position.start)} - ${
                  position.end === "present"
                    ? "present"
                    : formateDate(position.end)
                }`}</div>
                <div>
                  {" "}
                  {position.end === "present"
                    ? getDiff(position.start, getCurrentDateObject())
                    : getDiff(position.start, position.end)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="flex flex-col gap-1">
      {item.points.map(point => (
        <div className="flex gap-3">
          <span className="hidden font-semibold text-sky-600 dark:text-sky-300 sm:inline ">
            {"⤏"}
          </span>{" "}
          {point}
        </div>
      ))}
    </div>
    <div className="flex flex-row flex-wrap gap-2">
      {item.technologies.map(chip => (
        <span className="rounded bg-sky-400/80 px-2 py-[2px] text-[10px] font-medium text-slate-800 dark:bg-sky-300 dark:text-black">
          {chip}
        </span>
      ))}
    </div>
  </div>
)

const Experience = ({ data }) => {
  return (
    <div>
      {data.position === position.SINGLE ? (
        <Single item={data} />
      ) : (
        <Multiple item={data} />
      )}
    </div>
  )
}

export default Experience
