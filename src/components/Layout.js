import React from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"
import './css/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
