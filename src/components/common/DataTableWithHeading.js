import DataGridTable from '../common/DataGridTable';
import { tableColumns1 } from '../../constants/constants';


const DataTableWithHeading = ({ categoryName, subCategoryList, eventName ,pageElement,section }) => {
    const firstTableRows = [];
    let newColumns = [...tableColumns1];
    
    const getTableRows = (subCategoryItem) =>{
        const newTableRows = [];
        newTableRows.push({
            id:subCategoryItem.sub_cat_id,
            pricePerPiece:null,
            subCategory:subCategoryItem.subCategoryName
        })
        let newLineItems = [...subCategoryItem.lineItems]
        newLineItems = newLineItems.map((lineItem)=>{
            let newLineItem = {...lineItem,id:lineItem.line_item_id}
            return newLineItem;
        }
            )
        newTableRows.push(...newLineItems)
        return newTableRows;

    }

    if (subCategoryList[0].subCategoryName) {
        newColumns = [{ field: 'subCategory', headerName: 'Subcategory', width: '300', editable: true, align: 'center', headerAlign: 'center',sortable: false }, ...newColumns];
    }
    if (categoryName) {
        newColumns = [{ field: 'category', headerName: 'Category', width: '300', editable: true,sortable: false }, ...newColumns]
        console.log(pageElement.cat_id)
        firstTableRows.unshift({
            id:pageElement.cat_id,
            pricePerPiece:null,
            category:categoryName
            }
        )
        getTableRows(subCategoryList[0]);
    }

    if(eventName){
            newColumns.push({ field: `${eventName}`, headerName: `${eventName}`.toUpperCase(), type: 'number', width: 180, editable: false, align: 'center', headerAlign: 'center',headerClassName: eventName ==='Grand Total' ?'bg_gray':'bg_green' })
            newColumns.push({ field: `${eventName} price`, headerName: `$ (${eventName})`, type: 'number', width: 180, editable: false, align: 'center', headerAlign: 'center',headerClassName: eventName ==='Grand Total' ?'bg_gray':'bg_green' })
            
    }

    return <>
        <div style={{ width: '100%', background: 'lightGrey' }}>
            <DataGridTable
                tableColumns={newColumns}
                initialRows={[...firstTableRows,...getTableRows(subCategoryList[0])]}
                headerHeight={50}
                pageElement={pageElement}
                subCategory={subCategoryList[0]}
                section={section}
                eventName={eventName}>
            </DataGridTable>
            {subCategoryList.length > 0 && subCategoryList.map((subCategoryItem,index)=>{
                if(index > 0) {
                    return (<div key={subCategoryItem.sub_cat_id}>
                    <DataGridTable 
                    tableColumns={newColumns}
                    initialRows ={getTableRows(subCategoryItem)}
                    headerHeight={0}
                    pageElement={pageElement}
                    subCategory={subCategoryItem}
                    section={section}
                    eventName={eventName}>
                    </DataGridTable>
                    </div>)
                }
            })}
        </div>
    </>
}


export default DataTableWithHeading