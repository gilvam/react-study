import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import NavStart from './components/material/nav-start/nav-start';
import MatAppBar from './components/material/mat-app-bar';
import MatMain from './components/material/mat-main';
import logoReact from './assets/imgs/logo-react.svg';
import './app.scss';
import Container from '@material-ui/core/Container';

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
  typography: {
    fontSize: 15,
    fontWeight: 200,
    padding: 20,
  }
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

          <div className="app">
            <header className="app-header">
              <img src={ logoReact } className="app-logo" alt="logo"/>
              <p>
                REACT study
              </p>

              <Typography paragraph className={ classes.typography }>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                adipiscing bibendum est ultricies integer quis.
              </Typography>
            </header>
          </div>

        </MatMain>

      </div>
  );
};

export default ResponsiveDrawer;
