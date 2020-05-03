import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import background from '../images/background.jpg'
import screenshot from '../images/screenshot.jpg'
import screenshotDark from '../images/screenshotDark.jpg'
import background2 from '../images/background2.jpg'
import circleci from '../images/circleci_dark.png'
import appcenter from '../images/appcenter_dark.png'
import bitrise from '../images/bitrise_dark.png'
import macButton from '../images/DownloadMac.svg'
import logo from '../images/title.png';
import icon from '../images/Icon.png';

const IndexPage = () => (
  <Layout>
    <SEO 
      title="Home" 
      description="Tempomat is a native macOS app for monitoring continuous integration systems"
    />
    <div style={{display: `flex`, flexDirection: `column`, margin: `0 auto`, alignItems: 'center', justifyContent: 'center', marginBottom: 60}}>
      <div style={{display: `flex`, flexDirection: `column`, justifyContent: `center`, alignItems: `center`, flex: 1, minWidth: '320px',}}>
        <img src={icon} style={{width: 100}} alt=""/>
        <img src={logo} style={{width: 150}} alt=""/>
        <h1 style={{fontWeight: 200, textAlign: 'center', marginTop: 40}}>Native macOS app for monitoring continuous integration systems</h1>
        <div style={{display: `flex`, justifyContent: `center`, alignItems: `center`, flex: 1, justifyContent: `space-around`, width: '300px', marginBottom: 40}}>
          <div style={{display: `flex`, flexDirection: `column`, alignItems: 'center' }}>
            <img src={appcenter} alt="appcenter icon" style={{width: 50}}/>
            <h4 style={{fontWeight: 300 }}>AppCenter</h4>
          </div>
          <div style={{display: `flex`, flexDirection: `column`, alignItems: 'center'}}>
            <img src={circleci} alt="circleci icon" style={{width: 50}}/>
            <h4 style={{fontWeight: 300 }}>CircleCI</h4>
          </div>
          <div style={{display: `flex`, flexDirection: `column`, alignItems: 'center'}}>
            <img src={bitrise} alt="bitrise icon" style={{width: 50}}/>
            <h4 style={{fontWeight: 300 }}>Bitrise</h4>
          </div>
        </div>

      </div>
      <div className="laptop">
        <img src={screenshot} />
      </div>
    </div>
    <div style={{display: `flex`, flexWrap: "wrap-reverse", margin: `0 auto`, flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 60}}>
      <div style={{display: `flex`, flexDirection: 'column', justifyContent: `center`, alignItems: `center`, flex: 1, minWidth: '320px', padding: 10}}>
        <h2 style={{fontWeight: 200, textAlign: 'center'}}>Sits on your desktop menu bar</h2>
        <h2 style={{fontWeight: 200, textAlign: 'center'}}>Notifies you when a build breaks</h2>
        <h2 style={{fontWeight: 200, textAlign: 'center'}}>Easy set up and integration</h2>
        <h2 style={{fontWeight: 200, textAlign: 'center'}}>Trigger a rebuild with a single click</h2>
      </div>

      <img src={background2} style={{height: '30vh'}} alt="popover view"/>
    </div>

    <div style={{display: `flex`, flexWrap: `wrap`, alignItems: 'center', paddingTop: 80, paddingBottom: 80, backgroundColor: '#313131'}}>
      <div style={{flex: 1, padding: 20}}>
        <img src={screenshotDark} />
      </div>
      <div style={{flex: 1}}>
        <h1 style={{fontWeight: 200, textAlign: 'center', color: `white`}}>Beautifully designed</h1>
        <h1 style={{fontWeight: 200, textAlign: 'center', color: `white`}}>Dark mode supported</h1>
      </div>   
    </div>
    
    <div style={{display: `flex`, margin: `0 auto`, flex: 1, justifyContent: 'center', padding: 40}}>
      <a href="https://apps.apple.com/de/app/tempomat-circleci-toolbar/id1509296762?l=en&mt=12" alt="Mac app store link">
        <img src={macButton} style={{marginBottom: 0}}/>
      </a>
    </div>
  </Layout>
)

export default IndexPage
