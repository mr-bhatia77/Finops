import React from 'react';
import { administrationHeaderColumns } from '../../constants/constants';
import DataGridTable from "../common/DataGridTable";
import {
    randomId,
  } from '@mui/x-data-grid-generator';

const AdministrationHeader = ({ isAdmin }) => {

    const getEditableColumns = (tableColumns) => {
        const newColumns = tableColumns.map((column) => {
            column.editable = isAdmin ? true : false;
            return column;
        });
        return newColumns;
    }

    const getHeaderRows = () => {
        const newTableRows = [];
        newTableRows.push({
                id: randomId(),
                name: 'Subledger:',
                adminGeneral: '07000',
                
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

    return (
        <div style={{width:'782px'}}><DataGridTable
            isAdmin={isAdmin}
            tableColumns={getEditableColumns(administrationHeaderColumns)}
            initialRows={getHeaderRows()}
            headerHeight={50}
            handleGetRowClassName={handleGetRowClassName}
            isHeaderTable={true}
        >
        </DataGridTable></div>
        
    )
}

export default AdministrationHeader