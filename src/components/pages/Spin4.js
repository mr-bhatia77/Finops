import React, { useEffect, useState } from 'react';
import DataTableWithHeading from '../common/DataTableWithHeading';
import Button from '@mui/material/Button';
import { pageStructureConstant } from '../../constants/constants';
import axios from 'axios';

const pageElement = {
  categoryName: '',
  spin4SubCategoryList: [],
  eventName:[]
}

const subCategoryElement = {
  subCategoryName: '',
  lineItems: [],
  id: '',
  deleteFlag:false
}

const Spin4 = () => {

  const [pageStructure, setPageStructure] = useState(pageStructureConstant);
  const [addNewElement, setAddNewElement] = useState(false);
  const [addNewSubCategory, setAddNewSubCategory] = useState(false);

  useEffect(()=>{
    // axios.get('http://localhost:8080/spin4').then(()=>{
    //   setPageStructure()
    // })
  },[])

  let newElement = { ...pageElement }
  let newSubCategoryElement = { ...subCategoryElement };
  let subCategoryTitle = '';

  const handleElementHeaderChange = (e, isCategory) => {
    isCategory ? newElement.categoryName = e.target.value : newSubCategoryElement.subCategoryName = e.target.value
  }

  const handleAddNewElement = () => {
    setAddNewElement(true);
  }

  const confirmAddNewElement = () => {
    const newPageStructure = [...pageStructure];
    newElement.spin4SubCategoryList.push(newSubCategoryElement);
    newPageStructure.push(newElement);
    setPageStructure(newPageStructure);
    newElement = { ...pageElement }
    newSubCategoryElement = { ...subCategoryElement };
    setAddNewElement(false);
  }

  const handleAddMoreSubLedger = (e, pageElement, index) => {
    const newPageStructure = JSON.parse(JSON.stringify(pageStructure));
    const newPageElement = { ...pageElement }
    const newSpin4SubCategoryList = [...newPageElement.subLedger]
    const newSubCategoryElement = { ...subCategoryElement };
    newSubCategoryElement.title = subCategoryTitle;
    newSpin4SubCategoryList.push(newSubCategoryElement);
    newPageElement.subLedger = newSpin4SubCategoryList;
    newPageStructure.splice(index, 1, newPageElement);
    setPageStructure(newPageStructure)
    setAddNewSubCategory(false)
  }

  const handleNewSubCategory = (e) => {
    subCategoryTitle = e.target.value;
  }
  

  return (
    <div style={{ width: '90%', marginLeft: '5%' }}>
      <br /><br />
      <h2 className='spin4_heading_grey' ><center>Enter Market Here</center></h2>
      <h2 className='spin4_heading_grey' ><center>Enter Staff Name Here</center></h2>
      <h3 className='spin4_heading' ><center>spin4 crohn's & colitis cures 2020</center></h3>
      <br />

      <Button variant="contained" onClick={handleAddNewElement}>+ Add New Element</Button><br /><br />
      {addNewElement && <div>
        Enter Category : <input type='text' onChange={(e) => handleElementHeaderChange(e, true)}></input> &nbsp; &nbsp;
        Enter Sub Category : <input type='text' onChange={(e) => handleElementHeaderChange(e, false)}></input> &nbsp; &nbsp;
        <Button variant="contained" onClick={confirmAddNewElement}>+ Add</Button>
        <br /><br /><br /></div>}
      <br /><hr /><br />

      {pageStructure.length > 0 && pageStructure.map((pageElement, index) => {
        console.log(pageElement)
        return (<>
        <DataTableWithHeading
          categoryName={pageElement.categoryName}
          spin4SubCategoryList={pageElement.spin4SubCategoryList}   
          eventName={pageElement.eventName}
        ></DataTableWithHeading>
          <br />
          <Button variant="text" onClick={() => setAddNewSubCategory(true)}>+ Add New Section</Button>
          {addNewSubCategory && <div className='mt-8'>
            Enter Sub Category : <input type='text' onChange={(e) => handleNewSubCategory(e)}></input>
            <Button variant='contained' onClick={((e) => handleAddMoreSubLedger(e, pageElement, index))}>+ ADD</Button>
          </div>}
          <br /><br /><hr /><br />
          {pageElement.categoryName === 'Premiums DDB Expense - DDB Code 5065' && <div className='backgroundYellowGreen pageMiddleHeading'>
            <h1>Expenses - Breakdown</h1>

          </div>}</>)
      })}
    </div>)
}

export default Spin4;