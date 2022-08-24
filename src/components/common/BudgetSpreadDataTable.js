import React from 'react'
import DataGridTable from '../common/DataGridTable';
import { budgetColumns } from '../../constants/constants';
import {
    randomId,
} from '@mui/x-data-grid-generator';

const BudgetSpreadDataTable = ({ category, isAdmin }) => {
   

    const getEditableColumns = (tableColumns) => {
        let newColumns = tableColumns.map((column) => {
            column.editable = isAdmin ? true : false;
            return column;
        });
        return newColumns;
    }

    const getRows = (subCategory,index) => {
        console.log(subCategory)
        const newTableRows = [];
         
        if (subCategory.subCategoryName !== 'dummy') {
            newTableRows.push({
                id: randomId(),
                categoryName: category?.categoryName,
                subCategoryName: subCategory?.subCategoryName,
            })
        }
        if (isAdmin && subCategory?.lineItems?.length > 0)
            subCategory?.lineItems?.forEach((lineItem) => {
                newTableRows.push({
                    id: randomId(),
                    subCategoryName: lineItem?.account,
                    lineItemName :lineItem?.lineItemName,
                    line_item_id:lineItem?.line_item_id,
                    lineItemDescription: lineItem?.lineItemDescription
                })
            })
        
        else if (!isAdmin && subCategory?.lineItemDataList?.length > 0)
        subCategory?.lineItemDataList?.forEach((lineItem) => {
            newTableRows.push({
                id: randomId(),
                subCategoryName: lineItem?.account,
                lineItemName :lineItem?.lineItemName,
                line_item_id:lineItem?.template_line_item_id,
                lineItemDescription: lineItem?.lineItemDescription
            })
        })

        
        console.log(newTableRows)
        return newTableRows;
    }

   
    const handleGetRowClassName = (params) => {
            return ''
    }

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    {isAdmin && category.subCategoryList.map((subCategory, index) => {
                        return <div >
                            <DataGridTable
                                page={'budgetSpread'}
                                tableColumns={getEditableColumns(budgetColumns)}
                                initialRows={getRows(subCategory,index)}
                                handleGetRowClassName={handleGetRowClassName}
                                headerHeight={subCategory?.subCategoryName === '80005 - Central Texas - Austin' ? 50: 0}
                                isAdmin={isAdmin}
                                subCategory={subCategory?.sub_cat_id}
                            >
                            </DataGridTable>
                        </div>
                    })}
                    {!isAdmin && category.subCategoryDataList.map((subCategory,index) => {
                        return <div>
                            <DataGridTable
                                page={'budgetSpread'}
                                tableColumns={getEditableColumns(budgetColumns)}
                                initialRows={getRows(subCategory,index)}
                                handleGetRowClassName={handleGetRowClassName}
                                headerHeight={subCategory?.subCategoryName === '80005 - Central Texas - Austin' ? 50: 0}
                                isAdmin={isAdmin}
                            >
                            </DataGridTable>
                        </div>
                    })}
                </div>
            </div>
            <br></br>
        </div>)
}

export default BudgetSpreadDataTable