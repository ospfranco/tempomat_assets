import React, { useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { DownloadButton } from "../components/DownloadButtons";
import providers from "../images/providers.png";
import feature2 from "../images/feature2.webp";
import tempo from "../images/tempo.webp";
import apple from "../images/Apple.svg";
import bluetooth from "../images/bluetooth.svg";
import wifi from "../images/wifi.svg";
import controlCenter from "../images/controlCenter.svg";
import background from "../images/background.jpg";
import productHunt from "../images/productHunt.png";
import desktop from "../images/desktop.svg";
import icon from "../images/Icon.png";
import dev from "../images/dev.svg";

const IndexPage = () => {
  const [PHVisible, setPHVisible] = useState(true);

  return (
    <Layout>
      <SEO
        title="Continuous Integration Monitoring"
        description="CircleCI, Travis CI, Github, AppCenter, Bitrise on your macOS desktop"
      />

      <div className="flex h-6 border-b border-gray-300 shadow bg-gray-200 items-center px-6">
        <img src={apple} className="h-4" alt="apple logo" />
        <div className="pl-4 font-sans font-semibold text-sm">
          cidemon
        </div>
        <div className="pl-6 font-sans text-sm hidden md:block">
          File
        </div>
        <div className="pl-6 font-sans text-sm hidden md:block">
          Edit
        </div>
        <div className="pl-6 font-sans text-sm hidden md:block">
          Help
        </div>
        <div className="flex-1"></div>
        <div className="relative w-3 h-5 m-4">
          <img src={tempo} className="previewImage" alt="Preview of cidemon" />
        </div>
        <img src={bluetooth} className="hidden md:block h-4 px-3" alt="bluetooth icon" />
        <img src={wifi} className="h-3 px-3 hidden md:block " alt="wifi icon" />
        <img src={controlCenter} className="h-3 px-3" alt="control center icon" />
        <div className="font-sans text-sm px-3">
          Mon 25. Jan 19:01
      </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="absolute invisible xl:visible w-1/2 px-4 flex flex-col items-center justify-center text-4xl text-white" style={{ left: 0, height: 600 }}>
          CI builds and deployments on your desktop
        </div>
        <img src={background} className="w-full object-cover" style={{ height: 600 }} alt="background" />
        <div className="px-4 w-full lg:w-3/4 xl:w-2/3 flex flex-col mb-20">
          <div className="xl:hidden flex flex-col">
            <p className="text-4xl mb-2 mt-12">
              CI builds and deployments on your desktop
            </p>
          </div>

          <div className="flex flex-col mt-2">
            <p className="text-lg mt-12">
              CI Demon monitors your <span className="text-purple-500 ">builds and deployments</span>. It integrates directly with your continuous integration service and <span className="text-purple-500">sits on the macOS status bar</span>. Completely invisible in the background, is always available and notifies you when something breaks.
            </p>
            <p className="text-3xl mb-12">
            Focus on what matters.
            </p>
            <DownloadButton />
          </div>

          {/* ////////////////// Product hunt banner ///////////////// */}
          {/* <TwitterBadge /> */}

          {/* ////////////////// Second item ///////////////////////////  */}
          <div className="flex flex-col lg:flex-row items-center justify-center mt-32">
            <img src={desktop} className="lg:h-96 lg:w-1/2 object-contain" alt="feature 1" />
            <div className="lg:w-1/2 lg:pl-12">
              <p className="text-3xl mb-2">
                Access with just a glance
              </p>
              <p className="mb-4">
                All the data you need to make a decision, <span className="text-purple-500 ">one click way</span>.
              </p>
              <ul className="list-disc pl-5">
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
          <div className="flex flex-col-reverse flex-reverse lg:flex-row items-center mt-32">
            <div className="lg:w-1/2 lg:mr-8">
              <p className="text-3xl mb-6">
                Crafted with love
            </p>
              <ul>
                <li className="my-2">
                  <span className=" text-purple-500">
                    Buy it once
                </span>
                , then it's yours forever.
              </li>
                <li className="my-2">
                  Really really{" "}
                  <span className=" text-purple-500">
                    fast
                </span>
                , it's a native App.
              </li>
                <li className="my-2">
                  Sends a{" "}
                  <span className=" text-purple-500">
                    notification
                </span>{" "}
                on failures or restorations.
              </li>
                <li className="my-2">
                  
                  <span className=" text-purple-500">
                    Custom filtering
                </span>{" "}
                via regex.
              </li>
                <li className="my-2">
                  Everything is{" "}
                  <span className=" text-purple-500">
                    locally stored
                </span>{" "}
                in the macOS keychain.
              </li>
                <li className="my-2">
                  Designed for{" "}
                  <span className=" text-purple-500">
                    simplicity  
                  </span>
                , just beautiful.
              </li>
                <li className="my-2">
                  <span className=" text-purple-500">
                    No tracking
                </span>
                , your data and your privacy are a priority.
              </li>
                <li className="my-2">
                  Made in{" "}
                  <span className=" text-purple-500">
                    Germany
                </span>
                {" "}🇩🇪
              </li>
              </ul>
            </div>

            <img src={feature2} className="lg:h-96 lg:w-1/2 object-contain" alt="feature 2" />
          </div>

          {/* ////////////////// Fourth item ///////////////////////////  */}
          <div className="flex flex-col lg:flex-row items-center mt-32">
            <img src={providers} className="w-64 lg:h-80 lg:w-1/2 lg:p-8 object-contain self-center" alt="providers" />
            <div className="lg:w-1/2 p-8">
              <div className="text-3xl mb-6">
                Works with your CI
            </div>
              <p className="mb-4">
                Deeply integrated each API, this allows for fetching of detailed information at dizzying speed.
              </p>
              <p className="">
              <span className="text-purple-500 ">No need to wait for slow web interfaces</span> to load only to show you your build has failed.
              </p>
            </div>
          </div>

          {/* ////////////////// Testimonials ///////////////////////////  */}
          <div className="text-3xl mt-32 mb-12 text-center">
            Still not convinced? Hear it from other devs
          </div>

          <h3 className="mb-1 text-2xl text-purple-500">Must have for developers</h3>
          <div>
            "One of those tools that you don't realize how convenient it makes life
            until you try it. Works great with CircleCI and saves time having to
            wait and check the build status manually."
          </div>
          <h3 className="mb-12">srolija</h3>

          <h3 className="mb-1 text-2xl text-purple-500">A simple tool that adds so much DX value</h3>
          <div>
            "I have no idea why a tool like this has not been published earlier.
            Having a unobtrusive reminder of CI status is extremely useful. While
            email or slack notifications might be great for important build
            notifications, I find this is so much better for getting updates on
            feature branches that don't need my immediate attention. It's also so
            much faster than going to a bookmarked CI page in your browser,
            finding the build, and waiting for slow interfaces to load. Would
            easily recommend to anyone using CI on your projects - especially
            CircleCI."
          </div>
          <h3 className="mb-12">twgraham</h3>

          <h3 className="mb-1 text-2xl text-purple-500">Great tool for monitoring CI workflows</h3>
          <div>
            "I've been using CCMenu for a while but that has issues as it only monitors the default branch in CircelCI. I wanted the abiilty to monitor specific named branches such as "release" or "preflight", and also any personal branches such as "foo-*". cidemon tool totally does all of that!"
          </div>
          <h3 className="mb-12">Nigel1066</h3>

          <img src={dev} className="h-64 my-32" alt="Dev illustration" />
          <p className="mb-6">My name is <a href="https://ospfranco.github.io" className="text-blue-500">Oscar Franco</a>, I work as a team lead. CI Demon came to exist because of the need I had to coordinate work across projects, repos and devs. With large amounts of code committed every day, it is particularly important to have an overview of the global state of your team/company/project.</p>
          
          <p className="mb-6">I'm not giving the product away because I put a lot of time and effort iterating on it, I also think that if you need this, it will save you so much time and wasted effort that it is worth more than what I ask for it. By purchasing the product you help me keep it alive.</p>
          
          <p className="mb-12">By using cidemon I solved my problem, which is the best testament to any product. Hopefully it will save you time and headaches when something goes unnoticed. If you have any question or problem, please, <a href="mailto:ospfranco@protonmail.com" className="text-blue-500">contact me.</a></p>

          <DownloadButton />

        </div>

      </div>

    </Layout>
  );
}

export default IndexPage;
