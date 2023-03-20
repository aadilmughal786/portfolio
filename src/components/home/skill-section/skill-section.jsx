import React from "react"
import ProgressBar from "./progress-bar"

const SkillSection = ({ data }) => {
  return (
    <div className="px-4 py-16 sm:px-8 lg:px-16">
      <h2 className="text-center text-3xl font-medium">{data.label}</h2>
      <h3 className="py-4 text-center text-xl font-medium text-sky-700 dark:text-sky-300">
        {data.description}
      </h3>
      <div className="grid grid-cols-1 gap-4  pt-4 sm:gap-y-8 sm:gap-x-12 md:grid-cols-2 lg:grid-cols-3">
        {data.skills.map(item => (
          <ProgressBar key={item.id} value={item.per} label={item.label} />
        ))}
      </div>
    </div>
  )
}

export default SkillSection
