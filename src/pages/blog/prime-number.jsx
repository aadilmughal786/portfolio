import React from "react"
import BlogContent from "../../components/blog/blog-content/blog-content"
import BlogInfo from "../../components/blog/blog-content/blog-info"
import Layout from "../../components/layouts/layout"
import data from "../../data/blog/blog1/prime-number"

const PrimeNumber = () => {
  return (
    <Layout>
      <dir className="justify-center px-4 sm:px-8 md:flex">
        <div className="text-slate-700 dark:text-slate-200 md:w-3/5">
          <BlogInfo data={data.metaData} />
          <BlogContent data={data.content} />
        </div>
      </dir>
    </Layout>
  )
}

export default PrimeNumber
