import {
    randomId,
} from '@mui/x-data-grid-generator';


export const tableColumns1 = [
    { field: 'name', headerName: '', width: '400', editable: true },
    // { field: 'valueEvent1', headerName: '$ (Event 1)', type: 'number', width: 180, editable: true, align: 'center', headerAlign: 'center' }
]

export const tableColumns2 = [
    { field: 'name', headerName: '', width: '400', editable: true },
    { field: 'account', headerName: 'Account', width: '180', editable: true },
    // { field: 'valueEvent1', headerName: '$ (Event 1)', type: 'number', width: 180, editable: true, align: 'center', headerAlign: 'center' }
]

export const tableColumns3 = [
    { field: 'name', headerName: '', width: '400', editable: true },
    { field: 'explain', headerName: 'explain', width: '180', editable: true },
    // { field: 'valueEvent1', headerName: '$ (Event 1)', type: 'number', width: 180, editable: true, align: 'center', headerAlign: 'center' }
]

export const tableColumns4 = [
    { field: 'name', headerName: '', width: '400', editable: true },
    { field: 'pricePerPiece', headerName: 'Price per piece', width: '180', editable: true, align: 'center', headerAlign: 'center' ,
    cellClassName: (params) => {
        if (params.value !== null) {
          return 'bg_darkGray';
        }}},
    { field: 'quantity', headerName: '', width: 180, editable: true, align: 'center' },
    // { field: 'valueEvent1', headerName: '(Event 1)', type: 'number', width: 180, editable: true, align: 'center', headerAlign: 'center' }
]

export const tableColumns5 = [
    { field: 'name', headerName: '', width: '400', editable: true },
    { field: 'pricePerPieceText', headerName: '', width: '180', editable: true, align: 'center' },
    { field: 'pricePerPiece', headerName: 'Price Per Piece', width: 180, editable: true, align: 'center', headerAlign: 'center',
    cellClassName: (params) => {
        if (params.value !== null) {
          return 'bg_darkGray';
        }}},
    { field: 'numberOfPiecesText', headerName: '', width: '180', editable: true, align: 'center' },
    // { field: 'valueEvent1', headerName: '(Event 1)', type: 'number', width: 180, editable: true, align: 'center', headerAlign: 'center' }
]


export const initialRows1 = [
    {
        id: randomId(),
        name: "Total Bike Goal",
        valueEvent1: null

    },
    {
        id: randomId(),
        name: "Budgeted Bike Goal - Regular",
        valueEvent1: null

    },
    {
        id: randomId(),
        name: "Budgeted Bike Goal - VIP",
        valueEvent1: null

    },
    {
        id: randomId(),
        name: "Free Agent Teammates",
        valueEvent1: null

    },
    {
        id: randomId(),
        name: "Total number of participants (bikes x4 + free agents)",
        valueEvent1: null

    },
    {
        id: randomId(),
        name: "Committee Member Bikes (of total)",
        valueEvent1: null

    },
    {
        id: randomId(),
        name: "Corporate Team Bikes (of total)",
        valueEvent1: null

    },
    {
        id: randomId(),
        name: "Reg fee per bike",
        valueEvent1: null

    },
    {
        id: randomId(),
        name: "Budgeted Reg Fees",
        valueEvent1: null

    },
    {
        id: randomId(),
        name: "Expected Retention",
        valueEvent1: null

    },
    {
        id: randomId(),
        name: "Fundraising Minimum - Regular",
        valueEvent1: null

    },
    {
        id: randomId(),
        name: "Fundraising Minimum - VIP",
        valueEvent1: null

    },
    {
        id: randomId(),
        name: "Fundraising Minimum - Free Agent",
        valueEvent1: null

    }
];
export const initialRows1v2 = [
    {
        id: randomId(),
        name: "Sponsorship",
        valueEvent1: null

    },
    {
        id: randomId(),
        name: "General Donations (not associated with a team)",
        valueEvent1: null

    },
    {
        id: randomId(),
        name: "General Donations at Event",
        valueEvent1: null

    },
    {
        id: randomId(),
        name: "In Excess of Minimum",
        valueEvent1: null

    },
    {
        id: randomId(),
        name: "Raffle/Auction Sales",
        valueEvent1: null

    },
    {
        id: randomId(),
        name: "Other:",
        valueEvent1: null

    }
]

