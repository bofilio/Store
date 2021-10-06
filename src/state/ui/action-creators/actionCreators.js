export const toggleDrawer=(value)=>{
    return (dispatch)=>{
        dispatch({
            type:"toggle_drawer",
            payload:value
        })
    }
}
export const toggleDeleteDialog=(value)=>{
    return (dispatch)=>{
        dispatch({
            type:"toggle_delete_dialog",
            payload:value
        })
    }
}