export const updateToken=(token)=>{
    return (dispatch)=>{
        dispatch({
            type:"update_token",
            payload:token
        })
    }
}
export const updateUser=(user)=>{
    return (dispatch)=>{
        dispatch({
            type:"update_user",
            payload:user
        })
    }
}
export const toggleLoggedIn=(logged)=>{
    return (dispatch)=>{
        dispatch({
            type:"toggle_logged_in",
            payload:logged
        })
    }
}
export const toggleLoading=(loading)=>{
    return (dispatch)=>{
        dispatch({
            type:"toggle_loading",
            payload:loading
        })
    }
}
