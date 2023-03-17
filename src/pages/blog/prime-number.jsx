import React from "react"
import BlogContent from "../../components/blog/blog-content/blog-content"
import Layout from "../../components/layouts/layout"
import data from "../../data/blog/blog1/prime-number"

const PrimeNumber = () => {
  return (
    <Layout>
      <dir className="justify-center px-4 sm:px-8 md:flex">
        <div className="text-slate-700 dark:text-slate-200 md:w-3/5">
          <div className="mt-4 font-[Kurale] text-4xl sm:text-5xl">
            {data.metaData.title}
          </div>

          {/* Author info */}
          <div className="mt-8 flex items-center gap-4">
            <img
              src={data.metaData.author.img}
              alt={data.metaData.author.name}
              className="h-14 w-14 rounded-full border border-slate-900/10 dark:border-slate-50/[0.06]"
            />
            <div className="font-[Kurale]">
              <div className=" text-lg font-semibold">
                {data.metaData.author.name}
              </div>
              <div>{`Posted on ${data.metaData.date}`}</div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-row flex-wrap gap-2 pt-8">
            {data.metaData.tags.map(tag => (
              <span className="rounded bg-sky-400/80 px-2 py-[2px] text-xs font-medium text-slate-800 dark:bg-sky-300 dark:text-black">
                {tag}
              </span>
            ))}
          </div>

          {/* Content */}
          <div>
            <BlogContent data={data.content} />
          </div>
        </div>
      </dir>
    </Layout>
  )
}

export default PrimeNumber
