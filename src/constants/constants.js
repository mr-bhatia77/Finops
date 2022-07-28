export const tableColumns1 = [
  { field: "lineItemName", headerName: "", width: "400", editable: true },
  // { field: 'valueEvent1', headerName: '$ (Event 1)', type: 'number', width: 180, editable: true, align: 'center', headerAlign: 'center' }
];

export const tableColumns2 = [
  { field: "name", headerName: "", width: "400", editable: true },
  { field: "account", headerName: "Account", width: "180", editable: true },
  // { field: 'valueEvent1', headerName: '$ (Event 1)', type: 'number', width: 180, editable: true, align: 'center', headerAlign: 'center' }
];

export const takeStepsHeaderColumns = [
  { field: "name", headerName: "x", width: "400", editable: true,cellClassName: "blueAndWhite mediumFontSize", headerClassName:'blue'},
  { field: "chapterTotal", headerName: "Chapter Total", width: "180", editable: true, headerClassName: 'blueAndWhite mediumFontSize',headerAlign: 'center' },
  { field: "enterLocationName", headerName: "Enter Location Name", width: "180", editable: true, headerClassName: 'blueAndWhite mediumFontSize',headerAlign: 'center' },
]

export const takeStepsTableColumns = [
  { field: 'subCategory', headerName: '.', width: '300', editable: true, align: 'center', headerAlign: 'center', sortable: false },
  {
    field: "name",
    headerName: ".",
    width: "300",
    editable: true,
    align: "right",
    headerClassName: 'black'
  },
  {
    field: "companyCode",
    headerName: ".",
    width: "300",
    editable: true,
    align: "center",
    headerClassName: 'black',
  },
  {
    field: "takeStepsOverHead",
    headerName: ".",
    width: "300",
    editable: true,
    align: "center",
    headerClassName: 'black',
    cellClassName:'bg_darkGray'
  },
  {
    field: "chapterTotal",
    headerName: ".",
    width: "300",
    editable: true,
    align: "center",
    headerClassName: 'black',
  },
  {
    field: "walkColumn1",
    headerName: ".",
    width: "300",
    editable: true,
    align: "center",
    headerClassName: 'black',
  },
  {
    field: "walkColumn2",
    headerName: ".",
    width: "300",
    editable: true,
    align: "center",
    headerClassName: 'black',
  }
]

export const tableColumns21 = [
  { field: 'subCategory', headerName: '', width: '300', editable: true, align: 'center', headerAlign: 'center', sortable: false },
  {
    field: "name",
    headerName: "",
    width: "400",
    editable: true,
    align: "right",
    headerClassName: 'blackAndWhite'
  },
  {
    field: "2019 Actual Total",
    headerName: "2019 Actual Total",
    width: "180",
    editable: true,
    headerAlign: "center",
  },
  {
    field: "2020 Budget Total",
    headerName: "2020 Budget Total",
    width: "180",
    editable: true,
    headerAlign: "center",
  },
  {
    field: "2019 Actual Total1",
    headerName: "2019 Actual Total1",
    width: "180",
    editable: true,
    headerAlign: "center",
  },
  {
    field: "2019 Actual Total2",
    headerName: "2019 Actual Total2",
    width: "180",
    editable: true,
    headerAlign: "center",
  },
  {
    field: "2019 Actual Total3",
    headerName: "2019 Actual Total4",
    width: "180",
    editable: true,
    headerAlign: "center",
  },
  {
    field: "2019 Actual Total4",
    headerName: "2019 Actual Total4",
    width: "180",
    editable: true,
    headerAlign: "center",
  },
  {
    field: "2019 Actual Total5",
    headerName: "2019 Actual Total5",
    width: "180",
    editable: true,
    headerAlign: "center",
  },
  {
    field: "2019 Actual Total6",
    headerName: "2019 Actual Total6",
    width: "180",
    editable: true,
    headerAlign: "center",
  },

  // { field: 'valueEvent1', headerName: '$ (Event 1)', type: 'number', width: 180, editable: true, align: 'center', headerAlign: 'center' }
];

export const tableColumns3 = [
  { field: "name", headerName: "", width: "400", editable: true },
  { field: "explain", headerName: "explain", width: "180", editable: true },
  // { field: 'valueEvent1', headerName: '$ (Event 1)', type: 'number', width: 180, editable: true, align: 'center', headerAlign: 'center' }
];

export const tableColumns4 = [
  {
    field: "pricePerPiece",
    headerName: "Price per piece",
    width: "180",
    editable: true,
    align: "center",
    headerAlign: "center",
    cellClassName: (params) => {
      if (params.value !== null) {
        return "bg_darkGray";
      }
    },
  },
  {
    field: "quantity",
    headerName: "",
    width: 180,
    editable: true,
    align: "center",
  },
];

export const tableColumns5 = [
  {
    field: "pricePerPieceText",
    headerName: "",
    width: "180",
    editable: true,
    align: "center",
  },
  {
    field: "pricePerPiece",
    headerName: "Price Per Piece",
    width: 180,
    editable: true,
    align: "center",
    headerAlign: "center",
    cellClassName: (params) => {
      if (params.value !== null) {
        return "bg_darkGray";
      }
    },
  },
  {
    field: "numberOfPiecesText",
    headerName: "",
    width: "180",
    editable: true,
    align: "center",
  },
];

// export const initialRows1 = [
//     {
//         id: randomId(),
//         name: "Total Bike Goal",
//         valueEvent1: null

//     },
//     {
//         id: randomId(),
//         name: "Budgeted Bike Goal - Regular",
//         valueEvent1: null

//     },
//     {
//         id: randomId(),
//         name: "Budgeted Bike Goal - VIP",
//         valueEvent1: null

//     },
//     {
//         id: randomId(),
//         name: "Free Agent Teammates",
//         valueEvent1: null

//     },
//     {
//         id: randomId(),
//         name: "Total number of participants (bikes x4 + free agents)",
//         valueEvent1: null

//     },
//     {
//         id: randomId(),
//         name: "Committee Member Bikes (of total)",
//         valueEvent1: null

//     },
//     {
//         id: randomId(),
//         name: "Corporate Team Bikes (of total)",
//         valueEvent1: null

//     },
//     {
//         id: randomId(),
//         name: "Reg fee per bike",
//         valueEvent1: null

