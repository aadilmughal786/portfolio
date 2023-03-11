import React from "react"
import dev from "../../images/developer.svg"
import PrimeryBtn from "../../buttons/primery-btn"
import SecondaryBtn from "../../buttons/secondary-btn"
import { ArrowLongRightIcon } from "@heroicons/react/24/solid"

const IntroSection = () => {
  return (
    <div className="flex h-screen flex-col-reverse items-center px-4 py-3 sm:flex-row sm:px-8 md:gap-10">
      <PrimeryBtn label={"Primary Button"} to="/" />
      <SecondaryBtn
        label={"Secondary Button"}
        icon={<ArrowLongRightIcon />}
        to="/"
      />
    </div>
  )
}

export default IntroSection
