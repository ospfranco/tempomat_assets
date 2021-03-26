import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Create a Github Personal Token for cidemon" />

    <h1>Github Token Guide</h1>

    <p>
      Here is a small guide on how can you create a Github Personal Token so you can see your actions status inside of cidemon.
    </p>

      
    <p>
      <ul>
        <li>Log into github and go to your settings page</li>
        <li>Go into the developer tab</li>
        <li>Go into personal tokens</li>
        <li>Create new token</li>
        <li>Make sure the token has `workflow` and `repo` access</li>
        <li>Copy and Paste the token into cidemon</li>
        <li>Each row is a repository you need to subscribe, if you only have one repository there is no need to click on the "Add Repository" button</li>
        <li>You are done! cidemon should now refresh and fetch any action information</li>
      </ul>
    </p>

       
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
