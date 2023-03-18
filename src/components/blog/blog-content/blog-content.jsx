import React from "react"

import { Code, H2, Img, Note, P } from "./content-type-components/index"

const BlogContent = ({ data }) => {
  return (
    <div className="mb-32">
      {data.map(item => (
        <div className="my-2 md:my-4">
          {/* For p */}
          <div>{item.label === "p" ? <P data={item.data} /> : ""}</div>

          {/* for h2  */}
          <div>{item.label === "h2" ? <H2 data={item.data} /> : ""}</div>

          {/* for img */}
          <div>{item.label === "img" ? <Img data={item.data} /> : ""}</div>

          {/* for note */}
          <div>{item.label === "note" ? <Note data={item.data} /> : ""}</div>

          {/* for code */}
          <div>{item.label === "code" ? <Code data={item.data} /> : ""}</div>
        </div>
      ))}
    </div>
  )
}

export default BlogContent
