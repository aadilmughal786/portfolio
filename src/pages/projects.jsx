import React from "react"
import Layout from "../components/layouts/layout"
import Seo from "../components/seo/seo"
import data from "../data/projects/index"
import HeroSection from "../components/projects/hero-section/hero-section"
import Toy from "../components/projects/toy/toy"

const Contact = () => {
  return (
    <div>
      <Layout>
        <HeroSection data={data.heroData} />
        {/* Toy Projects */}
        <Toy data={data.toyData} />
      </Layout>
    </div>
  )
}

export const Head = () => <Seo title="Contact" />

export default Contact
