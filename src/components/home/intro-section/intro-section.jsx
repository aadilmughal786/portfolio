import React from "react"
import dev from "../../../images/home/dev.svg"
import PrimeryBtn from "../../buttons/primery-btn"
import SecondaryBtn from "../../buttons/secondary-btn"
import { ArrowLongRightIcon } from "@heroicons/react/24/solid"
import "../../../styles/wave-hand.css"
import Typewriter from "typewriter-effect"

const IntroSection = () => {
  return (
    <div className="flex items-center bg-sky-300/10 py-8 dark:bg-transparent md:py-16">
      <div className="flex flex-col-reverse justify-center gap-6 px-4 text-slate-700 dark:text-slate-200 sm:px-8 md:flex-row md:items-center md:gap-12">
        <div className="flex basis-1/2 flex-col items-center gap-6 text-center md:items-start md:pr-4 md:text-start lg:basis-2/5">
          <div className="waving-hand w-min text-4xl">👋</div>
          <div className="font-[Courgette] text-5xl">I'M Aadil</div>
          <div className="flex flex-wrap items-center gap-1 font-mono text-xl">
            I
            <Typewriter
              options={{
                strings: ["Developer", "Coder"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div>
            I am a self-taught front-end developer based in Rajasthan, India. I
            can develop responsive websites from scratch and raise them into
            modern user-friendly web experiences
          </div>
        </div>
        <div className="sm:px-16 md:basis-1/2 md:px-0 lg:basis-2/5">
          <img src={dev} alt="pics" />
        </div>
      </div>
    </div>
  )
}

export default IntroSection
