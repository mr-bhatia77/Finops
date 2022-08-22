import React from 'react';
import { takeStepsHeaderColumns,takeStepsHeader } from '../../constants/constants';
import DataGridTable from "../common/DataGridTable";
import {
    randomId,
  } from '@mui/x-data-grid-generator';

const TakeStepsHeader = ({ isAdmin }) => {

    const getEditableColumns = (tableColumns) => {
        const newColumns = tableColumns.map((column) => {
            column.editable = isAdmin ? true : false;
            return column;
        });
        return newColumns;
    }

    const getHeaderRows = () => {
        const newTableRows = [];
        takeStepsHeader[0]?.subCategoryList[0]?.lineItems?.forEach((lineItem)=>{
            newTableRows.push({
                id:randomId(),
                lineItemName:lineItem?.lineItemName
            })
        })
        return newTableRows;
    }

    const handleGetRowClassName = (params) => {
        if (['Celebration', "Participant Premiums/Incentives"].includes(params.row.category))
          return 'backgroundYellowGreen'
      }

    return (
        <div ><DataGridTable
            isAdmin={isAdmin}
            tableColumns={getEditableColumns(takeStepsHeaderColumns)}
            initialRows={getHeaderRows()}
            headerHeight={50}
            handleGetRowClassName={handleGetRowClassName}
            // isHeaderTable={true}
        >
        </DataGridTable></div>
        
    )
}

export default TakeStepsHeader