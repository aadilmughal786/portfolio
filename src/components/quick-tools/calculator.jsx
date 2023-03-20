import React, { useState } from "react"

const Calculator = () => {
  const [exp, setExp] = useState("")
  const [result, setResult] = useState("")

  const evalute = e => {
    setExp(e.target.value)
    try {
      setResult(eval(exp))
    } catch {}
  }
  return (
    <div className="flex flex-col items-center justify-center px-4 pt-28 pb-16 sm:px-8 lg:px-16">
      <h2 className="mb-8 md:text-2xl">Simple Calculator</h2>
      <input
        className="mt-[2px] w-full  rounded border border-sky-600/50 bg-transparent  py-[6px] px-3  outline-none  placeholder:text-slate-500 focus:border-sky-600 dark:border-sky-300/50 placeholder:dark:text-sky-300/30 focus:dark:border-sky-300 md:w-2/3 md:text-xl lg:w-1/2"
        placeholder="Enter Expression"
        type="text"
        onChange={e => evalute(e)}
      />
      <p className="mt-8 md:text-2xl">{result}</p>
    </div>
  )
}

export default Calculator
