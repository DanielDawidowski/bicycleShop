import React from "react"
import BackgroundSection from '../components/background/background-section'
import { graphql } from 'gatsby'
import Layout from "../components/layout/layout"
import Info from '../components/home/info'


import SEO from "../components/seo"

const AboutPage = ({data}) => (
    <Layout>
        <SEO title="Home" />
    
        <BackgroundSection 
            img={data.img.childImageSharp.fluid} 
            title='about us' 
            styleClass='about-background' 
        />
        <Info/>        
    </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "nicole-baster-unsplash.jpg"} ) {
    childImageSharp {
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default AboutPage
