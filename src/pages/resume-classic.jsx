import React, { useState } from "react"
import Layout from "../components/layouts/layout"
import Card from "../components/resume-classic/card"
import CardItem from "../components/resume-classic/card-item"
import Contact from "../components/resume-classic/contact"
import Course from "../components/resume-classic/course"
import Education from "../components/resume-classic/education"
import Intro from "../components/resume-classic/intro"
import Skill from "../components/resume-classic/skill"
import Seo from "../components/seo/seo"
import data from "../data/resume-classic/index"

const Resume = () => {
  // state for follow section
  const [isExpand, setIsExpand] = useState(false)

  return (
    <Layout>
      <div className="grid gap-y-8 gap-x-4 px-4 py-16 sm:px-8 lg:grid-cols-3">
        {/* column-1 */}
        <div className="flex flex-col gap-y-8 lg:col-span-2">
          {/* Intro */}
          <Card icon={data.introData.icon} title={data.introData.title}>
            <CardItem>
              <Intro data={data.introData} />
            </CardItem>

            {data.introData.about.map(item => (
              <CardItem key={item.id}>{item.text}</CardItem>
            ))}

            {/* quote */}
            <CardItem>
              <div className="text-center sm:px-8">
                <div className="mb-1 font-[Courgette] text-xl">
                  {data.introData.quote.quote}
                </div>
                <div className="font-mono text-sky-700 dark:text-sky-300">
                  {data.introData.quote.author}
                </div>
              </div>
            </CardItem>
          </Card>

          {/* Education */}
          <Card icon={data.eduData.icon} title={data.eduData.title}>
            {data.eduData.item.map(item => (
              <CardItem key={item.id}>
                <Education data={item} />
              </CardItem>
            ))}
          </Card>

          {/* Courses & Certificates */}
          <Card icon={data.courseData.icon} title={data.courseData.title}>
            {data.courseData.item.map(item => (
              <CardItem key={item.id}>
                <Course data={item} />
              </CardItem>
            ))}
          </Card>
        </div>

        {/* column-2 */}
        <div className="flex flex-col gap-y-8">
          {/* Contact */}
          <Card icon={data.contactData.icon} title={data.contactData.title}>
            {data.contactData.item.map(item => (
              <CardItem key={item.id}>
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

          {/* Skills */}
          <Card icon={data.skillData.icon} title={data.skillData.title}>
            {data.skillData.items.map(item => (
              <CardItem key={item.id}>
                <div className="font-medium">{item.label}</div>
                {item.items.map(item => (
                  <Skill key={item.id} data={item} />
                ))}
              </CardItem>
            ))}
          </Card>

          {/* follow */}
          <Card icon={data.followData.icon} title={data.followData.title}>
            {data.followData.items.slice(0, 3).map(item => (
              <CardItem key={item.id}>
                <Contact data={item} />
              </CardItem>
            ))}
            {/* hidden */}
            <div className={isExpand ? "block" : "hidden"}>
              {data.followData.items
                .slice(3, data.followData.items.length)
                .map(item => (
                  <CardItem key={item.id}>
                    <Contact data={item} />
                  </CardItem>
                ))}
            </div>
            <div className="cursor-pointer">
              {isExpand ? (
                <button
                  onClick={e => setIsExpand(false)}
                  className="flex w-full justify-center py-1"
                >
                  {data.followData.arrowUp}
                </button>
              ) : (
                <button
                  onClick={e => setIsExpand(true)}
                  className="flex w-full justify-center py-1"
                >
                  {data.followData.arrowDown}
                </button>
              )}
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Classic Resume" />

export default Resume
