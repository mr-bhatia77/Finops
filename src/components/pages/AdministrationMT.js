import React from 'react';
import './administrationMT.css';
import { administrationMTStructure } from '../../constants/constants';
import AdministrationMTDataTable from '../common/AdministrationMTDataTable';

const AdministrationMT = ({isAdmin}) => {
  return (
    <div style={{ width: "90%", marginLeft: "5%" }}>
      <div className='flex'>
        <div className="header">
          <div><h2>Administration Budget - Meetings & Travel Worksheet </h2></div>
          <div className='headerSubItem'><h3>Area :</h3><input placeholder='Enter Area Here' type='text'></input></div>
          <div className='headerSubItem'><h3>Chapter:</h3><input placeholder='Enter Chapter Here' type='text'></input></div>
          <div className='headerSubItem'><h3>Chapter Code:</h3><input placeholder='Enter Chapter Code Here' type='text'></input></div>
          <div className='headerSubItem'><h3>Department:</h3><input placeholder='Enter Department Code Here' type='text'></input></div>
        </div>
      </div>
      <div className='adminContent' style={{ border: '2px solid black' }}>
                <div>
                 <AdministrationMTDataTable
                        isAdmin={isAdmin}
                        administrationMTStructure={administrationMTStructure}></AdministrationMTDataTable>
                </div>
            </div>
    </div>
  )
}

export default AdministrationMT;