export const initialRows2 = [
    {
        id: randomId(),
        name: "Total DDB Expenses",
        valueEvent1: null

    },
    {
        id: randomId(),
        name: "Percentage of funds spent on DDB - MUST be less than 10%.  Try to have 8% or less",
        valueEvent1: null

    },
    {
        id: randomId(),
        name: "Total Indirect Expenses",
        valueEvent1: null

    },
    {
        id: randomId(),
        name: "Percentage of funds spent on Expenses",
        valueEvent1: null

    },
    {
        id: randomId(),
        name: "Total Net Income",
        value: 23,

    },
    {
        id: randomId(),
        name: "Percentage of total expenses (DDB and Indirect Expenses) MUST BE less than 12%",
        valueEvent1: null

    }];

export const initialRows3 = [
    {
        id: randomId(),
        name: "Number of Participants",
        valueEvent1: null

    },
    {
        id: randomId(),
        name: "Instructor payment",
        valueEvent1: null

    },
    {
        id: randomId(),
        name: "Facility Fees (i.e. studio rental)",
        valueEvent1: null

    },
    {
        id: randomId(),
        name: "Food & Beverage",
        valueEvent1: null

    },
    {
        id: randomId(),
        name: "Per Participant",
        value: 23,

    },
    {
        id: randomId(),
        category: "Celebration",
        name:"Total",
        value: null
    }
]

export const initialRows3v2 = [
    {
        id: randomId(),
        name: "Per Participant",
        value: 23,

    },
    {
        id: randomId(),
        category:"Participant Premiums/Incentives",
        name: "Total",
        value: null
    }
]
export const initialRows4 = [
    {
        id: randomId(),
        name: "DDB - Premises & Food",
        account: "5040",
        valueEvent1: null

    },
    {
        id: randomId(),
        name: "DDB - Incentives (Premiums)",
        account: "5065",
        valueEvent1: null

    },
    {
        id: randomId(),
        name: "DDB - Other",
        account: "5085",
        valueEvent1: null

    },
]
export const initialRows5 = [
    {
        id: randomId(),
        name: "Other DDB's",
        explain: null,
        valueEvent1: null
    }
]

export const initialRows6 = [
    {
        id: randomId(),
        name: "spin4 event day t-shirt (women)",
        pricePerPiece: '$ 13.20',
        quantity: 'Quantity:',
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "spin4 event day tank top (women)",
        pricePerPiece: '$ 13.00',
        quantity: 'Quantity:',
        valueEvent1: null
    }, {
        id: randomId(),
        name: "spin4 event day t-shirt (men)",
        pricePerPiece: '$ 13.00',
        quantity: 'Quantity:',
        valueEvent1: null
    }, {
        id: randomId(),
        name: "spin4 towel",
        pricePerPiece: '$ 3.87',
        quantity: 'Quantity:',
        valueEvent1: null
    }, {
        id: randomId(),
        name: "spin4 sunglasses",
        pricePerPiece: '$ 2.20',
        quantity: 'Quantity:',
        valueEvent1: null
    }, {
        id: randomId(),
        name: "spin4 water bottle (white)",
        pricePerPiece: '$ 14.08',
        quantity: 'Quantity:',
        valueEvent1: null
    }, {
        id: randomId(),
        name: "spin4 water bottle (teal)",
        pricePerPiece: '$ 8.71',
        quantity: 'Quantity:',
        valueEvent1: null
    }, {
        id: randomId(),
        name: "spin4 bike signs",
        pricePerPiece: '$ 4.23',
        quantity: 'Quantity:',
        valueEvent1: null
    }, {
        id: randomId(),
        name: "pint glass",
        pricePerPiece: '$ 8.92',
        quantity: 'Quantity:',
        valueEvent1: null
    }, {
        id: randomId(),
        name: "spin4 headband",
        pricePerPiece: '$ 3.43',
        quantity: 'Quantity:',
        valueEvent1: null
    }, {
        id: randomId(),
        name: "spin4 drawstring bag",
        pricePerPiece: '$  $4.27',
        quantity: 'Quantity:',
        valueEvent1: null
    }, {
        id: randomId(),
        name: "socks/lagacy rider gift",
        pricePerPiece: '$ 3.45',
        quantity: 'Quantity:',
        valueEvent1: null
    }, {
        id: randomId(),
        name: "VIP $2500 jacket",
        pricePerPiece: '$  $23.75',
        quantity: 'Quantity:',
        valueEvent1: null
    }, {
        id: randomId(),
        name: "VIPs $5000 joggers",
        pricePerPiece: '$ 26.75',
        quantity: 'Quantity:',
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "VIP $7500 gym bag",
        pricePerPiece: '$ 48.06',
        quantity: 'Quantity:',
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "VIP $10,000 gift card",
        pricePerPiece: '$ 100.00',
        quantity: 'Quantity:',
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "Inner circle bracelets",
        pricePerPiece: '$ 0.68',
        quantity: 'Quantity:',
        valueEvent1: null
    }
]

