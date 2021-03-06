import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="header">
            <div className="container row space-between v-center">
                <div className="nav-routes">
                    <ul className="row">
                        <Link className='link' to='/'>Store</Link>
                        <Link className='link' to='/contact'>Contact</Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
