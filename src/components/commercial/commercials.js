import React from 'react'
import Commercial from './commercial'
import Title from '../titles/title'
import { StaticQuery, graphql } from "gatsby"

const getCommercials = graphql`
{
    products: allContentfulBicycleCommercial{
        edges{
            node{
            id
            title
            price
            image{
                fluid(maxHeight:250){
                    src
                    ...GatsbyContentfulFluid_tracedSVG
                    }
                }
            }
        }
    }
}`


export default function Commercials() {
    return (
            <StaticQuery 
                query={getCommercials} render={data => {
                return (
                    <section 
                        className='py-5'
                    >
                        <div className="container">
                            <Title title='30% OFF' />
                            <div className="row">
                                {data.products.edges.map(({ node: commercial })=> {
                                    return <Commercial key={commercial.id} commercial={commercial}/>
                                })}
                            </div>
                        </div>
                    </section>
                )
            }}/>
    )
}
