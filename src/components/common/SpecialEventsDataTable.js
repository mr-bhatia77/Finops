import React from 'react'
import DataGridTable from '../common/DataGridTable';
import { specialEventsColumns } from '../../constants/constants';
import {
    randomId,
} from '@mui/x-data-grid-generator';

const SpecialEventsDataTable = ({ category, isAdmin }) => {
   

    const getEditableColumns = (tableColumns) => {
        let newColumns = tableColumns.map((column) => {
            column.editable = isAdmin ? true : false;
            return column;
        });
        return newColumns;
    }

    const getRows = (subCategory) => {
        const newTableRows = [];
        if (subCategory.subCategoryName !== 'dummy') {
            newTableRows.push({
                id: randomId(),
                subCategoryName: subCategory?.subCategoryName,
                lineItemName: '',
                companyCode: subCategory?.companyCode,
                total: '',
            })
        }
        if (subCategory?.lineItems?.length > 0)
            subCategory?.lineItems?.forEach((lineItem) => {
                newTableRows.push({
                    id: randomId(),
                    subCategoryName: lineItem?.lineItemName,
                    companyCode: lineItem?.companyCode,
                    total: '',
                })
            })
        return newTableRows;
    }

   
    const handleGetRowClassName = (params) => {
        if (params?.row?.lineItemName)
            return ''
    }



    return (
        <div>
            <div style={{ display: 'flex' }}>
                <div className='peach' style={{ border: '2px solid black ', width: '185px' }}><p>{category.categoryName === 'dummy' ? '' : category.categoryName}</p></div>
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    {category.subCategoryList.map((subCategory, index) => {
                        return <div >
                            <DataGridTable
                                page={'SpecialEvents'}
                                tableColumns={getEditableColumns(specialEventsColumns)}
                                initialRows={getRows(subCategory)}
                                handleGetRowClassName={handleGetRowClassName}
                                headerHeight={0}
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

export default SpecialEventsDataTable