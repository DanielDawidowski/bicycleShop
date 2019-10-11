import React from "react"
import { Link } from "gatsby"
import { FaGulp } from 'react-icons/fa'

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Link to="/">Go </Link>

    <FaGulp/>
    <div>Icons made by <a href="https://www.flaticon.com/authors/photo3idea-studio" title="photo3idea_studio">photo3idea_studio</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
  </Layout>
)

export default IndexPage
