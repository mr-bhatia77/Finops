import { SET_PAGE_STRUCTURE, UPDATE_PAGE_STRUCTURE, FREEZE_TEMPLATE } from './takeStepsTypes';
import { takeStepsChapterStructure, takeStepsChapterStructure2 } from '../../constants/constants';
import { updateTotalValues, modifyStructure } from '../../components/common/services/services';

const initialState = {
    pageStructure: modifyStructure(takeStepsChapterStructure),
    isFreezed: false
}

const takeStepsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PAGE_STRUCTURE:
            return {
                ...state,
                pageStructure: modifyStructure(action.pageStructure)
            }
        case UPDATE_PAGE_STRUCTURE:
            return {
                ...state,
                pageStructure: updateTotalValues(state, action.lineItemId, action.diffValue, action.fieldName, action.totalIndex),
            }
        case FREEZE_TEMPLATE:
            return {
                ...state,
                isFreezed: !state.isFreezed
            }
        default: return state;
    }
}

export default takeStepsReducer;