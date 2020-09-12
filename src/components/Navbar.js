import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { ImOffice } from 'react-icons/im'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from './Button'
import './Navbar.css';
import { IconContext } from 'react-icons/lib'

function Navbar() {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  const showButton = () => {
  if(window.innerWidth <= 960) {
    setButton(false)
  }else{
    setButton(true)
  }
 };

 useEffect(() => {
  showButton();
 }, []);

 window.addEventListener('resize', showButton)

    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
          <div className = "navbar">
          <div className = "navbar-container container">
          <Link to='/' className = "navbar-logo" onClick={closeMobileMenu}>  
          <ImOffice className = 'navbar-icon' />
          NYC Adventures
          </Link> 
          <div className = "menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className ={click ? 'nav-menu active' : 'nav-menu'}>
          <li className ='nav-item'>
            <Link to = '/react-nyc-adventure' className = "nav-links" onClick={closeMobileMenu}>
              Manhatthan
            </Link>
            </li>
            <li className ='nav-item'>
            <Link to = '/brooklyn' className = "nav-links" onClick={closeMobileMenu}>
               Williamsburg
            </Link>
            </li>
            <li className ='nav-item'>
            <Link to = '/middle' className = "nav-links" onClick={closeMobileMenu}>
               GreenPoint
            </Link>
            </li>
            <li className ='nav-item'>
            <Link to = '/queens' className = "nav-links" onClick={closeMobileMenu}>
               Astoria
            </Link>
            </li>
            <li className ='nav-item'>
            <Link to = '/about' className = "nav-links" onClick={closeMobileMenu}>
               About us
            </Link>
            </li>
            <li className ='nav-item'>
            <Link to = '/price' className = "nav-links" onClick={closeMobileMenu}>
               Pricing
            </Link>
            </li>
                  <li className="nav-btn">
                    {button ? (
                      <Link to ='/brooklyn'className="btn-link">
                        <Button buttonStyle = 'btn--outline'> Start </Button>
                      </Link>
                    ): (
                      <Link to ='/START' className='btn-link' onClick={closeMobileMenu} >
                        <Button buttonStyle = 'btn--outline'
                                buttonStyle = 'btn--mobile'
                                >Start
                                </Button>
                      </Link>
                    ) }
                  </li>
          </ul>
        </div>
          </div>
          </IconContext.Provider>
        </>
    )
}

export default Navbar
