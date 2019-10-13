import React from 'react'
import Title from '../titles/title'

export default function Contact() {
    return (
        <section className="contact py-5">
        <Title title="contact us"/>
        <div className="row">
            <div className="col-10 col-sm-8 col-md-6 mx-auto">
                <form action="https://formspree.io/dvds1987@gmail.com" method="POST">
                    {/* name */}
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="name" 
                            id="name" 
                            placeholder='swen skurwensen' 
                        />
                    </div>
                    {/* email */}
                    <div className="form-group">
                        <label htmlFor="email">email</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="email"
                            id="email" 
                            placeholder='sw@n sk@rw@ns@n' 
                        />
                    </div>
                    {/* description */}
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea 
                            name="description" 
                            id='description' 
                            className="form-control"
                            rows='5' 
                            placeholder="Message">
                        </textarea>
                    </div>
                    {/* sumbit */}
                    <button 
                        type="submit" 
                        className="btn btn-page btn-block text-capitalize"
                        style={{
                            height:"35px"

                        }}
                    ><h6>Submit</h6>
                    </button>
                </form>
            </div>
        </div>

        </section>
    )
}
