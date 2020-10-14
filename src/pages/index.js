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
      <img src={TitleLight} style={{ width: 400 }} />

      <img src={Steps} className="abstractBanner" />

      <div
        style={{
          alignSelf: "center",
          padding: 20,
          textAlign: "center",
          width: `90%`,
          maxWidth: 1000,
          color: "white",
        }}
      >
        <h1>Monitor your CI/CD jobs from your desktop</h1>
        <h3>
          Tempomat sits on the macOS menu bar and retrieves information your favourite
          CI/CD system, check your build jobs quickly and stop wondering if your
          build is broken.
        </h3>
      </div>

      <a
        href="https://apps.apple.com/de/app/tempomat-circleci-toolbar/id1509296762?l=en&mt=12"
        alt="Mac app store link"
        style={{ marginBottom: 40, marginTop: 40 }}
      >
        <img src={macButton} style={{ marginBottom: 0, width: 250 }} />
      </a>

      <p style={{ alignSelf: "center", padding: 20, color: "white" }}>
        Keep scrolling to find out more! 😉
      </p>
    </div>

    <div className="midSection">
      <div className="section">
        <img src={explanation} className="explanation" />
        <p style={{fontSize: 18, textAlign: 'center'}}>
          Say good bye to the <span style={{fontStyle: 'italic'}}>slow</span> web, say hi to a <span style={{fontWeight: 'bold'}}>fast</span> native solution with all the info you need.
        </p>

        {/* <ul>
          <li>CI/CD</li>
          <li>Build status </li>
          <li>Owner </li>
          <li>Repository name </li>
          <li>Branch </li>
          <li>Build number </li>
        </ul> */}
      </div>

      <div className="section">
        <img src={notification} className="explanation" />
        <p style={{fontSize: 18, textAlign: 'center'}}>
          Receive <span style={{fontWeight: 'bold'}}>notifications</span> when any of your builds break.
        </p>
      </div>

      <div className="section">
        <img src={providers} className="explanation" />
        <p style={{fontSize: 18, textAlign: 'center'}}>
        Supports many <span style={{fontWeight: 'bold'}}>CI providers</span> with more added regularly.
        </p>
      </div>
      
      <div className="section">
        <img src={macbook} className="explanation" />
        <p style={{fontSize: 18, textAlign: 'center'}}>
          <ul>
            <li>Not a SaaS, <span style={{fontWeight: 'bold'}}>buy it once</span>, then it's yours</li>
            <li>Powerful <span style={{fontWeight: 'bold'}}>Regex</span> filters</li>
            <li><span style={{fontWeight: 'bold'}}>Securely</span> stores data on the macOS keychain</li>
            <li><span style={{fontWeight: 'bold'}}>Beautiful</span> minimalistic design</li>
            <li>Trigger a <span style={{fontWeight: 'bold'}}>rebuild</span> with a single click!</li>
          </ul>
        </p>
      </div>
    </div>
    <div className="bottomSection">
      <div className="section">
        <h3 style={{ color: `white` }}>Must have for developers</h3>
        <h3 style={{ color: `white` }}>⭐️⭐️⭐️⭐️⭐️</h3>
        <h4 style={{ color: `white` }}>by srolija</h4>
        <div style={{ color: `white` }}>
          One of those tools that you don't realize how convenient it makes life
          until you try it. Works great with CircleCI and saves time having to
          wait and check the build status manually.
        </div>
      </div>

      <div className="section">
        <h3 style={{ color: `white` }}>
          A simple tool that adds so much DX value
        </h3>
        <h3 style={{ color: `white` }}>⭐️⭐️⭐️⭐️⭐️</h3>
        <h4 style={{ color: `white` }}>by twgraham</h4>
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
      </div>

      <div className="section">
        <h3 style={{ color: `white` }}>Useful little app</h3>
        <h3 style={{ color: `white` }}>⭐️⭐️⭐️⭐️⭐️</h3>
        <h4 style={{ color: `white` }}>by Speller</h4>
        <div style={{ color: `white` }}>
          Found it useful to track my builds, developer was very responsive and
          fixed a small bug I had immediately
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
      </div>
    </div>
  </Layout>
);

export default IndexPage;
