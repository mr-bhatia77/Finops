import React from 'react';
import { useState, useEffect } from 'react';
import MajorGiftsHeader from './MajorGiftsHeader';
import './majorGifts.css';
import { majorGiftsStructure, majorGiftsChapterStructure, majorGiftsEventHeader } from '../../constants/constants';
import MajorGiftsDataTable from '../common/MajorGiftsDataTable';
import CircularProgress from "@mui/material/CircularProgress";

const MajorGifts = ({ isAdmin, chapter }) => {

  const [pageStructure, setPageStructure] = useState(isAdmin ? majorGiftsStructure : majorGiftsChapterStructure);
  const [loading, setLoading] = useState(true);
  const [eventHeader, setEventHeader] = useState(majorGiftsEventHeader)

  const getData = () => {
    // setLoading(true);        
    // if (isAdmin) {
    //     const p1 = axios.get('http://localhost:8080/finops/meta/list/eventHeader/4')
    //     const p2 = axios.get(`http://localhost:8080/finops/template/getData/Major Gifts`);
    //     Promise.all([p1, p2]).then((res) => {
    //         setEventHeader(res[0].data)
    //         setPageStructure(res[1].data)
    //         setLoading(false);
    //     })
    // }
    // else {
    //     const p1 = axios.get('http://localhost:8080/finops/meta/list/eventHeader/4')
    //     const p3 = axios.get(`http://localhost:8080/finops/chapter/${chapter.chapterID}/getData/Major Gifts`);
    //     Promise.all([p1, p3]).then((res) => {
    //         setEventHeader(res[0].data)
    //         setPageStructure(res[1].data)
    //         setLoading(false);
    //     })
    // }
  }

  useEffect(() => {

    console.log('isAdmin::', isAdmin);
    console.log(chapter)
    setLoading(true)
    setEventHeader(majorGiftsEventHeader);
    setPageStructure(isAdmin ? majorGiftsStructure : majorGiftsChapterStructure);
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
      : <div style={{ width: "90%", marginLeft: "5%" }}>
        <div style={{ display: 'flex', marginTop: '20px', alignItems: 'center', justifyContent: 'center' }}>
          <div><h1>{isAdmin ? 'Template Screen' : `${chapter?.chapterName}`} - Major Gifts</h1></div>
        </div>
        <div className='flex'>
          <div className="header">
            <div><h2>Major Gifts & Other Fundraising Budget </h2></div>
            <div className='headerSubItem'><h3>Area :</h3><input placeholder='Enter Area Here' type='text' value={chapter?.chapterArea}></input></div>
            <div className='headerSubItem'><h3>Chapter:</h3><input placeholder='Enter Chapter Here' type='text' value={chapter?.chapterName}></input></div>
            <div className='headerSubItem'><h3>Chapter Code:</h3><input placeholder='Enter Chapter Code Here' type='text' value={chapter?.chapterCode}></input></div>
            <div className='headerSubItem'><h3>Department:</h3><input placeholder='Enter Department Code Here' type='text' value={chapter?.departmentCode}></input></div>
          </div>
        </div>
        <div className='majorGiftsHeaderTable'>
            <MajorGiftsHeader
              isAdmin={isAdmin}
              eventHeader={eventHeader}></MajorGiftsHeader>
          </div>
        <div className='content' style={{ border: '2px solid black' }}>
          <div>
            {pageStructure?.categoryList?.map((category, index) => {
              // console.log(category)
              return <MajorGiftsDataTable
                showBanner={index > 3 ? false : true}
                isAdmin={isAdmin}
                category={category}
                getData={getData}
                eventHeader={eventHeader}></MajorGiftsDataTable>
            })}
          </div>
        </div>
        <div style={{ height: '20px' }}></div>
      </div>}
  </>)
}

export default MajorGifts