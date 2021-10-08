import { combineReducers } from "redux";
import {DrawerReducer,DeleteDialogReducer, ThemeModeReducer} from './reducers'

const reducers=combineReducers({
    opened:DrawerReducer,
    opened_dialog:DeleteDialogReducer,
    mode:ThemeModeReducer,
});

export default reducers;