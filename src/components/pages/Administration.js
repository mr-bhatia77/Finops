import React from 'react'
import AdministrationHeader from './AdministrationHeader';
import './administration.css';
import AdministrationDataTable from '../common/AdministrationDataTable';
import { administrationStructure } from '../../constants/constants';
import {useState,useEffect} from 'react';
import CircularProgress from "@mui/material/CircularProgress";


const Administration = ({ isAdmin }) => {

    const [pageStructure, setPageStructure] = useState(administrationStructure);
    const [loading, setLoading] = useState(true);

    const getData = () => {
        // if (isAdmin) {
        //   axios.get(`http://localhost:8080/finops/template/Admin`).then((res) => {
        //     setPageStructure(res.data)
        //     setLoading(false);
        //   });
        // }

        // else {
        //   axios.get(`http://localhost:8080/finops/chapter/Admin`).then((res) => {
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
            :
            <div style={{ width: "90%", marginLeft: "5%" }}>
                <div style={{ marginLeft: "47%" , marginTop:'100px'}}><h1>Administration</h1></div>
                <div className='flex'>
                    <div className="header">
                        <div><h2>Major Gifts & Other Fundraising Budget </h2></div>
                        <div className='headerSubItem'><h3>Area :</h3><input placeholder='Enter Area Here' type='text'></input></div>
                        <div className='headerSubItem'><h3>Chapter:</h3><input placeholder='Enter Chapter Here' type='text'></input></div>
                        <div className='headerSubItem'><h3>Chapter Code:</h3><input placeholder='Enter Chapter Code Here' type='text'></input></div>
                        <div className='headerSubItem'><h3>Department:</h3><input placeholder='Enter Department Code Here' type='text'></input></div>
                    </div>
                </div>
                <div className='administrationHeaderTable'>
                    <AdministrationHeader
                        isAdmin={isAdmin}></AdministrationHeader>
                </div>
                <div className='content' style={{ border: '2px solid black' }}>
                    <div>
                        {pageStructure?.categoryList?.map((category) => {
                            return <AdministrationDataTable
                                isAdmin={isAdmin}
                                category={category}
                                getData={getData}></AdministrationDataTable>
                        })}
                    </div>
                </div>
                <div style={{ height: '50px' }}></div>
            </div>}
    </>)
}

export default Administration