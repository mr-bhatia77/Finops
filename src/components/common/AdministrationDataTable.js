import React from 'react'
import DataGridTable from '../common/DataGridTable';
import { administrationColumns } from '../../constants/constants';
import {
    randomId,
} from '@mui/x-data-grid-generator';

const AdministrationDataTable = ({ category, isAdmin }) => {
    console.log(category)

    const getEditableColumns = (tableColumns) => {
        const newColumns = tableColumns.map((column) => {
            column.editable = isAdmin ? true : false;
            return column;
        });
        return newColumns;
    }

    // const categoryTotalRow = {
    //     id: randomId(),
    //     subCategoryName: `${category?.categoryName} Total`,
    //     lineItemName: '',
    //     companyCode: category?.companyCode,
    //     adminGeneral: '',
    //     total: '',
    // }

    const getRows = (subCategory, subCategoryIndex) => {
        const newTableRows = [];
        if (subCategory.subCategoryName !== 'dummy') {
            newTableRows.push({
                id: randomId(),
                subCategoryName: subCategory?.subCategoryName,
                lineItemName: '',
                companyCode: subCategory?.companyCode,
                adminGeneral: '',
                total: '',
            })
        }
        if (subCategory?.lineItems?.length > 0)
            subCategory?.lineItems?.forEach((lineItem) => {
                newTableRows.push({
                    id: randomId(),
                    subCategoryName: '',
                    lineItemName: lineItem?.lineItemName,
                    companyCode: lineItem?.companyCode,
                    adminGeneral: '',
                    total: '',
                })
            })

        if (subCategoryIndex === category?.subCategoryList?.length)
            newTableRows.push({
                id: randomId(),
                subCategoryName: `${category?.categoryName} Total`,
                lineItemName: '',
                companyCode: category?.companyCode,
                adminGeneral: '',
                total: '',
            })
        return newTableRows;
    }

    const handleGetRowClassName = (params) => {
        if (['Renewals Subtotal', "New Gifts Subtotal"].includes(params.row.donorName))
            return 'aqua'
    }



    return (
        <div>
            <div style={{ display: 'flex' }}>
                <div style={{ border: '2px solid black ', width: '100px' }}><p>{category.categoryName === 'dummy' ? '' : category.categoryName}</p></div>
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    {category.subCategoryList.map((subCategory, index) => {
                        return <div >
                            <DataGridTable
                                page={index+1 ===category?.subCategoryList?.length ? 'adminLastTable':'Administration'}
                                tableColumns={getEditableColumns(administrationColumns)}
                                initialRows={getRows(subCategory, index + 1)}
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

export default AdministrationDataTable