import * as React from 'react';
import TabPanel from '../common/TabPanel';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { takeStepsHeader, takeStepsStructure } from '../../constants/constants'
import TakeStepsDataTable from '../common/TakeStepsDataTable';
import './takeSteps.css'

export default function TakeSteps() {

  console.log(takeStepsStructure)

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div style={{ width: "90%", marginLeft: "5%" }}>
        <div className='flex' style={{ justifyContent: 'space-between' }}>
          <div className="header">
            <div><h2>Take Steps Budget </h2></div>
            <div className='headerSubItem'><h3>Area :</h3><input placeHolder='Enter Area Here' type='text'></input></div>
            <div className='headerSubItem'><h3>Chapter:</h3><input placeHolder='Enter Chapter Here' type='text'></input></div>
            <div className='headerSubItem'><h3>Chapter Code:</h3><input placeHolder='Enter Chapter Code Here' type='text'></input></div>
          </div>
          <div style={{ width: '863px', marginTop: '5%' }}>
            <TakeStepsDataTable pageElement={takeStepsHeader[0]} isHeaderTable={true}></TakeStepsDataTable>
          </div>
        </div>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="WALK 1" {...a11yProps(0)} />
            <Tab label="WALK 2" {...a11yProps(1)} />
            <Tab label="WALK 3" {...a11yProps(2)} />
            <Tab label="WALK 4" {...a11yProps(3)} />
          </Tabs>
        <div className='mt-8' style={{ height: '80vh'}}>

        {takeStepsStructure.length > 0 && takeStepsStructure.map((pageElement) => {
          console.log(pageElement)
          return (
            <TakeStepsDataTable
            pageElement={pageElement}
            ></TakeStepsDataTable>)
        })}


          
          <TabPanel value={value} index={0}>

          </TabPanel>

          <TabPanel value={value} index={1}>

          </TabPanel>
        </div>
      </div>
    </>
  );
}

