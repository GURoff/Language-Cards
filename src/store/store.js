import rootReducer from "../state/reducers/redcuers";
import { createStore } from 'redux';

const store = createStore(rootReducer);

export default store;