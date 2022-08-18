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
        newColumns.splice(0,1)
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
                adminGeneral: '',
                total: '',
            })
        }
        if (subCategory?.lineItems?.length > 0)
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
        return newTableRows;
    }

    // const getRows = () => {
    //     const newTableRows = [];
    //         category.subCategoryList.forEach((subCategory) => {
    //             if (subCategory?.subCategoryName !== 'dummy')
    //                 newTableRows.push({
    //                     id: randomId(),
    //                     subCategoryName: subCategory?.subCategoryName,
    //                     companyCode: subCategory?.companyCode
    //                 })
    //                 subCategory?.lineItems?.forEach((lineItem)=>{
    //                     // console.log(lineItem)
    //                     newTableRows.push({
    //                         id: randomId(),
    //                         lineItemName: lineItem?.lineItemName,
    //                         companyCode: lineItem?.companyCode,
    //                         adminGeneral: lineItem?.adminGeneral,
    //                         businessPurpose2:lineItem?.businessPurpose2,
    //                         businessPurpose1:lineItem?.businessPurpose1,
    //                         businessPurpose3:lineItem?.businessPurpose3,
    //                         businessPurpose4:lineItem?.businessPurpose4,
    //                         businessPurpose5:lineItem?.businessPurpose5,
    //                         businessPurpose6:lineItem?.businessPurpose6,
                            
    //                     })
    //                 })
    //         })
    //     return newTableRows;
    // }

    const handleGetRowClassName = (params) => {
        if (params?.row?.lineItemName)
            return 'bg_darkGray'
    }



    return (
        <div>
            <div style={{ display: 'flex' }}>
                <div style={{ border: '2px solid black ', width: '187px' }}><p>{category.categoryName === 'dummy' ? '' : category.categoryName}</p></div>
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    {category.subCategoryList.map((subCategory, index) => {
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