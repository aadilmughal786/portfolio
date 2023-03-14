import React from "react"
import Typewriter from "typewriter-effect"
import "../../styles/wave-hand.css"

const Intro = ({ data }) => {
  return (
    <div className="flex flex-col items-center  gap-y-6 gap-x-4 sm:flex-row">
      <img
        className="rounded-md border border-slate-900/10 dark:border-slate-50/[0.06] sm:w-60"
        src={data.pic}
        alt={data.alt}
      />
      <div className="flex flex-1 flex-col items-center gap-[6px] text-center">
        <div className="waving-hand text-4xl">{data.hand}</div>
        <div className="font-[Kurale] text-2xl">{data.greetText}</div>
        <div className="flex flex-wrap items-center justify-center gap-1 font-mono">
          {data.text.text1}
          <Typewriter
            options={{
              strings: data.text.text2,
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Intro
