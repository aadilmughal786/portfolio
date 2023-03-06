import React from "react"
import ProgressBar from "./progress-bar"

const SkillSection = ({ data }) => {
  return (
    <div className="px-4 py-16 sm:px-8">
      <h2 className="pb-10 text-center text-3xl font-medium text-slate-700 dark:text-slate-200">
        {data.label}
      </h2>
      <div className="grid grid-cols-1  gap-4 sm:gap-y-8 sm:gap-x-12 md:grid-cols-2 lg:grid-cols-3">
        {data.skills.map(item => (
          <ProgressBar key={item.id} value={item.per} label={item.label} />
        ))}
      </div>
    </div>
  )
}

export default SkillSection
