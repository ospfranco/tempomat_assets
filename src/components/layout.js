/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
        }}
      >
        <main>{children}</main>
      </div>
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
            flexDirection: `column`,
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
