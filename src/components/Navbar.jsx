import './Navbar.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faXmark, faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
            CSV <FontAwesomeIcon icon={faCoffee} />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faXmark : faBars} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu} >
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/services' className='nav-links' onClick={closeMobileMenu} >
                Services
              </Link>
            </li>
            
            <li>
              <Link to='/contact' className='nav-links-mobile' onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Contact</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;