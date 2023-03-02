import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ title, children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  const defaultTitle = `${title} - ${site.siteMetadata?.title}`
  const description = site.siteMetadata?.description

  return (
    <>
      <title>{defaultTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={defaultTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {children}
    </>
  )
}

export default Seo
