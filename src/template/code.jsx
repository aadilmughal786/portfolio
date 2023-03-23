import React from "react"
import Layout from "../components/layouts/layout"

const CodeTemplate = ({ data }) => {
  return (
    <Layout>
      <h2 className="py-16 text-center font-[Kurale] text-2xl md:text-4xl">
        {data.metaData.title}
      </h2>
    </Layout>
  )
}

export default CodeTemplate
