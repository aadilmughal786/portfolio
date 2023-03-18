import React from "react"

const ToyCard = ({ data }) => {
  return (
    <div className="flex flex-col justify-between rounded border-b-2 border-b-sky-500 bg-slate-100/40 p-6 shadow-md hover:shadow-lg dark:bg-slate-900/40">
      <div>
        <div className="flex justify-between ">
          <div>{data.icon}</div>
          <div className="flex items-center gap-3">
            {data.links.map(link => (
              <a href={link.href} target="_blank">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="pt-2 font-[Kurale] text-xl">{data.name}</div>
        <div className="py-2 text-sky-700 dark:text-sky-300">
          {data.description}
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-2 pt-4">
        {data.tools.map(tool => (
          <span className="rounded bg-sky-400/80 px-2 py-[2px] text-[10px] font-medium text-slate-800 dark:bg-sky-300 dark:text-black">
            {tool}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ToyCard