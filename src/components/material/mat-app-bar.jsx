import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    alignSelf: 'center',
    fontSize: 22,
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${ drawerWidth }px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: {
    // alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

const MatAppBar = (props) => {

  const classes = useStyles();

  return (
      <AppBar position="fixed" className={ classes.appBar }>
        <Toolbar className={ classes.toolbar }>
          <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={ props.drawerToggle }
              className={ classes.menuButton }
          >
            <MenuIcon/>
          </IconButton>

          <Typography className={ classes.title } variant="h5" noWrap>
            Material-UI
          </Typography>

          <IconButton aria-label="search" color="inherit">
            <SearchIcon/>
          </IconButton>

          <IconButton aria-label="display more actions" edge="end" color="inherit">
            <MoreIcon/>
          </IconButton>

        </Toolbar>
      </AppBar>
  );
};

export default MatAppBar;
