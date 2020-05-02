import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Support" />

    <h1>Support Page</h1>

    <p>

    Thank you for using Tempomat, currently there is no automated support, however feel free to get in contact with me directly and I will do my best to answer any question you may have:

    ospfranco@protonmail.com

    </p>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
