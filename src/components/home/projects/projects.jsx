import React from "react"
import { BsArrowRight } from "react-icons/bs"
import SecondaryBtn from "../../buttons/secondary-btn"
import Card from "./card"

const ITEM_NUMBER_TO_SHOW = 3

const Project = ({ data }) => {
  return (
    <div className="px-4 py-16 text-slate-600 dark:text-slate-300 sm:px-8">
      <div className="text-center font-[Kurale] text-3xl">{data.label}</div>
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 pt-16 sm:grid-cols-2 md:grid-cols-3 lg:gap-x-12">
        {data.projects.slice(0, 3).map(project => (
          <Card data={project} />
        ))}
      </div>
      <div className="flex items-center justify-center gap-4 pt-6 sm:justify-end">
        <SecondaryBtn
          label="View More"
          to="/projects"
          icon={<BsArrowRight />}
        />
      </div>
    </div>
  )
}

export default Project
