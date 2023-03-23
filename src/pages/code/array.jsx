import React from "react"
import Code from "../../components/code/code"
import Layout from "../../components/layouts/layout"
import Seo from "../../components/seo/seo"
import data from "../../data/code/array"

const Index = () => {
  return (
    <Layout>
      <div className="justify-center px-4 sm:px-8 md:flex lg:px-16">
        <div className="md:w-3/5">
          <h2 className="py-16 text-center font-[Kurale] text-2xl md:text-4xl">
            {data.metaData.title}
          </h2>
          <div className="flex w-full flex-col items-center gap-4 pb-32 md:flex">
            {data.content.map(snippet => (
              <Code data={snippet} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Array" />

export default Index
