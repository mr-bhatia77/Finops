import React,{useEffect, useState} from 'react'
import { takeStepsTableColumns } from '../../constants/constants'
import DataGridTable from './DataGridTable';
import {
    randomId,
} from '@mui/x-data-grid-generator';



const TakeStepsDataTable = ({ category, isAdmin, walk,index }) => {
    // console.log(walk)

    const[currentWalk,setCurrentWalk] = useState(0)
    const getModifiedColumns = (category) => {
        let newColumns = [...takeStepsTableColumns]

        if (walk >= 0)
            newColumns = [...newColumns, {
                field: `${9+walk}`,
                headerName: ".",
                width: "300",
                editable: true,
                align: "center",
                headerClassName: 'black',
                cellClassName: 'bg_darkGray'
            },
            {
                field: 'notes',
                headerName: ".",
                width: "300",
                editable: true,
                align: "center",
                headerClassName: 'black',
            }]
        // console.log(newColumns)
        return newColumns;
    }

    useEffect(()=>{
        setCurrentWalk(walk);
    },[walk])

    const getClassName = (item) => {
        switch(item) {
            case 'NET REVENUE': return 'blueAndWhite mediumFontSize';
            case 'NET REVENUE MARGIN': return 'blueAndWhite mediumFontSize';
            case 'NET INCOME': return 'blueAndWhite mediumFontSize';
            case 'DIRECT DONOR BENEFIT EXPENSES (DDB)': return 'orange';
            case 'DDB - Premises & Food': return 'orange';
            case 'DDB - Kickoff meetings (Engagement events ie Kickoffs, Awards, Corporate Engagement)': return 'orange';
            case 'DDB - Entertainment': return 'orange';
            case 'GROSS CAMPAIGN REVENUE': return 'bg_green';
            case 'DDB - Decorations': return 'orange';
            case 'DDB - Premiums / Incentives': return 'orange';
            case 'Shipping': return 'aqua';
            case 'INDIRECT EXPENSES': return 'aqua';
            case 'Professional Fees': return 'aqua';
            case 'Meetings & Travel (Outside of Walk Day)': return 'aqua';
            case 'Supplies': return 'aqua';
            case 'Telecommunications': return 'aqua';
            case 'Advertising': return 'aqua';
            
        }
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

    const getRows = (subCategory,isLastTable) => {
        const newTableRows = [];
        if (subCategory.subCategoryName !== 'dummy'  && (subCategory?.lineItemDataList?.length !=1 && subCategory?.lineItemDataList?.[0]?.lineItemName !='dummy')) {
            newTableRows.push({
                id: randomId(),
                subCategoryName: subCategory?.subCategoryName,
                // lineItemName: '',
                // companyCode: subCategory?.companyCode,
                // total: '',
                // ...getEventDetails(subCategory)
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
                    ...getEventDetails(lineItem)
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
                    ...getEventDetails(lineItem)
                })
            })
        }

        if (subCategory.subCategoryName !== 'dummy' && index > 0 ) {
            newTableRows.push({
                id: randomId(),
                subCategoryName: `Total ${subCategory?.subCategoryName}`,
                lineItemName: '',
                companyCode: subCategory?.companyCode,
                total: '',
                ...getEventDetails(subCategory)
            })
        }
        
        if(isLastTable){
            // console.log(subCategory)
            newTableRows.push({
                id: randomId(),
                subCategoryName: category?.categoryName,
                lineItemName: '',
                companyCode: '',
                ...getEventDetails(category)
            })
        }
        // console.log(newTableRows);
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
// console.log(category);
    return (
        <div>
            {(category.categoryName !== 'dummy' ) &&(category.cat_id < 30 ||category.cat_template_id <30)  && <div>
                <div style={{ display: 'flex' }}>
                    <div className={getClassName(category.categoryName)} style={{ border: '2px solid black ', width: '167px' }}><p className='rotate'>{category.categoryName === 'dummy' ? '' : category.categoryName}</p></div>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                        {isAdmin ? category?.subCategoryList?.map((subCategory,index) => {
                            const isLastTable = (index === category?.subCategoryList?.length -1);
                            // console.log(isLastTable)
                            return <div >
                                <DataGridTable
                                    page={isLastTable?'takeSteps1':'takeSteps'}
                                    tableColumns={getModifiedColumns(category)}
                                    initialRows={getRows(subCategory,isLastTable)}
                                    handleGetRowClassName={handleGetRowClassName}
                                    headerHeight={0}
                                    isAdmin={isAdmin}
                                >
                                </DataGridTable>
                            </div>

                        }) :
                            category?.subCategoryDataList?.map((subCategory,index) => {
                                const isLastTable = (index === category?.subCategoryDataList?.length -1)
                                // console.log(isLastTable)
                                return <div >
                                    <DataGridTable
                                        page={isLastTable?'takeSteps1':'takeSteps'}
                                        tableColumns={getModifiedColumns(category)}
                                        initialRows={getRows(subCategory,isLastTable)}
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
                                    page={'takeSteps'}
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
                                        page={'takeSteps'}
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