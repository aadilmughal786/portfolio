import React from "react"
import BlogSection from "../../components/blog/blog-section/blog-section"
import Header from "../../components/blog/header/header"
import Layout from "../../components/layouts/layout"
import Seo from "../../components/seo/seo"
import data from "../../data/blog/index"

const Blog = () => {
  return (
    <Layout>
      <Header data={data.headerData} />
      <BlogSection data={data.blogSection} />
    </Layout>
  )
}

export const Head = () => <Seo title="Blogs" />

export default Blog
