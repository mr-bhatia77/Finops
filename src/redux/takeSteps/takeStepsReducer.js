import { SET_PAGE_STRUCTURE, UPDATE_PAGE_STRUCTURE } from './takeStepsTypes';
import { takeStepsChapterStructure, takeStepsChapterStructure2 } from '../../constants/constants';
import { updateTotalValues, modifyStructure } from '../../components/common/services/services';

const initialState = {
    pageStructure: modifyStructure(takeStepsChapterStructure)
}

const takeStepsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PAGE_STRUCTURE:
            return {
                pageStructure: modifyStructure(action.pageStructure)
            }
        case UPDATE_PAGE_STRUCTURE:
            return {
                pageStructure: updateTotalValues(state, action.lineItemId, action.diffValue, action.fieldName, action.totalIndex),
            }
        default: return state;
    }
}

export default takeStepsReducer;