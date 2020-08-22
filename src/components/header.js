import PropTypes from "prop-types"
import React from "react"
import { Title } from "./title"
import macButton from '../images/DownloadMac.svg'

const Header = () => (
  <header>
    {/* <div
      style={{
        background: 'linear-gradient(150deg,#05BEA4 15%,#94EE7E 94%)',
        height: '600px',
        'transform-origin': 0,
        position: `absolute`,
        top: 0,
        left: 0,
        right: 0,
        zIndex: -1
      }}
    /> */}
    
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header