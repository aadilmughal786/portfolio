import React from "react"

const MarqueeChild = ({ data }) => {
  return (
    <div className="flex flex-row items-center gap-4 px-8">
      <div>{data.icon}</div>
      <div className="text-xl font-semibold">{data.label}</div>
    </div>
  )
}

export default MarqueeChild
