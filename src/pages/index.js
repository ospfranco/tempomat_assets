import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import background from '../images/background.jpg'
import background2 from '../images/background2.jpg'
import circleci from '../images/circleci_dark.png'
import appcenter from '../images/appcenter_dark.png'
import macButton from '../images/DownloadMac.svg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{display: `flex`}}>
      <img src={background} style={{height: '40vh'}}/>
      <div style={{display: `flex`, justifyContent: `center`, alignItems: `center`, flex: 1}}>
        <h1 style={{fontWeight: 200}}>Build status at a glance.</h1>
      </div>
      
    </div>
    <div style={{display: `flex`, flexWrap: "wrap", margin: `0 auto`, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <div style={{display: `flex`, flexDirection: 'column', justifyContent: `center`, alignItems: `center`, flex: 1, minWidth: '375px', padding: 10}}>
        <h3 style={{fontWeight: 200 }}>Sits on your desktop menu bar</h3>
        <h3 style={{fontWeight: 200 }}>Notifies you when a build breaks</h3>
        <h3 style={{fontWeight: 200 }}>Easy set up and integration</h3>
        <h3 style={{fontWeight: 200 }}>Trigger a rebuild with a single click</h3>
      </div>

      <img src={background2} style={{height: '40vh'}}/>
      
    </div>

    <div style={{display: `flex`, flexDirection: `column`, margin: `0 auto`, flex: 1, alignItems: 'center', padding: 10}}>
      <h3 style={{fontWeight: 200 }}>Multiple CI providers supported</h3>
      <div style={{display: `flex`, justifyContent: `center`, alignItems: `center`, flex: 1, justifyContent: `space-around`, width: '300px'}}>
        <div style={{display: `flex`, flexDirection: `column`, alignItems: 'center' }}>
        
          <img src={appcenter}/>
          <h4 style={{fontWeight: 300 }}>AppCenter</h4>
        </div>
        <div style={{display: `flex`, flexDirection: `column`, alignItems: 'center'}}>

        <img src={circleci}/>
        <h4 style={{fontWeight: 300 }}>CircleCI</h4>
        </div>
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
