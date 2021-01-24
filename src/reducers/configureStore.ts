import { combineReducers, createStore } from 'redux';
import countReducer from './count/countReducer';

const rootReducer = combineReducers({ countReducer });
const store = createStore(rootReducer);
export type storeType = ReturnType<typeof rootReducer>
export default store;
