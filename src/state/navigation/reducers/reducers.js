
export const DrawerReducer=(state=false,action)=>{
    switch(action.type){
        case "toggle_drawer":return action.payload;
        default: return state;
    }
}