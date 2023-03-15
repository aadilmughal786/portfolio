import React from "react"
import PrimeryBtn from "../../buttons/primery-btn"
import SecondaryBtn from "../../buttons/secondary-btn"
import "../../../styles/wave-hand.css"
import Typewriter from "typewriter-effect"

const IntroSection = ({ data }) => {
  return (
    <div className="flex items-center py-16">
      <div className="flex flex-col-reverse justify-center gap-6 px-4 text-slate-700 dark:text-slate-200 sm:px-8 md:flex-row md:items-center md:gap-12">
        <div className="flex basis-1/2 flex-col items-center gap-2 text-center md:items-start md:text-start lg:basis-2/5 lg:pr-4">
          <div className="waving-hand w-min text-4xl">{data.hand}</div>
          <div className="font-[Kurale] text-6xl">{data.name}</div>
          <div className="font-[Kurale] text-3xl text-sky-700 dark:text-sky-300">
            {data.tagLine}
          </div>
          <div className="flex flex-wrap items-center gap-3 font-mono text-xl">
            {data.text.text1}
            <Typewriter
              options={{
                strings: data.text.text2,
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="py-4 font-[Kurale] text-xl text-sky-700 dark:text-sky-300">
            {data.about}
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <PrimeryBtn {...data.primaryBtn} />
            <SecondaryBtn {...data.secondaryBtn} />
          </div>
        </div>
        <div className="sm:px-16 md:basis-1/2 md:px-0 lg:basis-2/5">
          <img src={data.img} alt={data.alt} />
        </div>
      </div>
    </div>
  )
}

export default IntroSection
