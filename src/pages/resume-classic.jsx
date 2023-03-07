import React from "react"
import Layout from "../components/layouts/layout"
import Card from "../components/resume-classic/card"
import CardItem from "../components/resume-classic/card-item"
import Education from "../components/resume-classic/education"
import Seo from "../components/seo/seo"
import data from "../data/resume-classic/index"

const Resume = () => {
  return (
    <Layout>
      <div className="grid gap-4 px-4 py-16 sm:px-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card icon={data.eduData.icon} title={data.eduData.title}>
            {data.eduData.item.map(item => (
              <CardItem>
                <Education key={item.id} data={item} />
              </CardItem>
            ))}
          </Card>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Classic Resume" />

export default Resume
