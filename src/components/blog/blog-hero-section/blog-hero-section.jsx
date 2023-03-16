import React from "react"

const BlogHeroSection = ({ data }) => {
  return (
    <div className="text-slate-700 dark:text-slate-200">
      <div className="font-[Kurale] text-5xl">{data.title}</div>
    </div>
  )
}

export default BlogHeroSection
