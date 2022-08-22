import React from 'react'
import DataGridTable from '../common/DataGridTable';
import { administrationMTColumns } from '../../constants/constants';
import {
    randomId,
} from '@mui/x-data-grid-generator';

const AdministrationMTDataTable = ({ category, isAdmin }) => {
   

    const getEditableColumns = (tableColumns) => {
        let newColumns = tableColumns.map((column) => {
            column.editable = isAdmin ? true : false;
            return column;
        });
        return newColumns;
    }

    const getRows = (subCategory) => {
        console.log(subCategory)
        const newTableRows = [];
        if (subCategory.subCategoryName !== 'dummy') {
            newTableRows.push({
                id: randomId(),
                subCategoryName: subCategory?.subCategoryName,
                lineItemName: '',
                companyCode: subCategory?.companyCode,
                adminGeneral: '',
                total: '',
            })
        }
        if (isAdmin && subCategory?.lineItems?.length > 0)
            subCategory?.lineItems?.forEach((lineItem) => {
                newTableRows.push({
                    id: randomId(),
                    subCategoryName: '',
                    lineItemName: lineItem?.lineItemName,
                    companyCode: lineItem?.companyCode,
                    adminGeneral: '',
                    total: '',
                })
            })
        
        else if (!isAdmin && subCategory?.lineItemDataList?.length > 0)
        subCategory?.lineItemDataList?.forEach((lineItem) => {
            newTableRows.push({
                id: randomId(),
                subCategoryName: '',
                lineItemName: lineItem?.lineItemName,
                companyCode: lineItem?.companyCode,
                adminGeneral: '',
                total: '',
            })
        })
        console.log(newTableRows)
        return newTableRows;
    }

   
    const handleGetRowClassName = (params) => {
        if (params?.row?.lineItemName)
            return 'bg_darkGray'
    }



    return (
        <div>
            <div style={{ display: 'flex' }}>
                <div style={{ border: '2px solid black ', width: '185px' }}><p>{category.categoryName === 'dummy' ? '' : category.categoryName}</p></div>
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    {isAdmin && category.subCategoryList.map((subCategory, index) => {
                        return <div >
                            <DataGridTable
                                page={'AdministrationMT'}
                                tableColumns={getEditableColumns(administrationMTColumns)}
                                initialRows={getRows(subCategory)}
                                handleGetRowClassName={handleGetRowClassName}
                                headerHeight={0}
                                isAdmin={isAdmin}
                            >
                            </DataGridTable>
                        </div>
                    })}
                    {!isAdmin && category.subCategoryDataList.map((subCategory) => {
                        return <div >
                            <DataGridTable
                                page={'AdministrationMT'}
                                tableColumns={getEditableColumns(administrationMTColumns)}
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
            <br></br>
        </div>)
}

export default AdministrationMTDataTable