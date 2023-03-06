import { createStore } from 'redux';
import signupReducer from './Reducer/Reducer';


const store = createStore(signupReducer);
export default store;
