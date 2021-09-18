import { combineReducers } from "redux";
import { UserReducer,TokenReducer,LoggedInReducer,LoadingReducer } from "./reducers";

const reducers=combineReducers({
    token:TokenReducer,
    currentUser:UserReducer,
    logged_in:LoggedInReducer,
    loading:LoadingReducer,
})


export default reducers;