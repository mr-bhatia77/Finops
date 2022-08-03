import DataGridTable from './DataGridTable';
import { tableColumns1, tableColumns4, tableColumns5 } from '../../constants/constants';
import {
    randomId,
  } from '@mui/x-data-grid-generator';


const Spin4DataTable = ({ setPageRerender,isAdmin,categoryName, subCategoryList, events, pageElement, section, extraEventList }) => {
    // console.log(pageElement)


    const getEventValue = (item) => {
        let eventDetails ={};
        item?.events?.map((event)=>{
            eventDetails[`${event.eventName}`] = event?.value;
        })
        return(eventDetails);
    }

    const getEditableColumns = (tableColumns) => {
        const newColumns = tableColumns.map((column)=> {
            column.editable = isAdmin? true:false;
            return column;
        });
        return newColumns;
    }

    const getTableColumns = (subCategoryItem,isFirstSubCategory) => {
        let newColumns = [...getEditableColumns(tableColumns1)]
        if (subCategoryItem?.subCategoryName && subCategoryItem?.subCategoryName!== 'dummy') {
            newColumns = [{ field: 'subCategory', headerName: 'Subcategory', width: '300', editable: isAdmin? true:false, align: 'center', headerAlign: 'center', sortable: false }, ...newColumns];
        }
        if (categoryName) {
            newColumns = [{ field: 'category', headerName: isFirstSubCategory? 'Category' : '', width: '300', editable: isAdmin? true:false, sortable: false }, ...newColumns]    
        }
        
        if(subCategoryItem?.subCategoryName === 'Premiums DDB Expense - DDB Code 5065' || subCategoryItem?.subCategoryName ===  'Supplies - Expense Code 7170') {
        newColumns = [...newColumns,...getEditableColumns(tableColumns4)]
        }
        else if(categoryName === 'Printing') {
            newColumns = [...newColumns,...getEditableColumns(tableColumns5)]
        }
        else if(categoryName === 'Postage & Shipping') {
            newColumns = [...newColumns,...getEditableColumns(tableColumns4)]
        }
        else if(categoryName === 'Advertising' || categoryName === 'Mileage') {
            newColumns = [...newColumns,...getEditableColumns(tableColumns5)]
        }
        else if(subCategoryItem?.subCategoryName === 'Coffee Meetings') {
            newColumns = [...newColumns,...getEditableColumns(tableColumns5)]
        }
        
        if(isAdmin)
        {
            if (events?.length > 0 && !extraEventList.length) {
                events.map((eventName) => {
                    newColumns.push({ field: `${eventName}`, headerName: `${eventName}`.toUpperCase(),  width: 180, editable: isAdmin? false : true, align: 'center', headerAlign: 'center', headerClassName: eventName === 'Grand Total' ? 'bg_gray' : 'bg_green' })
                })
            }
        
            // if (extraEventList.length > 0) {
            //     // newColumns.push({ field: `${eventName}`, headerName: `${eventName}`.toUpperCase(),  width: 180, editable: isAdmin? false : true, align: 'center', headerAlign: 'center', headerClassName: eventName === 'Grand Total' ? 'bg_gray' : 'bg_green' })
            //     extraEventList.map((eventName) => {
            //         newColumns.push({ field: `${eventName}`, headerName: `${eventName}`.toUpperCase(),  width: 180, editable: isAdmin? false : true, align: 'center', headerAlign: 'center', headerClassName: eventName === 'Grand Total' ? 'bg_gray' : 'bg_green' })
            //     })
            //     // newColumns.push({ field: `${eventName} price`, headerName: `$ (${eventName})`,  width: 180, editable: isAdmin? false : true, align: 'center', headerAlign: 'center', headerClassName: eventName === 'Grand Total' ? 'bg_gray' : 'bg_green' })
            //     extraEventList.map((eventName) => {
            //         newColumns.push({ field: `${eventName} price`, headerName: `$ (${eventName})`,  width: 180, editable: isAdmin? false : true, align: 'center', headerAlign: 'center', headerClassName: eventName === 'Grand Total' ? 'bg_gray' : 'bg_green' })
            //     })
            // }
        }
        else{
            // console.log(pageElement.events)
            pageElement?.events?.map((event)=>{
                newColumns.push({ field: `${event.eventName}`, headerName: `${event.eventName}`.toUpperCase(),  width: 180, editable: isAdmin? false : true, align: 'center', headerAlign: 'center', headerClassName: event.eventName === 'Grand Total' ? 'bg_gray' : 'bg_green' })
            })


        }
        // console.log(newColumns)
        return [...newColumns]
    }

    const getTableRows = (subCategoryItem,isFirstSubCategory) => {
        const newTableRows = [];
        if(subCategoryItem?.sub_cat_id && subCategoryItem?.subCategoryName && subCategoryItem?.subCategoryName!== 'dummy')
        newTableRows.push({
            id: randomId(),
            pricePerPiece: null,
            subCategory: subCategoryItem?.subCategoryName
        })
        if(subCategoryItem?.sub_cat_template_id && subCategoryItem?.subCategoryName && subCategoryItem?.subCategoryName!== 'dummy') {
            
        newTableRows.push({
            id: randomId(),
            pricePerPiece: null,
            subCategory: subCategoryItem?.subCategoryName,
            ...getEventValue(subCategoryItem)
        })
    }
        if (categoryName && isFirstSubCategory) {
            newTableRows.unshift({
                id: randomId(),
                pricePerPiece: null,
                category: categoryName,
                ...getEventValue(pageElement)
            }
            )
        }
        let newLineItems = [...subCategoryItem?.lineItems]
        newLineItems = newLineItems?.map((lineItem) => {
            let newLineItem = { ...lineItem, id: randomId(),...getEventValue(lineItem) }
            if(subCategoryItem?.subCategoryName === 'Premiums DDB Expense - DDB Code 5065' || subCategoryItem?.subCategoryName ===  'Supplies - Expense Code 7170') {
                newLineItem = { ...newLineItem,quantity:'Quantity:'}
            }
            else if(categoryName === 'Printing') {
                newLineItem = { ...newLineItem,pricePerPieceText: 'Price per piece:',numberOfPiecesText: 'Number of pieces:'}
            }
            else if(categoryName === 'Postage & Shipping') {
                newLineItem = { ...newLineItem,quantity:'Quantity:'}
            }
            else if(categoryName === 'Advertising') {
                newLineItem = { ...newLineItem,pricePerPieceText: 'Where ?',numberOfPiecesText: 'Full Price'}
            }
            else if(subCategoryItem?.subCategoryName === 'Coffee Meetings') {
                newLineItem = { ...newLineItem,pricePerPieceText: 'Price Per Coffee',numberOfPiecesText: 'Number of Meetings:'}
            }
            else if(categoryName === 'Mileage') {
                newLineItem = { ...newLineItem,pricePerPieceText: 'Price Per mile',numberOfPiecesText: 'Anticipated Miles:'}
            }
            return newLineItem;
        }
        )
        newTableRows.push(...newLineItems)
        // console.log(newTableRows);
        return newTableRows;

    }

   const handleGetRowClassName =(params)=>{
        if(['Mileage','Meetings & Travel','Printing','Postage & Shipping','Freight Shipping','Bike Rentals','Advertising'].includes(params.row.category ))
        return 'backgroundYellow';
    
        if(['Sponsor Meetings','Coffee Meetings','Launch Party','Committee Meetings','Supplies - Expense Code 7170'].includes(params.row.subCategory ))
        return 'backgroundYellowGreen';
    
        if(['Celebration',"Participant Premiums/Incentives"].includes(params.row.category ))
        return 'backgroundYellowGreen'
      } 

    return <>
        <div key={randomId()} style={{ width: '100%', background: section ==='Header' ? 'FFFF77' : 'lightGrey' }}>
            <DataGridTable
                isAdmin={isAdmin}
                tableColumns={getTableColumns(subCategoryList[0],true)}
                initialRows={getTableRows(subCategoryList[0],true)}
                headerHeight={50}
                pageElement={pageElement}
                subCategory={subCategoryList[0]}
                section={section}
                handleGetRowClassName={handleGetRowClassName}
                setPageRerender={setPageRerender}>
            </DataGridTable>
            {subCategoryList.length > 0 && subCategoryList.map((subCategoryItem, index) => {
                if (index > 0) {
                    // console.log(subCategoryItem)
                    return (<div key={randomId()}>
                        <DataGridTable
                            isAdmin={isAdmin}
                            tableColumns={getTableColumns(subCategoryItem,false)}
                            initialRows={getTableRows(subCategoryItem,false)}
                            headerHeight={50}
                            pageElement={pageElement}
                            subCategory={subCategoryItem}
                            section={section}
                            handleGetRowClassName={handleGetRowClassName}
                            setPageRerender={setPageRerender}>
                        </DataGridTable>
                    </div>)
                }
            })}
        </div>
    </>
}


export default Spin4DataTable