import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const MatMain = (props) => {
  const classes = useStyles();

  return (
      <main className={ classes.content }>
        <div className={ classes.toolbar }/>

        <React.Fragment>
          { props.children }
        </React.Fragment>

      </main>
  );
};

export default MatMain;
