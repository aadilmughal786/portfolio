import React from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs"

const Code = ({ data }) => {
  return (
    <SyntaxHighlighter
      showLineNumbers={true}
      language="javascript"
      style={a11yDark}
    >
      {data}
    </SyntaxHighlighter>
  )
}

export default Code
