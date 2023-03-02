import * as React from "react"
import Seo from "../components/seo/seo"
import Layout from "../components/layouts/layout"

const PageNotFoundPage = () => (
  <Layout>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export const Head = () => <Seo title="Page Not Found" />

export default PageNotFoundPage
