import React from "react"
import Layout from "../components/layouts/layout"
import Card from "../components/resume-classic/card"
import CardItem from "../components/resume-classic/card-item"
import Contact from "../components/resume-classic/contact"
import Course from "../components/resume-classic/course"
import Education from "../components/resume-classic/education"
import Skill from "../components/resume-classic/skill"
import Seo from "../components/seo/seo"
import data from "../data/resume-classic/index"

const Resume = () => {
  return (
    <Layout>
      <div className="grid gap-x-4 gap-y-8 px-4 py-16 sm:px-8 lg:grid-cols-3">
        {/* Education */}
        <div className="lg:col-span-2">
          <Card icon={data.eduData.icon} title={data.eduData.title}>
            {data.eduData.item.map(item => (
              <CardItem>
                <Education key={item.id} data={item} />
              </CardItem>
            ))}
          </Card>
        </div>

        {/* Contact */}
        <div>
          <Card icon={data.contactData.icon} title={data.contactData.title}>
            {data.contactData.item.map(item => (
              <CardItem>
                <Contact data={item} />
              </CardItem>
            ))}
            <CardItem>
              <div className="flex items-center gap-6">
                <div>{data.contactData.home.icon}</div>
                <a href={data.contactData.home.href}>
                  {data.contactData.home.label}
                </a>
              </div>
            </CardItem>
          </Card>
        </div>

        {/* Courses & Certificates */}
        <div className="lg:col-span-2">
          <Card icon={data.courseData.icon} title={data.courseData.title}>
            {data.courseData.item.map(item => (
              <CardItem>
                <Course key={item.id} data={item} />
              </CardItem>
            ))}
          </Card>
        </div>

        {/* Skills */}

        <div>
          <Card icon={data.skillData.icon} title={data.skillData.title}>
            {data.skillData.items.map(item => (
              <CardItem>
                <div className="font-medium">{item.label}</div>
                {item.items.map(item => (
                  <Skill data={item} />
                ))}
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
