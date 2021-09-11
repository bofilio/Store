import React,{useContext} from 'react'
import { SideBarContext } from './SideBarContext';
import { CoverContext } from './CoverContext';

const Cover = () => {
    const [collapsed, setCollapsed] = useContext(SideBarContext);
    const [visible,SetVisible]=useContext(CoverContext);
    const toggleOff = () => {
        setCollapsed(true);
        SetVisible(false);
    };

    const style = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: "rgba(0,0,0,0.4)",
        zIndex: 3,
        display:visible?'block':'none'
    };

    return (
        <div style={style} onClick={toggleOff}/>
    )
}

export default Cover
