import React, { useState,useEffect } from "react";
import { chapterList } from "./MenuItems";
import "./Dropdown.css";
import axios from 'axios';

function ChapterDropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const [chapterDataList,setChapterDataList] = useState(chapterList)

  useEffect(()=>{
    // axios.get('http://localhost:8080/finops/meta/list/chapters').then((res)=>{
    //   setChapterDataList(res?.data || []);
    // })
  },[])

  return (
    <>
        <ul style={{zIndex: 1}}
          onClick={handleClick}
          className={click ? "dropdown-menu clicked" : "dropdown-menu"}
        >
          {chapterDataList?.chapterInfoList?.map((item, index) => {
            return (
              <li key={index}  className='dropdown-link' >
                  {item?.chapterDescription}
              </li>
            );
          })}
        </ul>
    </>
  );
}

export default ChapterDropdown;
