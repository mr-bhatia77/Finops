import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import "./Dropdown.css";
import {useDispatch} from 'react-redux';
import {updateChapter} from '../redux/application/applicationActions'


function ChapterDropdown({chapterDataList, currentPage}) {

  const navigate = useNavigate();
  const [click, setClick] = useState(false);

  const dispatch = useDispatch();

  const handleClick = () => setClick(!click);

  const selectChapter = (item)=> {
    dispatch(updateChapter(item))
    // navigate(`/chapter/${currentPage}?chapterId=${item?.chapterId}`)
  }

  return (
    <>
        <ul style={{zIndex: 1}}
          onClick={handleClick}
          className={click ? "dropdown-menu clicked" : "dropdown-menu"}
        >
          {chapterDataList?.chapterInfoList?.map((item, index) => {
            return (
              <li key={index} onClick={()=>selectChapter(item)}>
                  <Link to={`/chapter/${currentPage}?chapterId=${item?.chapterId}`} className='dropdown-link'> {item?.chapterDescription}</Link>
              </li>
            );
          })}
        </ul>
    </>
  );
}

export default ChapterDropdown;
