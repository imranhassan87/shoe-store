import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="header">
            <div className="container row space-between v-center">
                <div className="logo">
                    <span>SHOE STORE</span>
                </div>
                <div className="nav-routes">
                    <ul className="row">
                        <Link className='link' to='/'>Home</Link>
                        <Link className='link' to='/contact'>Contact</Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
