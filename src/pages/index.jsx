import * as React from "react"
import Seo from "../components/seo/seo"
import Layout from "../components/layouts/layout"
import SkillSection from "../components/home/skill-section/skill-section"
import data from "../data/home/index"
import Fact from "../components/home/fact/fact"
import Testimonial from "../components/home/testimonial/testimonial"

const HomePage = () => (
  <Layout>
    {/* <IntroSection />
    <IntroSection />
    <IntroSection /> */}
    <Testimonial data={data.testimonialData} />

    <Fact data={data.factData} />

    <SkillSection data={data.skillData} />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default HomePage
