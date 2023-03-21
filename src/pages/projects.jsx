import React from "react"
import Layout from "../components/layouts/layout"
import Seo from "../components/seo/seo"
import data from "../data/projects/index"
import HeroSection from "../components/projects/hero-section/hero-section"
import Toy from "../components/projects/toy/toy"
import Project from "../components/projects/projects/projects"

const Projects = () => {
  return (
    <div>
      <Layout>
        <HeroSection data={data.heroData} />
        {/* Toy Projects */}
        <Project data={data.projectData} />
        <Toy data={data.toyData} />
      </Layout>
    </div>
  )
}

export const Head = () => <Seo title="Projects" />

export default Projects
