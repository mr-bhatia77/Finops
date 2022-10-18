import React from 'react'
import DataGridTable from '../common/DataGridTable';
import { consolidatedColumns } from '../../constants/constants';
import {
    randomId,
} from '@mui/x-data-grid-generator';

const ConsolidatedDataTable = ({ isAdmin, pageStructure,page }) => {


    const getEditableColumns = (tableColumns) => {
        let newColumns = tableColumns.map((column) => {
            column.editable = isAdmin ? true : false;
            return column;
        });
        if (page === 'totalConsolidated') {
            newColumns.splice(10,0,{ field: "esa", headerName: "ESA", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
            { field: "advocacy", headerName: "Advocacy", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },)
        }
        return newColumns;
    }

    const getAbsValue =(type)=>{
        const newType={...type}
        for(let i in newType) {
            if( i!== 'type' && i!=='color')
            newType[i] = Math.abs(newType[i])
        }
        return(newType)
    } 
    const getRows = () => {
        const newRows = [];
        pageStructure.conBudgetListEntity.forEach((type) => {
            newRows.push(getAbsValue(type));
        })
        return newRows;
    }

    const handleGetRowClassName = (params) => {
            return params.row.color;
    }

    return <>
    <DataGridTable
        page={'consolidated'}
        tableColumns={getEditableColumns(consolidatedColumns)}
        initialRows={getRows()}
        handleGetRowClassName={handleGetRowClassName}
        headerHeight={50}
        isAdmin={isAdmin}
    >
    </DataGridTable>
        <br></br>
    </>

}

export default ConsolidatedDataTable