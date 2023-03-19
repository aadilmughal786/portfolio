import React from "react"

const Header = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 px-4 py-16 sm:px-8 md:flex-row lg:gap-20 lg:px-16  ">
      <div className="max-w-xs">
        <img src={data.img} alt={data.alt} className="w-full" />
      </div>
    </div>
  )
}

export default Header
