import {UPDATE_BANNER,UPDATE_PAGE_STRUCTURE} from './takeStepsTypes';
import {takeStepsChapterStructure,takeStepsChapterStructure2} from '../../constants/constants'

const initialState={
    bannerValues:null,
    pageStructure:takeStepsChapterStructure
}

const takeStepsReducer = (state=initialState, action) => {
    switch(action.type) {
        case UPDATE_BANNER:
            return {
                ...state,
                bannerValues:1
        }
        case UPDATE_PAGE_STRUCTURE:
            return {
                pageStructure:takeStepsChapterStructure2,
                bannerValues:2
        }
        default : return state; 
    }
}

export default takeStepsReducer;