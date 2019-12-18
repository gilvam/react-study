import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { HashRouter, NavLink } from 'react-router-dom';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import FunctionsIcon from '@material-ui/icons/Functions';
import ClassIcon from '@material-ui/icons/Class';
import BusinessIcon from '@material-ui/icons/Business';
import RvHookupIcon from '@material-ui/icons/RvHookup';
import CodeIcon from '@material-ui/icons/Code';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
}));

const NavStartItem = () => {

  const itens = [
    [
      { name: 'Home', link: '/home', icon: <HomeIcon/> },
      { name: 'ECMAScript 6', link: '/ecmascript6Page', icon: <CodeIcon/> },
      { name: 'Hooks', link: '/hooks', icon: <RvHookupIcon/> }
    ],
    [
      { name: 'Webpack', link: '/webpackPage', icon: <BusinessIcon/> },
      { name: 'metodologia RSCSS', link: '/rscssPage', icon: <ClassIcon/> },
      { name: 'Programação funcional', link: '/programFuncPage', icon: <FunctionsIcon/> },
      { name: 'Lib axios', link: '/libAxiosPage', icon: <LibraryBooksIcon/> },
      { name: 'Auth', link: '/authPage', icon: <ExitToAppIcon/> },
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
