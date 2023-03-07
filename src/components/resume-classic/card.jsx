import React from "react"

const Card = ({ icon, title, children }) => {
  return (
    <div className="overflow-hidden rounded-md border border-slate-900/10 text-slate-700 dark:border-slate-50/[0.06] dark:text-slate-300">
      <div className="flex flex-row items-center justify-center gap-2 border-b border-slate-900/10 py-1.5 dark:border-slate-50/[0.06]">
        <div>{icon}</div>
        <div>{title}</div>
      </div>
      {children}
    </div>
  )
}

export default Card
