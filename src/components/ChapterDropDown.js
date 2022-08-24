import React, { useState } from "react";
import { chapterList } from "./MenuItems";
import "./Dropdown.css";

function ChapterDropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
        <ul style={{zIndex: 1}}
          onClick={handleClick}
          className={click ? "dropdown-menu clicked" : "dropdown-menu"}
        >
          {chapterList.map((item, index) => {
            return (
              <li key={index}  className='dropdown-link' >
                  {item.chapterName}
              </li>
            );
          })}
        </ul>
    </>
  );
}

export default ChapterDropdown;
