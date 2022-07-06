import React from 'react';
import DataGridTable from '../common/DataGridTable';

const DataTableWithHeading = ({ heading, subHeadings, tableColumns, background ,initialRows}) => {
    return <>
        <div className='flex' style={{ background: background }}>
            {heading && <div style={{ border: '1px solid black', width: '15%' }}>
                <div className='heading'>
                    <h5 style={{ display: 'inline-block' }}>{heading}</h5>
                </div>

            </div>}
            {subHeadings.length> 0 && <div style={{ border: '1px solid black', width: '15%' }}>
                <div className='subHeading' style={{ position: 'relative', top: '45%' }}>
                    <h5 style={{ display: 'inline-block' }}>{subHeadings[0]}</h5>
                </div>

            </div>}
            <div style={{ width: '100%' }}>
                <DataGridTable
                    tableColumns={tableColumns}
                    initialRows={initialRows}></DataGridTable>
            </div>
        </div>
    </>
}


export default DataTableWithHeading