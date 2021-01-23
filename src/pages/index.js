import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import providers from "../images/providers.png";
import abstractPreview from "../images/abstractPreview.webp";
import Icon from "../images/Icon.png";
import feature1 from "../images/feature1.webp";
import feature2 from "../images/feature2.webp";
import profile from "../images/profile.webp";

const IndexPage = () => (
  <Layout>
    <SEO
      title="CI Monitoring"
      description="macOS Continuous Integration monitoring: CircleCI, Travis CI, Github, AppCenter, Bitrise"
    />

    {/* /////////////////////// NAVBAR /////////////////////////////////// */}

    <nav className="flex flex-row w-screen bg-black items-center py-4 px-8" style={{position: 'fixed', top: 0}}>
      <img src={Icon} style={{ height: 30, width: 30, marginRight: 10, marginBottom: 0 }} alt="app icon" />
      <div className="flex-1 text-white text-2xl font-semibold">
        Tempomat
      </div>
      <div>
        <a
          href="https://github.com/ospfranco/tempomat/releases"
          className="bg-white px-4 py-2 rounded mr-2 text-black"
          onclick="_paq.push(['trackEvent', 'get it']);"
        >Get it</a>
      </div>
    </nav>
    {/* /////////////////////// NAVBAR /////////////////////////////////// */}

    <div className="my-20 md:mt-32 flex flex-col items-center">
      <div className="p-4 w-full lg:w-3/4 xl:w-2/3 flex flex-col">

        <img 
          id="preview" 
          src={abstractPreview}
          className="rounded w-full object-contain shadow-xl lg:w-2/3 mt-2 mb-20 self-center" 
          alt="Big preview" 
        />

        <p className="font-bold text-4xl mb-4">
          Your CI builds and deployments on your desktop
        </p>
        <p className="text-lg">
          Tempomat is a macOS menu bar app that <span className="text-yellow-500">polls your continuous integration</span> system and/or deployments, condenses the information and notifies you when <span className="text-red-500">something breaks</span>. <br /><br /> <span className="text-green-500">Your time is valuable</span> don't waste it waiting for slow web apps.
        </p>

        <div className="flex self-center my-12">
          <a
            href="https://github.com/ospfranco/tempomat/releases"
            alt="Download link"
            className="rounded bg-black text-white w-24 md:w-52 text-center px-4 py-2 self-center hover:bg-gray-700 mr-2"
            onclick="_paq.push(['trackEvent', 'get it']);"
          >
            Get it
          </a>

          <a
            href="https://github.com/ospfranco/tempomat/releases"
            alt="Download link"
            className="my-4 rounded border border-black w-24 md:w-52 text-center px-4 py-2 self-center hover:bg-gray-700 ml-2"
            onclick="_paq.push(['trackEvent', 'source']);"
          >
            Source
          </a>

        </div>

        {/* ////////////////// Second item ///////////////////////////  */}
        <div className="lg:flex items-center mt-12">
          <img src={feature1} className="lg:h-96 lg:w-1/2 object-contain" alt="feature 1" />
          <div className="lg:w-1/2 lg:ml-8">
            <p className="font-bold text-3xl">
              All the important info a click away
            </p>
            <ul className="list-disc ">
              <li className="my-2 ml-4">CI provider</li>
              <li className="my-2 ml-4">Build status</li>
              <li className="my-2 ml-4">Repository information</li>
              <li className="my-2 ml-4">Branch name</li>
              <li className="my-2 ml-4">Build number</li>
              <li className="my-2 ml-4">Individual build checks</li>
              <li className="my-2 ml-4">Build date</li>
              <li className="my-2 ml-4">Trigger rebuilds</li>
              <li className="my-2 ml-4"><b className="text-green-400">*NEW*</b> HTTP ping checks</li>
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
              <li className="my-2 ml-4">
                It is{" "}
                <span className="font-semibold">
                  FAST
                </span>
                , it's native macOS app.
              </li>
              <li className="my-2 ml-4">
                Receive{" "}
                <span className="font-semibold">
                  NOTIFICATIONS
                </span>{" "}
                on failures or restorations.
              </li>
              <li className="my-2 ml-4">
                Not a another SaaS,{" "}
                <span className="font-semibold">
                  BUY IT ONCE
                </span>{" "}
                and it is yours.
              </li>
              <li className="my-2 ml-4">
                Create your own{" "}
                <span className="font-semibold">
                  CUSTOM FILTERS
                </span>{" "}
                using regexes, even do invert filtering.
              </li>
              <li className="my-2 ml-4">
                Everything is{" "}
                <span className="font-semibold">
                  STORED ENCRYPTED
                </span>{" "}
                in the macOS keychain.
              </li>
              <li className="my-2 ml-4">
                Look at it! It's{" "}
                <span className="font-semibold">
                  BEAUTIFUL
                </span>
                , no other words to describe it.
              </li>
              <li className="my-2 ml-4">
                Trigger a{" "}
                <span className="font-semibold">
                  REBUILD
                </span>
                , right from your desktop.
              </li>
              <li className="my-2 ml-4">
                <span className="font-semibold">
                  NO TRACKING
                </span>
                , your data and your privacy are a priority.
              </li>
              <li className="my-2 ml-4">
                <span className="font-semibold">
                  IT'S FREE
                </span>
                , 0 cost, nada
              </li>
              <li className="my-2 ml-4">
                <span className="font-semibold">
                  IT'S OPEN SOURCE
                </span>
                , you can contribute to it
              </li>
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


      <div className="my-12 flex flex-col items-center">
        <div>Created by <span className="font-bold">Oscar Franco</span></div>
        <img src={profile} className="h-24 w-24 rounded-full my-2" alt="profile pic oscar"/>
        <div>Follow me on</div>

          <a href="https://www.twitter.com/ospfranco" className="font-bold">Twitter</a>
          <a href="https://www.github.com/ospfranco" className="font-bold">Github</a>
          <a href="https://ospfranco.github.io" className="font-bold">Blog</a>
        
      </div>
    </div>

  </Layout>
);

export default IndexPage;
