import React, { useState,useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import "./Dropdown.css";

function ChapterDropdown({setChapter, chapterDataList}) {

  const navigate = useNavigate();
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const selectChapter = (item)=> {
    setChapter(item);
    navigate('/chapter/majorGifts')
  }

  return (
    <>
        <ul style={{zIndex: 1}}
          onClick={handleClick}
          className={click ? "dropdown-menu clicked" : "dropdown-menu"}
        >
          {chapterDataList?.chapterInfoList?.map((item, index) => {
            return (

              <li key={index}  className='dropdown-link' onClick={()=>selectChapter(item)}>
                  {item?.chapterDescription}
              </li>
            );
          })}
        </ul>
    </>
  );
}

export default ChapterDropdown;
