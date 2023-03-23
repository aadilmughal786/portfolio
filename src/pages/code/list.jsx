import React from "react"
import Layout from "../../components/layouts/layout"
import Seo from "../../components/seo/seo"
import data from "../../data/code/list"

const Index = () => {
  return (
    <Layout>
      <h2 className="py-16 text-center font-[Kurale] text-2xl md:text-4xl">
        {data.metaData.title}
      </h2>
      <div className="flex flex-col items-center gap-4 px-4 pb-32 sm:px-8 md:flex lg:px-16">
        Hi
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="List" />

export default Index
