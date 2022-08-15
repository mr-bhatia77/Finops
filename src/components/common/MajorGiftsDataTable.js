import React from 'react'
import DataGridTable from '../common/DataGridTable';
import { majorGiftsColumns } from '../../constants/constants';
import {
    randomId,
} from '@mui/x-data-grid-generator';

const MajorGiftsDataTable = ({ category, isAdmin }) => {
    console.log(category)

    const getEditableColumns = (tableColumns) => {
        const newColumns = tableColumns.map((column) => {
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
                name: subCategory.subCategoryName,
                total: '',
                unrestricted: '',
                researchRestricted: '',
                esaCamp: '',
                esaOther: ''
            })
        }
        if (subCategory?.lineItems?.length > 0)
            subCategory?.lineItems?.forEach((lineItem) => {
                newTableRows.push({
                    id: randomId(),
                    name: 'Donor Name:',
                    donorName: lineItem?.lineItemName,
                    total: lineItem?.total,
                    unrestricted: lineItem?.unrestricted,
                    researchRestricted: lineItem?.researchRestricted,
                    esaCamp: lineItem?.esaCamp,
                    esaOther: lineItem?.esaOther
                })
            })

        newTableRows.push({
            id: randomId(),
            name: '',
            donorName: `${subCategory.subCategoryName} Subtotal`,
            total: '',
            unrestricted: '',
            researchRestricted: '',
            esaCamp: '',
            esaOther: ''
        })
        return newTableRows;
    }

    const handleGetRowClassName = (params) => {
        if (['Renewals Subtotal', "New Gifts Subtotal"].includes(params.row.donorName))
            return 'aqua'
    }



    return (
        <div><div className="aqua pageMiddleHeading mt-8">
            <h1>{category?.categoryName}</h1>
        </div>
            <div style={{ display: 'flex' }}>
                <div style={{ border: '2px solid black ', width: '5%' }}><p>{category.categoryName === 'dummy' ? '' : category.categoryName}</p></div>
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    {category.subCategoryList.map((subCategory) => {
                        return <div >
                            <DataGridTable
                                page='majorGifts'
                                tableColumns={getEditableColumns(majorGiftsColumns)}
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
        </div>)
}

export default MajorGiftsDataTable