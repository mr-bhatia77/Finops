import React from 'react'
import DataGridTable from '../common/DataGridTable';
import { consolidatedColumns } from '../../constants/constants';
import {
    randomId,
} from '@mui/x-data-grid-generator';

const ConsolidatedDataTable = ({ isAdmin, pageStructure }) => {


    const getEditableColumns = (tableColumns) => {
        let newColumns = tableColumns.map((column) => {
            column.editable = isAdmin ? true : false;
            return column;
        });
        return newColumns;
    }

    const getRows = () => {
        const newRows = [];
        pageStructure.conBudgetListEntity.forEach((type) => {
            newRows.push(type);
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