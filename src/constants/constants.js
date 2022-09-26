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
    field: "8",
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
          takeStepsOverHead: 'Take Steps Overhead',
          '8': 'Chapter Total',
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
          takeStepsOverHead: 'Take Steps Overhead',
          chapterTotal: 'Chapter Total',
          walkColumn1: 'Austin',
          walkColumn2: 'Austin'

        },
        {
          line_item_id: 1000,
          lineItemName: "Event Date:",
          walkColumn1: '15-05-2021',
          walkColumn2: 'Notes'
        },
        {
          line_item_id: 1001,
          lineItemName: "Staff",
          walkColumn1: 'Derek Dodson'
        },
        {
          line_item_id: 2001,

          lineItemName: "Subledger Code:",
          takeStepsOverHead: '07000',
          walkColumn1: '02001'
        }
      ]
    }
  ]
}

export const takeStepsStructure = {
  "categoryList": [
    {
      "cat_id": 27,
      "categoryName": "GROSS CAMPAIGN REVENUE",
      "headerFlag": true,
      "subCategoryList": [
        {
          "sub_cat_id": 22,
          "subCategoryName": "Total Number of All Registered Teams",
          "lineItems": [
            {
              "line_item_id": 53,
              "lineItemName": "Number of Registered Veteran Mega/A Teams",
              "pricePerPiece": 0,
              "lineItemDescription": "Number of Registered Veteran Mega/A Teams"
            },
            {
              "line_item_id": 54,
              "lineItemName": "Number of Registered Veteran B/C Teams",
              "pricePerPiece": 0,
              "lineItemDescription": "Number of Registered Veteran B/C Teams"
            },
            {
              "line_item_id": 55,
              "lineItemName": "Number of Registered New Teams",
              "pricePerPiece": 0,
              "lineItemDescription": "Number of Registered New Teams"
            }
          ]
        },
        {
          "sub_cat_id": 23,
          "subCategoryName": "Total Team Revenue (5005)",
          "lineItems": [
            {
              "line_item_id": 56,
              "lineItemName": "Revenue from Veteran Mega/A Teams",
              "pricePerPiece": 0,
              "lineItemDescription": "Revenue from Veteran Mega/A Teams"
            },
            {
              "line_item_id": 57,
              "lineItemName": "Revenue from Veteran B/C Teams ",
              "pricePerPiece": 0,
              "lineItemDescription": "Revenue from Veteran B/C Teams "
            },
            {
              "line_item_id": 58,
              "lineItemName": "Revenue from New Teams ",
              "pricePerPiece": 0,
              "lineItemDescription": "Revenue from New Teams "
            }
          ]
        },
        {
          "sub_cat_id": 24,
          "subCategoryName": "Individuals and Other",
          "lineItems": [
            {
              "line_item_id": 59,
              "lineItemName": "Revenue from Individuals - 5000",
              "pricePerPiece": 0,
              "lineItemDescription": "Revenue from Individuals - 5000"
            },
            {
              "line_item_id": 60,
              "lineItemName": "Other Revenue - 5025",
              "pricePerPiece": 0,
              "lineItemDescription": "Other Revenue - 5025"
            }
          ]
        },
        {
          "sub_cat_id": 25,
          "subCategoryName": "Total Sponsor Revenue (5010)",
          "lineItems": [
            {
              "line_item_id": 61,
              "lineItemName": "Revenue from Veteran Sponsors ",
              "pricePerPiece": 0,
              "lineItemDescription": "Revenue from Veteran Sponsors "
            },
            {
              "line_item_id": 62,
              "lineItemName": "Revenue from New Sponsors ",
              "pricePerPiece": 0,
              "lineItemDescription": "Revenue from New Sponsors "
            }
          ]
        },
        {
          "sub_cat_id": 26,
          "subCategoryName": "dummy",
          "lineItems": [
            {
              "line_item_id": 63,
              "lineItemName": "Number of Confirmed Veteran Sponsors",
              "pricePerPiece": 0,
              "lineItemDescription": "Number of Confirmed Veteran Sponsors"
            },
            {
              "line_item_id": 64,
              "lineItemName": "Number of Confirmed New Sponsors",
              "pricePerPiece": 0,
              "lineItemDescription": "Number of Confirmed New Sponsors"
            }
          ]
        }
      ]
    },
    {
      "cat_id": 28,
      "categoryName": "DIRECT DONOR BENEFIT EXPENSES (DDB)",
      "headerFlag": true,
      "subCategoryList": [
        {
          "sub_cat_id": 27,
          "subCategoryName": "DDB - Premises & Food",
          "lineItems": [
            {
              "line_item_id": 65,
              "lineItemName": "Site rental fees",
              "pricePerPiece": 0,
              "lineItemDescription": "Site rental fees"
            },
            {
              "line_item_id": 66,
              "lineItemName": "Permits / Licenses for Venue",
              "pricePerPiece": 0,
              "lineItemDescription": "Permits / Licenses for Venue"
            },
            {
              "line_item_id": 67,
              "lineItemName": "Security",
              "pricePerPiece": 0,
              "lineItemDescription": "Security"
            },
            {
              "line_item_id": 68,
              "lineItemName": "Rentals (Tents, table, chairs, lighting, stage, sound, etc)",
              "pricePerPiece": 0,
              "lineItemDescription": "Rentals (Tents, table, chairs, lighting, stage, sound, etc)"
            },
            {
              "line_item_id": 69,
              "lineItemName": "National sponsor tents, tables and chairs rentals (Will not roll up to the chapter budget but allocated to the national expense line)",
              "pricePerPiece": 0,
              "lineItemDescription": "National sponsor tents, tables and chairs rentals (Will not roll up to the chapter budget but allocated to the national expense line)"
            },
            {
              "line_item_id": 70,
              "lineItemName": "Bathrooms",
              "pricePerPiece": 0,
              "lineItemDescription": "Bathrooms"
            },
            {
              "line_item_id": 71,
              "lineItemName": "Pacesetter area at walk (food, ice, napkins, etc.)",
              "pricePerPiece": 0,
              "lineItemDescription": "Pacesetter area at walk (food, ice, napkins, etc.)"
            },
            {
              "line_item_id": 72,
              "lineItemName": "Incidental expenses for site (garbage cans, dumpster, etc.)",
              "pricePerPiece": 0,
              "lineItemDescription": "Incidental expenses for site (garbage cans, dumpster, etc.)"
            },
            {
              "line_item_id": 73,
              "lineItemName": " Other",
              "pricePerPiece": 0,
              "lineItemDescription": " Other"
            }
          ]
        },
        {
          "sub_cat_id": 28,
          "subCategoryName": "DDB - Kickoff meetings (Engagement events ie Kickoffs, Awards, Corporate Engagement)",
          "lineItems": [
            {
              "line_item_id": 74,
              "lineItemName": "Total Venues Cost",
              "pricePerPiece": 0,
              "lineItemDescription": "Total Venues Cost"
            },
            {
              "line_item_id": 75,
              "lineItemName": "Total Food Cost",
              "pricePerPiece": 0,
              "lineItemDescription": "Total Food Cost"
            },
            {
              "line_item_id": 76,
              "lineItemName": "Total AV Cost",
              "pricePerPiece": 0,
              "lineItemDescription": "Total AV Cost"
            },
            {
              "line_item_id": 77,
              "lineItemName": "Internal Team Kickoff Cost",
              "pricePerPiece": 0,
              "lineItemDescription": "Internal Team Kickoff Cost"
            },
            {
              "line_item_id": 78,
              "lineItemName": "Other (decorations, signage, etc)",
              "pricePerPiece": 0,
              "lineItemDescription": "Other (decorations, signage, etc)"
            }
          ]
        },
        {
          "sub_cat_id": 29,
          "subCategoryName": "DDB - Entertainment",
          "lineItems": [
            {
              "line_item_id": 79,
              "lineItemName": "DJ or band for walk",
              "pricePerPiece": 0,
              "lineItemDescription": "DJ or band for walk"
            },
            {
              "line_item_id": 80,
              "lineItemName": "Rentals, games and/or prizes for kids area at walk",
              "pricePerPiece": 0,
              "lineItemDescription": "Rentals, games and/or prizes for kids area at walk"
            },
            {
              "line_item_id": 81,
              "lineItemName": "Other Entertainment",
              "pricePerPiece": 0,
              "lineItemDescription": "Other Entertainment"
            }
          ]
        },
        {
          "sub_cat_id": 30,
          "subCategoryName": "DDB - Decorations",
          "lineItems": [
            {
              "line_item_id": 82,
              "lineItemName": "CI Group Items (tattoos, banners on a roll, stickers,etc)Reflected in your TS Admin Actual",
              "pricePerPiece": 0,
              "lineItemDescription": "CI Group Items (tattoos, banners on a roll, stickers,etc)Reflected in your TS Admin Actual"
            },
            {
              "line_item_id": 83,
              "lineItemName": "Event Day Signage (Office Depot)",
              "pricePerPiece": 0,
              "lineItemDescription": "Event Day Signage (Office Depot)"
            },
            {
              "line_item_id": 84,
              "lineItemName": "Event Day Banners (EPS Doublet)",
              "pricePerPiece": 0,
              "lineItemDescription": "Event Day Banners (EPS Doublet)"
            },
            {
              "line_item_id": 85,
              "lineItemName": "Additional Event Day Supplies",
              "pricePerPiece": 0,
              "lineItemDescription": "Additional Event Day Supplies"
            },
            {
              "line_item_id": 86,
              "lineItemName": "Event Day Misc. Decorations",
              "pricePerPiece": 0,
              "lineItemDescription": "Event Day Misc. Decorations"
            }
          ]
        },
        {
          "sub_cat_id": 31,
          "subCategoryName": "DDB - Premiums / Incentives",
          "lineItems": [
            {
              "line_item_id": 87,
              "lineItemName": "T-shirt for Patients(for distribution at kickoff, meetings, day of )",
              "pricePerPiece": 0,
              "lineItemDescription": "T-shirt for Patients(for distribution at kickoff, meetings, day of )"
            },
            {
              "line_item_id": 88,
              "lineItemName": "T-shirt for Event Volunteers",
              "pricePerPiece": 0,
              "lineItemDescription": "T-shirt for Event Volunteers"
            },
            {
              "line_item_id": 89,
              "lineItemName": "T-shirt (incentive for  Pacesetters who raise > $100)",
              "pricePerPiece": 0,
              "lineItemDescription": "T-shirt (incentive for  Pacesetters who raise > $100)"
            },
            {
              "line_item_id": 90,
              "lineItemName": "T-shirt (incentive for Pacesetters who raise > $100) XXL, XXXL, XXXXL",
              "pricePerPiece": 0,
              "lineItemDescription": "T-shirt (incentive for Pacesetters who raise > $100) XXL, XXXL, XXXXL"
            },
            {
              "line_item_id": 91,
              "lineItemName": "Pacesetter Wristband",
              "pricePerPiece": 0,
              "lineItemDescription": "Pacesetter Wristband"
            },
            {
              "line_item_id": 92,
              "lineItemName": "$350+ fundraising incentive",
              "pricePerPiece": 0,
              "lineItemDescription": "$350+ fundraising incentive"
            },
            {
              "line_item_id": 93,
              "lineItemName": "$1,000 to $4,999 fundraising incentive",
              "pricePerPiece": 0,
              "lineItemDescription": "$1,000 to $4,999 fundraising incentive"
            },
            {
              "line_item_id": 94,
              "lineItemName": "$5,000 to $9,999 fundraising incentive",
              "pricePerPiece": 0,
              "lineItemDescription": "$5,000 to $9,999 fundraising incentive"
            },
            {
              "line_item_id": 95,
              "lineItemName": "$10,000+ fundraising incentive",
              "pricePerPiece": 0,
              "lineItemDescription": "$10,000+ fundraising incentive"
            },
            {
              "line_item_id": 96,
              "lineItemName": "Self Donation incentive ($50+)",
              "pricePerPiece": 0,
              "lineItemDescription": "Self Donation incentive ($50+)"
            },
            {
              "line_item_id": 97,
              "lineItemName": "Awards/Gifts for top fundraisers, chair, committee, HH, and sponsors",
              "pricePerPiece": 0,
              "lineItemDescription": "Awards/Gifts for top fundraisers, chair, committee, HH, and sponsors"
            },
            {
              "line_item_id": 98,
              "lineItemName": "Other Premiums (New Team picture frame, etc)",
              "pricePerPiece": 0,
              "lineItemDescription": "Other Premiums (New Team picture frame, etc)"
            }
          ]
        },
        {
          "sub_cat_id": 32,
          "subCategoryName": "DDB - Hotel For hotel costs to attend Walk Day for Staff & Partcipants",
          "lineItems": [
            {
              "line_item_id": 99,
              "lineItemName": "dummy",
              "pricePerPiece": 0,
              "lineItemDescription": "dummy"
            }
          ]
        },
        {
          "sub_cat_id": 33,
          "subCategoryName": "DDB - Airfare costs to attend Walk Day for Staff & Partcipants",
          "lineItems": [
            {
              "line_item_id": 100,
              "lineItemName": "dummy",
              "pricePerPiece": 0,
              "lineItemDescription": "dummy"
            }
          ]
        },
        {
          "sub_cat_id": 34,
          "subCategoryName": "DDB - Ground Transportation costs to attend Walk Day for Staff & Partcipants",
          "lineItems": [
            {
              "line_item_id": 101,
              "lineItemName": "dummy",
              "pricePerPiece": 0,
              "lineItemDescription": "dummy"
            }
          ]
        },
        {
          "sub_cat_id": 35,
          "subCategoryName": "DDB - Other",
          "lineItems": [
            {
              "line_item_id": 102,
              "lineItemName": "dummy",
              "pricePerPiece": 0,
              "lineItemDescription": "dummy"
            }
          ]
        }
      ]
    },
    {
      "cat_id": 29,
      "categoryName": "INDIRECT EXPENSES",
      "headerFlag": true,
      "subCategoryList": [
        {
          "sub_cat_id": 36,
          "subCategoryName": "Printing (Posters,Invitations,Healthcare Practice Mailings,Save the Date,etc)",
          "lineItems": [
            {
              "line_item_id": 103,
              "lineItemName": "dummy",
              "pricePerPiece": 0,
              "lineItemDescription": "dummy"
            }
          ]
        },
        {
          "sub_cat_id": 37,
          "subCategoryName": "Postage",
          "lineItems": [
            {
              "line_item_id": 104,
              "lineItemName": "dummy",
              "pricePerPiece": 0,
              "lineItemDescription": "dummy"
            }
          ]
        },
        {
          "sub_cat_id": 38,
          "subCategoryName": "Shipping",
          "lineItems": [
            {
              "line_item_id": 105,
              "lineItemName": "Incentive/Materials (CI Group/Will Enterprise items)",
              "pricePerPiece": 0,
              "lineItemDescription": "Incentive/Materials (CI Group/Will Enterprise items)"
            },
            {
              "line_item_id": 106,
              "lineItemName": "Miscellaneous Shipping",
              "pricePerPiece": 0,
              "lineItemDescription": "Miscellaneous Shipping"
            }
          ]
        },
        {
          "sub_cat_id": 39,
          "subCategoryName": "Professional Fees",
          "lineItems": [
            {
              "line_item_id": 107,
              "lineItemName": "Enter Vendor Name Here",
              "pricePerPiece": 0,
              "lineItemDescription": "Enter Vendor Name Here"
            },
            {
              "line_item_id": 108,
              "lineItemName": "Enter Vendor Name Here",
              "pricePerPiece": 0,
              "lineItemDescription": "Enter Vendor Name Here"
            },
            {
              "line_item_id": 109,
              "lineItemName": "Enter Vendor Name Here",
              "pricePerPiece": 0,
              "lineItemDescription": "Enter Vendor Name Here"
            },
            {
              "line_item_id": 110,
              "lineItemName": "Enter Vendor Name Here",
              "pricePerPiece": 0,
              "lineItemDescription": "Enter Vendor Name Here"
            }
          ]
        },
        {
          "sub_cat_id": 40,
          "subCategoryName": "Meetings & Travel (Outside of Walk Day)",
          "lineItems": [
            {
              "line_item_id": 111,
              "lineItemName": "Meetings costs/meals/refreshments (Not for Day of Walk)",
              "pricePerPiece": 0,
              "lineItemDescription": "Meetings costs/meals/refreshments (Not for Day of Walk)"
            },
            {
              "line_item_id": 112,
              "lineItemName": "Ground Transporation (Not for Day of Walk)",
              "pricePerPiece": 0,
              "lineItemDescription": "Ground Transporation (Not for Day of Walk)"
            },
            {
              "line_item_id": 113,
              "lineItemName": "Hotel Costs (Not for Day of Walk)",
              "pricePerPiece": 0,
              "lineItemDescription": "Hotel Costs (Not for Day of Walk)"
            },
            {
              "line_item_id": 114,
              "lineItemName": "Additional meetings expenses (Not for Day of Walk)",
              "pricePerPiece": 0,
              "lineItemDescription": "Additional meetings expenses (Not for Day of Walk)"
            }
          ]
        },
        {
          "sub_cat_id": 41,
          "subCategoryName": "Supplies",
          "lineItems": [
            {
              "line_item_id": 115,
              "lineItemName": "Office Depot supplies (Posters, etc.)",
              "pricePerPiece": 0,
              "lineItemDescription": "Office Depot supplies (Posters, etc.)"
            },
            {
              "line_item_id": 116,
              "lineItemName": "CI Group supplies (Collection envelopes, folders, pins, etc.) reflected in your TS Admin Budget",
              "pricePerPiece": 0,
              "lineItemDescription": "CI Group supplies (Collection envelopes, folders, pins, etc.) reflected in your TS Admin Budget"
            },
            {
              "line_item_id": 117,
              "lineItemName": "Miscellaneous Supplies",
              "pricePerPiece": 0,
              "lineItemDescription": "Miscellaneous Supplies"
            }
          ]
        },
        {
          "sub_cat_id": 42,
          "subCategoryName": "Telecommunications",
          "lineItems": [
            {
              "line_item_id": 118,
              "lineItemName": "dummy",
              "pricePerPiece": 0,
              "lineItemDescription": "dummy"
            }
          ]
        },
        {
          "sub_cat_id": 43,
          "subCategoryName": "Advertising",
          "lineItems": [
            {
              "line_item_id": 119,
              "lineItemName": "dummy",
              "pricePerPiece": 0,
              "lineItemDescription": "dummy"
            }
          ]
        }
      ]
    },
    {
      "cat_id": 30,
      "categoryName": "NET REVENUE",
      "headerFlag": true,
      "subCategoryList": []
    },
    {
      "cat_id": 31,
      "categoryName": "NET REVENUE MARGIN",
      "headerFlag": true,
      "subCategoryList": []
    },
    {
      "cat_id": 32,
      "categoryName": "NET INCOME",
      "headerFlag": true,
      "subCategoryList": []
    }
  ]
}

