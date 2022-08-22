import * as React from 'react';
import { useState, useEffect } from 'react';
import TabPanel from '../common/TabPanel';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { takeStepsStructure,takeStepsChapterStructure, takeStepsMetaData,takeStepsChapterMetaData } from '../../constants/constants'
import TakeStepsDataTable from '../common/TakeStepsDataTable';
import './takeSteps.css'
import TakeStepsHeader from './TakeStepsHeader';
import CircularProgress from "@mui/material/CircularProgress";
import axios from 'axios';

export default function TakeSteps({ isAdmin }) {
  console.log(isAdmin ? takeStepsStructure: takeStepsChapterStructure)

  const [value, setValue] = useState(0);
  const [pageStructure, setPageStructure] = useState(isAdmin ? takeStepsStructure: takeStepsChapterStructure);
  const [loading, setLoading] = useState(true);


  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  

  const getData = () => {
    console.log('isAdmin::', isAdmin);
    const newPageStructure = pageStructure;
    isAdmin ? newPageStructure?.categoryList?.unshift(takeStepsMetaData) :newPageStructure?.categoryList?.unshift(takeStepsChapterMetaData);
    console.log(newPageStructure)
    setTimeout(() => {
      setPageStructure(newPageStructure);
      setLoading(false);
    }, 1000)


    // if (isAdmin) {
    //   axios.get(`http://localhost:8080/finops/getData/template/Take Steps`).then((res) => {
    //     res?.data?.categoryList?.unshift(takeStepsMetaData);
    //     setPageStructure(res.data)
    //     setLoading(false);
    //   });
    // }

    // else {
    //   axios.get(`http://localhost:8080/finops/getData/chapter/Take Steps`).then((res) => {
    //       res?.data?.categoryList?.unshift(takeStepsChapterMetaData);
    //     setPageStructure(res.data)
    //     setLoading(false);
    //   });
    // }
  }

  useEffect(() => {
    getData();
  }, [isAdmin])

  useEffect(() => {
    setLoading(true);
  }, [isAdmin])

  return (
    <>
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
        <div style={{ width: "140%", marginLeft: "5%" }}>
          <div className='flex'>
            <div className="header">
              <div><h2>Take Steps Budget </h2></div>
              <div className='headerSubItem'><h3>Area :</h3><input placeHolder='Enter Area Here' type='text'></input></div>
              <div className='headerSubItem'><h3>Chapter:</h3><input placeHolder='Enter Chapter Here' type='text'></input></div>
              <div className='headerSubItem'><h3>Chapter Code:</h3><input placeHolder='Enter Chapter Code Here' type='text'></input></div>
            </div>
            <div style={{ width: '963px', marginTop: '5%', marginLeft: '5%' }}>
              <TakeStepsHeader isAdmin={true}></TakeStepsHeader>
            </div>
          </div>
          <div className='tabs'>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="WALK 1" {...a11yProps(1)} />
              <Tab label="WALK 2" {...a11yProps(2)} />
              <Tab label="WALK 3" {...a11yProps(3)} />
            </Tabs>
          </div>
          <div className='mt-8' style={{ height: '80vh' }}>
            {pageStructure?.categoryList?.map((category) => {
              return <TakeStepsDataTable
                isAdmin={isAdmin}
                category={category}
                walk={value}
                getData={getData}>
              </TakeStepsDataTable>
            })}



            {/* <TabPanel value={value} index={0}>
            heelo
          </TabPanel>

          <TabPanel value={value} index={1}>
hello
          </TabPanel> */}
          </div>
        </div>}
    </>
  );
}

