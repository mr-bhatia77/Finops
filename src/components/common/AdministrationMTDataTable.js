import React from 'react'
import DataGridTable from '../common/DataGridTable';
import { administrationMTColumns } from '../../constants/constants';
import {
    randomId,
} from '@mui/x-data-grid-generator';

const AdministrationMTDataTable = ({ administrationMTStructure, isAdmin }) => {
    // console.log(category)

    const getEditableColumns = (tableColumns) => {
        const newColumns = tableColumns.map((column) => {
            column.editable = isAdmin ? true : false;
            return column;
        });
        return newColumns;
    }

    const getRows = () => {
        const newTableRows = [];
        administrationMTStructure?.categoryList?.forEach((category) => {
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
        if (params?.row?.lineItemName)
            return 'bg_darkGray'
    }



    return (
        <div>
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    <div >
                        <DataGridTable
                            page='AdministrationMT'
                            tableColumns={getEditableColumns(administrationMTColumns)}
                            initialRows={getRows()}
                            handleGetRowClassName={handleGetRowClassName}
                            headerHeight={50}
                            isAdmin={isAdmin}
                            disableAutoHeight={true}
                        >
                        </DataGridTable>
                    </div>


                </div>
            </div>
            <br></br>
        </div>)
}

export default AdministrationMTDataTable