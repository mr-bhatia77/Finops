import React from 'react';
import DataGridProTable from './DataGridProTable';
import DataGridTable from './DataGridTable';
import { tableColumns21, initialRows4 } from '../../constants/constants';

const TeamChallengeDataTable = ({ pageElement }) => {

    const getModifiedColumns = (category) => {
        console.log(category)
        let newColumns = [...tableColumns21]
        if (category.categoryName === 'dummy') {
            // console.log('hello')
            newColumns[0] = {
                ...newColumns[0], cellClassName: (params) => {
                    return "blackAndWhite";
                },
                headerClassName:'blackAndWhite'
            }
        }
        else if (category.categoryName === 'Total Gross Revenue') {
            // console.log('hello')
            newColumns[0] = {
                ...newColumns[0], cellClassName: (params) => {
                    return "bg_green_header";
                },
                headerClassName:'bg_green_header'
            }
            newColumns[1] = {
                ...newColumns[1], cellClassName: (params) => {
                    return "bg_green_header";
                },
                headerClassName:'bg_green_header'
            }
        }
        else if (category.categoryName === 'Total DDB') {
            // console.log('hello')
            newColumns[0] = {
                ...newColumns[0], cellClassName: (params) => {
                    return "bg_green_header";
                },
                headerClassName:'bg_green_header'
            }
            newColumns[1] = {
                ...newColumns[1], cellClassName: (params) => {
                    return "bg_green_header";
                },
                headerClassName:'bg_green_header'
            }
        }
        console.log(newColumns)
        return newColumns;
    }
    //   cellClassName: (params) => {
    //     if (params.value !== null) {
    //       return "bg_darkGray";
    //     }


    const handleGetRowClassName = (params) => {
        if (['Celebration', "Participant Premiums/Incentives"].includes(params.row.category))
            return 'backgroundYellowGreen'
    }

    const getRows = (category) => {
        const newTableRows = [];
        category.subCategoryList.map((subCategoryItem) => {
            if (subCategoryItem?.sub_cat_id && subCategoryItem?.subCategoryName && subCategoryItem?.subCategoryName !== 'dummy') {
                newTableRows.push({
                    id: subCategoryItem?.sub_cat_id,
                    subCategory: subCategoryItem?.subCategoryName
                })
            }
            let newLineItems = [...subCategoryItem?.lineItems]
            newLineItems = newLineItems?.map((lineItem) => {

                return { ...lineItem, id: lineItem.line_item_id, name: lineItem.lineItemName }
            })
            newTableRows.push(...newLineItems)
        })
        // console.log(newTableRows)
        return newTableRows;
    }

    return (
        <div>
            <div className='fixedHeader'>
                <div style={{ display: 'flex' }}>
                    <div style={{ width: '5%' }}></div>
                    <div style={{ width: '100%' }}>
                        <DataGridProTable
                            tableColumns={getModifiedColumns(pageElement.categoryList[0])}
                            initialRows={initialRows4}
                            handleGetRowClassName={handleGetRowClassName}
                            headerHeight={50}
                        >
                        </DataGridProTable>
                    </div>
                </div>
            </div>
            <div className='content'>
                {pageElement.categoryList.map((category, index) => {
                    if (index > 0) {
                        return (<div className='bg_green' style={{ display: 'flex' }}>
                            <div style={{ border: '2px solid black ', width: '5%' }}><p className='rotate'>{category.categoryName === 'dummy' ? '' : category.categoryName}</p></div>
                            <div style={{ width: '100%' }}>
                                <DataGridProTable
                                    tableColumns={getModifiedColumns(category)}
                                    initialRows={getRows(category)}
                                    handleGetRowClassName={handleGetRowClassName}
                                    headerHeight={50}
                                >
                                </DataGridProTable>
                            </div>
                        </div>)
                    }
                })}
                {pageElement.categoryList.map((category, index) => {
                    if (index > 0) {
                        return (<div className='bg_green' style={{ display: 'flex' }}>
                            <div style={{ border: '2px solid black ', width: '5%' }}><p className='rotate'>{category.categoryName === 'dummy' ? '' : category.categoryName}</p></div>
                            <div style={{ width: '100%' }}>
                                <DataGridProTable
                                    tableColumns={tableColumns21}
                                    initialRows={getRows(category)}
                                    handleGetRowClassName={handleGetRowClassName}
                                    headerHeight={0}
                                >
                                </DataGridProTable>
                            </div>
                        </div>)
                    }
                })}
                {pageElement.categoryList.map((category, index) => {
                    if (index > 0) {
                        return (<div className='bg_green' style={{ display: 'flex' }}>
                            <div style={{ border: '2px solid black ', width: '5%' }}><p className='rotate'>{category.categoryName === 'dummy' ? '' : category.categoryName}</p></div>
                            <div style={{ width: '100%', overflow: 'hidden' }}>
                                <DataGridProTable
                                    tableColumns={tableColumns21}
                                    initialRows={getRows(category)}
                                    handleGetRowClassName={handleGetRowClassName}
                                    headerHeight={0}

                                >
                                </DataGridProTable>
                            </div>
                        </div>)
                    }
                })}
            </div>
            <div style={{ height: '50px' }}></div>

        </div>
    )



}

export default TeamChallengeDataTable