export const initialRows7 = [
    {
        id: randomId(),
        name: "Compensation Total",
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "Printing  - Expense Code 7125",
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "Postage - Expense Code 7130",
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "Shipping - Expense Code 7131",
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "Bike Rental - Expense Code 7180",
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "Advertising - Expense Code 7160",
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "Meetings & Travel Total",
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "Hotel / Premises - Expense Code 7110",
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "Meals - Expense Code - 7115",
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "Other - Expense Code - 7120",
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "Air and Ground (Mileage) - Expense Code 7105",
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "Supplies - Expense Code 7170",
        valueEvent1: null
    }
]

export const initialRows8 = [
    {
        id: randomId(),
        name: "POP (Palm Cards)",
        pricePerPieceText: 'Price per piece:',
        pricePerPiece: '$0.75',
        numberOfPiecesText: 'Number of pieces:',
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "Printing - Postcards to Leads",
        pricePerPieceText: 'Price per piece:',
        pricePerPiece: '$0.50',
        numberOfPiecesText: 'Number of pieces:',
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "Printing - Save the Date Postcards to TC House List",
        pricePerPieceText: 'Price per piece:',
        pricePerPiece: '$0.50',
        numberOfPiecesText: 'Number of pieces:',
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "Printing - Honoree Postcards to Team",
        pricePerPieceText: 'Price per piece:',
        pricePerPiece: ' $0.50',
        numberOfPiecesText: 'Number of pieces:',
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "Printing for Acknowledgement Letters",
        pricePerPieceText: 'Price per piece:',
        pricePerPiece: '$0.02',
        numberOfPiecesText: 'Number of pieces:',
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "spin4 Tear-Off Flyer",
        pricePerPieceText: 'Price per piece:',
        pricePerPiece: '$0.70',
        numberOfPiecesText: 'Number of pieces:',
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "spin4 Posters",
        pricePerPieceText: 'Price per piece:',
        pricePerPiece: '$15.00',
        numberOfPiecesText: 'Number of posters:',
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "Miscellaneous Printing",
        pricePerPieceText: 'Price per item:',
        pricePerPiece: '$0.75',
        numberOfPiecesText: 'Number of items:',
        valueEvent1: null
    }
]
export const initialRows9 = [
    {
        id: randomId(),
        name: "Postage - Postcards to Leads",
        pricePerPieceText: null,
        pricePerPiece: '$0.34',
        numberOfPiecesText: 'Quantity:',
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "Postage - Save the Date Postcards to TC House List",
        pricePerPieceText: null,
        pricePerPiece: '$0.34',
        numberOfPiecesText: 'Quantity:',
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "Postage - Honoree Postcards to Team",
        pricePerPieceText: null,
        pricePerPiece: '$0.34',
        numberOfPiecesText: 'Quantity:',
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "Postage for Acknowledgement Letters",
        pricePerPieceText: null,
        pricePerPiece: '$0.49',
        numberOfPiecesText: 'Quantity:',
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "Shipping",
        pricePerPieceText: null,
        pricePerPiece: null,
        numberOfPiecesText: null,
        valueEvent1: null
    },
    {
        id: randomId(),
        name: null,
        pricePerPieceText: null,
        pricePerPiece: null,
        numberOfPiecesText: 'Shipping - palm cards',
        valueEvent1: null
    },
    {
        id: randomId(),
        name: null,
        pricePerPieceText: null,
        pricePerPiece: null,
        numberOfPiecesText: 'Shipping - Posters',
        valueEvent1: null
    },
    {
        id: randomId(),
        name: null,
        pricePerPieceText: null,
        pricePerPiece: null,
        numberOfPiecesText: 'Shipping CI Group Incentives',
        valueEvent1: null
    },
    {
        id: randomId(),
        name: null,
        pricePerPieceText: null,
        pricePerPiece: null,
        numberOfPiecesText: 'Shipping Will Enterprise',
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "Postage Miscellaneous",
        pricePerPieceText: null,
        pricePerPiece: null,
        numberOfPiecesText: null,
        valueEvent1: null
    },
]

