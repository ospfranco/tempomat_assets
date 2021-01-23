import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      
      <footer
        className="bg-black"
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            display: `flex`,
            alignItems: 'center',
            justifyContent: `center`,
          }}
        >          
          <Link to="/privacy" alt="Privacy Link" style={{color: 'white', textDecoration: 'none', padding: 20}}>
            Privacy Policy
          </Link>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
