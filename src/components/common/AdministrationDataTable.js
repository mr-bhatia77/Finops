import React from 'react'
import DataGridTable from '../common/DataGridTable';
import { administrationColumns } from '../../constants/constants';
import {
    randomId,
} from '@mui/x-data-grid-generator';

const AdministrationDataTable = ({ category, isAdmin, getData, adminEventHeader }) => {
    // console.log(category)

    const getEditableColumns = (tableColumns) => {
        const newColumns = tableColumns.map((column) => {
            column.editable = isAdmin ? true : false;
            return column;
        });

        adminEventHeader?.eventHeaderList?.forEach((eventHeaderItem)=>{
            newColumns.push({
                field: `${eventHeaderItem?.event_id}`, headerName: `${eventHeaderItem?.eventName}`, width: "300", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: 'bg_darkGray', align: 'center' 
            })
        })

        newColumns.push({
             field: "total", headerName: "", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' 
        })
        return newColumns;
    }

    const getEventDetails = (item)=> {
        const eventDetails = {};
        item?.eventTypeDataList?.forEach((event)=>{
            eventDetails[`${event?.id}`]=event?.value
        })
        return eventDetails;
    }

    const getRows = (subCategory, subCategoryIndex) => {
        const newTableRows = [];
        if (subCategory.subCategoryName !== 'dummy') {
            newTableRows.push({
                id: randomId(),
                subCategoryName: subCategory?.subCategoryName,
                lineItemName: '',
                companyCode: subCategory?.companyCode,
                ...getEventDetails(subCategory),
                total:500
            })
        }
        if (isAdmin && subCategory?.lineItems?.length > 0)
            subCategory?.lineItems?.forEach((lineItem) => {
                newTableRows.push({
                    id: randomId(),
                    subCategoryName: '',
                    lineItemName: lineItem?.lineItemName,
                    line_item_id:lineItem?.line_item_id,
                    companyCode: lineItem?.companyCode,
                    ...getEventDetails(lineItem),
                    total: '',
                })
            })
        
        else if (!isAdmin && subCategory?.lineItemDataList?.length > 0)
        subCategory?.lineItemDataList?.forEach((lineItem) => {
            newTableRows.push({
                id: randomId(),
                subCategoryName: '',
                lineItemName: lineItem?.lineItemName,
                line_item_id:lineItem?.template_line_item_id,
                companyCode: lineItem?.companyCode,
                ...getEventDetails(lineItem),
                total: '',
            })
        })

        if (isAdmin && subCategoryIndex === category?.subCategoryList?.length)
            newTableRows.push({
                id: randomId(),
                subCategoryName: `${category?.categoryName} Total`,
                lineItemName: '',
                companyCode: category?.companyCode,
                ...getEventDetails(category),
                total: '',
            })
        
            else if (!isAdmin && subCategoryIndex === category?.subCategoryDataList?.length)
            newTableRows.push({
                id: randomId(),
                subCategoryName: `${category?.categoryName} Total`,
                lineItemName: '',
                companyCode: category?.companyCode,
                ...getEventDetails(category),
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
                    {isAdmin && category.subCategoryList.map((subCategory, index) => {
                        return <div >
                            <DataGridTable
                                page={index+1 ===category?.subCategoryList?.length ? 'adminLastTable':'Administration'}
                                tableColumns={getEditableColumns(administrationColumns)}
                                initialRows={getRows(subCategory, index + 1)}
                                handleGetRowClassName={handleGetRowClassName}
                                headerHeight={0}
                                isAdmin={isAdmin}
                                subCategory={subCategory?.sub_cat_id}
                                getData={getData}
                            >
                            </DataGridTable>
                        </div>

                    })}
                    {!isAdmin && category.subCategoryDataList.map((subCategory, index) => {
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