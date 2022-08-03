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
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    // console.log("newRow click")
    setRows((oldRows) => [...oldRows, { id, name: '', value: '', isNew: true }]);
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

EditToolbar.propTypes = {
  setRowModesModel: PropTypes.func.isRequired,
  setRows: PropTypes.func.isRequired,
};

export default function DataGridTable({ isHeaderTable,setPageRerender, isAdmin, tableColumns, section, initialRows, headerHeight, pageElement, subCategory, handleGetRowClassName }) {

  //  console.log(tableColumns,isAdmin)
  const [rows, setRows] = React.useState(initialRows);

  const [rowModesModel, setRowModesModel] = React.useState({});

  const handleRowEditStart = (params, event) => {
    console.log('editStart')
  };

  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const getPayload = (updatedRow, isNew = false, isDelete = false) => {
    const payload = {}
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
      else if (updatedRow.lineItemName) {
        payload.section = section;
        // payload.eventName = eventName;
        payload.cat_id = pageElement.cat_id;
        payload.categoryName = pageElement.categoryName
        payload.sub_cat_id = subCategory.sub_cat_id;
        payload.subCategoryName = subCategory.subCategoryName;
        payload.line_item_id = isNew ? null : updatedRow.line_item_id;
        payload.lineItemName = updatedRow.lineItemName;
      }
      // console.log(JSON.stringify(payload))
    //    if(isNew){
    //   axios.post('http://localhost:8080/spin4AddLineItem',payload).then((res)=>{
    //     console.log(res)
    //     setPageRerender((prevValue) => !prevValue)
    //   })
    // }
    // else if(isDelete) {
    //   axios.delete('http://localhost:8080/spin4DeleteLineItem',payload).then((res)=>{
    //      console.log(res)
    //      setPageRerender((prevValue) => !prevValue)
    //   })
    // }
    // else {
    //   axios.put('http://localhost:8080/spin4UpdateLineItem',payload).then((res)=>{
    //     console.log(res)
    //     setPageRerender((prevValue) => !prevValue)
    //   })
    // }
    }
    else {
      const promiseArray=[];
      const initialEventHashmap = {};
      updatedRow?.events?.forEach((event) => {
        initialEventHashmap[`${event.eventName}`] = event.value;
      })
      for (let eventName in initialEventHashmap) {
        if (initialEventHashmap[eventName] !== updatedRow[eventName]) {
          const eventDetails = updatedRow?.events?.find((event)=>event.eventName ===`${eventName}`)
          // console.log(eventDetails)
          // payload.line_item_template_id = updatedRow.line_item_template_id;
          // payload.lineItemName = updatedRow.lineItemName;
          // payload.id = eventDetails.id;
          // payload.eventName = eventDetails.eventName;
          // payload.value = updatedRow[eventName];
          let url=`http://localhost:8080/spin4/chapter/UpdateLineItem/${eventDetails.id}/${updatedRow[eventName]}`
          console.log(url);
          // promiseArray.push(axios.put(url))// add calls here 
        }
      }
      // Promise.all(promiseArray).then((res)=>{
      //   console.log(res);
      //   setPageRerender((prevValue) => !prevValue)
      // })
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
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    console.log('process', updatedRow, initialIsNew)
    getPayload(updatedRow, initialIsNew)
    // setLoading(true)
    return updatedRow;
  };

  const newColumns = isHeaderTable ?[...tableColumns]: [...tableColumns,
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
      return [
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
          rows={rows}
          columns={newColumns}
          resize
          hideFooter={true}
          headerHeight={headerHeight}
          autoHeight
          rowsPerPageOptions={[]}
          getRowClassName={(params) => handleGetRowClassName(params)}
          editMode="row"
          rowModesModel={rowModesModel}
          onRowEditStart={handleRowEditStart}
          onRowEditStop={handleRowEditStop}
          onCellEditStart={handleRowEditStart}
          processRowUpdate={processRowUpdate}
          style={{ border: '1px solid black' }}
          components={isAdmin ? {
            Toolbar: EditToolbar,
          } : {}}
          componentsProps={{
            toolbar: { setRows, setRowModesModel },
          }}
          experimentalFeatures={{ newEditingApi: true }}
        />
      </div>
    </>
  );
}

