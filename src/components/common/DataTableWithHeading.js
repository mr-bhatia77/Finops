import DataGridTable from '../common/DataGridTable';
import { tableColumns1, tableColumns4, tableColumns5 } from '../../constants/constants';


const DataTableWithHeading = ({ categoryName, subCategoryList, eventName, pageElement, section, extraEventList }) => {
    const firstTableRows = [];
    // let newColumns = [...tableColumns1];

    const getTableColumns = (subCategoryItem) => {
        let newColumns = [...tableColumns1]
        if (subCategoryItem.subCategoryName) {
            newColumns = [{ field: 'subCategory', headerName: 'Subcategory', width: '300', editable: true, align: 'center', headerAlign: 'center', sortable: false }, ...newColumns];
        }
        if (categoryName) {
            newColumns = [{ field: 'category', headerName: 'Category', width: '300', editable: true, sortable: false }, ...newColumns]    
        }
        
        if(subCategoryItem.subCategoryName === 'Premiums DDB Expense - DDB Code 5065') {
        newColumns = [...newColumns,...tableColumns4]
        }
        else if(categoryName === 'Printing') {
            newColumns = [...newColumns,...tableColumns5]
        }

        if (eventName && !extraEventList.length) {
            newColumns.push({ field: `${eventName}`, headerName: `${eventName}`.toUpperCase(), type: 'number', width: 180, editable: false, align: 'center', headerAlign: 'center', headerClassName: eventName === 'Grand Total' ? 'bg_gray' : 'bg_green' })
            newColumns.push({ field: `${eventName} price`, headerName: `$ (${eventName})`, type: 'number', width: 180, editable: false, align: 'center', headerAlign: 'center', headerClassName: eventName === 'Grand Total' ? 'bg_gray' : 'bg_green' })
        }
    
        if (extraEventList.length > 0) {
            newColumns.push({ field: `${eventName}`, headerName: `${eventName}`.toUpperCase(), type: 'number', width: 180, editable: false, align: 'center', headerAlign: 'center', headerClassName: eventName === 'Grand Total' ? 'bg_gray' : 'bg_green' })
            extraEventList.map((eventName) => {
                newColumns.push({ field: `${eventName}`, headerName: `${eventName}`.toUpperCase(), type: 'number', width: 180, editable: false, align: 'center', headerAlign: 'center', headerClassName: eventName === 'Grand Total' ? 'bg_gray' : 'bg_green' })
            })
            newColumns.push({ field: `${eventName} price`, headerName: `$ (${eventName})`, type: 'number', width: 180, editable: false, align: 'center', headerAlign: 'center', headerClassName: eventName === 'Grand Total' ? 'bg_gray' : 'bg_green' })
            extraEventList.map((eventName) => {
                newColumns.push({ field: `${eventName} price`, headerName: `$ (${eventName})`, type: 'number', width: 180, editable: false, align: 'center', headerAlign: 'center', headerClassName: eventName === 'Grand Total' ? 'bg_gray' : 'bg_green' })
            })
        }

        return [...newColumns]
    }

    const getTableRows = (subCategoryItem) => {
        const newTableRows = [];
        if(subCategoryItem.sub_cat_id && subCategoryItem.subCategoryName)
        newTableRows.push({
            id: subCategoryItem.sub_cat_id,
            pricePerPiece: null,
            subCategory: subCategoryItem.subCategoryName
        })
        if (categoryName) {
            newTableRows.unshift({
                id: pageElement.cat_id,
                pricePerPiece: null,
                category: categoryName
            }
            )
        }
        let newLineItems = [...subCategoryItem.lineItems]
        newLineItems = newLineItems.map((lineItem) => {
            let newLineItem = { ...lineItem, id: lineItem.line_item_id }

            if (subCategoryItem.subCategoryName === 'Premiums DDB Expense - DDB Code 5065') {
                newLineItem = { ...newLineItem,quantity:'Quantity:'}
            }
            else if(categoryName === 'Printing') {
                newLineItem = { ...newLineItem,pricePerPieceText: 'Price per piece:',numberOfPiecesText: 'Number of pieces:'}
            }


            return newLineItem;
        }
        )
        newTableRows.push(...newLineItems)
        return newTableRows;

    }

    return <>
        <div style={{ width: '100%', background: section ==='Header' ? 'FFFF77' : 'lightGrey' }}>
            <DataGridTable
                tableColumns={getTableColumns(subCategoryList[0])}
                initialRows={getTableRows(subCategoryList[0])}
                headerHeight={50}
                pageElement={pageElement}
                subCategory={subCategoryList[0]}
                section={section}
                eventName={eventName}>
            </DataGridTable>
            {subCategoryList.length > 0 && subCategoryList.map((subCategoryItem, index) => {
                if (index > 0) {
                    return (<div key={subCategoryItem.sub_cat_id}>
                        <DataGridTable
                            tableColumns={getTableColumns(subCategoryItem)}
                            initialRows={getTableRows(subCategoryItem)}
                            headerHeight={50}
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