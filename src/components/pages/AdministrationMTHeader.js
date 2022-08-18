import React from 'react';
import { administrationMTColumns,administrationMTHeader } from '../../constants/constants';
import DataGridTable from "../common/DataGridTable";
import {
    randomId,
  } from '@mui/x-data-grid-generator';

const AdministrationMTHeader = ({ isAdmin }) => {
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
        administrationMTHeader?.categoryList?.forEach((category) => {
            if (category?.categoryName !== 'dummy')
                newTableRows.push({
                    id: randomId(),
                    categoryName: category?.categoryName
                })

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
                            adminGeneral: lineItem?.adminGeneral,
                            businessPurpose2:lineItem?.businessPurpose2,
                            businessPurpose1:lineItem?.businessPurpose1,
                            businessPurpose3:lineItem?.businessPurpose3,
                            businessPurpose4:lineItem?.businessPurpose4,
                            businessPurpose5:lineItem?.businessPurpose5,
                            businessPurpose6:lineItem?.businessPurpose6,
                            
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
        <div><DataGridTable
            isAdmin={isAdmin}
            tableColumns={getEditableColumns(administrationMTColumns)}
            initialRows={getHeaderRows()}
            headerHeight={50}
            handleGetRowClassName={handleGetRowClassName}
            isHeaderTable={true}
        >
        </DataGridTable></div>
        
    )
}

export default AdministrationMTHeader