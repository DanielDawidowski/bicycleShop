import React from 'react'
import { Link } from 'gatsby'
import './info.css'
import Title from '../titles/title'


export default function Info(){
    return(
        <section className='py-5'>
            <div className="container">
                <Title title='Need a wheels ?'/>
                <div className="row">
                    <div className="col-10 col-sm-8  text-center">
                        <p className="lead text-muted mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nesciunt odit officiis? Officiis architecto, fugiat quaerat corporis quos obcaecati temporibus sapiente officia quia ea quo ad quibusdam. Minima molestias laborum ullam modi, magnam eos tempora molestiae quidem nemo provident obcaecati quibusdam delectus recusandae maxime beatae amet illum quo! 
                        </p>
                        <Link to='/about/'>
                            <button className='btn btn-page'>About Page</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}