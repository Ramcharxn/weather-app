import { Link } from "react-router-dom";
import './style/NavBar.css'
import React, { useState, useEffect } from 'react'

const Navbar = () => {
    const [click ,setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    },[])

    window.addEventListener('resize',showButton)

  return (
    <div className="navbar">
    <div className="navbar-container">
        <div className="navbar-logo" onClick={closeMobileMenu}>
            R weather
        </div>
        <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fa fa-times' : 'fa fa-bars' } />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-items">
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                </Link>
            </li>
            <li className="nav-items">
                <Link to='/weather' className='nav-links' onClick={closeMobileMenu}>
                    Weather
                </Link>
            </li>
            
        </ul>
    </div>
</div>
  );
}
 
export default Navbar;