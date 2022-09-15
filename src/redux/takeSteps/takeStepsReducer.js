import {UPDATE_BANNER} from './takeStepsTypes';

const initialState={
    bannerValues:null
}

const takeStepsReducer = (state=initialState, action) => {
    switch(action.types) {
        case UPDATE_BANNER:
            return {
                ...state,
                bannerValues:1
        }
        default : return state; 
    }
}

export default takeStepsReducer;