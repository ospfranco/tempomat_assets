import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { DownloadButton } from "../components/DownloadButtons";
import providers from "../images/providers.png";
import feature2 from "../images/feature2.png";
import tempo from "../images/tempo.png";
import apple from "../images/Apple.svg";
import bluetooth from "../images/bluetooth.svg";
import wifi from "../images/wifi.svg";
import controlCenter from "../images/controlCenter.svg";
import desktop from "../images/desktop.svg";
import dev from "../images/dev.svg";

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Continuous Integration Monitoring"
        description="CircleCI, Travis CI, Github, AppCenter, Bitrise on your macOS desktop"
      />

      <div className="flex h-6 border-b border-gray-300 shadow bg-gray-200 items-center px-6">
        <img src={apple} className="h-4" alt="apple logo" />
        <div className="pl-4 font-sans font-semibold text-sm">
          CI Demon
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
        <div className="px-4 flex flex-col justify-center text-4xl bg-gradient-to-b from-purple-500 via-blue-500 to-white w-full" style={{ left: 0, height: 600 }}>
          
        </div>
        {/* <img src={background} className="w-full object-cover" style={{ height: 600 }} alt="background" /> */}
        <div className="px-4 w-full lg:w-3/4 xl:w-2/3 flex flex-col mb-20">
          <div className="flex flex-col">
            <p className="text-4xl mb-2 mt-12 text-center font-bold">
              CI builds and deployments on your desktop
            </p>
          </div>

          <div className="flex flex-col mt-2">
            <p className="text-xl mb-12 text-center text-gray-500">
              Monitor your <span className="font-bold ">builds and deployments</span>. Connected to your CI service puts all your builds <span className="font-bold">in the macOS status bar</span>
            </p>
            <DownloadButton />
          </div>

          {/* ////////////////// Product hunt banner ///////////////// */}
          {/* <TwitterBadge /> */}

          {/* ////////////////// Second item ///////////////////////////  */}
          <div className="flex flex-col lg:flex-row items-center justify-center mt-32">
            <img src={desktop} className="lg:w-1/2 object-contain bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-lg px-12 py-6" alt="feature 1" />
            <div className="lg:w-1/2 lg:pl-12">
              <p className="text-3xl mb-2 font-bold">
                At a glance
              </p>
              <p className="mb-4 text-gray-500">
                All the data you need, build status, committer, branch name, etc. All in a simple design and already loaded when you open the app.
              </p>
              
            </div>
          </div>


          {/* ////////////////// Third item ///////////////////////////  */}
          <div className="flex flex-col-reverse flex-reverse lg:flex-row items-center mt-32">
            <div className="lg:w-1/2 lg:mr-8">
            <p className="text-3xl mb-2 font-bold">
                Crafted with love
            </p>
              <ul>
                <li className="my-2 text-gray-500">
                  <span className="text-gray-700 font-semibold">
                    Buy it once
                </span>
                , then it's yours forever.
              </li>
                <li className="my-2 text-gray-500">
                  Really{" "}
                  <span className="text-gray-700 font-semibold">
                    fast
                </span>
                , it's a native app.
              </li>
                <li className="my-2 text-gray-500">
                  Sends a{" "}
                  <span className="text-gray-700 font-semibold">
                    notification
                </span>{" "}
                on failures or restorations.
              </li>
                <li className="my-2 text-gray-500">
                  <span className="text-gray-700 font-semibold">
                    Custom filtering
                </span>{" "}
                via regex.
              </li>
                <li className="my-2 text-gray-500">
                  Locally stored in the {" "}
                  <span className="text-gray-700 font-semibold">
                  macOS keychain.
                </span>
              </li>
                <li className="my-2 text-gray-500">
                  Designed for{" "}
                  <span className="text-gray-700 font-semibold">
                    simplicity  
                  </span>
                , just beautiful.
              </li>
                <li className="my-2 text-gray-500">
                  <span className="text-gray-700 font-semibold">
                    No tracking
                </span>
                {" "}at all.
              </li>
                <li className="my-2 text-gray-500">
                  Made in{" "}
                  <span className="text-gray-700 font-semibold">
                    Germany
                </span>
                {" "}🇩🇪
              </li>
              </ul>
            </div>

            <img src={feature2} className="h-96 lg:w-1/2 object-contain p-6 rounded-lg bg-gradient-to-l from-blue-500 to-blue-800" alt="feature 2" />
          </div>

          {/* ////////////////// Fourth item ///////////////////////////  */}
          <div className="flex flex-col lg:flex-row items-center mt-32">
            <img src={providers} className="w-64 lg:h-80 lg:w-1/2 lg:p-8 object-contain self-center bg-gradient-to-b from-green-200 to-green-800 rounded-lg" alt="providers" />
            <div className="lg:w-1/2 p-8">
              <div className="text-3xl font-bold">
                Works with your CI
            </div>
              <p className="mb-4 text-gray-500">
                Deeply integrated each API, this allows for fetching of detailed information at dizzying speed.
              </p>
              <p className="text-gray-500">
              <span className="font-semibold text-gray-800"> Don't wait for slow web interfaces</span> to load only to show you your build has failed.
              </p>
            </div>
          </div>

          {/* ////////////////// Testimonials ///////////////////////////  */}
          <div className="text-3xl mt-32 mb-8 font-bold">
            Hear it from other devs
          </div>

          <h3 className="mb-1 text-2xl text-purple-500">Must have for developers</h3>
          <div>
            "One of those tools that you don't realize how convenient it makes life
            until you try it. Works great with CircleCI and saves time having to
            wait and check the build status manually."
          </div>
          <h3 className="mb-12 font-bold">srolija</h3>

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
          <h3 className="mb-12 font-bold">twgraham</h3>

          <h3 className="mb-1 text-2xl text-purple-500">Great tool for monitoring CI workflows</h3>
          <div>
            "I've been using CCMenu for a while but that has issues as it only monitors the default branch in CircelCI. I wanted the abiilty to monitor specific named branches such as "release" or "preflight", and also any personal branches such as "foo-*". cidemon tool totally does all of that!"
          </div>
          <h3 className="mb-12 font-bold">Nigel1066</h3>

          <img src={dev} className="h-64 my-32" alt="Dev illustration" />

          <div className="text-3xl mb-8">
            About me
          </div>
          <p className="mb-6">My name is <a href="https://ospfranco.github.io" className="text-blue-500">Oscar Franco</a>, I work as a team lead. CI Demon came to exist because of the need I had to coordinate work across projects, repos and devs. With large amounts of code committed every day, it is particularly important to have an overview of the global state of your team/company/project.</p>
          
          <p className="mb-6">I'm not giving the product away because I put a lot of time and effort iterating on it, I also think that if you need this, it will save you so much time and wasted effort that it is worth more than what I ask for it. By purchasing the product you help me keep it alive.</p>
          
          <p className="mb-6">Hopefully it will save you time and headaches when something goes unnoticed.</p>
          <p className="mb-12">If you have any question or problem, please, <a href="mailto:ospfranco@protonmail.com" className="text-blue-500">contact me.</a></p>

          <DownloadButton />
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
