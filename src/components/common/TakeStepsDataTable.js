import React from 'react'
import { takeStepsHeaderColumns, takeStepsTableColumns } from '../../constants/constants'
import DataGridTable from './DataGridTable'


const TakeStepsDataTable = ({ pageElement, isHeaderTable,isAdmin,walk }) => {
    console.log(pageElement)

    const getModifiedColumns = (category) => {
        console.log('hello',category)
        let newColumns = [...takeStepsTableColumns]
        if (isHeaderTable) {
            newColumns = [...takeStepsHeaderColumns]
        }
        else if (category.categoryName === 'dummy') {
            // console.log('hello')
            newColumns[0] = {
                ...newColumns[0], cellClassName:"blackAndWhite",
                headerClassName:'black'
            }
            newColumns[1] = {
                ...newColumns[1], cellClassName: "blackAndWhite",
                headerClassName:'black'
            }
            newColumns[2]= {
                ...newColumns[2], cellClassName: "blackAndWhite",
                headerClassName:'black'

            }        }

        if (walk>0)
        newColumns = [...newColumns,{
            field: "walkColumn1",
            headerName: ".",
            width: "300",
            editable: true,
            align: "center",
            headerClassName: 'black',
            cellClassName:'bg_darkGray'
          },
          {
            field: "walkColumn2",
            headerName: ".",
            width: "300",
            editable: true,
            align: "center",
            headerClassName: 'black',
          }]
        console.log(newColumns)
        return newColumns;

        
    }

    const getRows = (category) => {
        console.log(category)
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

                return { ...lineItem, id: lineItem.line_item_id }
            })
            newTableRows.push(...newLineItems)
        })
        return newTableRows;
    }

    const handleGetRowClassName = (params) => {
        if (['Mileage', 'Meetings & Travel', 'Printing', 'Postage & Shipping', 'Freight Shipping', 'Bike Rentals', 'Advertising'].includes(params.row.category))
            return 'backgroundYellow';
    }

    return (
        <div>
            {isHeaderTable && <DataGridTable
                tableColumns={getModifiedColumns('header')}
                initialRows={getRows(pageElement)}
                handleGetRowClassName={handleGetRowClassName}
                headerHeight={50}
                isAdmin={isAdmin}
            >
            </DataGridTable>
            }

        {!isHeaderTable && <div>
            <div className='fixedHeader'>
                <div style={{ display: 'flex' }}>
                    <div style={{ width: '5%' }}></div>
                    <div style={{ width: '100%' }}>
                        <DataGridTable
                            tableColumns={getModifiedColumns(pageElement.categoryList[0])}
                            initialRows={getRows(pageElement.categoryList[0])}
                            handleGetRowClassName={handleGetRowClassName}
                            headerHeight={50}
                            isAdmin={isAdmin}
                        >
                        </DataGridTable>
                    </div>
                </div>
            </div>
            <div className='content'>
                {pageElement.categoryList.map((category, index) => {
                    if (index > 0) {
                        return (<div  style={{ display: 'flex' }}>
                            <div className='bg_green' style={{ border: '2px solid black ', width: '5%' }}><p className='rotate'>{category.categoryName === 'dummy' ? '' : category.categoryName}</p></div>
                            <div style={{ width: '100%' }}>
                                <DataGridTable
                                    tableColumns={getModifiedColumns(category)}
                                    initialRows={getRows(category)}
                                    handleGetRowClassName={handleGetRowClassName}
                                    headerHeight={0}
                                    isAdmin={isAdmin}
                                >
                                </DataGridTable>
                            </div>
                        </div>)
                    }
                })}
            </div>
            <div style={{ height: '50px' }}></div>

        </div>}
    
        </div>
    )
}

export default TakeStepsDataTable;