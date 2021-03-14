import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <main className="">
        {children}
      </main>
      
      <footer
        className="border-t flex flex-col items-center justify-center p-4 border-purple-200"
      >
        <div className="font-semibold">
          Tempomat
        </div>
        <div className="text-sm mb-4">
          2021
        </div>
        <Link to="/privacy" alt="Privacy Link" className="text-blue-500">
          Privacy Policy
        </Link>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
