import React from "react"
import Form from "../components/contact/form"
import Layout from "../components/layouts/layout"
import InfoBar from "../components/message-bar/info-bar"
import Seo from "../components/seo/seo"
import data from "../data/contact/index"

const Contact = () => {
  return (
    <div>
      <Layout>
        <InfoBar message={data.messageBarData} />
        <Form data={data.formData} />
      </Layout>
    </div>
  )
}

export const Head = () => <Seo title="Contact" />

export default Contact
