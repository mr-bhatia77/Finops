import * as React from 'react';
import PropTypes from 'prop-types';
// import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import axios from 'axios';


// } from '@mui/x-data-grid-pro';
import {
  randomId,
} from '@mui/x-data-grid-generator';
import {
  DataGrid, GridRowModes,
  GridToolbarContainer,
  GridActionsCellItem,
} from '@mui/x-data-grid';

function EditToolbar(props) {
  const { setRows, setRowModesModel, page } = props;

  const handleClick = () => {
    const id = randomId();
    // console.log("newRow click")
    if (['majorGifts', 'adminLastTable'].includes(page)) {
      setRows((oldRows) => oldRows.length? [...oldRows.slice(0, oldRows.length - 1), { id, name: '', value: '', isNew: true }, oldRows[oldRows.length - 1]] : [{ id, name: '', value: '', isNew: true }]);
    }
    else {
      setRows((oldRows) => [...oldRows, { id, name: '', value: '', isNew: true }]);
    }
    // console.log(rowModesModel)
    // console.log(rows)
    debugger;
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
}


function DataGridTable({ totalIndex,getFieldDiff, rowHeight, page, isHeaderTable, getData, isAdmin, tableColumns, section, initialRows, headerHeight, pageElement, subCategory, handleGetRowClassName }) {

  const [rows, setRows] = React.useState(initialRows);

  const [rowModesModel, setRowModesModel] = React.useState({});

  React.useEffect(() => {
    if (page === 'majorGifts1') {
      setRows(initialRows)
    }
  }, [initialRows])

  const eventPayload = {};
  const totalPayload = {};
  let diffValue = 0;
  let fieldName = 0;


  // const handleRowEditStart = (params, event) => {
  //   // console.log(params)
  //   // console.log('editStart')
  // };

  const handleRowEditStop = (params) => {    
      fieldName = params.field
  };

  const getSpin4Payload = (updatedRow, isNew = false, isDelete = false, initialRow = {}) => {
    const payload = {}
    const isLineItemNameUpdated = updatedRow.lineItemName !== initialRow.lineItemName
    if (isAdmin) {
      if (updatedRow.category) {
        payload.categoryName = updatedRow.category;
        payload.id = updatedRow.id;
      }
      else if (updatedRow.subCategory) {
        payload.CategoryId = pageElement.id;
        payload.subCategoryId = updatedRow.id;
        payload.subCategoryName = updatedRow.subCategory;
      }
      else if (isLineItemNameUpdated) {
        payload.section = section;
        payload.cat_id = pageElement.cat_id;
        payload.categoryName = pageElement.categoryName
        payload.sub_cat_id = subCategory.sub_cat_id;
        payload.subCategoryName = subCategory.subCategoryName;
        payload.line_item_id = isNew ? null : updatedRow.line_item_id;
        payload.lineItemName = updatedRow.lineItemName;
      }
      // console.log(JSON.stringify(payload))
      if (isNew) {
        axios.post('http://localhost:8080/spin4AddLineItem', payload).then((res) => {
          console.log(res)
          // setPageRerender((prevValue) => !prevValue)
          getData();
        })
      }
      else if (isDelete) {
        axios.delete('http://localhost:8080/spin4DeleteLineItem', payload).then((res) => {
          console.log(res)
          // setPageRerender((prevValue) => !prevValue)
          getData();
        })
      }
      else if (isLineItemNameUpdated) {
        axios.put('http://localhost:8080/spin4UpdateLineItem', payload).then((res) => {
          console.log(res)
          // setPageRerender((prevValue) => !prevValue)
          getData();
        })
      }

      if (initialRow.pricePerPiece !== updatedRow.pricePerPiece) {
        console.log(`http://localhost:8080/spin4UpdatePricePerPiece/${updatedRow.line_item_id}/${updatedRow.pricePerPiece}`)
        axios.put(`http://localhost:8080/spin4UpdatePricePerPiece/${updatedRow.line_item_id}/${updatedRow.pricePerPiece}`).then((res) => {
          console.log(res)
          // setPageRerender((prevValue) => !prevValue)
          getData();
        })
      }
    }
    else {
      const promiseArrayEvent = [];
      const promiseArrayQuantity = [];
      updatedRow?.events?.forEach((event) => {
        if (updatedRow[`${event.eventName}`] !== initialRow[`${event.eventName}`]) {
          let url = `http://localhost:8080/spin4/chapter/UpdateLineItem/${event.id}/${updatedRow[event.eventName]}`;
          console.log(url);
          promiseArrayEvent.push(axios.put(url))// add calls here 
        }
        if (updatedRow[`${event.eventName}qty`] !== initialRow[`${event.eventName}qty`]) {
          const updatedQuantity = updatedRow[`${event.eventName}qty`];
          const updatedEventValue = updatedQuantity * updatedRow?.pricePerPiece;
          const quantityUrl = `http://localhost:8080/spin4/chapter/UpdateLineQty/${event.id}/${updatedQuantity}`;
          const eventUrl = `http://localhost:8080/spin4/chapter/UpdateLineItem/${event.id}/${updatedEventValue}`
          console.log(quantityUrl);
          console.log(eventUrl);

          promiseArrayQuantity.push(axios.put(quantityUrl))// add calls here 
          promiseArrayEvent.push(axios.put(eventUrl))// add calls here 
        }
      })

      if (promiseArrayQuantity?.length > 0) {
        Promise.all(promiseArrayQuantity).then((res) => {
          console.log(res);
          setTimeout(() => {
            Promise.all(promiseArrayEvent).then((response) => {
              // setPageRerender((prevValue) => !prevValue)
              getData();
              console.log(response);
            })
          }, 100)
        })
      }
      else if (promiseArrayEvent?.length > 0) {
        Promise.all(promiseArrayQuantity).then((res) => {
          console.log(res);
          // setPageRerender((prevValue) => !prevValue)
          getData();
        })
      }

    }
    console.log(JSON.stringify(payload))
  }

  const getPayload = (updatedRow, isNew = false, isDelete = false, initialRow = {}) => {
    if (isNew) {
      if (page === 'SpecialEvents') {
        axios.post(`http://localhost:8080/finops/template/addLineItem/${subCategory}/${updatedRow.subCategoryName}`).then((res) => {
          console.log(res);
          getData();
        })
      }
      else {
        axios.post(`http://localhost:8080/finops/template/addLineItem/${subCategory}/${updatedRow.lineItemName}`).then((res) => {
          console.log(res);
          getData();
        })
      }
    }
    else if (!isDelete && updatedRow.lineItemName !== initialRow.lineItemName) {
      axios.put(`http://localhost:8080/finops/template/updateLineItem/${updatedRow.line_item_id}/${updatedRow.lineItemName}`).then((res) => {
        console.log(res);
        // getData();
      })
    }
    else if (!isDelete && page === 'SpecialEvents' && updatedRow.subCategoryName !== initialRow.subCategoryName) {
      axios.put(`http://localhost:8080/finops/template/updateLineItem/${updatedRow.line_item_id}/${updatedRow.subCategoryName}`).then((res) => {
        console.log(res);
        // getData();
      })
    }
    else if (isDelete) {
      axios.delete(`http://localhost:8080/finops/template/DeleteLineItem/${updatedRow.line_item_id}`).then((res) => {
        console.log(res);
        // getData();
      })

    }
  }

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    const editedRow = rows.find((row) => row.id === id);

    getPayload(editedRow, false, true);
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const initialIsNew = newRow.isNew
    const updatedRow = { ...newRow, isNew: false };
    const subCategoryRow = rows[rows.length - 1];
    const initialRow = rows.find((row) => (row.id === newRow.id))

    if (page === 'majorGifts' && !isAdmin) {
      if(fieldName==='lineItemDescription'){
        const updateValue = updatedRow[`${fieldName}`]
        axios.put(`http://localhost:8080/finops/chapter/UpdateLineItemDesc/${updatedRow.line_item_id}/${updateValue}`).then((res)=>{
        console.log(res);
      })
      }
      else{
      diffValue = (Number(updatedRow[`${fieldName}`]) - Number(initialRow[`${fieldName}`])) || 0;
      eventPayload.line_item_id = updatedRow[`eventUpdateId${fieldName}`]
      eventPayload.lineItemValue = Number(updatedRow[`${fieldName}`]);
      totalPayload.line_item_id = updatedRow[`eventUpdateId${totalIndex}`]
      updatedRow[`${totalIndex}`] = Number(updatedRow[`${totalIndex}`]) + +diffValue;
      updatedRow[`${fieldName}`] = updatedRow[`${fieldName}`] ===''? 0 : updatedRow[`${fieldName}`]
      totalPayload.lineItemValue = updatedRow[`${totalIndex}`];
      subCategoryRow[`${totalIndex}`] = +subCategoryRow[`${totalIndex}`] + +diffValue;
      subCategoryRow[`${fieldName}`] = +subCategoryRow[`${fieldName}`] + +diffValue;
      eventPayload.sub_cat_id = subCategoryRow[`eventUpdateId${fieldName}`]
      eventPayload.subCatValue = subCategoryRow[`${fieldName}`];
      totalPayload.sub_cat_id = subCategoryRow[`eventUpdateId${totalIndex}`];
      totalPayload.subCatValue = subCategoryRow[`${totalIndex}`];
      // console.log('eventPayload',eventPayload);
      // console.log('totalPayload',totalPayload);
      }
      
    }

    setRows(rows.map((row) => {
      if (row.id === newRow.id)
        return updatedRow
      else if (row.id === subCategoryRow.id)
        return subCategoryRow
      else
        return row
    }));
    console.log('process', updatedRow, initialIsNew)
    page === 'Spin4' ? getSpin4Payload(updatedRow, initialIsNew, false, initialRow) : getPayload(updatedRow, initialIsNew, false, initialRow);
    // setLoading(true)
    if (page === 'majorGifts') getFieldDiff(diffValue, fieldName, rows, eventPayload, totalPayload);
    return updatedRow;
  };

  const newColumns = isHeaderTable ? [...tableColumns] : [...tableColumns,
  {
    field: 'actions',
    type: 'actions',
    headerName: 'Actions',
    width: 100,
    cellClassName: 'actions',
    getActions: ({ id }) => {
      const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

      if (isInEditMode) {
        return [
          <GridActionsCellItem
            icon={<SaveIcon />}
            label="Save"
            onClick={handleSaveClick(id)}
          />,
          <GridActionsCellItem
            icon={<CancelIcon />}
            label="Cancel"
            className="textPrimary"
            onClick={handleCancelClick(id)}
            color="inherit"
          />,
        ];
      }

      if (isAdmin) {
        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      }
      else if (page === 'majorGifts' && !isAdmin) {
        return []
      }
      else return [
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Edit"
          className="textPrimary"
          onClick={handleEditClick(id)}
          color="inherit"
        />
      ];
    },
  },
  ];

  return (
    <>
      <div>
        <DataGrid
          scrollbarSize={0}
          rows={rows}
          columns={newColumns}
          resize
          hideFooter={true}
          headerHeight={headerHeight}
          autoHeight
          rowsPerPageOptions={[]}
          getRowClassName={(params) => handleGetRowClassName(params)}
          editMode="cell"
          rowModesModel={rowModesModel}
          onRowEditStop={handleRowEditStop}
          onCellEditStop={handleRowEditStop}
          onCellFocusOut = {handleRowEditStop}
          processRowUpdate={processRowUpdate}
          style={{ border: '1px solid black' }}
          components={(isAdmin && !isHeaderTable) ? {
            Toolbar: EditToolbar,
          } : {}}
          componentsProps={{
            toolbar: { setRows, setRowModesModel, page },
          }}
          experimentalFeatures={{ newEditingApi: true }}
          rowHeight={rowHeight - 4 || 50}
        />
      </div>
    </>
  );
}

export default DataGridTable;