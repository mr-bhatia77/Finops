import React from 'react'
import AdministrationHeader from './AdministrationHeader';
import './administration.css';
import AdministrationDataTable from '../common/AdministrationDataTable';
import { administrationStructure, administrationChapterStructure, adminEventHeader } from '../../constants/constants';
import { useState, useEffect } from 'react';
import CircularProgress from "@mui/material/CircularProgress";
import axios from 'axios';


const Administration = ({ isAdmin }) => {

    const [pageStructure, setPageStructure] = useState(isAdmin ? administrationStructure : administrationChapterStructure);
    const [loading, setLoading] = useState(true);
    const [eventHeader, setEventHeader] = useState(adminEventHeader)

    const getData = () => {
        // setLoading(true);        
        // if (isAdmin) {
        //     const p1 = axios.get('http://localhost:8080/finops/meta/list/eventHeader/4')
        //     const p2 = axios.get(`http://localhost:8080/finops/template/Admin`);
        //     Promise.all([p1, p2]).then((res) => {
        //         setEventHeader(res[0].data)
        //         setPageStructure(res[1].data)
        //         setLoading(false);
        //     })
        // }
        // else {
        //     const p1 = axios.get('http://localhost:8080/finops/meta/list/eventHeader/4')
        //     const p3 = axios.get(`http://localhost:8080/finops/chapter/Admin`);
        //     Promise.all([p1, p3]).then((res) => {
        //         setEventHeader(res[0].data)
        //         setPageStructure(res[1].data)
        //         setLoading(false);
        //     })
        // }
    }

    useEffect(() => {

        console.log('isAdmin::', isAdmin);
        setLoading(true)
        setEventHeader(adminEventHeader);
        setPageStructure(isAdmin ? administrationStructure : administrationChapterStructure);
        setTimeout(() => {
            setLoading(false);
        }, 1000)



        getData();

    }, [isAdmin])


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
                <div style={{ width: '100vw', display: 'flex', marginTop: '20px', alignItems: 'center', justifyContent: 'center' }}>
                    <div><h1>{isAdmin ? 'Template Screen-' : 'Chapter'} Administration</h1></div>
                </div>

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
                        isAdmin={isAdmin}
                        adminEventHeader={adminEventHeader}></AdministrationHeader>
                </div>
                <div className='content' style={{ border: '2px solid black' }}>
                    <div>
                        {pageStructure?.categoryList?.map((category) => {
                            return <AdministrationDataTable
                                isAdmin={isAdmin}
                                category={category}
                                getData={getData}
                                adminEventHeader={adminEventHeader}></AdministrationDataTable>
                        })}
                    </div>
                </div>
                <div style={{ height: '50px' }}></div>
            </div>}
    </>)
}

export default Administration