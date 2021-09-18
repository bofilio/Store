
export const TokenReducer= (state="",action) => {
    switch(action.type){
        case "update_token":
            return action.payload;
        default:
            return this.state;
    }
}
export const UserReducer= (state=null,action) => {
    switch(action.type){
        case "update_user":
            return action.payload;
        default:
            return this.state;
    }
}


