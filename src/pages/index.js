import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Banner1 from "../images/Banner1.jpg";
import screenshot from "../images/screenshot.png";
import screenshotDark from "../images/screenshotDark.jpg";
import background2 from "../images/background2.jpg";
import circleci from "../images/circleci_dark.png";
import appcenter from "../images/appcenter_dark.png";
import bitrise from "../images/bitrise_dark.png";
import travis from "../images/travis_dark.png";
import github from "../images/github_dark.png";
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
    <div
      style={{
        display: `flex`,
        flexDirection: `column`,
        margin: `0 auto`,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 60,
      }}
    >
      <img src={Banner1} />
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
        <h2 style={{ fontWeight: 200, textAlign: "center" }}>
          Available on macOS/iOS/iPadOS
        </h2>
        <h2 style={{ fontWeight: 200, textAlign: "center" }}>
          Notifies you when a build breaks
        </h2>
        <h2 style={{ fontWeight: 200, textAlign: "center" }}>
          Easy set up and integration
        </h2>
        <h2 style={{ fontWeight: 200, textAlign: "center" }}>Open Source</h2>
      </div>

      <img src={screenshot} style={{ height: "30vh" }} alt="popover view" />
    </div>

    <div
      style={{
        display: `flex`,
        flexWrap: `wrap`,
        margin: `0 auto`,
        alignItems: "center",
        flex: 1,
        paddingTop: 80,
        paddingBottom: 80,
      }}
    >
      <div style={{ flex: 1, padding: 20 }}>
        <img src={screenshotDark} style={{ minWidth: 400 }} />
      </div>
      <div style={{ flex: 1 }}>
        <h1 style={{ fontWeight: 200, textAlign: "center" }}>
          Beautifully designed
        </h1>
        <h1 style={{ fontWeight: 200, textAlign: "center" }}>
          Dark mode supported
        </h1>
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
