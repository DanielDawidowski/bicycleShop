import React from 'react'
import Img from 'gatsby-image'

export default function Commercial({commercial}) {
    return (
        <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
            <div 
                className="card"
                style={{minHeight:'70%'}} 
            >
                <Img fluid={commercial.image.fluid} className='card-img-top' style={{
                    width:"250px",
                    height:"250px" }}/>
                <div className="card-body text-center">
                    <h6>{commercial.title}</h6>
                </div>
                <h6 className='card-footer mb-0'>{commercial.price} $</h6>
                <button 
                    className='btn btn-page mt-1 text-capitalize snipcart-add-item'
                    data-item-id={commercial.id}
                    data-item-name={commercial.title}
                    data-item-price={commercial.price}
                    data-item-image={commercial.image.fluid.src}
                    data-item-url="https://bicycle-shop.netlify.com/"                    
                >
                        Add to Cart
                </button>     
            </div>
        </div>
    )
}
