import React from 'react';
import { useState, useEffect } from 'react';
import MajorGiftsHeader from './MajorGiftsHeader';
import './majorGifts.css';
import { majorGiftsStructure, majorGiftsChapterStructure, majorGiftsEventHeader } from '../../constants/constants';
import MajorGiftsDataTable from '../common/MajorGiftsDataTable';
import CircularProgress from "@mui/material/CircularProgress";
import TextField from '@mui/material/TextField';
import axios from 'axios';

const MajorGifts = ({ isAdmin, chapter }) => {

  const [pageStructure, setPageStructure] = useState(isAdmin ? majorGiftsStructure : majorGiftsChapterStructure);
  const [loading, setLoading] = useState(true);
  const [eventHeader, setEventHeader] = useState(majorGiftsEventHeader)
  let totalIndex = majorGiftsEventHeader?.eventHeaderList?.find((eventHeader) => eventHeader.eventName.toLowerCase() === 'total')?.event_id;
  // console.log(totalIndex);
  const getData = () => {
    // setLoading(true);        
    // if (isAdmin) {
    //     const p1 = axios.get('http://localhost:8080/finops/meta/list/eventHeader/4')
    //     const p2 = axios.get(`http://localhost:8080/finops/campaign/4/template/fetchData`);
    //     Promise.all([p1, p2]).then((res) => {
    //         setEventHeader(res[0].data)
    //         totalIndex = res[0].data?.eventHeaderList?.find((eventHeader)=>eventHeader.eventName.toLowerCase()==='total')?.event_id;
    //         setPageStructure(modifyStructure(res[1].data))
    //         setLoading(false);
    //     })
    // }
    // else {
    //     const p1 = axios.get('http://localhost:8080/finops/meta/list/eventHeader/4')
    //     const p3 = axios.get(`http://localhost:8080/finops/campaign/4/chapter/${chapter.chapterId}/fetchData`);
    //     Promise.all([p1, p3]).then((res) => {
    //         setEventHeader(res[0].data)
    //         setPageStructure(modifyStructure(res[1].data))
    //         totalIndex = res[0].data?.eventHeaderList?.find((eventHeader)=>eventHeader.eventName.toLowerCase()==='total')?.event_id;
    //         setLoading(false);
    //     })
    // }
  }

  const modifyStructure = (structure) => {
    const structureCategoryList = JSON.parse(JSON.stringify(structure.categoryList))
    const newStructure = {};
    newStructure.categoryList = [structureCategoryList[0], structureCategoryList[1], structureCategoryList[17], structureCategoryList[2], structureCategoryList[3], structureCategoryList[18], structureCategoryList[19], structureCategoryList[4], structureCategoryList[5], structureCategoryList[20], ...structureCategoryList.slice(6, 17),...structureCategoryList.slice(23, 26), structureCategoryList[21], structureCategoryList[22]]
    // console.log(...structureCategoryList.slice(6,17))
    // console.log(newStructure)
    return newStructure
  }

  useEffect(() => {

    console.log('isAdmin::', isAdmin);
    console.log('chapter::', chapter)
    setLoading(true)
    setEventHeader(majorGiftsEventHeader);
    setPageStructure(isAdmin ? modifyStructure(majorGiftsStructure) : modifyStructure(majorGiftsChapterStructure));
    setTimeout(() => {
      setLoading(false);
    }, 1000)



    getData();

  }, [isAdmin, chapter])

  return (<>
    {loading ? <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress />
    </div>
      : <div style={{ width: isAdmin?'1673px':'1573px', marginLeft: "5%" }}>
        <div style={{ display: 'flex', marginTop: '20px', alignItems: 'center', justifyContent: 'center' }}>
          <div><h1>{isAdmin ? 'Template Screen' : `${chapter?.chapterName}`} - Major Gifts</h1></div>
        </div>
        <div className="flexColumn mt-100">
          <div><h2>Major Gifts & Other Fundraising Budget </h2></div>
          <div className='flexColumn'>
            <div className='mt-8 flex verticalAlign'><div className='headerKeys '><h3>Area :</h3></div><TextField variant="filled" color="success" focused placeholder='Enter Area Here' value={chapter?.chapterArea}></TextField></div>
            <div className='mt-8 flex verticalAlign'><div className='headerKeys'><h3>Chapter:</h3></div><TextField variant="filled" color="success" focused placeholder='Enter Chapter Here' value={chapter?.chapterName} /></div>
            <div className='mt-8 flex verticalAlign'><div className='headerKeys'><h3>Chapter Code:</h3></div><TextField variant="filled" color="success" focused placeholder='Enter Chapter Code Here' value={chapter?.chapterCode} /></div>
            <div className='mt-8 flex verticalAlign'><div className='headerKeys'><h3>Department:</h3></div><TextField variant="filled" color="success" focused placeholder='Enter Department Code Here' value={chapter?.departmentCode} /></div>
          </div>
        </div>
        <div className='majorGiftsHeaderTable'>
          <MajorGiftsHeader
            isAdmin={isAdmin}
            eventHeader={eventHeader}>
          </MajorGiftsHeader>
        </div>
        <div className='majorGiftContent' style={{ border: '2px solid black' }}>
          <div>
            {pageStructure?.categoryList?.map((category, index) => {
              // console.log(category)
              return <MajorGiftsDataTable
                key={category.categoryName}
                showBanner={(index > 4 || index === 2) ? false : true}
                isAdmin={isAdmin}
                category={category}
                getData={getData}
                eventHeader={eventHeader}
                totalIndex={totalIndex}
              ></MajorGiftsDataTable>
            })}
          </div>
        </div>
        <div style={{ height: '20px' }}></div>
      </div>}
  </>)
}

export default MajorGifts;