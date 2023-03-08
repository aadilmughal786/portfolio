import React from "react"
import { TbExternalLink } from "react-icons/tb"

const Project = ({ data }) => {
  return (
    <div>
      <div className="mb-2 flex flex-row items-center gap-4">
        <div>{data.icon}</div>
        <div>
          <div className="mb-1 font-medium text-sky-700 dark:text-sky-300">
            {data.title}
          </div>
          <div className="flex flex-row flex-wrap gap-2">
            {data.chips.map(chip => (
              <span className="rounded bg-sky-400 px-2 py-[2px] text-[10px] font-medium text-slate-800 dark:bg-sky-300 dark:text-black">
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mb-1">{data.description}</div>
      <div className="flex flex-row flex-wrap gap-x-2 gap-y-1 text-xs font-medium text-sky-700 dark:text-sky-300">
        {data.projects.map(project => (
          <a href={project.href} target="_blank">
            <span>{project.projectName}</span>
            <TbExternalLink
              className="-mt-[3px] ml-1 inline-block sm:ml-0"
              size={16}
            />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Project
