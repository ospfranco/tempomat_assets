import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Banner1 from "../images/Banner1.jpg";
import screenshot from "../images/screenshot.png";
import screenshotDark from "../images/screenshotDark.jpg";
import abstractBanner from "../images/abstractBanner.png";
import background2 from "../images/background2.jpg";
import circleci from "../images/circleci_dark.png";
import appcenter from "../images/appcenter_dark.png";
import bitrise from "../images/bitrise_dark.png";
import travis from "../images/travis_dark.png";
import github from "../images/github_dark.png";
import gitlab from "../images/gitlab.png";
import macButton from "../images/DownloadMac.svg";
import logo from "../images/title.png";
import icon from "../images/PngIcon.png";
import githubMark from "../images/githubMark.png";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Tempomat"
      description="Continuous Integration monitoring in macOS: CircleCI, Travis CI, Github, AppCenter, Bitrise"
    />
    <div style={{padding: 20}}>
      <img src={abstractBanner}/>
    </div>


    <div
      style={{
        display: `flex`,
        flexWrap: "wrap-reverse",
        margin: `0 auto`,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 60,
      }}
    >
      <div
        style={{
          display: `flex`,
          flexDirection: "column",
          justifyContent: `center`,
          alignItems: `center`,
          flex: 1,
          minWidth: "320px",
          padding: 10,
        }}
      >
        <h2 style={{ fontWeight: `bold`, textAlign: "center", fontSize: `4em` }}>
          Stop guessing if your build is broken
        </h2>
        <h2 style={{ fontWeight: 200, textAlign: "center" }}>
          Save time by receiving notifications and triggering builds right from your desktop
        </h2>
      </div>
    </div>

    <div
      style={{
        margin: `0 auto`,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 60,
      }}
    >
      <div
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-around`
        }}
      >
        <div style={{display: `flex`, flexDirection: `column`, alignItems: `center`}}>
          <img src={circleci} style={{height: `4em`, width: `4em`}}/>
          <h4 style={{fontWeight: 200}}>CircleCI</h4>
        </div>
        <div style={{display: `flex`, flexDirection: `column`, alignItems: `center`}}>
        <img src={appcenter} style={{height: `4em`, width: `4em`}}/>
          <h4 style={{fontWeight: 200}}>AppCenter</h4>
        </div>
        <div style={{display: `flex`, flexDirection: `column`, alignItems: `center`}}>
        <img src={bitrise} style={{height: `4em`, width: `4em`}}/>
          <h4 style={{fontWeight: 200}}>Bitrise</h4>
        </div>
        <div style={{display: `flex`, flexDirection: `column`, alignItems: `center`}}>
        <img src={travis} style={{height: `4em`, width: `4em`}}/>
          <h4 style={{fontWeight: 200}}>TravisCI</h4>
        </div>
        <div style={{display: `flex`, flexDirection: `column`, alignItems: `center`}}>
        <img src={github} style={{height: `4em`, width: `4em`}}/>
          <h4 style={{fontWeight: 200}}>Github</h4>
        </div>
        <div style={{display: `flex`, flexDirection: `column`, alignItems: `center`}}>
        <img src={gitlab} style={{height: `4em`, width: `4em`}}/>
          <h4 style={{fontWeight: 200}}>Gitlab</h4>
        </div>
      </div>
      <div
        style={{
          display: `flex`,
          flexDirection: "column",
          justifyContent: `center`,
          alignItems: `center`,
          flex: 1,
          minWidth: "320px",
          padding: 10,
        }}
      >
        <h2 style={{ fontWeight: `bold`, textAlign: "center", fontSize: `2em` }}>
          Integrates with (almost) all your CI Systems
        </h2>
        <h3 style={{ fontWeight: 200, textAlign: "center" }}>
          New integrations are added regularly, it is also open source, so you can add your own integration.
        </h3>
      </div>
    </div>

    <div
      style={{
        display: `flex`,
        margin: `0 auto`,
        flex: 1,
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