export const initialRows10 = [
    {
        id: randomId(),
        name: "Freight Shipping - Bikes",
        pricePerPieceText: null,
        pricePerPiece: null,
        numberOfPiecesText: null,
        valueEvent1: null
    }]

export const initialRows11 = [
    {
        id: randomId(),
        name: "Rental of Bikes",
        pricePerPieceText: null,
        pricePerPiece: null,
        numberOfPiecesText: null,
        valueEvent1: null
    }]

export const initialRows12 = [
    {
        id: randomId(),
        name: "Online Paid Advertising",
        pricePerPieceText: 'where?',
        pricePerPiece: null,
        numberOfPiecesText: 'Full Price',
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "Paid Advertising 1",
        pricePerPieceText: 'where?',
        pricePerPiece: null,
        numberOfPiecesText: 'Full Price',
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "Paid Advertising 2",
        pricePerPieceText: 'where?',
        pricePerPiece: null,
        numberOfPiecesText: 'Full Price',
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "Radio PSA 1",
        pricePerPieceText: 'where?',
        pricePerPiece: null,
        numberOfPiecesText: 'Full Price',
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "Radio PSA 2",
        pricePerPieceText: 'where?',
        pricePerPiece: null,
        numberOfPiecesText: 'Full Price',
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "TV PSA 1",
        pricePerPieceText: 'where?',
        pricePerPiece: null,
        numberOfPiecesText: 'Full Price',
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "Other Advertising",
        pricePerPieceText: null,
        pricePerPiece: null,
        numberOfPiecesText: 'Full Price',
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "Other Advertising",
        pricePerPieceText: null,
        pricePerPiece: null,
        numberOfPiecesText: 'Full Price',
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "Other Advertising",
        pricePerPieceText: null,
        pricePerPiece: null,
        numberOfPiecesText: 'Full Price',
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "Other Advertising",
        pricePerPieceText: null,
        pricePerPiece: null,
        numberOfPiecesText: 'Full Price',
        valueEvent1: null
    }
]
export const initialRows13 = [
    {
        id: randomId(),
        name: "Food/Bev - 53830",
        pricePerPieceText: null,
        pricePerPiece: null,
        numberOfPiecesText: null,
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "Supplies",
        pricePerPieceText: null,
        pricePerPiece: null,
        numberOfPiecesText: null,
        valueEvent1: null
    }
]

export const initialRows14 = [
    {
        id: randomId(),
        name: "Food/Bev - 53830",
        pricePerPieceText: null,
        pricePerPiece: null,
        numberOfPiecesText: null,
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "Facility / Room Rental - 53810",
        pricePerPieceText: null,
        pricePerPiece: null,
        numberOfPiecesText: null,
        valueEvent1: null
    }
]

export const initialRows15 = [
    {
        id: randomId(),
        name: "Facility / Room Rental - 53810",
        pricePerPieceText: null,
        pricePerPiece: null,
        numberOfPiecesText: null,
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "A / V Equipment & Services - 53840",
        pricePerPieceText: null,
        pricePerPiece: null,
        numberOfPiecesText: null,
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "Food/Bev - 53830",
        pricePerPieceText: null,
        pricePerPiece: null,
        numberOfPiecesText: null,
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "Decorations - 53850",
        pricePerPieceText: null,
        pricePerPiece: null,
        numberOfPiecesText: null,
        valueEvent1: null
    }
]

