import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { navActionCreators } from '../../state/navigation/action-creators';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Hspace from '../toolsBox/Hspace'
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Badge from '@mui/material/Badge';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import SettingsIcon from '@mui/icons-material/Settings';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';


export default function TemporaryDrawer() {
    const opened = useSelector(state => state.nav.opened)
    const dispatch = useDispatch();
    const { toggleDrawer } = bindActionCreators(navActionCreators, dispatch);
    const styles = {
        logobox: {
            height: 180,
            width: "100%",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#caf0f8'
        }
    }
    const top_menu = [
        {
            key: 1,
            label: "Settings",
            icon: <SettingsIcon />,
            url: '/settings',
        },
    ];
    const botttom_menu = [
        
    ];

    const list = () => (
        <Box sx={{ width: 260 }} role="presentation" onClick={() => toggleDrawer(false)} onKeyDown={() => toggleDrawer(false)} >
            <Box sx={styles.logobox}>
                <img src="/static/imgs/logo.png" style={{ width: "25%", height: "auto" }} alt="logo" />
                <Hspace mt={1} />
                <span style={{ color: '#264653' }}>logo</span>
            </Box>

            <List>
                {top_menu.map((element, index) => (
                    <Link to={element.url} style={{textDecoration:'none'}} key={element.key}>
                        <ListItem button >
                            <ListItemIcon>
                                {element.icon}
                            </ListItemIcon>
                            <ListItemText primary={element.label} sx={{color:"#264653"}} /><Badge badgeContent={4} color="default"></Badge>
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Divider />
            <List>
                {botttom_menu.map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <React.Fragment key='left'>
                <Drawer anchor='left' open={opened} onClose={() => toggleDrawer(false)}>
                    {list()}
                </Drawer>
            </React.Fragment>
        </div>
    );
}