import {UPDATE_PAGE,UPDATE_CHAPTER} from './applicationTypes';

const initialState={
    page:'majorGifts',
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
    switch(action.type) {
        case UPDATE_PAGE:
            return {
                ...state,
                page:action.page
        }
        case UPDATE_CHAPTER:
            return {
                ...state,
                chapter: action.chapter
        }
        default : return state; 
    }
}

export default applicationReducer;