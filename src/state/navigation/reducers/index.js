import { combineReducers } from "redux";
import {DrawerReducer} from './reducers'

const reducers=combineReducers({
    opened:DrawerReducer,
});

export default reducers;