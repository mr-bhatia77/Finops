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
    console.log("newRow click")
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

export default function DataGridTable({ isAdmin,tableColumns,eventName,section, initialRows,headerHeight ,pageElement, subCategory,handleGetRowClassName}) {

  // console.log('hello')
  const [rows, setRows] = React.useState(initialRows);

  const [rowModesModel, setRowModesModel] = React.useState({});

  const handleRowEditStart = (params, event) => {
    console.log('editStart')
  };

  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const getPayload = (updatedRow , isNew=false, isDelete = false) => {
    const payload = {}
    // if(updatedRow.category)
    // {
    //   payload.categoryName=updatedRow.category;
    //   payload.id=updatedRow.id;
    // }
    // else if(updatedRow.subCategory)
    // {
    //   payload.CategoryId=pageElement.id;
    //   payload.subCategoryId=updatedRow.id;
    //   payload.subCategoryName=updatedRow.subCategory;
    // }
    // else if(updatedRow.lineItemName)
    // {
    //   payload.section = section;
    //   payload.eventName = eventName;
    //   payload.cat_id=pageElement.cat_id;
    //   payload.categoryName=pageElement.categoryName
    //   payload.sub_cat_id=subCategory.sub_cat_id;
    //   payload.subCategoryName=subCategory.subCategoryName;
    //   payload.line_item_id = isNew ? null :updatedRow.id;
    //   payload.lineItemName = updatedRow.lineItemName;
    // }

    // if(isNew){
    //   axios.post('http://localhost:8080/spin4AddLineItem',payload).then((res)=>{
    //     console.log(res)
    //   })
    // }
    // else if(isDelete) {
    //   axios.delete('http://localhost:8080/spin4DeleteLineItem',payload).then((res)=>{
    //      console.log(res)
    //   })
    // }
    // else {
    //   axios.put('http://localhost:8080/spin4UpdateLineItem',payload).then((res)=>{
    //     console.log(res)
    //   })
    // }
    console.log(JSON.stringify(payload))
  }

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    const editedRow = rows.find((row) => row.id === id);
    
    getPayload(editedRow,false,true);
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
    const initialIsNew= newRow.isNew
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    console.log('process',updatedRow , initialIsNew)
    getPayload(updatedRow,initialIsNew)
    // setLoading(true)
    return updatedRow;
  };

  const newColumns = [...tableColumns,
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
          processRowUpdate={processRowUpdate}
          style={{ border: '1px solid black' }}
          components={isAdmin?{
            Toolbar: EditToolbar,
          }:{}}
          componentsProps={{
            toolbar: { setRows, setRowModesModel },
          }}
          experimentalFeatures={{ newEditingApi: true }}
        />
      </div>
    </>
  );
}

