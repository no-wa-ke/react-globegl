import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Code from '@material-ui/icons/Code';
import InstagramIcon from '@material-ui/icons/Instagram';
import WorkIcon from '@material-ui/icons/Work';

import YouTubeIcon from '@material-ui/icons/YouTube';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "50%",
    position: 'absolute',
    maxWidth: 360,
    top: "50%",
    left: "25%",
    transform: "translateY(-50%) translateX(-50%)",
    backgroundColor: theme.palette.background.dark,
    color: "#ffffff"
  },
}));

export default function InsetDividers() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      
      
      <ListItem >
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Blog" className="line" />
      </ListItem>
      
      
      
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Work" className="line" />
      </ListItem>
  
      
      
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <InstagramIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Instagram" className="line"  />
      </ListItem>
    
    
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <YouTubeIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Youtube" className="line"  />
      </ListItem>
    
    </List>
  );
}
// export default Dividers;
