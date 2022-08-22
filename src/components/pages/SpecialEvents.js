import React from 'react';
import './specialEvents.css';
import { specialEventsStructure } from '../../constants/constants';
import SpecialEventsDataTable from '../common/SpecialEventsDataTable';
import SpecialEventsHeader from './SpecialEventsHeader';
import {useState,useEffect} from 'react';
import CircularProgress from "@mui/material/CircularProgress";

const SpecialEvents = ({ isAdmin }) => {

  const [pageStructure, setPageStructure] = useState(specialEventsStructure);
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
      <div className='flex'>
        <div className="header">
          <div><h2>Administration Budget - Meetings & Travel Worksheet </h2></div>
          <div className='headerSubItem'><h3>Area :</h3><input placeholder='Enter Area Here' type='text'></input></div>
          <div className='headerSubItem'><h3>Chapter:</h3><input placeholder='Enter Chapter Here' type='text'></input></div>
          <div className='headerSubItem'><h3>Chapter Code:</h3><input placeholder='Enter Chapter Code Here' type='text'></input></div>
          <div className='headerSubItem'><h3>Department:</h3><input placeholder='Enter Department Code Here' type='text'></input></div>
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