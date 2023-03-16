import { Link } from "gatsby"
import React from "react"

const DESCRIPTION_lIMIT = 100

const BlogCard = ({ data }) => {
  return (
    <div className="relative flex flex-col justify-between overflow-hidden rounded border-b-2 border-b-sky-500 bg-slate-100/40 shadow-md hover:shadow-lg dark:bg-slate-900/40">
      <div className="relative">
        <img src={data.img} alt={data.title} />
        <span className="absolute top-2 right-2 rounded bg-sky-400/80 px-2 py-[2px] text-[10px] font-medium text-slate-800 dark:bg-sky-300 dark:text-black">
          {data.chip}
        </span>
      </div>
      <div className="px-6 pb-6 pt-2">
        <div className="pt-3 font-[Kurale] text-xl">{data.title}</div>
        <div>{data.date}</div>
        <div className="py-2 text-sky-700 dark:text-sky-300">
          {`${data.description.slice(0, DESCRIPTION_lIMIT)}...`}
        </div>
        <Link to={data.route}>Read More</Link>
      </div>
    </div>
  )
}

export default BlogCard