//     },
//     {
//         id: randomId(),
//         name: "Budgeted Reg Fees",
//         valueEvent1: null

//     },
//     {
//         id: randomId(),
//         name: "Expected Retention",
//         valueEvent1: null

//     },
//     {
//         id: randomId(),
//         name: "Fundraising Minimum - Regular",
//         valueEvent1: null

//     },
//     {
//         id: randomId(),
//         name: "Fundraising Minimum - VIP",
//         valueEvent1: null

//     },
//     {
//         id: randomId(),
//         name: "Fundraising Minimum - Free Agent",
//         valueEvent1: null

//     }
// ];
// export const initialRows1v2 = [
//     {
//         id: randomId(),
//         name: "Sponsorship",
//         valueEvent1: null

//     },
//     {
//         id: randomId(),
//         name: "General Donations (not associated with a team)",
//         valueEvent1: null

//     },
//     {
//         id: randomId(),
//         name: "General Donations at Event",
//         valueEvent1: null

//     },
//     {
//         id: randomId(),
//         name: "In Excess of Minimum",
//         valueEvent1: null

//     },
//     {
//         id: randomId(),
//         name: "Raffle/Auction Sales",
//         valueEvent1: null

//     },
//     {
//         id: randomId(),
//         name: "Other:",
//         valueEvent1: null

//     }
// ]

// export const initialRows2 = [
//     {
//         id: randomId(),
//         name: "Total DDB Expenses",
//         valueEvent1: null

//     },
//     {
//         id: randomId(),
//         name: "Percentage of funds spent on DDB - MUST be less than 10%.  Try to have 8% or less",
//         valueEvent1: null

//     },
//     {
//         id: randomId(),
//         name: "Total Indirect Expenses",
//         valueEvent1: null

//     },
//     {
//         id: randomId(),
//         name: "Percentage of funds spent on Expenses",
//         valueEvent1: null

//     },
//     {
//         id: randomId(),
//         name: "Total Net Income",
//         value: 23,

//     },
//     {
//         id: randomId(),
//         name: "Percentage of total expenses (DDB and Indirect Expenses) MUST BE less than 12%",
//         valueEvent1: null

//     }];

// export const initialRows3 = [
//     {
//         id: randomId(),
//         name: "Number of Participants",
//         valueEvent1: null

//     },
//     {
//         id: randomId(),
//         name: "Instructor payment",
//         valueEvent1: null

//     },
//     {
//         id: randomId(),
//         name: "Facility Fees (i.e. studio rental)",
//         valueEvent1: null

//     },
//     {
//         id: randomId(),
//         name: "Food & Beverage",
//         valueEvent1: null

//     },
//     {
//         id: randomId(),
//         name: "Per Participant",
//         value: 23,

//     },
//     {
//         id: randomId(),
//         category: "Celebration",
//         name:"Total",
//         value: null
//     }
// ]

// export const initialRows3v2 = [
//     {
//         id: randomId(),
//         name: "Per Participant",
//         value: 23,

//     },
//     {
//         id: randomId(),
//         category:"Participant Premiums/Incentives",
//         name: "Total",
//         value: null
//     }
// ]
export const initialRows4 = [
  {
    id: 1,
    name: "Event Date:",
    valueEvent1: null,
  },
  {
    id: 2,
    name: "Subledger Code:",
    valueEvent1: null,
  },
];
// export const initialRows5 = [
//     {
//         id: randomId(),
//         name: "Other DDB's",
//         explain: null,
//         valueEvent1: null
//     }
// ]

// export const initialRows6 = [
//     {
//         id: randomId(),
//         name: "spin4 event day t-shirt (women)",
//         pricePerPiece: '$ 13.20',
//         quantity: 'Quantity:',
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "spin4 event day tank top (women)",
//         pricePerPiece: '$ 13.00',
//         quantity: 'Quantity:',
//         valueEvent1: null
//     }, {
//         id: randomId(),
//         name: "spin4 event day t-shirt (men)",
//         pricePerPiece: '$ 13.00',
//         quantity: 'Quantity:',
//         valueEvent1: null
//     }, {
//         id: randomId(),
//         name: "spin4 towel",
//         pricePerPiece: '$ 3.87',
//         quantity: 'Quantity:',
//         valueEvent1: null
//     }, {
//         id: randomId(),
//         name: "spin4 sunglasses",
//         pricePerPiece: '$ 2.20',
//         quantity: 'Quantity:',
//         valueEvent1: null
//     }, {
//         id: randomId(),
//         name: "spin4 water bottle (white)",
//         pricePerPiece: '$ 14.08',
//         quantity: 'Quantity:',
//         valueEvent1: null
//     }, {
//         id: randomId(),
//         name: "spin4 water bottle (teal)",
//         pricePerPiece: '$ 8.71',
//         quantity: 'Quantity:',
//         valueEvent1: null
//     }, {
//         id: randomId(),
//         name: "spin4 bike signs",
//         pricePerPiece: '$ 4.23',
//         quantity: 'Quantity:',
//         valueEvent1: null
//     }, {
//         id: randomId(),
//         name: "pint glass",
//         pricePerPiece: '$ 8.92',
//         quantity: 'Quantity:',
//         valueEvent1: null
//     }, {
//         id: randomId(),
//         name: "spin4 headband",
//         pricePerPiece: '$ 3.43',
//         quantity: 'Quantity:',
//         valueEvent1: null
//     }, {
//         id: randomId(),
//         name: "spin4 drawstring bag",
//         pricePerPiece: '$  $4.27',
//         quantity: 'Quantity:',
//         valueEvent1: null
//     }, {
//         id: randomId(),
//         name: "socks/lagacy rider gift",
//         pricePerPiece: '$ 3.45',
//         quantity: 'Quantity:',
//         valueEvent1: null
//     }, {
//         id: randomId(),
//         name: "VIP $2500 jacket",
//         pricePerPiece: '$  $23.75',
//         quantity: 'Quantity:',
//         valueEvent1: null
//     }, {
//         id: randomId(),
//         name: "VIPs $5000 joggers",
//         pricePerPiece: '$ 26.75',
//         quantity: 'Quantity:',
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "VIP $7500 gym bag",
//         pricePerPiece: '$ 48.06',
//         quantity: 'Quantity:',
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "VIP $10,000 gift card",
//         pricePerPiece: '$ 100.00',
//         quantity: 'Quantity:',
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "Inner circle bracelets",
//         pricePerPiece: '$ 0.68',
//         quantity: 'Quantity:',
//         valueEvent1: null
//     }
// ]

