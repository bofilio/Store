export const toggleDrawer=(value)=>{
    return (dispatch)=>{
        dispatch({
            type:"toggle_drawer",
            payload:value
        })
    }
}