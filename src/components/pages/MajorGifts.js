import React from 'react'
import MajorGiftsHeader from './MajorGiftsHeader'
import './majorGifts.css';
import { majorGiftsStructure } from '../../constants/constants';
import MajorGiftsDataTable from '../common/MajorGiftsDataTable';

const MajorGifts = ({ isAdmin }) => {
    console.log(majorGiftsStructure)
    return (
        <div style={{ width: "90%", marginLeft: "5%" }}>
            <div className='flex'>
                <div className="header">
                    <div><h2>Major Gifts & Other Fundraising Budget </h2></div>
                    <div className='headerSubItem'><h3>Area :</h3><input placeholder='Enter Area Here' type='text'></input></div>
                    <div className='headerSubItem'><h3>Chapter:</h3><input placeholder='Enter Chapter Here' type='text'></input></div>
                    <div className='headerSubItem'><h3>Chapter Code:</h3><input placeholder='Enter Chapter Code Here' type='text'></input></div>
                    <div className='headerSubItem'><h3>Department:</h3><input placeholder='Enter Department Code Here' type='text'></input></div>
                </div>
                <div className='majorGiftsHeaderTable'>
                    <MajorGiftsHeader
                    isAdmin={isAdmin}></MajorGiftsHeader>
                </div>
            </div>
            <div className='content' style={{ border: '2px solid black' }}>
                <div>
                {majorGiftsStructure?.categoryList?.map((category) => {
                    console.log(category)
                    return <MajorGiftsDataTable
                        isAdmin={isAdmin}
                        category={category}></MajorGiftsDataTable>
                })}
                </div>
            </div>
            <div style={{height:'50px'}}></div>
        </div>
    )
}

export default MajorGifts