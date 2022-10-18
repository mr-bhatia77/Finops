import React, { useState } from "react";
import {Link} from 'react-router-dom';
import "./Dropdown.css";
import {useDispatch} from 'react-redux';
import {updateNation} from '../redux/application/applicationActions'


function NationDropDown({nationDataList, currentPage}) {
  const [click, setClick] = useState(false);

  const dispatch = useDispatch();

  const handleClick = () => setClick(!click);

  const selectYear = (item)=> {
    // dispatch(updateYear(item))
  }

  return (
    <>
        <ul style={{zIndex: 1}}
          onClick={handleClick}
          className={click ? "dropdown-menu clicked" : "dropdown-menu"}
        >
          {nationDataList?.nationInfoList?.map((item, index) => {
            return (
              <li key={index} onClick={()=>selectYear(item)}>
                  <Link to={`/chapter/${currentPage}?chapterId=${item?.nationId}`} className='dropdown-link'> {item?.nationName}</Link>
              </li>
            );
          })}
        </ul>
    </>
  );
}

export default NationDropDown;
