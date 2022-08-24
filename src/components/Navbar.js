import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import ChapterDropDown from './ChapterDropDown';
import PagesDropDown from './PagesDropDown';
import {MenuItems} from './MenuItems';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown3, setDropdown3] = useState(false)
  const [dropdown2, setDropdown2] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseEnter2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(true);
    }
  };

  const onMouseEnter3 = () => {
    if (window.innerWidth < 960) {
      setDropdown3(false);
    } else {
      setDropdown3(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const onMouseLeave2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(false);
    }
  };

  const onMouseLeave3 = () => {
    if (window.innerWidth < 960) {
      setDropdown3(false);
    } else {
      setDropdown3(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <a href="/#" className="logo.svg">
                  {/* Crohn Colitis Foundation */}
                  <img alt="Crohn Colitis Foundation" src="https://www.pathassist.org/resource/resmgr/2019_conference/website_images/ccf_logo_h_pos_rgb.png"
                      width="200" height="70" />
              </a>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/template/administration'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Roles <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown/>}
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter3}
            onMouseLeave={onMouseLeave3}
          >
            <Link
              to='/chapter/teamChallenge'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Chapters <i className='fas fa-caret-down' />
            </Link>
            {dropdown3 && <ChapterDropDown />}
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave2}
          >
            <Link
              to='/chapter/teamChallenge'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Pages <i className='fas fa-caret-down' />
            </Link>
            {dropdown2 && <PagesDropDown />}
          </li>
          {/* <li className='nav-item'>
            <Link
              to='/consolidated'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Consolidated
            </Link>
          </li> */}
          {/* <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li> */}
        </ul>
        {/* <Button /> */}
      </nav>
      <nav className='secondNavbar'>
      <ul className='secondNavMenu'>
      {MenuItems?.map((item)=>{
        return <li className='nav-item'>
        <Link to={item.path} className='nav-links' onClick={closeMobileMenu}>
          {item.title}
        </Link>
      </li>
      })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
