import {UPDATE_BANNER_VALUES} from './majorGiftsTypes';

const initialState = {
    banner1Values:{1:0,2:0,3:0,4:0,5:0},
    banner2Values:{1:0,2:0,3:0,4:0,5:0},
    banner3Values:{1:0,2:0,3:0,4:0,5:0},
    banner4Values:{1:0,2:0,3:0,4:0,5:0},
    banner5Values:{1:0,2:0,3:0,4:0,5:0},
    diffValue:0
}

const majorGiftsReducer = (state = initialState,action)=> {

    switch(action.type) {
        case UPDATE_BANNER_VALUES : return {
            ...state, 
            diffValue:5
        }
        default : return state
    }
}

export default majorGiftsReducer;