export const takeStepsChapterStructure = {
  "categoryList": [
    {
      "cat_template_id": 27,
      "categoryName": "GROSS CAMPAIGN REVENUE",
      "eventTypeDataList": [
        {
          "id": 278,
          "value": 160000,
          "event_id": 8
        },
        {
          "id": 284,
          "value": 77500,
          "event_id": 9
        },
        {
          "id": 290,
          "value": 82500,
          "event_id": 10
        },
        {
          "id": 296,
          "value": 0,
          "event_id": 11
        },
        {
          "id": 302,
          "value": 0,
          "event_id": 12
        }
      ],
      "subCategoryDataList": [
        {
          "sub_cat_template_id": 22,
          "subCategoryName": "Total Number of All Registered Teams",
          "eventTypeDataList": [
            {
              "id": 168,
              "value": 41,
              "event_id": 9
            },
            {
              "id": 190,
              "value": 87,
              "event_id": 8
            },
            {
              "id": 212,
              "value": 46,
              "event_id": 10
            },
            {
              "id": 234,
              "value": 0,
              "event_id": 11
            },
            {
              "id": 256,
              "value": 0,
              "event_id": 12
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 53,
              "lineItemName": "Number of Registered Veteran Mega/A Teams",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 328,
                  "value": 10,
                  "event_id": 9
                },
                {
                  "id": 395,
                  "value": 23,
                  "event_id": 8
                },
                {
                  "id": 462,
                  "value": 13,
                  "event_id": 10
                },
                {
                  "id": 529,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 596,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Number of Registered Veteran Mega/A Teams"
            },
            {
              "template_line_item_id": 54,
              "lineItemName": "Number of Registered Veteran B/C Teams",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 329,
                  "value": 24,
                  "event_id": 9
                },
                {
                  "id": 396,
                  "value": 49,
                  "event_id": 8
                },
                {
                  "id": 463,
                  "value": 25,
                  "event_id": 10
                },
                {
                  "id": 530,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 597,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Number of Registered Veteran B/C Teams"
            },
            {
              "template_line_item_id": 55,
              "lineItemName": "Number of Registered New Teams",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 330,
                  "value": 7,
                  "event_id": 9
                },
                {
                  "id": 397,
                  "value": 15,
                  "event_id": 8
                },
                {
                  "id": 464,
                  "value": 8,
                  "event_id": 10
                },
                {
                  "id": 531,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 598,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Number of Registered New Teams"
            }
          ],
          "chapterId": 0,
          "headerFlag": false
        },
        {
          "sub_cat_template_id": 23,
          "subCategoryName": "Total Team Revenue (5005)",
          "eventTypeDataList": [
            {
              "id": 169,
              "value": 45500,
              "event_id": 9
            },
            {
              "id": 191,
              "value": 91000,
              "event_id": 8
            },
            {
              "id": 213,
              "value": 45500,
              "event_id": 10
            },
            {
              "id": 235,
              "value": 0,
              "event_id": 11
            },
            {
              "id": 257,
              "value": 0,
              "event_id": 12
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 56,
              "lineItemName": "Revenue from Veteran Mega/A Teams",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 331,
                  "value": 25000,
                  "event_id": 9
                },
                {
                  "id": 398,
                  "value": 48500,
                  "event_id": 8
                },
                {
                  "id": 465,
                  "value": 23500,
                  "event_id": 10
                },
                {
                  "id": 532,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 599,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Revenue from Veteran Mega/A Teams"
            },
            {
              "template_line_item_id": 57,
              "lineItemName": "Revenue from Veteran B/C Teams ",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 332,
                  "value": 12000,
                  "event_id": 9
                },
                {
                  "id": 399,
                  "value": 26000,
                  "event_id": 8
                },
                {
                  "id": 466,
                  "value": 14000,
                  "event_id": 10
                },
                {
                  "id": 533,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 600,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Revenue from Veteran B/C Teams "
            },
            {
              "template_line_item_id": 58,
              "lineItemName": "Revenue from New Teams ",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 333,
                  "value": 8500,
                  "event_id": 9
                },
                {
                  "id": 400,
                  "value": 16500,
                  "event_id": 8
                },
                {
                  "id": 467,
                  "value": 8000,
                  "event_id": 10
                },
                {
                  "id": 534,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 601,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Revenue from New Teams "
            }
          ],
          "accountInfo": "Account # 1515-400-5005",
          "chapterId": 0,
          "headerFlag": false
        },
        {
          "sub_cat_template_id": 24,
          "subCategoryName": "Individuals and Other",
          "eventTypeDataList": [
            {
              "id": 170,
              "value": 1000,
              "event_id": 9
            },
            {
              "id": 192,
              "value": 1500,
              "event_id": 8
            },
            {
              "id": 214,
              "value": 500,
              "event_id": 10
            },
            {
              "id": 236,
              "value": 0,
              "event_id": 11
            },
            {
              "id": 258,
              "value": 0,
              "event_id": 12
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 59,
              "lineItemName": "Revenue from Individuals - 5000",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 334,
                  "value": 1000,
                  "event_id": 9
                },
                {
                  "id": 401,
                  "value": 1500,
                  "event_id": 8
                },
                {
                  "id": 468,
                  "value": 500,
                  "event_id": 10
                },
                {
                  "id": 535,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 602,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Revenue from Individuals - 5000"
            },
            {
              "template_line_item_id": 60,
              "lineItemName": "Other Revenue - 5025",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 335,
                  "value": 0,
                  "event_id": 9
                },
                {
                  "id": 402,
                  "value": 0,
                  "event_id": 8
                },
                {
                  "id": 469,
                  "value": 0,
                  "event_id": 10
                },
                {
                  "id": 536,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 603,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Other Revenue - 5025"
            }
          ],
          "chapterId": 0,
          "headerFlag": false
        },
        {
          "sub_cat_template_id": 25,
          "subCategoryName": "Total Sponsor Revenue (5010)",
          "eventTypeDataList": [
            {
              "id": 171,
              "value": 31000,
              "event_id": 9
            },
            {
              "id": 193,
              "value": 67500,
              "event_id": 8
            },
            {
              "id": 215,
              "value": 36500,
              "event_id": 10
            },
            {
              "id": 237,
              "value": 0,
              "event_id": 11
            },
            {
              "id": 259,
              "value": 0,
              "event_id": 12
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 61,
              "lineItemName": "Revenue from Veteran Sponsors ",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 336,
                  "value": 26000,
                  "event_id": 9
                },
                {
                  "id": 403,
                  "value": 57500,
                  "event_id": 8
                },
                {
                  "id": 470,
                  "value": 31500,
                  "event_id": 10
                },
                {
                  "id": 537,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 604,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Revenue from Veteran Sponsors "
            },
            {
              "template_line_item_id": 62,
              "lineItemName": "Revenue from New Sponsors ",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 337,
                  "value": 5000,
                  "event_id": 9
                },
                {
                  "id": 404,
                  "value": 10000,
                  "event_id": 8
                },
                {
                  "id": 471,
                  "value": 5000,
                  "event_id": 10
                },
                {
                  "id": 538,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 605,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Revenue from New Sponsors "
            }
          ],
          "accountInfo": "Account # 1515-400-5010",
          "chapterId": 0,
          "headerFlag": false
        },
        {
          "sub_cat_template_id": 26,
          "subCategoryName": "dummy",
          "eventTypeDataList": [
            {
              "id": 172,
              "value": 0,
              "event_id": 9
            },
            {
              "id": 194,
              "value": 0,
              "event_id": 8
            },
            {
              "id": 216,
              "value": 0,
              "event_id": 10
            },
            {
              "id": 238,
              "value": 0,
              "event_id": 11
            },
            {
              "id": 260,
              "value": 0,
              "event_id": 12
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 63,
              "lineItemName": "Number of Confirmed Veteran Sponsors",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 338,
                  "value": 7,
                  "event_id": 9
                },
                {
                  "id": 405,
                  "value": 13,
                  "event_id": 8
                },
                {
                  "id": 472,
                  "value": 6,
                  "event_id": 10
                },
                {
                  "id": 539,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 606,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Number of Confirmed Veteran Sponsors"
            },
            {
              "template_line_item_id": 64,
              "lineItemName": "Number of Confirmed New Sponsors",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 339,
                  "value": 2,
                  "event_id": 9
                },
                {
                  "id": 406,
                  "value": 2,
                  "event_id": 8
                },
                {
                  "id": 473,
                  "value": 0,
                  "event_id": 10
                },
                {
                  "id": 540,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 607,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Number of Confirmed New Sponsors"
            }
          ],
          "chapterId": 0,
          "headerFlag": false
        }
      ],
      "chapterId": 0,
      "headerFlag": false
    },
    {
      "cat_template_id": 28,
      "categoryName": "DIRECT DONOR BENEFIT EXPENSES (DDB)",
      "eventTypeDataList": [
        {
          "id": 279,
          "value": 18587.2,
          "event_id": 8
        },
        {
          "id": 285,
          "value": 9543.6,
          "event_id": 9
        },
        {
          "id": 291,
          "value": 9043.6,
          "event_id": 10
        },
        {
          "id": 297,
          "value": 0,
          "event_id": 11
        },
        {
          "id": 303,
          "value": 0,
          "event_id": 12
        }
      ],
      "subCategoryDataList": [
        {
          "sub_cat_template_id": 27,
          "subCategoryName": "DDB - Premises & Food",
          "eventTypeDataList": [
            {
              "id": 173,
              "value": 4600,
              "event_id": 9
            },
            {
              "id": 195,
              "value": 8700,
              "event_id": 8
            },
            {
              "id": 217,
              "value": 4100,
              "event_id": 10
            },
            {
              "id": 239,
              "value": 0,
              "event_id": 11
            },
            {
              "id": 261,
              "value": 0,
              "event_id": 12
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 65,
              "lineItemName": "Site rental fees",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 340,
                  "value": 2000,
                  "event_id": 9
                },
                {
                  "id": 407,
                  "value": 4500,
                  "event_id": 8
                },
                {
                  "id": 474,
                  "value": 2500,
                  "event_id": 10
                },
                {
                  "id": 541,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 608,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Site rental fees"
            },
            {
              "template_line_item_id": 66,
              "lineItemName": "Permits / Licenses for Venue",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 341,
                  "value": 0,
                  "event_id": 9
                },
                {
                  "id": 408,
                  "value": 0,
                  "event_id": 8
                },
                {
                  "id": 475,
                  "value": 0,
                  "event_id": 10
                },
                {
                  "id": 542,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 609,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Permits / Licenses for Venue"
            },
            {
              "template_line_item_id": 67,
              "lineItemName": "Security",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 342,
                  "value": 500,
                  "event_id": 9
                },
                {
                  "id": 409,
                  "value": 1000,
                  "event_id": 8
                },
                {
                  "id": 476,
                  "value": 500,
                  "event_id": 10
                },
                {
                  "id": 543,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 610,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Security"
            },
            {
              "template_line_item_id": 68,
              "lineItemName": "Rentals (Tents, table, chairs, lighting, stage, sound, etc)",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 343,
                  "value": 2000,
                  "event_id": 9
                },
                {
                  "id": 410,
                  "value": 3000,
                  "event_id": 8
                },
                {
                  "id": 477,
                  "value": 1000,
                  "event_id": 10
                },
                {
                  "id": 544,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 611,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Rentals (Tents, table, chairs, lighting, stage, sound, etc)"
            },
            {
              "template_line_item_id": 69,
              "lineItemName": "National sponsor tents, tables and chairs rentals (Will not roll up to the chapter budget but allocated to the national expense line)",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 344,
                  "value": 200,
                  "event_id": 9
                },
                {
                  "id": 411,
                  "value": 400,
                  "event_id": 8
                },
                {
                  "id": 478,
                  "value": 200,
                  "event_id": 10
                },
                {
                  "id": 545,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 612,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "National sponsor tents, tables and chairs rentals (Will not roll up to the chapter budget but allocated to the national expense line)"
            },
            {
              "template_line_item_id": 70,
              "lineItemName": "Bathrooms",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 345,
                  "value": 0,
                  "event_id": 9
                },
                {
                  "id": 412,
                  "value": 0,
                  "event_id": 8
                },
                {
                  "id": 479,
                  "value": 0,
                  "event_id": 10
                },
                {
                  "id": 546,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 613,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Bathrooms"
            },
            {
              "template_line_item_id": 71,
              "lineItemName": "Pacesetter area at walk (food, ice, napkins, etc.)",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 346,
                  "value": 100,
                  "event_id": 9
                },
                {
                  "id": 413,
                  "value": 200,
                  "event_id": 8
                },
                {
                  "id": 480,
                  "value": 100,
                  "event_id": 10
                },
                {
                  "id": 547,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 614,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Pacesetter area at walk (food, ice, napkins, etc.)"
            },
            {
              "template_line_item_id": 72,
              "lineItemName": "Incidental expenses for site (garbage cans, dumpster, etc.)",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 347,
                  "value": 0,
                  "event_id": 9
                },
                {
                  "id": 414,
                  "value": 0,
                  "event_id": 8
                },
                {
                  "id": 481,
                  "value": 0,
                  "event_id": 10
                },
                {
                  "id": 548,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 615,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Incidental expenses for site (garbage cans, dumpster, etc.)"
            },
            {
              "template_line_item_id": 73,
              "lineItemName": " Other",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 348,
                  "value": 0,
                  "event_id": 9
                },
                {
                  "id": 415,
                  "value": 0,
                  "event_id": 8
                },
                {
                  "id": 482,
                  "value": 0,
                  "event_id": 10
                },
                {
                  "id": 549,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 616,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": " Other"
            }
          ],
          "chapterId": 0,
          "headerFlag": false
        },
        {
          "sub_cat_template_id": 28,
          "subCategoryName": "DDB - Kickoff meetings (Engagement events ie Kickoffs, Awards, Corporate Engagement)",
          "eventTypeDataList": [
            {
              "id": 174,
              "value": 525,
              "event_id": 9
            },
            {
              "id": 196,
              "value": 1050,
              "event_id": 8
            },
            {
              "id": 218,
              "value": 525,
              "event_id": 10
            },
            {
              "id": 240,
              "value": 0,
              "event_id": 11
            },
            {
              "id": 262,
              "value": 0,
              "event_id": 12
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 74,
              "lineItemName": "Total Venues Cost",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 349,
                  "value": 250,
                  "event_id": 9
                },
                {
                  "id": 416,
                  "value": 500,
                  "event_id": 8
                },
                {
                  "id": 483,
                  "value": 250,
                  "event_id": 10
                },
                {
                  "id": 550,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 617,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Total Venues Cost"
            },
            {
              "template_line_item_id": 75,
              "lineItemName": "Total Food Cost",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 350,
                  "value": 250,
                  "event_id": 9
                },
                {
                  "id": 417,
                  "value": 500,
                  "event_id": 8
                },
                {
                  "id": 484,
                  "value": 250,
                  "event_id": 10
                },
                {
                  "id": 551,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 618,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Total Food Cost"
            },
            {
              "template_line_item_id": 76,
              "lineItemName": "Total AV Cost",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 351,
                  "value": 0,
                  "event_id": 9
                },
                {
                  "id": 418,
                  "value": 0,
                  "event_id": 8
                },
                {
                  "id": 485,
                  "value": 0,
                  "event_id": 10
                },
                {
                  "id": 552,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 619,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Total AV Cost"
            },
            {
              "template_line_item_id": 77,
              "lineItemName": "Internal Team Kickoff Cost",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 352,
                  "value": 0,
                  "event_id": 9
                },
                {
                  "id": 419,
                  "value": 0,
                  "event_id": 8
                },
                {
                  "id": 486,
                  "value": 0,
                  "event_id": 10
                },
                {
                  "id": 553,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 620,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Internal Team Kickoff Cost"
            },
            {
              "template_line_item_id": 78,
              "lineItemName": "Other (decorations, signage, etc)",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 353,
                  "value": 25,
                  "event_id": 9
                },
                {
                  "id": 420,
                  "value": 50,
                  "event_id": 8
                },
                {
                  "id": 487,
                  "value": 25,
                  "event_id": 10
                },
                {
                  "id": 554,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 621,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Other (decorations, signage, etc)"
            }
          ],
          "chapterId": 0,
          "headerFlag": false
        },
        {
          "sub_cat_template_id": 29,
          "subCategoryName": "DDB - Entertainment",
          "eventTypeDataList": [
            {
              "id": 175,
              "value": 700,
              "event_id": 9
            },
            {
              "id": 197,
              "value": 1400,
              "event_id": 8
            },
            {
              "id": 219,
              "value": 700,
              "event_id": 10
            },
            {
              "id": 241,
              "value": 0,
              "event_id": 11
            },
            {
              "id": 263,
              "value": 0,
              "event_id": 12
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 79,
              "lineItemName": "DJ or band for walk",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 354,
                  "value": 300,
                  "event_id": 9
                },
                {
                  "id": 421,
                  "value": 600,
                  "event_id": 8
                },
                {
                  "id": 488,
                  "value": 300,
                  "event_id": 10
                },
                {
                  "id": 555,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 622,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "DJ or band for walk"
            },
            {
              "template_line_item_id": 80,
              "lineItemName": "Rentals, games and/or prizes for kids area at walk",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 355,
                  "value": 300,
                  "event_id": 9
                },
                {
                  "id": 422,
                  "value": 600,
                  "event_id": 8
                },
                {
                  "id": 489,
                  "value": 300,
                  "event_id": 10
                },
                {
                  "id": 556,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 623,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Rentals, games and/or prizes for kids area at walk"
            },
            {
              "template_line_item_id": 81,
              "lineItemName": "Other Entertainment",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 356,
                  "value": 100,
                  "event_id": 9
                },
                {
                  "id": 423,
                  "value": 200,
                  "event_id": 8
                },
                {
                  "id": 490,
                  "value": 100,
                  "event_id": 10
                },
                {
                  "id": 557,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 624,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Other Entertainment"
            }
          ],
          "chapterId": 0,
          "headerFlag": false
        },
        {
          "sub_cat_template_id": 30,
          "subCategoryName": "DDB - Decorations",
          "eventTypeDataList": [
            {
              "id": 176,
              "value": 1050,
              "event_id": 9
            },
            {
              "id": 198,
              "value": 2100,
              "event_id": 8
            },
            {
              "id": 220,
              "value": 1050,
              "event_id": 10
            },
            {
              "id": 242,
              "value": 0,
              "event_id": 11
            },
            {
              "id": 264,
              "value": 0,
              "event_id": 12
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 82,
              "lineItemName": "CI Group Items (tattoos, banners on a roll, stickers,etc)Reflected in your TS Admin Actual",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 357,
                  "value": 100,
                  "event_id": 9
                },
                {
                  "id": 424,
                  "value": 200,
                  "event_id": 8
                },
                {
                  "id": 491,
                  "value": 100,
                  "event_id": 10
                },
                {
                  "id": 558,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 625,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "CI Group Items (tattoos, banners on a roll, stickers,etc)Reflected in your TS Admin Actual"
            },
            {
              "template_line_item_id": 83,
              "lineItemName": "Event Day Signage (Office Depot)",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 358,
                  "value": 650,
                  "event_id": 9
                },
                {
                  "id": 425,
                  "value": 1300,
                  "event_id": 8
                },
                {
                  "id": 492,
                  "value": 650,
                  "event_id": 10
                },
                {
                  "id": 559,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 626,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Event Day Signage (Office Depot)"
            },
            {
              "template_line_item_id": 84,
              "lineItemName": "Event Day Banners (EPS Doublet)",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 359,
                  "value": 200,
                  "event_id": 9
                },
                {
                  "id": 426,
                  "value": 400,
                  "event_id": 8
                },
                {
                  "id": 493,
                  "value": 200,
                  "event_id": 10
                },
                {
                  "id": 560,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 627,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Event Day Banners (EPS Doublet)"
            },
            {
              "template_line_item_id": 85,
              "lineItemName": "Additional Event Day Supplies",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 360,
                  "value": 0,
                  "event_id": 9
                },
                {
                  "id": 427,
                  "value": 0,
                  "event_id": 8
                },
                {
                  "id": 494,
                  "value": 0,
                  "event_id": 10
                },
                {
                  "id": 561,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 628,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Additional Event Day Supplies"
            },
            {
              "template_line_item_id": 86,
              "lineItemName": "Event Day Misc. Decorations",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 361,
                  "value": 100,
                  "event_id": 9
                },
                {
                  "id": 428,
                  "value": 200,
                  "event_id": 8
                },
                {
                  "id": 495,
                  "value": 100,
                  "event_id": 10
                },
                {
                  "id": 562,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 629,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Event Day Misc. Decorations"
            }
          ],
          "chapterId": 0,
          "headerFlag": false
        },
        {
          "sub_cat_template_id": 31,
          "subCategoryName": "DDB - Premiums / Incentives",
          "eventTypeDataList": [
            {
              "id": 177,
              "value": 1868.6,
              "event_id": 9
            },
            {
              "id": 199,
              "value": 3737.2,
              "event_id": 8
            },
            {
              "id": 221,
              "value": 1868.6,
              "event_id": 10
            },
            {
              "id": 243,
              "value": 0,
              "event_id": 11
            },
            {
              "id": 265,
              "value": 0,
              "event_id": 12
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 87,
              "lineItemName": "T-shirt for Patients(for distribution at kickoff, meetings, day of )",
              "chapterId": 0,
              "pricePerPiece": 3.89,
              "eventTypeDataList": [
                {
                  "id": 362,
                  "value": 155.6,
                  "quantity": 40,
                  "event_id": 9
                },
                {
                  "id": 429,
                  "value": 311.2,
                  "event_id": 8
                },
                {
                  "id": 526,
                  "value": 156,
                  "quantity": 40,
                  "event_id": 10
                },
                {
                  "id": 586,
                  "value": 0,
                  "quantity": 0,
                  "event_id": 11
                },
                {
                  "id": 653,
                  "value": 0,
                  "quantity": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "T-shirt for Patients(for distribution at kickoff, meetings, day of )"
            },
            {
              "template_line_item_id": 88,
              "lineItemName": "T-shirt for Event Volunteers",
              "chapterId": 0,
              "pricePerPiece": 3.89,
              "eventTypeDataList": [
                {
                  "id": 363,
                  "value": 77.8,
                  "quantity": 20,
                  "event_id": 9
                },
                {
                  "id": 430,
                  "value": 155.6,
                  "event_id": 8
                },
                {
                  "id": 524,
                  "value": 78,
                  "quantity": 20,
                  "event_id": 10
                },
                {
                  "id": 587,
                  "value": 0,
                  "quantity": 0,
                  "event_id": 11
                },
                {
                  "id": 654,
                  "value": 0,
                  "quantity": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "T-shirt for Event Volunteers"
            },
            {
              "template_line_item_id": 89,
              "lineItemName": "T-shirt (incentive for  Pacesetters who raise > $100)",
              "chapterId": 0,
              "pricePerPiece": 3.89,
              "eventTypeDataList": [
                {
                  "id": 364,
                  "value": 272.3,
                  "quantity": 70,
                  "event_id": 9
                },
                {
                  "id": 431,
                  "value": 544.6,
                  "event_id": 8
                },
                {
                  "id": 528,
                  "value": 272,
                  "quantity": 70,
                  "event_id": 10
                },
                {
                  "id": 588,
                  "value": 0,
                  "quantity": 0,
                  "event_id": 11
                },
                {
                  "id": 655,
                  "value": 0,
                  "quantity": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "T-shirt (incentive for  Pacesetters who raise > $100)"
            },
            {
              "template_line_item_id": 90,
              "lineItemName": "T-shirt (incentive for Pacesetters who raise > $100) XXL, XXXL, XXXXL",
              "chapterId": 0,
              "pricePerPiece": 6.39,
              "eventTypeDataList": [
                {
                  "id": 365,
                  "value": 63.9,
                  "quantity": 10,
                  "event_id": 9
                },
                {
                  "id": 432,
                  "value": 127.8,
                  "event_id": 8
                },
                {
                  "id": 519,
                  "value": 64,
                  "quantity": 10,
                  "event_id": 10
                },
                {
                  "id": 589,
                  "value": 0,
                  "quantity": 0,
                  "event_id": 11
                },
                {
                  "id": 656,
                  "value": 0,
                  "quantity": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "T-shirt (incentive for Pacesetters who raise > $100) XXL, XXXL, XXXXL"
            },
            {
              "template_line_item_id": 91,
              "lineItemName": "Pacesetter Wristband",
              "chapterId": 0,
              "pricePerPiece": 0.5,
              "eventTypeDataList": [
                {
                  "id": 366,
                  "value": 50,
                  "quantity": 100,
                  "event_id": 9
                },
                {
                  "id": 433,
                  "value": 100,
                  "event_id": 8
                },
                {
                  "id": 520,
                  "value": 50,
                  "quantity": 100,
                  "event_id": 10
                },
                {
                  "id": 590,
                  "value": 0,
                  "quantity": 0,
                  "event_id": 11
                },
                {
                  "id": 657,
                  "value": 0,
                  "quantity": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Pacesetter Wristband"
            },
            {
              "template_line_item_id": 92,
              "lineItemName": "$350+ fundraising incentive",
              "chapterId": 0,
              "pricePerPiece": 6,
              "eventTypeDataList": [
                {
                  "id": 367,
                  "value": 90,
                  "quantity": 15,
                  "event_id": 9
                },
                {
                  "id": 434,
                  "value": 180,
                  "event_id": 8
                },
                {
                  "id": 522,
                  "value": 90,
                  "quantity": 15,
                  "event_id": 10
                },
                {
                  "id": 591,
                  "value": 0,
                  "quantity": 0,
                  "event_id": 11
                },
                {
                  "id": 658,
                  "value": 0,
                  "quantity": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "$350+ fundraising incentive"
            },
            {
              "template_line_item_id": 93,
              "lineItemName": "$1,000 to $4,999 fundraising incentive",
              "chapterId": 0,
              "pricePerPiece": 12,
              "eventTypeDataList": [
                {
                  "id": 368,
                  "value": 144,
                  "quantity": 12,
                  "event_id": 9
                },
                {
                  "id": 435,
                  "value": 288,
                  "event_id": 8
                },
                {
                  "id": 521,
                  "value": 144,
                  "quantity": 12,
                  "event_id": 10
                },
                {
                  "id": 592,
                  "value": 0,
                  "quantity": 0,
                  "event_id": 11
                },
                {
                  "id": 659,
                  "value": 0,
                  "quantity": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "$1,000 to $4,999 fundraising incentive"
            },
            {
              "template_line_item_id": 94,
              "lineItemName": "$5,000 to $9,999 fundraising incentive",
              "chapterId": 0,
              "pricePerPiece": 30,
              "eventTypeDataList": [
                {
                  "id": 369,
                  "value": 210,
                  "quantity": 7,
                  "event_id": 9
                },
                {
                  "id": 436,
                  "value": 420,
                  "event_id": 8
                },
                {
                  "id": 527,
                  "value": 210,
                  "quantity": 7,
                  "event_id": 10
                },
                {
                  "id": 593,
                  "value": 0,
                  "quantity": 0,
                  "event_id": 11
                },
                {
                  "id": 660,
                  "value": 0,
                  "quantity": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "$5,000 to $9,999 fundraising incentive"
            },
            {
              "template_line_item_id": 95,
              "lineItemName": "$10,000+ fundraising incentive",
              "chapterId": 0,
              "pricePerPiece": 65,
              "eventTypeDataList": [
                {
                  "id": 370,
                  "value": 130,
                  "quantity": 2,
                  "event_id": 9
                },
                {
                  "id": 437,
                  "value": 260,
                  "event_id": 8
                },
                {
                  "id": 523,
                  "value": 130,
                  "quantity": 2,
                  "event_id": 10
                },
                {
                  "id": 594,
                  "value": 0,
                  "quantity": 0,
                  "event_id": 11
                },
                {
                  "id": 661,
                  "value": 0,
                  "quantity": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "$10,000+ fundraising incentive"
            },
            {
              "template_line_item_id": 96,
              "lineItemName": "Self Donation incentive ($50+)",
              "chapterId": 0,
              "pricePerPiece": 8,
              "eventTypeDataList": [
                {
                  "id": 371,
                  "value": 200,
                  "quantity": 25,
                  "event_id": 9
                },
                {
                  "id": 438,
                  "value": 400,
                  "event_id": 8
                },
                {
                  "id": 525,
                  "value": 200,
                  "quantity": 25,
                  "event_id": 10
                },
                {
                  "id": 595,
                  "value": 0,
                  "quantity": 0,
                  "event_id": 11
                },
                {
                  "id": 662,
                  "value": 0,
                  "quantity": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Self Donation incentive ($50+)"
            },
            {
              "template_line_item_id": 97,
              "lineItemName": "Awards/Gifts for top fundraisers, chair, committee, HH, and sponsors",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 372,
                  "value": 400,
                  "event_id": 9
                },
                {
                  "id": 439,
                  "value": 800,
                  "event_id": 8
                },
                {
                  "id": 496,
                  "value": 400,
                  "event_id": 10
                },
                {
                  "id": 563,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 630,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Awards/Gifts for top fundraisers, chair, committee, HH, and sponsors"
            },
            {
              "template_line_item_id": 98,
              "lineItemName": "Other Premiums (New Team picture frame, etc)",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 373,
                  "value": 75,
                  "event_id": 9
                },
                {
                  "id": 440,
                  "value": 150,
                  "event_id": 8
                },
                {
                  "id": 497,
                  "value": 75,
                  "event_id": 10
                },
                {
                  "id": 564,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 631,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Other Premiums (New Team picture frame, etc)"
            }
          ],
          "chapterId": 0,
          "headerFlag": false
        },
        {
          "sub_cat_template_id": 32,
          "subCategoryName": "DDB - Hotel For hotel costs to attend Walk Day for Staff & Partcipants",
          "eventTypeDataList": [
            {
              "id": 178,
              "value": 300,
              "event_id": 9
            },
            {
              "id": 200,
              "value": 600,
              "event_id": 8
            },
            {
              "id": 222,
              "value": 300,
              "event_id": 10
            },
            {
              "id": 244,
              "value": 0,
              "event_id": 11
            },
            {
              "id": 266,
              "value": 0,
              "event_id": 12
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 99,
              "lineItemName": "dummy",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 374,
                  "value": 0,
                  "event_id": 9
                },
                {
                  "id": 441,
                  "value": 0,
                  "event_id": 8
                },
                {
                  "id": 498,
                  "value": 0,
                  "event_id": 10
                },
                {
                  "id": 565,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 632,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "dummy"
            }
          ],
          "accountInfo": "Account # 1515-400-5030",
          "chapterId": 0,
          "headerFlag": false
        },
        {
          "sub_cat_template_id": 33,
          "subCategoryName": "DDB - Airfare costs to attend Walk Day for Staff & Partcipants",
          "eventTypeDataList": [
            {
              "id": 179,
              "value": 0,
              "event_id": 9
            },
            {
              "id": 201,
              "value": 0,
              "event_id": 8
            },
            {
              "id": 223,
              "value": 0,
              "event_id": 10
            },
            {
              "id": 245,
              "value": 0,
              "event_id": 11
            },
            {
              "id": 267,
              "value": 0,
              "event_id": 12
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 100,
              "lineItemName": "dummy",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 375,
                  "value": 0,
                  "event_id": 9
                },
                {
                  "id": 442,
                  "value": 0,
                  "event_id": 8
                },
                {
                  "id": 499,
                  "value": 0,
                  "event_id": 10
                },
                {
                  "id": 566,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 633,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "dummy"
            }
          ],
          "accountInfo": "Account # 1515-400-5035",
          "chapterId": 0,
          "headerFlag": false
        },
        {
          "sub_cat_template_id": 34,
          "subCategoryName": "DDB - Ground Transportation costs to attend Walk Day for Staff & Partcipants",
          "eventTypeDataList": [
            {
              "id": 180,
              "value": 500,
              "event_id": 9
            },
            {
              "id": 202,
              "value": 1000,
              "event_id": 8
            },
            {
              "id": 224,
              "value": 500,
              "event_id": 10
            },
            {
              "id": 246,
              "value": 0,
              "event_id": 11
            },
            {
              "id": 268,
              "value": 0,
              "event_id": 12
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 101,
              "lineItemName": "dummy",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 376,
                  "value": 0,
                  "event_id": 9
                },
                {
                  "id": 443,
                  "value": 0,
                  "event_id": 8
                },
                {
                  "id": 500,
                  "value": 0,
                  "event_id": 10
                },
                {
                  "id": 567,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 634,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "dummy"
            }
          ],
          "accountInfo": "Account # 1515-400-5045",
          "chapterId": 0,
          "headerFlag": false
        },
        {
          "sub_cat_template_id": 35,
          "subCategoryName": "DDB - Other",
          "eventTypeDataList": [
            {
              "id": 181,
              "value": 0,
              "event_id": 9
            },
            {
              "id": 203,
              "value": 0,
              "event_id": 8
            },
            {
              "id": 225,
              "value": 0,
              "event_id": 10
            },
            {
              "id": 247,
              "value": 0,
              "event_id": 11
            },
            {
              "id": 269,
              "value": 0,
              "event_id": 12
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 102,
              "lineItemName": "dummy",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 377,
                  "value": 0,
                  "event_id": 9
                },
                {
                  "id": 444,
                  "value": 0,
                  "event_id": 8
                },
                {
                  "id": 501,
                  "value": 0,
                  "event_id": 10
                },
                {
                  "id": 568,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 635,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "dummy"
            }
          ],
          "accountInfo": "Account # 1515-400-5085",
          "chapterId": 0,
          "headerFlag": false
        }
      ],
      "chapterId": 0,
      "headerFlag": false
    },
    {
      "cat_template_id": 29,
      "categoryName": "INDIRECT EXPENSES",
      "eventTypeDataList": [
        {
          "id": 282,
          "value": 11900,
          "event_id": 8
        },
        {
          "id": 288,
          "value": 5950,
          "event_id": 9
        },
        {
          "id": 294,
          "value": 5950,
          "event_id": 10
        },
        {
          "id": 300,
          "value": 0,
          "event_id": 11
        },
        {
          "id": 306,
          "value": 0,
          "event_id": 12
        }
      ],
      "subCategoryDataList": [
        {
          "sub_cat_template_id": 36,
          "subCategoryName": "Printing (Posters,Invitations,Healthcare Practice Mailings,Save the Date,etc)",
          "eventTypeDataList": [
            {
              "id": 182,
              "value": 500,
              "event_id": 9
            },
            {
              "id": 204,
              "value": 1000,
              "event_id": 8
            },
            {
              "id": 226,
              "value": 500,
              "event_id": 10
            },
            {
              "id": 248,
              "value": 0,
              "event_id": 11
            },
            {
              "id": 270,
              "value": 0,
              "event_id": 12
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 103,
              "lineItemName": "dummy",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 378,
                  "value": 0,
                  "event_id": 9
                },
                {
                  "id": 445,
                  "value": 0,
                  "event_id": 8
                },
                {
                  "id": 502,
                  "value": 0,
                  "event_id": 10
                },
                {
                  "id": 569,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 636,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "dummy"
            }
          ],
          "accountInfo": "Account # 1515-400-7125",
          "chapterId": 0,
          "headerFlag": false
        },
        {
          "sub_cat_template_id": 37,
          "subCategoryName": "Postage",
          "eventTypeDataList": [
            {
              "id": 183,
              "value": 100,
              "event_id": 9
            },
            {
              "id": 205,
              "value": 200,
              "event_id": 8
            },
            {
              "id": 227,
              "value": 100,
              "event_id": 10
            },
            {
              "id": 249,
              "value": 0,
              "event_id": 11
            },
            {
              "id": 271,
              "value": 0,
              "event_id": 12
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 104,
              "lineItemName": "dummy",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 379,
                  "value": 0,
                  "event_id": 9
                },
                {
                  "id": 446,
                  "value": 0,
                  "event_id": 8
                },
                {
                  "id": 503,
                  "value": 0,
                  "event_id": 10
                },
                {
                  "id": 570,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 637,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "dummy"
            }
          ],
          "accountInfo": "Account # 1515-400-7130",
          "chapterId": 0,
          "headerFlag": false
        },
        {
          "sub_cat_template_id": 38,
          "subCategoryName": "Shipping",
          "eventTypeDataList": [
            {
              "id": 184,
              "value": 500,
              "event_id": 9
            },
            {
              "id": 206,
              "value": 1000,
              "event_id": 8
            },
            {
              "id": 228,
              "value": 500,
              "event_id": 10
            },
            {
              "id": 250,
              "value": 0,
              "event_id": 11
            },
            {
              "id": 272,
              "value": 0,
              "event_id": 12
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 105,
              "lineItemName": "Incentive/Materials (CI Group/Will Enterprise items)",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 380,
                  "value": 250,
                  "event_id": 9
                },
                {
                  "id": 447,
                  "value": 500,
                  "event_id": 8
                },
                {
                  "id": 504,
                  "value": 250,
                  "event_id": 10
                },
                {
                  "id": 571,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 638,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Incentive/Materials (CI Group/Will Enterprise items)"
            },
            {
              "template_line_item_id": 106,
              "lineItemName": "Miscellaneous Shipping",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 381,
                  "value": 250,
                  "event_id": 9
                },
                {
                  "id": 448,
                  "value": 500,
                  "event_id": 8
                },
                {
                  "id": 505,
                  "value": 250,
                  "event_id": 10
                },
                {
                  "id": 572,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 639,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Miscellaneous Shipping"
            }
          ],
          "chapterId": 0,
          "headerFlag": false
        },
        {
          "sub_cat_template_id": 39,
          "subCategoryName": "Professional Fees",
          "eventTypeDataList": [
            {
              "id": 185,
              "value": 0,
              "event_id": 9
            },
            {
              "id": 207,
              "value": 0,
              "event_id": 8
            },
            {
              "id": 229,
              "value": 0,
              "event_id": 10
            },
            {
              "id": 251,
              "value": 0,
              "event_id": 11
            },
            {
              "id": 273,
              "value": 0,
              "event_id": 12
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 107,
              "lineItemName": "Enter Vendor Name Here",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 382,
                  "value": 0,
                  "event_id": 9
                },
                {
                  "id": 449,
                  "value": 0,
                  "event_id": 8
                },
                {
                  "id": 506,
                  "value": 0,
                  "event_id": 10
                },
                {
                  "id": 573,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 640,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Enter Vendor Name Here"
            },
            {
              "template_line_item_id": 108,
              "lineItemName": "Enter Vendor Name Here",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 383,
                  "value": 0,
                  "event_id": 9
                },
                {
                  "id": 450,
                  "value": 0,
                  "event_id": 8
                },
                {
                  "id": 507,
                  "value": 0,
                  "event_id": 10
                },
                {
                  "id": 574,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 641,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Enter Vendor Name Here"
            },
            {
              "template_line_item_id": 109,
              "lineItemName": "Enter Vendor Name Here",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 384,
                  "value": 0,
                  "event_id": 9
                },
                {
                  "id": 451,
                  "value": 0,
                  "event_id": 8
                },
                {
                  "id": 508,
                  "value": 0,
                  "event_id": 10
                },
                {
                  "id": 575,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 642,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Enter Vendor Name Here"
            },
            {
              "template_line_item_id": 110,
              "lineItemName": "Enter Vendor Name Here",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 385,
                  "value": 0,
                  "event_id": 9
                },
                {
                  "id": 452,
                  "value": 0,
                  "event_id": 8
                },
                {
                  "id": 509,
                  "value": 0,
                  "event_id": 10
                },
                {
                  "id": 576,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 643,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Enter Vendor Name Here"
            }
          ],
          "chapterId": 0,
          "headerFlag": false
        },
        {
          "sub_cat_template_id": 40,
          "subCategoryName": "Meetings & Travel (Outside of Walk Day)",
          "eventTypeDataList": [
            {
              "id": 186,
              "value": 4000,
              "event_id": 9
            },
            {
              "id": 208,
              "value": 8000,
              "event_id": 8
            },
            {
              "id": 230,
              "value": 4000,
              "event_id": 10
            },
            {
              "id": 252,
              "value": 0,
              "event_id": 11
            },
            {
              "id": 274,
              "value": 0,
              "event_id": 12
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 111,
              "lineItemName": "Meetings costs/meals/refreshments (Not for Day of Walk)",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 386,
                  "value": 750,
                  "event_id": 9
                },
                {
                  "id": 453,
                  "value": 1500,
                  "event_id": 8
                },
                {
                  "id": 510,
                  "value": 750,
                  "event_id": 10
                },
                {
                  "id": 577,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 644,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Meetings costs/meals/refreshments (Not for Day of Walk)"
            },
            {
              "template_line_item_id": 112,
              "lineItemName": "Ground Transporation (Not for Day of Walk)",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 387,
                  "value": 2000,
                  "event_id": 9
                },
                {
                  "id": 454,
                  "value": 4000,
                  "event_id": 8
                },
                {
                  "id": 511,
                  "value": 2000,
                  "event_id": 10
                },
                {
                  "id": 578,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 645,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Ground Transporation (Not for Day of Walk)"
            },
            {
              "template_line_item_id": 113,
              "lineItemName": "Hotel Costs (Not for Day of Walk)",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 388,
                  "value": 1250,
                  "event_id": 9
                },
                {
                  "id": 455,
                  "value": 2500,
                  "event_id": 8
                },
                {
                  "id": 512,
                  "value": 1250,
                  "event_id": 10
                },
                {
                  "id": 579,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 646,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Hotel Costs (Not for Day of Walk)"
            },
            {
              "template_line_item_id": 114,
              "lineItemName": "Additional meetings expenses (Not for Day of Walk)",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 389,
                  "value": 0,
                  "event_id": 9
                },
                {
                  "id": 456,
                  "value": 0,
                  "event_id": 8
                },
                {
                  "id": 513,
                  "value": 0,
                  "event_id": 10
                },
                {
                  "id": 580,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 647,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Additional meetings expenses (Not for Day of Walk)"
            }
          ],
          "chapterId": 0,
          "headerFlag": false
        },
        {
          "sub_cat_template_id": 41,
          "subCategoryName": "Supplies",
          "eventTypeDataList": [
            {
              "id": 187,
              "value": 750,
              "event_id": 9
            },
            {
              "id": 209,
              "value": 1500,
              "event_id": 8
            },
            {
              "id": 231,
              "value": 750,
              "event_id": 10
            },
            {
              "id": 253,
              "value": 0,
              "event_id": 11
            },
            {
              "id": 275,
              "value": 0,
              "event_id": 12
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 115,
              "lineItemName": "Office Depot supplies (Posters, etc.)",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 390,
                  "value": 500,
                  "event_id": 9
                },
                {
                  "id": 457,
                  "value": 1000,
                  "event_id": 8
                },
                {
                  "id": 514,
                  "value": 500,
                  "event_id": 10
                },
                {
                  "id": 581,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 648,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Office Depot supplies (Posters, etc.)"
            },
            {
              "template_line_item_id": 116,
              "lineItemName": "CI Group supplies (Collection envelopes, folders, pins, etc.) reflected in your TS Admin Budget",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 391,
                  "value": 150,
                  "event_id": 9
                },
                {
                  "id": 458,
                  "value": 300,
                  "event_id": 8
                },
                {
                  "id": 515,
                  "value": 150,
                  "event_id": 10
                },
                {
                  "id": 582,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 649,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "CI Group supplies (Collection envelopes, folders, pins, etc.) reflected in your TS Admin Budget"
            },
            {
              "template_line_item_id": 117,
              "lineItemName": "Miscellaneous Supplies",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 392,
                  "value": 100,
                  "event_id": 9
                },
                {
                  "id": 459,
                  "value": 200,
                  "event_id": 8
                },
                {
                  "id": 516,
                  "value": 100,
                  "event_id": 10
                },
                {
                  "id": 583,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 650,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Miscellaneous Supplies"
            }
          ],
          "chapterId": 0,
          "headerFlag": false
        },
        {
          "sub_cat_template_id": 42,
          "subCategoryName": "Telecommunications",
          "eventTypeDataList": [
            {
              "id": 188,
              "value": 0,
              "event_id": 9
            },
            {
              "id": 210,
              "value": 0,
              "event_id": 8
            },
            {
              "id": 232,
              "value": 0,
              "event_id": 10
            },
            {
              "id": 254,
              "value": 0,
              "event_id": 11
            },
            {
              "id": 276,
              "value": 0,
              "event_id": 12
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 118,
              "lineItemName": "dummy",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 393,
                  "value": 0,
                  "event_id": 9
                },
                {
                  "id": 460,
                  "value": 0,
                  "event_id": 8
                },
                {
                  "id": 517,
                  "value": 0,
                  "event_id": 10
                },
                {
                  "id": 584,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 651,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "dummy"
            }
          ],
          "accountInfo": "Account # 1515-400-7175",
          "chapterId": 0,
          "headerFlag": false
        },
        {
          "sub_cat_template_id": 43,
          "subCategoryName": "Advertising",
          "eventTypeDataList": [
            {
              "id": 189,
              "value": 100,
              "event_id": 9
            },
            {
              "id": 211,
              "value": 200,
              "event_id": 8
            },
            {
              "id": 233,
              "value": 100,
              "event_id": 10
            },
            {
              "id": 255,
              "value": 0,
              "event_id": 11
            },
            {
              "id": 277,
              "value": 0,
              "event_id": 12
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 119,
              "lineItemName": "dummy",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 394,
                  "value": 0,
                  "event_id": 9
                },
                {
                  "id": 461,
                  "value": 0,
                  "event_id": 8
                },
                {
                  "id": 518,
                  "value": 0,
                  "event_id": 10
                },
                {
                  "id": 585,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 652,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "dummy"
            }
          ],
          "accountInfo": "Account # 1515-400-7160",
          "chapterId": 0,
          "headerFlag": false
        }
      ],
      "chapterId": 0,
      "headerFlag": false
    },
    {
      "cat_template_id": 30,
      "categoryName": "NET REVENUE",
      "eventTypeDataList": [
        {
          "id": 280,
          "value": 141412.8,
          "event_id": 8
        },
        {
          "id": 286,
          "value": 67956.4,
          "event_id": 9
        },
        {
          "id": 292,
          "value": 73456.4,
          "event_id": 10
        },
        {
          "id": 298,
          "value": 0,
          "event_id": 11
        },
        {
          "id": 304,
          "value": 0,
          "event_id": 12
        }
      ],
      "subCategoryDataList": [],
      "chapterId": 0,
      "headerFlag": false
    },
    {
      "cat_template_id": 31,
      "categoryName": "NET REVENUE MARGIN",
      "eventTypeDataList": [
        {
          "id": 281,
          "value": 0.8838299999999999,
          "event_id": 8
        },
        {
          "id": 287,
          "value": 0.87685677419,
          "event_id": 9
        },
        {
          "id": 293,
          "value": 0.89038060606,
          "event_id": 10
        },
        {
          "id": 299,
          "value": 0,
          "event_id": 11
        },
        {
          "id": 305,
          "value": 0,
          "event_id": 12
        }
      ],
      "subCategoryDataList": [],
      "chapterId": 0,
      "headerFlag": false
    },
    {
      "cat_template_id": 32,
      "categoryName": "NET INCOME",
      "eventTypeDataList": [
        {
          "id": 283,
          "value": 129512.8,
          "event_id": 8
        },
        {
          "id": 289,
          "value": 62006.4,
          "event_id": 9
        },
        {
          "id": 295,
          "value": 67506.4,
          "event_id": 10
        },
        {
          "id": 301,
          "value": 0,
          "event_id": 11
        },
        {
          "id": 307,
          "value": 0,
          "event_id": 12
        }
      ],
      "subCategoryDataList": [],
      "chapterId": 0,
      "headerFlag": false
    }
  ]
}

export const takeStepsChapterStructure2= {
  "categoryList": [
    {
      "cat_template_id": 27,
      "categoryName": "GROSS CAMPAIGN REVENUE",
      "eventTypeDataList": [
        {
          "id": 278,
          "value": 160000,
          "event_id": 8
        },
        {
          "id": 284,
          "value": 77500,
          "event_id": 9
        },
        {
          "id": 290,
          "value": 82500,
          "event_id": 10
        },
        {
          "id": 296,
          "value": 0,
          "event_id": 11
        },
        {
          "id": 302,
          "value": 0,
          "event_id": 12
        }
      ],
      "subCategoryDataList": [
        {
          "sub_cat_template_id": 22,
          "subCategoryName": "Total Number of All Registered Teams",
          "eventTypeDataList": [
            {
              "id": 168,
              "value": 41,
              "event_id": 9
            },
            {
              "id": 190,
              "value": 87,
              "event_id": 8
            },
            {
              "id": 212,
              "value": 46,
              "event_id": 10
            },
            {
              "id": 234,
              "value": 0,
              "event_id": 11
            },
            {
              "id": 256,
              "value": 0,
              "event_id": 12
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 53,
              "lineItemName": "Number of Registered Veteran Mega/A Teams",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 328,
                  "value": 2222,
                  "event_id": 9
                },
                {
                  "id": 395,
                  "value": 23,
                  "event_id": 8
                },
                {
                  "id": 462,
                  "value": 13,
                  "event_id": 10
                },
                {
                  "id": 529,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 596,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Number of Registered Veteran Mega/A Teams"
            },
            {
              "template_line_item_id": 54,
              "lineItemName": "Number of Registered Veteran B/C Teams",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 329,
                  "value": 24,
                  "event_id": 9
                },
                {
                  "id": 396,
                  "value": 49,
                  "event_id": 8
                },
                {
                  "id": 463,
                  "value": 25,
                  "event_id": 10
                },
                {
                  "id": 530,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 597,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Number of Registered Veteran B/C Teams"
            },
            {
              "template_line_item_id": 55,
              "lineItemName": "Number of Registered New Teams",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 330,
                  "value": 7,
                  "event_id": 9
                },
                {
                  "id": 397,
                  "value": 15,
                  "event_id": 8
                },
                {
                  "id": 464,
                  "value": 8,
                  "event_id": 10
                },
                {
                  "id": 531,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 598,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Number of Registered New Teams"
            }
          ],
          "chapterId": 0,
          "headerFlag": false
        },
        {
          "sub_cat_template_id": 23,
          "subCategoryName": "Total Team Revenue (5005)",
          "eventTypeDataList": [
            {
              "id": 169,
              "value": 45500,
              "event_id": 9
            },
            {
              "id": 191,
              "value": 91000,
              "event_id": 8
            },
            {
              "id": 213,
              "value": 45500,
              "event_id": 10
            },
            {
              "id": 235,
              "value": 0,
              "event_id": 11
            },
            {
              "id": 257,
              "value": 0,
              "event_id": 12
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 56,
              "lineItemName": "Revenue from Veteran Mega/A Teams",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 331,
                  "value": 25000,
                  "event_id": 9
                },
                {
                  "id": 398,
                  "value": 48500,
                  "event_id": 8
                },
                {
                  "id": 465,
                  "value": 23500,
                  "event_id": 10
                },
                {
                  "id": 532,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 599,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Revenue from Veteran Mega/A Teams"
            },
            {
              "template_line_item_id": 57,
              "lineItemName": "Revenue from Veteran B/C Teams ",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 332,
                  "value": 12000,
                  "event_id": 9
                },
                {
                  "id": 399,
                  "value": 26000,
                  "event_id": 8
                },
                {
                  "id": 466,
                  "value": 14000,
                  "event_id": 10
                },
                {
                  "id": 533,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 600,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Revenue from Veteran B/C Teams "
            },
            {
              "template_line_item_id": 58,
              "lineItemName": "Revenue from New Teams ",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 333,
                  "value": 8500,
                  "event_id": 9
                },
                {
                  "id": 400,
                  "value": 16500,
                  "event_id": 8
                },
                {
                  "id": 467,
                  "value": 8000,
                  "event_id": 10
                },
                {
                  "id": 534,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 601,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Revenue from New Teams "
            }
          ],
          "accountInfo": "Account # 1515-400-5005",
          "chapterId": 0,
          "headerFlag": false
        },
        {
          "sub_cat_template_id": 24,
          "subCategoryName": "Individuals and Other",
          "eventTypeDataList": [
            {
              "id": 170,
              "value": 1000,
              "event_id": 9
            },
            {
              "id": 192,
              "value": 1500,
              "event_id": 8
            },
            {
              "id": 214,
              "value": 500,
              "event_id": 10
            },
            {
              "id": 236,
              "value": 0,
              "event_id": 11
            },
            {
              "id": 258,
              "value": 0,
              "event_id": 12
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 59,
              "lineItemName": "Revenue from Individuals - 5000",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 334,
                  "value": 1000,
                  "event_id": 9
                },
                {
                  "id": 401,
                  "value": 1500,
                  "event_id": 8
                },
                {
                  "id": 468,
                  "value": 500,
                  "event_id": 10
                },
                {
                  "id": 535,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 602,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Revenue from Individuals - 5000"
            },
            {
              "template_line_item_id": 60,
              "lineItemName": "Other Revenue - 5025",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 335,
                  "value": 0,
                  "event_id": 9
                },
                {
                  "id": 402,
                  "value": 0,
                  "event_id": 8
                },
                {
                  "id": 469,
                  "value": 0,
                  "event_id": 10
                },
                {
                  "id": 536,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 603,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Other Revenue - 5025"
            }
          ],
          "chapterId": 0,
          "headerFlag": false
        },
        {
          "sub_cat_template_id": 25,
          "subCategoryName": "Total Sponsor Revenue (5010)",
          "eventTypeDataList": [
            {
              "id": 171,
              "value": 31000,
              "event_id": 9
            },
            {
              "id": 193,
              "value": 67500,
              "event_id": 8
            },
            {
              "id": 215,
              "value": 36500,
              "event_id": 10
            },
            {
              "id": 237,
              "value": 0,
              "event_id": 11
            },
            {
              "id": 259,
              "value": 0,
              "event_id": 12
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 61,
              "lineItemName": "Revenue from Veteran Sponsors ",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 336,
                  "value": 26000,
                  "event_id": 9
                },
                {
                  "id": 403,
                  "value": 57500,
                  "event_id": 8
                },
                {
                  "id": 470,
                  "value": 31500,
                  "event_id": 10
                },
                {
                  "id": 537,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 604,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Revenue from Veteran Sponsors "
            },
            {
              "template_line_item_id": 62,
              "lineItemName": "Revenue from New Sponsors ",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 337,
                  "value": 5000,
                  "event_id": 9
                },
                {
                  "id": 404,
                  "value": 10000,
                  "event_id": 8
                },
                {
                  "id": 471,
                  "value": 5000,
                  "event_id": 10
                },
                {
                  "id": 538,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 605,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Revenue from New Sponsors "
            }
          ],
          "accountInfo": "Account # 1515-400-5010",
          "chapterId": 0,
          "headerFlag": false
        },
        {
          "sub_cat_template_id": 26,
          "subCategoryName": "dummy",
          "eventTypeDataList": [
            {
              "id": 172,
              "value": 0,
              "event_id": 9
            },
            {
              "id": 194,
              "value": 0,
              "event_id": 8
            },
            {
              "id": 216,
              "value": 0,
              "event_id": 10
            },
            {
              "id": 238,
              "value": 0,
              "event_id": 11
            },
            {
              "id": 260,
              "value": 0,
              "event_id": 12
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 63,
              "lineItemName": "Number of Confirmed Veteran Sponsors",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 338,
                  "value": 7,
                  "event_id": 9
                },
                {
                  "id": 405,
                  "value": 13,
                  "event_id": 8
                },
                {
                  "id": 472,
                  "value": 6,
                  "event_id": 10
                },
                {
                  "id": 539,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 606,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Number of Confirmed Veteran Sponsors"
            },
            {
              "template_line_item_id": 64,
              "lineItemName": "Number of Confirmed New Sponsors",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 339,
                  "value": 2,
                  "event_id": 9
                },
                {
                  "id": 406,
                  "value": 2,
                  "event_id": 8
                },
                {
                  "id": 473,
                  "value": 0,
                  "event_id": 10
                },
                {
                  "id": 540,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 607,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Number of Confirmed New Sponsors"
            }
          ],
          "chapterId": 0,
          "headerFlag": false
        }
      ],
      "chapterId": 0,
      "headerFlag": false
    },
    {
      "cat_template_id": 28,
      "categoryName": "DIRECT DONOR BENEFIT EXPENSES (DDB)",
      "eventTypeDataList": [
        {
          "id": 279,
          "value": 18587.2,
          "event_id": 8
        },
        {
          "id": 285,
          "value": 9543.6,
          "event_id": 9
        },
        {
          "id": 291,
          "value": 9043.6,
          "event_id": 10
        },
        {
          "id": 297,
          "value": 0,
          "event_id": 11
        },
        {
          "id": 303,
          "value": 0,
          "event_id": 12
        }
      ],
      "subCategoryDataList": [
        {
          "sub_cat_template_id": 27,
          "subCategoryName": "DDB - Premises & Food",
          "eventTypeDataList": [
            {
              "id": 173,
              "value": 4600,
              "event_id": 9
            },
            {
              "id": 195,
              "value": 8700,
              "event_id": 8
            },
            {
              "id": 217,
              "value": 4100,
              "event_id": 10
            },
            {
              "id": 239,
              "value": 0,
              "event_id": 11
            },
            {
              "id": 261,
              "value": 0,
              "event_id": 12
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 65,
              "lineItemName": "Site rental fees",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 340,
                  "value": 2000,
                  "event_id": 9
                },
                {
                  "id": 407,
                  "value": 4500,
                  "event_id": 8
                },
                {
                  "id": 474,
                  "value": 2500,
                  "event_id": 10
                },
                {
                  "id": 541,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 608,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Site rental fees"
            },
            {
              "template_line_item_id": 66,
              "lineItemName": "Permits / Licenses for Venue",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 341,
                  "value": 0,
                  "event_id": 9
                },
                {
                  "id": 408,
                  "value": 0,
                  "event_id": 8
                },
                {
                  "id": 475,
                  "value": 0,
                  "event_id": 10
                },
                {
                  "id": 542,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 609,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Permits / Licenses for Venue"
            },
            {
              "template_line_item_id": 67,
              "lineItemName": "Security",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 342,
                  "value": 500,
                  "event_id": 9
                },
                {
                  "id": 409,
                  "value": 1000,
                  "event_id": 8
                },
                {
                  "id": 476,
                  "value": 500,
                  "event_id": 10
                },
                {
                  "id": 543,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 610,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Security"
            },
            {
              "template_line_item_id": 68,
              "lineItemName": "Rentals (Tents, table, chairs, lighting, stage, sound, etc)",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 343,
                  "value": 2000,
                  "event_id": 9
                },
                {
                  "id": 410,
                  "value": 3000,
                  "event_id": 8
                },
                {
                  "id": 477,
                  "value": 1000,
                  "event_id": 10
                },
                {
                  "id": 544,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 611,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Rentals (Tents, table, chairs, lighting, stage, sound, etc)"
            },
            {
              "template_line_item_id": 69,
              "lineItemName": "National sponsor tents, tables and chairs rentals (Will not roll up to the chapter budget but allocated to the national expense line)",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 344,
                  "value": 200,
                  "event_id": 9
                },
                {
                  "id": 411,
                  "value": 400,
                  "event_id": 8
                },
                {
                  "id": 478,
                  "value": 200,
                  "event_id": 10
                },
                {
                  "id": 545,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 612,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "National sponsor tents, tables and chairs rentals (Will not roll up to the chapter budget but allocated to the national expense line)"
            },
            {
              "template_line_item_id": 70,
              "lineItemName": "Bathrooms",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 345,
                  "value": 0,
                  "event_id": 9
                },
                {
                  "id": 412,
                  "value": 0,
                  "event_id": 8
                },
                {
                  "id": 479,
                  "value": 0,
                  "event_id": 10
                },
                {
                  "id": 546,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 613,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Bathrooms"
            },
            {
              "template_line_item_id": 71,
              "lineItemName": "Pacesetter area at walk (food, ice, napkins, etc.)",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 346,
                  "value": 100,
                  "event_id": 9
                },
                {
                  "id": 413,
                  "value": 200,
                  "event_id": 8
                },
                {
                  "id": 480,
                  "value": 100,
                  "event_id": 10
                },
                {
                  "id": 547,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 614,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Pacesetter area at walk (food, ice, napkins, etc.)"
            },
            {
              "template_line_item_id": 72,
              "lineItemName": "Incidental expenses for site (garbage cans, dumpster, etc.)",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 347,
                  "value": 0,
                  "event_id": 9
                },
                {
                  "id": 414,
                  "value": 0,
                  "event_id": 8
                },
                {
                  "id": 481,
                  "value": 0,
                  "event_id": 10
                },
                {
                  "id": 548,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 615,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Incidental expenses for site (garbage cans, dumpster, etc.)"
            },
            {
              "template_line_item_id": 73,
              "lineItemName": " Other",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 348,
                  "value": 0,
                  "event_id": 9
                },
                {
                  "id": 415,
                  "value": 0,
                  "event_id": 8
                },
                {
                  "id": 482,
                  "value": 0,
                  "event_id": 10
                },
                {
                  "id": 549,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 616,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": " Other"
            }
          ],
          "chapterId": 0,
          "headerFlag": false
        },
        {
          "sub_cat_template_id": 28,
          "subCategoryName": "DDB - Kickoff meetings (Engagement events ie Kickoffs, Awards, Corporate Engagement)",
          "eventTypeDataList": [
            {
              "id": 174,
              "value": 525,
              "event_id": 9
            },
            {
              "id": 196,
              "value": 1050,
              "event_id": 8
            },
            {
              "id": 218,
              "value": 525,
              "event_id": 10
            },
            {
              "id": 240,
              "value": 0,
              "event_id": 11
            },
            {
              "id": 262,
              "value": 0,
              "event_id": 12
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 74,
              "lineItemName": "Total Venues Cost",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 349,
                  "value": 250,
                  "event_id": 9
                },
                {
                  "id": 416,
                  "value": 500,
                  "event_id": 8
                },
                {
                  "id": 483,
                  "value": 250,
                  "event_id": 10
                },
                {
                  "id": 550,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 617,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Total Venues Cost"
            },
            {
              "template_line_item_id": 75,
              "lineItemName": "Total Food Cost",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 350,
                  "value": 250,
                  "event_id": 9
                },
                {
                  "id": 417,
                  "value": 500,
                  "event_id": 8
                },
                {
                  "id": 484,
                  "value": 250,
                  "event_id": 10
                },
                {
                  "id": 551,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 618,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Total Food Cost"
            },
            {
              "template_line_item_id": 76,
              "lineItemName": "Total AV Cost",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 351,
                  "value": 0,
                  "event_id": 9
                },
                {
                  "id": 418,
                  "value": 0,
                  "event_id": 8
                },
                {
                  "id": 485,
                  "value": 0,
                  "event_id": 10
                },
                {
                  "id": 552,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 619,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Total AV Cost"
            },
            {
              "template_line_item_id": 77,
              "lineItemName": "Internal Team Kickoff Cost",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 352,
                  "value": 0,
                  "event_id": 9
                },
                {
                  "id": 419,
                  "value": 0,
                  "event_id": 8
                },
                {
                  "id": 486,
                  "value": 0,
                  "event_id": 10
                },
                {
                  "id": 553,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 620,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Internal Team Kickoff Cost"
            },
            {
              "template_line_item_id": 78,
              "lineItemName": "Other (decorations, signage, etc)",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 353,
                  "value": 25,
                  "event_id": 9
                },
                {
                  "id": 420,
                  "value": 50,
                  "event_id": 8
                },
                {
                  "id": 487,
                  "value": 25,
                  "event_id": 10
                },
                {
                  "id": 554,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 621,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Other (decorations, signage, etc)"
            }
          ],
          "chapterId": 0,
          "headerFlag": false
        },
        {
          "sub_cat_template_id": 29,
          "subCategoryName": "DDB - Entertainment",
          "eventTypeDataList": [
            {
              "id": 175,
              "value": 700,
              "event_id": 9
            },
            {
              "id": 197,
              "value": 1400,
              "event_id": 8
            },
            {
              "id": 219,
              "value": 700,
              "event_id": 10
            },
            {
              "id": 241,
              "value": 0,
              "event_id": 11
            },
            {
              "id": 263,
              "value": 0,
              "event_id": 12
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 79,
              "lineItemName": "DJ or band for walk",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 354,
                  "value": 300,
                  "event_id": 9
                },
                {
                  "id": 421,
                  "value": 600,
                  "event_id": 8
                },
                {
                  "id": 488,
                  "value": 300,
                  "event_id": 10
                },
                {
                  "id": 555,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 622,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "DJ or band for walk"
            },
            {
              "template_line_item_id": 80,
              "lineItemName": "Rentals, games and/or prizes for kids area at walk",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 355,
                  "value": 300,
                  "event_id": 9
                },
                {
                  "id": 422,
                  "value": 600,
                  "event_id": 8
                },
                {
                  "id": 489,
                  "value": 300,
                  "event_id": 10
                },
                {
                  "id": 556,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 623,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Rentals, games and/or prizes for kids area at walk"
            },
            {
              "template_line_item_id": 81,
              "lineItemName": "Other Entertainment",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 356,
                  "value": 100,
                  "event_id": 9
                },
                {
                  "id": 423,
                  "value": 200,
                  "event_id": 8
                },
                {
                  "id": 490,
                  "value": 100,
                  "event_id": 10
                },
                {
                  "id": 557,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 624,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Other Entertainment"
            }
          ],
          "chapterId": 0,
          "headerFlag": false
        },
        {
          "sub_cat_template_id": 30,
          "subCategoryName": "DDB - Decorations",
          "eventTypeDataList": [
            {
              "id": 176,
              "value": 1050,
              "event_id": 9
            },
            {
              "id": 198,
              "value": 2100,
              "event_id": 8
            },
            {
              "id": 220,
              "value": 1050,
              "event_id": 10
            },
            {
              "id": 242,
              "value": 0,
              "event_id": 11
            },
            {
              "id": 264,
              "value": 0,
              "event_id": 12
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 82,
              "lineItemName": "CI Group Items (tattoos, banners on a roll, stickers,etc)Reflected in your TS Admin Actual",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 357,
                  "value": 100,
                  "event_id": 9
                },
                {
                  "id": 424,
                  "value": 200,
                  "event_id": 8
                },
                {
                  "id": 491,
                  "value": 100,
                  "event_id": 10
                },
                {
                  "id": 558,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 625,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "CI Group Items (tattoos, banners on a roll, stickers,etc)Reflected in your TS Admin Actual"
            },
            {
              "template_line_item_id": 83,
              "lineItemName": "Event Day Signage (Office Depot)",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 358,
                  "value": 650,
                  "event_id": 9
                },
                {
                  "id": 425,
                  "value": 1300,
                  "event_id": 8
                },
                {
                  "id": 492,
                  "value": 650,
                  "event_id": 10
                },
                {
                  "id": 559,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 626,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Event Day Signage (Office Depot)"
            },
            {
              "template_line_item_id": 84,
              "lineItemName": "Event Day Banners (EPS Doublet)",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 359,
                  "value": 200,
                  "event_id": 9
                },
                {
                  "id": 426,
                  "value": 400,
                  "event_id": 8
                },
                {
                  "id": 493,
                  "value": 200,
                  "event_id": 10
                },
                {
                  "id": 560,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 627,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Event Day Banners (EPS Doublet)"
            },
            {
              "template_line_item_id": 85,
              "lineItemName": "Additional Event Day Supplies",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 360,
                  "value": 0,
                  "event_id": 9
                },
                {
                  "id": 427,
                  "value": 0,
                  "event_id": 8
                },
                {
                  "id": 494,
                  "value": 0,
                  "event_id": 10
                },
                {
                  "id": 561,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 628,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Additional Event Day Supplies"
            },
            {
              "template_line_item_id": 86,
              "lineItemName": "Event Day Misc. Decorations",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 361,
                  "value": 100,
                  "event_id": 9
                },
                {
                  "id": 428,
                  "value": 200,
                  "event_id": 8
                },
                {
                  "id": 495,
                  "value": 100,
                  "event_id": 10
                },
                {
                  "id": 562,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 629,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Event Day Misc. Decorations"
            }
          ],
          "chapterId": 0,
          "headerFlag": false
        },
        {
          "sub_cat_template_id": 31,
          "subCategoryName": "DDB - Premiums / Incentives",
          "eventTypeDataList": [
            {
              "id": 177,
              "value": 1868.6,
              "event_id": 9
            },
            {
              "id": 199,
              "value": 3737.2,
              "event_id": 8
            },
            {
              "id": 221,
              "value": 1868.6,
              "event_id": 10
            },
            {
              "id": 243,
              "value": 0,
              "event_id": 11
            },
            {
              "id": 265,
              "value": 0,
              "event_id": 12
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 87,
              "lineItemName": "T-shirt for Patients(for distribution at kickoff, meetings, day of )",
              "chapterId": 0,
              "pricePerPiece": 3.89,
              "eventTypeDataList": [
                {
                  "id": 362,
                  "value": 155.6,
                  "quantity": 40,
                  "event_id": 9
                },
                {
                  "id": 429,
                  "value": 311.2,
                  "event_id": 8
                },
                {
                  "id": 526,
                  "value": 156,
                  "quantity": 40,
                  "event_id": 10
                },
                {
                  "id": 586,
                  "value": 0,
                  "quantity": 0,
                  "event_id": 11
                },
                {
                  "id": 653,
                  "value": 0,
                  "quantity": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "T-shirt for Patients(for distribution at kickoff, meetings, day of )"
            },
            {
              "template_line_item_id": 88,
              "lineItemName": "T-shirt for Event Volunteers",
              "chapterId": 0,
              "pricePerPiece": 3.89,
              "eventTypeDataList": [
                {
                  "id": 363,
                  "value": 77.8,
                  "quantity": 20,
                  "event_id": 9
                },
                {
                  "id": 430,
                  "value": 155.6,
                  "event_id": 8
                },
                {
                  "id": 524,
                  "value": 78,
                  "quantity": 20,
                  "event_id": 10
                },
                {
                  "id": 587,
                  "value": 0,
                  "quantity": 0,
                  "event_id": 11
                },
                {
                  "id": 654,
                  "value": 0,
                  "quantity": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "T-shirt for Event Volunteers"
            },
            {
              "template_line_item_id": 89,
              "lineItemName": "T-shirt (incentive for  Pacesetters who raise > $100)",
              "chapterId": 0,
              "pricePerPiece": 3.89,
              "eventTypeDataList": [
                {
                  "id": 364,
                  "value": 272.3,
                  "quantity": 70,
                  "event_id": 9
                },
                {
                  "id": 431,
                  "value": 544.6,
                  "event_id": 8
                },
                {
                  "id": 528,
                  "value": 272,
                  "quantity": 70,
                  "event_id": 10
                },
                {
                  "id": 588,
                  "value": 0,
                  "quantity": 0,
                  "event_id": 11
                },
                {
                  "id": 655,
                  "value": 0,
                  "quantity": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "T-shirt (incentive for  Pacesetters who raise > $100)"
            },
            {
              "template_line_item_id": 90,
              "lineItemName": "T-shirt (incentive for Pacesetters who raise > $100) XXL, XXXL, XXXXL",
              "chapterId": 0,
              "pricePerPiece": 6.39,
              "eventTypeDataList": [
                {
                  "id": 365,
                  "value": 63.9,
                  "quantity": 10,
                  "event_id": 9
                },
                {
                  "id": 432,
                  "value": 127.8,
                  "event_id": 8
                },
                {
                  "id": 519,
                  "value": 64,
                  "quantity": 10,
                  "event_id": 10
                },
                {
                  "id": 589,
                  "value": 0,
                  "quantity": 0,
                  "event_id": 11
                },
                {
                  "id": 656,
                  "value": 0,
                  "quantity": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "T-shirt (incentive for Pacesetters who raise > $100) XXL, XXXL, XXXXL"
            },
            {
              "template_line_item_id": 91,
              "lineItemName": "Pacesetter Wristband",
              "chapterId": 0,
              "pricePerPiece": 0.5,
              "eventTypeDataList": [
                {
                  "id": 366,
                  "value": 50,
                  "quantity": 100,
                  "event_id": 9
                },
                {
                  "id": 433,
                  "value": 100,
                  "event_id": 8
                },
                {
                  "id": 520,
                  "value": 50,
                  "quantity": 100,
                  "event_id": 10
                },
                {
                  "id": 590,
                  "value": 0,
                  "quantity": 0,
                  "event_id": 11
                },
                {
                  "id": 657,
                  "value": 0,
                  "quantity": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Pacesetter Wristband"
            },
            {
              "template_line_item_id": 92,
              "lineItemName": "$350+ fundraising incentive",
              "chapterId": 0,
              "pricePerPiece": 6,
              "eventTypeDataList": [
                {
                  "id": 367,
                  "value": 90,
                  "quantity": 15,
                  "event_id": 9
                },
                {
                  "id": 434,
                  "value": 180,
                  "event_id": 8
                },
                {
                  "id": 522,
                  "value": 90,
                  "quantity": 15,
                  "event_id": 10
                },
                {
                  "id": 591,
                  "value": 0,
                  "quantity": 0,
                  "event_id": 11
                },
                {
                  "id": 658,
                  "value": 0,
                  "quantity": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "$350+ fundraising incentive"
            },
            {
              "template_line_item_id": 93,
              "lineItemName": "$1,000 to $4,999 fundraising incentive",
              "chapterId": 0,
              "pricePerPiece": 12,
              "eventTypeDataList": [
                {
                  "id": 368,
                  "value": 144,
                  "quantity": 12,
                  "event_id": 9
                },
                {
                  "id": 435,
                  "value": 288,
                  "event_id": 8
                },
                {
                  "id": 521,
                  "value": 144,
                  "quantity": 12,
                  "event_id": 10
                },
                {
                  "id": 592,
                  "value": 0,
                  "quantity": 0,
                  "event_id": 11
                },
                {
                  "id": 659,
                  "value": 0,
                  "quantity": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "$1,000 to $4,999 fundraising incentive"
            },
            {
              "template_line_item_id": 94,
              "lineItemName": "$5,000 to $9,999 fundraising incentive",
              "chapterId": 0,
              "pricePerPiece": 30,
              "eventTypeDataList": [
                {
                  "id": 369,
                  "value": 210,
                  "quantity": 7,
                  "event_id": 9
                },
                {
                  "id": 436,
                  "value": 420,
                  "event_id": 8
                },
                {
                  "id": 527,
                  "value": 210,
                  "quantity": 7,
                  "event_id": 10
                },
                {
                  "id": 593,
                  "value": 0,
                  "quantity": 0,
                  "event_id": 11
                },
                {
                  "id": 660,
                  "value": 0,
                  "quantity": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "$5,000 to $9,999 fundraising incentive"
            },
            {
              "template_line_item_id": 95,
              "lineItemName": "$10,000+ fundraising incentive",
              "chapterId": 0,
              "pricePerPiece": 65,
              "eventTypeDataList": [
                {
                  "id": 370,
                  "value": 130,
                  "quantity": 2,
                  "event_id": 9
                },
                {
                  "id": 437,
                  "value": 260,
                  "event_id": 8
                },
                {
                  "id": 523,
                  "value": 130,
                  "quantity": 2,
                  "event_id": 10
                },
                {
                  "id": 594,
                  "value": 0,
                  "quantity": 0,
                  "event_id": 11
                },
                {
                  "id": 661,
                  "value": 0,
                  "quantity": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "$10,000+ fundraising incentive"
            },
            {
              "template_line_item_id": 96,
              "lineItemName": "Self Donation incentive ($50+)",
              "chapterId": 0,
              "pricePerPiece": 8,
              "eventTypeDataList": [
                {
                  "id": 371,
                  "value": 200,
                  "quantity": 25,
                  "event_id": 9
                },
                {
                  "id": 438,
                  "value": 400,
                  "event_id": 8
                },
                {
                  "id": 525,
                  "value": 200,
                  "quantity": 25,
                  "event_id": 10
                },
                {
                  "id": 595,
                  "value": 0,
                  "quantity": 0,
                  "event_id": 11
                },
                {
                  "id": 662,
                  "value": 0,
                  "quantity": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Self Donation incentive ($50+)"
            },
            {
              "template_line_item_id": 97,
              "lineItemName": "Awards/Gifts for top fundraisers, chair, committee, HH, and sponsors",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 372,
                  "value": 400,
                  "event_id": 9
                },
                {
                  "id": 439,
                  "value": 800,
                  "event_id": 8
                },
                {
                  "id": 496,
                  "value": 400,
                  "event_id": 10
                },
                {
                  "id": 563,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 630,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Awards/Gifts for top fundraisers, chair, committee, HH, and sponsors"
            },
            {
              "template_line_item_id": 98,
              "lineItemName": "Other Premiums (New Team picture frame, etc)",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 373,
                  "value": 75,
                  "event_id": 9
                },
                {
                  "id": 440,
                  "value": 150,
                  "event_id": 8
                },
                {
                  "id": 497,
                  "value": 75,
                  "event_id": 10
                },
                {
                  "id": 564,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 631,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Other Premiums (New Team picture frame, etc)"
            }
          ],
          "chapterId": 0,
          "headerFlag": false
        },
        {
          "sub_cat_template_id": 32,
          "subCategoryName": "DDB - Hotel For hotel costs to attend Walk Day for Staff & Partcipants",
          "eventTypeDataList": [
            {
              "id": 178,
              "value": 300,
              "event_id": 9
            },
            {
              "id": 200,
              "value": 600,
              "event_id": 8
            },
            {
              "id": 222,
              "value": 300,
              "event_id": 10
            },
            {
              "id": 244,
              "value": 0,
              "event_id": 11
            },
            {
              "id": 266,
              "value": 0,
              "event_id": 12
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 99,
              "lineItemName": "dummy",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 374,
                  "value": 0,
                  "event_id": 9
                },
                {
                  "id": 441,
                  "value": 0,
                  "event_id": 8
                },
                {
                  "id": 498,
                  "value": 0,
                  "event_id": 10
                },
                {
                  "id": 565,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 632,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "dummy"
            }
          ],
          "accountInfo": "Account # 1515-400-5030",
          "chapterId": 0,
          "headerFlag": false
        },
        {
          "sub_cat_template_id": 33,
          "subCategoryName": "DDB - Airfare costs to attend Walk Day for Staff & Partcipants",
          "eventTypeDataList": [
            {
              "id": 179,
              "value": 0,
              "event_id": 9
            },
            {
              "id": 201,
              "value": 0,
              "event_id": 8
            },
            {
              "id": 223,
              "value": 0,
              "event_id": 10
            },
            {
              "id": 245,
              "value": 0,
              "event_id": 11
            },
            {
              "id": 267,
              "value": 0,
              "event_id": 12
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 100,
              "lineItemName": "dummy",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 375,
                  "value": 0,
                  "event_id": 9
                },
                {
                  "id": 442,
                  "value": 0,
                  "event_id": 8
                },
                {
                  "id": 499,
                  "value": 0,
                  "event_id": 10
                },
                {
                  "id": 566,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 633,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "dummy"
            }
          ],
          "accountInfo": "Account # 1515-400-5035",
          "chapterId": 0,
          "headerFlag": false
        },
        {
          "sub_cat_template_id": 34,
          "subCategoryName": "DDB - Ground Transportation costs to attend Walk Day for Staff & Partcipants",
          "eventTypeDataList": [
            {
              "id": 180,
              "value": 500,
              "event_id": 9
            },
            {
              "id": 202,
              "value": 1000,
              "event_id": 8
            },
            {
              "id": 224,
              "value": 500,
              "event_id": 10
            },
            {
              "id": 246,
              "value": 0,
              "event_id": 11
            },
            {
              "id": 268,
              "value": 0,
              "event_id": 12
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 101,
              "lineItemName": "dummy",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 376,
                  "value": 0,
                  "event_id": 9
                },
                {
                  "id": 443,
                  "value": 0,
                  "event_id": 8
                },
                {
                  "id": 500,
                  "value": 0,
                  "event_id": 10
                },
                {
                  "id": 567,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 634,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "dummy"
            }
          ],
          "accountInfo": "Account # 1515-400-5045",
          "chapterId": 0,
          "headerFlag": false
        },
        {
          "sub_cat_template_id": 35,
          "subCategoryName": "DDB - Other",
          "eventTypeDataList": [
            {
              "id": 181,
              "value": 0,
              "event_id": 9
            },
            {
              "id": 203,
              "value": 0,
              "event_id": 8
            },
            {
              "id": 225,
              "value": 0,
              "event_id": 10
            },
            {
              "id": 247,
              "value": 0,
              "event_id": 11
            },
            {
              "id": 269,
              "value": 0,
              "event_id": 12
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 102,
              "lineItemName": "dummy",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 377,
                  "value": 0,
                  "event_id": 9
                },
                {
                  "id": 444,
                  "value": 0,
                  "event_id": 8
                },
                {
                  "id": 501,
                  "value": 0,
                  "event_id": 10
                },
                {
                  "id": 568,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 635,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "dummy"
            }
          ],
          "accountInfo": "Account # 1515-400-5085",
          "chapterId": 0,
          "headerFlag": false
        }
      ],
      "chapterId": 0,
      "headerFlag": false
    },
    {
      "cat_template_id": 29,
      "categoryName": "INDIRECT EXPENSES",
      "eventTypeDataList": [
        {
          "id": 282,
          "value": 11900,
          "event_id": 8
        },
        {
          "id": 288,
          "value": 5950,
          "event_id": 9
        },
        {
          "id": 294,
          "value": 5950,
          "event_id": 10
        },
        {
          "id": 300,
          "value": 0,
          "event_id": 11
        },
        {
          "id": 306,
          "value": 0,
          "event_id": 12
        }
      ],
      "subCategoryDataList": [
        {
          "sub_cat_template_id": 36,
          "subCategoryName": "Printing (Posters,Invitations,Healthcare Practice Mailings,Save the Date,etc)",
          "eventTypeDataList": [
            {
              "id": 182,
              "value": 500,
              "event_id": 9
            },
            {
              "id": 204,
              "value": 1000,
              "event_id": 8
            },
            {
              "id": 226,
              "value": 500,
              "event_id": 10
            },
            {
              "id": 248,
              "value": 0,
              "event_id": 11
            },
            {
              "id": 270,
              "value": 0,
              "event_id": 12
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 103,
              "lineItemName": "dummy",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 378,
                  "value": 0,
                  "event_id": 9
                },
                {
                  "id": 445,
                  "value": 0,
                  "event_id": 8
                },
                {
                  "id": 502,
                  "value": 0,
                  "event_id": 10
                },
                {
                  "id": 569,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 636,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "dummy"
            }
          ],
          "accountInfo": "Account # 1515-400-7125",
          "chapterId": 0,
          "headerFlag": false
        },
        {
          "sub_cat_template_id": 37,
          "subCategoryName": "Postage",
          "eventTypeDataList": [
            {
              "id": 183,
              "value": 100,
              "event_id": 9
            },
            {
              "id": 205,
              "value": 200,
              "event_id": 8
            },
            {
              "id": 227,
              "value": 100,
              "event_id": 10
            },
            {
              "id": 249,
              "value": 0,
              "event_id": 11
            },
            {
              "id": 271,
              "value": 0,
              "event_id": 12
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 104,
              "lineItemName": "dummy",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 379,
                  "value": 0,
                  "event_id": 9
                },
                {
                  "id": 446,
                  "value": 0,
                  "event_id": 8
                },
                {
                  "id": 503,
                  "value": 0,
                  "event_id": 10
                },
                {
                  "id": 570,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 637,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "dummy"
            }
          ],
          "accountInfo": "Account # 1515-400-7130",
          "chapterId": 0,
          "headerFlag": false
        },
        {
          "sub_cat_template_id": 38,
          "subCategoryName": "Shipping",
          "eventTypeDataList": [
            {
              "id": 184,
              "value": 500,
              "event_id": 9
            },
            {
              "id": 206,
              "value": 1000,
              "event_id": 8
            },
            {
              "id": 228,
              "value": 500,
              "event_id": 10
            },
            {
              "id": 250,
              "value": 0,
              "event_id": 11
            },
            {
              "id": 272,
              "value": 0,
              "event_id": 12
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 105,
              "lineItemName": "Incentive/Materials (CI Group/Will Enterprise items)",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 380,
                  "value": 250,
                  "event_id": 9
                },
                {
                  "id": 447,
                  "value": 500,
                  "event_id": 8
                },
                {
                  "id": 504,
                  "value": 250,
                  "event_id": 10
                },
                {
                  "id": 571,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 638,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Incentive/Materials (CI Group/Will Enterprise items)"
            },
            {
              "template_line_item_id": 106,
              "lineItemName": "Miscellaneous Shipping",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 381,
                  "value": 250,
                  "event_id": 9
                },
                {
                  "id": 448,
                  "value": 500,
                  "event_id": 8
                },
                {
                  "id": 505,
                  "value": 250,
                  "event_id": 10
                },
                {
                  "id": 572,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 639,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Miscellaneous Shipping"
            }
          ],
          "chapterId": 0,
          "headerFlag": false
        },
        {
          "sub_cat_template_id": 39,
          "subCategoryName": "Professional Fees",
          "eventTypeDataList": [
            {
              "id": 185,
              "value": 0,
              "event_id": 9
            },
            {
              "id": 207,
              "value": 0,
              "event_id": 8
            },
            {
              "id": 229,
              "value": 0,
              "event_id": 10
            },
            {
              "id": 251,
              "value": 0,
              "event_id": 11
            },
            {
              "id": 273,
              "value": 0,
              "event_id": 12
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 107,
              "lineItemName": "Enter Vendor Name Here",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 382,
                  "value": 0,
                  "event_id": 9
                },
                {
                  "id": 449,
                  "value": 0,
                  "event_id": 8
                },
                {
                  "id": 506,
                  "value": 0,
                  "event_id": 10
                },
                {
                  "id": 573,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 640,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Enter Vendor Name Here"
            },
            {
              "template_line_item_id": 108,
              "lineItemName": "Enter Vendor Name Here",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 383,
                  "value": 0,
                  "event_id": 9
                },
                {
                  "id": 450,
                  "value": 0,
                  "event_id": 8
                },
                {
                  "id": 507,
                  "value": 0,
                  "event_id": 10
                },
                {
                  "id": 574,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 641,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Enter Vendor Name Here"
            },
            {
              "template_line_item_id": 109,
              "lineItemName": "Enter Vendor Name Here",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 384,
                  "value": 0,
                  "event_id": 9
                },
                {
                  "id": 451,
                  "value": 0,
                  "event_id": 8
                },
                {
                  "id": 508,
                  "value": 0,
                  "event_id": 10
                },
                {
                  "id": 575,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 642,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Enter Vendor Name Here"
            },
            {
              "template_line_item_id": 110,
              "lineItemName": "Enter Vendor Name Here",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 385,
                  "value": 0,
                  "event_id": 9
                },
                {
                  "id": 452,
                  "value": 0,
                  "event_id": 8
                },
                {
                  "id": 509,
                  "value": 0,
                  "event_id": 10
                },
                {
                  "id": 576,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 643,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Enter Vendor Name Here"
            }
          ],
          "chapterId": 0,
          "headerFlag": false
        },
        {
          "sub_cat_template_id": 40,
          "subCategoryName": "Meetings & Travel (Outside of Walk Day)",
          "eventTypeDataList": [
            {
              "id": 186,
              "value": 4000,
              "event_id": 9
            },
            {
              "id": 208,
              "value": 8000,
              "event_id": 8
            },
            {
              "id": 230,
              "value": 4000,
              "event_id": 10
            },
            {
              "id": 252,
              "value": 0,
              "event_id": 11
            },
            {
              "id": 274,
              "value": 0,
              "event_id": 12
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 111,
              "lineItemName": "Meetings costs/meals/refreshments (Not for Day of Walk)",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 386,
                  "value": 750,
                  "event_id": 9
                },
                {
                  "id": 453,
                  "value": 1500,
                  "event_id": 8
                },
                {
                  "id": 510,
                  "value": 750,
                  "event_id": 10
                },
                {
                  "id": 577,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 644,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Meetings costs/meals/refreshments (Not for Day of Walk)"
            },
            {
              "template_line_item_id": 112,
              "lineItemName": "Ground Transporation (Not for Day of Walk)",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 387,
                  "value": 2000,
                  "event_id": 9
                },
                {
                  "id": 454,
                  "value": 4000,
                  "event_id": 8
                },
                {
                  "id": 511,
                  "value": 2000,
                  "event_id": 10
                },
                {
                  "id": 578,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 645,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Ground Transporation (Not for Day of Walk)"
            },
            {
              "template_line_item_id": 113,
              "lineItemName": "Hotel Costs (Not for Day of Walk)",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 388,
                  "value": 1250,
                  "event_id": 9
                },
                {
                  "id": 455,
                  "value": 2500,
                  "event_id": 8
                },
                {
                  "id": 512,
                  "value": 1250,
                  "event_id": 10
                },
                {
                  "id": 579,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 646,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Hotel Costs (Not for Day of Walk)"
            },
            {
              "template_line_item_id": 114,
              "lineItemName": "Additional meetings expenses (Not for Day of Walk)",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 389,
                  "value": 0,
                  "event_id": 9
                },
                {
                  "id": 456,
                  "value": 0,
                  "event_id": 8
                },
                {
                  "id": 513,
                  "value": 0,
                  "event_id": 10
                },
                {
                  "id": 580,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 647,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Additional meetings expenses (Not for Day of Walk)"
            }
          ],
          "chapterId": 0,
          "headerFlag": false
        },
        {
          "sub_cat_template_id": 41,
          "subCategoryName": "Supplies",
          "eventTypeDataList": [
            {
              "id": 187,
              "value": 750,
              "event_id": 9
            },
            {
              "id": 209,
              "value": 1500,
              "event_id": 8
            },
            {
              "id": 231,
              "value": 750,
              "event_id": 10
            },
            {
              "id": 253,
              "value": 0,
              "event_id": 11
            },
            {
              "id": 275,
              "value": 0,
              "event_id": 12
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 115,
              "lineItemName": "Office Depot supplies (Posters, etc.)",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 390,
                  "value": 500,
                  "event_id": 9
                },
                {
                  "id": 457,
                  "value": 1000,
                  "event_id": 8
                },
                {
                  "id": 514,
                  "value": 500,
                  "event_id": 10
                },
                {
                  "id": 581,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 648,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Office Depot supplies (Posters, etc.)"
            },
            {
              "template_line_item_id": 116,
              "lineItemName": "CI Group supplies (Collection envelopes, folders, pins, etc.) reflected in your TS Admin Budget",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 391,
                  "value": 150,
                  "event_id": 9
                },
                {
                  "id": 458,
                  "value": 300,
                  "event_id": 8
                },
                {
                  "id": 515,
                  "value": 150,
                  "event_id": 10
                },
                {
                  "id": 582,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 649,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "CI Group supplies (Collection envelopes, folders, pins, etc.) reflected in your TS Admin Budget"
            },
            {
              "template_line_item_id": 117,
              "lineItemName": "Miscellaneous Supplies",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 392,
                  "value": 100,
                  "event_id": 9
                },
                {
                  "id": 459,
                  "value": 200,
                  "event_id": 8
                },
                {
                  "id": 516,
                  "value": 100,
                  "event_id": 10
                },
                {
                  "id": 583,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 650,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "Miscellaneous Supplies"
            }
          ],
          "chapterId": 0,
          "headerFlag": false
        },
        {
          "sub_cat_template_id": 42,
          "subCategoryName": "Telecommunications",
          "eventTypeDataList": [
            {
              "id": 188,
              "value": 0,
              "event_id": 9
            },
            {
              "id": 210,
              "value": 0,
              "event_id": 8
            },
            {
              "id": 232,
              "value": 0,
              "event_id": 10
            },
            {
              "id": 254,
              "value": 0,
              "event_id": 11
            },
            {
              "id": 276,
              "value": 0,
              "event_id": 12
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 118,
              "lineItemName": "dummy",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 393,
                  "value": 0,
                  "event_id": 9
                },
                {
                  "id": 460,
                  "value": 0,
                  "event_id": 8
                },
                {
                  "id": 517,
                  "value": 0,
                  "event_id": 10
                },
                {
                  "id": 584,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 651,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "dummy"
            }
          ],
          "accountInfo": "Account # 1515-400-7175",
          "chapterId": 0,
          "headerFlag": false
        },
        {
          "sub_cat_template_id": 43,
          "subCategoryName": "Advertising",
          "eventTypeDataList": [
            {
              "id": 189,
              "value": 100,
              "event_id": 9
            },
            {
              "id": 211,
              "value": 200,
              "event_id": 8
            },
            {
              "id": 233,
              "value": 100,
              "event_id": 10
            },
            {
              "id": 255,
              "value": 0,
              "event_id": 11
            },
            {
              "id": 277,
              "value": 0,
              "event_id": 12
            }
          ],
          "lineItemDataList": [
            {
              "template_line_item_id": 119,
              "lineItemName": "dummy",
              "chapterId": 0,
              "pricePerPiece": 0,
              "eventTypeDataList": [
                {
                  "id": 394,
                  "value": 0,
                  "event_id": 9
                },
                {
                  "id": 461,
                  "value": 0,
                  "event_id": 8
                },
                {
                  "id": 518,
                  "value": 0,
                  "event_id": 10
                },
                {
                  "id": 585,
                  "value": 0,
                  "event_id": 11
                },
                {
                  "id": 652,
                  "value": 0,
                  "event_id": 12
                }
              ],
              "headerFlag": false,
              "lineItemDescription": "dummy"
            }
          ],
          "accountInfo": "Account # 1515-400-7160",
          "chapterId": 0,
          "headerFlag": false
        }
      ],
      "chapterId": 0,
      "headerFlag": false
    },
    {
      "cat_template_id": 30,
      "categoryName": "NET REVENUE",
      "eventTypeDataList": [
        {
          "id": 280,
          "value": 141412.8,
          "event_id": 8
        },
        {
          "id": 286,
          "value": 67956.4,
          "event_id": 9
        },
        {
          "id": 292,
          "value": 73456.4,
          "event_id": 10
        },
        {
          "id": 298,
          "value": 0,
          "event_id": 11
        },
        {
          "id": 304,
          "value": 0,
          "event_id": 12
        }
      ],
      "subCategoryDataList": [],
      "chapterId": 0,
      "headerFlag": false
    },
    {
      "cat_template_id": 31,
      "categoryName": "NET REVENUE MARGIN",
      "eventTypeDataList": [
        {
          "id": 281,
          "value": 0.8838299999999999,
          "event_id": 8
        },
        {
          "id": 287,
          "value": 0.87685677419,
          "event_id": 9
        },
        {
          "id": 293,
          "value": 0.89038060606,
          "event_id": 10
        },
        {
          "id": 299,
          "value": 0,
          "event_id": 11
        },
        {
          "id": 305,
          "value": 0,
          "event_id": 12
        }
      ],
      "subCategoryDataList": [],
      "chapterId": 0,
      "headerFlag": false
    },
    {
      "cat_template_id": 32,
      "categoryName": "NET INCOME",
      "eventTypeDataList": [
        {
          "id": 283,
          "value": 129512.8,
          "event_id": 8
        },
        {
          "id": 289,
          "value": 62006.4,
          "event_id": 9
        },
        {
          "id": 295,
          "value": 67506.4,
          "event_id": 10
        },
        {
          "id": 301,
          "value": 0,
          "event_id": 11
        },
        {
          "id": 307,
          "value": 0,
          "event_id": 12
        }
      ],
      "subCategoryDataList": [],
      "chapterId": 0,
      "headerFlag": false
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
              "lineItemName": "Donor Name:",
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
    },
    {
      "cat_id": 24,
      "categoryName": "Compensation\n(Will Be Completed by Finance)",
      "subCategoryList": []
    },
    {
      "cat_id": 25,
      "categoryName": "Direct Mail & Membership",
      "subCategoryList": []
    },
    {
      "cat_id": 26,
      "categoryName": "Expenses",
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
  { field: "type", headerName: "", width: "400", editable: true, cellClassName: "" },
  { field: "pyytdBudget", headerName: "Budget", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "pyytdActual", headerName: "Actual", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "pyttdVariance", headerName: "Variance", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "pyttdPercentVariance", headerName: "%Variance", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "pyBudget", headerName: "2021 Budget", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "pyForecast", headerName: "2021 Forecast", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "specialEvents", headerName: "Special Events", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "spin4", headerName: "Spin4", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "takeSteps", headerName: "Take Steps", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "other", headerName: "Other", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "admin", headerName: "Admin", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "totalCyBudget", headerName: "Total 2022 Budget", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "forecastBudgetVariance", headerName: "Forecast vs Budget Variance", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "percentVariance", headerName: "% Variance", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "pyPercentGrowth", headerName: "2021", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
  { field: "cyPercentGrowth", headerName: "2022", width: "180", editable: true, headerClassName: 'mediumFontSize', headerAlign: 'center', cellClassName: '', align: 'center' },
]

export const consolidatedStructure = {
  "conBudgetListEntity": [
    {
      "id": 1,
      "type": "Revenue",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "Black",
      "pyytdBudget": 0,
      "pyytdActual": 0,
      "pyttdVariance": 0,
      "pyttdPercentVariance": 0,
      "pyBudget": 0,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": null,
      "cyPercentGrowth": null
    },
    {
      "id": 2,
      "type": "Special Event Revenue",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 199000,
      "pyytdActual": 104992,
      "pyttdVariance": -94008,
      "pyttdPercentVariance": -47.24020100503,
      "pyBudget": 199000,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 3,
      "type": "Direct Response",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 0,
      "pyytdActual": 0,
      "pyttdVariance": 0,
      "pyttdPercentVariance": 0,
      "pyBudget": 0,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 4,
      "type": "Less: Direct Special Event Expenses",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": -42250,
      "pyytdActual": -16583,
      "pyttdVariance": 25667,
      "pyttdPercentVariance": 60.75029585799,
      "pyBudget": -42250,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 5,
      "type": "Net Revenue from Special Events",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "Yellow",
      "pyytdBudget": 156750,
      "pyytdActual": 88409,
      "pyttdVariance": -68341,
      "pyttdPercentVariance": -43.598724082930005,
      "pyBudget": 156750,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 6,
      "type": "Team Challenge",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 0,
      "pyytdActual": 0,
      "pyttdVariance": 0,
      "pyttdPercentVariance": 0,
      "pyBudget": 0,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 7,
      "type": "Less: Direct Team Challenge Expenses",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 0,
      "pyytdActual": 0,
      "pyttdVariance": 0,
      "pyttdPercentVariance": 0,
      "pyBudget": 0,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 8,
      "type": "Net Revenue from Team Challenge",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "Yellow",
      "pyytdBudget": 0,
      "pyytdActual": 0,
      "pyttdVariance": 0,
      "pyttdPercentVariance": 0,
      "pyBudget": 0,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 9,
      "type": "spin4",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 30000,
      "pyytdActual": 19707,
      "pyttdVariance": -10293,
      "pyttdPercentVariance": -34.31,
      "pyBudget": 30000,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 10,
      "type": "Less: Direct spin4 Expenses",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": -2422,
      "pyytdActual": -324,
      "pyttdVariance": 2098,
      "pyttdPercentVariance": 86.62262592898,
      "pyBudget": -2422,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 11,
      "type": "Net Revenue from spin4",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "Yellow",
      "pyytdBudget": 27578,
      "pyytdActual": 19383,
      "pyttdVariance": -8195,
      "pyttdPercentVariance": -29.71571542534,
      "pyBudget": 27578,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 12,
      "type": "Take Steps",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 143500,
      "pyytdActual": 160416,
      "pyttdVariance": 16916,
      "pyttdPercentVariance": 11.7881533101,
      "pyBudget": 143500,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 13,
      "type": "Less: Direct Take Steps Expenses",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": -12250,
      "pyytdActual": -9138,
      "pyttdVariance": 3112,
      "pyttdPercentVariance": 25.404081632649998,
      "pyBudget": -12250,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 14,
      "type": "Net Revenue from Take Steps",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "Yellow",
      "pyytdBudget": 131250,
      "pyytdActual": 151278,
      "pyttdVariance": 20028,
      "pyttdPercentVariance": 15.25942857143,
      "pyBudget": 131250,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 15,
      "type": "Total Gross Event Revenue",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 372500,
      "pyytdActual": 285115,
      "pyttdVariance": -87385,
      "pyttdPercentVariance": -23.45906040268,
      "pyBudget": 372500,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 16,
      "type": "Less: Total Direct Donor Benefit (DDB) Event Expense",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": -56922,
      "pyytdActual": -26045,
      "pyttdVariance": 30877,
      "pyttdPercentVariance": 54.244404623870004,
      "pyBudget": -56922,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 17,
      "type": "Total Net Event Revenue",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "Green",
      "pyytdBudget": 315578,
      "pyytdActual": 259070,
      "pyttdVariance": -56508,
      "pyttdPercentVariance": -17.90619117936,
      "pyBudget": 315578,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 18,
      "type": "Individual Major Gifts",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 53000,
      "pyytdActual": 44913,
      "pyttdVariance": -8087,
      "pyttdPercentVariance": -15.25849056604,
      "pyBudget": 53000,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 53000,
      "admin": 0,
      "totalCyBudget": 53000,
      "forecastBudgetVariance": 53000,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 19,
      "type": "Corporate Major Gifts",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 0,
      "pyytdActual": 0,
      "pyttdVariance": 0,
      "pyttdPercentVariance": 0,
      "pyBudget": 0,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 20,
      "type": "Foundation Major Gifts",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 67500,
      "pyytdActual": 65000,
      "pyttdVariance": -2500,
      "pyttdPercentVariance": -3.7037037037,
      "pyBudget": 67500,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 67500,
      "admin": 0,
      "totalCyBudget": 67500,
      "forecastBudgetVariance": 67500,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 21,
      "type": "Corporate Pharma",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 0,
      "pyytdActual": 3250,
      "pyttdVariance": 3250,
      "pyttdPercentVariance": 100,
      "pyBudget": 0,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 22,
      "type": "Total Major Gifts",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "Green",
      "pyytdBudget": 120500,
      "pyytdActual": 113163,
      "pyttdVariance": -7337,
      "pyttdPercentVariance": -6.0887966805,
      "pyBudget": 120500,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 120500,
      "admin": 0,
      "totalCyBudget": 120500,
      "forecastBudgetVariance": 120500,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 23,
      "type": "Education & Camp Registration ",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 0,
      "pyytdActual": 0,
      "pyttdVariance": 0,
      "pyttdPercentVariance": 0,
      "pyBudget": 0,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 24,
      "type": "Third Party-Events",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 7500,
      "pyytdActual": 1332,
      "pyttdVariance": -6168,
      "pyttdPercentVariance": -82.24000000000001,
      "pyBudget": 7500,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 7500,
      "admin": 0,
      "totalCyBudget": 7500,
      "forecastBudgetVariance": 7500,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 25,
      "type": "Workplace Giving",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 3701,
      "pyytdActual": 6328,
      "pyttdVariance": 2627,
      "pyttdPercentVariance": 70.98081599568,
      "pyBudget": 3701,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 3701,
      "admin": 0,
      "totalCyBudget": 3701,
      "forecastBudgetVariance": 3701,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 26,
      "type": "Royalty ",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 0,
      "pyytdActual": 0,
      "pyttdVariance": 0,
      "pyttdPercentVariance": 0,
      "pyBudget": 0,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 27,
      "type": "Government Grants",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 0,
      "pyytdActual": 0,
      "pyttdVariance": 0,
      "pyttdPercentVariance": 0,
      "pyBudget": 0,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 28,
      "type": "Interest & Dividend Income",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 0,
      "pyytdActual": 0,
      "pyttdVariance": 0,
      "pyttdPercentVariance": 0,
      "pyBudget": 0,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 29,
      "type": "Tributes and Memorials",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 1000,
      "pyytdActual": 2115,
      "pyttdVariance": 1115,
      "pyttdPercentVariance": 111.5,
      "pyBudget": 1000,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 1000,
      "admin": 0,
      "totalCyBudget": 1000,
      "forecastBudgetVariance": 1000,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 30,
      "type": "Clubs & Organizations",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 500,
      "pyytdActual": 0,
      "pyttdVariance": -500,
      "pyttdPercentVariance": -100,
      "pyBudget": 500,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 500,
      "admin": 0,
      "totalCyBudget": 500,
      "forecastBudgetVariance": 500,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 31,
      "type": "Vehicle Organizations",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 0,
      "pyytdActual": 0,
      "pyttdVariance": 0,
      "pyttdPercentVariance": 0,
      "pyBudget": 0,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 32,
      "type": "Investment Portfolio Appropriated for Operations",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 0,
      "pyytdActual": 0,
      "pyttdVariance": 0,
      "pyttdPercentVariance": 0,
      "pyBudget": 0,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 33,
      "type": "Losses and Recoveries",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 0,
      "pyytdActual": 0,
      "pyttdVariance": 0,
      "pyttdPercentVariance": 0,
      "pyBudget": 0,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 34,
      "type": "Miscellaneous Revenue",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 0,
      "pyytdActual": 0,
      "pyttdVariance": 0,
      "pyttdPercentVariance": 0,
      "pyBudget": 0,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 35,
      "type": "Total Other Revenue",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "Yellow",
      "pyytdBudget": 12701,
      "pyytdActual": 9775,
      "pyttdVariance": -2926,
      "pyttdPercentVariance": -23.03755609795,
      "pyBudget": 12701,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 12701,
      "admin": 0,
      "totalCyBudget": 12701,
      "forecastBudgetVariance": 12701,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 36,
      "type": "Operating Revenue",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "Yellow",
      "pyytdBudget": 448779,
      "pyytdActual": 382008,
      "pyttdVariance": -66771,
      "pyttdPercentVariance": -14.878369977200002,
      "pyBudget": 448779,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 133201,
      "admin": 0,
      "totalCyBudget": 133201,
      "forecastBudgetVariance": 133201,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 37,
      "type": "Charitable Gift Annuities",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 0,
      "pyytdActual": 0,
      "pyttdVariance": 0,
      "pyttdPercentVariance": 0,
      "pyBudget": 0,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 38,
      "type": "Bequests",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 0,
      "pyytdActual": 0,
      "pyttdVariance": 0,
      "pyttdPercentVariance": 0,
      "pyBudget": 0,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 39,
      "type": "TOTAL GROSS REVENUE",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "Green",
      "pyytdBudget": 505701,
      "pyytdActual": 408053,
      "pyttdVariance": -97648,
      "pyttdPercentVariance": -19.30943383541,
      "pyBudget": 505701,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 133201,
      "admin": 0,
      "totalCyBudget": 133201,
      "forecastBudgetVariance": 133201,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 40,
      "type": "TOTAL NET REVENUE",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "Green",
      "pyytdBudget": 448779,
      "pyytdActual": 382008,
      "pyttdVariance": -66771,
      "pyttdPercentVariance": -14.878369977200002,
      "pyBudget": 448779,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 133201,
      "admin": 0,
      "totalCyBudget": 133201,
      "forecastBudgetVariance": 133201,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 41,
      "type": "EXPENSES",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "Black",
      "pyytdBudget": 0,
      "pyytdActual": 0,
      "pyttdVariance": 0,
      "pyttdPercentVariance": 0,
      "pyBudget": 0,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": null,
      "cyPercentGrowth": null
    },
    {
      "id": 42,
      "type": "Research",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 0,
      "pyytdActual": 0,
      "pyttdVariance": 0,
      "pyttdPercentVariance": 0,
      "pyBudget": 0,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 43,
      "type": "Mission - Conference & Symposiums",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 0,
      "pyytdActual": 0,
      "pyttdVariance": 0,
      "pyttdPercentVariance": 0,
      "pyBudget": 0,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 44,
      "type": "Direct Education Programs",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 0,
      "pyytdActual": 0,
      "pyttdVariance": 0,
      "pyttdPercentVariance": 0,
      "pyBudget": 0,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 45,
      "type": "Other Mission Expenditures",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 0,
      "pyytdActual": 0,
      "pyttdVariance": 0,
      "pyttdPercentVariance": 0,
      "pyBudget": 0,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 46,
      "type": "Direct Mission Expenses",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "Yellow",
      "pyytdBudget": 0,
      "pyytdActual": 0,
      "pyttdVariance": 0,
      "pyttdPercentVariance": 0,
      "pyBudget": 0,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 47,
      "type": "Occupancy",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 2100,
      "pyytdActual": 2539,
      "pyttdVariance": 439,
      "pyttdPercentVariance": 20.90476190476,
      "pyBudget": 2100,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 48,
      "type": "Printing ",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 983,
      "pyytdActual": 966,
      "pyttdVariance": -17,
      "pyttdPercentVariance": -1.72939979654,
      "pyBudget": 983,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 49,
      "type": "Compensation",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 259934,
      "pyytdActual": 171905,
      "pyttdVariance": -88029,
      "pyttdPercentVariance": -33.86590442189,
      "pyBudget": 259934,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 50,
      "type": "Postage & Shipping",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 1756,
      "pyytdActual": 1097,
      "pyttdVariance": -659,
      "pyttdPercentVariance": -37.528473804099995,
      "pyBudget": 1756,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 51,
      "type": "Meetings & Travel",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 5472,
      "pyytdActual": 6390,
      "pyttdVariance": 918,
      "pyttdPercentVariance": 16.77631578947,
      "pyBudget": 5472,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 52,
      "type": "Depreciation",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 0,
      "pyytdActual": 302,
      "pyttdVariance": 302,
      "pyttdPercentVariance": 100,
      "pyBudget": 0,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 53,
      "type": "Insurance",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 0,
      "pyytdActual": 0,
      "pyttdVariance": 0,
      "pyttdPercentVariance": 0,
      "pyBudget": 0,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 54,
      "type": "Professional Fees",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 0,
      "pyytdActual": 0,
      "pyttdVariance": 0,
      "pyttdPercentVariance": 0,
      "pyBudget": 0,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 55,
      "type": "List Rental",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 0,
      "pyytdActual": 0,
      "pyttdVariance": 0,
      "pyttdPercentVariance": 0,
      "pyBudget": 0,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 56,
      "type": "Repairs & Maintenance",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 0,
      "pyytdActual": 0,
      "pyttdVariance": 0,
      "pyttdPercentVariance": 0,
      "pyBudget": 0,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 57,
      "type": "Advertising",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 150,
      "pyytdActual": 86,
      "pyttdVariance": -64,
      "pyttdPercentVariance": -42.66666666667,
      "pyBudget": 150,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 58,
      "type": "Bank Charge",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 25,
      "pyytdActual": 96,
      "pyttdVariance": 71,
      "pyttdPercentVariance": 284,
      "pyBudget": 25,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 59,
      "type": "Dues & Subscription",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 450,
      "pyytdActual": 518,
      "pyttdVariance": 68,
      "pyttdPercentVariance": 15.11111111111,
      "pyBudget": 450,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 60,
      "type": "Permit /Licenses/ State Reg.",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 525,
      "pyytdActual": 0,
      "pyttdVariance": -525,
      "pyttdPercentVariance": -100,
      "pyBudget": 525,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 61,
      "type": "Acknowledgement /Recognition",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 450,
      "pyytdActual": 781,
      "pyttdVariance": 331,
      "pyttdPercentVariance": 73.55555555556,
      "pyBudget": 450,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 62,
      "type": "Equipment Rental",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 0,
      "pyytdActual": 0,
      "pyttdVariance": 0,
      "pyttdPercentVariance": 0,
      "pyBudget": 0,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 63,
      "type": "Telecommunications",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 1479,
      "pyytdActual": 1550,
      "pyttdVariance": 71,
      "pyttdPercentVariance": 4.800540906019999,
      "pyBudget": 1479,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 64,
      "type": "Supplies",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 3040,
      "pyytdActual": 2253,
      "pyttdVariance": -787,
      "pyttdPercentVariance": -25.88815789474,
      "pyBudget": 3040,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 65,
      "type": "Contributed Airtime",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 0,
      "pyytdActual": 0,
      "pyttdVariance": 0,
      "pyttdPercentVariance": 0,
      "pyBudget": 0,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 66,
      "type": "Donated Services",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 0,
      "pyytdActual": 0,
      "pyttdVariance": 0,
      "pyttdPercentVariance": 0,
      "pyBudget": 0,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 67,
      "type": "Auction Items",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 0,
      "pyytdActual": 0,
      "pyttdVariance": 0,
      "pyttdPercentVariance": 0,
      "pyBudget": 0,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 68,
      "type": "Provision for Uncollectible Pledges, Discounts, AR",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 0,
      "pyytdActual": 0,
      "pyttdVariance": 0,
      "pyttdPercentVariance": 0,
      "pyBudget": 0,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 69,
      "type": "Miscellaneous",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "No Color",
      "pyytdBudget": 500,
      "pyytdActual": 5000,
      "pyttdVariance": 4500,
      "pyttdPercentVariance": 900,
      "pyBudget": 500,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 70,
      "type": "OPERATING EXPENSES",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "Yellow",
      "pyytdBudget": 276864,
      "pyytdActual": 193483,
      "pyttdVariance": -83381,
      "pyttdPercentVariance": -30.116230351360002,
      "pyBudget": 276864,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 71,
      "type": "TOTAL EXPENSES",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "Green",
      "pyytdBudget": 276864,
      "pyytdActual": 193483,
      "pyttdVariance": -83381,
      "pyttdPercentVariance": -30.116230351360002,
      "pyBudget": 276864,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
    },
    {
      "id": 72,
      "type": "NET SURPLUS (DEFICIT) FROM OPERATIONS",
      "area": "West",
      "chapter": "Central Texas",
      "companyCode": 1515,
      "color": "Green",
      "pyytdBudget": 171915,
      "pyytdActual": 188525,
      "pyttdVariance": 16610,
      "pyttdPercentVariance": 9.66175144694,
      "pyBudget": 171915,
      "pyForecast": 0,
      "specialEvents": 0,
      "spin4": 0,
      "takeSteps": 0,
      "other": 0,
      "admin": 0,
      "totalCyBudget": 0,
      "forecastBudgetVariance": 0,
      "percentVarinace": 0,
      "pyPercentGrowth": 0,
      "cyPercentGrowth": 0
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

export const newChapterDataList = {
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
     },
     {
        "chapterId":3,
        "chapterName":"Northern California",
        "chapterDescription":"920 NCAL - Northern California",
        "chapterCode":1920,
        "chapterArea":"West",
        "departmentCode":700,
        "subLedgerCode":0
     },
     {
        "chapterId":4,
        "chapterName":"New England",
        "chapterDescription":"030 NE - New England",
        "chapterCode":1030,
        "chapterArea":"East",
        "departmentCode":700,
        "subLedgerCode":0
     },
     {
        "chapterId":5,
        "chapterName":"Connecticut - Westchester",
        "chapterDescription":"100 CWEST - Connecticut - Westchester",
        "chapterCode":1100,
        "chapterArea":"East",
        "departmentCode":700,
        "subLedgerCode":0
     },
     {
        "chapterId":6,
        "chapterName":"Greater New York",
        "chapterDescription":"110 NY - Greater New York",
        "chapterCode":1110,
        "chapterArea":"East",
        "departmentCode":700,
        "subLedgerCode":0
     },
     {
        "chapterId":7,
        "chapterName":"Long Island",
        "chapterDescription":"120 LI - Long Island",
        "chapterCode":1120,
        "chapterArea":"East",
        "departmentCode":700,
        "subLedgerCode":0
     },
     {
        "chapterId":8,
        "chapterName":"Western & Central NY",
        "chapterDescription":"130 WCNY - Western & Central NY",
        "chapterCode":1130,
        "chapterArea":"East",
        "departmentCode":700,
        "subLedgerCode":0
     },
     {
        "chapterId":9,
        "chapterName":"Upstate Northeastern NY",
        "chapterDescription":"140 UNY - Upstate New York",
        "chapterCode":1140,
        "chapterArea":"East",
        "departmentCode":700,
        "subLedgerCode":0
     },
     {
        "chapterId":10,
        "chapterName":"New Jersey",
        "chapterDescription":"160 NJ - New Jersey",
        "chapterCode":1160,
        "chapterArea":"East",
        "departmentCode":700,
        "subLedgerCode":0
     },
     {
        "chapterId":11,
        "chapterName":"Carolinas",
        "chapterDescription":"200 CAR - Carolinas",
        "chapterCode":1200,
        "chapterArea":"Central",
        "departmentCode":700,
        "subLedgerCode":0
     },
     {
        "chapterId":12,
        "chapterName":"DC - MD - Virginia",
        "chapterDescription":"210 DC - DC - MD - Virginia",
        "chapterCode":1210,
        "chapterArea":"East",
        "departmentCode":700,
        "subLedgerCode":0
     },
     {
        "chapterId":13,
        "chapterName":"Philadelphia",
        "chapterDescription":"230 PH - Philadelphia",
        "chapterCode":1230,
        "chapterArea":"East",
        "departmentCode":700,
        "subLedgerCode":0
     },
     {
        "chapterId":14,
        "chapterName":"Alabama-Northwest Florida",
        "chapterDescription":"300 AL - Alabama Northwest Florida",
        "chapterCode":1300,
        "chapterArea":"Central",
        "departmentCode":700,
        "subLedgerCode":0
     },
     {
        "chapterId":15,
        "chapterName":"Southern Florida",
        "chapterDescription":"310 FL - Southern Florida",
        "chapterCode":1310,
        "chapterArea":"Central",
        "departmentCode":700,
        "subLedgerCode":0
     },
     {
        "chapterId":16,
        "chapterName":"Central Florida",
        "chapterDescription":"315 CFL - Central Florida",
        "chapterCode":1315,
        "chapterArea":"Central ",
        "departmentCode":700,
        "subLedgerCode":0
     },
     {
        "chapterId":17,
        "chapterName":"Georgia",
        "chapterDescription":"320 GA - Georgia",
        "chapterCode":1320,
        "chapterArea":"Central",
        "departmentCode":700,
        "subLedgerCode":0
     },
     {
        "chapterId":18,
        "chapterName":"Tennessee",
        "chapterDescription":"340 TN - Tennessee",
        "chapterCode":1340,
        "chapterArea":"Central",
        "departmentCode":700,
        "subLedgerCode":0
     },
     {
        "chapterId":19,
        "chapterName":"Southeast Region Office",
        "chapterDescription":"399 - Southeast Area Office",
        "chapterCode":1399,
        "chapterArea":"Central Territory",
        "departmentCode":700,
        "subLedgerCode":0
     },
     {
        "chapterId":20,
        "chapterName":"Southern Ohio",
        "chapterDescription":"400 SO - Southern Ohio",
        "chapterCode":1400,
        "chapterArea":"Central",
        "departmentCode":700,
        "subLedgerCode":0
     },
     {
        "chapterId":21,
        "chapterName":"Indiana",
        "chapterDescription":"410 IN - Indiana",
        "chapterCode":1410,
        "chapterArea":"Central",
        "departmentCode":700,
        "subLedgerCode":0
     },
     {
        "chapterId":22,
        "chapterName":"Michigan",
        "chapterDescription":"430 MI - Michigan",
        "chapterCode":1430,
        "chapterArea":"Central",
        "departmentCode":700,
        "subLedgerCode":0
     },
     {
        "chapterId":23,
        "chapterName":"Northern Ohio",
        "chapterDescription":"440 NO - Northern Ohio",
        "chapterCode":1440,
        "chapterArea":"Central",
        "departmentCode":700,
        "subLedgerCode":0
     },
     {
        "chapterId":24,
        "chapterName":"Western Pennsylvania",
        "chapterDescription":"460 WPA - Western Pennsylvania",
        "chapterCode":1460,
        "chapterArea":"East",
        "departmentCode":700,
        "subLedgerCode":0
     },
     {
        "chapterId":25,
        "chapterName":"Southern Texas",
        "chapterDescription":"500 STX - Southern Texas",
        "chapterCode":1500,
        "chapterArea":"West",
        "departmentCode":700,
        "subLedgerCode":0
     },
     {
        "chapterId":26,
        "chapterName":"Mid-America",
        "chapterDescription":"610 MA - Mid-America",
        "chapterCode":1610,
        "chapterArea":"Central",
        "departmentCode":700,
        "subLedgerCode":0
     },
     {
        "chapterId":27,
        "chapterName":"Nebraska & Iowa",
        "chapterDescription":"620 NB - Nebraska & Iowa",
        "chapterCode":1620,
        "chapterArea":"Central",
        "departmentCode":700,
        "subLedgerCode":0
     },
     {
        "chapterId":28,
        "chapterName":"Illinois",
        "chapterDescription":"630 IL - Illinois",
        "chapterCode":1630,
        "chapterArea":"Central",
        "departmentCode":700,
        "subLedgerCode":0
     },
     {
        "chapterId":29,
        "chapterName":"Wisconsin",
        "chapterDescription":"640 WN - Wisconsin",
        "chapterCode":1640,
        "chapterArea":"Central",
        "departmentCode":700,
        "subLedgerCode":0
     },
     {
        "chapterId":30,
        "chapterName":"Rocky Mountain",
        "chapterDescription":"700 RM - Rocky Mountain",
        "chapterCode":1700,
        "chapterArea":"West",
        "departmentCode":700,
        "subLedgerCode":0
     },
     {
        "chapterId":31,
        "chapterName":"Arizona",
        "chapterDescription":"710 AZ - Arizona",
        "chapterCode":1710,
        "chapterArea":"West",
        "departmentCode":700,
        "subLedgerCode":0
     },
     {
        "chapterId":32,
        "chapterName":"Nevada",
        "chapterDescription":"720 NV - Nevada",
        "chapterCode":1720,
        "chapterArea":"West",
        "departmentCode":700,
        "subLedgerCode":0
     },
     {
        "chapterId":33,
        "chapterName":"Northwest",
        "chapterDescription":"800 NW - Northwest",
        "chapterCode":1800,
        "chapterArea":"West",
        "departmentCode":700,
        "subLedgerCode":0
     },
     {
        "chapterId":34,
        "chapterName":"Minnesota/Dakotas",
        "chapterDescription":"810 MN - Minnesota Dakotas",
        "chapterCode":1810,
        "chapterArea":"Central",
        "departmentCode":700,
        "subLedgerCode":0
     },
     {
        "chapterId":35,
        "chapterName":"Northwest Area Office ",
        "chapterDescription":"889 - Northwest Area Office",
        "chapterCode":1889,
        "chapterArea":"West",
        "departmentCode":700,
        "subLedgerCode":0
     },
     {
        "chapterId":36,
        "chapterName":"Minnesota Area Office",
        "chapterDescription":"899 - Minnesota Area Office",
        "chapterCode":1899,
        "chapterArea":"Central",
        "departmentCode":700,
        "subLedgerCode":0
     },
     {
        "chapterId":37,
        "chapterName":"Greater Los Angeles",
        "chapterDescription":"900 LA - Greater Los Angeles",
        "chapterCode":1900,
        "chapterArea":"West",
        "departmentCode":700,
        "subLedgerCode":0
     },
     {
        "chapterId":38,
        "chapterName":"San Diego",
        "chapterDescription":"910 SD - San Diego",
        "chapterCode":1910,
        "chapterArea":"West",
        "departmentCode":700,
        "subLedgerCode":0
     },
     {
        "chapterId":39,
        "chapterName":"Washington D.C. Area",
        "chapterDescription":"PHIL-UNY-WNY",
        "chapterCode":0,
        "chapterArea":"West",
        "departmentCode":700,
        "subLedgerCode":0
     }
  ]
}