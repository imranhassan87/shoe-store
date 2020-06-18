import React from 'react'

const Header = () => {
    return (
        <nav className="header">
            <div className="container row space-between v-center">
                <div className="logo">
                    <span>SHOE STORE</span>
                </div>
                <div className="nav-routes">
                    <ul className="row">
                        <a className='link' href='/'>Home</a>
                        <a className='link' href='/contact'>Contact</a>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
