import * as React from "react"
import Seo from "../components/seo/seo"
import Layout from "../components/layouts/layout"
import IntroSection from "../components/intro-section/intro-section"
import SkillSection from "../components/skill-section/skill-section"

const HomePage = () => (
  <Layout>
    {/* <IntroSection />
    <IntroSection />
    <IntroSection /> */}
    <SkillSection />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default HomePage
