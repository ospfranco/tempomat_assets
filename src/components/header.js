import PropTypes from "prop-types"
import React from "react"
import { Title } from "./title"
import macButton from '../images/DownloadMac.svg'

const Header = () => (
  <header>
    <div
      style={{
        background: 'linear-gradient(150deg,#05BEA4 15%,#94EE7E 94%)',
        height: '500px',
        transform: 'skewY(-12deg)',
        'transform-origin': 0,
        position: `absolute`,
        top: 0,
        left: 0,
        right: 0,
        zIndex: -1
      }}
    />
    <div
      className="header-content"
    >
      <div style={{width: 180}}>
        <Title />
      </div>

      <div>
        <a href="https://apps.apple.com/de/app/tempomat-circleci-toolbar/id1509296762?l=en&mt=12" alt="Mac app store link">
          <img src={macButton} style={{marginBottom: 0, width: 200}}/>
        </a>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header