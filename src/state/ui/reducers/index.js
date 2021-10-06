import { combineReducers } from "redux";
import {DrawerReducer,DeleteDialogReducer} from './reducers'

const reducers=combineReducers({
    opened:DrawerReducer,
    opened_dialog:DeleteDialogReducer,
});

export default reducers;