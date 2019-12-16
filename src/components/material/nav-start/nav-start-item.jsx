import React from 'react';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles } from '@material-ui/core/styles';
import { HashRouter, NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
}));

const NavStartItem = () => {

  const itens = [
    [
      { name: 'Home', link: '/home', icon: <InboxIcon/> },
      { name: 'ECMAScript 6', link: '/ecmascript6Page', icon: <InboxIcon/> },
      { name: 'Hooks', link: '/hooks', icon: <MailIcon/> }
    ],
    [
      { name: 'Webpack', link: '/webpackPage', icon: <InboxIcon/> },
      { name: 'metodologia RSCSS', link: '/rscssPage', icon: <InboxIcon/> },
      { name: 'Programação funcional', link: '/programFuncPage', icon: <InboxIcon/> },
    ],
  ];
  const classes = useStyles();

  /**
   * O uso de React.forwardRef não será mais necessário para o react-router-dom v6.
   * veja aqui https://github.com/ReactTraining/react-router/issues/6056
   */
  const AdapterLink = React.forwardRef((props, ref) => (
      <NavLink innerRef={ ref } { ...props } />
  ));

  return (
      <React.Fragment>
        <div className={ classes.toolbar }/>

        <Divider/>

        <HashRouter>
          <List>
            {
              itens.map((itemContent, i) => {
                return itemContent.map((item, j) => (
                    <React.Fragment key={ `${ i }-${ j }-${ item.name }` }>
                      <ListItem button component={ AdapterLink } to={ item.link }>
                        <ListItemIcon>{ item.icon }</ListItemIcon>
                        <ListItemText primary={ item.name }/>
                      </ListItem>
                      { itens.length - 1 === j && !(itens.length - 1 === j && itens.length - 1 === i) && <Divider/> }
                    </React.Fragment>
                ));
              })
            }
          </List>
        </HashRouter>

      </React.Fragment>
  );
};

export default NavStartItem;
