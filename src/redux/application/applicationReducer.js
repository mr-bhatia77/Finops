import {UPDATE_PAGE} from './applicationTypes';

const initialState={
    page:'majorGifts'
}

const applicationReducer = (state=initialState, action) => {
    switch(action.types) {
        case UPDATE_PAGE:
            return {
                ...state,
                page:action.page
        }
        default : return state; 
    }
}

export default applicationReducer;