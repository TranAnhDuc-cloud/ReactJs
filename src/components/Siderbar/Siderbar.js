import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
// import Body from '../Body/Body';
import './Siderbar.css';


const Siderbar = (props) =>{
    return(
        <>
            <div className="Siderbar">
            <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem >
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText />
                </ListItem>
            ))}
            </List>
            </div>
            <div className="Content">
                {/* <Body></Body> */}
            </div>
        </>
    );
}

export default Siderbar;

