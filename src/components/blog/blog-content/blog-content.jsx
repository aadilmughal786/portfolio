import React from "react"

const BlogContent = ({ data }) => {
  return (
    <div className="mb-32">
      {data.map(item => (
        <div className="my-2 md:my-4">
          {/* For p */}
          <div>{item.label === "p" ? <p>{item.data}</p> : ""}</div>

          {/* for h2  */}
          <div>
            {item.label === "h2" ? (
              <h2 className="font-[Kurale] text-2xl text-sky-700 dark:text-sky-300 sm:text-3xl">
                {item.data}
              </h2>
            ) : (
              ""
            )}
          </div>

          {/* for img */}
          <div>
            {item.label === "img" ? (
              <img src={item.data.img} alt={item.data.alt} />
            ) : (
              ""
            )}
          </div>

          {/* for note */}
          <div>
            {item.label === "note" ? (
              <div className="flex gap-4 border-l-4 border-l-sky-600 bg-sky-100/80 p-4 dark:bg-sky-700/20">
                <span className="font-semibold">{item.data.text1}</span>
                <div>{item.data.text2}</div>
              </div>
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
