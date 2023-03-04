import React from "react"
import dev from "../../images/developer.svg"

const IntroSection = () => {
  return (
    <div className="flex flex-col-reverse md:gap-10 sm:flex-row items-center container mx-auto px-3 py-3 h-screen">
      <div className="basis-1/2 flex flex-col gap-2">
        <div className="text-2xl">Hello, It's Me</div>
        <h1 className="text-6xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-black">
          Aadil Mugal
        </h1>
        <div className="text-2xl">
          and i am a{" "}
          <span className="text-transparent bg-clip-text bg-teal-700">
            Frontend Developer
          </span>
        </div>
        <div className="mt-4">I am from India and I like to build stuff</div>
      </div>
      <div className="basis-1/2">
        <img width={"100%"} src={dev} alt="dummy" />
      </div>
    </div>
  )
}

export default IntroSection
