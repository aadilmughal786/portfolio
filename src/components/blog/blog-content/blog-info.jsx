import React from "react"

// Top part of blog page like header section
const BlogInfo = ({ data }) => {
  return (
    <div className="flex flex-col gap-8 py-8">
      {/* Blog title  */}
      <div className="font-[Kurale] text-3xl sm:text-5xl">{data.title}</div>

      {/* Author info */}
      <div className="flex items-center gap-4">
        <img
          src={data.author.img}
          alt={data.author.name}
          className="h-14 w-14 rounded-full border border-slate-900/10 dark:border-slate-50/[0.06]"
        />
        <div className="font-[Kurale]">
          <div className=" text-lg font-semibold">{data.author.name}</div>
          <div>{`Posted on ${data.date}`}</div>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-row flex-wrap gap-2">
        {data.tags.map(tag => (
          <span className="rounded bg-sky-400/80 px-2 py-[2px] text-xs font-medium text-slate-800 dark:bg-sky-300 dark:text-black">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default BlogInfo
