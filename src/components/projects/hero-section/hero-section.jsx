import React from "react"

const HeroSection = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-16 px-4 sm:px-8 md:flex-row lg:gap-20 lg:px-16  ">
      <div className="md:basis-1/2">
        <img src={data.img} alt={data.alt} className="w-full" />
      </div>
    </div>
  )
}

export default HeroSection
