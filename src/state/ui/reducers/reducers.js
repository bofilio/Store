
export const DrawerReducer=(state=false,action)=>{
    switch(action.type){
        case "toggle_drawer":return action.payload;
        default: return state;
    }
}
export const DeleteDialogReducer=(state=false,action)=>{
    switch(action.type){
        case "toggle_delete_dialog":return action.payload;
        default: return state;
    }
}