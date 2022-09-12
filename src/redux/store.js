import  {createStore} from 'redux';
import majorGiftsReducer from './majorGifts/majorGiftsReducer';

const store = createStore(majorGiftsReducer)

export default store;