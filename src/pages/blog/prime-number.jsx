import React from "react"
import BlogHeroSection from "../../components/blog/blog-hero-section/blog-hero-section"
import Layout from "../../components/layouts/layout"
import data from "../../data/blog/blog1/prime-number"
const PrimeNumber = () => {
  return (
    <Layout>
      <BlogHeroSection data={data.metaData} />
    </Layout>
  )
}

export default PrimeNumber
