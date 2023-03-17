import React from "react"

const BlogContent = ({ data }) => {
  return (
    <div className="mb-32">
      {data.map(item => (
        <div className="my-4 md:my-8">
          <div>{item.label === "p" ? <p>{item.data}</p> : ""}</div>
          <div>
            {item.label === "h2" ? (
              <h2 className="font-[Kurale] text-3xl sm:text-4xl">
                {item.data}
              </h2>
            ) : (
              ""
            )}
          </div>
          <div>
            {item.label === "img" ? (
              <img src={item.data.img} alt={item.data.alt} />
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default BlogContent
