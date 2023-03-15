import { Link } from "gatsby"
import React from "react"

const Blog = () => {
  return (
    <div>
      Blog
      <Link to="/blog/sorting-algorithm">Sorting</Link>
      <Link to="/blog/prime-number">prime number</Link>
    </div>
  )
}

export default Blog
