import React from 'react'
import './footer.css'

export default function footer() {
    return (
        <footer className='footer py-3'>
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 text-white text-center text-capitalize">
                        <h2>all rights reserved &copy; {new Date().getFullYear().toString()}</h2>
                    </div>
                </div>
            </div>
        </footer>
    )
}
