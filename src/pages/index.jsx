import * as React from "react"
import Seo from "../components/seo/seo"
import Layout from "../components/layouts/layout"
import SkillSection from "../components/skill-section/skill-section"
import data from "../data/home/skill-section"

const HomePage = () => (
  <Layout>
    {/* <IntroSection />
    <IntroSection />
    <IntroSection /> */}
    <SkillSection data={data} />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default HomePage
