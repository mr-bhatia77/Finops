import {
    randomId,
} from '@mui/x-data-grid-generator';


export const tableColumns1 = [
    { field: 'name', headerName: '', width: '400', editable: true },
    { field: 'valueEvent1', headerName: '$ (Event 1)', type: 'number', width: 180, editable: true }]

export const tableColumns2 = [
    { field: 'name', headerName: '', width: '400', editable: true },
    { field: 'account', headerName: 'Account', width: '180', editable: true },
    { field: 'valueEvent1', headerName: '$ (Event 1)', type: 'number', width: 180, editable: true }]

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
        value: 23,

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
        name: "Celebration(Total)",
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

export const initialTables = [
    { heading: 'FY19 Budgeted Gross Revenue', subHeadings: ['Budgeted Participant Revenue'], background: 'lightgrey', initialRows: initialRows1, tableColumns: tableColumns1 },
    { heading: '', subHeadings: [], background: 'lightgrey', initialRows: initialRows2, tableColumns: tableColumns1 },
    { heading: 'Participant DDB Expense Total', subHeadings: ['Food & Premises - DDB Code 5040'], background: 'lightgrey', initialRows: initialRows3, tableColumns: tableColumns1 },
    { heading: 'Direct Donor Benefit (DDB) Expenses Total', subHeadings: [], background: 'lightgrey', initialRows: initialRows4, tableColumns: tableColumns2 },
  ]