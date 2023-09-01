import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
        setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);

  return (
    <>
     <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick=
        {closeMobileMenu}> 
         jessica li
        </Link>
        <div className='menu-icon' onClick={handleClick}>
            <i className={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    home
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                    about
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                    projects
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                    contact
                </Link>
            </li>
        </ul>
      </div>
     </nav>
    </>
  )
}

export default Navbar