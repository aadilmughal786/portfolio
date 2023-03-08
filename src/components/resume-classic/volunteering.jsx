import React from "react"
import { TbExternalLink } from "react-icons/tb"

const Volunteering = ({ data }) => {
  return (
    <div>
      <div className="flex flex-row items-center gap-4">
        <img
          className="w-14 border border-slate-900/10 p-1 dark:border-slate-50/[0.10]"
          src={data.logo}
          alt={data.altText}
        />
        <div className="mb-1">
          <div className="font-medium">{data.role}</div>
          <div className="flex flex-row flex-wrap gap-x-2 gap-y-1 text-sky-700 dark:text-sky-300">
            <a href={data.organizationWebsite} target="_blank" rel="noreferrer">
              <span>{data.organization}</span>
              <TbExternalLink
                className="-mt-[3px] ml-1 inline-block sm:ml-0"
                size={16}
              />
            </a>
          </div>
          <div className="text-slate-400 dark:text-slate-500">{data.cause}</div>
        </div>
      </div>
      <div>
        {data.descriptions.map(description => (
          <div>
            <span className="font-semibold text-sky-600 dark:text-sky-300 ">
              {"⤏"}
            </span>{" "}
            {description}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Volunteering
