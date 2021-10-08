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
export const toggleThemeMode=(value)=>{
    return (dispatch)=>{
        dispatch({
            type:"toggle_theme_mode",
            payload:value
        })
    }
}