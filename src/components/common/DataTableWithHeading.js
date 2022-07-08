import React from 'react';
import DataGridTable from '../common/DataGridTable';

const DataTableWithHeading = ({ heading, subHeadings, tableColumns, background, initialRows,subHeadingClassName }) => {
    return <>
        <div className='flex' style={{ background: background, border: '1px solid black' }}>
            {heading && <div style={{ border: '1px solid black', width: '15%' }} >
                <div className='heading'>
                    <h5 style={{ display: 'inline-block' }}>{heading}</h5>
                </div>
            </div>}
            {subHeadings.length > 0 && <div style={{ border: '1px solid black', width: '100%', display: 'flex', flexDirection: 'column' }}>
                {subHeadings.map((subHeading, index) => {
                    return (<div style={{ display: 'flex' }}>
                        <div style={{ border: '1px solid black', width: '15%' }} className={subHeadingClassName}>
                            <div className='subHeading' style={{ position: 'relative', top: '45%' }}>
                                <h5 style={{ display: 'inline-block' }}>{subHeading}</h5>
                            </div>
                        </div>
                        <div style={{ width: '100%' }}>
                            <DataGridTable
                                tableColumns={tableColumns}
                                initialRows={initialRows[index]}></DataGridTable>
                        </div>
                    </div>)
                })}
            </div>}
            {!subHeadings.length > 0 && <div style={{ width: '100%' }}>
                <DataGridTable
                    tableColumns={tableColumns}
                    initialRows={initialRows[0]}></DataGridTable>
            </div>}
        </div>
    </>
}


export default DataTableWithHeading