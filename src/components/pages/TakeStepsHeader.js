import React from 'react';
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

const TakeStepsHeader = ({ isAdmin, pageStructure }) => {

    const [selectHeaderItem, setSelectHeaderItem] = React.useState('');


    const selectHeader = [];
    const getEditableColumns = (tableColumns) => {
        const newColumns = tableColumns.map((column) => {
            column.editable = isAdmin ? true : false;
            return column;
        });
        return newColumns;
    }

    const handleChange = (event) => {
        setSelectHeaderItem(event.target.value);
    };

    const getHeaderRows = () => {
        const newTableRows = [];
        takeStepsHeader[0]?.subCategoryList[0]?.lineItems?.forEach((lineItem) => {
            newTableRows.push({
                id: randomId(),
                lineItemName: lineItem?.lineItemName
            })
        })
        return newTableRows;
    }

    const handleGetRowClassName = (params) => {
        if (['Celebration', "Participant Premiums/Incentives"].includes(params.row.category))
            return 'backgroundYellowGreen'
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
                    else selectHeader.push(subCategory?.subCategoryName);

                    subCategory?.lineItems?.forEach((lineItem) => {
                        if (lineItem?.headerFlag)
                            headerRows.push({ id: randomId(), lineItemName: lineItem?.lineItemName })
                        else selectHeader.push(lineItem?.lineItemName);

                    })
                })
            })
        }
        if (!isAdmin) {
            pageStructure?.categoryList?.forEach((category) => {
                
                if (category?.headerFlag)
                    headerRows.push({ id: randomId(), lineItemName: category?.categoryName })
                else selectHeader.push(category.categoryName);

                category?.subCategoryDataList?.forEach((subCategory) => {
                    
                    if (subCategory?.headerFlag)
                        headerRows.push({ id: randomId(), lineItemName: subCategory?.subCategoryName })
                    else selectHeader.push(subCategory?.subCategoryName);
    
                    subCategory?.lineItemDataList?.forEach((lineItem) => {
                        
                        if (lineItem?.headerFlag)
                            headerRows.push({ id: randomId(), lineItemName: lineItem?.lineItemName })
                        else selectHeader.push(lineItem?.lineItemName);
        
                    })
                })
            })
        }
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
                isAdmin={isAdmin}
                tableColumns={getEditableColumns(takeStepsHeaderColumns)}
                initialRows={getHeaderRows2()}
                headerHeight={50}
                handleGetRowClassName={handleGetRowClassName}
            // isHeaderTable={true}
            >
            </DataGridTable>
            {isAdmin && <><Box className='mt-20' sx={{ minWidth: 120 }} style={{ display: 'inline-block' }}>
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