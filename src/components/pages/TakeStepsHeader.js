import React, { useEffect } from 'react';
import { takeStepsHeaderColumns, takeStepsHeader } from '../../constants/constants';
import DataGridTable from "../common/DataGridTable";
import {
    randomId,
} from '@mui/x-data-grid-generator';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from "@mui/material/Button";
import {takeStepsTopEventHeaderList} from '../../constants/constants';
import axios from 'axios';
import { useSelector } from "react-redux";

const TakeStepsHeader = ({ isAdmin, pageStructure }) => {

    // const [headerStructure,setHeaderStructure] =  React.useState(pageStructure);
    const [selectHeaderItem, setSelectHeaderItem] = React.useState('');
    const [headerList, setHeaderList] = React.useState(takeStepsTopEventHeaderList);
    const isFreezed = useSelector((state)=>state.takeSteps.isFreezed);


    useEffect(()=>{
        axios.get('http://localhost:8080/finops/meta/list/eventHeader/4').then((res)=>{
            setHeaderList(res?.data)
        })
        // setHeaderStructure(pageStructure)
    },[])

    // useEffect(()=>{
    //     console.log('hello')
    //     setHeaderStructure(pageStructure)
    // },[pageStructure])

    const selectHeader = [];
    const getEditableColumns = (tableColumns) => {
        let newColumns =[...tableColumns];
        headerList?.eventHeaderList?.forEach((event,index)=>{
            if(index === 0){
            newColumns.push(
                { field: `${event.event_id}`, headerName: "Chapter Total", width: "180", editable: true, headerClassName: 'blueAndWhite mediumFontSize', headerAlign: 'center', cellClassName: 'peach' }
            )
            }else {
                newColumns.push(
                    { field: `${event.event_id}`, headerName: `Walk ${index}`, width: "230", editable: true, headerClassName: 'blueAndWhite mediumFontSize', headerAlign: 'center' },
                )
            }
        })
        newColumns = newColumns.map((column) => {
            column.editable = isAdmin ? true : false;
            return column;
        });
        return newColumns;
    }

    const handleChange = (event) => {
        setSelectHeaderItem(event.target.value);
    };

    const handleGetRowClassName = (params) => {
            return ''
    }

    const getEventDetails = (item) => {
        // console.log(item)
        const eventDetails = {};
        item?.eventTypeDataList?.forEach((event) => {
            eventDetails[`${event?.event_id}`] = event?.value
            eventDetails[`eventUpdateId${event?.event_id}`] = event?.id;
        })
        return isAdmin ? {} : eventDetails;
    }

    const getHeaderRows2 = () => {
        const headerRows = [];
        // console.log(isAdmin)
        if (isAdmin) {
            pageStructure?.categoryList?.forEach((category) => {

                if (category?.headerFlag)
                    headerRows.push({ id: randomId(), lineItemName: category?.categoryName })
                else selectHeader.push(category.categoryName);

                category?.subCategoryList?.forEach((subCategory) => {
                    if (subCategory?.headerFlag)
                        headerRows.push({ id: randomId(), lineItemName: subCategory?.subCategoryName })
                    // else selectHeader.push(subCategory?.subCategoryName);

                    subCategory?.lineItems?.forEach((lineItem) => {
                        if (lineItem?.headerFlag)
                            headerRows.push({ id: randomId(), lineItemName: lineItem?.lineItemName })
                        // else selectHeader.push(lineItem?.lineItemName);

                    })
                })
            })
        }
        if (!isAdmin) {
            pageStructure?.categoryList?.forEach((category) => {
                
                if (category?.headerFlag)
                    headerRows.push({ id: randomId(), lineItemName: category?.categoryName, ...getEventDetails(category)})
                // else selectHeader.push(category.categoryName);

                category?.subCategoryDataList?.forEach((subCategory) => {
                    
                    if (subCategory?.headerFlag)
                        headerRows.push({ id: randomId(), lineItemName: subCategory?.subCategoryName })
                    // else selectHeader.push(subCategory?.subCategoryName);
    
                    subCategory?.lineItemDataList?.forEach((lineItem) => {
                        
                        if (lineItem?.headerFlag)
                            headerRows.push({ id: randomId(), lineItemName: lineItem?.lineItemName })
                        // else selectHeader.push(lineItem?.lineItemName);
        
                    })
                })
            })
        }
        // console.log(headerRows)
        return headerRows;
    }

    const renderHeaderSelect = () => {
        const items = selectHeader.map((item) => {
            if (item && item !== 'dummy') {
                return <MenuItem value={item}>{item}</MenuItem>
            }
        })
        return items;
    }

    return (
        <div >
            <DataGridTable
                page = {'takeSteps'}  
                isAdmin={isAdmin && !isFreezed}
                tableColumns={getEditableColumns(takeStepsHeaderColumns)}
                initialRows={getHeaderRows2()}
                headerHeight={50}
                handleGetRowClassName={handleGetRowClassName}
            // isHeaderTable={true}
            >
            </DataGridTable>
            {isAdmin && !isFreezed && <><Box className='mt-20' sx={{ minWidth: 120 }} style={{ display: 'inline-block' }}>
                <FormControl style={{ width: '400px' }}>
                    <InputLabel id="demo-simple-select-label">Select Header Item:</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        onChange={handleChange}
                        value={selectHeaderItem}>
                        {renderHeaderSelect()}
                    </Select>
                </FormControl>
            </Box>
                <Button ><h3>+ ADD</h3>  </Button></>
            }
        </div>
    )
}

export default TakeStepsHeader