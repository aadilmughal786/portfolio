import React from "react"
import { Code, H2, Img, Note, P } from "./content-type-components/index"

const BlogContent = ({ data }) => {
  return (
    <div className="mb-32">
      {data.map(item => (
        <div className="my-2 md:my-4">
          {/* For p */}
          {item.label === "p" && <P data={item.data} />}

          {/* for h2  */}
          {item.label === "h2" && <H2 data={item.data} />}

          {/* for img */}
          {item.label === "img" && <Img data={item.data} />}

          {/* for note */}
          {item.label === "note" && <Note data={item.data} />}

          {/* for code */}
          {item.label === "code" && <Code data={item} />}
        </div>
      ))}
    </div>
  )
}

export default BlogContent
