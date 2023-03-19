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
        <div className="pt-16 pb-20">
          <Form data={data.formData} />
        </div>
      </Layout>
    </div>
  )
}

export const Head = () => <Seo title="Contact" />

export default Contact
