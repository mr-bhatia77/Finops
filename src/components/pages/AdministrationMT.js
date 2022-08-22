import React from 'react';
import './administrationMT.css';
import { administrationMTStructure } from '../../constants/constants';
import AdministrationMTDataTable from '../common/AdministrationMTDataTable';
import AdministrationMTHeader from './AdministrationMTHeader';
import {useState,useEffect} from 'react';
import CircularProgress from "@mui/material/CircularProgress";

const AdministrationMT = ({ isAdmin }) => {
  const [pageStructure, setPageStructure] = useState(administrationMTStructure);
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
            :  <div style={{ width:'200%', marginLeft: "5%" }}>
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
      <div style={{height:'50px'}}></div>
    </div>}
  </>)
}

export default AdministrationMT;