import { UPDATE_PAGE, UPDATE_CHAPTER,UPDATE_YEAR } from './applicationTypes';

const initialState = {
    page: 'majorGifts',
    year: {
        "yearId": 2,
        "yearName": "2023",
    },
    chapter: {
        "chapterId": 1,
        "chapterName": "Central Texas",
        "chapterDescription": "515 CTX - Central Texas",
        "chapterCode": 1515,
        "chapterArea": "West",
        "departmentCode": 700,
        "subLedgerCode": 0,
        "adminDepartmentCode": 100
    }
}

const applicationReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PAGE:
            return {
                ...state,
                page: action.page
            }
        case UPDATE_CHAPTER:
            return {
                ...state,
                chapter: action.chapter
            }
        case UPDATE_YEAR:
            return {
                ...state,
                year: action.year
            }
        default: return state;
    }
}

export default applicationReducer;