// export const initialRows7 = [
//     {
//         id: randomId(),
//         name: "Compensation Total",
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "Printing  - Expense Code 7125",
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "Postage - Expense Code 7130",
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "Shipping - Expense Code 7131",
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "Bike Rental - Expense Code 7180",
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "Advertising - Expense Code 7160",
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "Meetings & Travel Total",
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "Hotel / Premises - Expense Code 7110",
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "Meals - Expense Code - 7115",
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "Other - Expense Code - 7120",
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "Air and Ground (Mileage) - Expense Code 7105",
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "Supplies - Expense Code 7170",
//         valueEvent1: null
//     }
// ]

// export const initialRows8 = [
//     {
//         id: randomId(),
//         name: "POP (Palm Cards)",
//         pricePerPieceText: 'Price per piece:',
//         pricePerPiece: '$0.75',
//         numberOfPiecesText: 'Number of pieces:',
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "Printing - Postcards to Leads",
//         pricePerPieceText: 'Price per piece:',
//         pricePerPiece: '$0.50',
//         numberOfPiecesText: 'Number of pieces:',
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "Printing - Save the Date Postcards to TC House List",
//         pricePerPieceText: 'Price per piece:',
//         pricePerPiece: '$0.50',
//         numberOfPiecesText: 'Number of pieces:',
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "Printing - Honoree Postcards to Team",
//         pricePerPieceText: 'Price per piece:',
//         pricePerPiece: ' $0.50',
//         numberOfPiecesText: 'Number of pieces:',
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "Printing for Acknowledgement Letters",
//         pricePerPieceText: 'Price per piece:',
//         pricePerPiece: '$0.02',
//         numberOfPiecesText: 'Number of pieces:',
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "spin4 Tear-Off Flyer",
//         pricePerPieceText: 'Price per piece:',
//         pricePerPiece: '$0.70',
//         numberOfPiecesText: 'Number of pieces:',
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "spin4 Posters",
//         pricePerPieceText: 'Price per piece:',
//         pricePerPiece: '$15.00',
//         numberOfPiecesText: 'Number of posters:',
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "Miscellaneous Printing",
//         pricePerPieceText: 'Price per item:',
//         pricePerPiece: '$0.75',
//         numberOfPiecesText: 'Number of items:',
//         valueEvent1: null
//     }
// ]
// export const initialRows9 = [
//     {
//         id: randomId(),
//         name: "Postage - Postcards to Leads",
//         pricePerPieceText: null,
//         pricePerPiece: '$0.34',
//         numberOfPiecesText: 'Quantity:',
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "Postage - Save the Date Postcards to TC House List",
//         pricePerPieceText: null,
//         pricePerPiece: '$0.34',
//         numberOfPiecesText: 'Quantity:',
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "Postage - Honoree Postcards to Team",
//         pricePerPieceText: null,
//         pricePerPiece: '$0.34',
//         numberOfPiecesText: 'Quantity:',
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "Postage for Acknowledgement Letters",
//         pricePerPieceText: null,
//         pricePerPiece: '$0.49',
//         numberOfPiecesText: 'Quantity:',
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "Shipping",
//         pricePerPieceText: null,
//         pricePerPiece: null,
//         numberOfPiecesText: null,
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: null,
//         pricePerPieceText: null,
//         pricePerPiece: null,
//         numberOfPiecesText: 'Shipping - palm cards',
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: null,
//         pricePerPieceText: null,
//         pricePerPiece: null,
//         numberOfPiecesText: 'Shipping - Posters',
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: null,
//         pricePerPieceText: null,
//         pricePerPiece: null,
//         numberOfPiecesText: 'Shipping CI Group Incentives',
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: null,
//         pricePerPieceText: null,
//         pricePerPiece: null,
//         numberOfPiecesText: 'Shipping Will Enterprise',
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "Postage Miscellaneous",
//         pricePerPieceText: null,
//         pricePerPiece: null,
//         numberOfPiecesText: null,
//         valueEvent1: null
//     },
// ]

// export const initialRows10 = [
//     {
//         id: randomId(),
//         name: "Freight Shipping - Bikes",
//         pricePerPieceText: null,
//         pricePerPiece: null,
//         numberOfPiecesText: null,
//         valueEvent1: null
//     }]

// export const initialRows11 = [
//     {
//         id: randomId(),
//         name: "Rental of Bikes",
//         pricePerPieceText: null,
//         pricePerPiece: null,
//         numberOfPiecesText: null,
//         valueEvent1: null
//     }]

// export const initialRows12 = [
//     {
//         id: randomId(),
//         name: "Online Paid Advertising",
//         pricePerPieceText: 'where?',
//         pricePerPiece: null,
//         numberOfPiecesText: 'Full Price',
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "Paid Advertising 1",
//         pricePerPieceText: 'where?',
//         pricePerPiece: null,
//         numberOfPiecesText: 'Full Price',
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "Paid Advertising 2",
//         pricePerPieceText: 'where?',
//         pricePerPiece: null,
//         numberOfPiecesText: 'Full Price',
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "Radio PSA 1",
//         pricePerPieceText: 'where?',
//         pricePerPiece: null,
//         numberOfPiecesText: 'Full Price',
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "Radio PSA 2",
//         pricePerPieceText: 'where?',
//         pricePerPiece: null,
//         numberOfPiecesText: 'Full Price',
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "TV PSA 1",
//         pricePerPieceText: 'where?',
//         pricePerPiece: null,
//         numberOfPiecesText: 'Full Price',
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "Other Advertising",
//         pricePerPieceText: null,
//         pricePerPiece: null,
//         numberOfPiecesText: 'Full Price',
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "Other Advertising",
//         pricePerPieceText: null,
//         pricePerPiece: null,
//         numberOfPiecesText: 'Full Price',
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "Other Advertising",
//         pricePerPieceText: null,
//         pricePerPiece: null,
//         numberOfPiecesText: 'Full Price',
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "Other Advertising",
//         pricePerPieceText: null,
//         pricePerPiece: null,
//         numberOfPiecesText: 'Full Price',
//         valueEvent1: null
//     }
// ]
// export const initialRows13 = [
//     {
//         id: randomId(),
//         name: "Food/Bev - 53830",
//         pricePerPieceText: null,
//         pricePerPiece: null,
//         numberOfPiecesText: null,
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "Supplies",
//         pricePerPieceText: null,
//         pricePerPiece: null,
//         numberOfPiecesText: null,
//         valueEvent1: null
//     }
// ]

