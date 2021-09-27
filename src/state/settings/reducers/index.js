import { combineReducers } from "redux";
import {currencyReducer} from './reducers'

const reducers=combineReducers({
    currency:currencyReducer,
});

export default reducers;