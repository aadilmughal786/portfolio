import * as React from "react"
import Seo from "../components/seo/seo"
import Layout from "../components/layouts/layout"
import SkillSection from "../components/home/skill-section/skill-section"
import data from "../data/home/index"
import Fact from "../components/home/fact/fact"
import Testimonial from "../components/home/testimonial/testimonial"
import Marquee from "../components/marquee/marquee"
import MarqueeChild from "../components/marquee/marquee-child"

const HomePage = () => (
  <Layout>
    {/* <IntroSection />
    <IntroSection />
    <IntroSection /> */}

    <Testimonial data={data.testimonialData} />

    {/* Marquee */}
    <Marquee direction="left">
      {data.marqueeData.map(item => (
        <MarqueeChild data={item} key={item.id} />
      ))}
    </Marquee>
    <div className="md:hidden">
      <Marquee direction="right">
        {data.marqueeData.map(item => (
          <MarqueeChild data={item} key={item.id} />
        ))}
      </Marquee>
    </div>

    <Fact data={data.factData} />

    <SkillSection data={data.skillData} />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default HomePage
