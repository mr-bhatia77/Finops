import DataGridTable from '../common/DataGridTable';
import { tableColumns1, tableColumns4 } from '../../constants/constants';


const DataTableWithHeading = ({ categoryName, subCategoryList, eventName, pageElement, section, extraEventList }) => {
    const firstTableRows = [];
    let newColumns = [...tableColumns1];

    const getTableColumns = (subCategoryItem) => {
        if(subCategoryItem.subCategoryName === 'Premiums DDB Expense - DDB Code 5065') {
            console.log([...newColumns,...tableColumns4])
        newColumns = [...newColumns,...tableColumns4]
        }

        if (eventName) {
            newColumns.push({ field: `${eventName}`, headerName: `${eventName}`.toUpperCase(), type: 'number', width: 180, editable: false, align: 'center', headerAlign: 'center', headerClassName: eventName === 'Grand Total' ? 'bg_gray' : 'bg_green' })
            newColumns.push({ field: `${eventName} price`, headerName: `$ (${eventName})`, type: 'number', width: 180, editable: false, align: 'center', headerAlign: 'center', headerClassName: eventName === 'Grand Total' ? 'bg_gray' : 'bg_green' })
        }
    
        if (extraEventList.length > 0) {
            extraEventList.map((eventName) => {
                newColumns.push({ field: `${eventName}`, headerName: `${eventName}`.toUpperCase(), type: 'number', width: 180, editable: false, align: 'center', headerAlign: 'center', headerClassName: eventName === 'Grand Total' ? 'bg_gray' : 'bg_green' })
                newColumns.push({ field: `${eventName} price`, headerName: `$ (${eventName})`, type: 'number', width: 180, editable: false, align: 'center', headerAlign: 'center', headerClassName: eventName === 'Grand Total' ? 'bg_gray' : 'bg_green' })
            })
        }

        else return [...newColumns]
    }

    const getTableRows = (subCategoryItem) => {
        const newTableRows = [];
        if(subCategoryItem.sub_cat_id && subCategoryItem.subCategoryName)
        newTableRows.push({
            id: subCategoryItem.sub_cat_id,
            pricePerPiece: null,
            subCategory: subCategoryItem.subCategoryName
        })
        let newLineItems = [...subCategoryItem.lineItems]
        newLineItems = newLineItems.map((lineItem) => {
            let newLineItem = { ...lineItem, id: lineItem.line_item_id }
            if(subCategoryItem.subCategoryName === 'Premiums DDB Expense - DDB Code 5065') {
                newLineItem={...newLineItem,quantity:'Quantity:'}
            }
            return newLineItem;
        }
        )
        newTableRows.push(...newLineItems)
        return newTableRows;
    }

    if (subCategoryList[0].subCategoryName) {
        newColumns = [{ field: 'subCategory', headerName: 'Subcategory', width: '300', editable: true, align: 'center', headerAlign: 'center', sortable: false }, ...newColumns];
    }
    if (categoryName) {
        newColumns = [{ field: 'category', headerName: 'Category', width: '300', editable: true, sortable: false }, ...newColumns]
        firstTableRows.unshift({
            id: pageElement.cat_id,
            pricePerPiece: null,
            category: categoryName
        }
        )
        getTableRows(subCategoryList[0]);
    }


    return <>
        <div style={{ width: '100%', background: section ==='Header' ? 'FFFF77' : 'lightGrey' }}>
            <DataGridTable
                tableColumns={newColumns}
                initialRows={[...firstTableRows, ...getTableRows(subCategoryList[0])]}
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