// export const initialRows14 = [
//     {
//         id: randomId(),
//         name: "Food/Bev - 53830",
//         pricePerPieceText: null,
//         pricePerPiece: null,
//         numberOfPiecesText: null,
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "Facility / Room Rental - 53810",
//         pricePerPieceText: null,
//         pricePerPiece: null,
//         numberOfPiecesText: null,
//         valueEvent1: null
//     }
// ]

// export const initialRows15 = [
//     {
//         id: randomId(),
//         name: "Facility / Room Rental - 53810",
//         pricePerPieceText: null,
//         pricePerPiece: null,
//         numberOfPiecesText: null,
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "A / V Equipment & Services - 53840",
//         pricePerPieceText: null,
//         pricePerPiece: null,
//         numberOfPiecesText: null,
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "Food/Bev - 53830",
//         pricePerPieceText: null,
//         pricePerPiece: null,
//         numberOfPiecesText: null,
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "Decorations - 53850",
//         pricePerPieceText: null,
//         pricePerPiece: null,
//         numberOfPiecesText: null,
//         valueEvent1: null
//     }
// ]

// export const initialRows16 = [
//     {
//         id: randomId(),
//         name: "Coffee meetings with Leads",
//         pricePerPieceText: "Price per coffee",
//         pricePerPiece: '$10',
//         numberOfPiecesText: "Number Of Meetings:",
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "Coffee meetings with teammates",
//         pricePerPieceText: "Price per coffee",
//         pricePerPiece: '$10',
//         numberOfPiecesText: "Number Of Meetings:",
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "Coffee meetings with committee candidates",
//         pricePerPieceText: "Price per coffee",
//         pricePerPiece: '$10',
//         numberOfPiecesText: "Number Of Meetings:",
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "Coffee meetings with gym/studio",
//         pricePerPieceText: "Price per coffee",
//         pricePerPiece: '$10',
//         numberOfPiecesText: "Number Of Meetings:",
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "Coffee meetings - Other",
//         pricePerPieceText: "Price per coffee",
//         pricePerPiece: '$10',
//         numberOfPiecesText: "Number Of Meetings:",
//         valueEvent1: null
//     }
// ]

// export const initialRows17 = [
//     {
//         id: randomId(),
//         name: "Mileage for Endurance Managers - Marketing and Recruitment",
//         pricePerPieceText: "Price per mile",
//         pricePerPiece: '$ 0.56',
//         numberOfPiecesText: "Anticipated Miles",
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "Mileage for Endurance Manager - Committee Meetings",
//         pricePerPieceText: "Price per mile",
//         pricePerPiece: '$ 0.56',
//         numberOfPiecesText: "Anticipated Miles",
//         valueEvent1: null
//     },
//     {
//         id: randomId(),
//         name: "Mileage for Endurance Manager - Other Meetings",
//         pricePerPieceText: "Price per mile",
//         pricePerPiece: '$ 0.56',
//         numberOfPiecesText: "Anticipated Miles",
//         valueEvent1: null
//     }
// ]

// // export const initialTables = [
// //     { heading: 'FY19 Budgeted Gross Revenue', subHeadings: ['Budgeted Participant Revenue', 'Budgeted Other Revenue'], background: 'lightgrey', initialRows: [initialRows1, initialRows1v2], tableColumns: tableColumns1 },
// //     { heading: '', subHeadings: [], background: 'lightgrey', initialRows: [initialRows2], tableColumns: tableColumns1 },
// //     { heading: 'Direct Donor Benefit (DDB) Expenses Total', subHeadings: [], background: 'lightgrey', initialRows: [initialRows4], tableColumns: tableColumns2 },
// //     { heading: 'Participant DDB Expense Total', subHeadings: ['Food & Premises - DDB Code 5040', 'Incentives (Premiums) - DDB Code 5065'], background: 'lightgrey', initialRows: [initialRows3, initialRows3v2], tableColumns: tableColumns1 },
// //     { heading: 'Other DDBs Total', subHeadings: ['Other DDBs - DDB Code 5085'], background: 'lightgrey', initialRows: [initialRows5], tableColumns: tableColumns3 },
// //     { heading: 'Premiums DDB Expense - DDB Code 5065', subHeadings: [], background: 'lightgrey', initialRows: [initialRows6], tableColumns: tableColumns4 },
// //     { heading: 'Indirect Expenses - Total', subHeadings: [], background: 'lightgrey', initialRows: [initialRows7], tableColumns: tableColumns1 },
// //     {
// //         heading: '', subHeadings: ['Printing', 'Postage & Shipping', 'Freight Shipping', 'Bike Rentals', 'Advertising'],
// //         background: 'lightgrey', initialRows: [initialRows8, initialRows9, initialRows10, initialRows11, initialRows12], tableColumns: tableColumns5, subHeadingClassName: 'backgroundYellow'
// //     }
// // ]

