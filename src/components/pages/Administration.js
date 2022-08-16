import React from 'react'
import AdministrationHeader from './AdministrationHeader';
import './administration.css';
import AdministrationDataTable from '../common/AdministrationDataTable';
import  {administrationStructure} from '../../constants/constants';

const Administration = ({isAdmin}) => {
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
            </div>
            <div className='administrationHeaderTable'>
                    <AdministrationHeader
                    isAdmin={isAdmin}></AdministrationHeader>
                </div>
            <div className='content' style={{ border: '2px solid black' }}>
                <div>
                {administrationStructure?.categoryList?.map((category) => {
                    return <AdministrationDataTable
                        isAdmin={isAdmin}
                        category={category}></AdministrationDataTable>
                })}
                </div>
            </div>
            <div style={{height:'50px'}}></div>
        </div>
    )
}

export default Administration