/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./tailwind.css"

const Layout = ({ children }) => {

  return (
    <>
      
      <main>{children}</main>
      
      <footer
        style={{
          backgroundColor: '#313131'
        }}
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
          <Link to="/support" alt="Support Link" style={{color: 'white', textDecoration: 'none', padding: 20}}>
            Support
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
