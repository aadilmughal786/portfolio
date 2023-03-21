import React, { useState } from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs"

const Code = ({ data }) => {
  const [isCopied, setIsCopied] = useState(false)

  async function copyTextToClipboard(text) {
    return await navigator.clipboard.writeText(text)
  }

  const handleCopyClick = text => {
    copyTextToClipboard(text)
      .then(() => {
        setIsCopied(true)
        setTimeout(() => {
          setIsCopied(false)
        }, 1500)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className="mb-8">
      <div className="relative">
        <SyntaxHighlighter
          showLineNumbers={true}
          language={data.lang}
          style={a11yDark}
        >
          {data.code}
        </SyntaxHighlighter>
        <span className="absolute right-0 bottom-0 rounded-tl-md bg-sky-500/40 py-[1px] px-3 text-xs text-white">
          {data.lang}
        </span>
      </div>
      <div>
        <button
          onClick={() => handleCopyClick(data.code)}
          className="rounded-sm bg-sky-500/40 py-[1px] px-3 text-xs"
        >
          <span>{isCopied ? "Copied!" : "Copy"}</span>
        </button>
      </div>
    </div>
  )
}

export default Code
