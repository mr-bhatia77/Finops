import React, { useState } from "react";
import {useNavigate,useLocation} from 'react-router-dom';
import "./Dropdown.css";

function ChapterDropdown({setChapter, chapterDataList}) {

  const navigate = useNavigate();
  const location = useLocation();
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const selectChapter = (item)=> {
    setChapter(item);
    navigate(`/chapter/majorGifts?chapterId=${item?.chapterId}`)
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
