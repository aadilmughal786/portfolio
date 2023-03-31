import React from "react"

const Card = ({ data }) => {
  return (
    <div className="relative flex flex-col justify-between overflow-hidden rounded border-b-2 border-b-sky-500 bg-slate-100/40 shadow-md hover:top-[-2px] hover:shadow-lg dark:bg-slate-900/40">
      <div
        className="relative h-56 overflow-hidden bg-cover sm:mb-4"
        style={{ backgroundImage: `url(${data.img})` }}
      >
        {" "}
        {data.chip === undefined ? (
          ""
        ) : (
          <span className="absolute top-2 right-2 rounded bg-sky-400/80 px-2 py-[2px] text-[10px] font-medium text-slate-800 dark:bg-sky-300 dark:text-black">
            {data.chip}
          </span>
        )}
      </div>
      <div className="px-6 pb-6 pt-2">
        <div className="flex items-center justify-between">
          <div className="font-[Kurale] text-xl">{data.name}</div>
          <div className="flex items-center gap-3">
            {data.links.map(link => (
              <a href={link.href} rel="noreferrer" target="_blank">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="py-2 text-sky-700 dark:text-sky-300">
          {data.description}
        </div>
        <div className="flex flex-row flex-wrap gap-2 pt-4">
          {data.tools.map(tool => (
            <span className="rounded bg-sky-400/80 px-2 py-[2px] text-[10px] font-medium text-slate-800 dark:bg-sky-300 dark:text-black">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card
