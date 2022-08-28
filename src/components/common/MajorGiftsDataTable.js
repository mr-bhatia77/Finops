import React from 'react'
import DataGridTable from '../common/DataGridTable';
import { majorGiftsColumns } from '../../constants/constants';
import {
    randomId,
} from '@mui/x-data-grid-generator';

const MajorGiftsDataTable = ({ category, isAdmin ,showBanner, getData}) => {
    // console.log(category)

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
        if (isAdmin && subCategory?.lineItems?.length > 0)
            subCategory?.lineItems?.forEach((lineItem) => {
                newTableRows.push({
                    id: randomId(),
                    name: 'Donor Name:',
                    lineItemName: lineItem?.lineItemName,
                    line_item_id:lineItem?.line_item_id,
                    total: lineItem?.total,
                    unrestricted: lineItem?.unrestricted,
                    researchRestricted: lineItem?.researchRestricted,
                    esaCamp: lineItem?.esaCamp,
                    esaOther: lineItem?.esaOther
                })
            })

            else if (!isAdmin && subCategory?.lineItemDataList?.length > 0)
            subCategory?.lineItemDataList?.forEach((lineItem) => {
                newTableRows.push({
                    id: randomId(),
                    name: 'Donor Name:',
                    lineItemName: lineItem?.lineItemName,
                    line_item_id:lineItem?.template_line_item_id,
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
            lineItemName: `${subCategory.subCategoryName} Subtotal`,
            total: '',
            unrestricted: '',
            researchRestricted: '',
            esaCamp: '',
            esaOther: ''
        })
        return newTableRows;
    }

    const handleGetRowClassName = (params) => {
        if (['Renewals Subtotal', "New Gifts Subtotal"].includes(params.row.lineItemName))
            return 'aqua'
    }



    return (
        <div>{showBanner && <div className="aqua pageMiddleHeading mt-8">
            <h1>{category?.categoryName}</h1>
        </div>}
            <div style={{ display: 'flex' }}>
                <div style={{ border: '2px solid black ', width: '5%' }}><p>{category.categoryName === 'dummy' ? '' : category.categoryName}</p></div>
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    {isAdmin && category.subCategoryList.map((subCategory) => {
                        return <div >
                            <DataGridTable
                                page='majorGifts'
                                tableColumns={getEditableColumns(majorGiftsColumns)}
                                initialRows={getRows(subCategory)}
                                handleGetRowClassName={handleGetRowClassName}
                                headerHeight={0}
                                isAdmin={isAdmin}
                                subCategory={subCategory?.sub_cat_id}
                                getData={getData}
                            >
                            </DataGridTable>
                        </div>
                    })}
                    {!isAdmin && category.subCategoryDataList.map((subCategory) => {
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