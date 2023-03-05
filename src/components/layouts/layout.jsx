import * as React from "react"
import Footer from "../footer/footer"
import NavBar from "../nav-bar/nav-bar"

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col justify-between transition-colors dark:bg-slate-800">
      <NavBar />
      <main className="container mx-auto px-3">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
