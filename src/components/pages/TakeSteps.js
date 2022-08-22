import * as React from 'react';
import { useState, useEffect } from 'react';
import TabPanel from '../common/TabPanel';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { takeStepsStructure, takeStepsMetaData } from '../../constants/constants'
import TakeStepsDataTable from '../common/TakeStepsDataTable';
import './takeSteps.css'
import TakeStepsHeader from './TakeStepsHeader';

export default function TakeSteps({ isAdmin }) {
  console.log(takeStepsStructure)

  const [value, setValue] = useState(0);
  const [pageStructure, setPageStructure] = useState(takeStepsStructure)

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    console.log('isAdmin::', isAdmin);

  }, [])
  return (
    <>
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
              walk={value}>
            </TakeStepsDataTable>
          })}



          {/* <TabPanel value={value} index={0}>
            heelo
          </TabPanel>

          <TabPanel value={value} index={1}>
hello
          </TabPanel> */}
        </div>
      </div>
    </>
  );
}

