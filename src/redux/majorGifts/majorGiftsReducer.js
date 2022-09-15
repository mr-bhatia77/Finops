import {
    UPDATE_BANNER1_VALUES,
    SET_BANNER1_VALUES,
    UPDATE_BANNER2_VALUES,
    SET_BANNER2_VALUES,
    UPDATE_BANNER3_VALUES,
    SET_BANNER3_VALUES,
    UPDATE_BANNER4_VALUES,
    SET_BANNER4_VALUES,
    UPDATE_BANNER5_VALUES,
    SET_BANNER5_VALUES,
    UPDATE_BANNER6_VALUES,
    SET_BANNER6_VALUES,
} from './majorGiftsTypes';

const initialState = {
    banner1Values:{1:0,2:0,3:0,4:0,5:0},
    banner2Values:{1:0,2:0,3:0,4:0,5:0},
    banner3Values:{1:0,2:0,3:0,4:0,5:0},
    banner4Values:{1:0,2:0,3:0,4:0,5:0},
    banner5Values:{1:0,2:0,3:0,4:0,5:0},
    banner5Values:{1:0,2:0,3:0,4:0,5:0},
}

const majorGiftsReducer = (state = initialState,action)=> {

    switch(action.type) {
        case UPDATE_BANNER1_VALUES : return {
            ...state, 
            banner1Values:{...state.banner1Values,
                [action.fieldName]:state.banner1Values[action.fieldName]+action.payload ,
                [action.totalIndex]:state.banner1Values[action.totalIndex]+action.payload 
            },
            fieldName:action.fieldName
        }
        case SET_BANNER1_VALUES : return {
            ...state, 
            banner1Values:action.bannerValues,
        }
        case UPDATE_BANNER2_VALUES : return {
            ...state, 
            banner2Values:{...state.banner2Values,
                [action.fieldName]:state.banner2Values[action.fieldName]+action.payload ,
                [action.totalIndex]:state.banner2Values[action.totalIndex]+action.payload 
            },
            fieldName:action.fieldName
        }
        case SET_BANNER2_VALUES : return {
            ...state, 
            banner2Values:action.bannerValues,
        }
        case UPDATE_BANNER3_VALUES : return {
            ...state, 
            banner3Values:{...state.banner3Values,
                [action.fieldName]:state.banner3Values[action.fieldName]+action.payload ,
                [action.totalIndex]:state.banner3Values[action.totalIndex]+action.payload 
            },
            fieldName:action.fieldName
        }
        case SET_BANNER3_VALUES : return {
            ...state, 
            banner3Values:action.bannerValues,
        }
        case UPDATE_BANNER4_VALUES : return {
            ...state, 
            banner4Values:{...state.banner4Values,
                [action.fieldName]:state.banner4Values[action.fieldName]+action.payload ,
                [action.totalIndex]:state.banner4Values[action.totalIndex]+action.payload 
            },
            fieldName:action.fieldName
        }
        case SET_BANNER4_VALUES : return {
            ...state, 
            banner4Values:action.bannerValues,
        }
        case UPDATE_BANNER5_VALUES : return {
            ...state, 
            banner5Values:{...state.banner5Values,
                [action.fieldName]:state.banner5Values[action.fieldName]+action.payload ,
                [action.totalIndex]:state.banner5Values[action.totalIndex]+action.payload 
            },
            fieldName:action.fieldName
        }
        case SET_BANNER5_VALUES : return {
            ...state, 
            banner5Values:action.bannerValues,
        }
        case UPDATE_BANNER6_VALUES : return {
            ...state, 
            banner6Values:{...state.banner6Values,
                [action.fieldName]:state.banner6Values[action.fieldName]+action.payload ,
                [action.totalIndex]:state.banner6Values[action.totalIndex]+action.payload 
            },
            fieldName:action.fieldName
        }
        case SET_BANNER6_VALUES : return {
            ...state, 
            banner6Values:action.bannerValues,
        }
        default : return state
    }
}

export default majorGiftsReducer;