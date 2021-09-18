import userEvent from "@testing-library/user-event";
import { combineReducers } from "redux";
import { UserReducer,TokenReducer } from "./authReducers";

const reducers=combineReducers({
    token:TokenReducer,
    currentUser:UserReducer,
})


export default reducers;