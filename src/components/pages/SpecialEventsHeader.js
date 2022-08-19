import React from 'react';
import { specialEventsColumns,specialEventsHeader } from '../../constants/constants';
import DataGridTable from "../common/DataGridTable";
import {
    randomId,
  } from '@mui/x-data-grid-generator';

const SpecialEventsHeader = ({ isAdmin }) => {
    console.log('isAdmin:',isAdmin)

    const getEditableColumns = (tableColumns) => {
        const newColumns = tableColumns.map((column) => {
            column.editable = isAdmin ? true : false;
            return column;
        });
        return newColumns;
    }

    const getHeaderRows = () => {
        const newTableRows = [];
        specialEventsHeader?.categoryList?.forEach((category) => {

            category.subCategoryList.forEach((subCategory) => {
                if (subCategory?.subCategoryName !== 'dummy')
                    newTableRows.push({
                        id: randomId(),
                        subCategoryName: subCategory?.subCategoryName,
                        companyCode: subCategory?.companyCode
                    })
                    subCategory?.lineItems?.forEach((lineItem)=>{
                        // console.log(lineItem)
                        newTableRows.push({
                            id: randomId(),
                            lineItemName: lineItem?.lineItemName,
                            companyCode: lineItem?.companyCode,
                            total: lineItem?.total,      
                            overhead: lineItem?.overhead,
                            eventType1:lineItem?.eventType1,
                            eventType2:lineItem?.eventType2,
                            eventType3:lineItem?.eventType3,
                            eventType4:lineItem?.eventType4

                        })
                    })
            })
        })
        return newTableRows;
    }

    const handleGetRowClassName = (params) => {
        if (['Celebration', "Participant Premiums/Incentives"].includes(params.row.category))
          return 'backgroundYellowGreen'
      }

    return (
        <div style={{ display: 'flex' }}>
                <div style={{ border: '2px solid black ', width: '187px' }}><p></p></div>
                <div style={{width: '100%'}}>
                <DataGridTable
            isAdmin={isAdmin}
            tableColumns={getEditableColumns(specialEventsColumns)}
            initialRows={getHeaderRows()}
            headerHeight={0}
            handleGetRowClassName={handleGetRowClassName}
            isHeaderTable={false}
        >
        </DataGridTable></div>
        </div>
        
    )
}

export default SpecialEventsHeader