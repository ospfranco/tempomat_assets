import PropTypes from "prop-types"
import React from "react"
import { Title } from "./title"
import macButton from '../images/DownloadMac.svg'
import githubMark from '../images/githubMark.png'

const Header = () => (
  <header
    style={{
      background: `#313131`,
      marginBottom: `1.45rem`,
      backdropFilter: `blur(5px)`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        alignItems: `center`,
      }}
    >
      <div style={{width: 100}}>
        <Title />
      </div>

      <div style={{flex: 1}}/>
      <a href="https://apps.apple.com/de/app/tempomat-circleci-toolbar/id1509296762?l=en&mt=12" alt="Mac app store link">
        <img src={macButton} style={{marginBottom: 0, width: 200}}/>
      </a>
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