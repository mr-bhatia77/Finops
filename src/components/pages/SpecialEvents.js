import React from 'react';
import './specialEvents.css';
import { specialEventsStructure, specialEventsChapterStructure } from '../../constants/constants';
import SpecialEventsDataTable from '../common/SpecialEventsDataTable';
import SpecialEventsHeader from './SpecialEventsHeader';
import {useState,useEffect} from 'react';
import CircularProgress from "@mui/material/CircularProgress";
import {useDispatch} from 'react-redux';
import { updatePage } from '../../redux/application/applicationActions';
import TextField from "@mui/material/TextField";

const SpecialEvents = ({ isAdmin,chapter,year }) => {

  const dispatch=useDispatch()

  const [pageStructure, setPageStructure] = useState(isAdmin ? specialEventsStructure :specialEventsChapterStructure);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    // if (isAdmin) {
    //   axios.get(`http://localhost:8080/finops/template/Special Events`).then((res) => {
    //     setPageStructure(res.data)
    //     setLoading(false);
    //   });
    // }

    // else {
    //   axios.get(`http://localhost:8080/finops/chapter/Special Events`).then((res) => {
    //     setPageStructure(res.data)
    //     setLoading(false);
    //   });
    // }
  }

  useEffect (()=>{

    console.log('isAdmin::', isAdmin);
    setTimeout(() => {
      setLoading(false);
    }, 1000)



    getData();
    dispatch(updatePage('specialEvents'))
  },[])
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
    :
    <div style={{ width:'200%', marginLeft: "5%" }}>
      <div style={{ marginLeft: "23%" , marginTop:'100px'}}><h1>SpecialEvents {year.yearName}</h1></div>
      <div className='flex'>
      <div className="flexColumn mt-100">
          <div><h2>Special Events Budget </h2></div>
          <div className='flexColumn'>
            <div className='mt-8 flex verticalAlign'><div className='headerKeys '><h3>Area :</h3></div><TextField variant="filled" color="success" focused placeholder='Enter Area Here' value={chapter?.chapterArea}></TextField></div>
            <div className='mt-8 flex verticalAlign'><div className='headerKeys'><h3>Chapter:</h3></div><TextField variant="filled" color="success" focused placeholder='Enter Chapter Here' value={chapter?.chapterName} /></div>
            <div className='mt-8 flex verticalAlign'><div className='headerKeys'><h3>Chapter Code:</h3></div><TextField variant="filled" color="success" focused placeholder='Enter Chapter Code Here' value={chapter?.chapterCode} /></div>
            <div className='mt-8 flex verticalAlign'><div className='headerKeys'><h3>Department:</h3></div><TextField variant="filled" color="success" focused placeholder='Enter Department Code Here' value={chapter?.departmentCode} /></div>
          </div>
        </div>
      </div>
      <div >
        <SpecialEventsHeader
        isAdmin={isAdmin}></SpecialEventsHeader>
      </div>
      <div className='adminContent' style={{ border: '2px solid black' }}>
        <div>
          {pageStructure?.categoryList?.map((category) => {
            return <SpecialEventsDataTable
              isAdmin={isAdmin}
              category={category}
              getData={getData}></SpecialEventsDataTable>
          })}
        </div>
      </div>
      <div style={{height:'50px'}}></div>
    </div>}
  </>)
}

export default SpecialEvents;