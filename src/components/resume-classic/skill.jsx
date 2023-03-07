import React from "react"

const Skill = ({ data }) => {
  return (
    <div className="relative mt-10 h-1 w-full rounded-2xl bg-slate-100 dark:bg-slate-700">
      <div
        style={{
          width: `${data.per}%`,
        }}
        className={`absolute top-0 left-0 h-full rounded-2xl bg-sky-500/70 text-white dark:text-sky-700`}
      ></div>
      <span className="absolute left-0 bottom-full mb-[1px] flex flex-row items-center gap-2 text-slate-700 dark:text-slate-200">
        <span>{data.icon}</span>
        <span>{data.title}</span>
      </span>
      <span className="absolute right-0 bottom-full mb-[1px] font-mono text-slate-700 dark:text-slate-200">
        {`${data.per}%`}
      </span>
    </div>
  )
}

export default Skill
