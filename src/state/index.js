import { combineReducers } from "redux";
import auth_reducers from './authentication/reducers'
import nav_reducers from './ui/reducers'
import settings_reducers from './settings/reducers'

const reducers=combineReducers({
    auth:auth_reducers,
    nav:nav_reducers,
    settings:settings_reducers,
})

export default reducers;