export const initialRows16 = [
    {
        id: randomId(),
        name: "Coffee meetings with Leads",
        pricePerPieceText: "Price per coffee",
        pricePerPiece: '$10',
        numberOfPiecesText: "Number Of Meetings:",
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "Coffee meetings with teammates",
        pricePerPieceText: "Price per coffee",
        pricePerPiece: '$10',
        numberOfPiecesText: "Number Of Meetings:",
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "Coffee meetings with committee candidates",
        pricePerPieceText: "Price per coffee",
        pricePerPiece: '$10',
        numberOfPiecesText: "Number Of Meetings:",
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "Coffee meetings with gym/studio",
        pricePerPieceText: "Price per coffee",
        pricePerPiece: '$10',
        numberOfPiecesText: "Number Of Meetings:",
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "Coffee meetings - Other",
        pricePerPieceText: "Price per coffee",
        pricePerPiece: '$10',
        numberOfPiecesText: "Number Of Meetings:",
        valueEvent1: null
    }
]

export const initialRows17 = [
    {
        id: randomId(),
        name: "Mileage for Endurance Managers - Marketing and Recruitment",
        pricePerPieceText: "Price per mile",
        pricePerPiece: '$ 0.56',
        numberOfPiecesText: "Anticipated Miles",
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "Mileage for Endurance Manager - Committee Meetings",
        pricePerPieceText: "Price per mile",
        pricePerPiece: '$ 0.56',
        numberOfPiecesText: "Anticipated Miles",
        valueEvent1: null
    },
    {
        id: randomId(),
        name: "Mileage for Endurance Manager - Other Meetings",
        pricePerPieceText: "Price per mile",
        pricePerPiece: '$ 0.56',
        numberOfPiecesText: "Anticipated Miles",
        valueEvent1: null
    }
]



// export const initialTables = [
//     { heading: 'FY19 Budgeted Gross Revenue', subHeadings: ['Budgeted Participant Revenue', 'Budgeted Other Revenue'], background: 'lightgrey', initialRows: [initialRows1, initialRows1v2], tableColumns: tableColumns1 },
//     { heading: '', subHeadings: [], background: 'lightgrey', initialRows: [initialRows2], tableColumns: tableColumns1 },
//     { heading: 'Direct Donor Benefit (DDB) Expenses Total', subHeadings: [], background: 'lightgrey', initialRows: [initialRows4], tableColumns: tableColumns2 },
//     { heading: 'Participant DDB Expense Total', subHeadings: ['Food & Premises - DDB Code 5040', 'Incentives (Premiums) - DDB Code 5065'], background: 'lightgrey', initialRows: [initialRows3, initialRows3v2], tableColumns: tableColumns1 },
//     { heading: 'Other DDBs Total', subHeadings: ['Other DDBs - DDB Code 5085'], background: 'lightgrey', initialRows: [initialRows5], tableColumns: tableColumns3 },
//     { heading: 'Premiums DDB Expense - DDB Code 5065', subHeadings: [], background: 'lightgrey', initialRows: [initialRows6], tableColumns: tableColumns4 },
//     { heading: 'Indirect Expenses - Total', subHeadings: [], background: 'lightgrey', initialRows: [initialRows7], tableColumns: tableColumns1 },
//     {
//         heading: '', subHeadings: ['Printing', 'Postage & Shipping', 'Freight Shipping', 'Bike Rentals', 'Advertising'],
//         background: 'lightgrey', initialRows: [initialRows8, initialRows9, initialRows10, initialRows11, initialRows12], tableColumns: tableColumns5, subHeadingClassName: 'backgroundYellow'
//     }
// ]

