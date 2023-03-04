import * as React from "react"
import Footer from "../footer/footer"
import NavBar from "../nav-bar/nav-bar"

const Layout = ({ children }) => {
  return (
    <div className="dark:bg-slate-800 min-h-screen flex flex-col justify-between">
      <NavBar />
      <main className="container mx-auto px-3">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
