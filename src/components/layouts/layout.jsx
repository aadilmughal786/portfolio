import * as React from "react"
import Footer from "../footer/footer"
import NavBar from "../nav-bar/nav-bar"

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className="container mx-auto px-3">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
