import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import NavStart from './components/material/nav-start/nav-start';
import MatAppBar from './components/material/mat-app-bar';
import MatMain from './components/material/mat-main';
import Routes from './routes';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const ResponsiveDrawer = (props) => {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const drawerToggle = (isToggle = !mobileOpen) => {
    setMobileOpen(!mobileOpen);
  };

  return (
      <div className={ classes.root }>
        <CssBaseline/>

        <MatAppBar drawerToggle={ drawerToggle }/>

        <NavStart drawerToggle={ drawerToggle } mobileOpen={ mobileOpen }/>

        <MatMain>

          <Routes />

        </MatMain>

      </div>
  );
};

export default ResponsiveDrawer;
