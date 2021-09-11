import React,{useState,createContext} from 'react'

export const SideBarContext=createContext();

export const SideBarProvider = (props) => {
    const  [collapsed,setCollapsed] = useState(true);

    return (
       <SideBarContext.Provider value={[collapsed,setCollapsed]}>
           {props.children}
       </SideBarContext.Provider>
    )
}

