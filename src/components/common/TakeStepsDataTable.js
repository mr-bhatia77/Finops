import React from 'react'
import { takeStepsHeaderColumns, takeStepsTableColumns } from '../../constants/constants'
import DataGridTable from './DataGridTable';
import {
    randomId,
} from '@mui/x-data-grid-generator';



const TakeStepsDataTable = ({ category, isAdmin, walk,getData }) => {
    // console.log(category)

    const getModifiedColumns = (category) => {
        let newColumns = [...takeStepsTableColumns]
        if (category.categoryName === 'dummy') {
            // console.log('hello')
            newColumns[0] = {
                ...newColumns[0], cellClassName: "blackAndWhite",
                headerClassName: 'black'
            }
            newColumns[1] = {
                ...newColumns[1], cellClassName: "blackAndWhite",
                headerClassName: 'black'
            }
            newColumns[2] = {
                ...newColumns[2], cellClassName: "blackAndWhite",
                headerClassName: 'black'

            }
        }

        if (walk >= 0)
            newColumns = [...newColumns, {
                field: "walkColumn1",
                headerName: ".",
                width: "300",
                editable: true,
                align: "center",
                headerClassName: 'black',
                cellClassName: 'bg_darkGray'
            },
            {
                field: "walkColumn2",
                headerName: ".",
                width: "300",
                editable: true,
                align: "center",
                headerClassName: 'black',
            }]
        // console.log(newColumns)
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
        if (isAdmin && subCategory?.lineItems?.length > 0) {
            // console.log(subCategory)
            subCategory?.lineItems?.forEach((lineItem) => {
                newTableRows.push({
                    id: randomId(),
                    subCategoryName: '',
                    lineItemName: lineItem?.lineItemName,
                    line_item_id:lineItem?.line_item_id,
                    companyCode: lineItem?.companyCode,
                    takeStepsOverHead: lineItem?.takeStepsOverHead,
                    chapterTotal: lineItem?.chapterTotal,
                    walkColumn1: lineItem?.walkColumn1,
                    walkColumn2: lineItem?.walkColumn2
                })
            })
        }
        else if (!isAdmin && subCategory?.lineItemDataList?.length > 0) {
            subCategory?.lineItemDataList?.forEach((lineItem) => {
                newTableRows.push({
                    id: randomId(),
                    subCategoryName: '',
                    lineItemName: lineItem?.lineItemName,
                    line_item_id:lineItem?.template_line_item_id,
                    companyCode: lineItem?.companyCode,
                    takeStepsOverHead: lineItem?.takeStepsOverHead,
                    chapterTotal: lineItem?.chapterTotal,
                    eventId: lineItem?.eventTypeDataList?.[0]?.id || null,
                    walkColumn1: lineItem?.eventTypeDataList?.[0]?.value || null,
                    walkColumn2: lineItem?.walkColumn2
                })
            })
        }
        // console.log(newTableRows);
        return newTableRows;
    }

    const handleGetRowClassName = (params) => {
        if (['Mileage', 'Meetings & Travel', 'Printing', 'Postage & Shipping', 'Freight Shipping', 'Bike Rentals', 'Advertising'].includes(params.row.category))
            return 'backgroundYellow';
    }

    return (
        <div>
            {category.categoryName === 'dummy' && <div className='fixedHeader'>
                <div style={{ display: 'flex' }}>
                    <div style={{ width: '180px' }}></div>
                    <div style={{ width: '100%' }}>
                        <DataGridTable
                            tableColumns={getModifiedColumns(category)}
                            initialRows={isAdmin ? getRows(category?.subCategoryList[0]) : getRows(category?.subCategoryDataList[0])}
                            handleGetRowClassName={handleGetRowClassName}
                            headerHeight={50}
                            isAdmin={isAdmin}
                            getData={getData}
                        >
                        </DataGridTable>
                    </div>
                </div>
            </div>}
            {category.categoryName !== 'dummy' && <div className='content'>
                <div style={{ display: 'flex' }}>
                    <div className='bg_green' style={{ border: '2px solid black ', width: '167px' }}><p className='rotate'>{category.categoryName === 'dummy' ? '' : category.categoryName}</p></div>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                        {isAdmin ? category?.subCategoryList?.map((subCategory) => {
                            return <div >
                                <DataGridTable
                                    page={'TakeSteps'}
                                    tableColumns={getModifiedColumns(category)}
                                    initialRows={getRows(subCategory)}
                                    handleGetRowClassName={handleGetRowClassName}
                                    headerHeight={0}
                                    isAdmin={isAdmin}
                                    subCategory = {subCategory?.sub_cat_id}
                                >
                                </DataGridTable>
                            </div>

                        }) :
                            category?.subCategoryDataList?.map((subCategory) => {
                                return <div >
                                    <DataGridTable
                                        page={'TakeSteps'}
                                        tableColumns={getModifiedColumns(category)}
                                        initialRows={getRows(subCategory)}
                                        handleGetRowClassName={handleGetRowClassName}
                                        headerHeight={0}
                                        isAdmin={isAdmin}
                                    >
                                    </DataGridTable>
                                </div>

                            })
                        }
                    </div>
                </div>
            </div>}

        </div>
    )
}

export default TakeStepsDataTable;