import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
  GridRowModes,
  DataGridPro,
  GridToolbarContainer,
  GridActionsCellItem,
} from '@mui/x-data-grid-pro';
import {
  randomCreatedDate,
  randomId,
} from '@mui/x-data-grid-generator';

//Table Functionality

// const initialRows1 = [
//   {
//     id: randomId(),
//     name: "Regular Bike Budget",
//     value: 19,
//     dateCreated: randomCreatedDate(),
//   },
//   {
//     id: randomId(),
//     name: "VIP Bike Budget",
//     value: 28,
//     dateCreated: randomCreatedDate(),
//   },
//   {
//     id: randomId(),
//     name: "Sponsorship Budget",
//     value: 23,
//     dateCreated: randomCreatedDate(),
//   },
// ];

//  const initialRows = [
//   {
//     id: randomId(),
//     name: "Total Bike Goal",
//     valueEvent1:null,
//     dateCreated: randomCreatedDate(),
//   },
//   {
//     id: randomId(),
//     name: "Budgeted Bike Goal - Regular",
//     valueEvent1:null,
//     dateCreated: randomCreatedDate(),
//   },
//   {
//     id: randomId(),
//     name: "Budgeted Bike Goal - VIP",
//     valueEvent1:null,
//     dateCreated: randomCreatedDate(),
//   },
//   {
//     id: randomId(),
//     name: "Free Agent Teammates",
//     valueEvent1:null,
//     dateCreated: randomCreatedDate(),
//   },
//   {
//     id: randomId(),
//     name: "Total number of participants (bikes x4 + free agents)",
//     value: 23,
//     dateCreated: randomCreatedDate(),
//   },
// ];

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, name: '', value: '', isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
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

export default function DataGridTable({tableColumns,initialRows}) {

  //Tabs constants
  // const [value, setValue] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  //Table Constants
  const [rows, setRows] = React.useState(initialRows);
  // const [rows1, setRows1] = React.useState(initialRows1);

  const [rowModesModel, setRowModesModel] = React.useState({});

  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
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
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const newcolumns = [...tableColumns,
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
        <div style={{ height: 500 }}>
          <DataGridPro
            rows={rows}
            columns={newcolumns}
            editMode="row"
            rowModesModel={rowModesModel}
            onRowEditStart={handleRowEditStart}
            onRowEditStop={handleRowEditStop}
            processRowUpdate={processRowUpdate}
            style={{border:'1px solid black'}}
            components={{
              Toolbar: EditToolbar,
            }}
            componentsProps={{
              toolbar: { setRows, setRowModesModel },
            }}
            experimentalFeatures={{ newEditingApi: true }}
          />
        </div>
    </>
  );
}

