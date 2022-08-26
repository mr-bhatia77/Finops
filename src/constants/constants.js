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
  { field: "unrestricted", headerName: "Unrestricted", width: "180", editable: true, headerClassName: 'aqua mediumFontSize', headerAlign: 'center', cellClassName: 'aqua', align: 'center' },
  { field: "researchRestricted", headerName: "Research Restricted", width: "180", editable: true, headerClassName: 'peach mediumFontSize', headerAlign: 'center', cellClassName: 'peach', align: 'center' },
  { field: "esaCamp", headerName: "ESA Camp", width: "180", editable: true, headerClassName: 'backgroundYellow mediumFontSize', headerAlign: 'center', cellClassName: 'backgroundYellow', align: 'center' },
  { field: "esaOther", headerName: "ESA Other", width: "180", editable: true, headerClassName: 'backgroundYellow mediumFontSize', headerAlign: 'center', cellClassName: 'backgroundYellow', align: 'center' },
];

export const majorGiftsColumns = [
  { field: "name", headerName: "", width: "254", editable: true, cellClassName: "mediumFontSize" },
  {
    field: "lineItemName", headerName: "", width: "254", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center',
    cellClassName: (params) => {
      if (params.value === 'Renewals Subtotal' || params.value === 'New Gifts Subtotal') {
        return "";
      }
      else return "bg_darkGray"
    }, align: 'center'
  },
  { field: "total", headerName: "Total", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "unrestricted", headerName: "Unrestricted", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: 'bg_darkGray', align: 'center' },
  { field: "researchRestricted", headerName: "Research Restricted", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: 'bg_darkGray', align: 'center' },
  { field: "esaCamp", headerName: "ESA Camp", width: "180", editable: true, headerClassName: ' mediumFontSize', headerAlign: 'center', cellClassName: 'bg_darkGray', align: 'center' },
  { field: "esaOther", headerName: "ESA Other", width: "180", editable: true, headerClassName: ' mediumFontSize', headerAlign: 'center', cellClassName: 'bg_darkGray', align: 'center' },
];

export const majorGiftsStructure = {
  categoryList: [
    {
      cat_id: 1,

      categoryName: "Individual Gifts Less Than $10,000",

      subCategoryList: [
        {
          sub_cat_id: 100,

          subCategoryName: "Renewals",


          lineItems: [
            {
              line_item_id: 2000,
              lineItemName: "Enter Donor Here",
              total: '',
              unrestricted: '0.00',
              researchRestricted: '0.00',
              esaCamp: '0.00',
              esaOther: '0.00'

            },
            {
              line_item_id: 2000,
              lineItemName: "Enter Donor Here",
              total: '',
              unrestricted: '0.00',
              researchRestricted: '0.00',
              esaCamp: '0.00',
              esaOther: '0.00'

            },
            {
              line_item_id: 2000,
              lineItemName: "Enter Donor Here",
              total: '',
              unrestricted: '0.00',
              researchRestricted: '0.00',
              esaCamp: '0.00',
              esaOther: '0.00'

            }
          ]
        },
        {
          sub_cat_id: 100,

          subCategoryName: "New Gifts",


          lineItems: [
            {
              line_item_id: 2000,
              lineItemName: "Enter Donor Here",
              total: '',
              unrestricted: '0.00',
              researchRestricted: '0.00',
              esaCamp: '0.00',
              esaOther: '0.00'

            },
            {
              line_item_id: 2000,
              lineItemName: "Enter Donor Here",
              total: '',
              unrestricted: '0.00',
              researchRestricted: '0.00',
              esaCamp: '0.00',
              esaOther: '0.00'

            },
            {
              line_item_id: 2000,
              lineItemName: "Enter Donor Here",
              total: '',
              unrestricted: '0.00',
              researchRestricted: '0.00',
              esaCamp: '0.00',
              esaOther: '0.00'

            }
          ]
        }
      ]
    }
  ]
}

export const majorGiftsChapterStructure = {
  categoryList: [
    {
      cat_id: 1,

      categoryName: "Individual Gifts Less Than $10,000",

      subCategoryDataList: [
        {
          sub_cat_id: 100,

          subCategoryName: "Renewals",


          lineItemDataList: [
            {
              line_item_id: 2000,
              lineItemName: "Enter Donor Here",
              total: '',
              unrestricted: '0.00',
              researchRestricted: '0.00',
              esaCamp: '0.00',
              esaOther: '0.00'

            },
            {
              line_item_id: 2000,
              lineItemName: "Enter Donor Here",
              total: '',
              unrestricted: '0.00',
              researchRestricted: '0.00',
              esaCamp: '0.00',
              esaOther: '0.00'

            },
            {
              line_item_id: 2000,
              lineItemName: "Enter Donor Here",
              total: '',
              unrestricted: '0.00',
              researchRestricted: '0.00',
              esaCamp: '0.00',
              esaOther: '0.00'

            }
          ]
        },
        {
          sub_cat_id: 100,

          subCategoryName: "New Gifts",


          lineItemDataList: [
            {
              line_item_id: 2000,
              lineItemName: "Enter Donor Here",
              total: '',
              unrestricted: '0.00',
              researchRestricted: '0.00',
              esaCamp: '0.00',
              esaOther: '0.00'

            },
            {
              line_item_id: 2000,
              lineItemName: "Enter Donor Here",
              total: '',
              unrestricted: '0.00',
              researchRestricted: '0.00',
              esaCamp: '0.00',
              esaOther: '0.00'

            },
            {
              line_item_id: 2000,
              lineItemName: "Enter Donor Here",
              total: '',
              unrestricted: '0.00',
              researchRestricted: '0.00',
              esaCamp: '0.00',
              esaOther: '0.00'

            }
          ]
        }
      ]
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
          "id": 5,
          "value": 40000,
          "eventName": "Walk 1"
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
              "id": 5,
              "value": 40000,
              "eventName": "Walk 1"
            }],

          lineItemDataList: [
            {
              line_item_id: 2000,
              lineItemName: "Base Rent",
              companyCode: '7135',
              total: '',
              "eventTypeDataList": [
                {
                  "id": 5,
                  "value": 40000,
                  "eventName": "Walk 1"
                }],
            },
            {
              line_item_id: 2000,
              lineItemName: "Rent Escalation",
              companyCode: '7140',
              total: '',
              "eventTypeDataList": [
                {
                  "id": 5,
                  "value": 40000,
                  "eventName": "Walk 1"
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
              "id": 5,
              "value": 40000,
              "eventName": "Walk 1"
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

      "eventName":"new Admin General",

      "subledger":"07000"

   }

  ],

  "campaignId":5

}