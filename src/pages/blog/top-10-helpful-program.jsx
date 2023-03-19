import React from "react"
import BlogContent from "../../components/blog/blog-content/blog-content"
import BlogInfo from "../../components/blog/blog-content/blog-info"
import Layout from "../../components/layouts/layout"
import data from "../../data/blog/blog1/top-10-helpful-program"

const Index = () => {
  return (
    <Layout>
      <dir className="justify-center px-4 sm:px-8 md:flex">
        <div className="md:w-3/5">
          <BlogInfo data={data.metaData} />
          <BlogContent data={data.content} />
        </div>
      </dir>
    </Layout>
  )
}

export default Index
