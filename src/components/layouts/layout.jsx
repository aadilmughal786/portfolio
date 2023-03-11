import * as React from "react"
import Footer from "../footer/footer"
import NavBar from "../nav-bar/nav-bar"

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col justify-between transition-colors dark:bg-slate-800">
      <NavBar />
      <main className="overflow-hidden">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
