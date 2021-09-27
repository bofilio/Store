import { getDefaultCurrency } from "../../../firebase/apis/currency";

export const currencyReducer=(state="USD",action)=>{
    switch(action.type){
        case "change_currency":return action.payload;
        default: return state;
    }
}