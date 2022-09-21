import React from 'react'
import AdministrationHeader from './AdministrationHeader';
import './administration.css';
import AdministrationDataTable from '../common/AdministrationDataTable';
import { administrationStructure, administrationChapterStructure, adminEventHeader } from '../../constants/constants';
import { useState, useEffect } from 'react';
import CircularProgress from "@mui/material/CircularProgress";
import axios from 'axios';
import {useDispatch} from 'react-redux';
import { updatePage } from '../../redux/application/applicationActions';
import TextField from '@mui/material/TextField';



const Administration = ({ isAdmin, chapter }) => {

    const dispatch=useDispatch()

    const [pageStructure, setPageStructure] = useState(isAdmin ? administrationStructure : administrationChapterStructure);
    const [loading, setLoading] = useState(true);
    const [eventHeader, setEventHeader] = useState(adminEventHeader)

    const getData = (chapter) => {
        // setLoading(true);        
        // if (isAdmin) {
        //     const p1 = axios.get('http://localhost:8080/finops/meta/list/eventHeader/5')
        //     const p2 = axios.get(`http://localhost:8080/finops/template/getData/Admin`);
        //     Promise.all([p1, p2]).then((res) => {
        //         setEventHeader(res[0].data)
        //         setPageStructure(res[1].data)
        //         setLoading(false);
        //     })
        // }
        // else {
        //     const p1 = axios.get('http://localhost:8080/finops/meta/list/eventHeader/5')
        //     const p3 = axios.get(`http://localhost:8080/finops/chapter/${chapter.chapterID}/getData/Admin`);
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
        setEventHeader(adminEventHeader);
        setPageStructure(isAdmin ? administrationStructure : administrationChapterStructure);
        setTimeout(() => {
            setLoading(false);
        }, 1000)



        getData(chapter);
        dispatch(updatePage('administration'))
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
            :
            <div style={{ width: "90%", marginLeft: "5%" }}>
                <div style={{ display: 'flex', marginTop: '20px', alignItems: 'center', justifyContent: 'center' }}>
                    <div><h1>{isAdmin ? 'Template Screen' : `${chapter?.chapterName}`} - Administration</h1></div>
                </div>

                <div className="flexColumn mt-100">
          <div><h2>Administration Budget </h2></div>
          <div className='flexColumn'>
            <div className='mt-8 flex verticalAlign'><div className='headerKeys '><h3>Area :</h3></div><TextField variant="filled" color="success" focused placeholder='Enter Area Here' value={chapter?.chapterArea}></TextField></div>
            <div className='mt-8 flex verticalAlign'><div className='headerKeys'><h3>Chapter:</h3></div><TextField variant="filled" color="success" focused placeholder='Enter Chapter Here' value={chapter?.chapterName} /></div>
            <div className='mt-8 flex verticalAlign'><div className='headerKeys'><h3>Chapter Code:</h3></div><TextField variant="filled" color="success" focused placeholder='Enter Chapter Code Here' value={chapter?.chapterCode} /></div>
            <div className='mt-8 flex verticalAlign'><div className='headerKeys'><h3>Department:</h3></div><TextField variant="filled" color="success" focused placeholder='Enter Department Code Here' value={chapter?.departmentCode} /></div>
          </div>
        </div>
                <div className='administrationHeaderTable'>
                    <AdministrationHeader
                        isAdmin={isAdmin}
                        adminEventHeader={eventHeader}></AdministrationHeader>
                </div>
                <div className='content' style={{ border: '2px solid black' }}>
                    <div>
                        {pageStructure?.categoryList?.map((category) => {
                            return <AdministrationDataTable
                                isAdmin={isAdmin}
                                category={category}
                                getData={getData}
                                adminEventHeader={eventHeader}></AdministrationDataTable>
                        })}
                    </div>
                </div>
                <div style={{ height: '50px' }}></div>
            </div>}
    </>)
}

export default Administration