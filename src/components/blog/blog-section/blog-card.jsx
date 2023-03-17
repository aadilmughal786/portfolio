import { Link } from "gatsby"
import React from "react"
import { BsArrowRight } from "react-icons/bs"

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
        <div className="pt-3 font-[Kurale] text-2xl">{data.title}</div>
        <div className="rounded py-[2px] pr-2 font-mono text-sm font-medium">
          {data.date}
        </div>
        <div className="py-2 text-sky-700 dark:text-sky-300">
          {`${data.description.slice(0, DESCRIPTION_lIMIT)}...`}
        </div>
        <Link
          to={data.route}
          className="mt-4 inline-flex items-center gap-4 rounded border border-sky-200 px-4 py-1 font-medium text-sky-700 hover:shadow-md dark:border-sky-400 dark:text-sky-300"
        >
          Read More
          <BsArrowRight />
        </Link>
      </div>
    </div>
  )
}

export default BlogCard
