import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    fontSize: 13,
  },
  toolbar: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));
const UserCurrent = (props) => {
  const classes = useStyles();

  return (
      <>
        <AppBar position="relative" className={ classes.appBar }>
          <Toolbar className={ classes.toolbar }>

          </Toolbar>
        </AppBar>
      </>
  );
};

export default UserCurrent;
