import React from 'react';
import DataGridTable from '../common/DataGridTable';

const DataTableWithHeading = ({ ledger, subLedger, tableColumns, background }) => {
    return <>
        <div className='flex' style={{ background: background, border: '1px solid black' }}>
            {ledger && <div style={{ border: '1px solid black', width: '15%' }} >
                <div className='heading'>
                    <h5 style={{ display: 'inline-block' }}>{ledger}</h5>
                </div>
            </div>}
            {subLedger.length > 0 && <div style={{ border: '1px solid black', width: '100%', display: 'flex', flexDirection: 'column' }}>
                {subLedger.map((subLedgerItem, index) => {
                    return (<div style={{ display: 'flex' }}>
                        {subLedgerItem.title && <div style={{ border: '1px solid black', width: '15%' }} className={subLedgerItem.className}>
                            <div className='subHeading' style={{ position: 'relative', top: '45%' }}>
                                <h5 style={{ display: 'inline-block' }}>{subLedgerItem.title}</h5>
                            </div>
                        </div>}
                        <div style={{ width: '100%' }}>
                            <DataGridTable
                                tableColumns={tableColumns}
                                initialRows={subLedgerItem.listItems}></DataGridTable>
                        </div>
                    </div>)
                })}
            </div>}
        </div>
    </>
}


export default DataTableWithHeading