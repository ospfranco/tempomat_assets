import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

// import Steps from "../images/Steps.png";
import StepsVertical from "../images/steps_vertical.png";
import StepsHorizontal from "../images/steps_horizontal.png";
import TitleLight from "../images/titleLight.png";
import macButton from "../images/DownloadMac.svg";
import explanation from "../images/explanation.png";
import notification from "../images/notification.png";
import providers from "../images/providers.png";
import abstractPreview from "../images/abstractPreview.png";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="macOS Continuous Integration monitoring: CircleCI, Travis CI, Github, AppCenter, Bitrise"
    />
    <div className="container">
      <picture className="abstractBanner">
        <source media="(max-width: 799px)" srcset={StepsVertical} />
        <img src={StepsHorizontal} />
      </picture>

      <div
        style={{
          alignSelf: "center",
          padding: 20,
          maxWidth: 700,
        }}
      >
        <div>
          <span className="rainbow" style={{ fontSize: 40 }}>
            Tempomat
          </span>
        </div>
        <p style={{ fontSize: 30, fontWeight: "700" }}>
          monitor your builds, from your desktop.
        </p>
        <p style={{ lineHeight: "1.5em" }}>
          The best macOS menu bar app to retrieve, store and notify you on your
          CI/CD builds, are you ready to stop opening web pages like a chump and
          stop wasting your time?
        </p>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "space-around",
          justifyContent: "space-around",
          marginBottom: 120,
          marginTop: 120,
          flexWrap: "wrap",
          height: 100,
          width: 300,
        }}
      >
        <a
          href="https://apps.apple.com/de/app/tempomat-circleci-toolbar/id1509296762?l=en&mt=12"
          alt="Mac app store link"
        >
          <img src={macButton} style={{ marginBottom: 0, width: 160 }} />
        </a>
        <div className="button-wrapper">
          <a href="#preview" alt="Mac app store link" className="button">
            <span className="rainbow">Uh... show me more</span>
          </a>
        </div>
      </div>

      <div style={{ maxWidth: 700 }}>
        <img id="preview" src={abstractPreview} className="mainAbstract" />
        <p style={{ fontSize: 30, fontWeight: "700" }}>
          ALL the builds, ALL the branches, ALL the CIs
        </p>
        <ul>
          <li>CI Provider</li>
          <li>Build status</li>
          <li>Repository owner & name</li>
          <li>Branch</li>
          <li>Build number</li>
        </ul>
        <p>
          Sorted, filtered and already loaded when you need it. No need to wait
          for slow web apps.
        </p>
      </div>

      <div
        className="button-wrapper"
        style={{ marginTop: 80, marginBottom: 80 }}
      >
        <a href="#features" alt="Mac app store link" className="button">
          <span className="rainbow">Hmm... what else can it do?</span>
        </a>
      </div>

      <div
        id="features"
        style={{
          marginTop: 20,
        }}
      >
        <p style={{ fontSize: 30, fontWeight: "700" }}>
          Here are all the goodies
        </p>
        <p style={{ fontSize: 16 }}>
          <ul>
            <li>
              It is{" "}
              <span className="rainbow" style={{ fontWeight: "bold" }}>
                FAST AF
              </span>
              , it's native macOS app, it doesn't get any faster.
            </li>
            <li>
              Receive{" "}
              <span className="rainbow" style={{ fontWeight: "bold" }}>
                NOTIFICATIONS
              </span>{" "}
              when a build fails/passes.
            </li>
            <li>
              Not a another SaaS,{" "}
              <span className="rainbow" style={{ fontWeight: "bold" }}>
                BUY IT ONCE
              </span>
              , own it until the end of time.
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
                ENCRYPTED AND SAFELY STORED
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
              Supports all the{" "}
              <span className="rainbow" style={{ fontWeight: "bold" }}>
                CIs
              </span>
              ... ok, not all, but many:
            </li>
          </ul>
        </p>
      </div>
      <img src={providers} className="explanation" style={{ marginTop: 20 }} />

      <div
        className="button-wrapper"
        style={{ marginTop: 80, marginBottom: 80 }}
      >
        <a href="#testimonials" alt="Mac app store link" className="button">
          <span className="rainbow">I'm still not convinced...</span>
        </a>
      </div>
    </div>

    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        marginBottom: 20,
        padding: 20,
        justifyContent: "space-around",
      }}
      id="testimonials"
    >
      <h2>Seriously? See what the users say about it</h2>
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
        <h3>Useful little app</h3>
        <h1 className="rainbow">5/5</h1>
        <div>
          Found it useful to track my builds, developer was very responsive and
          fixed a small bug I had immediately
        </div>
        <h4 style={{ marginTop: 20, fontWeight: "bold" }}>by Speller</h4>
      </div>
    </div>
    <div
      style={{
        display: `flex`,
        flexDirection: `column`,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="button-wrapper" style={{ marginBottom: 100 }}>
        <a
          href="https://apps.apple.com/de/app/tempomat-circleci-toolbar/id1509296762?l=en&mt=12"
          alt="Mac app store link"
          className="button"
        >
          <span className="rainbow">
            Take my money already!
          </span>
        </a>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
