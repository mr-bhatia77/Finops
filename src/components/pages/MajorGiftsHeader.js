import React from 'react';
import { majorGiftsHeaderColumns } from '../../constants/constants';
import DataGridTable from "../common/DataGridTable";
import {
    randomId,
} from '@mui/x-data-grid-generator';

const MajorGiftsHeader = ({ isAdmin, eventHeader }) => {
    let width = 182;

    const getHeaderClassName = (eventName) => {
        switch (eventName) {
            case 'Unrestricted':
                return 'aqua';
                break;
            case 'Research Restricted':
                return 'peach';
                break;
            case 'ESA Camp':
                return 'backgroundYellow';
                break;
            case 'ESA Other':
                return 'backgroundYellow';
                break;
            default:
                return ''
        }
    }

    const getEditableColumns = (tableColumns) => {
        const newColumns = tableColumns.map((column) => {
            column.editable = isAdmin ? true : false;
            return column;
        });

        eventHeader?.eventHeaderList?.forEach((eventHeaderItem) => {
            if(eventHeaderItem?.eventName.toLowerCase() !== 'total'){
            newColumns.push({
                field: `${eventHeaderItem?.event_id}`, headerName: `${eventHeaderItem?.eventName}`, width: "180", editable: true, headerClassName: `${getHeaderClassName(eventHeaderItem?.eventName)} mediumFontSize`, headerAlign: 'center', cellClassName: getHeaderClassName(eventHeaderItem?.eventName), align: 'center'
            })
            width += 180;
        }
        })

        return newColumns;
    }

    const getHeaderRows = () => {
        const newTableRows = [];
        const row = {
            id: randomId(),
            name: 'Subledger:'
        }
        eventHeader?.eventHeaderList?.forEach((eventHeaderItem) => {
            row[`${eventHeaderItem?.event_id}`] = eventHeaderItem?.subledger;
        })
        newTableRows.push(row,
            {
                id: randomId(),
                name: 'Total:',
            });
        return newTableRows;
    }

    const handleGetRowClassName = (params) => {
        return ''
    }

    return (
        <div style={{ width: '902px' }}><DataGridTable
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