import React,{createContext,useState} from 'react'

export const CoverContext=createContext();

export const CoverProvider= (props) => {
    const [visible,SetVisible]=useState(false);
    return (
        <CoverContext.Provider value={[visible,SetVisible]}>
            {props.children}
        </CoverContext.Provider>
    )
}


