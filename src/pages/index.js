import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Steps from "../images/Steps.png";
import TitleLight from "../images/titleLight.png";
import macButton from "../images/DownloadMac.svg";
import explanation from "../images/explanation.png";
import notification from "../images/notification.png";
import providers from "../images/providers.png"
import macbook from "../images/macbook.png"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="Continuous Integration monitoring in macOS: CircleCI, Travis CI, Github, AppCenter, Bitrise"
    />
    <div className="topSection">
      <img src={TitleLight} style={{width: 200}} />

      <img src={Steps} className="abstractBanner" />

      <div style={{alignSelf: 'center', padding: 20, textAlign: 'center', marginBottom: 80, width: `90%`, maxWidth: 1000, color: 'white'}}>
        <h1>Monitor your CI jobs from your macOS desktop</h1>
        <p>Tempomat sits on your macOS desktop and retrieves information of your continuous integration system(s), quickly check your build jobs quickly and stop wondering if your build is broken.</p>
      </div>
    </div>

    <div className="midSection">
      
      <div className="section">
        <img src={explanation} className="explanation" />
        <h3>
          Relevant information only
        </h3>
        <div>
          ✋ Stop scrolling through complex and slow UIs, all the information you need is here: <br/><br/>✅ Status and CI <br/>✅ Owner and repository <br/>✅ Branch <br/>✅ Build number 
        </div>
      </div>

      <div className="section">
        <img src={notification} className="explanation" />
        <h3>
          Always on top of things
        </h3>
        <div>
          🚨 Receive a notification on your Desktop when you build breaks...<br/><br/> Even better, trigger a rebuild immediately! 🚀
        </div>
      </div>

      <div className="section">
        <img src={macbook} className="explanation" />
        <h3>
          Not a SaaS
        </h3>
        <div>
          No hidden charges, no pricing tiers, runs on your computer, buy it once, own it forever 🥰
        </div>
      </div>
      <div className="section">
        <img src={providers} className="explanation" />
        <h3>
          Connects with your CI
        </h3>
        <div>
          Supports many Continuous Integration systems or you can add your own, it's open source 😎
        </div>
      </div>

      <div
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
        <a
          href="https://github.com/ospfranco/tempomat"
          alt="Github link"
        >
        <h4 style={{ marginTop: 20 }}>
          Source Code
        </h4>
        </a>
      </div>
    </div>
    <div className="bottomSection">
      <div className="section">
        <h3 style={{ color: `white` }}>
          Must have for developers
        </h3>
        <h3 style={{ color: `white` }}>
          ⭐️⭐️⭐️⭐️⭐️
        </h3>
        <h4 style={{ color: `white` }}>
          by srolija
        </h4>
        <div style={{ color: `white` }}>
          One of those tools that you don't realize how convenient it makes life until you try it. Works great with CircleCI and saves time having to wait and check the build status manually.
        </div>
      </div>

      <div className="section">
        <h3 style={{ color: `white` }}>
          A simple tool that adds so much DX value
        </h3>
        <h3 style={{ color: `white` }}>
          ⭐️⭐️⭐️⭐️⭐️
        </h3>
        <h4 style={{ color: `white` }}>
          by twgraham
        </h4>
        <div style={{ color: `white` }}>
        I have no idea why a tool like this has not been published earlier. Having a unobtrusive reminder of CI status is extremely useful. While email or slack notifications might be great for important build notifications, I find this is so much better for getting updates on feature branches that don't need my immediate attention. It's also so much faster than going to a bookmarked CI page in your browser, finding the build, and waiting for slow interfaces to load. Would easily recommend to anyone using CI on your projects - especially CircleCI.
        </div>
      </div>

      <div className="section">
        <h3 style={{ color: `white` }}>
          Useful little app
        </h3>
        <h3 style={{ color: `white` }}>
          ⭐️⭐️⭐️⭐️⭐️
        </h3>
        <h4 style={{ color: `white` }}>
          by Speller
        </h4>
        <div style={{ color: `white` }}>
          Found it useful to track my builds, developer was very responsive and fixed a small bug I had immediately
        </div>
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
        <a
          href="https://github.com/ospfranco/tempomat"
          alt="Github link"
        >
        <h4 style={{ color: `white`, marginTop: 20 }}>
          Source Code
        </h4>
        </a>
      </div>
    </div>

  </Layout>
);

export default IndexPage;
