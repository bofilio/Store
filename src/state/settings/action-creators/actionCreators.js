export const changeCurrency=(value)=>{
    return (dispatch)=>{
        dispatch({
            type:"change_currency",
            payload:value
        })
    }
}