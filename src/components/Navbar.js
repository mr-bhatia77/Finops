import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import ChapterDropDown from './ChapterDropDown';
import {MenuItems,chapterMenuItems} from './MenuItems';

function Navbar() {

  const initialNavbar1State = {
    Home:false,
    Templates:false,
    Chapters:false
  }

  const initialNavbar2State = {
    Spin4:false,
    'Take Steps' :false,
    'Major Gifts':false,
    'Special Events': false,
    'Administration':false,
    'Administration (M&T)':false,
    'Consolidated':false,
    'Budget Spread':false
  }

  const [click, setClick] = useState(false);
  const [dropdown3, setDropdown3] = useState(false)
  const [navbar1State, setNavbar1State] = useState ({...initialNavbar1State,'Home':true})
  const [navbar2State, setNavbar2State] = useState ({...initialNavbar2State,'Administration':true})

  useEffect(()=>{
    if(navbar1State.Templates)
    setNavbar2State({...initialNavbar2State,'Administration':true})
    if(navbar1State.Chapters)
    setNavbar2State({...initialNavbar2State,'Administration':true})
  },[navbar1State])

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter3 = () => {
    if (window.innerWidth < 960) {
      setDropdown3(false);
    } else {
      setDropdown3(true);
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
            <Link to='/' className={navbar1State.Home?'nav-links-active':'nav-links'} onClick={()=>setNavbar1State({...initialNavbar1State,'Home':true})}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/template/administration' className={navbar1State.Templates? 'nav-links-active' :'nav-links'} onClick={()=>setNavbar1State({...initialNavbar1State,'Templates':true})}>
              Templates
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter3}
            onMouseLeave={onMouseLeave3}
          >
            <Link
              to='/chapter/administration'
              className={navbar1State.Chapters?'nav-links-active':'nav-links'}
              onClick={()=>setNavbar1State({...initialNavbar1State,'Chapters':true})}>
              Chapters <i className='fas fa-caret-down' />
            </Link>
            {dropdown3 && <ChapterDropDown />}
          </li>
          <li
            className='nav-item'
          >
              <Link to='/template/administration' className='nav-links' onClick={()=>setNavbar1State({...initialNavbar1State,'Templates':true})}>
              Bar Representation
            </Link>
          </li>
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
      {navbar1State.Templates && <nav className='secondNavbar'>
      <ul className='secondNavMenu'>
      {MenuItems?.map((item)=>{
        const navState={...initialNavbar2State}
        navState[`${item.title}`]=true;
        return <li className='nav-item'>
        <Link to={item.path} className={navbar2State[`${item.title}`]?'nav-links-active':'nav-links'} onClick={()=>setNavbar2State(navState)}>
          {item.title}
        </Link>
      </li>
      })}
        </ul>
      </nav>}
      {navbar1State.Chapters && <nav className='secondNavbar'>
      <ul className='secondNavMenu'>
      {chapterMenuItems?.map((item)=>{
        const navState={...initialNavbar2State}
        navState[`${item.title}`]=true;
        return <li className='nav-item'>
        <Link to={item.path} className={navbar2State[`${item.title}`]?'nav-links-active':'nav-links'} onClick={()=>setNavbar2State(navState)}>
          {item.title}
        </Link>
      </li>
      })}
        </ul>
      </nav>}
    </>
  );
}

export default Navbar;
