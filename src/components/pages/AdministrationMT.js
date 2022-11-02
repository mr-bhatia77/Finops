import React from 'react';
import './administrationMT.css';
import { administrationMTStructure, administrationMTChapterStructure } from '../../constants/constants';
import AdministrationMTDataTable from '../common/AdministrationMTDataTable';
import AdministrationMTHeader from './AdministrationMTHeader';
import { useState, useEffect } from 'react';
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch } from 'react-redux';
import { updatePage } from '../../redux/application/applicationActions';
import TextField from '@mui/material/TextField';


const AdministrationMT = ({ isAdmin, chapter, year }) => {

  const dispatch = useDispatch()
  const [pageStructure, setPageStructure] = useState(isAdmin ? administrationMTStructure : administrationMTChapterStructure);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    // if (isAdmin) {
    //   axios.get(`http://localhost:8080/finops/template/Admin M&T`).then((res) => {
    //     setPageStructure(res.data)
    //     setLoading(false);
    //   });
    // }

    // else {
    //   axios.get(`http://localhost:8080/finops/chapter/Admin M&T`).then((res) => {
    //     setPageStructure(res.data)
    //     setLoading(false);
    //   });
    // }
  }

  useEffect(() => {

    console.log('isAdmin::', isAdmin);
    setTimeout(() => {
      setLoading(false);
    }, 1000)



    getData();
    dispatch(updatePage('administration(M&T)'))

  }, [])
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
      : <>
        <div className='flex textAlignCenter mt-20'><h1>Administration M&T {year.yearName}</h1></div>
        <div className='container'>
          <div style={{ width: '200%', marginLeft: "5%" }}>
            <div className="flexColumn mt-100">
              <div><h2>Administration Budget - Meetings & Travel Worksheet </h2></div>
              <div className='flexColumn'>
                <div className='mt-8 flex verticalAlign'><div className='headerKeys '><h3>Area :</h3></div><TextField variant="filled" color="success" focused placeholder='Enter Area Here' value={chapter?.chapterArea}></TextField></div>
                <div className='mt-8 flex verticalAlign'><div className='headerKeys'><h3>Chapter:</h3></div><TextField variant="filled" color="success" focused placeholder='Enter Chapter Here' value={chapter?.chapterName} /></div>
                <div className='mt-8 flex verticalAlign'><div className='headerKeys'><h3>Chapter Code:</h3></div><TextField variant="filled" color="success" focused placeholder='Enter Chapter Code Here' value={chapter?.chapterCode} /></div>
                <div className='mt-8 flex verticalAlign'><div className='headerKeys'><h3>Department:</h3></div><TextField variant="filled" color="success" focused placeholder='Enter Department Code Here' value={chapter?.departmentCode} /></div>
              </div>
            </div>
            <div >
              <AdministrationMTHeader
                isAdmin={isAdmin}></AdministrationMTHeader>
            </div>
            <div className='adminContent' style={{ border: '2px solid black' }}>
              <div>
                {pageStructure?.categoryList?.map((category) => {
                  return <AdministrationMTDataTable
                    isAdmin={isAdmin}
                    category={category}
                    getData={getData}></AdministrationMTDataTable>
                })}
              </div>
            </div>
            <div style={{ height: '50px' }}></div>
          </div>
        </div>
      </>}
  </>)
}

export default AdministrationMT;