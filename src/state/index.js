import { combineReducers } from "redux";
import auth_reducers from './authentication/reducers/index'
import nav_reducers from './navigation/reducers/index'

const reducers=combineReducers({
    auth:auth_reducers,
    nav:nav_reducers
})

export default reducers;