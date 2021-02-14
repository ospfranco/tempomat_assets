import React, { useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { DownloadButton } from "../components/DownloadButtons";
import TwitterBadge from "../components/TwitterBadge";

import providers from "../images/providers.png";
import feature1 from "../images/feature1.webp";
import feature2 from "../images/feature2.webp";
import tempo from "../images/tempo.webp";
import apple from "../images/Apple.svg";
import bluetooth from "../images/bluetooth.svg";
import wifi from "../images/wifi.svg";
import controlCenter from "../images/controlCenter.svg";
import background from "../images/background.webp";
import productHunt from "../images/productHunt.png";

const IndexPage = () => {
  const [PHVisible, setPHVisible] = useState(true);

  return (
    <Layout>
      <SEO
        title="Continuous Integration Monitoring"
        description="CircleCI, Travis CI, Github, AppCenter, Bitrise on your macOS desktop"
      />

      <div className="flex h-6 border-b border-gray-300 shadow bg-gray-200 items-center px-4">
        <img src={apple} className="h-4" alt="apple logo" />
        <div className="font-semibold pl-4 flex-1 font-sans">
          Tempomat
      </div>
        <div className="relative w-3 h-5 m-4">
          <img src={tempo} className="previewImage" alt="Preview of Tempomat" />
        </div>
        <img src={bluetooth} className="hidden md:block h-4 px-3" alt="bluetooth icon" />
        <img src={wifi} className="h-3 px-3 hidden md:block " alt="wifi icon" />
        <img src={controlCenter} className="h-3 px-3" alt="control center icon" />
        <div className="font-sans text-sm px-3">
          Mon 25. Jan 19:01
      </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="absolute invisible xl:visible w-1/2 flex flex-col items-center" style={{ left: 40, top: 200 }}>
          <div>
            <p className="font-bold text-white text-4xl mb-4" style={{ textShadow: '2px 2px 15px #333' }}>
              CI builds and deployments on your desktop
            </p>
            <p className="text-lg text-white">
              Tempomat is a macOS menu bar app that polls your continuous integration system and/or deployments, condenses the information and notifies you when something breaks. <br />Your time is valuable, don't waste it waiting for slow web apps.
            </p>
          </div>

          <DownloadButton />
        </div>
        <img src={background} className="w-full object-cover" style={{ minHeight: 600 }} alt="background" />
        <div className="px-4 w-full lg:w-3/4 xl:w-2/3 flex flex-col mb-20">
          <div className="xl:hidden flex flex-col items-center">
            <p className="font-bold text-4xl mb-4">
              CI builds and deployments on your desktop
          </p>
            <p className="text-lg">
              Tempomat is a macOS menu bar app that <span className="text-yellow-500">polls your continuous integration</span> system and/or deployments, condenses the information and notifies you when <span className="text-red-500">something breaks</span>. <br /><br /> <span className="text-green-500">Your time is valuable</span>, don't waste it waiting for slow web apps.
          </p>

            <DownloadButton />
          </div>

          {/* ////////////////// Product hunt banner ///////////////// */}
          <TwitterBadge />

          {/* ////////////////// Second item ///////////////////////////  */}
          <div className="flex flex-col lg:flex-row items-center justify-center mt-24 xl:mt-2">
            <img src={feature1} className="lg:h-96 lg:w-1/2 object-contain" alt="feature 1" />
            <div className="lg:w-1/2 lg:ml-8">
              <p className="font-bold text-3xl mb-6">
                Important info a click away
            </p>
              <ul className="list-disc pl-6">
                <li className="my-2">CI provider</li>
                <li className="my-2">Build status</li>
                <li className="my-2">Repository information</li>
                <li className="my-2">Branch name</li>
                <li className="my-2">Build number</li>
                <li className="my-2">Individual build checks</li>
                <li className="my-2">Build date</li>
                <li className="my-2">Trigger rebuilds</li>
                <li className="my-2">HTTP ping checks</li>
              </ul>
            </div>
          </div>


          {/* ////////////////// Third item ///////////////////////////  */}
          <div className="flex flex-col-reverse flex-reverse lg:flex-row items-center mt-24">
            <div className="lg:w-1/2 lg:mr-8">
              <p className="font-bold text-3xl mb-6">
                List of features
            </p>
              <ul className="list-disc pl-6">
                <li className="my-2">
                  It is{" "}
                  <span className="font-semibold">
                    FAST
                </span>
                , it's native macOS app.
              </li>
                <li className="my-2">
                  Receive{" "}
                  <span className="font-semibold">
                    NOTIFICATIONS
                </span>{" "}
                on failures or restorations.
              </li>
                <li className="my-2">
                  Create your own{" "}
                  <span className="font-semibold">
                    CUSTOM FILTERS
                </span>{" "}
                using regexes
              </li>
                <li className="my-2">
                  Everything is{" "}
                  <span className="font-semibold">
                    STORED ENCRYPTED
                </span>{" "}
                in the macOS keychain.
              </li>
                <li className="my-2">
                  Look at it! It's{" "}
                  <span className="font-semibold">
                    BEAUTIFUL
                </span>
                , no other words to describe it.
              </li>
                <li className="my-2">
                  Trigger a{" "}
                  <span className="font-semibold">
                    REBUILD
                </span>
                , right from your desktop.
              </li>
                <li className="my-2">
                  <span className="font-semibold">
                    NO TRACKING
                </span>
                , your data and your privacy are a priority.
              </li>
                <li className="my-2">
                  completely {" "}
                  <span className="font-semibold">
                    FREE
                </span>
                </li>
                <li className="my-2">
                  <span className="font-semibold">
                    OPEN SOURCE
                </span>
                , you can contribute to it
              </li>
              </ul>
            </div>

            <img src={feature2} className="lg:h-96 lg:w-1/2 object-contain" alt="feature 2" />
          </div>

          {/* ////////////////// Fourth item ///////////////////////////  */}
          <div className="flex flex-col lg:flex-row items-center mt-20">
            <img src={providers} className="w-64 lg:h-80 lg:w-1/3 object-contain self-center" alt="providers" />
            <div className="lg:w-2/3 lg:ml-24">
              <div className="font-bold text-3xl p-4">
                Supports many continuous providers
            </div>
              <p className="p-4">
                Tempomat integrates tightly with each's service API, this allows for fetching of detailed information and dizzying speed, no need to wait for slow web interfaces to download only to show you your build has failed... yuck!
            </p>
            </div>
          </div>

          {/* ////////////////// Testimonials ///////////////////////////  */}
          <div className="font-bold text-3xl mt-20 mb-6">
            User Reviews
        </div>
          <h3 className="mb-1 font-semibold"><span className="text-green-400 text-2xl">5</span><span className="text-lg text-gray-600">/5</span> Must have for developers </h3>
          <div className="italic">
            "One of those tools that you don't realize how convenient it makes life
            until you try it. Works great with CircleCI and saves time having to
            wait and check the build status manually." - srolija
        </div>

          <h3 className="mb-1 mt-8 font-semibold"><span className="text-green-400 text-2xl">5</span><span className="text-lg text-gray-600">/5</span> A simple tool that adds so much DX value</h3>
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

          <h3 className="mb-1 mt-8 font-semibold"><span className="text-green-400 text-2xl">5</span><span className="text-lg text-gray-600">/5</span> Great tool for monitoring CI workflows</h3>
          <div className="italic">
            "I've been using CCMenu for a while but that has issues as it only monitors the default branch in CircelCI. I wanted the abiilty to monitor specific named branches such as "release" or "preflight", and also any personal branches such as "foo-*". Tempomat tool totally does all of that!" - Nigel1066
        </div>

          <DownloadButton />
          <TwitterBadge />

        </div>

        {PHVisible && <div
          className="rounded w-96 self-center px-4 bg-black fixed flex items-center justify-center"
          style={{ bottom: 40 }}
        >

          <a
            href="https://www.producthunt.com/posts/tempomat"
            target="_blank"
            rel="noreferrer"
            className="flex items-center"
          >
            <span className="text-white">Upvote Tempomat on</span>
            <img src={productHunt} className="w-32 h-12" alt="product hunt logo" />

          </a>
          <button className={`text-white absolute`} style={{ right: 15 }} onClick={() => setPHVisible(false)}>X</button>
        </div>}

      </div>

    </Layout>
  );
}

export default IndexPage;
