import React, { useState } from "react";
import {Link} from 'react-router-dom';
import "./Dropdown.css";
import {useDispatch} from 'react-redux';
import {updateYear} from '../redux/application/applicationActions'


function YearDropDown({yearDataList, currentPage}) {
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
          {yearDataList?.yearInfoList?.map((item, index) => {
            return (
              <li key={index} onClick={()=>selectYear(item)}>
                  <Link to={`/chapter/${currentPage}?chapterId=${item?.yearId}`} className='dropdown-link'> {item?.yearName}</Link>
              </li>
            );
          })}
        </ul>
    </>
  );
}

export default YearDropDown;
