import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Steps from "../images/Steps.png";
import TitleLight from "../images/titleLight.png";
import macButton from "../images/DownloadMac.svg";
import explanation from "../images/explanation.png";
import notification from "../images/notification.png";
import providers from "../images/providers.png";
import macbook from "../images/macbook.png";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="macOS Continuous Integration monitoring: CircleCI, Travis CI, Github, AppCenter, Bitrise"
    />
    <div className="topSection">
      <img src={TitleLight} style={{ width: 200 }} />

      <img src={Steps} className="abstractBanner" />

      <div
        style={{
          alignSelf: "center",
          padding: 20,
          // textAlign: "center",
          maxWidth: 700,
          color: 'white'
        }}
      >
        <p style={{fontSize: 36, fontWeight: '600'}}>Monitor your builds, from your desktop.</p>
        <p style={{fontSize: 20, lineHeight: '1.5em'}}>
          Tempomat sits on the macOS menu bar and retrieves information from your
          CI/CD system, access your builds immediately and stop wasting your time.
        </p>
      </div>

      <div
        style={{display: 'flex', alignItems: 'center', marginBottom: 80, marginTop: 80}}
      >
        <a
          href="https://apps.apple.com/de/app/tempomat-circleci-toolbar/id1509296762?l=en&mt=12"
          alt="Mac app store link"
        >
          <img src={macButton} style={{ marginBottom: 0, width: 160, marginRight: 30 }} />
        </a>

        <a
          href="#features"
          alt="Mac app store link"
          className="button"
        >
          See the features
        </a>
      </div>
    </div>

    <div className="midSection" id="features">
      <div style={{marginTop: 80, marginBottom: 80, display: 'flex', justifyContent: 'center'}}>
        {/* <p style={{fontSize: 24, fontWeight: 600, color: '#05BEA4'}}>Why Tempomat... why not?!</p> */}
        <p style={{fontSize: 28, maxWidth: 700, fontWeight: 500}}>All your builds... from all your branches... from all your CIs... neatly presented, sitting comfortably on the menu bar, accesible with a single click. <br/><br/>Don't pretend you are not <span style={{fontWeight: 'bold', color: '#05BEA4'}}>excited</span>.</p>
      </div>
      <div style={{borderBottom: '1px solid #CCC'}}/>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: 80,
        marginBottom: 80
      }}>
        <div className="section">
          <img src={explanation} className="explanation" />
          <p style={{fontWeight: 600, fontSize: 20}}>Fast & Furious</p>
          <p style={{fontSize: 16}}>
            Say good bye to the <span style={{fontStyle: 'italic'}}>slow</span> web, say hi to a <span style={{fontWeight: 'bold', color: '#05BEA4'}}>fast</span> native solution.
          </p>
        </div>

        <div className="section">
          <img src={notification} className="explanation" />
          <p style={{fontWeight: 600, fontSize: 20}}>Out of the way</p>
          <p style={{fontSize: 16}}>
            Receive <span style={{fontWeight: 'bold', color: '#05BEA4'}}>notifications</span> when any of your builds break.
          </p>
        </div>

        <div className="section">
          <img src={providers} className="explanation" />
          <p style={{fontWeight: 600, fontSize: 20}}>Works for you</p>
          <p style={{fontSize: 16}}>
          Supports many <span style={{fontWeight: 'bold', color: '#05BEA4'}}>CI providers</span> with more added regularly.
          </p>
        </div>
      </div>

      <div style={{borderBottom: '1px solid #CCC'}}/>

      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 100, marginBottom: 100}}>
        <p style={{fontSize: 16}}>
        <h2>and that is not all...</h2>
          <ul>
            <li>Not a SaaS, <span style={{fontWeight: 'bold', color: '#05BEA4'}}>buy it once</span>, then it's yours</li>
            <li>Powerful <span style={{fontWeight: 'bold', color: '#05BEA4'}}>regex</span> filters</li>
            <li><span style={{fontWeight: 'bold', color: '#05BEA4'}}>Securely</span> stores data on the macOS keychain</li>
            <li><span style={{fontWeight: 'bold', color: '#05BEA4'}}>Beautiful</span> minimalistic design</li>
            <li>Trigger a <span style={{fontWeight: 'bold', color: '#05BEA4'}}>rebuild</span> with a single click!</li>
          </ul>
        </p>
      </div>
    </div>
    <div className="bottomSection">
      <div className="section">
        <h3 style={{ color: `white` }}>Must have for developers</h3>
        <h1 style={{ color: `white` }}>5/5</h1>
        <div style={{ color: `white` }}>
          One of those tools that you don't realize how convenient it makes life
          until you try it. Works great with CircleCI and saves time having to
          wait and check the build status manually.
        </div>
        <h4 style={{ color: `white`, marginTop: 20 }}>by srolija</h4>
      </div>

      <div className="section">
        <h3 style={{ color: `white` }}>
          A simple tool that adds so much DX value
        </h3>
        <h1 style={{ color: `white` }}>5/5</h1>
        <div style={{ color: `white` }}>
          I have no idea why a tool like this has not been published earlier.
          Having a unobtrusive reminder of CI status is extremely useful. While
          email or slack notifications might be great for important build
          notifications, I find this is so much better for getting updates on
          feature branches that don't need my immediate attention. It's also so
          much faster than going to a bookmarked CI page in your browser,
          finding the build, and waiting for slow interfaces to load. Would
          easily recommend to anyone using CI on your projects - especially
          CircleCI.
        </div>
        <h4 style={{ color: `white`, marginTop: 20 }}>by twgraham</h4>
      </div>

      <div className="section">
        <h3 style={{ color: `white` }}>Useful little app</h3>
        <h1 style={{ color: `white` }}>5/5</h1>
        <div style={{ color: `white` }}>
          Found it useful to track my builds, developer was very responsive and
          fixed a small bug I had immediately
        </div>
        <h4 style={{ color: `white`, marginTop: 20 }}>by Speller</h4>
      </div>

      <div
        className="section"
        style={{
          display: `flex`,
          flexDirection: `column`,
          alignItems: "center",
          justifyContent: "center",
          padding: 40,
        }}
      >
        <a
          href="https://apps.apple.com/de/app/tempomat-circleci-toolbar/id1509296762?l=en&mt=12"
          alt="Mac app store link"
        >
          <img src={macButton} style={{ marginBottom: 0, width: 250 }} />
        </a>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
