import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import macButton from "../images/DownloadMac.svg";
import providers from "../images/providers.png";
import abstractPreview from "../images/abstractPreview.jpg";
import Icon from "../images/Icon.png";
import feature1 from "../images/feature1.jpg";
import feature2 from "../images/feature2.jpg";

const IndexPage = () => (
  <Layout>
    <SEO
      title="CI Monitoring"
      description="macOS Continuous Integration monitoring: CircleCI, Travis CI, Github, AppCenter, Bitrise"
    />

    {/* /////////////////////// NAVBAR /////////////////////////////////// */}
    <nav className="navbar">
      <img src={Icon} style={{ height: 30, width: 30, marginRight: 10, marginBottom: 0 }} alt="app icon" />
      <div style={{ flex: 1 }}>
        <span className="rainbow" style={{ fontSize: 24 }}>
          Tempomat
        </span>
      </div>
      <div className="mr-2">
        <a href="emailto:ospfranco@protonmail.com?subject=Tempomat Support (Web)" className="navbar-button">Support</a>
      </div>
      <div>
        <a
          href="https://apps.apple.com/de/app/tempomat-circleci-toolbar/id1509296762?l=en&mt=12"
          className="navbar-button"
          style={{ backgroundColor: 'white', borderRadius: 5, padding: 10, color: '#292f3a' }}
        >Get it</a>
      </div>
    </nav>
    {/* /////////////////////// NAVBAR /////////////////////////////////// */}

    <div className="my-20 md:mt-32 flex flex-col items-center">
      <div className="p-4 w-full lg:w-3/4 xl:w-2/3 flex flex-col">
        <img id="preview" src={abstractPreview} className="rounded w-full object-contain shadow-xl lg:w-2/3 self-center" alt="Big preview" />

        <p className="font-bold text-4xl">
          Your CI builds and deployments on your desktop
        </p>
        <p className="text-lg">
          Tempomat is a macOS menu bar app that <span className="text-yellow-500 font-semibold">polls your continuous integration</span> system and/or deployments, condenses the information and notifies you when <span className="text-red-500 font-semibold">something breaks</span>. <br /><br /> <span className="text-green-500 font-semibold">Your time is valuable</span> don't waste it waiting for slow web apps.
        </p>

        <a
          href="https://apps.apple.com/de/app/tempomat-circleci-toolbar/id1509296762?l=en&mt=12"
          alt="Mac app store link"
          className="flex justify-center mt-12"
        >
          <img src={macButton} className="h-16" alt="Buy on app store button" />
        </a>

        {/* ////////////////// Second item ///////////////////////////  */}
        <div className="lg:flex items-center mt-12">
          <img src={feature1} className="lg:h-96 lg:w-1/2 object-contain" alt="feature 1" />
          <div className="lg:w-1/2 lg:ml-8">
            <p className="font-bold text-3xl">
              All the important info a click away
            </p>
            <ul className="list-disc">
              <li>CI provider</li>
              <li>Build status</li>
              <li>Repository information</li>
              <li>Branch name</li>
              <li>Build number</li>
              <li>Individual build checks</li>
              <li>Build date</li>
              <li>Trigger rebuilds</li>
              <li><b className="text-green-400">*NEW*</b> HTTP ping checks</li>
            </ul>
          </div>
        </div>


        {/* ////////////////// Third item ///////////////////////////  */}
        <div className="flex flex-col-reverse flex-reverse lg:flex-row items-center mt-12">
          <div className="lg:w-1/2 lg:mr-8">
            <p className="font-bold text-3xl">
              List of features
            </p>
            <ul className="list-disc">

              <li>
                It is{" "}
                <span className="rainbow" style={{ fontWeight: "bold" }}>
                  FAST
              </span>
              , it's native macOS app.
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
              {/* <li>
              Supports all the{" "}
              <span className="rainbow" style={{ fontWeight: "bold" }}>
                CI SYSTEMS
              </span>
              ... ok, not all, but many:
            </li> */}
            </ul>
          </div>

          <img src={feature2} className="lg:h-96 lg:w-1/2 object-contain" alt="feature 2" />
        </div>

        {/* ////////////////// Fourth item ///////////////////////////  */}
        <div className="flex flex-col lg:flex-row items-center mt-12">
          <img src={providers} className="w-64 lg:h-80 lg:w-1/3 object-contain self-center" alt="providers" />
          <div className="lg:w-2/3 lg:ml-24">
            <p className="font-bold text-3xl">
              Supports many continuous providers
            </p>
            <p>
              Tempomat integrates tightly with each's service API, this allows for fetching of detailed information and dizzying speed, no need to wait for slow web interfaces to download only to show you your build has failed... yuck!
            </p>
          </div>
        </div>

        {/* ////////////////// Testimonials ///////////////////////////  */}
        <p className="font-bold text-3xl mt-24">
          Here is what happy devs have to say about it
        </p>
        <h3 className="mb-1 text-green-600"><span className="text-green-400">5</span><span className="text-lg text-gray-600">/5</span> Must have for developers </h3>
        <div className="italic">
          "One of those tools that you don't realize how convenient it makes life
          until you try it. Works great with CircleCI and saves time having to
          wait and check the build status manually." - srolija
        </div>

        <h3 className="mb-1 mt-8 text-green-600"><span className="text-green-400">5</span><span className="text-lg text-gray-600">/5</span> A simple tool that adds so much DX value</h3>
        <div className="italic">
          "I have no idea why a tool like this has not been published earlier.
          Having a unobtrusive reminder of CI status is extremely useful. While
          email or slack notifications might be great for important build
          notifications, I find this is so much better for getting updates on
          feature branches that don't need my immediate attention. It's also so
          much faster than going to a bookmarked CI page in your browser,
          finding the build, and waiting for slow interfaces to load. Would
          easily recommend to anyone using CI on your projects - especially
          CircleCI." - twgraham
        </div>

        <h3 className="mb-1 mt-8 text-green-600"><span className="text-green-400">5</span><span className="text-lg text-gray-600">/5</span> Great tool for monitoring CI workflows</h3>
        <div className="italic">
          "I've been using CCMenu for a while but that has issues as it only monitors the default branch in CircelCI. I wanted the abiilty to monitor specific named branches such as "release" or "preflight", and also any personal branches such as "foo-*". Tempomat tool totally does all of that!" - Nigel1066
        </div>
      </div>

      <a
          href="https://apps.apple.com/de/app/tempomat-circleci-toolbar/id1509296762?l=en&mt=12"
          alt="Mac app store link"
          className="flex justify-center mt-12"
        >
          <img src={macButton} className="h-16" alt="Buy on app store button" />
        </a>
        
    </div>


  </Layout>
);

export default IndexPage;
