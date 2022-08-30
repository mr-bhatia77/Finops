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
  { field: "lineItemName", headerName: "x", width: "400", editable: true, cellClassName: "blueAndWhite mediumFontSize", headerClassName: 'blue' },
  { field: "chapterTotal", headerName: "Chapter Total", width: "180", editable: true, headerClassName: 'blueAndWhite mediumFontSize', headerAlign: 'center', cellClassName: 'peach' },
  { field: "enterLocationName", headerName: "Enter Location Name", width: "280", editable: true, headerClassName: 'blueAndWhite mediumFontSize', headerAlign: 'center' },
]

export const takeStepsTableColumns = [
  { field: 'subCategoryName', headerName: '.', width: '300', editable: true, align: 'center', headerAlign: 'center', sortable: false },
  {
    field: "lineItemName",
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
    cellClassName: 'bg_darkGray'
  },
  {
    field: "chapterTotal",
    headerName: ".",
    width: "300",
    editable: true,
    align: "center",
    headerClassName: 'black',
    cellClassName: 'peach'
  },

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
  },]


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

export const takeStepsEventHeaderList = {
  eventHeaderList: [
    {
      location: 'Austin',
      staff: 'jason',
      date: '15-05-2021',
      subledgerCode: '02001',
      id: 1
    },
    {
      location: 'Austin',
      staff: 'jason',
      date: '15-05-2021',
      subledgerCode: '02001',
      id: 1
    }
  ]
}

export const takeStepsMetaData =
{

  cat_id: null,

  categoryName: "dummy",

  subCategoryList: [
    {
      sub_cat_id: 100,

      subCategoryName: "dummy",


      lineItems: [
        {
          line_item_id: 2000,
          lineItemName: "",
          takeStepsOverHead: 'Total Steps Overhead',
          chapterTotal: 'Chapter Total',
          walkColumn1: 'Enter Location Name',
          walkColumn2: 'Enter Location Name'

        },
        {
          line_item_id: 1000,
          lineItemName: "Event Date:",
          walkColumn1: 'Enter Date',
          walkColumn2: 'Notes'
        },
        {
          line_item_id: 1001,

          lineItemName: "Staff",
          walkColumn1: 'Enter Lead Staff'
        },
        {
          line_item_id: 2001,

          lineItemName: "Subledger Code:",
          takeStepsOverHead: '07000',
          walkColumn1: 'Enter Subledger'
        }
      ]
    }
  ]
}

export const takeStepsChapterMetaData =
{

  cat_id: null,

  categoryName: "dummy",

  subCategoryDataList: [
    {
      sub_cat_id: 100,

      subCategoryName: "dummy",


      lineItemDataList: [
        {
          line_item_id: 2000,
          lineItemName: "",
          takeStepsOverHead: 'Total Steps Overhead',
          chapterTotal: 'Chapter Total',
          walkColumn1: 'Enter Location Name',
          walkColumn2: 'Enter Location Name'

        },
        {
          line_item_id: 1000,
          lineItemName: "Event Date:",
          walkColumn1: 'Enter Date',
          walkColumn2: 'Notes'
        },
        {
          line_item_id: 1001,

          lineItemName: "Staff",
          walkColumn1: 'Enter Lead Staff'
        },
        {
          line_item_id: 2001,

          lineItemName: "Subledger Code:",
          takeStepsOverHead: '07000',
          walkColumn1: 'Enter Subledger'
        }
      ]
    }
  ]
}

export const takeStepsStructure = {
  "categoryList": [
    {
      "cat_id": 1,
      "headerFlag": true,
      "categoryName": "Total Gross Revenue",
      "subCategoryList": [
        {
          "sub_cat_id": 1,
          "headerFlag": true,
          "subCategoryName": "Total Number of All Registered Teams",
          "lineItems": [
            {
              "line_item_id": 1,
              "headerFlag": true,
              "lineItemName": "Number of Registered Veteran Mega/A Teams",
              "pricePerPiece": 0
            },
            {
              "line_item_id": 2,
              "headerFlag": false,
              "lineItemName": "Number of Registered Veteran B/C Teams",
              "pricePerPiece": 0
            },
            {
              "line_item_id": 3,
              "headerFlag": false,
              "lineItemName": "Number of Registered New Teams",
              "pricePerPiece": 0
            }
          ]
        },
        {
          "sub_cat_id": 2,
          "headerFlag": false,
          "subCategoryName": "Total Team Revenue (5005)",
          "lineItems": [
            {
              "line_item_id": 4,
              "headerFlag": false,
              "lineItemName": "Revenue from Veteran Mega/A Teams",
              "pricePerPiece": 0
            },
            {
              "line_item_id": 5,
              "headerFlag": false,
              "lineItemName": "Revenue from Veteran B/C Teams ",
              "pricePerPiece": 0
            },
            {
              "line_item_id": 6,
              "headerFlag": false,
              "lineItemName": "Revenue from New Teams",
              "pricePerPiece": 0
            }
          ]
        },
        {
          "sub_cat_id": 3,
          "headerFlag": false,
          "subCategoryName": "Individuals and Other",
          "lineItems": [
            {
              "line_item_id": 7,
              "headerFlag": false,
              "lineItemName": "Revenue from Individuals - 5000",
              "pricePerPiece": 0
            },
            {
              "line_item_id": 8,
              "headerFlag": false,
              "lineItemName": "Other Revenue - 5025",
              "pricePerPiece": 0
            }
          ]
        },
        {
          "sub_cat_id": 4,
          "headerFlag": false,
          "subCategoryName": "Total Sponsor Revenue (5010)",
          "lineItems": [
            {
              "line_item_id": 9,
              "headerFlag": false,
              "lineItemName": "Revenue from Veteran Sponsors",
              "pricePerPiece": 0
            },
            {
              "line_item_id": 10,
              "headerFlag": false,
              "lineItemName": "Revenue from New Sponsors ",
              "pricePerPiece": 0
            }
          ]
        }
      ]
    }
  ]
}

export const takeStepsChapterStructure = {
  "categoryList": [
    {
      "cat_template_id": 1,
      "headerFlag": true,
      "categoryName": "Total Gross Revenue",
      "eventTypeDataList": [
        {
          "id": 1,
          "value": 40000,
          "eventName": "Walk 1"
        }
      ],
      "subCategoryDataList": [
        {
          "sub_cat_template_id": 1,
          "headerFlag": true,
          "subCategoryName": "Total Number of All Registered Teams",
          "eventTypeDataList": [
            {
              "id": 1,
              "value": 10000,
              "eventName": "Walk 1"
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 1,
              "lineItemName": "Number of Registered Veteran Mega/A Teams",
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 1,
                  "value": 1000,
                  "eventName": "Walk 1"
                }
              ],
              "headerFlag": true
            },
            {
              "template_line_item_id": 2,
              "lineItemName": "Number of Registered Veteran B/C Teams",
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 2,
                  "value": 2000,
                  "eventName": "Walk 1"
                }
              ],
              "headerFlag": true
            },
            {
              "template_line_item_id": 3,
              "lineItemName": "Number of Registered New Teams",
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 3,
                  "value": 3000,
                  "eventName": "Walk 1"
                }
              ],
              "headerFlag": false
            }
          ],
          "headerFlag": true
        },
        {
          "sub_cat_template_id": 2,
          "subCategoryName": "Total Team Revenue (5005)",
          "eventTypeDataList": [
            {
              "id": 2,
              "value": 20000,
              "eventName": "Walk 1"
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 4,
              "lineItemName": "Revenue from Veteran Mega/A Teams",
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 4,
                  "value": 4000,
                  "eventName": "Walk 1"
                }
              ],
              "headerFlag": false
            },
            {
              "template_line_item_id": 5,
              "lineItemName": "Revenue from Veteran B/C Teams ",
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 5,
                  "value": 5000,
                  "eventName": "Walk 1"
                }
              ],
              "headerFlag": false
            },
            {
              "template_line_item_id": 6,
              "lineItemName": "Revenue from New Teams",
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 6,
                  "value": 6000,
                  "eventName": "Walk 1"
                }
              ],
              "headerFlag": false
            }
          ],
          "headerFlag": false
        },
        {
          "sub_cat_template_id": 3,
          "subCategoryName": "Individuals and Other",
          "eventTypeDataList": [
            {
              "id": 3,
              "value": 30000,
              "eventName": "Walk 1"
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 7,
              "lineItemName": "Revenue from Individuals - 5000",
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 7,
                  "value": 7000,
                  "eventName": "Walk 1"
                },
                {
                  "id": 9,
                  "value": 7000,
                  "eventName": "Walk 1"
                }
              ],
              "headerFlag": false
            },
            {
              "template_line_item_id": 8,
              "lineItemName": "Other Revenue - 5025",
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 8,
                  "value": 8000,
                  "eventName": "Walk 1"
                },
                {
                  "id": 10,
                  "value": 8000,
                  "eventName": "Walk 1"
                }
              ],
              "headerFlag": false
            }
          ],
          "headerFlag": false
        },
        {
          "sub_cat_template_id": 4,
          "subCategoryName": "Total Sponsor Revenue (5010)",
          "eventTypeDataList": [
            {
              "id": 4,
              "value": 40000,
              "eventName": "Walk 1"
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 9,
              "lineItemName": "Revenue from Veteran Sponsors",
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 11,
                  "value": 9000,
                  "eventName": "Walk 1"
                }
              ],
              "headerFlag": false
            },
            {
              "template_line_item_id": 10,
              "lineItemName": "Revenue from New Sponsors ",
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 12,
                  "value": 10000,
                  "eventName": "Walk 1"
                }
              ],
              "headerFlag": false
            }
          ],
          "headerFlag": false
        }
      ],
      "headerFlag": true
    }
  ]
}

export const walkData = {
  walkData: [
    {
      line_item_id: 1,
      value: 500
    },
    {
      line_item_id: 2,
      value: 600
    },
  ]
}


export const templateHeaderConstant = {

  "year": 2022,

  "lineItemList": [

    "Fundraising Minimum - Regular Bikes",

    "Fundraising Minimum - VIP Bikes"

  ],

  "events": [

    "event 1",

    "event 2"

  ]

}

export const chapterHeaderConstant = {

  "market": "Central Texas - Austin",

  "staff_name": "Meredith Englehart",

  "sub_ledger_name": "80005",

  "location": "Central Texas",

  "chapter_code": "515 CTX - Central Texas",

  "year": 2022,

  "lineItems": [

    {

      "line_item_template_id": 0,

      "lineItemName": "Fundraising Minimum - Regular Bikes",

      "events": [

        {

          "id": 0,

          "value": 1000,

          "eventName": "event 1"

        },

        {

          "id": 0,

          "value": 2000,

          "eventName": "event 2"

        }

      ]

    },

    {

      "line_item_template_id": 0,

      "lineItemName": "Fundraising Minimum - VIP Bikes",

      "events": [

        {

          "id": 0,

          "value": 3000,

          "eventName": "event 1"

        },

        {

          "id": 0,

          "value": 4000,

          "eventName": "event 2"

        }

      ]

    }

  ]

}


