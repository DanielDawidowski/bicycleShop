import React, { Component } from 'react'
import Title from '../titles/title'
import Img from 'gatsby-image'


import './bicycles-list.css'

const getCategories = items => {
    let tempItems = items.map(items => {
        return items.node.category        
    })
    let tempCategories = new Set(tempItems)
    let categories = Array.from(tempCategories)
    categories = ['all', ...categories]
    return categories
}


export default class Bicyclelist extends Component {  
    constructor(props){
        super(props)
        this.state = {
            items: props.items.edges,
            bicycleItems: props.items.edges,
            categories: getCategories(props.items.edges)
    }
}

    handleItems = category => {
        let tempItems = [...this.state.items]
        if(category === 'all'){
            this.setState(()=> {
                return {bicycleItems:tempItems}
            })
        } else {
            let items = tempItems.filter(({node}) => node.category === category)
            this.setState(()=> {
                return { bicycleItems: items }
            })
        }
    }

    render() {
        if(this.state.items.length > 0){ 
            return (
                <section className='menu py-5'>
                    <div className="container">
                        <Title title='best bicycles'/>
                        {/* categories */}
                        <div className="row mb-5">
                            <div className="col-10 mx-auto text-center">
                                {this.state.categories.map((category, index) => {
                                    return (
                                        <button 
                                            type='button' 
                                            key={index} 
                                            className='btn btn-page text-capitalize m-3' 
                                            onClick={()=> {
                                                this.handleItems(category)
                                            }}
                                        >
                                            {category}
                                        </button>)
                                })}
                            </div>
                        </div>
                        {/* items */}
                        <div className="row">
                            {this.state.bicycleItems.map(({ node }) => {
                                return(
                                    <div 
                                        key={node.id} 
                                        className="col-11 col-md-12 m-1 d-flex  bicycle-item"
                                    >
                                        <div>
                                            <Img 
                                                fixed={node.image.fixed}
                                                className='photo-item' 
                                            />
                                            
                                        </div>
                                        {/* item text */}
                                        <div className="flex-grow-1 px-3">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="mb-0 title-item">
                                                    {node.title}
                                                </h6>
                                                <h6 className="mb-0 price"> 
                                                    <big>$ {node.price}</big>  
                                                </h6>     
                                            </div>    
                                                <p className="text-muted description-item">
                                                    {node.description.description}
                                                </p>
                                                <button 
                                                    className='btn btn-page mt-1 text-capitalize snipcart-add-item'
                                                    data-item-id={node.id}
                                                    data-item-name={node.title}
                                                    data-item-price={node.price}
                                                    data-item-image={node.image.fixed.src}
                                                    data-item-url="https://bicycle-shop.netlify.com/bicycles" 
                                                >
                                                    Add to Cart
                                                </button>   
                                        </div>
                                    </div>
                                )
                                })
                            }
                        </div>
                    </div>
                </section>
            )
        } else {
            return (
                <section className='menu py-5'>
                    <div className="container">
                        <Title title='choose your wheels'/>
                        <div className="row">
                            <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                                <h1>there are no items to display</h1>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
    }
}
