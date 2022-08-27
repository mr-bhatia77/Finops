import React from 'react';
import { administrationHeaderColumns } from '../../constants/constants';
import DataGridTable from "../common/DataGridTable";
import {
    randomId,
  } from '@mui/x-data-grid-generator';

const AdministrationHeader = ({ isAdmin, adminEventHeader }) => {
    

    const getEditableColumns = () => {
        let width = 302;
        const newColumns = administrationHeaderColumns?.map((column) => {
            column.editable = isAdmin ? true : false;
            return column;
        });

        adminEventHeader?.eventHeaderList?.forEach((eventHeaderItem)=>{
            newColumns.push({
                field: `${eventHeaderItem?.event_id}`, headerName: `${eventHeaderItem?.eventName}`, width: "300", editable: true, headerClassName: 'aqua mediumFontSize', headerAlign: 'center', cellClassName: 'aqua', align: 'center' 
            })
            width+=300;
        })

        newColumns.push({
             field: "total", headerName: "", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' 
        })
        width+=180;
        
        return {
            newColumns:newColumns,
            width:width};
    }

    const getHeaderRows = () => {
        const newTableRows = [];
        newTableRows.push({
                id: randomId(),
                name: 'Subledger:',
                '5  ': '07000',
                
            },{
                id: randomId(),
                name: 'Invoice coding account number:',
                adminGeneral: '',
                total:'Total'
                 
            })
        return newTableRows;
    }

    const handleGetRowClassName = (params) => {
        if (['Celebration', "Participant Premiums/Incentives"].includes(params.row.category))
          return 'backgroundYellowGreen'
      }

      const columnDetails = getEditableColumns();

    return (
        <div style={{width:`${columnDetails.width}px`}}><DataGridTable
            isAdmin={isAdmin}
            tableColumns={columnDetails.newColumns}
            initialRows={getHeaderRows()}
            headerHeight={50}
            handleGetRowClassName={handleGetRowClassName}
            isHeaderTable={true}
        >
        </DataGridTable></div>
        
    )
}

export default AdministrationHeader