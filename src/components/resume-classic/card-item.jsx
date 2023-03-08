import React from "react"

const CardItem = ({ children }) => {
  return (
    <div className="border-b border-slate-900/10 px-6 py-4 dark:border-slate-50/[0.10]">
      {children}
    </div>
  )
}

export default CardItem
