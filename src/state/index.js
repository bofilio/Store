import { combineReducers } from "redux";
import auth_reducers from './authentication/reducers'
import ui_reducers from './ui/reducers'
import settings_reducers from './settings/reducers'

const reducers=combineReducers({
    auth:auth_reducers,
    ui:ui_reducers,
    settings:settings_reducers,
})

export default reducers;