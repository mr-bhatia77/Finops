import React from 'react'
import DataGridTable from '../common/DataGridTable';
import { consolidatedColumns } from '../../constants/constants';
import {
    randomId,
} from '@mui/x-data-grid-generator';

const ConsolidatedDataTable = ({ category, isAdmin }) => {
   

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
        index ===0 && newTableRows.push({
            id: randomId(),
            subCategoryName: category?.categoryName,
        })
        if (isAdmin && subCategory?.lineItems?.length > 0)
            subCategory?.lineItems?.forEach((lineItem) => {
                newTableRows.push({
                    id: randomId(),
                    subCategoryName: lineItem?.lineItemName,
                    line_item_id:lineItem?.line_item_id,
                })
            })
        
        else if (!isAdmin && subCategory?.lineItemDataList?.length > 0)
        subCategory?.lineItemDataList?.forEach((lineItem) => {
            newTableRows.push({
                id: randomId(),
                subCategoryName: lineItem?.lineItemName,
                line_item_id:lineItem?.template_line_item_id,
            })
        })

        if (subCategory.subCategoryName !== 'dummy') {
            newTableRows.push({
                id: randomId(),
                subCategoryName: subCategory?.subCategoryName,
            })
        }
        console.log(newTableRows)
        return newTableRows;
    }

   
    const handleGetRowClassName = (params) => {
        if(['Operating Expenses','Direct Mission Expenses','Net Revenue from Special Events','Net Revenue from Team Challenge'].includes(params?.row?.subCategoryName))
            return 'backgroundYellow'
    }

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    {isAdmin && category.subCategoryList.map((subCategory, index) => {
                        return <div >
                            <DataGridTable
                                page={'consolidated'}
                                tableColumns={getEditableColumns(consolidatedColumns)}
                                initialRows={getRows(subCategory,index)}
                                handleGetRowClassName={handleGetRowClassName}
                                headerHeight={0}
                                isAdmin={isAdmin}
                                subCategory={subCategory?.sub_cat_id}
                            >
                            </DataGridTable>
                        </div>
                    })}
                    {!isAdmin && category.subCategoryDataList.map((subCategory,index) => {
                        return <div>
                            <DataGridTable
                                page={'consolidated'}
                                tableColumns={getEditableColumns(consolidatedColumns)}
                                initialRows={getRows(subCategory,index)}
                                handleGetRowClassName={handleGetRowClassName}
                                headerHeight={subCategory?.subCategoryName==='Net Revenue from Special Events'? 50 : 0}
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

export default ConsolidatedDataTable