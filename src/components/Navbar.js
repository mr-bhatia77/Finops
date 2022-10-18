import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { chapterList, yearList } from "./MenuItems";
import './Navbar.css';
import ChapterDropDown from './ChapterDropDown';
import YearDropDown from './YearDropDown';
import { MenuItems, chapterMenuItems } from './MenuItems';
import axiosInstance from '../components/common/services/axiosInstance';
import { useSelector, useDispatch } from 'react-redux';
import { updateChapter } from '../redux/application/applicationActions';
import { newChapterDataList } from '../constants/constants';
import CircularProgress from "@mui/material/CircularProgress";

function Navbar({ chapter }) {

  const dispatch = useDispatch();
  const location = useLocation();
  // const navigate =useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = useSelector((state) => state.application.page)
  const currentChapter = chapter;
  const [loading, setLoading] = useState(true)

  const initialNavbar1State = {
    Home: false,
    Templates: false,
    Chapters: false,
    'Total Consolidated': false
  }

  const initialNavbar2State = {
    'spin4': false,
    'takeSteps': false,
    'majorGifts': false,
    'specialEvents': false,
    'administration': false,
    'administration(M&T)': false,
    'consolidated': false,
    'budgetSpread': false
  }

  const [click, setClick] = useState(false);
  const [dropdown3, setDropdown3] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [navbar1State, setNavbar1State] = useState({ ...initialNavbar1State, 'Home': true })
  const [navbar2State, setNavbar2State] = useState({ ...initialNavbar2State, 'majorGifts': true })
  const [chapterDataList, setChapterDataList] = useState(chapterList)
  const [yearDataList, setYearDataList] = useState(yearList)

  useEffect(() => {
    if (navbar1State.Templates) {
      setNavbar2State({ ...initialNavbar2State, [currentPage]: true })
    }
    if (navbar1State.Chapters) {
      setNavbar2State({ ...initialNavbar2State, [currentPage]: true })
    }
  }, [navbar1State])

  // useEffect(() => {
  //   // console.log(chapter)
  //   if (chapter) {
  //     setNavbar1State({ ...initialNavbar1State, 'Chapters': true })
  //     // setAppChapter(chapter)
  //   }
  // }, [chapter])

  useEffect(() => {
    if (location.pathname[1] === 'c')
      setNavbar1State({ Chapters: true })
    if (location.pathname[1] === 't')
      setNavbar1State({ Templates: true })
  }, [location.pathname[1]])

  useEffect(() => {
    // axiosInstance.get('/finops/meta/list/chapters').then((res)=>{
    //   setChapterDataList(res?.data);
    //   setLoading(false);
    //   if (searchParams.chapterId) {
    //   const newChapterList = newChapterDataList;
    //   const newChapter = newChapterList?.chapterInfoList?.find((chapter) => chapter.chapterId === searchParams.get("chapterId"));
    //   dispatch(updateChapter(newChapter))
    //   }
    // })


    if (searchParams.chapterId) {
      const newChapter = chapterList?.chapterInfoList?.find((chapter) => chapter.chapterId == searchParams.get("chapterId"))
      dispatch(updateChapter(newChapter));
    }
    setLoading(false)

  }, [searchParams])


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

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      {loading ? <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </div>
        :
        <><nav className='navbar'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            {/* Crohn Colitis Foundation */}
            <img alt="Crohn Colitis Foundation" src="https://www.pathassist.org/resource/resmgr/2019_conference/website_images/ccf_logo_h_pos_rgb.png"
              width="200" height="60" style={{ backgroundColor: 'white', marginTop: '5px' }} />
          </Link>
          {/* <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div> */}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className={navbar1State.Home ? 'nav-links-active' : 'nav-links'} onClick={() => setNavbar1State({ ...initialNavbar1State, 'Home': true })}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to={`/template/${currentPage}`} className={navbar1State.Templates ? 'nav-links-active' : 'nav-links'} onClick={() => setNavbar1State({ ...initialNavbar1State, 'Templates': true })}>
                Templates
              </Link>
            </li>
            <li
              className='nav-item'
              onMouseEnter={onMouseEnter3}
              onMouseLeave={onMouseLeave3}
            >
              <a
                className={navbar1State.Chapters ? 'nav-links-active' : 'nav-links'}>
                Chapters <i className='fas fa-caret-down' />
              </a>
              {dropdown3 && <ChapterDropDown
                currentPage={currentPage}
                chapterDataList={chapterDataList}
                currentChapter={currentChapter} />}
            </li>
            <li
              className='nav-item'
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <a
                className={navbar1State.Chapters ? 'nav-links-active' : 'nav-links'}>
                Year <i className='fas fa-caret-down' />
              </a>
              {dropdown && <YearDropDown
                currentPage={currentPage}
                yearDataList={yearDataList}
                currentChapter={currentChapter} />}
            </li>
            {/* <li
            className='nav-item'
            onMouseEnter={onMouseEnter3}
            onMouseLeave={onMouseLeave3}
          >
            <a
              className={navbar1State.Chapters?'nav-links-active':'nav-links'}>
              year <i className='fas fa-caret-down' />
            </a>
            {dropdown3 && <ChapterDropDown setChapter={setChapter} chapterDataList={chapterDataList}/>}
          </li> */}
            <li
              className='nav-item'
            >
              <Link to={`/chapter/consolidated?chapterId=${currentChapter.chapterId}`} className={navbar1State['Total Consolidated'] ? 'nav-links-active' : 'nav-links'} onClick={() => setNavbar1State({ ...initialNavbar1State, 'Total Consolidated': true })}>
                Total Consolidated
              </Link><br />
            </li>
            {/* <li
              className='nav-item'
            >
              <Link to='/template/administration' className='nav-links' onClick={() => setNavbar1State({ ...initialNavbar1State, 'Templates': true })}>
                Bar Representation
              </Link><br />
              {/* <div style={{color:'white'}}>(coming soon)</div> 
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
          {navbar1State.Templates && <nav className='secondNavbar'>
            <ul className='secondNavMenu'>
              {MenuItems?.map((item) => {
                const navState = { ...initialNavbar2State }
                navState[`${item.page}`] = true;
                return <li key={item.title} className='nav-item'>
                  <Link to={item.path} className={navbar2State[`${item.page}`] ? 'nav-links-active' : 'nav-links'} onClick={() => setNavbar2State(navState)}>
                    {item.title}
                  </Link>
                </li>
              })}
            </ul>
          </nav>}
          {(navbar1State.Chapters) && <nav className='secondNavbar'>
            <ul className='secondNavMenu'>
              {chapterMenuItems?.map((item) => {
                const navState = { ...initialNavbar2State }
                navState[`${item.page}`] = true;
                return <li key={item.title} className='nav-item'>
                  <Link to={`${item.path}?chapterId=${currentChapter.chapterId}`} className={navbar2State[`${item.page}`] ? 'nav-links-active' : 'nav-links'} onClick={() => setNavbar2State(navState)}>
                    {item.title}
                  </Link>
                </li>
              })}
            </ul>
          </nav>}
        </>}</>
  );
}

export default Navbar;
