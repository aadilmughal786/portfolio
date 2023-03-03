import * as React from "react"

const NavBar = () => (
  <div className="bg-red-200">
    <div className="container mx-auto px-3 py-3 flex justify-between items-center">
      <div>LOGO</div>
      <div className="hidden md:flex gap-4 items-center ">
        <a>Home</a>
        <a>Project</a>
        <a>Contact</a>
        <a>Resume</a>
      </div>
      <div className="flex gap-8 items-center">
        <div className="hidden sm:flex gap-4 items-center">
          <div>icon1</div>
          <div>icon2</div>
        </div>
        <div className="md:hidden">Toggle</div>
      </div>
    </div>
  </div>
)

export default NavBar
