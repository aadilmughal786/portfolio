import { Link } from "gatsby"
import React from "react"
import BlogSection from "../../components/blog/blog-section/blog-section"
import Header from "../../components/blog/header/header"
import Layout from "../../components/layouts/layout"
import data from "../../data/blog/index"

const Blog = () => {
  return (
    <Layout>
      <Header data={""} />
      <BlogSection data={data.blogSection} />
    </Layout>
  )
}

export default Blog