export const pageStructureConstant2 = [
  {
    section: "First",

    eventName: "Event 1",

    categoryList: [
      {
        cat_id: 1,

        categoryName: "FY19 Budgeted Gross Revenue",

        subCategoryList: [
          {
            sub_cat_id: 100,

            subCategoryName: "Budgeted Participant Revenue",

            lineItems: [
              {
                line_item_id: 1000,

                lineItemName: "Total Bike Goal",

                pricePerPiece: 0,
              },

              {
                line_item_id: 1001,

                lineItemName: "Budgeted Bike Goal - Regular",

                pricePerPiece: 0,
              },

              {
                line_item_id: 1002,

                lineItemName: "Budgeted Bike Goal - VIP",

                pricePerPiece: 0,
              },

              {
                line_item_id: 1003,

                lineItemName: "Free Agent Teammates",

                pricePerPiece: 0,
              },

              {
                line_item_id: 1004,

                lineItemName:
                  "Total number of participants (bikes x4 + free agents)",

                pricePerPiece: 0,
              },

              {
                line_item_id: 1005,

                lineItemName: "Committee Member Bikes (of total)",

                pricePerPiece: 0,
              },

              {
                line_item_id: 1006,

                lineItemName: "Corporate Team Bikes (of total)",

                pricePerPiece: 0,
              },

              {
                line_item_id: 1007,

                lineItemName: "Reg fee per bike",

                pricePerPiece: 0,
              },

              {
                line_item_id: 1008,

                lineItemName: "Budgeted Reg Fees",

                pricePerPiece: 0,
              },

              {
                line_item_id: 1009,

                lineItemName: "Expected Retention",

                pricePerPiece: 0,
              },

              {
                line_item_id: 1010,

                lineItemName: "Fundraising Minimum - Regular",

                pricePerPiece: 0,
              },

              {
                line_item_id: 1011,

                lineItemName: "Fundraising Minimum - VIP",

                pricePerPiece: 0,
              },

              {
                line_item_id: 1012,

                lineItemName: "Fundraising Minimum - Free Agent",

                pricePerPiece: 0,
              },
            ],
          },

          {
            sub_cat_id: 101,

            subCategoryName: "Budgeted Other Revenue",

            lineItems: [
              {
                line_item_id: 1013,

                lineItemName: "Sponsorship",

                pricePerPiece: 0,
              },

              {
                line_item_id: 1014,

                lineItemName: "General Donations (not associated with a team)",

                pricePerPiece: 0,
              },

              {
                line_item_id: 1015,

                lineItemName: "General Donations at Event",

                pricePerPiece: 0,
              },

              {
                line_item_id: 1016,

                lineItemName: "In Excess of Minimum",

                pricePerPiece: 0,
              },

              {
                line_item_id: 1017,

                lineItemName: "Raffle/Auction Sales",

                pricePerPiece: 0,
              },

              {
                line_item_id: 1018,

                lineItemName: "Other",

                pricePerPiece: 0,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    section: "Second",

    eventName: "Event 1",

    categoryList: [
      {
        cat_id: 2,

        categoryName: "Participant DDB Expense Total",

        subCategoryList: [
          {
            sub_cat_id: 102,

            subCategoryName: "Food & Premises - DDB Code 5040",

            lineItems: [
              {
                line_item_id: 1019,

                lineItemName: "Number of Participants",

                pricePerPiece: 0,
              },

              {
                line_item_id: 1020,

                lineItemName: "Instructor payment",

                pricePerPiece: 0,
              },

              {
                line_item_id: 1021,

                lineItemName: "Facility Fees (i.e. studio rental)",

                pricePerPiece: 0,
              },

              {
                line_item_id: 1022,

                lineItemName: "Food & Beverage",

                pricePerPiece: 0,
              },

              {
                line_item_id: 1023,

                lineItemName: "Per Participant",

                pricePerPiece: 0,
              },
            ],
          },

          {
            sub_cat_id: 103,

            subCategoryName: "Incentives (Premiums) - DDB Code 5065",

            lineItems: [
              {
                line_item_id: 1024,

                lineItemName: "Per Participant",

                pricePerPiece: 0,
              },
            ],
          },

          {
            sub_cat_id: 104,

            subCategoryName: "Premiums DDB Expense - DDB Code 5065",

            lineItems: [
              {
                line_item_id: 1025,

                lineItemName: " spin4 event day t-shirt (women)",

                pricePerPiece: 13,
              },

              {
                line_item_id: 1026,

                lineItemName: "spin4 event day tank top (women)",

                pricePerPiece: 13,
              },

              {
                line_item_id: 1027,

                lineItemName: "spin4 event day t-shirt (men)",

                pricePerPiece: 13,
              },

              {
                line_item_id: 1028,

                lineItemName: "spin4 towel",

                pricePerPiece: 3,
              },

              {
                line_item_id: 1029,

                lineItemName: "spin4 sunglasses",

                pricePerPiece: 2,
              },

              {
                line_item_id: 1030,

                lineItemName: "spin4 water bottle (white)",

                pricePerPiece: 14,
              },

              {
                line_item_id: 1031,

                lineItemName: "spin4 water bottle (teal)",

                pricePerPiece: 8,
              },

              {
                line_item_id: 1032,

                lineItemName: "spin4 bike signs",

                pricePerPiece: 4,
              },

              {
                line_item_id: 1033,

                lineItemName: "pint glass",

                pricePerPiece: 8,
              },

              {
                line_item_id: 1034,

                lineItemName: "volunteer & event staff shirts",

                pricePerPiece: 7,
              },

              {
                line_item_id: 1035,

                lineItemName: "spin4 headband",

                pricePerPiece: 3,
              },

              {
                line_item_id: 1036,

                lineItemName: "spin4 drawstring bag",

                pricePerPiece: 4,
              },

              {
                line_item_id: 1037,

                lineItemName: "socks/lagacy rider gift",

                pricePerPiece: 3,
              },

              {
                line_item_id: 1038,

                lineItemName: "VIP $2500 jacket",

                pricePerPiece: 23,
              },

              {
                line_item_id: 1039,

                lineItemName: "VIPs $5000 joggers",

                pricePerPiece: 26,
              },

              {
                line_item_id: 1040,

                lineItemName: "VIP $7500 gym bag",

                pricePerPiece: 48,
              },

              {
                line_item_id: 1041,

                lineItemName: "VIP $10,000 gift card",

                pricePerPiece: 100,
              },

              {
                line_item_id: 1042,

                lineItemName: "Inner circle bracelets",

                pricePerPiece: 0,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    section: "Third",

    eventName: "Event 1",

    categoryList: [
      {
        cat_id: 3,

        categoryName: "Expenses - Breakdown",

        subCategoryList: [
          {
            sub_cat_id: 105,

            subCategoryName: "Indirect Expenses - Total",

            lineItems: [
              {
                line_item_id: 1045,

                lineItemName: "Compensation Total",

                pricePerPiece: 0,
              },

              {
                line_item_id: 1046,

                lineItemName: "Printing  - Expense Code 7125",

                pricePerPiece: 0,
              },

              {
                line_item_id: 1047,

                lineItemName: "Postage - Expense Code 7130",

                pricePerPiece: 0,
              },

              {
                line_item_id: 1048,

                lineItemName: "Shipping - Expense Code 7131",

                pricePerPiece: 0,
              },

              {
                line_item_id: 1049,

                lineItemName: "Bike Rental - Expense Code 7180",

                pricePerPiece: 0,
              },

              {
                line_item_id: 1050,

                lineItemName: "Advertising - Expense Code 7160",

                pricePerPiece: 0,
              },
            ],
          },

          {
            sub_cat_id: 106,

            subCategoryName: "Supplies - Expense Code 7170",

            lineItems: [
              {
                line_item_id: 1051,

                lineItemName: "Event  Signage",

                pricePerPiece: 0,
              },

              {
                line_item_id: 1052,

                lineItemName: "spin4 Tear Drop Flag (fabric cover only)",

                pricePerPiece: 0,
              },

              {
                line_item_id: 1053,

                lineItemName: "spin4 step and repeat (fabric cover only)",

                pricePerPiece: 0,
              },

              {
                line_item_id: 1054,

                lineItemName: "spin4 Table Cover",

                pricePerPiece: 0,
              },

              {
                line_item_id: 1055,

                lineItemName: "Folding Table",

                pricePerPiece: 0,
              },

              {
                line_item_id: 1056,

                lineItemName: "Dolly/2-wheel cart",

                pricePerPiece: 0,
              },

              {
                line_item_id: 1057,

                lineItemName: "selfie station supplies",

                pricePerPiece: 0,
              },

              {
                line_item_id: 1058,

                lineItemName: "Gear for committee members",

                pricePerPiece: 0,
              },

              {
                line_item_id: 1059,

                lineItemName: "Gear for Volunteers",

                pricePerPiece: 0,
              },

              {
                line_item_id: 1060,

                lineItemName: "Gear for Honorees",

                pricePerPiece: 0,
              },

              {
                line_item_id: 1061,

                lineItemName: "Gear for Staff",

                pricePerPiece: 0,
              },

              {
                line_item_id: 1062,

                lineItemName: "Additional Marketing Supplies",

                pricePerPiece: 0,
              },

              {
                line_item_id: 1063,

                lineItemName: "General Supplies",

                pricePerPiece: 0,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    section: "Fourth",
    eventName: "Event1",
    categoryList: [
      {
        cat_id: 10,
        categoryName: "Printing",
        subCategoryList: [
          {
            sub_cat_id: 109,
            subCategoryName: "dummy",
            lineItems: [
              {
                line_item_id: 1007,
                lineItemName: "POP (Palm Cards)",
                pricePerPiece: "0.75",
              },
            ],
          },
        ],
      },
    ],
  },
];

export const teamChallengeStructure = [
  {
    section: "First",

    eventName: "Event 1",

    categoryList: [
      {
        cat_id: 1,

        categoryName: "dummy",

        subCategoryList: [
          {
            sub_cat_id: 100,

            subCategoryName: "dummy",

            lineItems: [
              {
                line_item_id: 1000,

                lineItemName: "Event Date:",
              },

              {
                line_item_id: 1001,

                lineItemName: "Subledger Code:",
              }
            ]
          }
        ]
      },
      {
        cat_id: 2,

        categoryName: "Total Gross Revenue",

        subCategoryList: [
          {
            sub_cat_id: 101,

            subCategoryName: "dummy",

            lineItems: [
              {
                line_item_id: 1002,

                lineItemName: "Registered Participant Goal",
              },

              {
                line_item_id: 1003,

                lineItemName: "Total Completers",
              },
              {
                line_item_id: 1004,

                lineItemName: "Retention%",
              }
            ]
          },
          {
            sub_cat_id: 102,

            subCategoryName: "Total ParticiPant Revenue",

            lineItems: [
              {
                line_item_id: 1005,

                lineItemName: "Registration fees -5015",
              },

              {
                line_item_id: 1006,

                lineItemName: "Donations - 5000",
              }
            ]
          }
        ]
      },
      
    ]
  }
]

export const takeStepsHeader = [
  {
    cat_id: 1,

    categoryName: "dummy",

    subCategoryList: [
      {
        sub_cat_id: 100,

        subCategoryName: "dummy",

        lineItems: [
          {
            line_item_id: 3000,

            lineItemName: "Gross Revenue",
          },
          {
            line_item_id: 3001,

            lineItemName: "DDBs",
          },
          {
            line_item_id: 3002,

            lineItemName: "Net Revenue",
          },
          {
            line_item_id: 3003,

            lineItemName: "Net Revenue Margin",
          },
          {
            line_item_id: 3004,

            lineItemName: "Indirect Expenses",
          },
          {
            line_item_id: 3005,

            lineItemName: "Net Income",
          }
        ]
      }
    ]
  },
]
export const takeStepsStructure = [
  {
    section: "First",

    eventName: "Event 1",

    categoryList: [
      {
        cat_id: 1,

        categoryName: "dummy",

        subCategoryList: [
          {
            sub_cat_id: 100,

            subCategoryName: "dummy",
            

            lineItems: [
              {
                line_item_id: 2000,

                lineItemName: "",
                takeStepsOverHead:'Total Steps Overhead',
                chapterTotal:'Chapter Total',
                walkColumn1:'Enter Location Name',
                walkColumn2:'Enter Location Name'

              },
              {
                line_item_id: 1000,

                lineItemName: "Event Date:",
                walkColumn1:'Enter Date',
                walkColumn2:'Notes'
              },
              {
                line_item_id: 1001,

                lineItemName: "Staff",
                walkColumn1:'Enter Lead Staff'
              },
              {
                line_item_id: 2001,

                lineItemName: "Subledger Code:",
                takeStepsOverHead:'07000',
                walkColumn1:'Enter Subledger'
              }
            ]
          }
        ]
      },
      {
        cat_id: 2,

        categoryName: "Total Gross Revenue",

        subCategoryList: [
          {
            sub_cat_id: 101,

            subCategoryName: "dummy",

            lineItems: [
              {
                line_item_id: 1002,

                lineItemName: "Registered Participant Goal",
              },

              {
                line_item_id: 1003,

                lineItemName: "Total Completers",
              },
              {
                line_item_id: 1004,

                lineItemName: "Retention%",
              }
            ]
          },
          {
            sub_cat_id: 102,

            subCategoryName: "Total ParticiPant Revenue",

            lineItems: [
              {
                line_item_id: 1005,

                lineItemName: "Registration fees -5015",
              },

              {
                line_item_id: 1006,

                lineItemName: "Donations - 5000",
              }
            ]
          }
        ]
      },
      
    ]
  }
]


export const headerConstant = {
  section: "Header",
  eventName: "Event1",
  categoryList: [
    {
      cat_id: null,
      categoryName: null,
      subCategoryList: [
        {
          sub_cat_id: null,
          subCategoryName: null,
          lineItems: [
            {
              line_item_id: 3333,
              lineItemName: "Fundraising Minimum - Regular Bikes:",
              pricePerPiece: null,
            },
            {
              line_item_id: 3334,
              lineItemName: "Fundraising Minimum - VIP Bikes:",
              pricePerPiece: null,
            },
            {
              line_item_id: 3335,
              lineItemName: "Fundraising Minimum - Free Agents:",
              pricePerPiece: null,
            },
            {
              line_item_id: 3336,
              lineItemName: "Regular Bike Budget:",
              pricePerPiece: null,
            },
            {
              line_item_id: 3337,
              lineItemName: "VIP Bike Budget:",
              pricePerPiece: null,
            },
            {
              line_item_id: 3338,
              lineItemName: "Sponsorship Budget:",
              pricePerPiece: null,
            },
            {
              line_item_id: 3339,
              lineItemName: "Revenue Budget:",
              pricePerPiece: null,
            },
          ],
        },
      ],
    },
  ],
};
export const pageStructureConstant = [
  {
    createdDate: null,

    lastModifiedDate: null,

    lastModifiedBy: null,

    deleteFlag: false,

    id: "C1",

    section: "First",

    categoryName: "FY19 Budgeted Gross Revenue",

    eventName: "Event 1",

    subCategoryList: [
      {
        createdDate: null,

        lastModifiedDate: null,

        lastModifiedBy: null,

        deleteFlag: false,

        id: "S1",

        subCategoryName: "Budgeted Participant Revenue",

        lineItems: [
          {
            createdDate: null,

            lastModifiedDate: null,

            lastModifiedBy: null,

            deleteFlag: false,

            id: 1,

            lineItemName: "Total Bike Goal",

            pricePerPiece: null,
          },

          {
            createdDate: null,

            lastModifiedDate: null,

            lastModifiedBy: null,

            deleteFlag: false,

            id: 2,

            lineItemName: "Budgeted Bike Goal - Regular",

            pricePerPiece: null,
          },

          {
            createdDate: null,

            lastModifiedDate: null,

            lastModifiedBy: null,

            deleteFlag: false,

            id: 3,

            lineItemName: "Budgeted Bike Goal - VIP",

            pricePerPiece: null,
          },

          {
            createdDate: null,

            lastModifiedDate: null,

            lastModifiedBy: null,

            deleteFlag: false,

            id: 4,

            lineItemName: "Free Agent Teammates",

            pricePerPiece: null,
          },

          {
            createdDate: null,

            lastModifiedDate: null,

            lastModifiedBy: null,

            deleteFlag: false,

            id: 5,

            lineItemName:
              "Total number of participants (bikes x4 + free agents)",

            pricePerPiece: null,
          },

          {
            createdDate: null,

            lastModifiedDate: null,

            lastModifiedBy: null,

            deleteFlag: false,

            id: 6,

            lineItemName: "Committee Member Bikes (of total)",

            pricePerPiece: null,
          },

          {
            createdDate: null,

            lastModifiedDate: null,

            lastModifiedBy: null,

            deleteFlag: false,

            id: 7,

            lineItemName: "Corporate Team Bikes (of total)",

            pricePerPiece: null,
          },

          {
            createdDate: null,

            lastModifiedDate: null,

            lastModifiedBy: null,

            deleteFlag: false,

            id: 8,

            lineItemName: "Reg fee per bike",

            pricePerPiece: null,
          },

          {
            createdDate: null,

            lastModifiedDate: null,

            lastModifiedBy: null,

            deleteFlag: false,

            id: 9,

            lineItemName: "Budgeted Reg Fees",

            pricePerPiece: null,
          },

          {
            createdDate: null,

            lastModifiedDate: null,

            lastModifiedBy: null,

            deleteFlag: false,

            id: 10,

            lineItemName: "Expected Retention",

            pricePerPiece: null,
          },

          {
            createdDate: null,

            lastModifiedDate: null,

            lastModifiedBy: null,

            deleteFlag: false,

            id: 11,

            lineItemName: "Fundraising Minimum - Regular",

            pricePerPiece: null,
          },

          {
            createdDate: null,

            lastModifiedDate: null,

            lastModifiedBy: null,

            deleteFlag: false,

            id: 12,

            lineItemName: "Fundraising Minimum - VIP",

            pricePerPiece: null,
          },

          {
            createdDate: null,

            lastModifiedDate: null,

            lastModifiedBy: null,

            deleteFlag: false,

            id: 13,

            lineItemName: "Fundraising Minimum - Free Agent",

            pricePerPiece: null,
          },
        ],
      },
    ],
  },
];

// export const pageStructureConstant = [
//     {
//         ledger: 'FY19 Budgeted Gross Revenue',
//         tableColumns: tableColumns1,
//         background: 'lightgrey',
//         eventName:['Event 1','Event 2','Grand Total'],
//         subLedger: [
//             {
//                 title: 'Budgeted Participant Revenue',
//                 listItems: initialRows1,
//                 className: '',
//             },
//             {
//                 title: 'Budgeted Other Revenue',
//                 listItems: initialRows1v2,
//                 className: '',
//             }
//         ]
//     },
//     {
//         ledger: '',
//         tableColumns: tableColumns1,
//         background: 'lightgrey',
//         eventName:['Event 1','Event 2','Grand Total'],
//         subLedger: [
//             {
//                 title: '',
//                 listItems: initialRows2,
//                 className: '',
//             }
//         ]
//     },
//     {
//         ledger: 'Direct Donor Benefit (DDB) Expenses Total',
//         tableColumns: tableColumns2,
//         background: 'lightgrey',
//         eventName:['Event 1','Event 2','Grand Total'],
//         subLedger: [
//             {
//                 title: '',
//                 listItems: initialRows4,
//                 className: '',
//             }
//         ]
//     },
//     {
//         ledger: 'Participant DDB Expense Total',
//         tableColumns: tableColumns1,
//         background: 'lightgrey',
//         eventName:['Event 1','Event 2','Grand Total'],
//         subLedger: [
//             {
//                 title: 'Food & Premises - DDB Code 5040',
//                 listItems: initialRows3,
//                 className: '',
//             },
//             {
//                 title: 'Incentives (Premiums) - DDB Code 5065',
//                 listItems: initialRows3v2,
//                 className: '',
//             }
//         ]
//     },
//     {
//         ledger: 'Other DDBs Total',
//         tableColumns: tableColumns3,
//         background: 'lightgrey',
//         eventName:['Event 1','Event 2','Grand Total'],
//         subLedger: [
//             {
//                 title: 'Other DDBs - DDB Code 5085',
//                 listItems: initialRows5,
//                 className: '',
//             }
//         ]
//     },
//     {
//         ledger: 'Premiums DDB Expense - DDB Code 5065',
//         tableColumns: tableColumns4,
//         eventName:['Event 1','Event 2','Grand Total'],
//         background: 'lightgrey',
//         subLedger: [
//             {
//                 title: '',
//                 listItems: initialRows6,
//                 className: '',
//             }
//         ]
//     },
//     {
//         ledger: 'Indirect Expenses - Total',
//         tableColumns: tableColumns1,
//         eventName:['Event 1','Event 2','Grand Total'],
//         background: 'lightgrey',
//         subLedger: [
//             {
//                 title: '',
//                 listItems: initialRows7,
//                 className: '',
//             }
//         ]
//     },
//     {
//         ledger: 'Printing',
//         tableColumns: tableColumns5,
//         eventName:['Event 1','Event 2','Grand Total'],
//         background: 'lightgrey',
//         subLedger: [
//             {
//                 title: '',
//                 listItems: initialRows8,
//                 className: '',
//             }
//         ]
//     },
//     {
//         ledger: 'Postage & Shipping',
//         tableColumns: tableColumns5,
//         eventName:['Event 1','Event 2','Grand Total'],
//         background: 'lightgrey',
//         subLedger: [
//             {
//                 title: '',
//                 listItems: initialRows9,
//                 className: '',
//             }
//         ]
//     },
//     {
//         ledger: 'Freight Shipping',
//         tableColumns: tableColumns5,
//         eventName:['Event 1','Event 2','Grand Total'],
//         background: 'lightgrey',
//         subLedger: [
//             {
//                 title: '',
//                 listItems: initialRows10,
//                 className: '',
//             }
//         ]
//     },
//     {
//         ledger: 'Bike Rentals',
//         tableColumns: tableColumns5,
//         eventName:['Event 1','Event 2','Grand Total'],
//         background: 'lightgrey',
//         subLedger: [
//             {
//                 title: '',
//                 listItems: initialRows11,
//                 className: '',
//             }
//         ]
//     },
//     {
//         ledger: 'Advertising',
//         tableColumns: tableColumns5,
//         eventName:['Event 1','Event 2','Grand Total'],
//         background: 'lightgrey',
//         subLedger: [
//             {
//                 title: '',
//                 listItems: initialRows12,
//                 className: '',
//             }
//         ]
//     },
//     {
//         ledger: 'Meetings & Travel',
//         tableColumns: tableColumns5,
//         eventName:['Event 1','Event 2','Grand Total'],
//         background: 'lightgrey',
//         subLedger: [
//             {
//                 title: 'Sponsor Meetings',
//                 listItems: initialRows13,
//                 className: '',
//             },
//             {
//                 title: 'Committee Meetings',
//                 listItems: initialRows14,
//                 className: '',
//             },
//             {
//                 title: 'Launch Party',
//                 listItems: initialRows15,
//                 className: '',
//             },
//             {
//                 title: 'Coffee Meetings',
//                 listItems: initialRows16,
//                 className: '',
//             }
//         ]
//     },
//     {
//         ledger: 'Mileage',
//         tableColumns: tableColumns5,
//         eventName:['Event 1','Event 2','Grand Total'],
//         background: 'lightgrey',
//         subLedger: [
//             {
//                 title: '',
//                 listItems: initialRows17,
//                 className: ''
//             }
//         ]
//     },

// ]

// export const initialTables = [
//     { heading: 'FY19 Budgeted Gross Revenue', subHeadings: ['Budgeted Participant Revenue', 'Budgeted Other Revenue'], background: 'lightgrey', initialRows: [initialRows1, initialRows1v2], tableColumns: tableColumns1 },
//     { heading: '', subHeadings: [], background: 'lightgrey', initialRows: [initialRows2], tableColumns: tableColumns1 },
//     { heading: 'Direct Donor Benefit (DDB) Expenses Total', subHeadings: [], background: 'lightgrey', initialRows: [initialRows4], tableColumns: tableColumns2 },
//     { heading: 'Participant DDB Expense Total', subHeadings: ['Food & Premises - DDB Code 5040', 'Incentives (Premiums) - DDB Code 5065'], background: 'lightgrey', initialRows: [initialRows3, initialRows3v2], tableColumns: tableColumns1 },
//     { heading: 'Other DDBs Total', subHeadings: ['Other DDBs - DDB Code 5085'], background: 'lightgrey', initialRows: [initialRows5], tableColumns: tableColumns3 },
//     { heading: 'Premiums DDB Expense - DDB Code 5065', subHeadings: [], background: 'lightgrey', initialRows: [initialRows6], tableColumns: tableColumns4 },
//     { heading: 'Indirect Expenses - Total', subHeadings: [], background: 'lightgrey', initialRows: [initialRows7], tableColumns: tableColumns1 },
//     { heading: '', subHeadings: ['Printing','Postage & Shipping','Freight Shipping','Bike Rentals','Advertising'],
//     background: 'lightgrey', initialRows: [initialRows8,initialRows9,initialRows10,initialRows11,initialRows12], tableColumns: tableColumns5,subHeadingClassName:'backgroundYellow' },

// ]
