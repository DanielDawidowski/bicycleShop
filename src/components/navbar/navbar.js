import React, { Component } from 'react'
import { Link } from 'gatsby'
import Logo from '../../images/bike.svg'
import { FaCartArrowDown } from 'react-icons/fa'
import './navbar.css'




export default class navbar extends Component {
    
    state= {
        navbarOpen: false,
        css:'collapse navbar-collapse',
        links: [
            {
                id:1,
                path:'/',
                text: "home"
            },
            {
                id:1,
                path:'/about',
                text: 'about'
            }
        ]       
    }

    navbarHandler =() => {
        this.state.navbarOpen ? this.setState({ navbarOpen: false, css:'collapse navbar-collapse' })
        : this.setState({ 
            navbarOpen:true,
            css: 'collapse navbar-collapse show'
        })
    }

    render() {
        return (
            <nav className='navbar navbar-expand-sm navbar-light'>
                <Link to="/" className='navbar-brand'>
                    <img src={Logo} alt="logo" style={{ width: "60px", height: "50px"}}/>
                    {/* <div>Icons made by <a href="https://www.flaticon.com/authors/photo3idea-studio" title="photo3idea_studio">photo3idea_studio</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div> */}
                </Link>
                <button className="navbar-toggler" type='button' onClick={this.navbarHandler}>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className={this.state.css}>
                    <ul className="navbar-nav m-auto">
                        {
                            this.state.links.map(link => {
                                return (
                                    <li key={link.id} className='nav-item p-1'>
                                        <Link to={link.path} className='nav-link text-capitalize'>
                                            {link.text}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                        <li className="nav-item ml-sm-5">
                            <FaCartArrowDown className="cart-icon" />
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
