import * as React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { navActionCreators } from '../../state/navigation/action-creators';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function TemporaryDrawer() {
    const opened = useSelector(state => state.nav.opened)
    const dispatch=useDispatch();
    const {toggleDrawer}=bindActionCreators(navActionCreators,dispatch);
    

    const list = () => (
        <Box sx={{ width: 300 }} role="presentation" onClick={()=>toggleDrawer( false)} onKeyDown={()=>toggleDrawer(false)} >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
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
                <Drawer anchor='left' open={opened} onClose={()=>toggleDrawer( false)}>
                    {list()}
                </Drawer>
            </React.Fragment>
        </div>
    );
}