export const pageStructureConstant = [
    {
        ledger: 'FY19 Budgeted Gross Revenue',
        tableColumns: tableColumns1,
        background: 'lightgrey',
        eventName:['Event 1','Event 2','Grand Total'],
        subLedger: [
            {
                title: 'Budgeted Participant Revenue',
                listItems: initialRows1,
                className: '',
            },
            {
                title: 'Budgeted Other Revenue',
                listItems: initialRows1v2,
                className: '',
            }
        ]
    },
    {
        ledger: '',
        tableColumns: tableColumns1,
        background: 'lightgrey',
        eventName:['Event 1','Event 2','Grand Total'],
        subLedger: [
            {
                title: '',
                listItems: initialRows2,
                className: '',
            }
        ]
    },
    {
        ledger: 'Direct Donor Benefit (DDB) Expenses Total',
        tableColumns: tableColumns2,
        background: 'lightgrey',
        eventName:['Event 1','Event 2','Grand Total'],
        subLedger: [
            {
                title: '',
                listItems: initialRows4,
                className: '',
            }
        ]
    },
    {
        ledger: 'Participant DDB Expense Total',
        tableColumns: tableColumns1,
        background: 'lightgrey',
        eventName:['Event 1','Event 2','Grand Total'],
        subLedger: [
            {
                title: 'Food & Premises - DDB Code 5040',
                listItems: initialRows3,
                className: '',
            },
            {
                title: 'Incentives (Premiums) - DDB Code 5065',
                listItems: initialRows3v2,
                className: '',
            }
        ]
    },
    {
        ledger: 'Other DDBs Total',
        tableColumns: tableColumns3,
        background: 'lightgrey',
        eventName:['Event 1','Event 2','Grand Total'],
        subLedger: [
            {
                title: 'Other DDBs - DDB Code 5085',
                listItems: initialRows5,
                className: '',
            }
        ]
    },
    {
        ledger: 'Premiums DDB Expense - DDB Code 5065',
        tableColumns: tableColumns4,
        eventName:['Event 1','Event 2','Grand Total'],
        background: 'lightgrey',
        subLedger: [
            {
                title: '',
                listItems: initialRows6,
                className: '',
            }
        ]
    },
    {
        ledger: 'Indirect Expenses - Total',
        tableColumns: tableColumns1,
        eventName:['Event 1','Event 2','Grand Total'],
        background: 'lightgrey',
        subLedger: [
            {
                title: '',
                listItems: initialRows7,
                className: '',
            }
        ]
    },
    {
        ledger: 'Printing',
        tableColumns: tableColumns5,
        eventName:['Event 1','Event 2','Grand Total'],
        background: 'lightgrey',
        subLedger: [
            {
                title: '',
                listItems: initialRows8,
                className: '',
            }
        ]
    },
    {
        ledger: 'Postage & Shipping',
        tableColumns: tableColumns5,
        eventName:['Event 1','Event 2','Grand Total'],
        background: 'lightgrey',
        subLedger: [
            {
                title: '',
                listItems: initialRows9,
                className: '',
            }
        ]
    },
    {
        ledger: 'Freight Shipping',
        tableColumns: tableColumns5,
        eventName:['Event 1','Event 2','Grand Total'],
        background: 'lightgrey',
        subLedger: [
            {
                title: '',
                listItems: initialRows10,
                className: '',
            }
        ]
    },
    {
        ledger: 'Bike Rentals',
        tableColumns: tableColumns5,
        eventName:['Event 1','Event 2','Grand Total'],
        background: 'lightgrey',
        subLedger: [
            {
                title: '',
                listItems: initialRows11,
                className: '',
            }
        ]
    },
    {
        ledger: 'Advertising',
        tableColumns: tableColumns5,
        eventName:['Event 1','Event 2','Grand Total'],
        background: 'lightgrey',
        subLedger: [
            {
                title: '',
                listItems: initialRows12,
                className: '',
            }
        ]
    },
    {
        ledger: 'Meetings & Travel',
        tableColumns: tableColumns5,
        eventName:['Event 1','Event 2','Grand Total'],
        background: 'lightgrey',
        subLedger: [
            {
                title: 'Sponsor Meetings',
                listItems: initialRows13,
                className: '',
            },
            {
                title: 'Committee Meetings',
                listItems: initialRows14,
                className: '',
            },
            {
                title: 'Launch Party',
                listItems: initialRows15,
                className: '',
            },
            {
                title: 'Coffee Meetings',
                listItems: initialRows16,
                className: '',
            }
        ]
    },
    {
        ledger: 'Mileage',
        tableColumns: tableColumns5,
        eventName:['Event 1','Event 2','Grand Total'],
        background: 'lightgrey',
        subLedger: [
            {
                title: '',
                listItems: initialRows17,
                className: ''
            }
        ]
    },
    
    

]

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
