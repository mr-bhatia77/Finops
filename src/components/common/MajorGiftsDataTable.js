import React, { useEffect, useState } from 'react'
import DataGridTable from '../common/DataGridTable';
import { majorGiftsColumns } from '../../constants/constants';
import {
    randomId,
} from '@mui/x-data-grid-generator';
import axiosInstance from '../common/services/axiosInstance';
import MajorGiftsBanner from './MajorGiftsBanner';
import { useDispatch, useSelector } from 'react-redux';
import {
    updateBanner1Values,
    updateBanner2Values,
    updateBanner3Values,
    updateBanner4Values,
    updateBanner5Values,
    updateBanner6Values,
    setBanner1Values,
    setBanner2Values,
    setBanner3Values,
    setBanner4Values,
    setBanner5Values,
    setBanner6Values,
} from '../../redux/majorGifts/majorGiftsAction';

const MajorGiftsDataTable = ({ category, isAdmin, showBanner, getData, eventHeader, totalIndex }) => {
    // console.log(category)

    const dispatch = useDispatch();
    const bannerState = useSelector((state) => state.majorGifts)
    // console.log(bannerState);
    const getEventDetails = (item) => {
        // console.log(item)
        const eventDetails = {};
        item?.eventTypeDataList?.forEach((event) => {
            eventDetails[`${event?.event_id}`] = event?.value
            eventDetails[`eventUpdateId${event?.event_id}`] = event?.id;
        })
        return isAdmin ? {} : eventDetails;
    }
    useEffect(() => {
        if (!isAdmin) {
            switch (category.cat_template_id) {
                case 18:
                    dispatch(setBanner1Values(getEventDetails(category)))
                    break;
                case 19:
                    dispatch(setBanner2Values(getEventDetails(category)))
                    break;
                case 20:
                    dispatch(setBanner3Values(getEventDetails(category)))
                    break;
                case 21:
                    dispatch(setBanner4Values(getEventDetails(category)))
                    break;
                case 22:
                    dispatch(setBanner5Values(getEventDetails(category)))
                    break;
                case 23:
                    dispatch(setBanner6Values(getEventDetails(category)))
                    break;
            }
        }

    }, [])

    const [categoryUpdates, setCategoryUpdates] = useState({
        diffValue: 0,
        fieldName: 0,
        rows: [],
        eventPayload: null,
        totalPayload: null,
    })

    const [categoryValues, setCategoryValues] = useState({
        1: 0, 2: 0, 3: 0, 4: 0, 5: 0
    })


    const getEditableColumns = (tableColumns) => {
        const newColumns = tableColumns.map((column) => {
            column.editable = column.field === 'lineItemDescription' ? true : (isAdmin ? true : false);
            return column;
        });

        eventHeader?.eventHeaderList?.forEach((eventHeaderItem) => {
            newColumns.push({
                field: `${eventHeaderItem?.event_id}`, headerName: `${eventHeaderItem?.eventName}`, width: "180", editable: isAdmin || eventHeaderItem?.eventName.toLowerCase() === 'total' ? false : true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: (params) => {
                    if (params.row?.lineItemName) {
                        if (params.row.lineItemDescription === 'Renewals Subtotal' || params.row.lineItemDescription === 'New Gifts Subtotal')
                            return '';
                        else if (eventHeaderItem?.eventName.toLowerCase() === 'total')
                            return ''
                        else return 'bg_darkGray'
                    }
                    else return '';
                },
                align: 'center'
            })
        }
        )
        return newColumns;
    }

    const getTotalEventUpdateDetails = (item) => {
        const details = {};
        const foundItem = item?.eventTypeDataList?.find((event) => event?.event_id === totalIndex);
        details.id = foundItem?.id;
        details.value = foundItem?.value;
        return details;
    }

    const getIds = (item, heirarchy) => {
        let ids = {};
        if (heirarchy === 1) {
            item?.eventTypeDataList?.forEach((event) => {
                ids[`categoryEventId${event?.event_id}`] = event?.id;
            })
        }
        if (heirarchy === 2) {
            item?.eventTypeDataList?.forEach((event) => {
                ids[`subCategoryEventId${event?.event_id}`] = event?.id;
            })
        }
        return ids;
    }

    const getFieldDiff = (diffValue, fieldName, rows, eventPayload, totalPayload) => {
        // console.log(diffValue,fieldName,rows);
        setCategoryUpdates({ diffValue, fieldName, rows, eventPayload, totalPayload });
    }

    const updateBannerCalls = (bannerList, diffValue, fieldName) => {
        const payloadEvent = [];
        const payloadTotal = [];
        bannerList.forEach((banner) => {
            const bannerData = bannerState[`banner${banner}Values`]
            payloadEvent.push(
                {
                    cat_id: bannerData[`eventUpdateId${fieldName}`],
                    catValue: bannerState[`banner${banner}Values`][`${fieldName}`] + diffValue,
                    sub_cat_id: null, subCatValue: null, line_item_id: null, lineItemValue: null
                })
            payloadTotal.push(
                {
                    cat_id: bannerData[`eventUpdateId${totalIndex}`],
                    catValue: bannerState[`banner${banner}Values`][`${totalIndex}`] + diffValue,
                    sub_cat_id: null, subCatValue: null, line_item_id: null, lineItemValue: null
                })
        })
        payloadEvent.forEach((event)=>{
            axiosInstance.put(`/finops/chapter/UpdateDataValues`,event).then((res)=>{
                console.log(res)
            })
        })
        payloadTotal.forEach((total)=>{
            axiosInstance.put(`/finops/chapter/UpdateDataValues`,total).then((res)=>{
                console.log(res)
            })
        })
    }

    const updateBanner = () => {
        if (!isAdmin) {
            const catId = category.cat_template_id;
            if (catId <= 2) {
                dispatch(updateBanner1Values(categoryUpdates.diffValue, categoryUpdates.fieldName, totalIndex))
                dispatch(updateBanner3Values(categoryUpdates.diffValue, categoryUpdates.fieldName, totalIndex))
                dispatch(updateBanner4Values(categoryUpdates.diffValue, categoryUpdates.fieldName, totalIndex))
                dispatch(updateBanner6Values(categoryUpdates.diffValue, categoryUpdates.fieldName, totalIndex))
                updateBannerCalls([1, 3, 4, 6], categoryUpdates.diffValue, categoryUpdates.fieldName)
            }
            else if (catId <= 4) {
                dispatch(updateBanner2Values(categoryUpdates.diffValue, categoryUpdates.fieldName, totalIndex))
                dispatch(updateBanner3Values(categoryUpdates.diffValue, categoryUpdates.fieldName, totalIndex))
                dispatch(updateBanner4Values(categoryUpdates.diffValue, categoryUpdates.fieldName, totalIndex))
                dispatch(updateBanner6Values(categoryUpdates.diffValue, categoryUpdates.fieldName, totalIndex))
                updateBannerCalls([2, 3, 4, 6], categoryUpdates.diffValue, categoryUpdates.fieldName)
            }
            else if (catId <= 6) {
                dispatch(updateBanner4Values(categoryUpdates.diffValue, categoryUpdates.fieldName, totalIndex))
                dispatch(updateBanner5Values(categoryUpdates.diffValue, categoryUpdates.fieldName, totalIndex))
                dispatch(updateBanner6Values(categoryUpdates.diffValue, categoryUpdates.fieldName, totalIndex))
                updateBannerCalls([4, 5, 6], categoryUpdates.diffValue, categoryUpdates.fieldName,)
            }
            else if (catId <= 17 || catId >= 24) {
                dispatch(updateBanner5Values(categoryUpdates.diffValue, categoryUpdates.fieldName, totalIndex))
                dispatch(updateBanner6Values(categoryUpdates.diffValue, categoryUpdates.fieldName, totalIndex))
                updateBannerCalls([5, 6], categoryUpdates.diffValue, categoryUpdates.fieldName,)
            }
        }
    }

    const getCategoryEventDetails = () => {
        const eventDetails = {};
        const newCategoryValues = { ...categoryValues };
        category?.eventTypeDataList?.forEach((event) => {
            eventDetails[`${event?.event_id}`] = categoryValues[`${event?.event_id}`] ? (categoryValues[`${event?.event_id}`]) : event?.value
            newCategoryValues[`${event?.event_id}`] = categoryValues[`${event?.event_id}`] ? (categoryValues[`${event?.event_id}`]) : event?.value
            eventDetails[`eventUpdateId${event?.event_id}`] = event?.id;
        })
        eventDetails[`${totalIndex}`] += categoryUpdates.diffValue;
        if (categoryUpdates.fieldName) {
            eventDetails[`${categoryUpdates.fieldName}`] += categoryUpdates.diffValue;
            newCategoryValues[`${categoryUpdates.fieldName}`] += categoryUpdates.diffValue;
        }
        newCategoryValues[`${totalIndex}`] += categoryUpdates.diffValue;
        if (categoryUpdates.diffValue)
            setCategoryUpdates({ ...categoryUpdates, diffValue: 0 })
        if (categoryValues[`${totalIndex}`] !== newCategoryValues[`${totalIndex}`]) {
            setCategoryValues(newCategoryValues);
        }
        if (categoryUpdates.eventPayload && categoryValues[`${totalIndex}`] !== newCategoryValues[`${totalIndex}`]) {
            const { eventPayload, totalPayload } = categoryUpdates;
            eventPayload.cat_id = eventDetails[`eventUpdateId${categoryUpdates.fieldName}`]
            eventPayload.catValue = eventDetails[`${categoryUpdates.fieldName}`]
            totalPayload.cat_id = eventDetails[`eventUpdateId1`]
            totalPayload.catValue = eventDetails[`${totalIndex}`]
            console.log(eventPayload);
            console.log(totalPayload);
            updateBanner();
            Promise.all([axiosInstance.put(`/finops/chapter/UpdateDataValues`, eventPayload), axiosInstance.put(`/finops/chapter/UpdateDataValues`, totalPayload)]).then((res) => {
                console.log(res);
            })
        }

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
            ...getCategoryEventDetails()
        })
        // console.log(newTableRows);
        return newTableRows;
    }

    const getClassName = (categoryName) => {
        switch (categoryName) {
            case 'TOTAL MAJOR GIFTS':
                return 'backgroundAqua';
                break;
            case 'TOTAL OTHER REVENUE':
                return 'backgroundAqua';
                break;
            case 'TOTAL MAJOR GIFTS AND OTHER REVENUE':
                return 'backgroundPeach';
                break;
            default:
                return '';

        }
    }


    const columns = getEditableColumns(majorGiftsColumns);
    return (
        <div key={category.categoryName}>{showBanner && <div className="aqua pageMiddleHeading mt-8">
            <h1>{category?.categoryName}</h1>
        </div>}
            {((isAdmin && ((Number(category?.cat_id) <= 17) || Number(category?.cat_id) >= 24)) || (!isAdmin && ((Number(category?.cat_template_id) <= 17) || Number(category?.cat_template_id) >= 24))) ? <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex' }}>
                    <div className='flex verticalAlign textBold textAlignCenter' style={{ border: '2px solid black ', width: '150px' }}><p>{category?.categoryName === 'dummy' ? '' : category?.categoryName}</p></div>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                        {isAdmin && category?.subCategoryList?.map((subCategory) => {
                            const rows = categoryUpdates.rows.length > 0 ? categoryUpdates.rows : getRows(subCategory)
                            return <div
                                key={subCategory.subCategoryName}>
                                <DataGridTable
                                    page='majorGifts'
                                    tableColumns={columns}
                                    initialRows={rows}
                                    handleGetRowClassName={handleGetRowClassName}
                                    headerHeight={0}
                                    isAdmin={isAdmin}
                                    subCategory={subCategory?.sub_cat_id}
                                    getData={getData}
                                    getFieldDiff={getFieldDiff}
                                    totalIndex={totalIndex}
                                    isHeaderTable={!isAdmin}
                                >
                                </DataGridTable>
                            </div>
                        })}
                        {!isAdmin && category?.subCategoryDataList?.map((subCategory) => {
                            const rows = categoryUpdates.rows.length > 0 ? categoryUpdates.rows : getRows(subCategory)
                            return <div key={subCategory.subCategoryName}>
                                <DataGridTable
                                    page='majorGifts'
                                    tableColumns={getEditableColumns(majorGiftsColumns)}
                                    initialRows={rows}
                                    handleGetRowClassName={handleGetRowClassName}
                                    headerHeight={0}
                                    isAdmin={isAdmin}
                                    getFieldDiff={getFieldDiff}
                                    totalIndex={totalIndex}
                                    isHeaderTable={!isAdmin}
                                >
                                </DataGridTable>
                            </div>
                        })}
                    </div>
                </div>
                <div className='categoryBox flex'>
                    <div className='categoryCode flex verticalAlign textAlignCenter'>{category?.accountInfo}</div>
                    <div className='categoryCodeItem flex '>Total {category?.categoryName}</div>
                    <div style={{ width: '900px' }}>
                        <DataGridTable
                            key={category.categoryName}
                            page='majorGifts1'
                            tableColumns={columns.slice(2, columns.length)}
                            initialRows={getCategoryRow()}
                            handleGetRowClassName={handleGetRowClassName}
                            headerHeight={0}
                            isAdmin={isAdmin}
                            getData={getData}
                            isHeaderTable={true}
                            rowHeight={80}
                            totalIndex={totalIndex}
                        >
                        </DataGridTable>
                    </div>
                </div>
            </div> : <MajorGiftsBanner
                key={category.categoryName}
                isAdmin={isAdmin}
                category={category}
                columns={columns}
                handleGetRowClassName={handleGetRowClassName}
                getCategoryRow={getCategoryRow}
                totalIndex={totalIndex}
                getClassName={getClassName}

            ></MajorGiftsBanner>}
        </div>)
}

export default MajorGiftsDataTable