import DataGridTable from '../common/DataGridTable';
import {
    randomId,
} from '@mui/x-data-grid-generator';

const DataTableWithHeading = ({ ledger, subLedger, tableColumns, background, eventName }) => {
    const firstTableRows = [];
    let newColumns = [...tableColumns];
    
    const getTableRows = (subLedgerItem) =>{
        const newTableRows = [];
        newTableRows.push({
            id:randomId(),
            pricePerPiece:null,
            subCategory:subLedgerItem.title
        })
        newTableRows.push(...subLedgerItem.listItems)
        return newTableRows;

    }

    if (subLedger[0].title) {
        newColumns = [{ field: 'subCategory', headerName: 'Subcategory', width: '300', editable: true, align: 'center', headerAlign: 'center',sortable: false }, ...newColumns];
        firstTableRows.push({
            id:randomId(),
            subCategory:subLedger[0].title,
            pricePerPiece:null
        })
    }
    if (ledger) {
        newColumns = [{ field: 'category', headerName: 'Category', width: '300', editable: true,sortable: false }, ...newColumns]
        firstTableRows.unshift({
            id:randomId(),
            pricePerPiece:null,
            category:ledger
            }
        )
    }
    newColumns.push({ field: `EVENT 1`, headerName: `EVENT 1`, type: 'number', width: 180, editable: false, align: 'center', headerAlign: 'center', headerClassName:'bg_green' },
    { field: `EVENT 2`, headerName: `EVENT 2`, type: 'number', width: 180, editable: false, align: 'center', headerAlign: 'center',headerClassName:'bg_green' })

    if(eventName?.length > 0){
        eventName.forEach((event)=>{
            newColumns.push({ field: `${event}`, headerName: `$ (${event})`, type: 'number', width: 180, editable: false, align: 'center', headerAlign: 'center',headerClassName: event ==='Grand Total' ?'bg_gray':'bg_green' })
        })
    }

    console.log(firstTableRows)
    return <>
        <div style={{ width: '100%', background: background }}>
            <DataGridTable
                tableColumns={newColumns}
                initialRows={[...firstTableRows,...subLedger[0].listItems]}
                headerHeight={50}>
            </DataGridTable>
            {subLedger.length > 0 && subLedger.map((subLedgerItem,index)=>{
                if(index > 0) {
                    return (
                    <DataGridTable 
                    tableColumns={newColumns}
                    initialRows ={getTableRows(subLedgerItem)}
                    headerHeight={0}>
                    </DataGridTable>)
                }
            })}
        </div>
    </>
}


export default DataTableWithHeading