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
    <div className="">
      <h2 className="mb-2 font-[Kurale] text-2xl text-sky-700 dark:text-sky-300 sm:text-3xl">
        {data.label}
      </h2>
      <div className="mb-8">
        <div className="relative">
          <SyntaxHighlighter
            showLineNumbers={true}
            language={"cpp"}
            style={a11yDark}
          >
            {data.code}
          </SyntaxHighlighter>
        </div>
        <div className="mt-4 flex flex-row flex-wrap gap-4">
          <button
            onClick={() => handleCopyClick(data.code)}
            className="rounded-sm bg-sky-500/40 py-[1px] px-3 text-xs"
          >
            <span>{isCopied ? "Copied!" : "Copy"}</span>
          </button>
          <div className="inline-block rounded-sm border border-sky-500/40 py-[1px] px-3 text-xs">{`TC : ${data.timeComplexity}`}</div>
          <div className="inline-block rounded-sm border border-sky-500/40 py-[1px] px-3 text-xs">{`SC : ${data.spaceComplexity}`}</div>
        </div>
      </div>
    </div>
  )
}

export default Code
