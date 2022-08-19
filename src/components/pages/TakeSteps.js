import * as React from 'react';
import {useState, useEffect} from 'react';
import TabPanel from '../common/TabPanel';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { takeStepsHeader, takeStepsStructure } from '../../constants/constants'
import TakeStepsDataTable from '../common/TakeStepsDataTable';
import './takeSteps.css'

export default function TakeSteps({isAdmin}) {

  console.log(takeStepsStructure)

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(()=>{
    console.log('isAdmin::',isAdmin);
  },[])
  return (
    <>
      <div style={{ width: "140%", marginLeft: "5%"}}>
        <div className='flex'>
          <div className="header">
            <div><h2>Take Steps Budget </h2></div>
            <div className='headerSubItem'><h3>Area :</h3><input placeHolder='Enter Area Here' type='text'></input></div>
            <div className='headerSubItem'><h3>Chapter:</h3><input placeHolder='Enter Chapter Here' type='text'></input></div>
            <div className='headerSubItem'><h3>Chapter Code:</h3><input placeHolder='Enter Chapter Code Here' type='text'></input></div>
          </div>
          <div style={{ width: '963px', marginTop: '5%' ,marginLeft:'5%'}}>
            <TakeStepsDataTable isAdmin={isAdmin} pageElement={takeStepsHeader[0]} isHeaderTable={true}></TakeStepsDataTable>
          </div>
        </div>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="WALK 1" {...a11yProps(1)} />
            <Tab label="WALK 2" {...a11yProps(2)} />
            <Tab label="WALK 3" {...a11yProps(3)} />
          </Tabs>
        <div className='mt-8' style={{ height: '80vh'}}>

        {takeStepsStructure.length > 0 && takeStepsStructure.map((pageElement) => {
          // console.log(pageElement)
          return (
            <TakeStepsDataTable
            isAdmin={isAdmin}
            pageElement={pageElement}
            walk={value}
            ></TakeStepsDataTable>)
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

