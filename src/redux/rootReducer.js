import { combineReducers } from "redux";
import applicationReducer from "./application/applicationReducer";
import majorGiftReducer from './majorGifts/majorGiftsReducer';
import takeStepsReducer from './takeSteps/takeStepsReducer';

const rootReducer = combineReducers({
    majorGifts:majorGiftReducer,
    takeSteps: takeStepsReducer,
    application:applicationReducer
})

export default rootReducer;