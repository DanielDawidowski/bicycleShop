import React from "react"
import BackgroundSection from '../components/background/background-section'
import { graphql } from 'gatsby'
import Layout from "../components/layout/layout"
import Bicycleslist from '../components/bicycleslist/bicycleslist'

import SEO from "../components/seo"

const BicyclesPage = ({data}) => (
    <Layout>
        <SEO title="Home" />
    
        <BackgroundSection 
            img={data.img.childImageSharp.fluid} 
            title='We Have Our Dream Bike' 
            styleClass='about-background' 
        />
        <Bicycleslist items={data.menu}/>       
    </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "sayan-nath-unsplash.jpg"} ) {
    childImageSharp {
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
    menu: allContentfulBicycleItem {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          category
          image {
            fixed(width:50,height:50){
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  
}
`

export default BicyclesPage