export const spin4UserPageConstant = [
  {

    "section": "First",

    "categoryList": [

      {

        "cat_template_id": 1,

        "categoryName": "FY19 Budgeted Gross Revenue",

        "events": [

          {

            "id": 1,

            "value": 1000,

            "eventName": "event 1"

          },

          {

            "id": 2,

            "value": 2000,

            "eventName": "event 2"

          }

        ],

        "subCategoryList": [

          {

            "sub_cat_template_id": 1,

            "subCategoryName": "Budgeted Participant Revenue",

            "events": [

              {

                "id": 1,

                "value": 3000,

                "eventName": "event 1"

              },

              {

                "id": 2,

                "value": 4000,

                "eventName": "event 2"

              }

            ],

            "lineItems": [

              {

                "line_item_template_id": 1,

                "lineItemName": "Total Bike Goal",

                "events": [

                  {

                    "id": 1,

                    "value": 5000,

                    "eventName": "event 1"

                  },

                  {

                    "id": 2,

                    "value": 6000,

                    "eventName": "event 2"

                  }

                ]

              }

            ]

          },

          {

            "sub_cat_template_id": 2,

            "subCategoryName": "Budgeted Other Revenue",

            "events": [],

            "lineItems": [

              {

                "line_item_template_id": 2,

                "lineItemName": "Sponsorship",

                "events": []

              }

            ]

          }

        ]

      }

    ]

  },
  {
    section: "Second",

    eventName: "Event 1",

    categoryList: [
      {
        cat_id: 2,

        categoryName: "Participant DDB Expense Total",
        "events": [

          {

            "id": 1,

            "value": 1000,

            "eventName": "event 1"

          }],

        subCategoryList: [
          {
            sub_cat_id: 102,

            subCategoryName: "Food & Premises - DDB Code 5040",

            lineItems: [
              {
                line_item_id: 1019,

                lineItemName: "Number of Participants",

                pricePerPiece: 0,
                "events": [

                  {

                    "id": 1,

                    "value": 5000,

                    "eventName": "event 1"

                  }]
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
                "events": [

                  {

                    "id": 1657,

                    "value": 5000,

                    "eventName": "event 1",
                    quantity: 5


                  }]
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
]


export const majorGiftsHeaderColumns = [
  { field: "name", headerName: "", width: "180", editable: true, cellClassName: "mediumFontSize" },
  // { field: "unrestricted", headerName: "Unrestricted", width: "180", editable: true, headerClassName: 'aqua mediumFontSize', headerAlign: 'center', cellClassName: 'aqua', align: 'center' },
  // { field: "researchRestricted", headerName: "Research Restricted", width: "180", editable: true, headerClassName: 'peach mediumFontSize', headerAlign: 'center', cellClassName: 'peach', align: 'center' },
  // { field: "esaCamp", headerName: "ESA Camp", width: "180", editable: true, headerClassName: 'backgroundYellow mediumFontSize', headerAlign: 'center', cellClassName: 'backgroundYellow', align: 'center' },
  // { field: "esaOther", headerName: "ESA Other", width: "180", editable: true, headerClassName: 'backgroundYellow mediumFontSize', headerAlign: 'center', cellClassName: 'backgroundYellow', align: 'center' },
];

export const majorGiftsColumns = [
  { field: "lineItemName", headerName: "", width: "254", editable: true, cellClassName: "mediumFontSize" },
  {
    field: "lineItemDescription", headerName: "", width: "254", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center',
    cellClassName: (params) => {
      if (params.value === 'Renewals Subtotal' || params.value === 'New Gifts Subtotal') {
        return "";
      }
      else return "bg_darkGray"
    }, align: 'center'
  },
  // { field: "total", headerName: "Total", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
  // { field: "unrestricted", headerName: "Unrestricted", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: 'bg_darkGray', align: 'center' },
  // { field: "researchRestricted", headerName: "Research Restricted", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: 'bg_darkGray', align: 'center' },
  // { field: "esaCamp", headerName: "ESA Camp", width: "180", editable: true, headerClassName: ' mediumFontSize', headerAlign: 'center', cellClassName: 'bg_darkGray', align: 'center' },
  // { field: "esaOther", headerName: "ESA Other", width: "180", editable: true, headerClassName: ' mediumFontSize', headerAlign: 'center', cellClassName: 'bg_darkGray', align: 'center' },
];

export const majorGiftsStructure = {
  "categoryList": [
    {
      "cat_id": 1,
      "categoryName": "Individual Gifts Less Than $10,000",
      "accountInfo": "Enter Company Code Here-Enter Department Code Here-4060",
      "subCategoryList": [
        {
          "sub_cat_id": 1,
          "subCategoryName": "Renewals",
          "lineItems": [
            {
              "line_item_id": 1,
              "lineItemName": "Donor Name",
              "pricePerPiece": 0,
              "lineItemDescription": "Enter Donor Here"
            },
            {
              "line_item_id": 2,
              "lineItemName": "Donor Name",
              "pricePerPiece": 0,
              "lineItemDescription": "Enter Donor Here"
            },
            {
              "line_item_id": 3,
              "lineItemName": "Donor Name",
              "pricePerPiece": 0,
              "lineItemDescription": "Enter Donor Here"
            },
            {
              "line_item_id": 4,
              "lineItemName": "Donor Name",
              "pricePerPiece": 0,
              "lineItemDescription": "Enter Donor Here"
            },
            {
              "line_item_id": 5,
              "lineItemName": "Donor Name",
              "pricePerPiece": 0,
              "lineItemDescription": "Enter Donor Here"
            },
            {
              "line_item_id": 6,
              "lineItemName": "Donor Name",
              "pricePerPiece": 0,
              "lineItemDescription": "Enter Donor Here"
            },
            {
              "line_item_id": 7,
              "lineItemName": "Donor Name",
              "pricePerPiece": 0,
              "lineItemDescription": "Enter Donor Here"
            },
            {
              "line_item_id": 8,
              "lineItemName": "Donor Name",
              "pricePerPiece": 0,
              "lineItemDescription": "Enter Donor Here"
            }
          ]
        },
        {
          "sub_cat_id": 2,
          "subCategoryName": "New Gifts",
          "lineItems": [
            {
              "line_item_id": 9,
              "lineItemName": "Donor Name",
              "pricePerPiece": 0,
              "lineItemDescription": "Enter Donor Here"
            },
            {
              "line_item_id": 10,
              "lineItemName": "Donor Name",
              "pricePerPiece": 0,
              "lineItemDescription": "Enter Donor Here"
            },
            {
              "line_item_id": 11,
              "lineItemName": "Donor Name",
              "pricePerPiece": 0,
              "lineItemDescription": "Enter Donor Here"
            }
          ]
        }
      ]
    },
    {
      "cat_id": 2,
      "categoryName": "Individual Gifts Greater Than $10,000",
      "accountInfo": "Enter Company Code Here-Enter Department Code Here-4080",
      "subCategoryList": [
        {
          "sub_cat_id": 3,
          "subCategoryName": "Renewals",
          "lineItems": [
            {
              "line_item_id": 12,
              "lineItemName": "Donor Name",
              "pricePerPiece": 0,
              "lineItemDescription": "Enter Donor Here"
            },
            {
              "line_item_id": 13,
              "lineItemName": "Donor Name",
              "pricePerPiece": 0,
              "lineItemDescription": "Enter Donor Here"
            },
            {
              "line_item_id": 14,
              "lineItemName": "Donor Name",
              "pricePerPiece": 0,
              "lineItemDescription": "Enter Donor Here"
            },
            {
              "line_item_id": 15,
              "lineItemName": "Donor Name",
              "pricePerPiece": 0,
              "lineItemDescription": "Enter Donor Here"
            }
          ]
        },
        {
          "sub_cat_id": 4,
          "subCategoryName": "New Gifts",
          "lineItems": [
            {
              "line_item_id": 16,
              "lineItemName": "Donor Name",
              "pricePerPiece": 0,
              "lineItemDescription": "Enter Donor Here"
            },
            {
              "line_item_id": 17,
              "lineItemName": "Donor Name",
              "pricePerPiece": 0,
              "lineItemDescription": "Enter Donor Here"
            },
            {
              "line_item_id": 18,
              "lineItemName": "Donor Name",
              "pricePerPiece": 0,
              "lineItemDescription": "Enter Donor Here"
            }
          ]
        }
      ]
    },
    {
      "cat_id": 3,
      "categoryName": "Foundation Major Gifts Less Than $10,000",
      "accountInfo": "Enter Company Code Here-Enter Department Code Here-4120",
      "subCategoryList": [
        {
          "sub_cat_id": 5,
          "subCategoryName": "Renewals",
          "lineItems": [
            {
              "line_item_id": 19,
              "lineItemName": "Foundation Name",
              "pricePerPiece": 0,
              "lineItemDescription": "Enter Donor Here"
            },
            {
              "line_item_id": 20,
              "lineItemName": "Foundation Name",
              "pricePerPiece": 0,
              "lineItemDescription": "Enter Donor Here"
            },
            {
              "line_item_id": 21,
              "lineItemName": "Foundation Name",
              "pricePerPiece": 0,
              "lineItemDescription": "Enter Donor Here"
            }
          ]
        },
        {
          "sub_cat_id": 6,
          "subCategoryName": "New Gifts",
          "lineItems": [
            {
              "line_item_id": 22,
              "lineItemName": "Foundation Name",
              "pricePerPiece": 0,
              "lineItemDescription": "Enter Donor Here"
            },
            {
              "line_item_id": 23,
              "lineItemName": "Foundation Name",
              "pricePerPiece": 0,
              "lineItemDescription": "Enter Donor Here"
            },
            {
              "line_item_id": 24,
              "lineItemName": "Foundation Name",
              "pricePerPiece": 0,
              "lineItemDescription": "Enter Donor Here"
            }
          ]
        }
      ]
    },
    {
      "cat_id": 4,
      "categoryName": "Foundation Major Gifts Greater Than $10,000",
      "accountInfo": "Enter Company Code Here-Enter Department Code Here-4120",
      "subCategoryList": [
        {
          "sub_cat_id": 7,
          "subCategoryName": "Renewals",
          "lineItems": [
            {
              "line_item_id": 25,
              "lineItemName": "Foundation Name",
              "pricePerPiece": 0,
              "lineItemDescription": "Enter Donor Here"
            },
            {
              "line_item_id": 26,
              "lineItemName": "Foundation Name",
              "pricePerPiece": 0,
              "lineItemDescription": "Enter Donor Here"
            },
            {
              "line_item_id": 27,
              "lineItemName": "Foundation Name",
              "pricePerPiece": 0,
              "lineItemDescription": "Enter Donor Here"
            },
            {
              "line_item_id": 28,
              "lineItemName": "Foundation Name",
              "pricePerPiece": 0,
              "lineItemDescription": "Enter Donor Here"
            }
          ]
        },
        {
          "sub_cat_id": 8,
          "subCategoryName": "New Gifts",
          "lineItems": [
            {
              "line_item_id": 29,
              "lineItemName": "Foundation Name",
              "pricePerPiece": 0,
              "lineItemDescription": "Enter Donor Here"
            },
            {
              "line_item_id": 30,
              "lineItemName": "Foundation Name",
              "pricePerPiece": 0,
              "lineItemDescription": "Enter Donor Here"
            }
          ]
        }
      ]
    },
    {
      "cat_id": 5,
      "categoryName": "Corporate Grants - Non Pharma",
      "accountInfo": "Enter Company Code Here-Enter Department Code Here-4100",
      "subCategoryList": [
        {
          "sub_cat_id": 9,
          "subCategoryName": "dummy",
          "lineItems": [
            {
              "line_item_id": 31,
              "lineItemName": "Corporation",
              "pricePerPiece": 0,
              "lineItemDescription": "Enter Donor Here"
            },
            {
              "line_item_id": 32,
              "lineItemName": "Corporation",
              "pricePerPiece": 0,
              "lineItemDescription": "Enter Donor Here"
            }
          ]
        }
      ]
    },
    {
      "cat_id": 6,
      "categoryName": "Corporate Pharmaceutical Gifts (Not ESA Related)",
      "accountInfo": "Enter Company Code Here-Enter Department Code Here-4040",
      "subCategoryList": [
        {
          "sub_cat_id": 10,
          "subCategoryName": "dummy",
          "lineItems": [
            {
              "line_item_id": 33,
              "lineItemName": "Donor/Event",
              "pricePerPiece": 0,
              "lineItemDescription": "Enter Donor Here"
            },
            {
              "line_item_id": 34,
              "lineItemName": "Donor/Event",
              "pricePerPiece": 0,
              "lineItemDescription": "Enter Donor Here"
            },
            {
              "line_item_id": 35,
              "lineItemName": "Donor/Event",
              "pricePerPiece": 0,
              "lineItemDescription": "Enter Donor Here"
            }
          ]
        }
      ]
    },
    {
      "cat_id": 7,
      "categoryName": "Workplace Giving",
      "accountInfo": "Enter Company Code Here-Enter Department Code Here-4200",
      "subCategoryList": [
        {
          "sub_cat_id": 11,
          "subCategoryName": "dummy",
          "lineItems": [
            {
              "line_item_id": 36,
              "lineItemName": "CHC",
              "pricePerPiece": 0
            },
            {
              "line_item_id": 37,
              "lineItemName": "CFC",
              "pricePerPiece": 0
            },
            {
              "line_item_id": 38,
              "lineItemName": "United Way",
              "pricePerPiece": 0
            },
            {
              "line_item_id": 39,
              "lineItemName": "Corporate",
              "pricePerPiece": 0
            }
          ]
        }
      ]
    },
    {
      "cat_id": 8,
      "categoryName": "Third-Party Event Gifts",
      "accountInfo": "Enter Company Code Here-Enter Department Code Here-4140",
      "subCategoryList": [
        {
          "sub_cat_id": 12,
          "subCategoryName": "dummy",
          "lineItems": [
            {
              "line_item_id": 40,
              "lineItemName": "Donor/Event",
              "pricePerPiece": 0,
              "lineItemDescription": "Enter Event Here"
            },
            {
              "line_item_id": 41,
              "lineItemName": "Donor/Event",
              "pricePerPiece": 0,
              "lineItemDescription": "Enter Event Here"
            },
            {
              "line_item_id": 42,
              "lineItemName": "Donor/Event",
              "pricePerPiece": 0,
              "lineItemDescription": "Enter Event Here"
            }
          ]
        }
      ]
    },
    {
      "cat_id": 9,
      "categoryName": "Tributes & Memorials",
      "accountInfo": "Enter Company Code Here-Enter Department Code Here-4180",
      "subCategoryList": [
        {
          "sub_cat_id": 13,
          "subCategoryName": "dummy",
          "lineItems": [
            {
              "line_item_id": 43,
              "lineItemName": "dummy",
              "pricePerPiece": 0
            }
          ]
        }
      ]
    },
    {
      "cat_id": 10,
      "categoryName": "Clubs & Organizations Gifts",
      "accountInfo": "Enter Company Code Here-Enter Department Code Here-4160",
      "subCategoryList": [
        {
          "sub_cat_id": 14,
          "subCategoryName": "dummy",
          "lineItems": [
            {
              "line_item_id": 44,
              "lineItemName": "dummy",
              "pricePerPiece": 0
            }
          ]
        }
      ]
    },
    {
      "cat_id": 11,
      "categoryName": "Vehicle Donation Program",
      "accountInfo": "Enter Company Code Here-Enter Department Code Here-4220",
      "subCategoryList": [
        {
          "sub_cat_id": 15,
          "subCategoryName": "dummy",
          "lineItems": [
            {
              "line_item_id": 45,
              "lineItemName": "dummy",
              "pricePerPiece": 0
            }
          ]
        }
      ]
    },
    {
      "cat_id": 12,
      "categoryName": "Royalty Income",
      "accountInfo": "Enter Company Code Here-Enter Department Code Here-4280",
      "subCategoryList": [
        {
          "sub_cat_id": 16,
          "subCategoryName": "dummy",
          "lineItems": [
            {
              "line_item_id": 46,
              "lineItemName": "dummy",
              "pricePerPiece": 0
            }
          ]
        }
      ]
    },
    {
      "cat_id": 13,
      "categoryName": "Government Grants",
      "accountInfo": "Enter Company Code Here-Enter Department Code Here-4260",
      "subCategoryList": [
        {
          "sub_cat_id": 17,
          "subCategoryName": "dummy",
          "lineItems": [
            {
              "line_item_id": 47,
              "lineItemName": "dummy",
              "pricePerPiece": 0
            }
          ]
        }
      ]
    },
    {
      "cat_id": 14,
      "categoryName": "Interest & Dividend Income",
      "accountInfo": "Enter Company Code Here-Enter Department Code Here-4300",
      "subCategoryList": [
        {
          "sub_cat_id": 18,
          "subCategoryName": "dummy",
          "lineItems": [
            {
              "line_item_id": 48,
              "lineItemName": "dummy",
              "pricePerPiece": 0
            }
          ]
        }
      ]
    },
    {
      "cat_id": 15,
      "categoryName": "Discount on Pledges Receivable",
      "accountInfo": "Enter Company Code Here-Enter Department Code Here-4320",
      "subCategoryList": [
        {
          "sub_cat_id": 19,
          "subCategoryName": "dummy",
          "lineItems": [
            {
              "line_item_id": 49,
              "lineItemName": "dummy",
              "pricePerPiece": 0
            }
          ]
        }
      ]
    },
    {
      "cat_id": 16,
      "categoryName": "Bequests / Planned Giving",
      "accountInfo": "Enter Company Code Here-Enter Department Code Here-4380",
      "subCategoryList": [
        {
          "sub_cat_id": 20,
          "subCategoryName": "dummy",
          "lineItems": [
            {
              "line_item_id": 50,
              "lineItemName": "dummy",
              "pricePerPiece": 0
            }
          ]
        }
      ]
    },
    {
      "cat_id": 17,
      "categoryName": "Other Income",
      "accountInfo": "Enter Company Code Here-Enter Department Code Here-4400",
      "subCategoryList": [
        {
          "sub_cat_id": 21,
          "subCategoryName": "dummy",
          "lineItems": [
            {
              "line_item_id": 51,
              "lineItemName": "Other",
              "pricePerPiece": 0,
              "lineItemDescription": "Enter Name Here"
            },
            {
              "line_item_id": 52,
              "lineItemName": "Other",
              "pricePerPiece": 0,
              "lineItemDescription": "Enter Name Here"
            }
          ]
        }
      ]
    },
    {
      "cat_id": 18,
      "categoryName": "Total Individual Gifts (Gifts > $10K and < $10K)",
      "subCategoryList": []
    },
    {
      "cat_id": 19,
      "categoryName": "Total Foundation Gifts (Gifts > $10K and < $10K)",
      "subCategoryList": []
    },
    {
      "cat_id": 20,
      "categoryName": "Total IMG & FMG Gifts",
      "subCategoryList": []
    },
    {
      "cat_id": 21,
      "categoryName": "TOTAL MAJOR GIFTS",
      "subCategoryList": []
    },
    {
      "cat_id": 22,
      "categoryName": "TOTAL OTHER REVENUE",
      "subCategoryList": []
    },
    {
      "cat_id": 23,
      "categoryName": "TOTAL MAJOR GIFTS AND OTHER REVENUE",
      "subCategoryList": []
    }
  ]
}

export const majorGiftsChapterStructure = {
  "categoryList": [
    {
      "cat_template_id": 1,
      "categoryName": "Individual Gifts Less Than $10,000",
      "eventTypeDataList": [
        {
          "id": 1,
          "value": 18000,
          "event_id": 1
        },
        {
          "id": 2,
          "value": 18000,
          "event_id": 2
        },
        {
          "id": 3,
          "value": 0,
          "event_id": 3
        },
        {
          "id": 4,
          "value": 0,
          "event_id": 4
        },
        {
          "id": 5,
          "value": 0,
          "event_id": 5
        }
      ],
      "subCategoryDataList": [
        {
          "sub_cat_template_id": 1,
          "subCategoryName": "Renewals",
          "eventTypeDataList": [
            {
              "id": 1,
              "value": 18000,
              "event_id": 1
            },
            {
              "id": 2,
              "value": 18000,
              "event_id": 2
            },
            {
              "id": 3,
              "value": 0,
              "event_id": 3
            },
            {
              "id": 4,
              "value": 0,
              "event_id": 4
            },
            {
              "id": 5,
              "value": 0,
              "event_id": 5
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 1,
              "lineItemName": "Donor Name",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 1,
                  "value": 2500,
                  "event_id": 1
                },
                {
                  "id": 2,
                  "value": 2500,
                  "event_id": 2
                },
                {
                  "id": 3,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 4,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 5,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Daryl & Dana Kunik"
            },
            {
              "template_line_item_id": 2,
              "lineItemName": "Donor Name",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 6,
                  "value": 2500,
                  "event_id": 1
                },
                {
                  "id": 7,
                  "value": 2500,
                  "event_id": 2
                },
                {
                  "id": 8,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 9,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 10,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Clyde Selig"
            },
            {
              "template_line_item_id": 3,
              "lineItemName": "Donor Name",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 11,
                  "value": 5000,
                  "event_id": 1
                },
                {
                  "id": 12,
                  "value": 5000,
                  "event_id": 2
                },
                {
                  "id": 13,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 14,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 15,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Carol Cox"
            },
            {
              "template_line_item_id": 4,
              "lineItemName": "Donor Name",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 16,
                  "value": 5000,
                  "event_id": 1
                },
                {
                  "id": 17,
                  "value": 5000,
                  "event_id": 2
                },
                {
                  "id": 18,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 19,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 20,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Wendi Power"
            },
            {
              "template_line_item_id": 5,
              "lineItemName": "Donor Name",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 21,
                  "value": 1000,
                  "event_id": 1
                },
                {
                  "id": 22,
                  "value": 1000,
                  "event_id": 2
                },
                {
                  "id": 23,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 24,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 25,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Peggy Vroman-Gracy"
            },
            {
              "template_line_item_id": 6,
              "lineItemName": "Donor Name",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 26,
                  "value": 1000,
                  "event_id": 1
                },
                {
                  "id": 27,
                  "value": 1000,
                  "event_id": 2
                },
                {
                  "id": 28,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 29,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 30,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "J Steindl"
            },
            {
              "template_line_item_id": 7,
              "lineItemName": "Donor Name",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 31,
                  "value": 1000,
                  "event_id": 1
                },
                {
                  "id": 32,
                  "value": 1000,
                  "event_id": 2
                },
                {
                  "id": 33,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 34,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 35,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "William Scanlan"
            },
            {
              "template_line_item_id": 8,
              "lineItemName": "Donor Name",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 36,
                  "value": 0,
                  "event_id": 1
                },
                {
                  "id": 37,
                  "value": 0,
                  "event_id": 2
                },
                {
                  "id": 38,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 39,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 40,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Enter Donor Here"
            }
          ],
          "chapterId": 0,
          "headerFlag": false
        },
        {
          "sub_cat_template_id": 2,
          "subCategoryName": "New Gifts",
          "eventTypeDataList": [
            {
              "id": 6,
              "value": 0,
              "event_id": 1
            },
            {
              "id": 7,
              "value": 0,
              "event_id": 2
            },
            {
              "id": 8,
              "value": 0,
              "event_id": 3
            },
            {
              "id": 9,
              "value": 0,
              "event_id": 4
            },
            {
              "id": 10,
              "value": 0,
              "event_id": 5
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 9,
              "lineItemName": "Donor Name",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 41,
                  "value": 0,
                  "event_id": 1
                },
                {
                  "id": 42,
                  "value": 0,
                  "event_id": 2
                },
                {
                  "id": 43,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 44,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 45,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Enter Donor Here"
            },
            {
              "template_line_item_id": 10,
              "lineItemName": "Donor Name",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 46,
                  "value": 0,
                  "event_id": 1
                },
                {
                  "id": 47,
                  "value": 0,
                  "event_id": 2
                },
                {
                  "id": 48,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 49,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 50,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Enter Donor Here"
            },
            {
              "template_line_item_id": 11,
              "lineItemName": "Donor Name",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 51,
                  "value": 0,
                  "event_id": 1
                },
                {
                  "id": 52,
                  "value": 0,
                  "event_id": 2
                },
                {
                  "id": 53,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 54,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 55,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Enter Donor Here"
            }
          ],
          "chapterId": 0,
          "headerFlag": false
        }
      ],
      "chapterId": 0,
      "headerFlag": false,
      "accountInfo": "1515-700-4060"
    },
    {
      "cat_template_id": 2,
      "categoryName": "Individual Gifts Greater Than $10,000",
      "eventTypeDataList": [
        {
          "id": 6,
          "value": 35000,
          "event_id": 1
        },
        {
          "id": 7,
          "value": 35000,
          "event_id": 2
        },
        {
          "id": 8,
          "value": 0,
          "event_id": 3
        },
        {
          "id": 9,
          "value": 0,
          "event_id": 4
        },
        {
          "id": 10,
          "value": 0,
          "event_id": 5
        }
      ],
      "subCategoryDataList": [
        {
          "sub_cat_template_id": 3,
          "subCategoryName": "Renewals",
          "eventTypeDataList": [
            {
              "id": 11,
              "value": 20000,
              "event_id": 1
            },
            {
              "id": 12,
              "value": 20000,
              "event_id": 2
            },
            {
              "id": 13,
              "value": 0,
              "event_id": 3
            },
            {
              "id": 14,
              "value": 0,
              "event_id": 4
            },
            {
              "id": 15,
              "value": 0,
              "event_id": 5
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 12,
              "lineItemName": "Donor Name",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 56,
                  "value": 10000,
                  "event_id": 1
                },
                {
                  "id": 57,
                  "value": 10000,
                  "event_id": 2
                },
                {
                  "id": 58,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 59,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 60,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Allen & Dana Jacobson"
            },
            {
              "template_line_item_id": 13,
              "lineItemName": "Donor Name",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 61,
                  "value": 10000,
                  "event_id": 1
                },
                {
                  "id": 62,
                  "value": 10000,
                  "event_id": 2
                },
                {
                  "id": 63,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 64,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 65,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Nancy & Brown Word"
            },
            {
              "template_line_item_id": 14,
              "lineItemName": "Donor Name",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 66,
                  "value": 0,
                  "event_id": 1
                },
                {
                  "id": 67,
                  "value": 0,
                  "event_id": 2
                },
                {
                  "id": 68,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 69,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 70,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Enter Donor Here"
            },
            {
              "template_line_item_id": 15,
              "lineItemName": "Donor Name",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 71,
                  "value": 0,
                  "event_id": 1
                },
                {
                  "id": 72,
                  "value": 0,
                  "event_id": 2
                },
                {
                  "id": 73,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 74,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 75,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Enter Donor Here"
            }
          ],
          "chapterId": 0,
          "headerFlag": false
        },
        {
          "sub_cat_template_id": 4,
          "subCategoryName": "New Gifts",
          "eventTypeDataList": [
            {
              "id": 16,
              "value": 15000,
              "event_id": 1
            },
            {
              "id": 17,
              "value": 15000,
              "event_id": 2
            },
            {
              "id": 18,
              "value": 0,
              "event_id": 3
            },
            {
              "id": 19,
              "value": 0,
              "event_id": 4
            },
            {
              "id": 20,
              "value": 0,
              "event_id": 5
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 16,
              "lineItemName": "Donor Name",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 76,
                  "value": 15000,
                  "event_id": 1
                },
                {
                  "id": 77,
                  "value": 15000,
                  "event_id": 2
                },
                {
                  "id": 78,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 79,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 80,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Amy Penington Black"
            },
            {
              "template_line_item_id": 17,
              "lineItemName": "Donor Name",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 81,
                  "value": 0,
                  "event_id": 1
                },
                {
                  "id": 82,
                  "value": 0,
                  "event_id": 2
                },
                {
                  "id": 83,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 84,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 85,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Enter Donor Here"
            },
            {
              "template_line_item_id": 18,
              "lineItemName": "Donor Name",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 86,
                  "value": 0,
                  "event_id": 1
                },
                {
                  "id": 87,
                  "value": 0,
                  "event_id": 2
                },
                {
                  "id": 88,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 89,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 90,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Enter Donor Here"
            }
          ],
          "chapterId": 0,
          "headerFlag": false
        }
      ],
      "chapterId": 0,
      "headerFlag": false,
      "accountInfo": "1515-700-4080"
    },
    {
      "cat_template_id": 3,
      "categoryName": "Foundation Major Gifts Less Than $10,000",
      "eventTypeDataList": [
        {
          "id": 11,
          "value": 7500,
          "event_id": 1
        },
        {
          "id": 12,
          "value": 0,
          "event_id": 2
        },
        {
          "id": 13,
          "value": 0,
          "event_id": 3
        },
        {
          "id": 14,
          "value": 7500,
          "event_id": 4
        },
        {
          "id": 15,
          "value": 0,
          "event_id": 5
        }
      ],
      "subCategoryDataList": [
        {
          "sub_cat_template_id": 5,
          "subCategoryName": "Renewals",
          "eventTypeDataList": [
            {
              "id": 21,
              "value": 5000,
              "event_id": 1
            },
            {
              "id": 22,
              "value": 0,
              "event_id": 2
            },
            {
              "id": 23,
              "value": 0,
              "event_id": 3
            },
            {
              "id": 24,
              "value": 5000,
              "event_id": 4
            },
            {
              "id": 25,
              "value": 0,
              "event_id": 5
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 19,
              "lineItemName": "Foundation Name",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 91,
                  "value": 5000,
                  "event_id": 1
                },
                {
                  "id": 92,
                  "value": 0,
                  "event_id": 2
                },
                {
                  "id": 93,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 94,
                  "value": 5000,
                  "event_id": 4
                },
                {
                  "id": 95,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Valero Benefit for Children"
            },
            {
              "template_line_item_id": 20,
              "lineItemName": "Foundation Name",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 96,
                  "value": 0,
                  "event_id": 1
                },
                {
                  "id": 97,
                  "value": 0,
                  "event_id": 2
                },
                {
                  "id": 98,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 99,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 100,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Enter Donor Here"
            },
            {
              "template_line_item_id": 21,
              "lineItemName": "Foundation Name",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 101,
                  "value": 0,
                  "event_id": 1
                },
                {
                  "id": 102,
                  "value": 0,
                  "event_id": 2
                },
                {
                  "id": 103,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 104,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 105,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Enter Donor Here"
            }
          ],
          "chapterId": 0,
          "headerFlag": false
        },
        {
          "sub_cat_template_id": 6,
          "subCategoryName": "New Gifts",
          "eventTypeDataList": [
            {
              "id": 26,
              "value": 2500,
              "event_id": 1
            },
            {
              "id": 27,
              "value": 0,
              "event_id": 2
            },
            {
              "id": 28,
              "value": 0,
              "event_id": 3
            },
            {
              "id": 29,
              "value": 2500,
              "event_id": 4
            },
            {
              "id": 30,
              "value": 0,
              "event_id": 5
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 22,
              "lineItemName": "Foundation Name",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 106,
                  "value": 2500,
                  "event_id": 1
                },
                {
                  "id": 107,
                  "value": 0,
                  "event_id": 2
                },
                {
                  "id": 108,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 109,
                  "value": 2500,
                  "event_id": 4
                },
                {
                  "id": 110,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "HEB Foundation"
            },
            {
              "template_line_item_id": 23,
              "lineItemName": "Foundation Name",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 111,
                  "value": 0,
                  "event_id": 1
                },
                {
                  "id": 112,
                  "value": 0,
                  "event_id": 2
                },
                {
                  "id": 113,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 114,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 115,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Enter Donor Here"
            },
            {
              "template_line_item_id": 24,
              "lineItemName": "Foundation Name",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 116,
                  "value": 0,
                  "event_id": 1
                },
                {
                  "id": 117,
                  "value": 0,
                  "event_id": 2
                },
                {
                  "id": 118,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 119,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 120,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Enter Donor Here"
            }
          ],
          "chapterId": 0,
          "headerFlag": false
        }
      ],
      "chapterId": 0,
      "headerFlag": false,
      "accountInfo": "1515-700-4120"
    },
    {
      "cat_template_id": 4,
      "categoryName": "Foundation Major Gifts Greater Than $10,000",
      "eventTypeDataList": [
        {
          "id": 16,
          "value": 60000,
          "event_id": 1
        },
        {
          "id": 17,
          "value": 60000,
          "event_id": 2
        },
        {
          "id": 18,
          "value": 0,
          "event_id": 3
        },
        {
          "id": 19,
          "value": 0,
          "event_id": 4
        },
        {
          "id": 20,
          "value": 0,
          "event_id": 5
        }
      ],
      "subCategoryDataList": [
        {
          "sub_cat_template_id": 7,
          "subCategoryName": "Renewals",
          "eventTypeDataList": [
            {
              "id": 31,
              "value": 60000,
              "event_id": 1
            },
            {
              "id": 32,
              "value": 60000,
              "event_id": 2
            },
            {
              "id": 33,
              "value": 0,
              "event_id": 3
            },
            {
              "id": 34,
              "value": 0,
              "event_id": 4
            },
            {
              "id": 35,
              "value": 0,
              "event_id": 5
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 25,
              "lineItemName": "Foundation Name",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 121,
                  "value": 50000,
                  "event_id": 1
                },
                {
                  "id": 122,
                  "value": 50000,
                  "event_id": 2
                },
                {
                  "id": 123,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 124,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 125,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Ed Rachal Foundation"
            },
            {
              "template_line_item_id": 26,
              "lineItemName": "Foundation Name",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 126,
                  "value": 10000,
                  "event_id": 1
                },
                {
                  "id": 127,
                  "value": 10000,
                  "event_id": 2
                },
                {
                  "id": 128,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 129,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 130,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Valero Energy Foundation"
            },
            {
              "template_line_item_id": 27,
              "lineItemName": "Foundation Name",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 131,
                  "value": 0,
                  "event_id": 1
                },
                {
                  "id": 132,
                  "value": 0,
                  "event_id": 2
                },
                {
                  "id": 133,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 134,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 135,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Enter Donor Here"
            },
            {
              "template_line_item_id": 28,
              "lineItemName": "Foundation Name",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 136,
                  "value": 0,
                  "event_id": 1
                },
                {
                  "id": 137,
                  "value": 0,
                  "event_id": 2
                },
                {
                  "id": 138,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 139,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 140,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Enter Donor Here"
            }
          ],
          "chapterId": 0,
          "headerFlag": false
        },
        {
          "sub_cat_template_id": 8,
          "subCategoryName": "New Gifts",
          "eventTypeDataList": [
            {
              "id": 36,
              "value": 0,
              "event_id": 1
            },
            {
              "id": 37,
              "value": 0,
              "event_id": 2
            },
            {
              "id": 38,
              "value": 0,
              "event_id": 3
            },
            {
              "id": 39,
              "value": 0,
              "event_id": 4
            },
            {
              "id": 40,
              "value": 0,
              "event_id": 5
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 29,
              "lineItemName": "Foundation Name",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 141,
                  "value": 0,
                  "event_id": 1
                },
                {
                  "id": 142,
                  "value": 0,
                  "event_id": 2
                },
                {
                  "id": 143,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 144,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 145,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Enter Donor Here"
            },
            {
              "template_line_item_id": 30,
              "lineItemName": "Foundation Name",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 146,
                  "value": 0,
                  "event_id": 1
                },
                {
                  "id": 147,
                  "value": 0,
                  "event_id": 2
                },
                {
                  "id": 148,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 149,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 150,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Enter Donor Here"
            }
          ],
          "chapterId": 0,
          "headerFlag": false
        }
      ],
      "chapterId": 0,
      "headerFlag": false,
      "accountInfo": "1515-700-4120"
    },
    {
      "cat_template_id": 5,
      "categoryName": "Corporate Grants - Non Pharma",
      "eventTypeDataList": [
        {
          "id": 21,
          "value": 0,
          "event_id": 1
        },
        {
          "id": 22,
          "value": 0,
          "event_id": 2
        },
        {
          "id": 23,
          "value": 0,
          "event_id": 3
        },
        {
          "id": 24,
          "value": 0,
          "event_id": 4
        },
        {
          "id": 25,
          "value": 0,
          "event_id": 5
        }
      ],
      "subCategoryDataList": [
        {
          "sub_cat_template_id": 9,
          "subCategoryName": "dummy",
          "eventTypeDataList": [
            {
              "id": 41,
              "value": 0,
              "event_id": 1
            },
            {
              "id": 42,
              "value": 0,
              "event_id": 2
            },
            {
              "id": 43,
              "value": 0,
              "event_id": 3
            },
            {
              "id": 44,
              "value": 0,
              "event_id": 4
            },
            {
              "id": 45,
              "value": 0,
              "event_id": 5
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 31,
              "lineItemName": "Corporation",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 151,
                  "value": 0,
                  "event_id": 1
                },
                {
                  "id": 152,
                  "value": 0,
                  "event_id": 2
                },
                {
                  "id": 153,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 154,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 155,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Enter Donor Here"
            },
            {
              "template_line_item_id": 32,
              "lineItemName": "Corporation",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 156,
                  "value": 0,
                  "event_id": 1
                },
                {
                  "id": 157,
                  "value": 0,
                  "event_id": 2
                },
                {
                  "id": 158,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 159,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 160,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Enter Donor Here"
            }
          ],
          "chapterId": 0,
          "headerFlag": false
        }
      ],
      "chapterId": 0,
      "headerFlag": false,
      "accountInfo": "1515-700-4100"
    },
    {
      "cat_template_id": 6,
      "categoryName": "Corporate Pharmaceutical Gifts (Not ESA Related)",
      "eventTypeDataList": [
        {
          "id": 26,
          "value": 0,
          "event_id": 1
        },
        {
          "id": 27,
          "value": 0,
          "event_id": 2
        },
        {
          "id": 28,
          "value": 0,
          "event_id": 3
        },
        {
          "id": 29,
          "value": 0,
          "event_id": 4
        },
        {
          "id": 30,
          "value": 0,
          "event_id": 5
        }
      ],
      "subCategoryDataList": [
        {
          "sub_cat_template_id": 10,
          "subCategoryName": "dummy",
          "eventTypeDataList": [
            {
              "id": 46,
              "value": 0,
              "event_id": 1
            },
            {
              "id": 47,
              "value": 0,
              "event_id": 2
            },
            {
              "id": 48,
              "value": 0,
              "event_id": 3
            },
            {
              "id": 49,
              "value": 0,
              "event_id": 4
            },
            {
              "id": 50,
              "value": 0,
              "event_id": 5
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 33,
              "lineItemName": "Donor/Event",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 161,
                  "value": 0,
                  "event_id": 1
                },
                {
                  "id": 162,
                  "value": 0,
                  "event_id": 2
                },
                {
                  "id": 163,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 164,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 165,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Enter Donor Here"
            },
            {
              "template_line_item_id": 34,
              "lineItemName": "Donor/Event",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 166,
                  "value": 0,
                  "event_id": 1
                },
                {
                  "id": 167,
                  "value": 0,
                  "event_id": 2
                },
                {
                  "id": 168,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 169,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 170,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Enter Donor Here"
            },
            {
              "template_line_item_id": 35,
              "lineItemName": "Donor/Event",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 171,
                  "value": 0,
                  "event_id": 1
                },
                {
                  "id": 172,
                  "value": 0,
                  "event_id": 2
                },
                {
                  "id": 173,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 174,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 175,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Enter Donor Here"
            }
          ],
          "chapterId": 0,
          "headerFlag": false
        }
      ],
      "chapterId": 0,
      "headerFlag": false,
      "accountInfo": "1515-700-4040"
    },
    {
      "cat_template_id": 7,
      "categoryName": "Workplace Giving",
      "eventTypeDataList": [
        {
          "id": 31,
          "value": 3701,
          "event_id": 1
        },
        {
          "id": 32,
          "value": 3701,
          "event_id": 2
        },
        {
          "id": 33,
          "value": 0,
          "event_id": 3
        },
        {
          "id": 34,
          "value": 0,
          "event_id": 4
        },
        {
          "id": 35,
          "value": 0,
          "event_id": 5
        }
      ],
      "subCategoryDataList": [
        {
          "sub_cat_template_id": 11,
          "subCategoryName": "dummy",
          "eventTypeDataList": [
            {
              "id": 51,
              "value": 3701,
              "event_id": 1
            },
            {
              "id": 52,
              "value": 3701,
              "event_id": 2
            },
            {
              "id": 53,
              "value": 0,
              "event_id": 3
            },
            {
              "id": 54,
              "value": 0,
              "event_id": 4
            },
            {
              "id": 55,
              "value": 0,
              "event_id": 5
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 36,
              "lineItemName": "CHC",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 176,
                  "value": 0,
                  "event_id": 1
                },
                {
                  "id": 177,
                  "value": 0,
                  "event_id": 2
                },
                {
                  "id": 178,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 179,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 180,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false
            },
            {
              "template_line_item_id": 37,
              "lineItemName": "CFC",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 181,
                  "value": 0,
                  "event_id": 1
                },
                {
                  "id": 182,
                  "value": 0,
                  "event_id": 2
                },
                {
                  "id": 183,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 184,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 185,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false
            },
            {
              "template_line_item_id": 38,
              "lineItemName": "United Way",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 186,
                  "value": 0,
                  "event_id": 1
                },
                {
                  "id": 187,
                  "value": 0,
                  "event_id": 2
                },
                {
                  "id": 188,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 189,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 190,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false
            },
            {
              "template_line_item_id": 39,
              "lineItemName": "Corporate",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 191,
                  "value": 3701,
                  "event_id": 1
                },
                {
                  "id": 192,
                  "value": 3701,
                  "event_id": 2
                },
                {
                  "id": 193,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 194,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 195,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false
            }
          ],
          "chapterId": 0,
          "headerFlag": false
        }
      ],
      "chapterId": 0,
      "headerFlag": false,
      "accountInfo": "1515-700-4200"
    },
    {
      "cat_template_id": 8,
      "categoryName": "Third-Party Event Gifts",
      "eventTypeDataList": [
        {
          "id": 36,
          "value": 7500,
          "event_id": 1
        },
        {
          "id": 37,
          "value": 7500,
          "event_id": 2
        },
        {
          "id": 38,
          "value": 0,
          "event_id": 3
        },
        {
          "id": 39,
          "value": 0,
          "event_id": 4
        },
        {
          "id": 40,
          "value": 0,
          "event_id": 5
        }
      ],
      "subCategoryDataList": [
        {
          "sub_cat_template_id": 12,
          "subCategoryName": "dummy",
          "eventTypeDataList": [
            {
              "id": 56,
              "value": 7500,
              "event_id": 1
            },
            {
              "id": 57,
              "value": 7500,
              "event_id": 2
            },
            {
              "id": 58,
              "value": 0,
              "event_id": 3
            },
            {
              "id": 59,
              "value": 0,
              "event_id": 4
            },
            {
              "id": 60,
              "value": 0,
              "event_id": 5
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 40,
              "lineItemName": "Donor/Event",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 196,
                  "value": 7500,
                  "event_id": 1
                },
                {
                  "id": 197,
                  "value": 7500,
                  "event_id": 2
                },
                {
                  "id": 198,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 199,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 200,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Amplify Austin"
            },
            {
              "template_line_item_id": 41,
              "lineItemName": "Donor/Event",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 201,
                  "value": 0,
                  "event_id": 1
                },
                {
                  "id": 202,
                  "value": 0,
                  "event_id": 2
                },
                {
                  "id": 203,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 204,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 205,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Enter Event Here"
            },
            {
              "template_line_item_id": 42,
              "lineItemName": "Donor/Event",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 206,
                  "value": 0,
                  "event_id": 1
                },
                {
                  "id": 207,
                  "value": 0,
                  "event_id": 2
                },
                {
                  "id": 208,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 209,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 210,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Enter Event Here"
            }
          ],
          "chapterId": 0,
          "headerFlag": false
        }
      ],
      "chapterId": 0,
      "headerFlag": false,
      "accountInfo": "1515-700-4140"
    },
    {
      "cat_template_id": 9,
      "categoryName": "Tributes & Memorials",
      "eventTypeDataList": [
        {
          "id": 41,
          "value": 1000,
          "event_id": 1
        },
        {
          "id": 42,
          "value": 1000,
          "event_id": 2
        },
        {
          "id": 43,
          "value": 0,
          "event_id": 3
        },
        {
          "id": 44,
          "value": 0,
          "event_id": 4
        },
        {
          "id": 45,
          "value": 0,
          "event_id": 5
        }
      ],
      "subCategoryDataList": [
        {
          "sub_cat_template_id": 13,
          "subCategoryName": "dummy",
          "eventTypeDataList": [
            {
              "id": 61,
              "value": 1000,
              "event_id": 1
            },
            {
              "id": 62,
              "value": 1000,
              "event_id": 2
            },
            {
              "id": 63,
              "value": 0,
              "event_id": 3
            },
            {
              "id": 64,
              "value": 0,
              "event_id": 4
            },
            {
              "id": 65,
              "value": 0,
              "event_id": 5
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 43,
              "lineItemName": "dummy",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 211,
                  "value": 1000,
                  "event_id": 1
                },
                {
                  "id": 212,
                  "value": 1000,
                  "event_id": 2
                },
                {
                  "id": 213,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 214,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 215,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false
            }
          ],
          "chapterId": 0,
          "headerFlag": false
        }
      ],
      "chapterId": 0,
      "headerFlag": false,
      "accountInfo": "1515-700-4180"
    },
    {
      "cat_template_id": 10,
      "categoryName": "Clubs & Organizations Gifts",
      "eventTypeDataList": [
        {
          "id": 46,
          "value": 500,
          "event_id": 1
        },
        {
          "id": 47,
          "value": 500,
          "event_id": 2
        },
        {
          "id": 48,
          "value": 0,
          "event_id": 3
        },
        {
          "id": 49,
          "value": 0,
          "event_id": 4
        },
        {
          "id": 50,
          "value": 0,
          "event_id": 5
        }
      ],
      "subCategoryDataList": [
        {
          "sub_cat_template_id": 14,
          "subCategoryName": "dummy",
          "eventTypeDataList": [
            {
              "id": 66,
              "value": 500,
              "event_id": 1
            },
            {
              "id": 67,
              "value": 500,
              "event_id": 2
            },
            {
              "id": 68,
              "value": 0,
              "event_id": 3
            },
            {
              "id": 69,
              "value": 0,
              "event_id": 4
            },
            {
              "id": 70,
              "value": 0,
              "event_id": 5
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 44,
              "lineItemName": "dummy",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 216,
                  "value": 500,
                  "event_id": 1
                },
                {
                  "id": 217,
                  "value": 500,
                  "event_id": 2
                },
                {
                  "id": 218,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 219,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 220,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false
            }
          ],
          "chapterId": 0,
          "headerFlag": false
        }
      ],
      "chapterId": 0,
      "headerFlag": false,
      "accountInfo": "1515-700-4160"
    },
    {
      "cat_template_id": 11,
      "categoryName": "Vehicle Donation Program",
      "eventTypeDataList": [
        {
          "id": 51,
          "value": 0,
          "event_id": 1
        },
        {
          "id": 52,
          "value": 0,
          "event_id": 2
        },
        {
          "id": 53,
          "value": 0,
          "event_id": 3
        },
        {
          "id": 54,
          "value": 0,
          "event_id": 4
        },
        {
          "id": 55,
          "value": 0,
          "event_id": 5
        }
      ],
      "subCategoryDataList": [
        {
          "sub_cat_template_id": 15,
          "subCategoryName": "dummy",
          "eventTypeDataList": [
            {
              "id": 71,
              "value": 0,
              "event_id": 1
            },
            {
              "id": 72,
              "value": 0,
              "event_id": 2
            },
            {
              "id": 73,
              "value": 0,
              "event_id": 3
            },
            {
              "id": 74,
              "value": 0,
              "event_id": 4
            },
            {
              "id": 75,
              "value": 0,
              "event_id": 5
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 45,
              "lineItemName": "dummy",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 221,
                  "value": 0,
                  "event_id": 1
                },
                {
                  "id": 222,
                  "value": 0,
                  "event_id": 2
                },
                {
                  "id": 223,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 224,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 225,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false
            }
          ],
          "chapterId": 0,
          "headerFlag": false
        }
      ],
      "chapterId": 0,
      "headerFlag": false,
      "accountInfo": "1515-700-4220"
    },
    {
      "cat_template_id": 12,
      "categoryName": "Royalty Income",
      "eventTypeDataList": [
        {
          "id": 56,
          "value": 0,
          "event_id": 1
        },
        {
          "id": 57,
          "value": 0,
          "event_id": 2
        },
        {
          "id": 58,
          "value": 0,
          "event_id": 3
        },
        {
          "id": 59,
          "value": 0,
          "event_id": 4
        },
        {
          "id": 60,
          "value": 0,
          "event_id": 5
        }
      ],
      "subCategoryDataList": [
        {
          "sub_cat_template_id": 16,
          "subCategoryName": "dummy",
          "eventTypeDataList": [
            {
              "id": 76,
              "value": 0,
              "event_id": 1
            },
            {
              "id": 77,
              "value": 0,
              "event_id": 2
            },
            {
              "id": 78,
              "value": 0,
              "event_id": 3
            },
            {
              "id": 79,
              "value": 0,
              "event_id": 4
            },
            {
              "id": 80,
              "value": 0,
              "event_id": 5
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 46,
              "lineItemName": "dummy",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 226,
                  "value": 0,
                  "event_id": 1
                },
                {
                  "id": 227,
                  "value": 0,
                  "event_id": 2
                },
                {
                  "id": 228,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 229,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 230,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false
            }
          ],
          "chapterId": 0,
          "headerFlag": false
        }
      ],
      "chapterId": 0,
      "headerFlag": false,
      "accountInfo": "1515-700-4280"
    },
    {
      "cat_template_id": 13,
      "categoryName": "Government Grants",
      "eventTypeDataList": [
        {
          "id": 61,
          "value": 0,
          "event_id": 1
        },
        {
          "id": 62,
          "value": 0,
          "event_id": 2
        },
        {
          "id": 63,
          "value": 0,
          "event_id": 3
        },
        {
          "id": 64,
          "value": 0,
          "event_id": 4
        },
        {
          "id": 65,
          "value": 0,
          "event_id": 5
        }
      ],
      "subCategoryDataList": [
        {
          "sub_cat_template_id": 17,
          "subCategoryName": "dummy",
          "eventTypeDataList": [
            {
              "id": 81,
              "value": 0,
              "event_id": 1
            },
            {
              "id": 82,
              "value": 0,
              "event_id": 2
            },
            {
              "id": 83,
              "value": 0,
              "event_id": 3
            },
            {
              "id": 84,
              "value": 0,
              "event_id": 4
            },
            {
              "id": 85,
              "value": 0,
              "event_id": 5
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 47,
              "lineItemName": "dummy",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 231,
                  "value": 0,
                  "event_id": 1
                },
                {
                  "id": 232,
                  "value": 0,
                  "event_id": 2
                },
                {
                  "id": 233,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 234,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 235,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false
            }
          ],
          "chapterId": 0,
          "headerFlag": false
        }
      ],
      "chapterId": 0,
      "headerFlag": false,
      "accountInfo": "1515-700-4260"
    },
    {
      "cat_template_id": 14,
      "categoryName": "Interest & Dividend Income",
      "eventTypeDataList": [
        {
          "id": 66,
          "value": 0,
          "event_id": 1
        },
        {
          "id": 67,
          "value": 0,
          "event_id": 2
        },
        {
          "id": 68,
          "value": 0,
          "event_id": 3
        },
        {
          "id": 69,
          "value": 0,
          "event_id": 4
        },
        {
          "id": 70,
          "value": 0,
          "event_id": 5
        }
      ],
      "subCategoryDataList": [
        {
          "sub_cat_template_id": 18,
          "subCategoryName": "dummy",
          "eventTypeDataList": [
            {
              "id": 86,
              "value": 0,
              "event_id": 1
            },
            {
              "id": 87,
              "value": 0,
              "event_id": 2
            },
            {
              "id": 88,
              "value": 0,
              "event_id": 3
            },
            {
              "id": 89,
              "value": 0,
              "event_id": 4
            },
            {
              "id": 90,
              "value": 0,
              "event_id": 5
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 48,
              "lineItemName": "dummy",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 236,
                  "value": 0,
                  "event_id": 1
                },
                {
                  "id": 237,
                  "value": 0,
                  "event_id": 2
                },
                {
                  "id": 238,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 239,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 240,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false
            }
          ],
          "chapterId": 0,
          "headerFlag": false
        }
      ],
      "chapterId": 0,
      "headerFlag": false,
      "accountInfo": "1515-700-4300"
    },
    {
      "cat_template_id": 15,
      "categoryName": "Discount on Pledges Receivable",
      "eventTypeDataList": [
        {
          "id": 71,
          "value": 0,
          "event_id": 1
        },
        {
          "id": 72,
          "value": 0,
          "event_id": 2
        },
        {
          "id": 73,
          "value": 0,
          "event_id": 3
        },
        {
          "id": 74,
          "value": 0,
          "event_id": 4
        },
        {
          "id": 75,
          "value": 0,
          "event_id": 5
        }
      ],
      "subCategoryDataList": [
        {
          "sub_cat_template_id": 19,
          "subCategoryName": "dummy",
          "eventTypeDataList": [
            {
              "id": 91,
              "value": 0,
              "event_id": 1
            },
            {
              "id": 92,
              "value": 0,
              "event_id": 2
            },
            {
              "id": 93,
              "value": 0,
              "event_id": 3
            },
            {
              "id": 94,
              "value": 0,
              "event_id": 4
            },
            {
              "id": 95,
              "value": 0,
              "event_id": 5
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 49,
              "lineItemName": "dummy",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 241,
                  "value": 0,
                  "event_id": 1
                },
                {
                  "id": 242,
                  "value": 0,
                  "event_id": 2
                },
                {
                  "id": 243,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 244,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 245,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false
            }
          ],
          "chapterId": 0,
          "headerFlag": false
        }
      ],
      "chapterId": 0,
      "headerFlag": false,
      "accountInfo": "1515-700-4320"
    },
    {
      "cat_template_id": 16,
      "categoryName": "Bequests / Planned Giving",
      "eventTypeDataList": [
        {
          "id": 76,
          "value": 0,
          "event_id": 1
        },
        {
          "id": 77,
          "value": 0,
          "event_id": 2
        },
        {
          "id": 78,
          "value": 0,
          "event_id": 3
        },
        {
          "id": 79,
          "value": 0,
          "event_id": 4
        },
        {
          "id": 80,
          "value": 0,
          "event_id": 5
        }
      ],
      "subCategoryDataList": [
        {
          "sub_cat_template_id": 20,
          "subCategoryName": "dummy",
          "eventTypeDataList": [
            {
              "id": 96,
              "value": 0,
              "event_id": 1
            },
            {
              "id": 97,
              "value": 0,
              "event_id": 2
            },
            {
              "id": 98,
              "value": 0,
              "event_id": 3
            },
            {
              "id": 99,
              "value": 0,
              "event_id": 4
            },
            {
              "id": 100,
              "value": 0,
              "event_id": 5
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 50,
              "lineItemName": "dummy",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 246,
                  "value": 0,
                  "event_id": 1
                },
                {
                  "id": 247,
                  "value": 0,
                  "event_id": 2
                },
                {
                  "id": 248,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 249,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 250,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false
            }
          ],
          "chapterId": 0,
          "headerFlag": false
        }
      ],
      "chapterId": 0,
      "headerFlag": false,
      "accountInfo": "1515-700-4380"
    },
    {
      "cat_template_id": 17,
      "categoryName": "Other Income",
      "eventTypeDataList": [
        {
          "id": 81,
          "value": 0,
          "event_id": 1
        },
        {
          "id": 82,
          "value": 0,
          "event_id": 2
        },
        {
          "id": 83,
          "value": 0,
          "event_id": 3
        },
        {
          "id": 84,
          "value": 0,
          "event_id": 4
        },
        {
          "id": 85,
          "value": 0,
          "event_id": 5
        }
      ],
      "subCategoryDataList": [
        {
          "sub_cat_template_id": 21,
          "subCategoryName": "dummy",
          "eventTypeDataList": [
            {
              "id": 101,
              "value": 0,
              "event_id": 1
            },
            {
              "id": 102,
              "value": 0,
              "event_id": 2
            },
            {
              "id": 103,
              "value": 0,
              "event_id": 3
            },
            {
              "id": 104,
              "value": 0,
              "event_id": 4
            },
            {
              "id": 105,
              "value": 0,
              "event_id": 5
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 51,
              "lineItemName": "Other",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 251,
                  "value": 0,
                  "event_id": 1
                },
                {
                  "id": 252,
                  "value": 0,
                  "event_id": 2
                },
                {
                  "id": 253,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 254,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 255,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Enter Name Here"
            },
            {
              "template_line_item_id": 52,
              "lineItemName": "Other",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 256,
                  "value": 0,
                  "event_id": 1
                },
                {
                  "id": 257,
                  "value": 0,
                  "event_id": 2
                },
                {
                  "id": 258,
                  "value": 0,
                  "event_id": 3
                },
                {
                  "id": 259,
                  "value": 0,
                  "event_id": 4
                },
                {
                  "id": 260,
                  "value": 0,
                  "event_id": 5
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Enter Name Here"
            }
          ],
          "chapterId": 0,
          "headerFlag": false
        }
      ],
      "chapterId": 0,
      "headerFlag": false,
      "accountInfo": "1515-700-4400"
    },
    {
      "cat_template_id": 18,
      "categoryName": "Total Individual Gifts (Gifts > $10K and < $10K)",
      "eventTypeDataList": [
        {
          "id": 86,
          "value": 53000,
          "event_id": 1
        },
        {
          "id": 87,
          "value": 53000,
          "event_id": 2
        },
        {
          "id": 88,
          "value": 0,
          "event_id": 3
        },
        {
          "id": 89,
          "value": 0,
          "event_id": 4
        },
        {
          "id": 90,
          "value": 0,
          "event_id": 5
        }
      ],
      "subCategoryDataList": [],
      "chapterId": 0,
      "headerFlag": false
    },
    {
      "cat_template_id": 19,
      "categoryName": "Total Foundation Gifts (Gifts > $10K and < $10K)",
      "eventTypeDataList": [
        {
          "id": 91,
          "value": 67500,
          "event_id": 1
        },
        {
          "id": 92,
          "value": 60000,
          "event_id": 2
        },
        {
          "id": 93,
          "value": 0,
          "event_id": 3
        },
        {
          "id": 94,
          "value": 7500,
          "event_id": 4
        },
        {
          "id": 95,
          "value": 0,
          "event_id": 5
        }
      ],
      "subCategoryDataList": [],
      "chapterId": 0,
      "headerFlag": false
    },
    {
      "cat_template_id": 20,
      "categoryName": "Total IMG & FMG Gifts",
      "eventTypeDataList": [
        {
          "id": 96,
          "value": 120500,
          "event_id": 1
        },
        {
          "id": 97,
          "value": 113000,
          "event_id": 2
        },
        {
          "id": 98,
          "value": 0,
          "event_id": 3
        },
        {
          "id": 99,
          "value": 7500,
          "event_id": 4
        },
        {
          "id": 100,
          "value": 0,
          "event_id": 5
        }
      ],
      "subCategoryDataList": [],
      "chapterId": 0,
      "headerFlag": false
    },
    {
      "cat_template_id": 21,
      "categoryName": "TOTAL MAJOR GIFTS",
      "eventTypeDataList": [
        {
          "id": 101,
          "value": 120500,
          "event_id": 1
        },
        {
          "id": 102,
          "value": 113000,
          "event_id": 2
        },
        {
          "id": 103,
          "value": 0,
          "event_id": 3
        },
        {
          "id": 104,
          "value": 7500,
          "event_id": 4
        },
        {
          "id": 105,
          "value": 0,
          "event_id": 5
        }
      ],
      "subCategoryDataList": [],
      "chapterId": 0,
      "headerFlag": false
    },
    {
      "cat_template_id": 22,
      "categoryName": "TOTAL OTHER REVENUE",
      "eventTypeDataList": [
        {
          "id": 106,
          "value": 12701,
          "event_id": 1
        },
        {
          "id": 107,
          "value": 12701,
          "event_id": 2
        },
        {
          "id": 108,
          "value": 0,
          "event_id": 3
        },
        {
          "id": 109,
          "value": 0,
          "event_id": 4
        },
        {
          "id": 110,
          "value": 0,
          "event_id": 5
        }
      ],
      "subCategoryDataList": [],
      "chapterId": 0,
      "headerFlag": false
    },
    {
      "cat_template_id": 23,
      "categoryName": "TOTAL MAJOR GIFTS AND OTHER REVENUE",
      "eventTypeDataList": [
        {
          "id": 111,
          "value": 133201,
          "event_id": 1
        },
        {
          "id": 112,
          "value": 125701,
          "event_id": 2
        },
        {
          "id": 113,
          "value": 0,
          "event_id": 3
        },
        {
          "id": 114,
          "value": 7500,
          "event_id": 4
        },
        {
          "id": 115,
          "value": 0,
          "event_id": 5
        }
      ],
      "subCategoryDataList": [],
      "chapterId": 0,
      "headerFlag": false
    }
  ]
}

export const administrationHeaderColumns = [
  { field: "name", headerName: "", width: "300", editable: true, cellClassName: "mediumFontSize" },
  // { field: "adminGeneral", headerName: "Admin General", width: "300", editable: true, headerClassName: 'aqua mediumFontSize', headerAlign: 'center', cellClassName: 'aqua', align: 'center' },
  // { field: "total", headerName: "", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
];

export const administrationColumns = [
  { field: "subCategoryName", headerName: "", width: "180", editable: true, cellClassName: "mediumFontSize" },
  {
    field: "lineItemName", headerName: "", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center',
    cellClassName: (params) => {
      if (params.value === 'Renewals Subtotal' || params.value === 'New Gifts Subtotal') {
        return "";
      }
      else return ""
    }, align: 'center'
  },
  { field: "companyCode", headerName: "", width: "300", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
  // { field: "adminGeneral", headerName: "Admin General", width: "300", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: 'bg_darkGray', align: 'center' },
  // { field: "total", headerName: "total", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
];

export const administrationStructure = {
  categoryList: [
    {
      cat_id: 1,

      categoryName: "Occupancy",
      total: '',
      companyCode: null,

      subCategoryList: [
        {
          sub_cat_id: 100,

          subCategoryName: "dummy",
          companyCode: null,
          total: '',

          lineItems: [
            {
              line_item_id: 2000,
              lineItemName: "Base Rent",
              companyCode: '7135',
              adminGeneral: '',
              total: '',
            },
            {
              line_item_id: 2000,
              lineItemName: "Rent Escalation",
              companyCode: '7140',
              adminGeneral: '',
              total: '',
            },
            {
              line_item_id: 2000,
              lineItemName: "Real Estate Taxes",
              companyCode: '7150',
              adminGeneral: '',
              total: '',
            },
            {
              line_item_id: 2000,
              lineItemName: "Utilities",
              companyCode: '7145',
              adminGeneral: '',
              total: '',
            },
          ]
        },
        {
          sub_cat_id: 100,

          subCategoryName: "Other Total:",
          companyCode: '5',
          total: '',

          lineItems: [
            {
              line_item_id: 2000,
              lineItemName: "Storage",
              companyCode: '',
              adminGeneral: '',
              total: '',
            },
            {
              line_item_id: 2000,
              lineItemName: "Parking",
              companyCode: '',
              adminGeneral: '',
              total: '',

            },
            {
              line_item_id: 2000,
              lineItemName: "Moving Cost",
              companyCode: '',
              adminGeneral: '',
              total: '',

            },
            {
              line_item_id: 2000,
              lineItemName: "CAM",
              companyCode: '',
              adminGeneral: '',
              total: '',

            },
            {
              line_item_id: 2000,
              lineItemName: "Other",
              companyCode: '',
              adminGeneral: '',
              total: '',

            },
          ]
        }
      ]
    }
  ]
}

export const administrationChapterStructure = {
  categoryList: [
    {
      cat_id: 1,

      categoryName: "Occupancy",
      total: '',
      companyCode: null,
      "eventTypeDataList": [
        {
          "id": 134,
          "value": 40000,
          "eventName": "Walk 1",
          "eventId": 5,
        }
      ],

      subCategoryDataList: [
        {
          sub_cat_id: 100,

          subCategoryName: "dummy",
          companyCode: null,
          total: '',
          "eventTypeDataList": [
            {
              "id": 25,
              "value": 40000,
              "eventName": "Walk 1",
              "eventId": 5,
            },
            {
              "id": 367,
              "value": 5555,
              "eventName": "Walk 1",
              "eventId": 6,
            }],

          lineItemDataList: [
            {
              line_item_id: 2000,
              lineItemName: "Base Rent",
              companyCode: '7135',
              total: '',
              "eventTypeDataList": [
                {
                  "id": 4768,
                  "value": 40000,
                  "eventName": "Walk 1",
                  "eventId": 5,
                },
                {
                  "id": 57,
                  "value": 5555,
                  "eventName": "Walk 1",
                  "eventId": 6,
                }],
            },
            {
              line_item_id: 2000,
              lineItemName: "Rent Escalation",
              companyCode: '7140',
              total: '',
              "eventTypeDataList": [
                {
                  "id": 6534,
                  "value": 40000,
                  "eventName": "Walk 1",
                  "eventId": 5,
                }],
            },
            {
              line_item_id: 2000,
              lineItemName: "Real Estate Taxes",
              companyCode: '7150',
              adminGeneral: '',
              total: '',
            },
            {
              line_item_id: 2000,
              lineItemName: "Utilities",
              companyCode: '7145',
              adminGeneral: '',
              total: '',
            },
          ]
        },
        {
          sub_cat_id: 100,

          subCategoryName: "Other Total:",
          companyCode: '5',
          total: '',
          "eventTypeDataList": [
            {
              "id": 7322,
              "value": 40000,
              "eventName": "Walk 1",
              "eventId": 5,
            }],

          lineItemDataList: [
            {
              line_item_id: 2000,
              lineItemName: "Storage",
              companyCode: '',
              adminGeneral: '',
              total: '',
            },
            {
              line_item_id: 2000,
              lineItemName: "Parking",
              companyCode: '',
              adminGeneral: '',
              total: '',

            },
            {
              line_item_id: 2000,
              lineItemName: "Moving Cost",
              companyCode: '',
              adminGeneral: '',
              total: '',

            },
            {
              line_item_id: 2000,
              lineItemName: "CAM",
              companyCode: '',
              adminGeneral: '',
              total: '',

            },
            {
              line_item_id: 2000,
              lineItemName: "Other",
              companyCode: '',
              adminGeneral: '',
              total: '',

            },
          ]
        }
      ]
    }
  ]
}

export const administrationMTColumns = [
  { field: "subCategoryName", headerName: "", width: "180", editable: true, cellClassName: "mediumFontSize" },
  {
    field: "lineItemName", headerName: "", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center',
    cellClassName: (params) => {
      if (params.value === 'Renewals Subtotal' || params.value === 'New Gifts Subtotal') {
        return "";
      }
      else return ""
    }, align: 'center'
  },
  {
    field: "companyCode", headerName: "", width: "430", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: (params) => {
      if (['Subledger:', 'Travel/Meeting Purpose:', 'Number of Attendees/Travelers:'].includes(params.value)) {
        return "bigFontSize"
      }
      else return ""
    }, align: 'center'
  },
  { field: "adminGeneral", headerName: "Admin General", width: "250", editable: true, headerClassName: 'mediumFontSize aqua', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "businessPurpose1", headerName: "Business Purpose 1", width: "250", editable: true, headerClassName: 'mediumFontSize peach', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "businessPurpose2", headerName: "Business Purpose 2", width: "250", editable: true, headerClassName: 'mediumFontSize peach', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "businessPurpose3", headerName: "Business Purpose 3", width: "250", editable: true, headerClassName: 'mediumFontSize peach', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "businessPurpose4", headerName: "Business Purpose 4", width: "250", editable: true, headerClassName: 'mediumFontSize peach', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "businessPurpose5", headerName: "Business Purpose 5", width: "250", editable: true, headerClassName: 'mediumFontSize peach', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "businessPurpose6", headerName: "Business Purpose 6", width: "250", editable: true, headerClassName: 'mediumFontSize peach', headerAlign: 'center', cellClassName: '', align: 'center' },
];


export const administrationMTHeader = {
  categoryList: [
    {
      cat_id: 1,

      categoryName: "dummy",

      subCategoryList: [
        {
          sub_cat_id: 100,

          subCategoryName: "dummy",
          adminGeneral: '',

          lineItems: [
            {
              line_item_id: 2000,
              lineItemName: "",
              companyCode: 'Subledger:',
              adminGeneral: '',
              businessPurpose1: '07001',
              businessPurpose2: '07006',
              businessPurpose3: '07007',
              businessPurpose4: '07100',
              businessPurpose5: '07105',
              businessPurpose6: '07101'
            },
            {
              line_item_id: 2000,
              lineItemName: "",
              companyCode: 'Travel/Meeting Purpose:',
              adminGeneral: 'TOTAL',
              businessPurpose1: 'National Board Meeting',
              businessPurpose2: 'National Chapter President Submit',
              businessPurpose3: 'National July field Conference',
              businessPurpose4: 'Digestive Disease Week(DDW)',
              businessPurpose5: `Crohn's & Colitis Congress`,
              businessPurpose6: 'Voices Conference NY'

            },
            {
              line_item_id: 2000,
              lineItemName: "",
              companyCode: 'Number of Attendees/Travelers:',
              adminGeneral: '0',
              businessPurpose1: '0',
              businessPurpose2: '0',
              businessPurpose3: '0',
              businessPurpose4: '0',
              businessPurpose5: '0',
              businessPurpose6: '0',
            },
          ]
        },
      ]
    }]
}

export const administrationMTStructure = {
  categoryList: [
    {
      cat_id: 1,

      categoryName: "Meeting and Travel",

      subCategoryList: [
        {
          sub_cat_id: 100,

          subCategoryName: "Air and Ground",
          adminGeneral: '',
          companyCode: '7105',

          lineItems: [
            {
              line_item_id: 2000,
              lineItemName: "Airfare",
              companyCode: ':',
              adminGeneral: '',
            },
            {
              line_item_id: 2000,
              lineItemName: "Transportation",
              companyCode: '',
              adminGeneral: '',
            },
            {
              line_item_id: 2000,
              lineItemName: "Rental",
              companyCode: '',
              adminGeneral: ''
            },
          ]
        },
        {
          sub_cat_id: 100,

          subCategoryName: "Air and Ground",
          adminGeneral: '',
          companyCode: '7105',

          lineItems: [
            {
              line_item_id: 2000,
              lineItemName: "Airfare",
              companyCode: ':',
              adminGeneral: '',
            },
            {
              line_item_id: 2000,
              lineItemName: "Transportation",
              companyCode: '',
              adminGeneral: '',
            },
            {
              line_item_id: 2000,
              lineItemName: "Rental",
              companyCode: '',
              adminGeneral: ''
            },
          ]
        },

      ]
    }
  ]
}

export const administrationMTChapterStructure = {
  categoryList: [
    {
      cat_id: 1,

      categoryName: "Meeting and Travel",

      subCategoryDataList: [
        {
          sub_cat_id: 100,

          subCategoryName: "Air and Ground",
          adminGeneral: '',
          companyCode: '7105',

          lineItemDataList: [
            {
              line_item_id: 2000,
              lineItemName: "Airfare",
              companyCode: ':',
              adminGeneral: '',
            },
            {
              line_item_id: 2000,
              lineItemName: "Transportation",
              companyCode: '',
              adminGeneral: '',
            },
            {
              line_item_id: 2000,
              lineItemName: "Rental",
              companyCode: '',
              adminGeneral: ''
            },
          ]
        },
        {
          sub_cat_id: 100,

          subCategoryName: "Air and Ground",
          adminGeneral: '',
          companyCode: '7105',

          lineItemDataList: [
            {
              line_item_id: 2000,
              lineItemName: "Airfare",
              companyCode: ':',
              adminGeneral: '',
            },
            {
              line_item_id: 2000,
              lineItemName: "Transportation",
              companyCode: '',
              adminGeneral: '',
            },
            {
              line_item_id: 2000,
              lineItemName: "Rental",
              companyCode: '',
              adminGeneral: ''
            },
          ]
        },

      ]
    }
  ]
}

export const specialEventsColumns = [
  { field: "subCategoryName", headerName: "", width: "400", editable: true, cellClassName: "mediumFontSize" },
  { field: "companyCode", headerName: "", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "total", headerName: "", width: "250", editable: true, headerClassName: 'mediumFontSize aqua', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "overhead", headerName: "", width: "250", editable: true, headerClassName: 'mediumFontSize aqua', headerAlign: 'center', cellClassName: 'bg_dark', align: 'center' },
  {
    field: "eventType1",
    editable: true,
    width: 250,
    cellClassName: 'bg_lightGray',
  },
  {
    field: "eventType2",
    editable: true,
    width: 250,
    cellClassName: 'bg_lightGray',
  },
  {
    field: "eventType3",
    editable: true,
    width: 250,
    cellClassName: 'bg_lightGray',
  },
  {
    field: "eventType4",
    editable: true,
    width: 250,
    cellClassName: 'bg_lightGray',
  }
];


export const specialEventsHeader = {
  categoryList: [
    {
      cat_id: 1,

      categoryName: "dummy",

      subCategoryList: [
        {
          sub_cat_id: 100,

          subCategoryName: "dummy",
          total: '',

          lineItems: [
            {
              line_item_id: 2000,
              lineItemName: "",
              total: 'Select Event Type:',
              overhead: 'Overhead',
              eventType1: 'Enter Event type',
              eventType2: 'Enter Event type',
              eventType3: 'Enter Event type',
              eventType4: 'Enter Event type',

            },
            {
              line_item_id: 2000,
              lineItemName: "",
              total: 'Enter Subledger:',
              overhead: '07000',
              eventType1: 'Enter Subledger Here',
              eventType2: 'Enter Subledger Here',
              eventType3: 'Enter Subledger Here',
              eventType4: 'Enter Subledger Here',


            },
            {
              line_item_id: 2000,
              lineItemName: "",
              total: 'New Event / Occurred in prior year',
              overhead: '',
              eventType1: 'New or Old Event?',
              eventType2: 'New or Old Event?',
              eventType3: 'New or Old Event?',
              eventType4: 'New or Old Event?',
            },
            {
              line_item_id: 2000,
              lineItemName: "",
              total: 'Enter name of Event:',
              overhead: 'Overhead',
              eventType1: 'Enter Name here',
              eventType2: 'Enter Name here',
              eventType3: 'Enter Name here',
              eventType4: 'Enter Name here',
            },
            {
              line_item_id: 2000,
              lineItemName: "",
              companyCode: 'Account Number'
            },
            {
              line_item_id: 2000,
              lineItemName: "",
              total: 'Total',
            },
          ]
        },
      ]
    }]
}

export const specialEventsStructure = {
  categoryList: [
    {
      cat_id: 1,

      categoryName: "Special Events Revenue:",

      subCategoryList: [
        {
          sub_cat_id: 100,

          subCategoryName: "dummy",
          adminGeneral: '',
          companyCode: '7105',

          lineItems: [
            {
              line_item_id: 2000,
              lineItemName: "Corporate Sponsors Revenue",
              companyCode: ':',
              total: '',
            },
            {
              line_item_id: 2000,
              lineItemName: "Foundation Sponsors Revenue",
              companyCode: ':',
              total: '',
            },
            {
              line_item_id: 2000,
              lineItemName: "Auction Revenue",
              companyCode: ':',
              total: '',
            },
          ]
        },
        {
          sub_cat_id: 100,

          subCategoryName: "Air and Ground",
          adminGeneral: '',
          companyCode: '7105',

          lineItems: [
            {
              line_item_id: 2000,
              lineItemName: "Airfare",
              companyCode: ':',
              adminGeneral: '',
            },
            {
              line_item_id: 2000,
              lineItemName: "Transportation",
              companyCode: '',
              adminGeneral: '',
            },
            {
              line_item_id: 2000,
              lineItemName: "Rental",
              companyCode: '',
              adminGeneral: ''
            },
          ]
        },

      ]
    }
  ]
}

export const specialEventsChapterStructure = {
  categoryList: [
    {
      cat_id: 1,

      categoryName: "Special Events Revenue:",

      subCategoryDataList: [
        {
          sub_cat_id: 100,

          subCategoryName: "dummy",
          adminGeneral: '',
          companyCode: '7105',

          lineItemDataList: [
            {
              line_item_id: 2000,
              lineItemName: "Corporate Sponsors Revenue",
              companyCode: ':',
              total: '',
            },
            {
              line_item_id: 2000,
              lineItemName: "Foundation Sponsors Revenue",
              companyCode: ':',
              total: '',
            },
            {
              line_item_id: 2000,
              lineItemName: "Auction Revenue",
              companyCode: ':',
              total: '',
            },
          ]
        },
        {
          sub_cat_id: 100,

          subCategoryName: "Air and Ground",
          adminGeneral: '',
          companyCode: '7105',

          lineItemDataList: [
            {
              line_item_id: 2000,
              lineItemName: "Airfare",
              companyCode: ':',
              adminGeneral: '',
            },
            {
              line_item_id: 2000,
              lineItemName: "Transportation",
              companyCode: '',
              adminGeneral: '',
            },
            {
              line_item_id: 2000,
              lineItemName: "Rental",
              companyCode: '',
              adminGeneral: ''
            },
          ]
        },

      ]
    }
  ]
}


export const consolidatedColumns = [
  { field: "subCategoryName", headerName: "", width: "400", editable: true, cellClassName: (params) => {
    if (['Revenue','Expenses'].includes(params.value)) {
      return "blackAndWhite mediumFontSize"
    }
    else if([].includes(params.value)){

    }
    else return ""
  } },
  { field: "budget", headerName: "Budget", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "actual", headerName: "Actual", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "variance", headerName: "Variance", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "previousYearPercentageVariance", headerName: "%Variance", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "2021Budget", headerName: "2021 Budget", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "2021Forecast", headerName: "2021 Forecast", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "specialEvents", headerName: "Special Events", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "spin4", headerName: "Spin4", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "takeSteps", headerName: "Take Steps", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "other", headerName: "Other", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "admin", headerName: "Admin", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "total2022Budget", headerName: "Total 2022 Budget", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "forecastVsBudgetVariance", headerName: "Forecast vs Budget Variance", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "currentYearPercentageVariance", headerName: "% Variance", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "previousYear", headerName: "2021", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "currentYear", headerName: "2022", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
]

export const consolidatedStructure = {
  categoryList: [
    {
      cat_id: 1,

      categoryName: "Revenue",

      subCategoryList: [
        {
          sub_cat_id: 100,
          subCategoryName: "Net Revenue from Special Events",
          lineItems: [
            {
              line_item_id: 2000,
              lineItemName: "Special Event Revenue",
            },
            {
              line_item_id: 2000,
              lineItemName: "Less: Direct Special Event Expenses",
            }
          ]
        },
        {
          sub_cat_id: 100,
          subCategoryName: "Net Revenue from Team Challenge",
          lineItems: [
            {
              line_item_id: 2000,
              lineItemName: "Team Challenge",
            },
            {
              line_item_id: 2000,
              lineItemName: "Less: Direct Team Challenge Expenses",
            }
          ]
        },

      ]
    },
    {
      cat_id: 1,

      categoryName: "Expenses",

      subCategoryList: [
        {
          sub_cat_id: 100,
          subCategoryName: "Direct Mission Expenses",
          lineItems: [
            {
              line_item_id: 2000,
              lineItemName: "Research",
            },
            {
              line_item_id: 2000,
              lineItemName: "Mission-conference & Symposiums",
            }
          ]
        },
        {
          sub_cat_id: 100,
          subCategoryName: "Operating Expenses ",
          lineItems: [
            {
              line_item_id: 2000,
              lineItemName: "Compensation",
            },
            {
              line_item_id: 2000,
              lineItemName: "occupancy",
            }
          ]
        },

      ]
    }
  ]
}

export const consolidatedChapterStructure = {
  categoryList: [
    {
      cat_id: 1,

      categoryName: "Revenue",

      subCategoryDataList: [
        {
          sub_cat_id: 100,
          subCategoryName: "Net Revenue from Special Events",
          lineItemDataList: [
            {
              line_item_id: 2000,
              lineItemName: "Special Event Revenue",
            },
            {
              line_item_id: 2000,
              lineItemName: "Less: Direct Special Event Expenses",
            }
          ]
        },
        {
          sub_cat_id: 100,
          subCategoryName: "Net Revenue from Team Challenge",
          lineItemDataList: [
            {
              line_item_id: 2000,
              lineItemName: "Team Challenge",
            },
            {
              line_item_id: 2000,
              lineItemName: "Less: Direct Team Challenge Expenses",
            }
          ]
        },

      ]
    },
    {
      cat_id: 1,

      categoryName: "Expenses",

      subCategoryDataList: [
        {
          sub_cat_id: 100,
          subCategoryName: "Direct Mission Expenses",
          lineItemDataList: [
            {
              line_item_id: 2000,
              lineItemName: "Research",
            },
            {
              line_item_id: 2000,
              lineItemName: "Mission-conference & Symposiums",
            }
          ]
        },
        {
          sub_cat_id: 100,
          subCategoryName: "Operating Expenses ",
          lineItemDataList: [
            {
              line_item_id: 2000,
              lineItemName: "Compensation",
            },
            {
              line_item_id: 2000,
              lineItemName: "occupancy",
            }
          ]
        },

      ]
    }
  ]
}

export const budgetColumns = [
  { field: "budgetTreeId", headerName: "Budget Tree Id", width: "180", editable: true, cellClassName:  ""  } ,
  { field: "categoryName", headerName: "Subledger", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "subCategoryName", headerName: "Account #", width: "400", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "lineItemName", headerName: "Department & Acct Description ", width: "400", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "lineItemDescription", headerName: "Line Item Description", width: "400", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "openingBalance", headerName: "Opening Balance", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "period1-2021", headerName: "Period 1 - 2021", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "period2-2021", headerName: "Period 2 - 2021", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "period3-2021", headerName: "Period 3 - 2021", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "period4-2021", headerName: "Period 4 - 2021", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "total", headerName: "Total", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
]

export const budgetStructure = {
  categoryList: [
    {
      cat_id: 1,

      categoryName: "spin4 - Austin",

      subCategoryList: [
        {
          sub_cat_id: 100,
          subCategoryName: "80005 - Central Texas - Austin",
          lineItems: [
            {
              line_item_id: 2000,
              account:'1515-315-5015',
              lineItemName: "spin4 - Revenue - Registration Fees",
              lineItemDescription: "Registration Fees - 5015"
            },
            {
              line_item_id: 2000,
              account:'1515-315-5000',
              lineItemName: "spin4 - Revenue - Participant",
              lineItemDescription: "Donations - 5000",
            },
          ]
        }

      ]
    },
    {
      cat_id: 1,

      categoryName: "Take Steps 1",

      subCategoryList: [
        {
          sub_cat_id: 100,
          subCategoryName: "02001-Austin",
          lineItems: [
            {
              line_item_id: 2000,
              account:'1515-315-5005',
              lineItemName: "Take Steps - Revenue - Team",
              lineItemDescription: "Total Team Revenue (5005)"
            },
            {
              line_item_id: 2000,
              account:'1515-400-5000',
              lineItemName: "Take Steps - Revenue - Participant",
              lineItemDescription: "Revenue from Individuals - 5000"
            }
          ]
        }

      ]
    }
  ]
}

export const budgetChapterStructure = {
  categoryList: [
    {
      cat_id: 1,

      categoryName: "spin4 - Austin",

      subCategoryDataList: [
        {
          sub_cat_id: 100,
          subCategoryName: "80005 - Central Texas - Austin",
          lineItemDataList: [
            {
              line_item_id: 2000,
              account:'1515-315-5015',
              lineItemName: "spin4 - Revenue - Registration Fees",
              lineItemDescription: "Registration Fees - 5015"
            },
            {
              line_item_id: 2000,
              account:'1515-315-5000',
              lineItemName: "spin4 - Revenue - Participant",
              lineItemDescription: "Donations - 5000",
            },
          ]
        }

      ]
    },
    {
      cat_id: 1,

      categoryName: "Take Steps 1",

      subCategoryDataList: [
        {
          sub_cat_id: 100,
          subCategoryName: "02001-Austin",
          lineItemDataList: [
            {
              line_item_id: 2000,
              account:'1515-315-5005',
              lineItemName: "Take Steps - Revenue - Team",
              lineItemDescription: "Total Team Revenue (5005)"
            },
            {
              line_item_id: 2000,
              account:'1515-400-5000',
              lineItemName: "Take Steps - Revenue - Participant",
              lineItemDescription: "Revenue from Individuals - 5000"
            }
          ]
        }

      ]
    }
  ]
}


export const adminEventHeader = {

  "eventHeaderList":[

     {

        "event_id":5,

        "eventName":"Admin General",

        "subledger":"07000"

     },
     {

      "event_id":6,

      "eventName":"Total",

      "subledger":"06000"

   }

  ],

  "campaignId":5

}

export const chapterList ={
  "chapterInfoList":[
     {
        "chapterId":1,
        "chapterName":"Central Texas",
        "chapterDescription":"515 CTX - Central Texas",
        "chapterCode":1515,
        "chapterArea":"West",
        "departmentCode":700,
        "subLedgerCode":0,
        "adminDepartmentCode":100
     },
     {
        "chapterId":2,
        "chapterName":"North Texas & Oklahoma",
        "chapterDescription":"520 NTX - North Texas & Oklahoma",
        "chapterCode":1520,
        "chapterArea":"West",
        "departmentCode":700,
        "subLedgerCode":0,
        "adminDepartmentCode":100
     }
  ]
}

export const majorGiftsEventHeader = {
  "eventHeaderList":[
     {
        "event_id":1,
        "eventName":"Total"
     },
     {
        "event_id":2,
        "eventName":"Unrestricted",
        "subledger":"07000"
     },
     {
        "event_id":3,
        "eventName":"Research Restricted",
        "subledger":"06000"
     },
     {
        "event_id":4,
        "eventName":"ESA Camp",
        "subledger":"07000"
     },
     {
        "event_id":5,
        "eventName":"ESA Other",
        "subledger":"07000"
     }
  ],
  "campaignId":4
}