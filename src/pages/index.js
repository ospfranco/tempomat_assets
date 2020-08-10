import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import abstractBanner from "../images/abstractBanner.png";
import circleci from "../images/circleci_dark.png";
import appcenter from "../images/appcenter_dark.png";
import bitrise from "../images/bitrise_dark.png";
import travis from "../images/travis_dark.png";
import github from "../images/github_dark.png";
import gitlab from "../images/gitlab.png";
import macButton from "../images/DownloadMac.svg";
import githubMark from "../images/githubMark.png";
import explanation from "../images/explanation.png"
import notification from "../images/notification.png"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="Continuous Integration monitoring in macOS: CircleCI, Travis CI, Github, AppCenter, Bitrise"
    />

    <img src={abstractBanner} style={{padding: 20, marginTop: 80}}/>
    
    <h1 className="section">
      Monitor your CI jobs from your computer's desktop
    </h1>

    <div className="section">
      <div style={{fontSize: `1.7rem`}}>
        All the relevant information at a glance
      </div>
      <img src={explanation} className="explanation"/>
    </div>

    <div className="section">
      <div style={{fontSize: `1.7rem`}}>
        Receive notifications and trigger rebuilds
      </div>
      <img src={notification} className="explanation"/>
    </div>

    <div
      className="section"
    >
      <div style={{fontSize: `1.7rem`, flex: 1}}>
        Pick your CI provider
      </div>

      <div
        style={{
          flex: 1,
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-around`,
        }}
      >
        <div style={{display: `flex`, flexDirection: `column`, alignItems: `center`, width: 120}}>
          <img src={circleci} style={{height: `4em`, width: `4em`}}/>
          <h4 style={{fontWeight: 200}}>CircleCI</h4>
        </div>
        <div style={{display: `flex`, flexDirection: `column`, alignItems: `center`, width: 120}}>
        <img src={appcenter} style={{height: `4em`, width: `4em`}}/>
          <h4 style={{fontWeight: 200}}>AppCenter</h4>
        </div>
        <div style={{display: `flex`, flexDirection: `column`, alignItems: `center`, width: 120}}>
        <img src={bitrise} style={{height: `4em`, width: `4em`}}/>
          <h4 style={{fontWeight: 200}}>Bitrise</h4>
        </div>
        <div style={{display: `flex`, flexDirection: `column`, alignItems: `center`, width: 120}}>
        <img src={travis} style={{height: `4em`, width: `4em`}}/>
          <h4 style={{fontWeight: 200}}>TravisCI</h4>
        </div>
        <div style={{display: `flex`, flexDirection: `column`, alignItems: `center`, width: 120}}>
        <img src={github} style={{height: `4em`, width: `4em`}}/>
          <h4 style={{fontWeight: 200}}>Github</h4>
        </div>
        <div style={{display: `flex`, flexDirection: `column`, alignItems: `center`, width: 120}}>
        <img src={gitlab} style={{height: `4em`, width: `4em`}}/>
          <h4 style={{fontWeight: 200}}>Gitlab</h4>
        </div>
      </div>

      
    </div>

    <div
      style={{
        display: `flex`,
        flexDirection: `row`,
        alignItems: "center",
        justifyContent: "center",
        padding: 40,
      }}
    >
      <a
        href="https://github.com/ospfranco/tempomat"
        alt="Github link"
        style={{ marginRight: 40 }}
      >
        <img src={githubMark} style={{ marginBottom: 0 }} />
      </a>
      <a
        href="https://apps.apple.com/de/app/tempomat-circleci-toolbar/id1509296762?l=en&mt=12"
        alt="Mac app store link"
      >
        <img src={macButton} style={{ marginBottom: 0, width: 250 }} />
      </a>
    </div>
  </Layout>
);

export default IndexPage;
