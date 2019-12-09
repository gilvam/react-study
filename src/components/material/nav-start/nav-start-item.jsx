import React from 'react';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  toolbar: theme.mixins.toolbar,
}));


const NavStartItem = (props) => {

  const itens = [
    [
      { name: 'Inbox', icon: <InboxIcon/> },
      { name: 'Starred', icon: <MailIcon/> }
    ],
    [
      { name: 'All mail', icon: <InboxIcon/> },
      { name: 'Trash', icon: <MailIcon/> }
    ],
  ];
  const classes = useStyles();
  const theme = useTheme();

  return (

      <React.Fragment>
        <div className={ classes.toolbar }/>

        <Divider/>

        <List>
          {
            itens.map((itemContent, i) => {
              return itemContent.map((item, j) => (
                  <React.Fragment key={ `${ i }-${ j }-${ item.name }` }>
                    <ListItem button>
                      <ListItemIcon>{ item.icon }</ListItemIcon>
                      <ListItemText primary={ item.name }/>
                    </ListItem>
                    { itens.length - 1 === j && !(itens.length - 1 === j && itens.length - 1 === i) && <Divider/> }
                  </React.Fragment>
              ));
            })
          }
        </List>
      </React.Fragment>
  );
};


export default NavStartItem;
