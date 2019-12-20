import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import Collapse from '@material-ui/core/Collapse';
import { makeStyles } from '@material-ui/core';

const NavStartListItem = (props) => {
  const classes = makeStyles(theme => ({
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }))();

  const [openCollapse, setOpenCollapse] = React.useState(false);

  const handleClick = () => {
    setOpenCollapse(!openCollapse);
  };


  /**
   * O uso de React.forwardRef não será mais necessário para o react-router-dom v6.
   * https://github.com/ReactTraining/react-router/issues/6056
   */
  const AdapterLink = React.forwardRef((props, ref) => (
      <NavLink innerRef={ ref } { ...props } replace />
  ));

  return (
      <React.Fragment>
        { !props.children
            ?
            <ListItem button component={ AdapterLink } to={ props.link }
                      className={ props.isCollapsed ? classes.nested : null }
            >
              <ListItemIcon>{ props.icon }</ListItemIcon>
              <ListItemText primary={ props.name }/>
            </ListItem>
            :
            <>
              <ListItem button onClick={ handleClick }>
                <ListItemIcon>{ props.icon }</ListItemIcon>
                <ListItemText primary={ props.name }/>
                { openCollapse ? <ExpandLess/> : <ExpandMore/> }
              </ListItem>

              <Collapse in={ openCollapse } timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {
                    props.children.map((item, i) => (
                        <React.Fragment key={ `${ i }-${ item.name }` }>
                          <NavStartListItem { ...item } isCollapsed={ true }/>
                        </React.Fragment>
                    ))
                  }

                </List>
              </Collapse>
            </>
        }

      </React.Fragment>
  );
};

export default NavStartListItem;
