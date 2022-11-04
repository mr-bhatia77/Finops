import React from 'react'
import DataGridTable from '../common/DataGridTable';
// import { consolidatedColumns } from '../../constants/constants';
import {
    randomId,
} from '@mui/x-data-grid-generator';

const ConsolidatedDataTable = ({ isAdmin, pageStructure,page,year }) => {

    let consolidatedColumns = [
        { field: "type", headerName: "", width: "400", editable: true, cellClassName: "" },
        { field: "pyytdBudget", headerName: "Budget", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
        { field: "pyytdActual", headerName: "Actual", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
        { field: "pyttdVariance", headerName: "Variance", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
        { field: "pyttdPercentVariance", headerName: "%Variance", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
        { field: "pyBudget", headerName: `${year.yearName -1} Budget`, width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
        { field: "pyForecast", headerName: `${year.yearName -1} Forecast`, width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
        { field: "specialEvents", headerName: "Special Events", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
        { field: "spin4", headerName: "Spin4", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
        { field: "takeSteps", headerName: "Take Steps", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
        { field: "other", headerName: "Other", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
        { field: "admin", headerName: "Admin", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
        { field: "totalCyBudget", headerName: `Total ${year.yearName} Budget`, width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
        { field: "forecastBudgetVariance", headerName: "Forecast vs Budget Variance", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
        { field: "percentVariance", headerName: "% Variance", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
        { field: "pyPercentGrowth", headerName: `${year.yearName -1}`, width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
        { field: "cyPercentGrowth", headerName: `${year.yearName}`, width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
      ]


    const getEditableColumns = (tableColumns) => {
        let newColumns = tableColumns.map((column) => {
            column.editable = isAdmin ? true : false;
            return column;
        });
        if (page === 'totalConsolidated') {
            newColumns.splice(10,0,{ field: "ESA", headerName: "ESA", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
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