import React from "react"
import Form from "../components/contact/form"
import Layout from "../components/layouts/layout"
import InfoBar from "../components/message-bar/info-bar"
import AlertBar from "../components/message-bar/alert-bar"

import Seo from "../components/seo/seo"
import data from "../data/contact/index"

const Contact = () => {
  return (
    <div>
      <Layout>
        <div className="text-slate-600 dark:text-slate-300">
          <InfoBar message={data.messageBarData} />
          <AlertBar message={data.messageBarData} />
          <div className="pt-16 pb-20">
            <Form data={data.formData} />
          </div>
        </div>
      </Layout>
    </div>
  )
}

export const Head = () => <Seo title="Contact" />

export default Contact
