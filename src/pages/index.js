import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import abstractBanner from "../images/abstractBanner.png";
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

    <img src={abstractBanner} className="abstractBanner" />

    <div style={{alignSelf: 'center', padding: 20, textAlign: 'center', marginBottom: 80, width: `90%`, maxWidth: 1000}}>
      <h1>Monitor your CI jobs from your macOS desktop</h1>
      <p>Tempomat is an application that sits on your macOS desktop (or mobile device) and retrieves information of your continuous integration system, you can see the status of each of your build jobs quickly and stop wondering if your build is broken.</p>
    </div>

    <div className="midSection">
      
      <div className="section">
        <img src={explanation} className="explanation" />
        <h3 style={{ color: `white` }}>
          Relevant information only
        </h3>
        <div style={{ color: `white` }}>
          ✋ Stop scrolling through complex and slow UIs, all the information you need is here: <br/><br/>✅ Status and CI <br/>✅ Owner and repository <br/>✅ Branch <br/>✅ Build number 
        </div>
      </div>

      <div className="section">
        <img src={notification} className="explanation" />
        <h3 style={{ color: `white` }}>
          Always on top of things
        </h3>
        <div style={{ color: `white` }}>
          🚨 Receive a notification on your Desktop when you build breaks...<br/><br/> Even better, trigger a rebuild immediately! 🚀
        </div>
      </div>

      <div className="section">
        <img src={macbook} className="explanation" />
        <h3 style={{ color: `white` }}>
          Not a SaaS
        </h3>
        <div style={{ color: `white` }}>
          No hidden charges, no pricing tiers, runs on your computer, buy it once, own it forever 🥰
        </div>
      </div>
      <div className="section">
        <img src={providers} className="explanation" />
        <h3 style={{ color: `white` }}>
          Connects with your CI
        </h3>
        <div style={{ color: `white` }}>
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
        <h4 style={{ color: `white`, marginTop: 20 }}>
          Checkout the Source Code
        </h4>
        </a>
      </div>
    </div>

  </Layout>
);

export default IndexPage;
