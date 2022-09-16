import React from 'react'
import { takeStepsTableColumns } from '../../constants/constants'
import DataGridTable from './DataGridTable';
import {
    randomId,
} from '@mui/x-data-grid-generator';



const TakeStepsDataTable = ({ category, isAdmin, walk,getData }) => {
    // console.log(category)

    const getModifiedColumns = (category) => {
        let newColumns = [...takeStepsTableColumns]

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

    const getClassName = (item) => {
        switch(item) {
            case 'NET REVENUE': return 'blueAndWhite mediumFontSize';
            case 'NET REVENUE MARGIN': return 'blueAndWhite mediumFontSize';
            case 'NET INCOME': return 'blueAndWhite mediumFontSize';
        }

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
                if(lineItem?.lineItemName!=='dummy')
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
                if(lineItem?.lineItemName!=='dummy')
                newTableRows.push({
                    id: randomId(),
                    subCategoryName: '',
                    lineItemName: lineItem?.lineItemName,
                    line_item_id:lineItem?.template_line_item_id,
                    companyCode: lineItem?.companyCode,
                    takeStepsOverHead: lineItem?.pricePerPiece,
                    chapterTotal: lineItem?.chapterTotal,
                    eventId: lineItem?.eventTypeDataList?.[0]?.id || null,
                    walkColumn1: lineItem?.eventTypeDataList?.[0]?.value || null,
                    walkColumn2: lineItem?.walkColumn2
                })
            })
        }
        console.log(newTableRows);
        return newTableRows;
    }

    const getCategoryRow = () =>{
        const newTableRows = [];
        newTableRows.push({
            id: randomId(),
            subCategoryName: category?.categoryName,
            lineItemName: '',
            companyCode: '',
            total: '',
        })
        return newTableRows;
    }

    const handleGetRowClassName = (params) => {
        return getClassName(params.row.subCategoryName);
    }
console.log(category);
    return (
        <div>
            {(category.categoryName !== 'dummy' ) &&(category.cat_id < 30 ||category.cat_template_id <30)  && <div>
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
            {(category.categoryName !== 'dummy' )&& (category.cat_id >= 30 ||category.cat_template_id >= 30)  && <div>
                <div style={{ display: 'flex' }}>
                    <div className='blueAndWhite' style={{ border: '2px solid black ', width: '178px' }}></div>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                        {isAdmin ?  <div >
                                <DataGridTable
                                    page={'TakeSteps'}
                                    tableColumns={getModifiedColumns(category)}
                                    initialRows={getCategoryRow()}
                                    handleGetRowClassName={handleGetRowClassName}
                                    headerHeight={0}
                                    isAdmin={isAdmin}
                                    isHeaderTable={true}
                                >
                                </DataGridTable>
                            </div>

                         : <div >
                                    <DataGridTable
                                        page={'TakeSteps'}
                                        tableColumns={getModifiedColumns(category)}
                                        initialRows={getCategoryRow()}
                                        handleGetRowClassName={handleGetRowClassName}
                                        headerHeight={0}
                                        isAdmin={isAdmin}
                                        isHeaderTable={true}
                                    >
                                    </DataGridTable>
                                </div>

                            
                        }
                    </div>
                </div>
            </div>}

        </div>
    )
}

export default TakeStepsDataTable;