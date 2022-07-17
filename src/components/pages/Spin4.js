import React, { useEffect, useState } from 'react';
import DataTableWithHeading from '../common/DataTableWithHeading';
import Button from '@mui/material/Button';
import { pageStructureConstant } from '../../constants/constants';
import Pagination from '@mui/material/Pagination';

const pageElement = {
  ledger: '',
  subLedger: [],
  background: '',
  tableColumns: []
}

const subLedgerElement = {
  title: '',
  listItems: [],
  className: ''
}

const Spin4 = () => {

  const [pageStructure, setPageStructure] = useState(pageStructureConstant);
  const [addNewElement, setAddNewElement] = useState(false);
  const [addNewSubLedger, setAddNewSubLedger] = useState(false);
  let newElement = { ...pageElement }
  let newSubLedgerElement = { ...subLedgerElement };
  let subLedgerTitle = '';

  const handleElementHeaderChange = (e, isLedger) => {
    isLedger ? newElement.ledger = e.target.value : newSubLedgerElement.title = e.target.value
  }

  const handleAddNewElement = () => {
    setAddNewElement(true);
  }

  const confirmAddNewElement = () => {
    const newPageStructure = [...pageStructure];
    newElement.subLedger.push(newSubLedgerElement);
    newPageStructure.push(newElement);
    setPageStructure(newPageStructure);
    newElement = { ...pageElement }
    newSubLedgerElement = { ...subLedgerElement };
    setAddNewElement(false);
  }

  const handleAddMoreSubLedger = (e, pageElement, index) => {
    const newPageStructure = JSON.parse(JSON.stringify(pageStructure));
    const newPageElement = { ...pageElement }
    const newSubLedgerArray = [...newPageElement.subLedger]
    const newSubLedgerElement = { ...subLedgerElement };
    newSubLedgerElement.title = subLedgerTitle;
    newSubLedgerArray.push(newSubLedgerElement);
    newPageElement.subLedger = newSubLedgerArray;
    newPageStructure.splice(index, 1, newPageElement);
    setPageStructure(newPageStructure)
    setAddNewSubLedger(false)
  }

  const handleNewSubLedger = (e) => {
    subLedgerTitle = e.target.value;
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
        Enter Ledger : <input type='text' onChange={(e) => handleElementHeaderChange(e, true)}></input> &nbsp; &nbsp;
        Enter SubLedger : <input type='text' onChange={(e) => handleElementHeaderChange(e, false)}></input> &nbsp; &nbsp;
        <Button variant="contained" onClick={confirmAddNewElement}>+ Add</Button>
        <br /><br /><br /></div>}
      <br /><hr /><br />

      {pageStructure.length > 0 && pageStructure.map((pageElement, index) => {
        
        return (<>
        <DataTableWithHeading
          ledger={pageElement.ledger}
          subLedger={pageElement.subLedger}
          tableColumns={pageElement.tableColumns}
          background={pageElement.background}
          eventName={pageElement.eventName}
        ></DataTableWithHeading>
          <br />
          <Button variant="text" onClick={() => setAddNewSubLedger(true)}>+ Add New Section</Button>
          {addNewSubLedger && <div className='mt-8'>
            Enter Subledger : <input type='text' onChange={(e) => handleNewSubLedger(e)}></input>
            <Button variant='contained' onClick={((e) => handleAddMoreSubLedger(e, pageElement, index))}>+ ADD</Button>
          </div>}
          <br /><br /><hr /><br />
          {pageElement.ledger === 'Premiums DDB Expense - DDB Code 5065' && <div className='backgroundYellowGreen pageMiddleHeading'>
            <h1>Expenses - Breakdown</h1>

          </div>}</>)
      })}
    </div>)
}

export default Spin4;