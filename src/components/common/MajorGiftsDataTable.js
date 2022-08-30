import React from 'react'
import DataGridTable from '../common/DataGridTable';
import { majorGiftsColumns } from '../../constants/constants';
import {
    randomId,
} from '@mui/x-data-grid-generator';

const MajorGiftsDataTable = ({ category, isAdmin, showBanner, getData, eventHeader }) => {
    // console.log(category)

    const getEditableColumns = (tableColumns) => {
        const newColumns = tableColumns.map((column) => {
            column.editable = isAdmin ? true : false;
            return column;
        });

        eventHeader?.eventHeaderList?.forEach((eventHeaderItem) => {
            newColumns.push({
                field: `${eventHeaderItem?.event_id}`, headerName: `${eventHeaderItem?.eventName}`, width: "180", editable: isAdmin || eventHeaderItem?.eventName.toLowerCase() === 'total' ? false : true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: eventHeaderItem?.eventName.toLowerCase() === 'total' ? '' : 'bg_darkGray', align: 'center'
            })
        }
        )
        return newColumns;
    }

    const getTotalEventUpdateDetails = (item) => {
        const details = {};
        const foundItem = item?.eventTypeDataList?.find((event) => event?.event_id === 1);
        details.id = foundItem?.id;
        details.value = foundItem?.value;
        return details;
    }

    const getIds = (item, heirarchy) => {
        let ids = {};
        if (heirarchy === 1) {
            item?.eventTypeDataList?.forEach((event) => {
                ids[`categoryEventId${event?.event_id}`] = event?.id;
                ids[`categoryEventValue${event?.event_id}`] = event?.value;
            })
        }
        if (heirarchy === 2) {
            item?.eventTypeDataList?.forEach((event) => {
                ids[`subCategoryEventId${event?.event_id}`] = event?.id;
                ids[`subCategoryEventValue${event?.event_id}`] = event?.value;
            })
        }
        return ids;
    }

    const getEventDetails = (item) => {
        // console.log(item)
        const eventDetails = {};
        item?.eventTypeDataList?.forEach((event) => {
            eventDetails[`${event?.event_id}`] = event?.value
            eventDetails[`eventUpdateId${event?.event_id}`] = event?.id;
        })
        return isAdmin ? {} : eventDetails;
    }

    const categoryTotal = getTotalEventUpdateDetails(category);
    const categoryIds = getIds(category, 1)

    const getRows = (subCategory) => {
        const newTableRows = [];
        if (subCategory?.subCategoryName.toLowerCase() !== 'dummy') {
            newTableRows.push({
                id: randomId(),
                lineItemName: `${subCategory.subCategoryName}:`,
            })
        }
        if (isAdmin && subCategory?.lineItems?.length > 0) {
            subCategory?.lineItems?.forEach((lineItem) => {
                if (lineItem?.lineItemName.toLowerCase() !== 'dummy')
                    newTableRows.push({
                        id: randomId(),
                        lineItemName: `${lineItem?.lineItemName}:`,
                        lineItemDescription: lineItem?.lineItemDescription,
                        line_item_id: lineItem?.line_item_id,
                        ...getEventDetails(lineItem)
                    })
            })
        }

        else if (!isAdmin && subCategory?.lineItemDataList?.length > 0) {
            const subCategoryTotal = getTotalEventUpdateDetails(subCategory);
            const subCategoryIds = getIds(subCategory, 2)
            subCategory?.lineItemDataList?.forEach((lineItem) => {
                if (lineItem?.lineItemName.toLowerCase() !== 'dummy') {
                    const lineItemTotal = getTotalEventUpdateDetails(lineItem);
                    newTableRows.push({
                        id: randomId(),
                        lineItemName: `${lineItem?.lineItemName}:`,
                        lineItemDescription: lineItem?.lineItemDescription,
                        line_item_id: lineItem?.template_line_item_id,
                        ...getEventDetails(lineItem),
                        lineItemTotalId: lineItemTotal?.id,
                        lineItemTotalValue: lineItemTotal?.value,
                        subCategoryTotalId: subCategoryTotal?.id,
                        subCategoryTotalValue: subCategoryTotal?.value,
                        categoryTotalId: categoryTotal?.id,
                        categoryTotalValue: categoryTotal?.value,
                        ...categoryIds,
                        ...subCategoryIds
                    })
                }
            })
        }

        if (subCategory?.subCategoryName.toLowerCase() !== 'dummy')
            newTableRows.push({
                id: randomId(),
                lineItemDescription: `${subCategory.subCategoryName} Subtotal`,
                ...getEventDetails(subCategory)
            })
        return newTableRows;
    }

    const handleGetRowClassName = (params) => {
        if (['Renewals Subtotal', "New Gifts Subtotal"].includes(params.row.lineItemDescription))
            return 'aqua'
    }

    const getCategoryRow = () => {
        const newTableRows = []
        newTableRows.push({
            id: randomId(),
            ...getEventDetails(category)
        })
        return newTableRows;
    }


    const columns = getEditableColumns(majorGiftsColumns);
    return (
        <div>{showBanner && <div className="aqua pageMiddleHeading mt-8">
            <h1>{category?.categoryName}</h1>
        </div>}
            {((isAdmin && Number(category?.cat_id) <= 17) || (!isAdmin && Number(category?.cat_template_id) <= 17)) ? <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex' }}>
                    <div style={{ border: '2px solid black ', width: '150px' }}><p>{category?.categoryName === 'dummy' ? '' : category?.categoryName}</p></div>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                        {isAdmin && category?.subCategoryList?.map((subCategory) => {
                            const rows = getRows(subCategory)
                            return <div >
                                <DataGridTable
                                    page='majorGifts'
                                    tableColumns={columns}
                                    initialRows={rows}
                                    handleGetRowClassName={handleGetRowClassName}
                                    headerHeight={0}
                                    isAdmin={isAdmin}
                                    subCategory={subCategory?.sub_cat_id}
                                    getData={getData}
                                >
                                </DataGridTable>
                            </div>
                        })}
                        {!isAdmin && category?.subCategoryDataList?.map((subCategory) => {
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
                <div className='categoryBox flex'>
                    <div className='categoryCode'>{category?.accountInfo}</div>
                    <div className='categoryCodeItem flex' >Total {category?.categoryName}</div>
                    <div style={{ width: '900px' }}>
                        <DataGridTable
                            page='majorGifts'
                            tableColumns={columns.slice(2, columns.length)}
                            initialRows={getCategoryRow()}
                            handleGetRowClassName={handleGetRowClassName}
                            headerHeight={0}
                            isAdmin={isAdmin}
                            getData={getData}
                            isHeaderTable={true}
                            rowHeight={80}
                        >
                        </DataGridTable>
                    </div>
                </div>
            </div> : <div className='categoryBox flex'>
                    <div className='categoryCode'>{category?.accountInfo}</div>
                    <div className='categoryCodeItem flex' >{((isAdmin && Number(category?.cat_id) <= 17) || (!isAdmin && Number(category?.cat_template_id) <= 17))?'':'Total'} {category?.categoryName}</div>
                    <div style={{ width: '900px' }}>
                        <DataGridTable
                            page='majorGifts'
                            tableColumns={columns.slice(2, columns.length)}
                            initialRows={getCategoryRow()}
                            handleGetRowClassName={handleGetRowClassName}
                            headerHeight={0}
                            isAdmin={isAdmin}
                            getData={getData}
                            isHeaderTable={true}
                            rowHeight={80}
                        >
                        </DataGridTable>
                    </div>
                </div>}
        </div>)
}

export default MajorGiftsDataTable