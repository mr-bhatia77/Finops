import React, { useState } from 'react';
import DataTableWithHeading from '../common/DataTableWithHeading';
import Button from '@mui/material/Button';
import { initialTables } from '../../constants/constants';

class pageElement {
  constructor(heading = '', subheadings = [], background = 'white', initialRows = [], tableColumns = []) {
    this.heading = heading;
    this.subHeadings = subheadings;
    this.background = background;
    this.initialRows = initialRows;
    this.tableColumns = this.tableColumns
  }
}

const Spin4 = () => {

  const [pageStructure, setPageStructure] = useState(initialTables);
  const [addNewElement, setAddNewElement] = useState(false);
  const [newElement, setNewElement] = useState(new pageElement('', [], '', []));


  const renderPageDetails = () => {
  }

  const handleElementHeaderChange = (e, isHeading) => {
    isHeading ? newElement.heading = e.target.value : newElement.subHeadings[0] = e.target.value;
  }

  const handleAddNewElement = () => {
    setAddNewElement(true);
  }

  const confirmAddNewElement = () => {
    const newPageStructure = [...pageStructure];
    newPageStructure.push(newElement);
    setPageStructure(newPageStructure);
    setNewElement(new pageElement('', '', ''))
    setAddNewElement(false);
  }

  const handleAddMoreSubheading = (e, pageElement, index) => {
    const newPageStructure = JSON.parse(JSON.stringify(pageStructure));
    const newPageElement = { ...pageElement }
    const newSubHeadingsArray = [...newPageElement.subHeadings]
    newSubHeadingsArray.push('hello');
    newPageElement.subHeadings = newSubHeadingsArray;
    newPageStructure.splice(index, 1, newPageElement);
    console.log(newPageStructure);
    setPageStructure(newPageStructure)
  }

  return (
    <div style={{ width: '90%', marginLeft: '5%' }}>
      <br /><br />
      <h1 className='teamChallenge' ><center>Spin4</center></h1>
      <br /><br /><br />

      <Button variant="contained" onClick={handleAddNewElement}>+ Add New Element</Button><br /><br />
      {addNewElement && <div>
        Enter Heading : <input type='text' onChange={(e) => handleElementHeaderChange(e, true)}></input> &nbsp; &nbsp;
        Enter Sub Heading* (optional) : <input type='text' onChange={(e) => handleElementHeaderChange(e, false)}></input> &nbsp; &nbsp;
        <Button variant="contained" onClick={confirmAddNewElement}>+ Add</Button>
        <br /><br /><br /></div>}
      <br /><hr /><br />

      {pageStructure.length > 0 && pageStructure.map((pageElement, index) => {
        return (<><DataTableWithHeading
          heading={pageElement.heading}
          subHeadings={pageElement.subHeadings}
          tableColumns={pageElement.tableColumns}
          background={pageElement.background}
          initialRows={pageElement.initialRows}
        ></DataTableWithHeading>
          <br /><Button variant="text" onClick={(e) => handleAddMoreSubheading(e, pageElement, index)}>+ Add more</Button><br /><br /><hr /><br /></>)
      })}
    </div>)
}

export default Spin4;