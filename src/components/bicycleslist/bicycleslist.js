import React, { Component } from 'react'
import Title from '../titles/title'
import Img from 'gatsby-image'

export default class Bikelist extends Component {    
    constructor(props){
        super(props)
        this.state = {
        items: [],
        bicycleItem: props.items.edges
    }
}

    render() {
        if(this.state.items.length > 0){ 
            return (
                <section className='menu py-5'>
                    <div className="container">
                        <Title title='best bicycles'/>
                        <div className="row mb-5">
                            <div className="col">
                                <h1>these are our bikes</h1>
                            </div>
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
