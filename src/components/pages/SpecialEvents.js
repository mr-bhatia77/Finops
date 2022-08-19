import React from 'react';
import './specialEvents.css';
import { specialEventsStructure } from '../../constants/constants';
import SpecialEventsDataTable from '../common/SpecialEventsDataTable';
import SpecialEventsHeader from './SpecialEventsHeader';

const SpecialEvents = ({ isAdmin }) => {
  return (
    <div style={{ width:'200%', marginLeft: "5%" }}>
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
        <SpecialEventsHeader
        isAdmin={isAdmin}></SpecialEventsHeader>
      </div>
      <div className='adminContent' style={{ border: '2px solid black' }}>
        <div>
          {specialEventsStructure?.categoryList?.map((category) => {
            return <SpecialEventsDataTable
              isAdmin={isAdmin}
              category={category}></SpecialEventsDataTable>
          })}
        </div>
      </div>
      <div style={{height:'50px'}}></div>
    </div>
  )
}

export default SpecialEvents;