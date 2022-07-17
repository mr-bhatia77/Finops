import DataGridTable from '../common/DataGridTable';
import { tableColumns1 } from '../../constants/constants';
import {
    randomId,
} from '@mui/x-data-grid-generator';

const DataTableWithHeading = ({ categoryName, spin4SubCategoryList, background, eventName }) => {
    const firstTableRows = [];
    let newColumns = [...tableColumns1];
    console.log(categoryName)
    
    const getTableRows = (subCategoryItem) =>{
        console.log(subCategoryItem);
        const newTableRows = [];
        newTableRows.push({
            id:randomId(),
            pricePerPiece:null,
            subCategory:subCategoryItem.subCategoryName
        })
        newTableRows.push(...subCategoryItem.lineItems)
        return newTableRows;

    }

    if (spin4SubCategoryList[0].subCategoryName) {
        newColumns = [{ field: 'subCategory', headerName: 'Subcategory', width: '300', editable: true, align: 'center', headerAlign: 'center',sortable: false }, ...newColumns];
        firstTableRows.push({
            id:randomId(),
            subCategory:spin4SubCategoryList[0].subCategoryName,
            pricePerPiece:null
        })
    }
    if (categoryName) {
        newColumns = [{ field: 'category', headerName: 'Category', width: '300', editable: true,sortable: false }, ...newColumns]
        firstTableRows.unshift({
            id:randomId(),
            pricePerPiece:null,
            category:categoryName
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

    console.log(firstTableRows,spin4SubCategoryList[0].lineItems)
    return <>
        <div style={{ width: '100%', background: 'lightGrey' }}>
            <DataGridTable
                tableColumns={newColumns}
                initialRows={[...firstTableRows,...spin4SubCategoryList[0].lineItems]}
                headerHeight={50}>
            </DataGridTable>
            {spin4SubCategoryList.length > 0 && spin4SubCategoryList.map((subCategoryItem,index)=>{
                if(index > 0) {
                    return (
                    <DataGridTable 
                    tableColumns={newColumns}
                    initialRows ={getTableRows(subCategoryItem)}
                    headerHeight={0}>
                    </DataGridTable>)
                }
            })}
        </div>
    </>
}


export default DataTableWithHeading