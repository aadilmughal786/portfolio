import React from "react"

const ProgressBar = ({ label, value }) => {
  return (
    <div className="relative mt-9 h-1 w-full rounded-2xl bg-slate-100 dark:bg-slate-700">
      <div
        style={{ width: `${value}%` }}
        className={`absolute top-0 left-0 h-full rounded-2xl bg-sky-500 text-white`}
      >
        <span className="absolute right-0 -translate-y-1/3  rounded-full bg-sky-500 py-[6px] px-[6px] "></span>
      </div>
      <span className="absolute left-0 bottom-full font-medium text-slate-700 dark:text-slate-200">
        {label}
      </span>
      <span className="absolute right-0 bottom-full text-slate-700 dark:text-slate-200">
        {`${value}%`}
      </span>
    </div>
  )
}

export default ProgressBar
