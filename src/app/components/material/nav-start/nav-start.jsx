import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import NavStartList from './nav-start-list';


const drawerWidth = 260;

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    border: 'none',
  },
}));

const NavStart = (props) => {

  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();

  return (
      <nav className={ classes.drawer } aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */ }
        <Hidden smUp implementation="css">
          <Drawer
              container={ container }
              variant="temporary"
              anchor={ theme.direction === 'rtl' ? 'right' : 'left' }
              open={ props.mobileOpen }
              onClose={ props.drawerToggle }
              ModalProps={ { keepMounted: true, } } // Better open performance on mobile.
          >
            <NavStartList drawerToggle={ props.drawerToggle }/>
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer variant="permanent" open classes={ { paper: classes.drawerPaper } }>
            <NavStartList drawerToggle={ props.drawerToggle }/>
          </Drawer>
        </Hidden>
      </nav>

  );
};

NavStart.propTypes = {
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default NavStart;
