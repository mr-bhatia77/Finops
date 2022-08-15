import React from 'react';
import { majorGiftsHeaderColumns } from '../../constants/constants';
import DataGridTable from "../common/DataGridTable";
import {
    randomId,
  } from '@mui/x-data-grid-generator';

const MajorGiftsHeader = ({ isAdmin }) => {

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
                unrestricted: '07000',
                researchRestricted:'06000',
                esaCamp:'07000',
                esaOther:'07000'
            },{
                id: randomId(),
                name: 'Total:',
                unrestricted: '',
                researchRestricted:'',
                esaCamp:'',
                esaOther:'' 
            })
        return newTableRows;
    }

    const handleGetRowClassName = (params) => {
        if (['Celebration', "Participant Premiums/Incentives"].includes(params.row.category))
          return 'backgroundYellowGreen'
      }

    return (
        <div style={{width:'902px'}}><DataGridTable
            isAdmin={isAdmin}
            tableColumns={getEditableColumns(majorGiftsHeaderColumns)}
            initialRows={getHeaderRows()}
            headerHeight={50}
            handleGetRowClassName={handleGetRowClassName}
            isHeaderTable={true}
        >
        </DataGridTable></div>
    )
}

export default MajorGiftsHeader