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
import abstractPreview from "../images/abstractPreview.png"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="macOS Continuous Integration monitoring: CircleCI, Travis CI, Github, AppCenter, Bitrise"
    />
    <div className="topSection">
      <img src={TitleLight} style={{ width: 200 }} />

      {/* <img src={Steps} className="abstractBanner" /> */}
      <picture>
        <source media="(max-width: 799px)" srcset={StepsVertical}/>
        <img src={StepsHorizontal} className="abstractBanner"/>
      </picture>


      <div
        style={{
          alignSelf: "center",
          padding: 20,
          maxWidth: 700,
          // color: 'white'
        }}
      >
        <p style={{fontSize: 36, fontWeight: '600', color: 'white'}}>Monitor your builds, from your desktop.</p>
        <p style={{fontSize: 20, lineHeight: '1.5em', color: 'white'}}>
          Tempomat sits on the macOS menu bar and retrieves information from your
          CI/CD system, stop wasting your time.
        </p>
      </div>

      <div
        style={{display: 'flex', alignItems: 'center', marginBottom: 80, marginTop: 80}}
      >
        <a
          href="https://apps.apple.com/de/app/tempomat-circleci-toolbar/id1509296762?l=en&mt=12"
          alt="Mac app store link"
        >
          <img src={macButton} style={{ marginBottom: 0, width: 160}} />
        </a>
        <div style={{width: 30}}/>
        <a
          href="#features"
          alt="Mac app store link"
          className="button"
        >
          Show features
        </a>
      </div>
    </div>

    <div className="midSection" id="features">
      <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', marginTop: 40, marginBottom: 100, justifyContent: 'center'}}>
        <img src={abstractPreview} className="mainAbstract" />
        <div style={{ padding: 40, flex: 1 }}>
          <p style={{fontSize: 24}}>All your builds,<br/>from all your branches,<br/> from all your CIs,<br/>organized and sitting comfortably on the menu bar, accesible with a single click.</p>
          <p style={{color: '#D33374'}}>Are you excited already?</p>
        </div>
      </div>
      

      <div style={{borderBottom: '1px solid #CCC', width: '100%'}}/>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        marginTop: 80,
        marginBottom: 80,
        justifyContent: 'space-around'
      }}>
        <div className="section">
          <img src={explanation} className="explanation" />
          <p style={{fontWeight: 600, fontSize: 20}}>Fast & Furious</p>
          <p style={{fontSize: 16}}>
            Say good bye to the <span style={{fontStyle: 'italic'}}>slow</span> web, say hi to a <span style={{color: '#D33374'}}>fast</span> native solution.
          </p>
        </div>

        <div className="section">
          <img src={notification} className="explanation" />
          <p style={{fontWeight: 600, fontSize: 20}}>Out of the way</p>
          <p style={{fontSize: 16}}>
            Receive <span style={{color: '#D33374'}}>notifications</span> when any of your builds break.
          </p>
        </div>

        <div className="section">
          <img src={providers} className="explanation" />
          <p style={{fontWeight: 600, fontSize: 20}}>Works for you</p>
          <p style={{fontSize: 16}}>
          Supports many <span style={{color: '#D33374'}}>CI providers</span> with more added regularly.
          </p>
        </div>
      </div>

      <div style={{borderBottom: '1px solid #CCC', width: '100%'}}/>

      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 100, marginBottom: 100}}>
        <p style={{fontSize: 16}}>
        <h2>and that is not all...</h2>
          <ul>
            <li>Not a subscription service, <span style={{color: '#D33374'}}>buy it once</span>, own it until the end of time.</li>
            <li>Filter using your custom <span style={{color: '#D33374'}}>regexes</span>, even do invert filtering.</li>
            <li>Everything is stored locally <span style={{color: '#D33374'}}>securely</span> on the keychain, no 3rd party snooping into your data.</li>
            <li><span style={{color: '#D33374'}}>Beautiful</span> minimal design, no ads.</li>
            <li>Trigger a <span style={{color: '#D33374'}}>rebuild job</span> with a single click, inside of the app!</li>
          </ul>
        </p>
      </div>
    
      <div style={{borderBottom: '1px solid #CCC', width: '100%'}}/>
    
    </div>
    <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        marginTop: 80,
        marginBottom: 80,
        justifyContent: 'space-around'
      }}>
      <div className="section">
        <h3 >Must have for developers</h3>
        <h1 style={{color: '#57BEEE'}}>5/5</h1>
        <div >
          One of those tools that you don't realize how convenient it makes life
          until you try it. Works great with CircleCI and saves time having to
          wait and check the build status manually.
        </div>
        <h4 style={{  marginTop: 20, color: '#57BEEE' }}>by srolija</h4>
      </div>

      <div className="section">
        <h3 >
          A simple tool that adds so much DX value
        </h3>
        <h1 style={{color: '#57BEEE'}}>5/5</h1>
        <div >
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
        <h4 style={{  marginTop: 20, color: '#57BEEE' }}>by twgraham</h4>
      </div>

      <div className="section">
        <h3 >Useful little app</h3>
        <h1 style={{color: '#57BEEE'}}>5/5</h1>
        <div >
          Found it useful to track my builds, developer was very responsive and
          fixed a small bug I had immediately
        </div>
        <h4 style={{  marginTop: 20, color: '#57BEEE' }}>by Speller</h4>
      </div>

    </div>
      <div

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
  </Layout>
);

export default IndexPage;
