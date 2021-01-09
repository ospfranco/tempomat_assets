import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import StepsVertical from "../images/steps_vertical.png";
import StepsHorizontal from "../images/steps_horizontal.png";
import macButton from "../images/DownloadMac.svg";
import providers from "../images/providers.png";
import abstractPreview from "../images/abstractPreview.png";
import Icon from "../images/Icon.png";

const IndexPage = () => (
  <Layout>
    <SEO
      title="CI Monitoring"
      description="macOS Continuous Integration monitoring: CircleCI, Travis CI, Github, AppCenter, Bitrise"
    />
    <nav className="navbar">
      <img src={Icon} style={{ height: 30, width: 30, marginRight: 10, marginBottom: 0 }} alt="app icon"/>
      <div style={{ flex: 1 }}>
        <span className="rainbow" style={{ fontSize: 24 }}>
          Tempomat
        </span>
      </div>
      <div>
        <a href="https://twitter.com/tempomat_app" className="navbar-button">Twitter</a>
      </div>
      <div>
        <a
          href="https://apps.apple.com/de/app/tempomat-circleci-toolbar/id1509296762?l=en&mt=12"
          className="navbar-button"
          style={{ backgroundColor: 'white', borderRadius: 5, padding: 10, color: '#292f3a' }}
        >Get it</a>
      </div>
    </nav>
    <div className="container">
      <picture className="abstractBanner">
        <source media="(max-width: 799px)" srcset={StepsVertical} />
        <img src={StepsHorizontal} alt="Steps showing how the app looks" />
      </picture>

      <div
        style={{
          alignSelf: "center",
          padding: 20,
          maxWidth: 800,
        }}
      >
        <p style={{ fontSize: 40, fontWeight: "700" }}>
          Monitor your builds and endpoints from your desktop
        </p>
        <p style={{ fontSize: 20, lineHeight: '2rem' }}>
          Tempomat is a macOS menu bar app that polls your continuous integration system and/or http endpoints and notifies you when something is broken, are you ready to stop opening web pages like a chump and
          stop wasting your time?
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: 120,
          marginTop: 20,
        }}
      >
        <a
          href="https://apps.apple.com/de/app/tempomat-circleci-toolbar/id1509296762?l=en&mt=12"
          alt="Mac app store link"
        >
          <img src={macButton} style={{ marginBottom: 0, width: 160 }} alt="Buy on app store button" />
        </a>
      </div>

      <div style={{ maxWidth: 700 }}>
        <img id="preview" src={abstractPreview} className="mainAbstract" alt="Big preview" />
        <p style={{ fontSize: 30, fontWeight: "700" }}>
          All the power from your desktop
        </p>
        <p>
          Tempomat shows you all the information you need on a single click.
        </p>
        <ul>
          <li>CI Provider</li>
          <li>Status</li>
          <li>Repository owner & name</li>
          <li>Branch</li>
          <li>Build number</li>
          <li>Individual build checks</li>
          <li><b>NEW</b> HTTP ping checks to your endpoints</li>
        </ul>
        <p>
          Sort by date, status or name, filter via regexes
        </p>
      </div>

      <div
        id="features"
        style={{
          marginTop: 80,
        }}
      >
        <p style={{ fontSize: 30, fontWeight: "700" }}>
          Here are all the goodies:
        </p>
        <p style={{ fontSize: 16 }}>
          <ul>
            <li>
              It is{" "}
              <span className="rainbow" style={{ fontWeight: "bold" }}>
                FAST
              </span>
              , it's native macOS app.
            </li>
            <li>
              Create{" "}
              <span className="rainbow" style={{ fontWeight: "bold" }}>
                HTTP HEALTH CHECKS
              </span>{" "}
              for your back-end or front-end deployment.
            </li>
            <li>
              Receive{" "}
              <span className="rainbow" style={{ fontWeight: "bold" }}>
                NOTIFICATIONS
              </span>{" "}
              on failures or restorations.
            </li>
            <li>
              Not a another SaaS,{" "}
              <span className="rainbow" style={{ fontWeight: "bold" }}>
                BUY IT ONCE
              </span>{" "}
               and it is yours.
            </li>
            <li>
              Create your own{" "}
              <span className="rainbow" style={{ fontWeight: "bold" }}>
                CUSTOM FILTERS
              </span>{" "}
              using regexes, even do invert filtering.
            </li>
            <li>
              Everything is{" "}
              <span className="rainbow" style={{ fontWeight: "bold" }}>
                STORED ENCRYPTED
              </span>{" "}
              in the macOS keychain.
            </li>
            <li>
              Look at it! It's{" "}
              <span className="rainbow" style={{ fontWeight: "bold" }}>
                BEAUTIFUL
              </span>
              , no other words to describe it.
            </li>
            <li>
              Trigger a{" "}
              <span className="rainbow" style={{ fontWeight: "bold" }}>
                REBUILD
              </span>
              , right from your desktop.
            </li>
            <li>
              <span className="rainbow" style={{ fontWeight: "bold" }}>
                NO TRACKING
              </span>
              , your data and your privacy are a priority.
            </li>
            <li>
              Supports all the{" "}
              <span className="rainbow" style={{ fontWeight: "bold" }}>
                CONTINUOUS INTEGRATION SYSTEMS
              </span>
              ... ok, not all, but many:
            </li>
          </ul>
        </p>
      </div>
      <img src={providers} className="explanation" style={{ marginTop: 20 }} alt="List of supported systems" />
    </div>

    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        marginTop: 80,
        marginBottom: 20,
        padding: 20,
        justifyContent: "space-around",
      }}
      id="testimonials"
    >
      <h2>Happy user reviews!</h2>
    </div>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        marginBottom: 80,
        justifyContent: "space-around",
      }}
    >
      <div className="section">
        <h3>Must have for developers</h3>
        <h1 className="rainbow">5/5</h1>
        <div>
          One of those tools that you don't realize how convenient it makes life
          until you try it. Works great with CircleCI and saves time having to
          wait and check the build status manually.
        </div>
        <h4 style={{ marginTop: 20, fontWeight: "bold" }}>by srolija</h4>
      </div>

      <div className="section">
        <h3>A simple tool that adds so much DX value</h3>
        <h1 className="rainbow">5/5</h1>
        <div>
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
        <h4 style={{ marginTop: 20, fontWeight: "bold" }}>by twgraham</h4>
      </div>

      <div className="section">
        <h3>Great tool for monitoring CI workflows</h3>
        <h1 className="rainbow">5/5</h1>
        <div>
          I've been using CCMenu for a while but that has issues as it only monitors the default branch in CircelCI. I wanted the abiilty to monitor specific named branches such as "release" or "preflight", and also any personal branches such as "foo-*". Tempomat tool totally does all of that!
        </div>
        <h4 style={{ marginTop: 20, fontWeight: "bold" }}>by Nigel1066</h4>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
