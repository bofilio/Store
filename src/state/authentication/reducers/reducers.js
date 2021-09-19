
export const TokenReducer= (state="",action) => {
    switch(action.type){
        case "update_token":
            return action.payload;
        default:
            return state;
    }
}
export const UserReducer= (state=null,action) => {
    switch(action.type){
        case "update_user":
            return action.payload;
        default:
            return state;
    }
}
export const LoggedInReducer= (state=false,action) => {
    switch(action.type){
        case "toggle_logged_in":
            return action.payload;
        default:
            return state;
    }
}
export const LoadingReducer= (state=false,action) => {
    switch(action.type){
        case "toggle_loading":
            return action.payload;
        default:
            return state;
    }
}

